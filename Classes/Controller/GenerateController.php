<?php
namespace JvMTECH\AIToolkit\Controller;

use Neos\Flow\Annotations as Flow;
use JvMTECH\AIToolkit\Traits\ConvertToMarkdownTrait;
use Neos\Eel\CompilingEvaluator;
use Neos\Eel\FlowQuery\FlowQuery;
use Neos\Eel\Utility;
use GuzzleHttp\Client;
use JvMTECH\AIToolkit\ModelHandlers\ModelHandlerFactory;
use JvMTECH\AIToolkit\ModelConnectors\ModelConnectorFactory;
use JvMTECH\AIToolkit\Traits\RequestArgumentsTrait;
use Neos\ContentRepositoryRegistry\ContentRepositoryRegistry;
use Neos\ContentRepository\Core\Projection\ContentGraph\Node;
use Neos\Flow\Mvc\Controller\ActionController;
use Neos\Flow\Mvc\View\JsonView;
use Neos\Flow\Property\Exception;
use Neos\Flow\Property\PropertyMapper;
use Neos\Flow\Security\Context as SecurityContext;
use Neos\Media\Domain\Repository\AssetRepository;
use Neos\Neos\FrontendRouting\SiteDetection\SiteDetectionResult;

class GenerateController extends ActionController
{
    use RequestArgumentsTrait;
    use ConvertToMarkdownTrait;

    protected $defaultViewObjectName = JsonView::class;

    #[Flow\InjectConfiguration(package: 'JvMTECH.AIToolkit')]
    protected array $configuration;

    #[Flow\Inject()]
    protected AssetRepository $assetRepository;

    #[Flow\Inject()]
    protected SecurityContext $securityContext;

    #[Flow\Inject]
    protected ModelHandlerFactory $modelHandlerFactory;

    #[Flow\Inject]
    protected ModelConnectorFactory $modelConnectorFactory;

    /**
     * @Flow\Inject(lazy=false)
     * @var CompilingEvaluator
     */
    protected $eelEvaluator;

    /**
     * @Flow\InjectConfiguration(package="Neos.Fusion", path="defaultContext")
     * @var array
     */
    protected $fusionDefaultEelContext;

    /**
     * @Flow\InjectConfiguration(path="additionalDefaultEelContext")
     * @var array
     */
    protected $additionalEelDefaultContext;

    /**
     * @Flow\Inject(lazy=false)
     * @var ContentRepositoryRegistry
     */
    protected $contentRepositoryRegistry;

    public function executeAction(string $handlerName = '')
    {
        // Get base variables to build eel context

        $node = null;
        $q = null;
        if ($this->getRequestArgument('nodeContextPath')) {
            /** @var Node $node */
            $node = $this->getNodeWithContextPath($this->getRequestArgument('nodeContextPath'));
            $q = new FlowQuery([$node]);
        }

        $documentHtml = null;
        if ($this->getRequestArgument('nodeUri')) {
            $documentHtml = $this->fetchDocumentHtml($this->getRequestArgument('nodeUri'), $this->request->getHttpRequest()->getCookieParams());
        }

        $documentNode = null;
        if ($node) {
            $currentContentRepositoryId = SiteDetectionResult::fromRequest($this->request->getHttpRequest())->contentRepositoryId;
            $currentContentRepository = $this->contentRepositoryRegistry->get($currentContentRepositoryId);
            $documentNode = $currentContentRepository->getNodeTypeManager()->getNodeType($node->nodeTypeName)->isOfType('Neos.Neos:Document') ? $node : $q->closest('[instanceof Neos.Neos:Document]')->get(0);
        }

        $site = $q ? $q->parents('[instanceof Neos.Neos:Document]')->last()->get(0) : null;

        $eelContextVariables = [
            'documentHtml' => $documentHtml,
            'documentNode' => $documentNode,
            'node' => $node ?? null,
            'site' => $site,
        ];

        // Add transient values to eel context

        foreach ($this->getRequestArgument('transientValues') ?? [] as $key => $value) {
            if (isset($value['value']['__identity'])) {
                $value = $this->assetRepository->findByIdentifier($value['value']['__identity']);
            } elseif (is_array($value) && isset($value['value'])) {
                $value = $value['value'];
            }
            $eelContextVariables['transientValues'][$key] = $value;
            $eelContextVariables['transientValues.' . $key] = $value;
        }

        // Evaluate prompt variables

        $promptVariables = [];

        foreach ($this->getRequestArgument('promptVariables') ?? [] as $promptVariableName => $eelExpression) {
            $eelExpression = trim($eelExpression);

            if (strpos($eelExpression, '${') !== 0) {
                $promptVariables[$promptVariableName] = $eelExpression;
                continue;
            }

            $eelResult = Utility::evaluateEelExpression(
                $eelExpression,
                $this->eelEvaluator,
                $eelContextVariables,
                array_merge($this->fusionDefaultEelContext, $this->additionalEelDefaultContext)
            );
            if ($eelResult) {
                $promptVariables[$promptVariableName] = $eelResult;
            }
        }

        $overrideOptions = [
            'accountIdentifier' => $this->securityContext->getAccount()->getAccountIdentifier(),
        ];

        $promptVariables = array_merge($promptVariables, $overrideOptions);

        $overrideOptions = array_merge($eelContextVariables, $overrideOptions);

        // Execute model handler

        try {
            $modelHandler = $this->modelHandlerFactory->create($handlerName, $this->modelConnectorFactory,
                $this->request, $this->logger, $overrideOptions, $promptVariables);
            $result = $modelHandler->execute();
        } catch (\Exception $e) {
            $result = [
                'status' => false,
                'error' => $e->getMessage(),
            ];
        }

        $this->view->assign('value', $result);
    }

    /**
     * @throws Exception
     * @throws \Neos\Flow\Security\Exception
     */
    protected function getNodeWithContextPath($contextPath)
    {
        /* @var $propertyMapper \Neos\Flow\Property\PropertyMapper */
        $propertyMapper = $this->objectManager->get(PropertyMapper::class);
        return $propertyMapper->convert($contextPath, Node::class);
    }

    /**
     * @throws \GuzzleHttp\Exception\GuzzleException
     */
    protected function fetchDocumentHtml($url, $cookies): string
    {
        $client = new Client(
            array_merge(
                [
                    'cookies' => true
                ],
                $this->configuration['backendRequest']['auth'] ? ['auth' => $this->configuration['backendRequest']['auth']] : []
            )
        );

        $response = $client->get($url, [
            'headers' => [
                'Cookie' => implode('; ', array_map(fn($key, $value) => "$key=$value", array_keys($cookies), $cookies)),
            ]
        ]);

        $html = $response->getBody()->getContents();

        // remove everything in <nav> and <header>
        $html = preg_replace('/<nav.*<\/nav>/s', '', $html);
        // remove last <footer> and everything after it
        $html = preg_replace('/<footer>.*<\/footer>/s', '', $html);
        // remove <form> and everything in it
        $html = preg_replace('/<form.*<\/form>/s', '', $html);

        return $html;
    }

    /**
     * @Flow\Signal
     * @param array $actionInfo
     * @return void
     */
    protected function emitGenerated(array $actionInfo): void
    {
    }
}
