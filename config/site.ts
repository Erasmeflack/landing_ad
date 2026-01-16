export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "AFT GROUP Sarl — Agence Web & Branding en France",
  description: "Création de sites web professionnels, logos et identités visuelles. Transformez votre présence digitale et développez votre entreprise avec AFT GROUP.",
  navItems: [
    {
      label: "Accueil",
      href: "/",
    },
    {
      label: "Services",
      href: "#services",
    },
    {
      label: "Portfolio",
      href: "#portfolio",
    },
    {
      label: "Tarifs",
      href: "#pricing",
    },
    {
      label: "Contact",
      href: "#contact",
    },
  ],
  navMenuItems: [
    {
      label: "Accueil",
      href: "/",
    },
    {
      label: "Services",
      href: "#services",
    },
    {
      label: "Portfolio",
      href: "#portfolio",
    },
    {
      label: "Tarifs",
      href: "#pricing",
    },
    {
      label: "Contact",
      href: "#contact",
    },
  ],
  // Informations de contact unifiées
  contact: {
    phone: "+33 7 44 76 72 31",
    whatsapp: "+33744767231",
    email: "aftgroup.fr@gmail.com",
    address: "Paris, France",
    businessName: "AFT GROUP Sarl",
  },
  links: {
    form: "#contact",
    consultation: "https://calendly.com/aftgroup-fr/30min",
    whatsapp: "https://wa.me/33744767231",
  },
};
