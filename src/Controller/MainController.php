<?php

namespace App\Controller;

use App\Form\ContactFormType;
use App\Repository\AdminRepository;
use Symfony\Component\Mime\Address;
use App\Repository\ProjectRepository;
use Symfony\Bridge\Twig\Mime\TemplatedEmail;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Mailer\MailerInterface;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

class MainController extends AbstractController
{
    public function __construct(private readonly AdminRepository $adminRepository)
    {
    }

    #[Route('/', name: 'app_homepage')]
    public function index(Request $request, MailerInterface $mailer, ProjectRepository $projectRepository): Response
    {
        // MODE MAINTENANCE
        if(!$this->adminRepository->findOneByRole('["ROLE_ADMIN"]')->isEnableMaintenance()) {
            // RECUPERATION DES PROJETS
            $projects = $projectRepository->findBy([], ['updatedAt' => 'DESC']);
    
            // RECUPERATION DE L'EMAIL ADMINISTRATEUR
            $adminEmail = $this->adminRepository->findOneByRole('["ROLE_ADMIN"]')->getEmail();
    
            // FORMULAIRE DE CONTACT
            $contactForm = $this->createForm(ContactFormType::class);
            $contactForm->handleRequest($request);
    
            if ($contactForm->isSubmitted() && $contactForm->isValid()) {
                $contactFormData = $contactForm->getData();
    
                $email = (new TemplatedEmail())
                    ->from(new Address($contactFormData['email'], $contactFormData['nom']))
                    ->to(new Address($adminEmail, 'Portfolio'))
                    ->subject($contactFormData['objet'])
                    ->text($contactFormData['message'])
                    ->htmlTemplate('components/contact_email.html.twig')
                    ->context(['contactFormData' => $contactFormData]);
    
                $mailer->send($email);
    
                $this->addFlash('success', 'Votre message a été envoyé !');
    
                return $this->redirectToRoute('app_homepage');
            }
    
            // RENDRE LA VUE
            return $this->render('main/homepage.html.twig', [
                'projects' => $projects,
                'contactForm' => $contactForm->createView(),
            ]);
        } else {
            // RENDRE LA VUE DE MAINTENANCE
            return $this->render('main/maintenance.html.twig');
        }
    }
}