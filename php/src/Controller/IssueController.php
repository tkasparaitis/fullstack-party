<?php
namespace App\Controller;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Method;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Template;
use FOS\RestBundle\Controller\Annotations\Get;
use FOS\RestBundle\Controller\Annotations\Post;
use FOS\RestBundle\View\View;
use App\Entity\Issue;
use Symfony\Component\Serializer\Serializer;
use Symfony\Component\Serializer\Encoder\JsonEncoder;
use Symfony\Component\Serializer\Normalizer\ObjectNormalizer;
/**
 * Brand controller.
 *
 * @Route("/issue")
 */
class IssueController extends Controller
{
    /**
     * Lists active Issues.
     * @Get("/{page}")
     *
     * @return array
     */
    public function getIssueByPage($page)
    {
        $repository = $this->getDoctrine()->getRepository(Issue::class);

        $issues = $repository->findBy(array('status' => 1), array(), 25, ($page*25));

        return new JsonResponse($issues, JsonResponse::HTTP_OK);
    }
    /**
     * Lists one Issue.
     * @Get("/entry/{issue}")
     *
     * @return array
     */
    public function getIssue($issue)
    {
        $repository = $this->getDoctrine()->getRepository(Issue::class);

        $issue = $repository->find($issue);

        return new JsonResponse($issue, JsonResponse::HTTP_OK);
    }
    /**
     * Get Issue info.
     * @Get("/db/info")
     *
     * @return array
     */
    public function getIssueInfo()
    {
        $repository = $this->getDoctrine()->getRepository(Issue::class);

        $allissue = count($repository->findAll());
        $openissue = count($repository->findBy(array('status' => 1)));


        return new JsonResponse(["total" => $allissue, "open" => $openissue], JsonResponse::HTTP_OK);

    }

}