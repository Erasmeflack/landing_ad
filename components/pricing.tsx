"use client";
import { Chip, Card, CardBody, Button } from "@nextui-org/react";
import React from "react";
import { CheckIcon, SparklesIcon } from "@/components/icons";

function Pricing() {
  const plans = [
    {
      id: 1,
      title: "Starter",
      subtitle: "Logo Simple",
      price: "299€",
      description: "Parfait pour les startups qui débutent",
      features: [
        "Logo design (1-2 concepts)",
        "Format vectoriel",
        "Palette de couleurs",
        "Typographie",
        "Livraison 5-7 jours",
        "1-2 révisions"
      ],
      cta: "Démarrer",
      color: "default"
    },
    {
      id: 2,
      title: "Business",
      subtitle: "UI/UX + Site Web",
      price: "1 299€",
      description: "Solution complète pour les entreprises",
      features: [
        "Design UI/UX complet",
        "Site web responsive",
        "3-4 pages",
        "SEO basique",
        "Contact form",
        "Support 1 mois"
      ],
      cta: "Choisir ce plan",
      color: "primary"
    },
    {
      id: 3,
      title: "Premium",
      subtitle: "Identité complète + Site",
      price: "2 499€",
      description: "Solution sur mesure pour les marques",
      features: [
        "Identité visuelle complète",
        "Charte graphique",
        "Site sur mesure",
        "5-8 pages",
        "SEO avancé",
        "Fonctionnalités avancées",
        "Support 3 mois",
        "Maintenance"
      ],
      cta: "Contacter",
      color: "secondary"
    }
  ];

  return (
    <div className="flex-col justify-center items-center mx-auto relative text-center py-5 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h1 className="text-3xl lg:text-4xl font-bold mb-4">
            Tarifs Transparents
          </h1>
          <p className="text-lg text-default-600 max-w-2xl mx-auto">
            Choisissez la formule adaptée à vos besoins. Tous nos prix incluent les révisions et le support.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {plans.map((plan) => (
            <Card 
              key={plan.id}
              className={`
                border-2 h-full transition-all duration-300 hover:scale-[1.02] hover:shadow-xl
                ${plan.id === 2 ? 'border-primary shadow-lg' : 'border-default-200'}
                ${plan.id === 2 ? 'md:scale-105' : ''}
              `}
            >
              {plan.id === 2 && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 ">
                  <Chip 
                    color="primary" 
                    variant="shadow"
                    startContent={<SparklesIcon className="w-4 h-4" />}
                  >
                    Recommandé
                  </Chip>
                </div>
              )}
              
              <CardBody className="p-6 lg:p-8">
                {/* Plan Header */}
                <div className="text-center mb-6">
                  <h3 className="text-xl lg:text-2xl font-bold mb-2">{plan.title}</h3>
                  <p className="text-default-600 mb-2">{plan.subtitle}</p>
                  <p className="text-sm text-default-500 mb-4">{plan.description}</p>
                  
                  {/* Price */}
                  <div className="mb-6">
                    <div className="text-3xl lg:text-4xl font-bold text-primary">
                      {plan.price}
                      <span className="text-sm font-normal text-default-500"> / projet</span>
                    </div>
                  </div>
                </div>

                {/* Features */}
                <ul className="space-y-3 mb-8 text-left">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <CheckIcon className="text-success flex-shrink-0 mr-3 mt-1" />
                      <span className="text-default-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <div className="mt-auto">
                  <Button
                    color={plan.id === 2 ? "primary" : "default"}
                    variant={plan.id === 2 ? "shadow" : "flat"}
                    className="w-full font-bold"
                    size="lg"
                  >
                    {plan.cta}
                  </Button>
                </div>
              </CardBody>
            </Card>
          ))}
        </div>

        {/* Contact Section */}
        <div className="mt-12 text-center">
          <Card className="bg-gradient-to-br from-primary/10 to-secondary/10 border-none">
            <CardBody className="p-8">
              <h3 className="text-2xl font-bold mb-4">Projet sur mesure ?</h3>
              <p className="text-default-600 mb-6">
                Besoin d'une solution personnalisée qui ne correspond à aucun de ces plans ?
                Discutons de votre projet pour créer une offre adaptée.
              </p>
              <Button
                color="primary"
                variant="shadow"
                size="lg"
                className="font-bold"
              >
                Obtenir un devis personnalisé
              </Button>
            </CardBody>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default Pricing;