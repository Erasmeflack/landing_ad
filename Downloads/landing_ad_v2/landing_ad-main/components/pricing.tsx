"use client";

import { Chip, Card, CardBody, Button, Link } from "@nextui-org/react";
import React, { useState } from "react";

import { CheckIcon, SparklesIcon, WhatsAppIcon } from "@/components/icons";
import { siteConfig } from "@/config/site";

function Pricing() {
  const [hoveredPlan, setHoveredPlan] = useState<number | null>(null);

  const plans = [
    {
      id: 1,
      title: "Starter",
      subtitle: "Logo & identité",
      price: "412",
      originalPrice: "550",
      description: "Idéal pour lancer votre activité avec une image pro",
      features: [
        "Logo professionnel",
        "Fichiers haute résolution",
        "Format vectoriel (AI, SVG, PDF)",
        "Palette de couleurs",
        "Typographie personnalisée",
        "Guide d'utilisation",
        "2 révisions incluses",
        "Livraison sous 5 jours",
      ],
      cta: "Choisir Starter",
      popular: false,
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      id: 2,
      title: "Business",
      subtitle: "Site web complet",
      price: "2 175",
      originalPrice: "2 900",
      description: "La solution complète pour développer votre business",
      features: [
        "Tout le pack Starter inclus",
        "Site web responsive (5 pages)",
        "Design UI/UX sur mesure",
        "Animations & interactions",
        "Optimisation SEO",
        "Formulaire de contact",
        "Intégration réseaux sociaux",
        "Formation utilisation (1h)",
        "Support 2 mois",
        "Hébergement 6 mois offert",
      ],
      cta: "Choisir Business",
      popular: true,
      gradient: "from-primary to-secondary",
    },
    {
      id: 3,
      title: "Premium",
      subtitle: "Solution sur mesure",
      price: "3 750",
      originalPrice: "4 999",
      description: "Pour les entreprises qui veulent se démarquer",
      features: [
        "Tout le pack Business inclus",
        "Identité visuelle complète",
        "Charte graphique détaillée",
        "Site illimité (pages)",
        "E-commerce (si nécessaire)",
        "Blog intégré",
        "Dashboard analytics",
        "Fonctionnalités avancées",
        "Formation complète (3h)",
        "Support prioritaire 3 mois",
        "Maintenance 3 mois offert",
      ],
      cta: "Choisir Premium",
      popular: false,
      gradient: "from-purple-500 to-pink-500",
    },
  ];

  const handleContactClick = (planName: string) => {
    const message = encodeURIComponent(
      `Bonjour ! Je suis intéressé(e) par le pack ${planName}. Pouvez-vous me donner plus d'informations ?`
    );
    window.open(
      `https://wa.me/${siteConfig.contact.whatsapp}?text=${message}`,
      "_blank"
    );
  };

  return (
    <section id="pricing" className="py-12 md:py-16 px-4 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/3 to-transparent pointer-events-none" />
      
      <div className="container mx-auto max-w-6xl relative z-10">
        {/* Header */}
        <div className="text-center mb-10">
          <Chip color="secondary" variant="flat" className="mb-3" size="sm">
            Nos tarifs
          </Chip>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3">
            Des prix{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              clairs et justes
            </span>
          </h2>
          <p className="text-sm md:text-base text-default-600 max-w-2xl mx-auto">
            Choisissez la formule adaptée à vos besoins. Révisions et support inclus.
          </p>
          <div className="flex items-center justify-center gap-2 mt-3">
            <span className="text-green-500 text-xl">🎉</span>
            <span className="text-default-600 text-sm font-medium">
              Offre limitée : <span className="text-primary font-bold">-25%</span> sur tous les packs
            </span>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6">
          {plans.map((plan) => (
            <Card
              key={plan.id}
              className={`
                relative h-full transition-all duration-500 border-2
                ${plan.popular 
                  ? "border-primary shadow-2xl shadow-primary/20 md:scale-105 z-10" 
                  : "border-default-200 hover:border-primary/50"
                }
                ${hoveredPlan === plan.id ? "scale-[1.02]" : ""}
              `}
              onMouseEnter={() => setHoveredPlan(plan.id)}
              onMouseLeave={() => setHoveredPlan(null)}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-20">
                  <Chip
                    color="primary"
                    variant="shadow"
                    startContent={<SparklesIcon className="w-3 h-3" />}
                    className="font-bold text-xs"
                    size="sm"
                  >
                    Le plus populaire
                  </Chip>
                </div>
              )}

              <CardBody className="p-5 lg:p-6 flex flex-col">
                {/* Plan Header */}
                <div className="text-center mb-5">
                  <div className={`inline-block px-3 py-1 rounded-full bg-gradient-to-r ${plan.gradient} text-white text-xs font-medium mb-2`}>
                    {plan.subtitle}
                  </div>
                  <h3 className="text-xl lg:text-2xl font-bold mb-1">
                    {plan.title}
                  </h3>
                  <p className="text-default-500 text-xs mb-4">
                    {plan.description}
                  </p>

                  {/* Price */}
                  <div className="mb-1">
                    <span className="text-default-400 line-through text-base">
                      {plan.originalPrice}€
                    </span>
                  </div>
                  <div className="flex items-baseline justify-center gap-1">
                    <span className={`text-4xl lg:text-5xl font-bold bg-gradient-to-r ${plan.gradient} bg-clip-text text-transparent`}>
                      {plan.price}
                    </span>
                    <span className="text-default-500 font-medium">€</span>
                  </div>
                  <span className="text-default-400 text-xs">
                    Prix unique / projet
                  </span>
                </div>

                {/* Features */}
                <ul className="space-y-2 mb-6 flex-grow">
                  {plan.features.map((feature, idx) => (
                    <li 
                      key={idx} 
                      className="flex items-start gap-2 group"
                    >
                      <div className={`w-4 h-4 rounded-full bg-gradient-to-r ${plan.gradient} flex items-center justify-center flex-shrink-0 mt-0.5`}>
                        <CheckIcon className="w-2.5 h-2.5 text-white" />
                      </div>
                      <span className="text-default-700 text-xs">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <div className="mt-auto space-y-2">
                  <Button
                    className={`w-full font-bold py-5 ${
                      plan.popular
                        ? `bg-gradient-to-r ${plan.gradient} text-white shadow-lg hover:shadow-xl hover:scale-[1.02]`
                        : "bg-default-100 hover:bg-default-200"
                    } transition-all duration-300`}
                    size="md"
                    onClick={() => handleContactClick(plan.title)}
                    endContent={<WhatsAppIcon className="w-4 h-4" />}
                  >
                    {plan.cta}
                  </Button>
                  <p className="text-center text-default-400 text-xs">
                    Paiement en 2-3 fois possible
                  </p>
                </div>
              </CardBody>
            </Card>
          ))}
        </div>

        {/* Custom Project CTA */}
        <div className="mt-10">
          <Card className="bg-gradient-to-br from-default-100 via-primary/5 to-secondary/5 border-none overflow-hidden">
            <CardBody className="p-6 lg:p-8">
              <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
                <div className="text-center lg:text-left">
                  <h3 className="text-xl lg:text-2xl font-bold mb-2">
                    Projet sur mesure ?
                  </h3>
                  <p className="text-default-600 text-sm max-w-lg">
                    Besoin d&apos;une solution personnalisée ? Discutons de votre projet.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Button
                    as={Link}
                    href="#contact"
                    className="bg-gradient-to-r from-primary to-secondary text-white font-bold px-6 shadow-lg hover:shadow-primary/25 hover:scale-105 transition-all duration-300"
                    size="md"
                  >
                    Demander un devis
                  </Button>
                  <Button
                    as={Link}
                    href={siteConfig.links.consultation}
                    isExternal
                    variant="bordered"
                    className="border-2 border-primary text-primary font-bold px-6 hover:bg-primary/10 transition-all duration-300"
                    size="md"
                  >
                    Appel découverte
                  </Button>
                </div>
              </div>
            </CardBody>
          </Card>
        </div>

        {/* Guarantees */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
          <div className="p-3">
            <span className="text-2xl mb-1 block">💯</span>
            <h4 className="font-bold text-sm mb-1">Satisfait ou remboursé</h4>
            <p className="text-default-500 text-xs">30 jours pour changer d&apos;avis</p>
          </div>
          <div className="p-3">
            <span className="text-2xl mb-1 block">🔒</span>
            <h4 className="font-bold text-sm mb-1">Paiement sécurisé</h4>
            <p className="text-default-500 text-xs">30% d&apos;acompte, solde à la livraison</p>
          </div>
          <div className="p-3">
            <span className="text-2xl mb-1 block">🤝</span>
            <h4 className="font-bold text-sm mb-1">Sans engagement</h4>
            <p className="text-default-500 text-xs">Devis gratuit et sans obligation</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Pricing;
