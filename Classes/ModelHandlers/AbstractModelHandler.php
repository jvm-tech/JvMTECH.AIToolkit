<?php
namespace JvMTECH\AIToolkit\ModelHandlers;

use JvMTECH\AIToolkit\Traits\RequestArgumentsTrait;
use Neos\Flow\Mvc\ActionRequest;
use Neos\Media\Domain\Model\Asset;
use Neos\ContentRepository\Core\Projection\ContentGraph\Node;
use JvMTECH\AIToolkit\ModelConnectors\ModelConnectorFactory;
use Psr\Log\LoggerInterface;

abstract class AbstractModelHandler implements ModelHandlerInterface
{
    use RequestArgumentsTrait;

    protected ModelConnectorFactory $modelConnectorFactory;
    protected ActionRequest $request;
    protected LoggerInterface $logger;
    protected array $defaultOptions;
    protected array $overrideOptions;
    protected array $promptVariables;

    public function __construct(ModelConnectorFactory $modelConnectorFactory, ActionRequest $request, LoggerInterface $logger, array $defaultOptions = [], array $overrideOptions = [], array $promptVariables = [])
    {
        $this->modelConnectorFactory = $modelConnectorFactory;
        $this->request = $request;
        $this->logger = $logger;
        $this->defaultOptions = $defaultOptions;
        $this->overrideOptions = $overrideOptions;
        $this->promptVariables = $promptVariables;
    }

    public function execute(): array
    {
        return [];
    }

    protected function buildPrompt(string $template, array $data): string
    {
        $prompt = $template;
        foreach ($data as $key => $value) {
            if (!is_string($key)) {
                continue;
            }

            if (is_object($value) && method_exists($value, '__toString')) {
                $value = (string)$value;
            }

            $prompt = str_replace('{' . $key . '}', is_string($value) ? $value : '', $prompt);
        }

        $prompt = preg_replace('/\{.*?}/', '', $prompt);

        return $prompt;
    }

    protected function getNodePropertiesWithTransientValues(Node $node, array $transientValues = []): array
    {
        $nodeProperties = [];

        $castValue = function ($value) use (&$castValue) {
            try {
                if ($value instanceof Node) {
                    return $value->aggregateId;
                }

                if ($value instanceof Asset) {
                    return $value->getIdentifier();
                } elseif (is_array($value)) {
                    return join(',', array_map($castValue, $value));
                } elseif (is_bool($value)) {
                    return $value ? 'true' : 'false';
                }

                return (string)$value;

            } catch (\Exception $e) {
                return 'object';
            }
        };

        foreach ($node->properties as $propertyName => $propertyValue) {
            $nodeProperties['node.properties.' . $propertyName] = $castValue($propertyValue);
        }
        foreach ($transientValues as $transientKey => $transientValue) {
            $nodeProperties['node.properties.' . $transientKey] = $castValue(is_array($transientValue) && isset($transientValue['value']) ? $transientValue['value'] : $transientValue);
        }

        return $nodeProperties;
    }

    protected function forceMaxLength($result, &$invalidResults, int $forceMaxLength, int $forceMaxLengthAttempts, string $forceMaxLengthCut, string $modelPreset, &$logDto) {
        try {
            if ($forceMaxLength > 0 && $forceMaxLengthAttempts > 0 && mb_strlen($result) > $forceMaxLength) {
                $invalidResults[] = $result;
                $usedMaxLengthAttempts = 0;
                while (mb_strlen($result) > $forceMaxLength && $usedMaxLengthAttempts < $forceMaxLengthAttempts) {
                    $currentValue = $result;
                    $prompt = 'Make the following text shorter (to a maximum of ' . $forceMaxLength . ' characters) and only return the shorter text: ' . $result;

                    $prediction = $this->modelConnectorFactory->create($modelPreset)->predict($prompt);
                    $result = $prediction->getPrediction();

                    $logDto->withPrompt(new \DateTime(), 'forceMaxLength', $modelPreset, $prompt, $currentValue, $result, $prediction?->getInputTokens() ?? -1, $prediction?->getOutputTokens() ?? -1);

                    $invalidResults[] = $result;
                    $usedMaxLengthAttempts++;
                }
            }

            if ($forceMaxLength > 0 && $forceMaxLengthCut && mb_strlen($result) > $forceMaxLength) {
                if ($forceMaxLengthCut === 'strict') {
                    $result = mb_substr($result, 0, $forceMaxLength);
                } else {
                    if ($forceMaxLengthCut === 'word') {
                        $invalidResults[] = $result;
                        // take the string $result and cut it to the last word before the $forceMaxLength and remove everything after that including the word and punctuation
                        $result = preg_replace('/\s+?(\S+)?$/', '', mb_substr($result, 0, $forceMaxLength));
                        // remove trailing punctuation
                        $result = preg_replace('/[.,;:!?]$/', '', $result);
                    }
                }
            }
        } catch (\Exception) {
            // ignore, just return the input result value
        }

        return $result;
    }
}
