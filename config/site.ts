export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Next.js + NextUI",
  description: "Make beautiful websites regardless of your design experience.",
  navItems: [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "Solution",
      href: "/docs",
    },
    {
      label: "Portfolio",
      href: "/pricing",
    },
    {
      label: "Why Us ",
      href: "/blog",
    },
  ],
  navMenuItems: [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "Solution",
      href: "/docs",
    },
    {
      label: "Portfolio",
      href: "/pricing",
    },
    {
      label: "Why Us ",
      href: "/blog",
    },
  ],
  links: {
    github: "https://github.com/DarkInventor",
    twitter: "https://twitter.com/kathanmehtaa",
    docs: "#",//TODO
    discord: "#",
    sponsor: "#",
  },
};
