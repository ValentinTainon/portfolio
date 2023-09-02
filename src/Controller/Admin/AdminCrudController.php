<?php

namespace App\Controller\Admin;

use App\Entity\Admin;
use EasyCorp\Bundle\EasyAdminBundle\Config\Crud;
use EasyCorp\Bundle\EasyAdminBundle\Config\Action;
use Symfony\Component\Validator\Constraints\Regex;
use EasyCorp\Bundle\EasyAdminBundle\Config\Actions;
use Symfony\Component\Validator\Constraints\Length;
use EasyCorp\Bundle\EasyAdminBundle\Field\TextField;
use EasyCorp\Bundle\EasyAdminBundle\Field\ArrayField;
use Symfony\Component\Form\Extension\Core\Type\PasswordType;
use Symfony\Component\Form\Extension\Core\Type\RepeatedType;
use EasyCorp\Bundle\EasyAdminBundle\Controller\AbstractCrudController;

class AdminCrudController extends AbstractCrudController
{
    public static function getEntityFqcn(): string
    {
        return Admin::class;
    }

    public function configureCrud(Crud $crud): Crud
    {
        return $crud->setPageTitle(Crud::PAGE_INDEX, 'Admin')
            ->setPageTitle(Crud::PAGE_EDIT, 'Modifier mon profil')
            ->showEntityActionsInlined();
    }

    public function configureActions(Actions $actions): Actions
    {
        return $actions->disable(Action::NEW, Action::SAVE_AND_CONTINUE, Action::DELETE)
            ->update(Crud::PAGE_INDEX, Action::EDIT, fn (Action $action) => $action->setLabel('Modifier'));
    }

    public function configureFields(string $pageName): iterable
    {
        yield TextField::new('username', 'Nom Administrateur')->setRequired(false);
        yield TextField::new('email', 'E-mail')->setRequired(false);
        yield ArrayField::new('roles', 'Rôle')->setRequired(false)->setDisabled();
        yield TextField::new('password')
        ->onlyWhenUpdating()
        ->setFormType(RepeatedType::class)
        ->setFormTypeOptions([
            'type' => PasswordType::class,
            'first_options' => ['label' => 'Nouveau mot de passe', 'hash_property_path' => 'password'],
            'second_options' => ['label' => 'Répéter le nouveau mot de passe'],
            'mapped' => false,
            'constraints' => [
                new Length(['max' => 4096]), // max length allowed by Symfony for security reasons
                new Regex([
                    'pattern' => '/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&.*-]).{8,}$/',
                    'message' => 'Votre mot de passe doit contenir au minimum 8 caractères avec au moins une lettre majuscule,
                    une lettre minuscule, un chiffre et un caractère spécial.'
                ]),
            ],
        ])
        ->setRequired(false);
    }
}
