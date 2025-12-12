"use client";

import React from "react";
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
} from "@/components/icons";

export default function ContactUs() {
  // Contact information
  const contactInfo = {
    phone: "+33123456789",
    whatsapp: "+33612345678",
    email: "contact@aftgroup.org",
    businessName: "AFT GROUP Sarl",
  };

  // WhatsApp message template
  const whatsappMessage = encodeURIComponent(
    `Bonjour AFT GROUP,\n\nJe suis intéressé(e) par vos services de développement web et branding. \n\nPouvez-vous m'en dire plus sur :\n- Vos disponibilités pour une consultation\n- Votre processus de travail\n- Les tarifs pour un projet similaire\n\nMerci !`
  );

  // Email template
  const emailSubject = encodeURIComponent("Demande de renseignements - AFT GROUP");
  const emailBody = encodeURIComponent(
    `Bonjour l'équipe AFT GROUP,\n\nJe souhaiterais obtenir plus d'informations sur vos services.\n\nVoici quelques détails sur mon projet :\n\n[Merci de décrire votre projet ici]\n\nCordialement,\n`
  );

  // Handle button clicks
  const handleWhatsAppClick = () => {
    window.open(
      `https://wa.me/${contactInfo.whatsapp}?text=${whatsappMessage}`,
      "_blank"
    );
  };

  const handlePhoneClick = () => {
    window.location.href = `tel:${contactInfo.phone}`;
  };

  const handleEmailClick = () => {
    window.location.href = `mailto:${contactInfo.email}?subject=${emailSubject}&body=${emailBody}`;
  };

  const handleCallRequest = () => {
    window.open("#call-schedule", "_blank");
  };

  return (
    <div className="flex justify-center w-full py-20 px-4 bg-gradient-to-b from-background to-default-100">
      <div className="max-w-4xl mx-auto w-full">
        <div className="text-center mb-12">
          <Chip variant="flat" color="secondary" className="mb-4">
            Prêt à démarrer ?
          </Chip>

          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Discutons de votre projet
          </h2>

          <p className="text-lg text-default-600 max-w-xl mx-auto">
            Prenez rendez-vous pour une consultation gratuite de 30 minutes ou envoyez-nous
            directement votre demande.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Quick Contact */}
          <div className="lg:col-span-1 space-y-6">
            <Card className="border-transparent bg-white/5 dark:bg-default-400/10 backdrop-blur-lg backdrop-saturate-[1.8]">
              <CardBody className="p-6">
                <h3 className="font-bold text-lg mb-6">Contact direct</h3>

                <div className="space-y-4">
                  <Button
                    onClick={handleWhatsAppClick}
                    className="w-full justify-start bg-gradient-to-r from-green-500 to-green-600 text-white"
                    startContent={<WhatsAppIcon className="w-5 h-5" />}
                    variant="shadow"
                  >
                    WhatsApp
                    <span className="ml-auto text-xs opacity-90">Message pré-rempli</span>
                  </Button>

                  <Button
                    onClick={handlePhoneClick}
                    color="primary"
                    variant="shadow"
                    className="w-full justify-start"
                    startContent={<PhoneIcon className="w-5 h-5" />}
                  >
                    Appeler
                    <span className="ml-auto text-xs opacity-90">{contactInfo.phone}</span>
                  </Button>

                  <Button
                    onClick={handleEmailClick}
                    color="warning"
                    variant="shadow"
                    className="w-full justify-start"
                    startContent={<MailIcon className="w-5 h-5" />}
                  >
                    Email
                    <span className="ml-auto text-xs opacity-90">{contactInfo.email}</span>
                  </Button>
                </div>

                <div className="mt-8 pt-6 border-t border-default-200 space-y-4">
                  <div className="flex items-center gap-3">
                    <ClockIcon className="w-5 h-5 text-primary" />
                    <div>
                      <p className="font-medium">Horaires d&apos;ouverture</p>
                      <p className="text-default-500 text-sm">Lundi - Vendredi</p>
                      <p className="text-default-500 text-sm">9h00 - 18h00</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <MapPinIcon className="w-5 h-5 text-primary" />
                    <div>
                      <p className="font-medium">Localisation</p>
                      <p className="text-default-500 text-sm">Paris, France</p>
                      <p className="text-default-500 text-xs">
                        Service international disponible
                      </p>
                    </div>
                  </div>

                  {/* Response Time */}
                  <div className="mt-4 p-3 bg-primary/5 rounded-lg">
                    <p className="text-sm text-default-700">
                      <strong>✅ Réponse garantie</strong> dans les 24 heures
                    </p>
                  </div>
                </div>
              </CardBody>
            </Card>

            {/* Quick Stats */}
            <Card className="border-transparent bg-white/5 dark:bg-default-400/10 backdrop-blur-lg backdrop-saturate-[1.8]">
              <CardBody className="p-4">
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-primary">24h</div>
                    <p className="text-default-500 text-xs">Réponse</p>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-primary">100%</div>
                    <p className="text-default-500 text-xs">Satisfaction</p>
                  </div>
                </div>
              </CardBody>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="border-transparent bg-white/5 dark:bg-default-400/10 backdrop-blur-lg backdrop-saturate-[1.8]">
              <CardBody className="p-6 lg:p-8">
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Input
                      isRequired
                      label="Votre nom"
                      placeholder="John Doe"
                      variant="bordered"
                      name="name"
                    />

                    <Input
                      isRequired
                      type="email"
                      label="Votre email"
                      placeholder="john@exemple.com"
                      variant="bordered"
                      name="email"
                    />
                  </div>

                  <Input
                    label="Entreprise"
                    placeholder="Nom de votre entreprise"
                    variant="bordered"
                    name="company"
                  />

                  <Input
                    label="Téléphone"
                    placeholder="+33 1 23 45 67 89"
                    variant="bordered"
                    name="phone"
                    description="Optionnel - pour vous rappeler plus rapidement"
                  />

                  <Select
                    isRequired
                    label="Type de projet"
                    placeholder="Sélectionnez"
                    variant="bordered"
                    name="projectType"
                  >
                    <SelectItem key="logo" value="logo">
                      Logo & Identité visuelle
                    </SelectItem>
                    <SelectItem key="ui-ux" value="ui-ux">
                      Design UI/UX
                    </SelectItem>
                    <SelectItem key="website" value="website">
                      Site web
                    </SelectItem>
                    <SelectItem key="ecommerce" value="ecommerce">
                      E-commerce
                    </SelectItem>
                    <SelectItem key="branding" value="branding">
                      Branding complet
                    </SelectItem>
                    <SelectItem key="consultation" value="consultation">
                      Consultation seulement
                    </SelectItem>
                    <SelectItem key="other" value="other">
                      Autre
                    </SelectItem>
                  </Select>

                  <Textarea
                    isRequired
                    label="Description du projet"
                    placeholder="Décrivez votre projet, vos objectifs, votre budget et vos délais..."
                    variant="bordered"
                    minRows={4}
                    name="message"
                    description="Plus vous êtes détaillé, plus notre réponse sera précise"
                  />

                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button
                      color="primary"
                      variant="shadow"
                      className="flex-1 font-bold py-6"
                      type="submit"
                      endContent={<SendIcon className="w-4 h-4" />}
                    >
                      Envoyer la demande
                    </Button>

                    <Button
                      onClick={handleCallRequest}
                      color="secondary"
                      variant="flat"
                      className="flex-1 py-6"
                      startContent={<PhoneIcon className="w-4 h-4" />}
                    >
                      Programmer un appel
                    </Button>
                  </div>

                  <p className="text-default-500 text-sm text-center">
                    En soumettant ce formulaire, vous acceptez notre{" "}
                    <Link href="/privacy" className="text-primary">
                      politique de confidentialité
                    </Link>
                    . Nous ne partagerons jamais vos informations avec des tiers.
                  </p>
                </form>
              </CardBody>
            </Card>

            

            {/* Schedule Info */}
            <div className="mt-6 p-4 bg-default-100 rounded-lg">
              <h4 className="font-bold mb-2">🕐 Consultation gratuite</h4>
              <p className="text-sm text-default-600">
                Réservez un créneau de 30 minutes pour discuter de votre projet sans
                engagement. Nous répondons à toutes vos questions et vous proposons une
                solution adaptée.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}