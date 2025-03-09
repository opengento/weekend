"use client";

import { useTranslation } from "next-i18next";
import { IndividualProps } from "@/components/Individual/individual.types";

const getIndividual = (id: number) => {
  const { t } = useTranslation(["individuals"]);
  const individuals = t("individuals:list", { returnObjects: true }) as IndividualProps[];

  return individuals.find((individual) => individual.id === id);
}

export default getIndividual;
