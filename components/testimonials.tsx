"use client";

import React from "react";
import { Link } from "@nextui-org/link";
import { button as buttonStyles } from "@nextui-org/theme";
import { Card, CardBody, Chip } from "@nextui-org/react";

import { siteConfig } from "@/config/site";
import { QuoteIcon } from "@/components/icons";

export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      quote:
        "AFT GROUP s'investit dans les projets de chacun cherchant à chaque fois à créer un projet qui se démarque et qui a pour objectif principal d'apporter une réelle plus-value.",
      author: "Victoire F.D.",
      role: "Fondatrice de Startup",
      company: "Tech Innovate",
      rating: 5,
      avatar: "V",
    },
    {
      id: 2,
      quote:
        "La conception UI/UX correspondait exactement à ce dont nous avions besoin. Nos utilisateurs adorent cette nouvelle expérience et leur engagement a immédiatement augmenté.",
      author: "Virginie Fauquinon",
      role: "CEO & Fondatrice",
      company: "Digital Solutions",
      rating: 5,
      avatar: "V",
    },
    {
      id: 3,
      quote:
        "Leur équipe a transformé notre présence en ligne. Notre nouveau site web est moderne, rapide et génère trois fois plus de prospects qu'avant.",
      author: "Sarah Martin",
      role: "Directrice Marketing",
      company: "Growth Agency",
      rating: 5,
      avatar: "S",
    },
  ];

  const stats = [
    { value: "98%", label: "Clients satisfaits", icon: "😊" },
    { value: "50+", label: "Projets réalisés", icon: "🚀" },
    { value: "100%", label: "Livraison à temps", icon: "⏱️" },
    { value: "24h", label: "Temps de réponse", icon: "💬" },
  ];

  return (
    <section id="testimonials" className="py-20 px-4 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent pointer-events-none" />
      
      <div className="container mx-auto max-w-6xl relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <Chip 
            color="secondary" 
            variant="flat" 
            className="mb-4 animate-pulse"
          >
            Témoignages
          </Chip>
          <h2 className="text-3xl lg:text-5xl font-bold mb-4">
            Ce Que Disent{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Nos Clients
            </span>
          </h2>
          <p className="text-lg text-default-600 max-w-2xl mx-auto">
            Ils nous ont fait confiance et ont transformé leur présence digitale.
            Découvrez leurs retours d&apos;expérience.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {testimonials.map((testimonial, index) => (
            <Card
              key={testimonial.id}
              className="border-transparent bg-white/5 dark:bg-default-400/10 backdrop-blur-lg backdrop-saturate-[1.8]
                       transition-all duration-500 hover:scale-[1.03] hover:shadow-2xl hover:shadow-primary/10
                       group cursor-pointer h-full relative overflow-hidden"
              style={{
                animationDelay: `${index * 150}ms`,
              }}
            >
              {/* Gradient border effect */}
              <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-primary/20 via-transparent to-secondary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <CardBody className="p-6 flex flex-col relative z-10">
                {/* Quote Icon */}
                <div className="text-primary mb-4 self-start transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                  <QuoteIcon className="w-10 h-10 opacity-60" />
                </div>

                {/* Rating Stars */}
                <div className="flex mb-4 gap-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span 
                      key={i} 
                      className="text-yellow-400 text-xl transform group-hover:scale-110 transition-transform duration-300"
                      style={{ transitionDelay: `${i * 50}ms` }}
                    >
                      ★
                    </span>
                  ))}
                </div>

                {/* Quote */}
                <p className="text-default-700 dark:text-default-300 italic text-left mb-6 flex-grow leading-relaxed">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>

                {/* Author Info */}
                <div className="flex items-center mt-auto pt-4 border-t border-default-200/50">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white text-xl font-bold mr-4 shadow-lg group-hover:shadow-primary/30 transition-shadow duration-300">
                    {testimonial.avatar}
                  </div>
                  <div className="text-left">
                    <p className="font-bold text-lg group-hover:text-primary transition-colors duration-300">
                      {testimonial.author}
                    </p>
                    <p className="text-default-500 text-sm">
                      {testimonial.role}
                    </p>
                    <p className="text-primary/70 text-xs font-medium">
                      {testimonial.company}
                    </p>
                  </div>
                </div>
              </CardBody>
            </Card>
          ))}
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {stats.map((stat, index) => (
            <Card
              key={index}
              className="bg-gradient-to-br from-white/10 to-white/5 dark:from-default-400/20 dark:to-default-400/5 
                       backdrop-blur-lg border-none shadow-xl
                       hover:scale-105 transition-all duration-300"
            >
              <CardBody className="text-center py-8">
                <span className="text-3xl mb-2 block">{stat.icon}</span>
                <div className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-2">
                  {stat.value}
                </div>
                <p className="text-default-600 font-medium">{stat.label}</p>
              </CardBody>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Card className="bg-gradient-to-br from-primary/10 via-secondary/10 to-primary/10 border-none inline-block">
            <CardBody className="px-12 py-8">
              <h3 className="text-2xl font-bold mb-4">
                Prêt à rejoindre nos clients satisfaits ?
              </h3>
              <p className="text-default-600 mb-6 max-w-md mx-auto">
                Discutons de votre projet et créons ensemble quelque chose d&apos;extraordinaire.
              </p>
              <Link
                className={buttonStyles({
                  color: "primary",
                  radius: "full",
                  variant: "shadow",
                  size: "lg",
                  className: "px-10 font-bold hover:scale-105 transition-transform duration-300",
                })}
                href="#contact"
              >
                Commencer Mon Projet
              </Link>
            </CardBody>
          </Card>
        </div>
      </div>
    </section>
  );
}
