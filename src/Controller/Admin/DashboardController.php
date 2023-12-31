<?php

namespace App\Controller\Admin;

use App\Entity\Admin;
use App\Entity\Tool;
use App\Entity\Project;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use EasyCorp\Bundle\EasyAdminBundle\Config\MenuItem;
use EasyCorp\Bundle\EasyAdminBundle\Config\Dashboard;
use EasyCorp\Bundle\EasyAdminBundle\Router\AdminUrlGenerator;
use EasyCorp\Bundle\EasyAdminBundle\Controller\AbstractDashboardController;

class DashboardController extends AbstractDashboardController
{
    #[Route('/admin', name: 'admin')]
    public function index(): Response
    {
        $adminUrlGenerator = $this->container->get(AdminUrlGenerator::class);
        return $this->redirect($adminUrlGenerator->setController(ProjectCrudController::class)->generateUrl());
    }

    public function configureDashboard(): Dashboard
    {
        return Dashboard::new()->setTitle('Portfolio')->setFaviconPath("images/favicons/favicon.svg");
    }

    public function configureMenuItems(): iterable
    {
        yield MenuItem::linkToCrud('Administrateur', 'fas fa-user-secret', Admin::class);
        yield MenuItem::linkToCrud('Projets', 'fas fa-laptop', Project::class);
        yield MenuItem::linkToCrud('Technos', 'fas fa-code', Tool::class);
        yield MenuItem::linktoRoute('Retour sur le site', 'fas fa-home', 'app_homepage');
    }
}
