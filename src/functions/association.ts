"use client";

import { useTranslation } from "next-i18next";
import { CompanyProps } from "@/components/Company/company.types";
import getCompany from "@/functions/company";

const getMembers = () => {
  const { t } = useTranslation(["association"]);
  const members = t(
    "association:data.membership.companies",
    { returnObjects: true }
  ) as number[];

  return members.reduce((companies, companyId) => {
    const company = getCompany(companyId);
    if (company) {
      companies.push(company);
    }

    return companies;
  }, [] as CompanyProps[]);
}

export default getMembers;
