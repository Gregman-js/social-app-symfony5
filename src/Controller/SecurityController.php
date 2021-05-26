<?php

namespace App\Controller;

use App\Entity\User;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class SecurityController extends AbstractController
{
    /**
     * @Route("/login", name="app_login", priority="2")
     */
    public function login(): Response
    {
        /** @var User $user */
        $user = $this->getUser();

        return new JsonResponse([
            'status' => 'ok',
            'token' => $user->getApiToken(),
        ], Response::HTTP_BAD_REQUEST);
    }
}
