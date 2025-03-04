"use client";

import { useTranslation } from "next-i18next";
import { CompanyProps } from "@/components/Company/company.types";

const getCompany = (id: number) => {
  const { t } = useTranslation(["companies"]);
  const companies = t("companies:list", { returnObjects: true }) as CompanyProps[];

  return companies.find((company) => company.id === id);
}

export default getCompany;
