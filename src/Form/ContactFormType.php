<?php

namespace App\Form;

use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use VictorPrdh\RecaptchaBundle\Form\ReCaptchaType;
use Symfony\Component\Validator\Constraints\NotBlank;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\Extension\Core\Type\EmailType;
use Symfony\Component\Form\Extension\Core\Type\SubmitType;
use Symfony\Component\Form\Extension\Core\Type\TextareaType;

class ContactFormType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->add('nom', TextType::class, [
                'label' => 'Votre nom / prénom',
                'constraints' => [
                    new NotBlank(['message' => 'Veuillez saisir votre nom']),
                ]
            ])
            ->add('email', EmailType::class, [
                'label' => 'Votre email',
                'constraints' => [
                    new NotBlank(['message' => 'Veuillez saisir votre email']),
                ]
            ])
            ->add('objet', TextType::class, [
                'label' => 'Objet',
                'constraints' => [
                    new NotBlank(['message' => 'Veuillez saisir un objet']),
                ]
            ])
            ->add('message', TextareaType::class, [
                'label' => 'Votre message',
                'constraints' => [
                    new NotBlank(['message' => 'Veuillez saisir votre message']),
                ]
            ])
            ->add('recaptcha', ReCaptchaType::class)
            ->add('submit', SubmitType::class, [
                'label' => 'Envoyer',
                'attr' => ['class' => 'btn sound']
            ]);
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([]);
    }
}
