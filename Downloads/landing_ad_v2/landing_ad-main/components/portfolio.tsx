"use client";
import {
  Chip,
  Card,
  CardHeader,
  CardBody,
  Image,
  Button,
} from "@nextui-org/react";
import React, { useState } from "react";

import { ChevronLeft, ChevronRight } from "@/components/icons"; // You'll need to add these icons

function Portfolio() {
  const portfolioItems = [
    {
      id: 1,
      title: "Identité visuelle pour 'LE HAMETS'",
      image: "/v1hammet.png",
      category: "Brand Identity",
    },
    {
      id: 2,
      title: "Identité visuelle pour 'Octa Treasures Imports'",
      image: "/v1octa.png",
      category: "Brand Identity",
    },
    {
      id: 3,
      title:
        "Identité visuelle pour le 'Centre Médical Communautaire de BOUCANERE'",
      image: "/v1bouc.png",
      category: "Brand Identity",
    },
    {
      id: 4,
      title: "Conception d'une application web et mobile 'Espace Show+'",
      image: "/show.png",
      category: "Web & Mobile App",
    },
    {
      id: 5,
      title: "Conception du site web LE HAMETS",
      image: "/site_hammet.jpeg",
      category: "Website Design",
    },
    {
      id: 6,
      title: "Conception du site web KING ART EMPIRE",
      image: "/site_kae.jpeg",
      category: "Website Design",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerView = 3; // Show 3 items at a time on desktop

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex >= portfolioItems.length - itemsPerView ? 0 : prevIndex + 1,
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex <= 0 ? portfolioItems.length - itemsPerView : prevIndex - 1,
    );
  };

  return (
    <div id="portfolio" className="flex-col justify-center items-center mx-auto relative text-center py-1 px-4">
      <div className="flex justify-center items-center text-center mb-4">
        <Chip color="secondary" variant="flat">
          Portfolio
        </Chip>
      </div>

      <h1 className="text-3xl lg:text-4xl font-bold z-10 relative mb-3">
        Nos réalisations
      </h1>

      <p className="text-lg lg:text-xl text-default-600 max-w-2xl mx-auto mb-12">
        Nous aidons les entreprises à améliorer leur image, attirer plus de
        clients et augmenter leurs ventes.
      </p>

      {/* Grid View (Alternative) */}
      <div className="mt-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {portfolioItems.map((item) => (
            <Card
              key={item.id}
              isPressable
              className="border-transparent bg-white/5 dark:bg-default-400/10 backdrop-blur-lg backdrop-saturate-[1.8]
                        transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:bg-white/10
                        group cursor-pointer"
            >
              <div className="relative overflow-hidden">
                <Image
                  removeWrapper
                  alt={item.title}
                  className="z-0 w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                  src={item.image}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <CardBody className="p-4">
                <Chip
                  className="mb-2"
                  color="secondary"
                  size="sm"
                  variant="flat"
                >
                  {item.category}
                </Chip>
                <p className="text-default-700 font-medium text-sm">
                  {item.title}
                </p>
              </CardBody>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
