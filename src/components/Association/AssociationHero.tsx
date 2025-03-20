"use client";

import Hero from "@/components/Hero/Hero";
import { useTranslation } from "next-i18next";
import { ButtonLinkProps } from "@/components/ButtonLink/link.types";
import ButtonLink from "@/components/ButtonLink/ButtonLink";
import { useId } from "react";

const AssociationHero = () => {
  const { t } = useTranslation(["association"]);
  const actions = t("association:hero.actions", { returnObjects: true }) as ButtonLinkProps[];
  const id = useId();

  return (
    <Hero imagePath="/images/media/bg.webp" size="full" blurAmount="lg">
      <div className="max-w-xl">
        <h1 className="mb-5 text-5xl font-bold">
          {t("association:hero.title")}
        </h1>
        <p className="mb-5 whitespace-pre-wrap">
          {t("association:hero.content")}
        </p>
        <div className="flex flex-col md:flex-row gap-8">
          {actions.map((action, index) => (
            <ButtonLink cta={action} key={`${id}-${index}`} />
          ))}
        </div>
      </div>
    </Hero>
  );
}

export default AssociationHero;
