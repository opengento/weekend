"use client";

import { useId } from "react";
import { useTranslation } from "next-i18next";
import getCompany from "@/functions/company";
import { CompanyProps } from "@/components/Company/company.types";
import CompanyLogo from "@/components/Company/CompanyLogo";

const MemberGrid = () => {
  const { t } = useTranslation(["association"]);
  const id = useId();
  const members = t(
    "association:data.membership.companies",
    { returnObjects: true }
  ) as number[];

  const companies = members.reduce((companies, companyId) => {
    const company = getCompany(companyId);
    if (company) {
      companies.push(company);
    }

    return companies;
  }, [] as CompanyProps[]);

  return (
    <div className="flex flex-row flex-wrap justify-center items-center gap-8">
      {companies.map((company, index) => (
        <CompanyLogo
          key={`${id}-${index}`}
          company={company}
          className="bg-base-100 w-72 h-36 p-6 rounded-xl duration-500 hover:scale-110 hover:z-10"
        />
      ))}
    </div>
  );
};

export default MemberGrid;
