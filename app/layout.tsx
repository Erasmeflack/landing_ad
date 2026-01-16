import "@/styles/globals.css";
import { Metadata, Viewport } from "next";
import { Link } from "@nextui-org/link";
import clsx from "clsx";

import { Providers } from "./providers";

import { siteConfig } from "@/config/site";
import { fontSans } from "@/config/fonts";
import { Navbar } from "@/components/navbar";

export const metadata: Metadata = {
  title: {
    default: "AFT GROUP | Agence Web & Branding en France",
    template: `%s | AFT GROUP`,
  },
  description: "Création de sites web professionnels, logos et identités visuelles sur mesure. Transformez votre présence digitale et développez votre entreprise avec AFT GROUP, votre agence web en France.",
  keywords: [
    "création site web",
    "agence web France",
    "branding",
    "logo design",
    "identité visuelle",
    "site internet professionnel",
    "développement web",
    "UI/UX design",
    "e-commerce",
    "refonte site web",
    "agence digitale",
    "création logo",
  ],
  authors: [{ name: "AFT GROUP" }],
  creator: "AFT GROUP Sarl",
  publisher: "AFT GROUP",
  metadataBase: new URL("https://aftgroup.fr"),
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://aftgroup.fr",
    siteName: "AFT GROUP",
    title: "AFT GROUP | Agence Web & Branding en France",
    description: "Création de sites web professionnels, logos et identités visuelles sur mesure.",
  },
  twitter: {
    card: "summary_large_image",
    title: "AFT GROUP | Agence Web & Branding",
    description: "Création de sites web professionnels et branding sur mesure en France.",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#000000" },
  ],
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="fr">
      <head />
      <body
        className={clsx(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable,
        )}
      >
        <Providers themeProps={{ attribute: "class", defaultTheme: "dark" }}>
          <div className="relative flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-grow pt-16">{children}</main>
            
            {/* Footer */}
            <footer className="w-full bg-default-50 dark:bg-default-100/10 border-t border-default-200/50">
              <div className="container mx-auto max-w-7xl px-6 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
                  {/* Brand Column */}
                  <div className="lg:col-span-1 space-y-6">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary via-secondary to-primary flex items-center justify-center shadow-lg">
                        <span className="text-white font-bold text-xl">A</span>
                      </div>
                      <div>
                        <p className="font-bold text-2xl bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                          AFT GROUP
                        </p>
                        <p className="text-default-500 text-sm">Sarl</p>
                      </div>
                    </div>
                    <p className="text-default-600 leading-relaxed">
                      Votre partenaire de confiance pour créer une présence digitale 
                      qui fait la différence. Sites web, branding et stratégie digitale.
                    </p>
                    <div className="flex gap-4">
                      <Link
                        href={siteConfig.links.whatsapp}
                        isExternal
                        className="w-10 h-10 rounded-full bg-green-500/10 flex items-center justify-center text-green-500 hover:bg-green-500 hover:text-white transition-all duration-300"
                      >
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M16.6 14c-.2-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1-.2.2-.6.8-.8 1-.1.2-.3.2-.5.1-.7-.3-1.4-.7-2-1.2-.5-.5-1-1.1-1.4-1.7-.1-.2 0-.4.1-.5.1-.1.2-.3.4-.4.1-.1.2-.3.2-.4.1-.1.1-.3 0-.4-.1-.1-.6-1.3-.8-1.8-.1-.7-.3-.7-.5-.7h-.5c-.2 0-.5.2-.6.3-.6.6-.9 1.3-.9 2.1.1.9.4 1.8 1 2.6 1.1 1.6 2.5 2.9 4.2 3.7.5.2.9.4 1.4.5.5.2 1 .2 1.6.1.7-.1 1.3-.6 1.7-1.2.2-.4.2-.8.1-1.2l-.4-.2m2.5-9.1C15.2 1 8.9 1 5 4.9c-3.2 3.2-3.8 8.1-1.6 12L2 22l5.3-1.4c1.5.8 3.1 1.2 4.7 1.2 5.5 0 9.9-4.4 9.9-9.9.1-2.6-1-5.1-2.8-7m-2.7 14c-1.3.8-2.8 1.3-4.4 1.3-1.5 0-2.9-.4-4.2-1.1l-.3-.2-3.1.8.8-3-.2-.3c-2.4-4-1.2-9 2.7-11.5S16.6 3.7 19 7.5c2.4 3.9 1.3 9-2.6 11.4"/>
                        </svg>
                      </Link>
                      <Link
                        href={`mailto:${siteConfig.contact.email}`}
                        className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all duration-300"
                      >
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M22 6C22 4.9 21.1 4 20 4H4C2.9 4 2 4.9 2 6V18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6ZM20 6L12 11L4 6H20ZM20 18H4V8L12 13L20 8V18Z"/>
                        </svg>
                      </Link>
                      <Link
                        href={`tel:${siteConfig.contact.phone.replace(/\s/g, '')}`}
                        className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center text-secondary hover:bg-secondary hover:text-white transition-all duration-300"
                      >
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                        </svg>
                      </Link>
                    </div>
                  </div>

                  {/* Services Column */}
                  <div>
                    <h3 className="font-bold text-lg mb-6 text-default-800">Nos Services</h3>
                    <ul className="space-y-3">
                      {[
                        "Logo & Identité visuelle",
                        "Design UI/UX",
                        "Site Vitrine",
                        "Site E-commerce",
                        "Application Web",
                        "Refonte de site",
                      ].map((service) => (
                        <li key={service}>
                          <Link
                            className="text-default-600 hover:text-primary transition-colors duration-300 flex items-center gap-2 group"
                            href="#services"
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-primary/50 group-hover:bg-primary transition-colors duration-300" />
                            {service}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Navigation Column */}
                  <div>
                    <h3 className="font-bold text-lg mb-6 text-default-800">Navigation</h3>
                    <ul className="space-y-3">
                      {[
                        { label: "Accueil", href: "/" },
                        { label: "Nos Services", href: "#services" },
                        { label: "Portfolio", href: "#portfolio" },
                        { label: "Tarifs", href: "#pricing" },
                        { label: "Témoignages", href: "#testimonials" },
                        { label: "Contact", href: "#contact" },
                      ].map((link) => (
                        <li key={link.label}>
                          <Link
                            className="text-default-600 hover:text-primary transition-colors duration-300 flex items-center gap-2 group"
                            href={link.href}
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-secondary/50 group-hover:bg-secondary transition-colors duration-300" />
                            {link.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Contact Column */}
                  <div>
                    <h3 className="font-bold text-lg mb-6 text-default-800">Contact</h3>
                    <ul className="space-y-4">
                      <li className="flex items-start gap-3">
                        <span className="text-primary mt-1">📍</span>
                        <div>
                          <p className="text-default-600">{siteConfig.contact.address}</p>
                          <p className="text-default-500 text-sm">Service France & International</p>
                        </div>
                      </li>
                      <li className="flex items-center gap-3">
                        <span className="text-primary">📞</span>
                        <Link 
                          href={`tel:${siteConfig.contact.phone.replace(/\s/g, '')}`}
                          className="text-default-600 hover:text-primary transition-colors"
                        >
                          {siteConfig.contact.phone}
                        </Link>
                      </li>
                      <li className="flex items-center gap-3">
                        <span className="text-primary">✉️</span>
                        <Link 
                          href={`mailto:${siteConfig.contact.email}`}
                          className="text-default-600 hover:text-primary transition-colors"
                        >
                          {siteConfig.contact.email}
                        </Link>
                      </li>
                      <li className="mt-6">
                        <Link
                          className="inline-flex items-center gap-2 bg-gradient-to-r from-primary to-secondary text-white px-6 py-3 rounded-full font-medium hover:shadow-lg hover:shadow-primary/25 transition-all duration-300"
                          href="#contact"
                        >
                          Demander un devis
                          <span>→</span>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Bottom Bar */}
                <div className="mt-16 pt-8 border-t border-default-200/50">
                  <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-default-500 text-sm text-center md:text-left">
                      © {new Date().getFullYear()} AFT GROUP Sarl. Tous droits réservés.
                    </p>
                    <div className="flex items-center gap-6">
                      <Link
                        className="text-default-500 hover:text-primary text-sm transition-colors"
                        href="/mentions-legales"
                      >
                        Mentions légales
                      </Link>
                      <Link
                        className="text-default-500 hover:text-primary text-sm transition-colors"
                        href="/confidentialite"
                      >
                        Confidentialité
                      </Link>
                      <Link
                        className="text-default-500 hover:text-primary text-sm transition-colors"
                        href="/cgv"
                      >
                        CGV
                      </Link>
                    </div>
                  </div>
                  <p className="text-center text-default-400 text-xs mt-6">
                    Fait avec ❤️ en France par AFT GROUP
                  </p>
                </div>
              </div>
            </footer>
          </div>
        </Providers>
      </body>
    </html>
  );
}
