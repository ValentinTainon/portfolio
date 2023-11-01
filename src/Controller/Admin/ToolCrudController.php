<?php

namespace App\Controller\Admin;

use App\Entity\Tool;
use EasyCorp\Bundle\EasyAdminBundle\Config\Crud;
use Vich\UploaderBundle\Form\Type\VichImageType;
use EasyCorp\Bundle\EasyAdminBundle\Config\Action;
use EasyCorp\Bundle\EasyAdminBundle\Config\Actions;
use EasyCorp\Bundle\EasyAdminBundle\Field\TextField;
use EasyCorp\Bundle\EasyAdminBundle\Field\ImageField;
use EasyCorp\Bundle\EasyAdminBundle\Field\DateTimeField;
use EasyCorp\Bundle\EasyAdminBundle\Controller\AbstractCrudController;

class ToolCrudController extends AbstractCrudController
{
    public static function getEntityFqcn(): string
    {
        return Tool::class;
    }

    public function configureCrud(Crud $crud): Crud
    {
        return $crud->setPageTitle(Crud::PAGE_INDEX, 'Technos')
            ->setPageTitle(Crud::PAGE_NEW, 'Ajouter une techno')
            ->setPageTitle(Crud::PAGE_EDIT, 'Modifier la techno');
    }

    public function configureActions(Actions $actions): Actions
    {
        return $actions->update(Crud::PAGE_INDEX, Action::NEW, fn (Action $action) => $action->setLabel('Ajouter une techno'))
            ->update(Crud::PAGE_INDEX, Action::EDIT, fn (Action $action) => $action->setLabel('Modifier'))
            ->update(Crud::PAGE_NEW, Action::SAVE_AND_ADD_ANOTHER, fn (Action $action) => $action->setLabel('Sauvegarder et ajouter une nouvelle techno'))
            ->update(Crud::PAGE_NEW, Action::SAVE_AND_RETURN, fn (Action $action) => $action->setLabel('Sauvegarder'))
            ->update(Crud::PAGE_EDIT, Action::SAVE_AND_CONTINUE, fn (Action $action) => $action->setLabel('Sauvegarder et continuer les modifications'));
    }

    public function configureFields(string $pageName): iterable
    {
        yield TextField::new('name', 'Nom');
        yield TextField::new('logoFile', 'Logo (jpg, png, webp) Taille max: 2 Mo')->setFormType(VichImageType::class)->onlyOnForms()->setRequired($pageName === Crud::PAGE_NEW ? true : false);
        yield ImageField::new('logoName', 'Logo')->setBasePath('/images/logos')->onlyOnIndex();
        yield DateTimeField::new('updatedAt', 'Date de modification')->onlyOnIndex();
        yield TextField::new('logoAlt', 'Texte alternatif');
    }
}
