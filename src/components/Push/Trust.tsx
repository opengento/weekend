"use client";

import Push from "@/components/Push/Push";
import { useTranslation } from "next-i18next";
import { CardProps } from "@/components/Push/push.types";

const Trust = () => {
  const { t } = useTranslation("common");
  const cards = t("common:pushCards", { returnObjects: true }) as CardProps[];

  return (
    <Push cards={cards} />
  );
};

export default Trust;
