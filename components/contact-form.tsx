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
  Link
} from "@nextui-org/react";
import { PhoneIcon, WhatsAppIcon, MailIcon, SendIcon, MapPinIcon, ClockIcon } from "@/components/icons";

export default function ContactUs() {
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
            Prenez rendez-vous pour une consultation gratuite de 30 minutes ou envoyez-nous directement votre demande.
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
                    color="success"
                    variant="shadow"
                    className="w-full justify-start"
                    startContent={<WhatsAppIcon className="w-5 h-5" />}
                  >
                    WhatsApp
                  </Button>
                  
                  <Button
                    color="primary"
                    variant="bordered"
                    className="w-full justify-start"
                    startContent={<PhoneIcon className="w-5 h-5" />}
                  >
                    Appeler
                  </Button>
                  
                  <Button
                    color="warning"
                    variant="bordered"
                    className="w-full justify-start"
                    startContent={<MailIcon className="w-5 h-5" />}
                  >
                    Email
                  </Button>
                </div>

                <div className="mt-8 pt-6 border-t border-default-200 space-y-4">
                  <div className="flex items-center gap-3">
                    <ClockIcon className="w-5 h-5 text-primary" />
                    <div>
                      <p className="font-medium">Horaires</p>
                      <p className="text-default-500 text-sm">Lun-Ven: 9h-18h</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <MapPinIcon className="w-5 h-5 text-primary" />
                    <div>
                      <p className="font-medium">Localisation</p>
                      <p className="text-default-500 text-sm">Paris, France</p>
                    </div>
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
                    />
                    
                    <Input
                      isRequired
                      type="email"
                      label="Votre email"
                      placeholder="john@exemple.com"
                      variant="bordered"
                    />
                  </div>

                  <Input
                    label="Entreprise"
                    placeholder="Nom de votre entreprise"
                    variant="bordered"
                  />

                  <Select
                    isRequired
                    label="Type de projet"
                    placeholder="Sélectionnez"
                    variant="bordered"
                  >
                    <SelectItem key="logo" value="logo">Logo & Identité visuelle</SelectItem>
                    <SelectItem key="ui-ux" value="ui-ux">Design UI/UX</SelectItem>
                    <SelectItem key="website" value="website">Site web</SelectItem>
                    <SelectItem key="ecommerce" value="ecommerce">E-commerce</SelectItem>
                    <SelectItem key="all" value="all">Package complet</SelectItem>
                  </Select>

                  <Textarea
                    isRequired
                    label="Description du projet"
                    placeholder="Décrivez votre projet, vos objectifs et vos attentes..."
                    variant="bordered"
                    minRows={4}
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
                      color="default"
                      variant="bordered"
                      className="flex-1 py-6"
                    >
                      Demander un appel
                    </Button>
                  </div>

                  <p className="text-default-500 text-sm text-center">
                    En soumettant ce formulaire, vous acceptez notre{' '}
                    <Link href="#" className="text-primary">politique de confidentialité</Link>.
                  </p>
                </form>
              </CardBody>
            </Card>

            {/* Info Notice */}
            <div className="mt-6 p-4 bg-primary/10 rounded-lg border border-primary/20">
              <div className="flex items-start gap-3">
                <div className="text-primary mt-1">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-default-700">
                    <strong>Conseil :</strong> Plus vous détaillez votre projet, plus nous pourrons vous fournir une estimation précise et des recommandations adaptées.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}