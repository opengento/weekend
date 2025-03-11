"use client";

import { useTranslation } from "next-i18next";
import Article from "@/layouts/Article";
import Typography from "@/components/Typography/Typography";
import Link from "next/link";

const Faq = () => {
  const { t } = useTranslation("common");

  return (
    <Article align="center">
      <Typography variant="subtitle1" color="dark" weight="semibold" underlineColor="secondary">
        {t("common:push.faq.title")}
      </Typography>
      <Typography color="dark" className="whitespace-pre-wrap">
        {t("common:push.faq.content")}
      </Typography>
      <div className="flex flex-row gap-4 justify-center items-center">
        <Link
          href={t("common:push.faq.href")}
          className="btn btn-primary btn-outline"
        >
          {t("common:push.faq.label")}
        </Link>
        <Link
          href={t("common:push.contact.href")}
          className="btn btn-primary btn-outline"
        >
          {t("common:push.contact.label")}
        </Link>
      </div>
    </Article>
  );
};

export default Faq;
