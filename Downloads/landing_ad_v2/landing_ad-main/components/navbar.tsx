"use client";

import {
  Navbar as NextUINavbar,
  NavbarContent,
  NavbarMenu,
  NavbarBrand,
  NavbarItem,
  NavbarMenuItem,
  NavbarMenuToggle,
} from "@nextui-org/navbar";
import { Button } from "@nextui-org/button";
import { Link } from "@nextui-org/link";
import { link as linkStyles } from "@nextui-org/theme";
import NextLink from "next/link";
import clsx from "clsx";
import { useState, useEffect } from "react";

import { siteConfig } from "@/config/site";
import { WhatsAppIcon } from "@/components/icons";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setIsMenuOpen(false);
    if (href.startsWith("#")) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <NextUINavbar
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
      className={clsx(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        scrolled
          ? "bg-background/80 backdrop-blur-xl shadow-lg border-b border-default-200/50"
          : "bg-transparent"
      )}
      maxWidth="full"
      position="sticky"
    >
      <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
        <NavbarBrand as="li" className="gap-3 max-w-fit">
          <NextLink
            className="flex justify-start items-center gap-2 group"
            href="/"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary via-secondary to-primary flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300 shadow-lg">
              <span className="text-white font-bold text-lg">A</span>
            </div>
            <div className="hidden sm:block">
              <p className="font-bold text-xl bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                AFT GROUP
              </p>
            </div>
          </NextLink>
        </NavbarBrand>

        <ul className="hidden lg:flex gap-6 justify-center items-center mx-auto">
          {siteConfig.navItems.map((item) => (
            <NavbarItem key={item.href}>
              <button
                onClick={() => handleNavClick(item.href)}
                className={clsx(
                  linkStyles({ color: "foreground" }),
                  "relative py-2 text-default-600 hover:text-primary transition-colors duration-300",
                  "after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-gradient-to-r after:from-primary after:to-secondary",
                  "hover:after:w-full after:transition-all after:duration-300"
                )}
              >
                {item.label}
              </button>
            </NavbarItem>
          ))}
        </ul>
      </NavbarContent>

      <NavbarContent className="hidden md:flex basis-1/5 sm:basis-full" justify="end">
        <NavbarItem className="flex gap-3">
          <Button
            as={Link}
            href={siteConfig.links.whatsapp}
            isExternal
            className="bg-gradient-to-r from-green-500 to-green-600 text-white font-medium shadow-lg hover:shadow-green-500/25 hover:scale-105 transition-all duration-300"
            startContent={<WhatsAppIcon className="w-4 h-4" />}
            size="sm"
          >
            WhatsApp
          </Button>
          <Button
            onClick={() => handleNavClick("#contact")}
            className="bg-gradient-to-r from-primary to-secondary text-white font-semibold shadow-lg hover:shadow-primary/25 hover:scale-105 transition-all duration-300"
            size="sm"
          >
            Devis Gratuit
          </Button>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent className="lg:hidden basis-1 pl-4" justify="end">
        <Button
          as={Link}
          href={siteConfig.links.whatsapp}
          isExternal
          isIconOnly
          className="bg-green-500 text-white"
          size="sm"
          radius="full"
        >
          <WhatsAppIcon className="w-4 h-4" />
        </Button>
        <NavbarMenuToggle />
      </NavbarContent>

      <NavbarMenu className="pt-6 pb-6 bg-background/95 backdrop-blur-xl">
        <div className="mx-4 mt-2 flex flex-col gap-4">
          {siteConfig.navMenuItems.map((item, index) => (
            <NavbarMenuItem key={`${item.label}-${index}`}>
              <button
                onClick={() => handleNavClick(item.href)}
                className="w-full text-left py-3 px-4 rounded-xl text-lg font-medium text-default-700 hover:text-primary hover:bg-primary/10 transition-all duration-300"
              >
                {item.label}
              </button>
            </NavbarMenuItem>
          ))}
          
          <div className="mt-6 space-y-3">
            <Button
              as={Link}
              href={siteConfig.links.whatsapp}
              isExternal
              className="w-full bg-gradient-to-r from-green-500 to-green-600 text-white font-medium"
              startContent={<WhatsAppIcon className="w-5 h-5" />}
              size="lg"
            >
              Contacter via WhatsApp
            </Button>
            <Button
              onClick={() => handleNavClick("#contact")}
              className="w-full bg-gradient-to-r from-primary to-secondary text-white font-semibold"
              size="lg"
            >
              Obtenir un Devis Gratuit
            </Button>
          </div>
        </div>
      </NavbarMenu>
    </NextUINavbar>
  );
};
