"use client";

import { Link } from "@nextui-org/link";
import { Button } from "@nextui-org/button";
import { Chip } from "@nextui-org/react";

import { siteConfig } from "@/config/site";
import Process from "@/components/process";
import Problem from "@/components/problem";
import Solution from "@/components/solution";
import Portfolio from "@/components/portfolio";
import Testimonials from "@/components/testimonials";
import Pricing from "@/components/pricing";
import ContactUs from "@/components/contact-form";
import FAQ from "@/components/faq";
import { WhatsAppIcon, SparklesIcon } from "@/components/icons";

export default function Home() {
  const scrollToSection = (sectionId: string) => {
    const element = document.querySelector(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="flex flex-col">
      {/* Hero Section - Optimisé mobile */}
      <section className="relative min-h-[85vh] flex flex-col items-center justify-center px-4 py-10 md:py-16 overflow-hidden">
        {/* Background Effects - réduits sur mobile */}
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-secondary/5 pointer-events-none" />
        <div className="hidden md:block absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-pulse" />
        <div className="hidden md:block absolute bottom-20 right-10 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
        
        {/* Version mobile des effets */}
        <div className="md:hidden absolute top-10 left-0 w-40 h-40 bg-primary/15 rounded-full blur-2xl" />
        <div className="md:hidden absolute bottom-10 right-0 w-40 h-40 bg-secondary/15 rounded-full blur-2xl" />

        <div className="relative z-10 max-w-5xl mx-auto text-center px-2">
          {/* Badge */}
          <div className="mb-4 md:mb-6">
            <Chip
              startContent={<SparklesIcon className="w-3 h-3 md:w-4 md:h-4" />}
              variant="shadow"
              color="secondary"
              size="sm"
              className="text-xs md:text-sm"
            >
              🇫🇷 Agence web française
            </Chip>
          </div>

          {/* Main Title - Responsive */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4 md:mb-6">
            <span className="text-default-900">Votre site web </span>
            <span className="bg-gradient-to-r from-primary via-purple-500 to-secondary bg-clip-text text-transparent">
              professionnel
            </span>
            <br className="hidden sm:block" />
            <span className="text-default-900"> qui </span>
            <span className="bg-gradient-to-r from-secondary via-pink-500 to-primary bg-clip-text text-transparent">
              convertit
            </span>
            <span className="text-default-900"> vos visiteurs</span>
            <br />
            <span className="text-default-900">en </span>
            <span className="relative inline-block">
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                clients
              </span>
              <svg className="absolute -bottom-1 left-0 w-full" height="6" viewBox="0 0 200 8">
                <path d="M0 7 Q100 0 200 7" stroke="url(#gradient)" strokeWidth="2" fill="none" />
                <defs>
                  <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#7c3aed" />
                    <stop offset="100%" stopColor="#ec4899" />
                  </linearGradient>
                </defs>
              </svg>
            </span>
          </h1>

          {/* Subtitle - Plus concis */}
          <p className="text-base md:text-lg text-default-600 max-w-2xl mx-auto mb-3 md:mb-4 leading-relaxed px-2">
            On crée des sites web et des identités visuelles qui attirent vos clients idéaux et boostent votre chiffre d&apos;affaires.
          </p>
          
          <p className="text-sm md:text-base text-default-500 max-w-xl mx-auto mb-6 md:mb-8 px-2">
            <span className="font-medium text-primary">+50 entreprises</span> nous font déjà confiance
          </p>

          {/* CTA Buttons - Optimisés mobile */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center items-center mb-6 md:mb-8 px-2">
            <Button
              size="lg"
              className="w-full sm:w-auto bg-gradient-to-r from-primary to-secondary text-white font-bold px-6 md:px-8 py-5 md:py-6 text-base shadow-xl hover:shadow-primary/30 hover:scale-105 transition-all duration-300"
              onClick={() => scrollToSection("#contact")}
            >
              Demander un devis gratuit
              <span className="ml-2">→</span>
            </Button>
            <Button
              as={Link}
              href={siteConfig.links.whatsapp}
              isExternal
              size="lg"
              variant="bordered"
              className="w-full sm:w-auto border-2 border-green-500 text-green-500 font-bold px-6 md:px-8 py-5 md:py-6 text-base hover:bg-green-500/10 hover:scale-105 transition-all duration-300"
              startContent={<WhatsAppIcon className="w-5 h-5" />}
            >
              Discuter maintenant
            </Button>
          </div>

          {/* Trust indicators - Optimisés mobile */}
          <div className="flex flex-wrap justify-center items-center gap-3 md:gap-6 text-default-500 px-2">
            <div className="flex items-center gap-1">
              <span className="text-green-500 text-sm">✓</span>
              <span className="text-xs md:text-sm">Devis gratuit</span>
            </div>
            <div className="flex items-center gap-1">
              <span className="text-green-500 text-sm">✓</span>
              <span className="text-xs md:text-sm">Réponse 24h</span>
            </div>
            <div className="flex items-center gap-1">
              <span className="text-green-500 text-sm">✓</span>
              <span className="text-xs md:text-sm">Satisfait ou remboursé</span>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-4 md:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <button 
            onClick={() => scrollToSection("#problem")}
            className="text-default-400 hover:text-primary transition-colors duration-300"
            aria-label="Scroll down"
          >
            <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </button>
        </div>
      </section>

      {/* Problem Section - Espacements réduits */}
      <section id="problem" className="py-10 md:py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-4 md:mb-6">
            <Chip color="warning" variant="flat" className="mb-3" size="sm">
              Le constat
            </Chip>
            <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-2">
              Vos clients vous cherchent en ligne...
            </h2>
            <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-default-500">
              mais est-ce qu&apos;ils vous trouvent ?
            </h2>
          </div>
          <Problem />
        </div>
      </section>

      {/* Solution Section */}
      <section id="services">
        <Solution />
      </section>

      {/* Process Section */}
      <section id="process">
        <Process />
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-6 md:py-10">
        <Portfolio />
      </section>

      {/* Testimonials Section */}
      <Testimonials />

      {/* Pricing Section */}
      <Pricing />

      {/* FAQ Section */}
      <FAQ />

      {/* Contact Section */}
      <ContactUs />

      {/* Floating WhatsApp Button */}
      <div className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-50">
        <Button
          as={Link}
          href={siteConfig.links.whatsapp}
          isExternal
          isIconOnly
          className="w-12 h-12 md:w-14 md:h-14 bg-green-500 text-white shadow-xl hover:shadow-green-500/40 hover:scale-110 transition-all duration-300"
          radius="full"
        >
          <WhatsAppIcon className="w-6 h-6 md:w-7 md:h-7" />
        </Button>
      </div>
    </div>
  );
}
