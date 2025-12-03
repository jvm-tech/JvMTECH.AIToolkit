<?php
namespace JvMTECH\AIToolkit\Logger;

class LogDto
{
    private array $metaData = [];
    private array $prompts = [];

    public static function create(): LogDto
    {
        return new LogDto();
    }

    public function withAccountIdentifier(string $accountIdentifier): LogDto
    {
        $this->metaData['accountIdentifier'] = $accountIdentifier;

        return $this;
    }

    public function withNodeAggregateId(string $nodeAggregateId): LogDto
    {
        $this->metaData['nodeIdentifier'] = $nodeAggregateId;

        return $this;
    }

    public function withNodeTypeName(string $nodeTypeName): LogDto
    {
        $this->metaData['nodeTypeName'] = $nodeTypeName;

        return $this;
    }

    public function withPropertyName(string $propertyName): LogDto
    {
        $this->metaData['propertyName'] = $propertyName;

        return $this;
    }

    public function withCustomValue(string $valueName, string $value): LogDto
    {
        $this->metaData[$valueName] = $value;

        return $this;
    }

    public function withPrompt(
        \DateTime $dateTime,
        string $modelHandler,
        string $modelPreset,
        string $prompt,
        string $valueBefore = '',
        string $valueAfter = '',
        int $inputTokens = -1,
        int $outputTokens = -1,
    ): LogDto
    {
        $this->prompts[] = [
            'dateTime' => $dateTime,
            'modelHandler' => $modelHandler,
            'modelPreset' => $modelPreset,
            'prompt' => $prompt,
            'valueBefore' => $valueBefore,
            'valueAfter' => $valueAfter,
            'inputTokens' => $inputTokens,
            'outputTokens' => $outputTokens,
        ];

        return $this;
    }

    public function toArray(): array
    {
        return [
            'metaData' => $this->metaData,
            'prompts' => $this->prompts,
        ];
    }
}
