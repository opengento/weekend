"use client";

import Hero from "@/components/Hero/Hero";
import { useTranslation } from "next-i18next";
import Link from "next/link";
import { FaArrowRight, FaPenToSquare } from "react-icons/fa6";

const AssociationHero = () => {
  const { t } = useTranslation(["association"]);

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
          <Link href={t("association:hero.href1")} className="btn btn-primary">
            {t("association:hero.label1")}
            <FaArrowRight />
          </Link>

          <Link href={t("association:hero.href2")} className="btn btn-primary">
            {t("association:hero.label2")}
            <FaPenToSquare />
          </Link>
        </div>
      </div>
    </Hero>
  );
}

export default AssociationHero;
