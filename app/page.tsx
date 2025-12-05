import { Link } from "@nextui-org/link";
import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code";
import { button as buttonStyles } from "@nextui-org/theme";

import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";
import Badge from "@/components/chip";
import TrustedBy from "@/components/trusted";
import PrototypeImg from "@/components/prototype-img";
import FeaturesBento from "@/components/feature-bento";
import Problem from "@/components/problem";
import Solution from "@/components/solution";
import Integrations from "@/components/integrations";
import { LastButNotLeast } from "@/components/last-but-not-least";

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10 ">
      <Badge />
      <div className="inline-block max-w-sm lg:max-w-4xl text-center justify-center text-2xl">
        <h1 className={title({ size: "lg" })}>Des Sites Web &nbsp;</h1>
        <h1 className={title({ color: "violet", size: "lg" })}>
          Professionnels&nbsp;
        </h1>
        <br />
        <h1 className={title({ size: "lg" })}>& un </h1>
        <h1 className={title({ color: "violet", size: "lg" })}>Branding</h1>
        <h1 className={title({ size: "lg" })}>
          {" "}
          Qui Font Grandir Votre Entreprise
        </h1>
        <h2 className="font-normal text-gray-500 py-10">
          Nous créons des logos modernes, des interfaces élégantes et des sites
          web performants qui transforment vos visiteurs en clients.
        </h2>
        <h2 className="font-normal text-gray-500 py-2">
          Construisez votre image. Boostez vos ventes. Développez votre
          activité.
        </h2>
      </div>

      <div className="flex flex-col sm:flex-row gap-3">
        <Link
          isExternal
          className={buttonStyles({
            color: "primary",
            radius: "full",
            variant: "shadow",
          })}
          href={siteConfig.links.form}
        >
          Obtenir un Devis Gratuit
        </Link>
        <Link
          isExternal
          className={buttonStyles({ variant: "bordered", radius: "full" })}
          href={siteConfig.links.github}
          //TODO
        >
          Réserver une Consultation de 30 min
        </Link>
      </div>
      <div className="mt-20 lg:mt-30 flex-col justify-center items-center mx-auto">
        <h1 className="text-2xl lg:text-4xl font-semibold flex- justify-center items-center mx-auto text-center">
          Vos Clients Sont en Ligne&nbsp;
        </h1>
        <h1 className="text-2xl lg:text-4xl font-semibold flex- justify-center items-center mx-auto text-center">
          Mais Votre Présence Digitale Travaille Contre Vous
        </h1>
        <Problem />
        <Solution />

      </div>
      <Integrations />
      <LastButNotLeast />
    </section>
  );
}
