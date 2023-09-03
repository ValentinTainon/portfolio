<?php

namespace App\Controller;

use App\Form\ContactFormType;
use Symfony\Component\Mime\Email;
use Symfony\Component\Mime\Address;
use App\Repository\ProjectRepository;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Mailer\MailerInterface;

class MainController extends AbstractController
{
    #[Route('/', name: 'app_homepage')]
    public function index(Request $request, MailerInterface $mailer, ProjectRepository $projectRepository): Response
    {
        // RECUPERATION DES PROJETS
        $projects = $projectRepository->findBy([], ['updatedAt' => 'DESC']);

        // FORMULAIRE DE CONTACT
        $contactForm = $this->createForm(ContactFormType::class);
        $contactForm->handleRequest($request);

        if ($contactForm->isSubmitted() && $contactForm->isValid()) {
            $contactFormData = $contactForm->getData();

            $email = (new Email())
                ->from(new Address($contactFormData['email'], $contactFormData['nom']))
                ->to(new Address('valentin.tainon@outlook.fr', 'Portfolio'))
                ->subject($contactFormData['objet'])
                ->text($contactFormData['message']);

            $mailer->send($email);

            $this->addFlash('Succès', 'Votre message a été envoyé !');
        }

        // RENDRE LA VUE
        return $this->render('main/homepage.html.twig', [
            'projects' => $projects,
            'contactForm' => $contactForm->createView(),
        ]);
    }
}
