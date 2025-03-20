"use client";

import { useTranslation } from "next-i18next";
import Article from "@/layouts/Article";
import Typography from "@/components/Typography/Typography";
import ButtonLink from "@/components/ButtonLink/ButtonLink";
import { ButtonLinkProps } from "@/components/ButtonLink/link.types";

const Faq = () => {
  const { t } = useTranslation("common");
  const faq = t("common:push.faq.link", { returnObjects: true }) as ButtonLinkProps;
  const contact = t("common:push.contact", { returnObjects: true }) as ButtonLinkProps;

  return (
    <Article align="center">
      <Typography variant="subtitle1" color="dark" weight="semibold" underlineColor="secondary">
        {t("common:push.faq.title")}
      </Typography>
      <Typography color="dark" className="whitespace-pre-wrap">
        {t("common:push.faq.content")}
      </Typography>
      <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
        <ButtonLink cta={faq} className="btn-outline" />
        <ButtonLink cta={contact} className="btn-outline" />
      </div>
    </Article>
  );
};

export default Faq;
