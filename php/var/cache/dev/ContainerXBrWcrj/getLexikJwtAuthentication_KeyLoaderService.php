<?php

use Symfony\Component\DependencyInjection\Argument\RewindableGenerator;
use Symfony\Component\DependencyInjection\Exception\RuntimeException;

// This file has been auto-generated by the Symfony Dependency Injection Component for internal use.
// Returns the public 'lexik_jwt_authentication.key_loader' shared service.

include_once $this->targetDirs[3].'/vendor/lexik/jwt-authentication-bundle/Services/KeyLoader/KeyLoaderInterface.php';
include_once $this->targetDirs[3].'/vendor/lexik/jwt-authentication-bundle/Services/KeyLoader/AbstractKeyLoader.php';
include_once $this->targetDirs[3].'/vendor/lexik/jwt-authentication-bundle/Services/KeyLoader/KeyDumperInterface.php';
include_once $this->targetDirs[3].'/vendor/lexik/jwt-authentication-bundle/Services/KeyLoader/OpenSSLKeyLoader.php';

return $this->services['lexik_jwt_authentication.key_loader'] = new \Lexik\Bundle\JWTAuthenticationBundle\Services\KeyLoader\OpenSSLKeyLoader(($this->targetDirs[3].'/'.$this->getEnv('string:JWT_PRIVATE_KEY_PATH')), ($this->targetDirs[3].'/'.$this->getEnv('string:JWT_PUBLIC_KEY_PATH')), $this->getEnv('JWT_PASSPHRASE'));
