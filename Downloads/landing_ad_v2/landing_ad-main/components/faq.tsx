"use client";

import React from "react";
import { Accordion, AccordionItem, Chip, Card, CardBody } from "@nextui-org/react";

export default function FAQ() {
  const faqs = [
    {
      question: "Combien de temps faut-il pour créer un site web ?",
      answer: "Le délai dépend de la complexité du projet. Un site vitrine simple prend généralement 2-3 semaines, tandis qu'un site e-commerce ou une application web peut prendre 4-8 semaines. Nous vous donnons toujours un calendrier précis dès le début du projet."
    },
    {
      question: "Quelles technologies utilisez-vous ?",
      answer: "Nous utilisons les technologies les plus modernes et performantes : Next.js, React, TypeScript pour les applications web, et WordPress pour les sites qui nécessitent une gestion de contenu simple. Tous nos sites sont optimisés pour le SEO et la performance."
    },
    {
      question: "Proposez-vous l'hébergement et la maintenance ?",
      answer: "Oui ! Nous proposons des solutions d'hébergement haute performance avec certificat SSL inclus. La maintenance comprend les mises à jour de sécurité, les sauvegardes régulières et le support technique. Ces services sont inclus ou optionnels selon le pack choisi."
    },
    {
      question: "Comment se passe le processus de création ?",
      answer: "Notre processus est simple : 1) Consultation gratuite pour comprendre vos besoins, 2) Proposition et devis détaillé, 3) Phase de design avec validation, 4) Développement avec points réguliers, 5) Tests et corrections, 6) Lancement et formation. Vous êtes impliqué à chaque étape."
    },
    {
      question: "Puis-je modifier mon site moi-même après la livraison ?",
      answer: "Absolument ! Nous vous formons à l'utilisation de votre site. Pour les sites WordPress, vous pouvez modifier textes et images facilement. Pour les sites sur mesure, nous mettons en place un panneau d'administration intuitif adapté à vos besoins."
    },
    {
      question: "Quels sont les modes de paiement acceptés ?",
      answer: "Nous acceptons les virements bancaires, PayPal et les cartes bancaires. Le paiement se fait généralement en 2 ou 3 fois : 30% à la commande, 30% à la validation du design, et 40% à la livraison. Des facilités de paiement sont possibles."
    },
    {
      question: "Que se passe-t-il si je ne suis pas satisfait ?",
      answer: "Votre satisfaction est notre priorité. Chaque pack inclut des révisions pour affiner le résultat selon vos retours. Si malgré tout vous n'êtes pas satisfait dans les 30 premiers jours, nous vous remboursons intégralement."
    },
    {
      question: "Travaillez-vous avec des clients hors de France ?",
      answer: "Oui ! Nous travaillons avec des clients dans toute la France et à l'international. Toutes nos réunions peuvent se faire en visioconférence, et nous nous adaptons aux différents fuseaux horaires."
    },
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-background to-default-50/30">
      <div className="container mx-auto max-w-4xl">
        {/* Header */}
        <div className="text-center mb-12">
          <Chip color="secondary" variant="flat" className="mb-4">
            FAQ
          </Chip>
          <h2 className="text-3xl lg:text-5xl font-bold mb-4">
            Questions{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Fréquentes
            </span>
          </h2>
          <p className="text-lg text-default-600 max-w-2xl mx-auto">
            Tout ce que vous devez savoir avant de commencer votre projet avec nous.
          </p>
        </div>

        {/* FAQ Accordion */}
        <Card className="border-none bg-white/5 dark:bg-default-400/10 backdrop-blur-lg">
          <CardBody className="p-4 lg:p-8">
            <Accordion 
              variant="splitted"
              selectionMode="multiple"
              className="gap-4"
            >
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  aria-label={faq.question}
                  title={
                    <span className="font-semibold text-default-800 text-left">
                      {faq.question}
                    </span>
                  }
                  className="bg-default-100/50 dark:bg-default-50/10 border-none shadow-sm hover:shadow-md transition-shadow duration-300"
                  classNames={{
                    trigger: "py-4 px-4",
                    content: "pb-4 px-4 text-default-600",
                  }}
                >
                  <p className="leading-relaxed">{faq.answer}</p>
                </AccordionItem>
              ))}
            </Accordion>
          </CardBody>
        </Card>

        {/* Still have questions CTA */}
        <div className="mt-12 text-center">
          <Card className="inline-block bg-gradient-to-r from-primary/10 to-secondary/10 border-none">
            <CardBody className="px-8 py-6">
              <p className="text-default-600 mb-2">
                Vous avez d&apos;autres questions ?
              </p>
              <p className="font-bold text-xl">
                Contactez-nous directement !
              </p>
              <div className="flex items-center justify-center gap-2 mt-3">
                <span className="text-2xl">💬</span>
                <span className="text-primary font-medium">
                  Réponse sous 24h garantie
                </span>
              </div>
            </CardBody>
          </Card>
        </div>
      </div>
    </section>
  );
}
