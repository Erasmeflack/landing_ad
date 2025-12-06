"use client";

import React from "react";
import { Link } from "@nextui-org/link";
import { siteConfig } from "@/config/site";
import { button as buttonStyles } from "@nextui-org/theme";
import { Card, CardBody } from "@nextui-org/react";
import { QuoteIcon } from "@/components/icons";

export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      quote: "AFT GROUP s'investit dans les projets de chacun cherchant à chaque fois à créer un projet qui se démarque et qui a pour objectif principal d'apporter une réelle plus-value.",
      author: "Vĩctõire FD",
      role: "Startup Owner",
      rating: 5
    },
    {
      id: 2,
      quote: "La conception UI/UX correspondait exactement à ce dont nous avions besoin. Nos utilisateurs adorent cette nouvelle expérience et leur engagement a immédiatement augmenté.",
      author: "Virginie Fauquinon", 
      role: "Startup Founder",
      rating: 5
    },
    {
      id: 3,
      quote: "Leur équipe a transformé notre présence en ligne. Notre nouveau site web est moderne, rapide et génère trois fois plus de prospects qu'avant.",
      author: "Sarah Martin",
      role: "Business Owner",
      rating: 5
    }
  ];

  return (
    <div className="flex-col justify-center items-center mx-auto py-20 relative text-center px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h1 className="text-3xl lg:text-4xl font-bold mb-4">
            What Our Clients Say
          </h1>
          <p className="text-lg text-default-600 max-w-2xl mx-auto">
            Ils nous font confiance. Découvrez leurs retours d&apos;expérience.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {testimonials.map((testimonial) => (
            <Card 
              key={testimonial.id}
              className="border-transparent bg-white/5 dark:bg-default-400/10 backdrop-blur-lg backdrop-saturate-[1.8]
                       transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:bg-white/10
                       group cursor-pointer h-full"
              isPressable
            >
              <CardBody className="p-6 flex flex-col">
                {/* Quote Icon */}
                <div className="text-primary mb-4 self-start">
                  <QuoteIcon className="w-8 h-8 opacity-70" />
                </div>
                
                {/* Rating Stars */}
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-yellow-500 text-lg">★</span>
                  ))}
                </div>
                
                {/* Quote */}
                <p className="text-default-700 italic text-left mb-6 flex-grow">
                  {testimonial.quote}
                </p>
                
                {/* Author Info */}
                <div className="flex items-center mt-auto pt-4 border-t border-default-200">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white text-xl font-bold mr-4">
                    {testimonial.author.charAt(0)}
                  </div>
                  <div className="text-left">
                    <p className="font-bold">{testimonial.author}</p>
                    <p className="text-default-500 text-sm">{testimonial.role}</p>
                  </div>
                </div>
              </CardBody>
            </Card>
          ))}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="text-center p-6">
            <div className="text-4xl font-bold text-primary mb-2">95%</div>
            <p className="text-default-600">Clients satisfaits</p>
          </div>
          <div className="text-center p-6">
            <div className="text-4xl font-bold text-primary mb-2">50+</div>
            <p className="text-default-600">Projets réalisés</p>
          </div>
          <div className="text-center p-6">
            <div className="text-4xl font-bold text-primary mb-2">100%</div>
            <p className="text-default-600">Livraison dans les délais</p>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link
            className={buttonStyles({
              color: "primary",
              radius: "full",
              variant: "shadow",
              size: "lg",
              className: "px-8"
            })}
            href={siteConfig.links.form || "#contact"}
          >
            Rejoignez nos clients satisfaits
          </Link>
          <p className="text-default-500 mt-4">
            Transformez votre vision en réalité
          </p>
        </div>
      </div>
    </div>
  );
}