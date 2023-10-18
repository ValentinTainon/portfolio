<?php

namespace App\Controller\Admin;

use App\Entity\Project;
use EasyCorp\Bundle\EasyAdminBundle\Config\Crud;
use Vich\UploaderBundle\Form\Type\VichImageType;
use EasyCorp\Bundle\EasyAdminBundle\Config\Action;
use EasyCorp\Bundle\EasyAdminBundle\Config\Actions;
use EasyCorp\Bundle\EasyAdminBundle\Field\TextField;
use EasyCorp\Bundle\EasyAdminBundle\Field\ImageField;
use EasyCorp\Bundle\EasyAdminBundle\Field\DateTimeField;
use EasyCorp\Bundle\EasyAdminBundle\Field\TextareaField;
use EasyCorp\Bundle\EasyAdminBundle\Controller\AbstractCrudController;
use EasyCorp\Bundle\EasyAdminBundle\Field\AssociationField;

class ProjectCrudController extends AbstractCrudController
{
    public static function getEntityFqcn(): string
    {
        return Project::class;
    }

    public function configureCrud(Crud $crud): Crud
    {
        return $crud->setPageTitle(Crud::PAGE_INDEX, 'Projets')
            ->setPageTitle(Crud::PAGE_NEW, 'Ajouter un projet')
            ->setPageTitle(Crud::PAGE_EDIT, 'Modifier le projet')
            ->setDefaultSort(['updatedAt' => 'DESC']);
    }

    public function configureActions(Actions $actions): Actions
    {
        return $actions->update(Crud::PAGE_INDEX, Action::NEW, fn (Action $action) => $action->setLabel('Ajouter un projet'))
            ->update(Crud::PAGE_INDEX, Action::EDIT, fn (Action $action) => $action->setLabel('Modifier'))
            ->update(Crud::PAGE_NEW, Action::SAVE_AND_ADD_ANOTHER, fn (Action $action) => $action->setLabel('Sauvegarder et ajouter un nouveau projet'))
            ->update(Crud::PAGE_NEW, Action::SAVE_AND_RETURN, fn (Action $action) => $action->setLabel('Sauvegarder'))
            ->update(Crud::PAGE_EDIT, Action::SAVE_AND_CONTINUE, fn (Action $action) => $action->setLabel('Sauvegarder et continuer les modifications'));
    }

    public function configureFields(string $pageName): iterable
    {
        yield TextField::new('name', 'Nom du projet');
        yield TextareaField::new('description', 'Description');
        yield TextField::new('link', 'Lien');
        yield TextField::new('imageFile', 'Image (jpg, png, webp) Taille max: 2 Mo')->setFormType(VichImageType::class)->onlyOnForms()->setRequired($pageName === Crud::PAGE_NEW ? true : false);
        yield ImageField::new('imageName', 'Image')->setBasePath('/images/projects')->onlyOnIndex();
        yield DateTimeField::new('updatedAt', 'Date de modification')->onlyOnIndex();
        yield TextField::new('imgAlt', 'Texte alternatif');
        yield AssociationField::new('languages', 'Langages');
    }
}