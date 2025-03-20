"use client";

import { CompanyProps } from "@/components/Company/company.types";
import Image from "next/image";
import { useTranslation } from "next-i18next";
import { ButtonLinkProps } from "@/components/ButtonLink/link.types";
import ButtonLink from "@/components/ButtonLink/ButtonLink";

interface CompanyCard {
  company: CompanyProps;
  size?: "xs" | "sm" | "md" | "lg" | "xl";
}

const CompanyCard = ({ company, size = "md" }: CompanyCard) => {
  const { t } = useTranslation(["common"]);
  const companyLink = {
    label: t("common:visitCompany"),
    href: company.url,
    target: "_blank",
    level: "primary"
  } as ButtonLinkProps;

  return (
    <div className={`card card-${size} bg-base-100 shadow-sm`}>
      <div className="pt-8 px-8">
        <figure>
          <Image
            src={company.logoSrc}
            alt={company.name}
            width={160}
            height={160}
            className="h-40 w-auto object-contain"
          />
        </figure>
      </div>
      <div className="card-body">
        <h2 className="card-title">{company.name}</h2>
        <p>{company.description}</p>
        <div className="card-actions justify-end">
          <ButtonLink cta={companyLink} />
        </div>
      </div>
    </div>
  );
};

export default CompanyCard;
