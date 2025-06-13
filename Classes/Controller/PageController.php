<?php
namespace JvMTECH\AIToolkit\Controller;

use Neos\Flow\Annotations as Flow;
use Neos\ContentRepository\Core\Projection\ContentGraph\Node;
use Neos\Flow\Mvc\Controller\ActionController;
use Neos\Flow\Mvc\Exception\StopActionException;

class PageController extends ActionController
{
    /**
     * @param Node $node
     * @throws StopActionException
     */
    public function renderPreviewPageAction(Node $node): void
    {
        $this->forward('preview', 'Frontend\Node', 'Neos.Neos', [
            'node' => $node,
        ]);
    }
}
