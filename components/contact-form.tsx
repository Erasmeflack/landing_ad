"use client";

import React, { useState } from "react";
import {
  Card,
  CardBody,
  Input,
  Textarea,
  Select,
  SelectItem,
  Button,
  Chip,
  Link,
} from "@nextui-org/react";
import {
  PhoneIcon,
  WhatsAppIcon,
  MailIcon,
  SendIcon,
  MapPinIcon,
  ClockIcon,
  CheckIcon,
} from "@/components/icons";
import { siteConfig } from "@/config/site";

export default function ContactUs() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // WhatsApp message template
  const whatsappMessage = encodeURIComponent(
    `Bonjour AFT GROUP,\n\nJe suis intéressé(e) par vos services de développement web et branding.\n\nPouvez-vous m'en dire plus sur :\n- Vos disponibilités pour une consultation\n- Votre processus de travail\n- Les tarifs pour un projet similaire\n\nMerci !`
  );

  // Email template
  const emailSubject = encodeURIComponent("Demande de renseignements - Projet Web/Branding");
  const emailBody = encodeURIComponent(
    `Bonjour l'équipe AFT GROUP,\n\nJe souhaiterais obtenir plus d'informations sur vos services.\n\nVoici quelques détails sur mon projet :\n\n[Merci de décrire votre projet ici]\n\nCordialement,\n`
  );

  const handleWhatsAppClick = () => {
    window.open(
      `https://wa.me/${siteConfig.contact.whatsapp}?text=${whatsappMessage}`,
      "_blank"
    );
  };

  const handlePhoneClick = () => {
    window.location.href = `tel:${siteConfig.contact.phone.replace(/\s/g, '')}`;
  };

  const handleEmailClick = () => {
    window.location.href = `mailto:${siteConfig.contact.email}?subject=${emailSubject}&body=${emailBody}`;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    // Reset after 5 seconds
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  const projectTypes = [
    { key: "logo", label: "Logo & Identité visuelle" },
    { key: "ui-ux", label: "Design UI/UX" },
    { key: "website", label: "Site vitrine" },
    { key: "ecommerce", label: "Site E-commerce" },
    { key: "webapp", label: "Application Web" },
    { key: "branding", label: "Branding complet" },
    { key: "refonte", label: "Refonte de site existant" },
    { key: "consultation", label: "Consultation stratégique" },
    { key: "other", label: "Autre projet" },
  ];

  const budgetRanges = [
    { key: "small", label: "Moins de 500€" },
    { key: "medium", label: "500€ - 1 500€" },
    { key: "large", label: "1 500€ - 3 000€" },
    { key: "enterprise", label: "Plus de 3 000€" },
    { key: "discuss", label: "À discuter" },
  ];

  return (
    <section id="contact" className="py-20 px-4 bg-gradient-to-b from-background via-default-50/50 to-background relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
      
      <div className="max-w-6xl mx-auto w-full relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <Chip variant="flat" color="secondary" className="mb-4">
            Prêt à démarrer ?
          </Chip>

          <h2 className="text-3xl lg:text-5xl font-bold mb-4">
            Discutons de{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Votre Projet
            </span>
          </h2>

          <p className="text-lg text-default-600 max-w-xl mx-auto">
            Consultation gratuite de 30 minutes. Réponse garantie sous 24h.
            Aucun engagement.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Quick Contact Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            {/* Contact Methods */}
            <Card className="border-none bg-gradient-to-br from-white/10 to-white/5 dark:from-default-400/20 dark:to-default-400/5 backdrop-blur-xl shadow-xl">
              <CardBody className="p-6">
                <h3 className="font-bold text-xl mb-6 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                  Contact Direct
                </h3>

                <div className="space-y-4">
                  <Button
                    onClick={handleWhatsAppClick}
                    className="w-full justify-start bg-gradient-to-r from-green-500 to-green-600 text-white font-medium shadow-lg hover:shadow-green-500/25 hover:scale-[1.02] transition-all duration-300"
                    startContent={<WhatsAppIcon className="w-5 h-5" />}
                    size="lg"
                  >
                    <div className="flex flex-col items-start">
                      <span>WhatsApp</span>
                      <span className="text-xs opacity-80">Réponse instantanée</span>
                    </div>
                  </Button>

                  <Button
                    onClick={handlePhoneClick}
                    className="w-full justify-start bg-gradient-to-r from-primary to-primary/80 text-white font-medium shadow-lg hover:shadow-primary/25 hover:scale-[1.02] transition-all duration-300"
                    startContent={<PhoneIcon className="w-5 h-5" />}
                    size="lg"
                  >
                    <div className="flex flex-col items-start">
                      <span>Appeler</span>
                      <span className="text-xs opacity-80">{siteConfig.contact.phone}</span>
                    </div>
                  </Button>

                  <Button
                    onClick={handleEmailClick}
                    className="w-full justify-start bg-gradient-to-r from-secondary to-secondary/80 text-white font-medium shadow-lg hover:shadow-secondary/25 hover:scale-[1.02] transition-all duration-300"
                    startContent={<MailIcon className="w-5 h-5" />}
                    size="lg"
                  >
                    <div className="flex flex-col items-start">
                      <span>Email</span>
                      <span className="text-xs opacity-80">{siteConfig.contact.email}</span>
                    </div>
                  </Button>
                </div>

                {/* Info Cards */}
                <div className="mt-8 pt-6 border-t border-default-200/50 space-y-5">
                  <div className="flex items-start gap-4 group">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                      <ClockIcon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold text-default-800">Horaires</p>
                      <p className="text-default-500 text-sm">Lun - Ven : 9h - 18h</p>
                      <p className="text-default-500 text-sm">Sam : 10h - 14h</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 group">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                      <MapPinIcon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold text-default-800">Localisation</p>
                      <p className="text-default-500 text-sm">{siteConfig.contact.address}</p>
                      <p className="text-xs text-primary/70 font-medium mt-1">
                        🌍 Service France entière & International
                      </p>
                    </div>
                  </div>
                </div>
              </CardBody>
            </Card>

            {/* Trust Indicators */}
            <Card className="border-none bg-gradient-to-br from-primary/5 to-secondary/5 backdrop-blur-xl">
              <CardBody className="p-4">
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div className="p-3">
                    <div className="text-3xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">24h</div>
                    <p className="text-default-500 text-xs mt-1">Réponse max.</p>
                  </div>
                  <div className="p-3">
                    <div className="text-3xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">100%</div>
                    <p className="text-default-500 text-xs mt-1">Satisfaction</p>
                  </div>
                </div>
              </CardBody>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="border-none bg-gradient-to-br from-white/10 to-white/5 dark:from-default-400/20 dark:to-default-400/5 backdrop-blur-xl shadow-xl">
              <CardBody className="p-6 lg:p-8">
                {isSubmitted ? (
                  <div className="text-center py-12">
                    <div className="w-20 h-20 rounded-full bg-green-500/20 flex items-center justify-center mx-auto mb-6">
                      <CheckIcon className="w-10 h-10 text-green-500" />
                    </div>
                    <h3 className="text-2xl font-bold text-green-500 mb-2">
                      Message envoyé !
                    </h3>
                    <p className="text-default-600">
                      Nous vous répondrons dans les 24 heures.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <Input
                        isRequired
                        label="Votre nom complet"
                        placeholder="Jean Dupont"
                        variant="bordered"
                        name="name"
                        classNames={{
                          inputWrapper: "border-default-200 hover:border-primary focus-within:border-primary",
                        }}
                      />

                      <Input
                        isRequired
                        type="email"
                        label="Votre email"
                        placeholder="jean@entreprise.fr"
                        variant="bordered"
                        name="email"
                        classNames={{
                          inputWrapper: "border-default-200 hover:border-primary focus-within:border-primary",
                        }}
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <Input
                        label="Entreprise"
                        placeholder="Nom de votre entreprise"
                        variant="bordered"
                        name="company"
                        classNames={{
                          inputWrapper: "border-default-200 hover:border-primary focus-within:border-primary",
                        }}
                      />

                      <Input
                        isRequired
                        label="Téléphone"
                        placeholder="+33 6 12 34 56 78"
                        variant="bordered"
                        name="phone"
                        classNames={{
                          inputWrapper: "border-default-200 hover:border-primary focus-within:border-primary",
                        }}
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <Select
                        isRequired
                        label="Type de projet"
                        placeholder="Sélectionnez"
                        variant="bordered"
                        name="projectType"
                        classNames={{
                          trigger: "border-default-200 hover:border-primary data-[focus=true]:border-primary",
                        }}
                      >
                        {projectTypes.map((type) => (
                          <SelectItem key={type.key} value={type.key}>
                            {type.label}
                          </SelectItem>
                        ))}
                      </Select>

                      <Select
                        label="Budget estimé"
                        placeholder="Sélectionnez"
                        variant="bordered"
                        name="budget"
                        classNames={{
                          trigger: "border-default-200 hover:border-primary data-[focus=true]:border-primary",
                        }}
                      >
                        {budgetRanges.map((range) => (
                          <SelectItem key={range.key} value={range.key}>
                            {range.label}
                          </SelectItem>
                        ))}
                      </Select>
                    </div>

                    <Textarea
                      isRequired
                      label="Description de votre projet"
                      placeholder="Décrivez votre projet, vos objectifs, vos délais souhaités..."
                      variant="bordered"
                      minRows={4}
                      name="message"
                      description="Plus vous êtes détaillé, plus notre réponse sera précise et personnalisée"
                      classNames={{
                        inputWrapper: "border-default-200 hover:border-primary focus-within:border-primary",
                      }}
                    />

                    <div className="flex flex-col sm:flex-row gap-4">
                      <Button
                        type="submit"
                        isLoading={isSubmitting}
                        className="flex-1 bg-gradient-to-r from-primary to-secondary text-white font-bold py-6 shadow-lg hover:shadow-primary/25 hover:scale-[1.02] transition-all duration-300"
                        size="lg"
                        endContent={!isSubmitting && <SendIcon className="w-5 h-5" />}
                      >
                        {isSubmitting ? "Envoi en cours..." : "Envoyer ma demande"}
                      </Button>

                      <Button
                        as={Link}
                        href={siteConfig.links.consultation}
                        isExternal
                        className="flex-1 border-2 border-primary text-primary font-bold py-6 hover:bg-primary/10 transition-all duration-300"
                        variant="bordered"
                        size="lg"
                        startContent={<ClockIcon className="w-5 h-5" />}
                      >
                        Réserver un appel
                      </Button>
                    </div>

                    <p className="text-default-500 text-sm text-center">
                      En soumettant ce formulaire, vous acceptez notre{" "}
                      <Link href="/privacy" className="text-primary hover:underline">
                        politique de confidentialité
                      </Link>
                      . Vos données ne seront jamais partagées.
                    </p>
                  </form>
                )}
              </CardBody>
            </Card>

            {/* Bonus Info */}
            <Card className="mt-6 border-none bg-gradient-to-r from-primary/10 via-secondary/10 to-primary/10">
              <CardBody className="p-6">
                <div className="flex items-start gap-4">
                  <span className="text-3xl">🎁</span>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Consultation Gratuite</h4>
                    <p className="text-default-600 text-sm">
                      Réservez un créneau de 30 minutes pour discuter de votre projet.
                      Analyse gratuite, conseils personnalisés et devis détaillé offerts.
                    </p>
                  </div>
                </div>
              </CardBody>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
