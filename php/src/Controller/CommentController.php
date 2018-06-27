<?php
namespace App\Controller;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Method;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Template;
use FOS\RestBundle\Controller\Annotations\Get;
use FOS\RestBundle\Controller\Annotations\Post;
use FOS\RestBundle\View\View;
use App\Entity\Comment;
/**
 * Brand controller.
 *
 * @Route("/comment")
 */
class CommentController extends Controller
{
    /**
     * Lists active Issues.
     * @Get("/{issue}")
     *
     * @return array
     */
    public function getCommentByIssue($issue)
    {
        $repository = $this->getDoctrine()->getRepository(Comment::class);

        $comments = $repository->findBy(array('issue' => $comments), array());

        return new JsonResponse($comments, JsonResponse::HTTP_OK);

    }
}