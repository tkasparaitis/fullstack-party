<?php

// This file has been auto-generated by the Symfony Dependency Injection Component for internal use.

if (\class_exists(\ContainerRZbgHEG\srcDevDebugProjectContainer::class, false)) {
    // no-op
} elseif (!include __DIR__.'/ContainerRZbgHEG/srcDevDebugProjectContainer.php') {
    touch(__DIR__.'/ContainerRZbgHEG.legacy');

    return;
}

if (!\class_exists(srcDevDebugProjectContainer::class, false)) {
    \class_alias(\ContainerRZbgHEG\srcDevDebugProjectContainer::class, srcDevDebugProjectContainer::class, false);
}

return new \ContainerRZbgHEG\srcDevDebugProjectContainer(array(
    'container.build_hash' => 'RZbgHEG',
    'container.build_id' => '0c29d9b4',
    'container.build_time' => 1530079536,
), __DIR__.\DIRECTORY_SEPARATOR.'ContainerRZbgHEG');
