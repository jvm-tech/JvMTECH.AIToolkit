<?php
namespace JvMTECH\AIToolkit\Controller;

use Neos\ContentRepository\Core\Projection\ContentGraph\Node;
use Neos\ContentRepositoryRegistry\ContentRepositoryRegistry;
use Neos\Eel\FlowQuery\FlowQuery;
use Neos\Flow\Annotations as Flow;
use Neos\Flow\Mvc\Controller\ActionController;
use Neos\Flow\Mvc\Exception\StopActionException;
use Neos\Flow\Property\PropertyMapper;
use Neos\Neos\FrontendRouting\SiteDetection\SiteDetectionResult;

class PageController extends ActionController
{
    #[Flow\Inject(lazy: false)]
    protected ContentRepositoryRegistry $contentRepositoryRegistry;

    /**
     * Neos 9 compatibility: Node is passed as NodeAddress JSON string
     * This action finds the document node and renders its preview
     *
     * @param string $node NodeAddress as JSON string
     * @throws StopActionException
     */
    public function renderPreviewPageAction(string $node): void
    {
        // Convert NodeAddress JSON string to Node object
        $propertyMapper = $this->objectManager->get(PropertyMapper::class);
        $contentNode = $propertyMapper->convert($node, Node::class);

        // Find the document node (content nodes need their parent document)
        $currentContentRepositoryId = SiteDetectionResult::fromRequest($this->request->getHttpRequest())->contentRepositoryId;
        $currentContentRepository = $this->contentRepositoryRegistry->get($currentContentRepositoryId);

        $q = new FlowQuery([$contentNode]);
        $documentNode = $currentContentRepository->getNodeTypeManager()
            ->getNodeType($contentNode->nodeTypeName)
            ->isOfType('Neos.Neos:Document')
                ? $contentNode
                : $q->closest('[instanceof Neos.Neos:Document]')->get(0);

        // Forward to preview with document node
        $this->forward('preview', 'Frontend\Node', 'Neos.Neos', [
            'node' => $documentNode,
        ]);
    }
}