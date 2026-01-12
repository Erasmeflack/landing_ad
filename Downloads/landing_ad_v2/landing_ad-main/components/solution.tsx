"use client";
import { Chip, Card, CardHeader, CardBody } from "@nextui-org/react";
import { Link } from "@nextui-org/link";
import { button as buttonStyles } from "@nextui-org/theme";
import React from "react";

import { siteConfig } from "@/config/site";
import { PaletteIcon, DesignIcon, CodeIcon } from "@/components/icons";

function Solution() {
  const services = [
    {
      title: "Logo & identité visuelle",
      description:
        "Une identité qui vous ressemble et qui marque les esprits.",
      features: [
        "Création de logo sur mesure",
        "Palette de couleurs & typographie",
        "Charte graphique complète",
        "Fichiers prêts à l'emploi",
      ],
      icon: <PaletteIcon />,
    },
    {
      title: "Design UI/UX",
      description:
        "Des interfaces intuitives que vos clients adorent utiliser.",
      features: [
        "Wireframes & prototypes",
        "Design adapté mobile",
        "Navigation fluide",
        "Interface moderne",
      ],
      icon: <DesignIcon />,
    },
    {
      title: "Développement web",
      description:
        "Un site rapide, sécurisé et qui vous rapporte des clients.",
      features: [
        "Site sur mesure ou WordPress",
        "Optimisé pour Google (SEO)",
        "Compatible tous écrans",
        "Formulaires & intégrations",
      ],
      icon: <CodeIcon />,
    },
  ];

  return (
    <div id="services" className="flex-col justify-center items-center mx-auto mt-6 md:mt-10 relative text-center px-4">
      <div className="flex justify-center items-center text-center mb-2">
        <Chip color="secondary" variant="flat" size="sm">
          Ce qu&apos;on fait pour vous
        </Chip>
      </div>
      <h2 className="text-xl md:text-2xl lg:text-3xl font-bold z-10 relative py-3">
        Des sites qui attirent, convertissent et fidélisent
      </h2>
      <p className="text-default-500 text-sm md:text-base max-w-2xl mx-auto mb-6">
        On s&apos;occupe de tout : du design à la mise en ligne.
      </p>

      {/* Grid container */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 max-w-6xl mx-auto">
        {services.map((service, index) => (
          <Card
            key={index}
            isHoverable
            className="col-span-1 border-transparent bg-white/5 dark:bg-default-400/10 backdrop-blur-lg backdrop-saturate-[1.8]
                       transition-all duration-300 ease-in-out
                       hover:scale-[1.02] hover:shadow-lg hover:shadow-primary/20
                       hover:bg-white/10 dark:hover:bg-default-400/20
                       group"
          >
            <CardHeader className="flex-col !items-start pb-0 pt-5 px-5">
              <div className="flex items-center gap-3">
                <div className="text-primary text-xl transition-all duration-300 group-hover:scale-110 group-hover:text-secondary">
                  {service.icon}
                </div>
                <h4 className="text-base md:text-lg font-bold transition-all duration-300 group-hover:text-primary">
                  {service.title}
                </h4>
              </div>
              <p className="text-default-600 text-sm mt-2">
                {service.description}
              </p>
            </CardHeader>
            <CardBody className="px-5 py-4">
              <ul className="text-default-700 text-sm text-left space-y-2">
                {service.features.map((feature, idx) => (
                  <li
                    key={idx}
                    className="flex items-start"
                  >
                    <span className="text-success mr-2 mt-0.5">
                      ✓
                    </span>
                    <span>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
            </CardBody>
          </Card>
        ))}
      </div>
      <div className="flex flex-col sm:flex-row gap-3 justify-center py-8">
        <Link
          className={buttonStyles({
            color: "primary",
            radius: "full",
            variant: "shadow",
          })}
          href="#contact"
        >
          Démarrer mon projet
        </Link>
      </div>
    </div>
  );
}

export default Solution;
