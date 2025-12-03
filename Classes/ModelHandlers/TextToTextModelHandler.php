<?php
namespace JvMTECH\AIToolkit\ModelHandlers;

use JvMTECH\AIToolkit\Logger\LogDto;
use Neos\ContentRepository\Core\Projection\ContentGraph\Node;
use Neos\Flow\Annotations as Flow;

class TextToTextModelHandler extends AbstractModelHandler
{
    public function execute(): array
    {
        $requestOptions = $this->getRequestArguments([
            'nodeContextPath' => null,
            'inputContent' => '',
            'nodeUri' => null,
            'currentValue' => '',
            'transientValues' => [],
            'modelHandler' => 'textToText',
            'modelPreset' => 'default',
            'promptTemplate' => '',
            'forceMaxLength' => 0,
            'forceMaxLengthAttempts' => 0,
            'forceMaxLengthCut' => '',
            'dummy' => false,
            'debug' => false,
        ]);

        $options = array_merge($this->defaultOptions, $requestOptions, $this->overrideOptions);

        $prompt = $this->buildPrompt($options['promptTemplate'], array_merge(
            $this->promptVariables,
            $this->getNodePropertiesWithTransientValues($options['node'], $options['transientValues'])
        ));

        $prediction = null;
        if ($options['dummy']) {
            $result = '[dummy] ' . $options['currentValue'];
        } else {
            $prediction = $this->modelConnectorFactory->create($options['modelPreset'])->predict($prompt);
            $result = $prediction->getPrediction();
        }

        $logDto = LogDto::create()
            ->withAccountIdentifier($options['accountIdentifier'])
            ->withNodeIdentifier($options['node']->aggregateId->value)
            ->withNodeTypeName($options['node']->nodeTypeName->value)
            ->withPropertyName('')
            ->withPrompt(new \DateTime(), $options['modelHandler'], $options['modelPreset'], $prompt, $options['currentValue'], $result, $prediction?->getInputTokens() ?? -1, $prediction?->getOutputTokens() ?? -1);

        $invalidResults = [];
        $result = $this->forceMaxLength($result, $invalidResults, $options['forceMaxLength'], $options['forceMaxLengthAttempts'], $options['forceMaxLengthCut'], $options['modelPreset'], $logDto);

        $this->logger->info('LogDto', $logDto->toArray());

        $resultValue = [
            'newValue' => $result,
            'status' => true,
        ];

        if ($options['debug']) {
            $resultValue['invalidResults'] = $invalidResults;
            $resultValue['prompt'] = $prompt;
        }

        return $resultValue;
    }
}
