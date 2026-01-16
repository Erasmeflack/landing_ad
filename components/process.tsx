"use client";

import React from "react";
import { Chip, Card, CardHeader, CardBody } from "@nextui-org/react";

export default function Process() {
  const steps = [
    {
      number: "1",
      title: "Analyse & Stratégie",
      description:
        "Compréhension de vos besoins, de votre marché et de vos objectifs.",
    },
    {
      number: "2",
      title: "Phase Design",
      description: "Création du branding + UI/UX et validation.",
    },
    {
      number: "3",
      title: "Développement & Intégrations",
      description: "Construction du site avec un code propre et optimisé.",
    },
    {
      number: "4",
      title: "Lancement & Support",
      description: "Déploiement, tests et accompagnement continu.",
    },
  ];

  return (
    <div id="process" className="container mx-auto px-6 py-20">
      <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12">
        Une Méthode Simple, Transparente & Professionnelle
      </h2>

      {/* Timeline style */}
      <div className="relative">
        {/* Main timeline line */}
        <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-primary/30 to-transparent transform -translate-y-1/2" />

        {/* Steps in a single row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4 relative">
          {steps.map((step, index) => (
            <div key={index} className="relative z-10">
              <Card
                className="border-transparent bg-white/5 dark:bg-default-400/10 backdrop-blur-lg backdrop-saturate-[1.8] 
                             transition-all duration-300 hover:scale-105 hover:shadow-xl hover:bg-white/10
                             group cursor-pointer"
              >
                <CardBody className="text-center p-6">
                  <div
                    className="w-16 h-16 bg-gradient-to-br from-[#FF1CF7] to-[#b249f8] text-white rounded-full 
                                flex items-center justify-center text-2xl font-bold mx-auto mb-4
                                transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg"
                  >
                    {step.number}
                  </div>
                  <h3 className="text-xl font-bold mb-3 transition-all duration-300 group-hover:text-primary">
                    {step.title}
                  </h3>
                  <p className="text-default-600 transition-all duration-300 group-hover:text-default-700">
                    {step.description}
                  </p>
                </CardBody>
              </Card>
            </div>
          ))}
        </div>
      </div>

      <p className="text-2xl font-normal text-default-500 py-10 text-center mt-8">
        Clair. Rapide. Sans stress.
      </p>
    </div>
  );
}
