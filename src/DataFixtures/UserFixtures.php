<?php

namespace App\DataFixtures;

use App\Entity\User;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Persistence\ObjectManager;
use Symfony\Component\Security\Core\Encoder\UserPasswordEncoderInterface;

class UserFixtures extends Fixture
{
    private const USERS = [
        [
            'email' => 'user1@user.pl',
            'name' => 'User1',
            'surname' => 'Forest1',
            'password' => 'qwerty123',
            'token' => 'token_user_1',
        ],
        [
            'email' => 'user2@user.pl',
            'name' => 'User2',
            'surname' => 'Forest2',
            'password' => 'qwerty123',
            'token' => 'token_user_2',
        ],
    ];
    private UserPasswordEncoderInterface $passwordEncoder;

    public function __construct(UserPasswordEncoderInterface $passwordEncoder)
    {
        $this->passwordEncoder = $passwordEncoder;
    }

    public function load(ObjectManager $manager): void
    {
        foreach (self::USERS as $userData) {
            $user = new User();
            $user->setName($userData['name']);
            $user->setSurname($userData['surname']);
            $user->setEmail($userData['email']);
            $user->setApiToken($userData['token']);
            $user->setPassword($this->passwordEncoder->encodePassword($user, $userData['password']));
            $manager->persist($user);
        }

        $manager->flush();
    }
}
