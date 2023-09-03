<?php

namespace App\Form;

use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\Validator\Constraints\NotBlank;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\Extension\Core\Type\EmailType;

class ContactFormType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->add('nom', TextType::class, [
                'label' => false,
                'attr' => ['placeholder' => 'Votre nom'],
                'constraints' => [
                    new NotBlank(['message' => 'Veuillez saisir votre nom']),
                ]
            ])
            ->add('email', EmailType::class, [
                'label' => false,
                'attr' => ['placeholder' => 'Votre email'],
                'constraints' => [
                    new NotBlank(['message' => 'Veuillez saisir votre email']),
                ]
            ])
            ->add('objet', TextType::class, [
                'label' => false,
                'attr' => ['placeholder' => 'Objet'],
                'constraints' => [
                    new NotBlank(['message' => 'Veuillez saisir un objet']),
                ]
            ])
            ->add('message', TextType::class, [
                'label' => false,
                'attr' => ['placeholder' => 'Votre message'],
                'constraints' => [
                    new NotBlank(['message' => 'Veuillez saisir votre message']),
                ]
            ]);
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([]);
    }
}
