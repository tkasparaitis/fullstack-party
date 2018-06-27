<?php
namespace App\Controller;
use Symfony\Component\HttpFoundation\JsonResponse;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Request;
use App\Entity\User;

class SecurityController extends Controller
{
/**
* @Route("/api/auth/login", name="login")
*/
public function loginAction(Request $request)
{
    $email = $request->get('email');
    $password = $request->get('password');
    $repository = $this->getDoctrine()->getRepository(User::class);

    if(!$email){
        return new JsonResponse(['auth'=> False, 'message' => "Bad info."]);}


    $user = $repository->findBy(array('email' => $email), array())[0];


    $encoderService = $this->container->get('security.password_encoder');

    $match = $encoderService->isPasswordValid($user, $password);

    $jwtManager = $this->container->get('lexik_jwt_authentication.jwt_manager');


    if($match) {

        return new JsonResponse(['auth'=> True, 'access_token' => $jwtManager->create($user)], JsonResponse::HTTP_OK);

    } else {

        return new JsonResponse(['auth'=> False, 'message' => "Bad info."], JsonResponse::HTTP_I_AM_A_TEAPOT);}
}
}