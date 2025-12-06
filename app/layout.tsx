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
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en">
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
            <main className="flex-grow">
              {children}
            </main>
            <footer className="w-full bg-default-100/50 backdrop-blur-sm">
              <div className="container mx-auto max-w-7xl px-6 py-12">
                {/* Main Footer Content */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                  {/* Brand Column */}
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                        <span className="text-white font-bold text-lg">A</span>
                      </div>
                      <div>
                        <p className="font-bold text-xl">AFT GROUP</p>
                        <p className="text-default-500 text-sm">Sarl</p>
                      </div>
                    </div>
                    <p className="text-default-600 text-sm">
                      Solutions professionnelles de développement web et branding pour faire grandir votre entreprise.
                    </p>
                  </div>

                  {/* Services Column */}
                  <div>
                    <h3 className="font-bold text-lg mb-4">Services</h3>
                    <ul className="space-y-2">
                      <li>
                        <Link href="https://aftgroup.org/services" className="text-default-600 hover:text-primary transition-colors">
                          Logo & Identité visuelle
                        </Link>
                      </li>
                      <li>
                        <Link href="https://aftgroup.org/services" className="text-default-600 hover:text-primary transition-colors">
                          Design UI/UX
                        </Link>
                      </li>
                      <li>
                        <Link href="https://aftgroup.org/services" className="text-default-600 hover:text-primary transition-colors">
                          Développement Web
                        </Link>
                      </li>
                      <li>
                        <Link href="https://aftgroup.org/services" className="text-default-600 hover:text-primary transition-colors">
                          E-commerce
                        </Link>
                      </li>
                    </ul>
                  </div>

                  {/* Company Column */}
                  <div>
                    <h3 className="font-bold text-lg mb-4">Entreprise</h3>
                    <ul className="space-y-2">
                      <li>
                        <Link href="#process" className="text-default-600 hover:text-primary transition-colors">
                          Notre Processus
                        </Link>
                      </li>
                      <li>
                        <Link href="#portfolio" className="text-default-600 hover:text-primary transition-colors">
                          Portfolio
                        </Link>
                      </li>
                      <li>
                        <Link href="/pricing" className="text-default-600 hover:text-primary transition-colors">
                          Tarifs
                        </Link>
                      </li>
                      <li>
                        <Link href="/about" className="text-default-600 hover:text-primary transition-colors">
                          À propos
                        </Link>
                      </li>
                    </ul>
                  </div>

                  {/* Contact Column */}
                  <div>
                    <h3 className="font-bold text-lg mb-4">Contact</h3>
                    <ul className="space-y-2">
                      <li className="text-default-600">aftgroup@gmail.org</li>
                      <li className="text-default-600">+229 01 66 84 26 83</li>
                      <li>
                        <Link href="#contact" className="text-primary font-medium">
                          Demander un devis →
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Bottom Bar */}
                <div className="mt-12 pt-8 border-t border-default-200">
                  <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-default-500 text-sm">
                      © {new Date().getFullYear()} AFT GROUP Sarl. Tous droits réservés.
                    </p>
                    
                    <div className="flex items-center gap-4">
                      <Link href="https://aftgroup.org/politiques" className="text-default-500 hover:text-primary text-sm transition-colors">
                        Confidentialité
                      </Link>
                      <Link href="https://aftgroup.org/condition" className="text-default-500 hover:text-primary text-sm transition-colors">
                        Conditions
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </footer>
          </div>
        </Providers>
      </body>
    </html>
  );
}