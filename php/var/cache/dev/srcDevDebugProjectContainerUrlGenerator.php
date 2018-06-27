<?php

use Symfony\Component\Routing\RequestContext;
use Symfony\Component\Routing\Exception\RouteNotFoundException;
use Psr\Log\LoggerInterface;

/**
 * This class has been auto-generated
 * by the Symfony Routing Component.
 */
class srcDevDebugProjectContainerUrlGenerator extends Symfony\Component\Routing\Generator\UrlGenerator
{
    private static $declaredRoutes;
    private $defaultLocale;

    public function __construct(RequestContext $context, LoggerInterface $logger = null, string $defaultLocale = null)
    {
        $this->context = $context;
        $this->logger = $logger;
        $this->defaultLocale = $defaultLocale;
        if (null === self::$declaredRoutes) {
            self::$declaredRoutes = array(
        'app_comment_getcommentbyissue' => array(array('issue'), array('_controller' => 'App\\Controller\\CommentController::getCommentByIssue'), array(), array(array('variable', '/', '[^/]++', 'issue'), array('text', '/comment')), array(), array()),
        'app_issue_getissuebypage' => array(array('page'), array('_controller' => 'App\\Controller\\IssueController::getIssueByPage'), array(), array(array('variable', '/', '[^/]++', 'page'), array('text', '/issue')), array(), array()),
        'app_issue_getissue' => array(array('issue'), array('_controller' => 'App\\Controller\\IssueController::getIssue'), array(), array(array('variable', '/', '[^/]++', 'issue'), array('text', '/issue/entry')), array(), array()),
        'app_issue_getissueinfo' => array(array(), array('_controller' => 'App\\Controller\\IssueController::getIssueInfo'), array(), array(array('text', '/issue/db/info')), array(), array()),
        'login' => array(array(), array('_controller' => 'App\\Controller\\SecurityController::loginAction'), array(), array(array('text', '/api/auth/login')), array(), array()),
    );
        }
    }

    public function generate($name, $parameters = array(), $referenceType = self::ABSOLUTE_PATH)
    {
        $locale = $parameters['_locale']
            ?? $this->context->getParameter('_locale')
            ?: $this->defaultLocale;

        if (null !== $locale && (self::$declaredRoutes[$name.'.'.$locale][1]['_canonical_route'] ?? null) === $name) {
            unset($parameters['_locale']);
            $name .= '.'.$locale;
        } elseif (!isset(self::$declaredRoutes[$name])) {
            throw new RouteNotFoundException(sprintf('Unable to generate a URL for the named route "%s" as such route does not exist.', $name));
        }

        list($variables, $defaults, $requirements, $tokens, $hostTokens, $requiredSchemes) = self::$declaredRoutes[$name];

        return $this->doGenerate($variables, $defaults, $requirements, $tokens, $parameters, $name, $referenceType, $hostTokens, $requiredSchemes);
    }
}
