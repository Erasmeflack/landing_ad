"use client";
import { Chip, Card, CardHeader, CardBody } from "@nextui-org/react";
import { Link } from "@nextui-org/link";
import { button as buttonStyles } from "@nextui-org/theme";
import { siteConfig } from "@/config/site";
import React from "react";
import { PaletteIcon, DesignIcon, CodeIcon } from "@/components/icons";

function Solution() {
  const services = [
    {
      title: "Logo & Identité Visuelle",
      description: "Démarquez-vous avec une identité professionnelle, moderne et mémorable.",
      features: [
        "Création de Logo (Plusieurs Propositions)",
        "Palette de couleurs & typographie",
        "Charte graphique complète",
        "Design élégant et intemporel"
      ],
      icon: <PaletteIcon />
    },
    {
      title: "UI/UX Design",
      description: "Des designs intuitifs, centrés sur l'utilisateur et optimisés pour la conversion.",
      features: [
        "Wireframes & prototypes",
        "Design mobile-first",
        "Navigation centrée utilisateur",
        "Interface moderne et épurée"
      ],
      icon: <DesignIcon />
    },
    {
      title: "Développement Web Complet",
      description: "Nous construisons des sites web rapides, sécurisés et évolutifs.",
      features: [
        "Développement sur mesure (WordPress/Next.js)",
        "Optimisé SEO",
        "Responsive sur tous appareils",
        "Intégrations complètes"
      ],
      icon: <CodeIcon />
    }
  ];

  return (
    <div className="flex-col justify-center items-center mx-auto mt-10 relative text-center px-4">
      <div className="flex justify-center items-center text-center mb-2">
        <Chip variant="flat" color="secondary">
          La solution
        </Chip>
      </div>
      <h1 className="text-2xl lg:text-4xl font-semibold z-10 relative py-5">
        Nous Créons des Expériences Digitales Qui Convertissent
      </h1>
      
      {/* Grid container for vertical alignment */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto mt-8">
        {services.map((service, index) => (
          <Card 
            key={index} 
            className="col-span-1 border-transparent bg-white/5 dark:bg-default-400/10 backdrop-blur-lg backdrop-saturate-[1.8]
                       transition-all duration-300 ease-in-out
                       hover:scale-[1.02] hover:shadow-lg hover:shadow-primary/20
                       hover:bg-white/10 dark:hover:bg-default-400/20
                       group cursor-pointer"
            isHoverable
            isPressable
            onPress={() => console.log(`Selected: ${service.title}`)}
          >
            <CardHeader className="flex-col !items-start pb-0 pt-6 px-6 transition-all duration-300 group-hover:px-7">
              <div className="flex items-center gap-3">
                <div className="text-primary text-xl transition-all duration-300 group-hover:scale-110 group-hover:text-secondary">
                  {service.icon}
                </div>
                <h4 className="text-lg font-bold transition-all duration-300 group-hover:text-primary">
                  {service.title}
                </h4>
              </div>
              <p className="text-default-600 text-sm mt-2 transition-all duration-300 group-hover:text-default-700">
                {service.description}
              </p>
            </CardHeader>
            <CardBody className="px-6 py-4 transition-all duration-300 group-hover:px-7">
              <ul className="text-default-700 text-sm text-left space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start transition-all duration-300 group-hover:translate-x-1">
                    <span className="text-success mr-2 mt-1 transition-all duration-300 group-hover:scale-125">✓</span>
                    <span className="transition-all duration-300 group-hover:text-default-900 dark:group-hover:text-default-300">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
              
              {/* Optional: Add a subtle call-to-action that appears on hover */}
              <div className="mt-4 pt-4 border-t border-default-200 opacity-0 group-hover:opacity-100 transition-all duration-300">
                <span className="text-xs text-primary font-medium flex items-center gap-1">
                  En savoir plus
                  <svg 
                    className="w-3 h-3 transition-transform duration-300 group-hover:translate-x-1" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </div>
            </CardBody>
            
            {/* Optional: Gradient border effect on hover */}
            <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-transparent via-primary/5 to-transparent 
                          opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
          </Card>
        ))}
      </div>
      <div className="flex flex-col sm:flex-row gap-3 justify-center py-10">
        <Link
          isExternal
          className={buttonStyles({
            color: "primary",
            radius: "full",
            variant: "shadow",
          })}
          href={siteConfig.links.form}
        >
          Lancez Votre Projet Aujourd&apos;hui
        </Link>
      </div>
    </div>     
  );
}

export default Solution;