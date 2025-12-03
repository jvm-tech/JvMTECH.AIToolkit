<?php
namespace JvMTECH\AIToolkit\ModelHandlers;

use Neos\Flow\Annotations as Flow;
use JvMTECH\AIToolkit\Logger\LogDto;

class ImageToTextModelHandler extends AbstractModelHandler
{
        public function execute(): array
    {
        $requestOptions = $this->getRequestArguments([
            'nodeContextPath' => null,
            'currentValue' => '',
            'transientValues' => [],
            'modelHandler' => 'imageToText',
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
            $prediction = $this->modelConnectorFactory->create($options['modelPreset'])->predict($prompt, [
                $this->promptVariables['asset']->getThumbnail(600, 600)->getResource()
            ]);
            $result = $prediction->getPrediction();
        }

        $logDto = LogDto::create()
            ->withAccountIdentifier($options['accountIdentifier'])
            ->withNodeIdentifier($options['node']->aggregateId->value)
            ->withNodeTypeName($options['node']->nodeTypeName->value)
            ->withPropertyName('')
            ->withCustomValue('assetIdentifier', $this->promptVariables['asset']->getIdentifier())
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
            $resultValue['assetIdentifier'] = $this->promptVariables['asset']->getIdentifier();
        }

        return $resultValue;
    }
}
