"use client";

import { CompanyProps } from "@/components/Company/company.types";
import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "next-i18next";

interface CompanyCard {
  company: CompanyProps;
  size?: "xs" | "sm" | "md" | "lg" | "xl";
}

const CompanyCard = ({ company, size = "md" }: CompanyCard) => {
  const { t } = useTranslation(["common"]);

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
          <Link href={company.url} title={company.name} className="btn btn-secondary">
            {t("common:visitCompany")}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CompanyCard;
