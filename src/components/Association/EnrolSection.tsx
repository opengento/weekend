"use client";

import { useTranslation } from "next-i18next";
import { Enrol as EnrolType } from "@/interfaces/association";
import Enrol from "@/components/Association/Enrol/Enrol";

const EnrolSection = () => {
  const { t } = useTranslation(["association"]);
  const enrolIndividual = t("association:enrol.individual", { returnObjects: true }) as EnrolType;
  const enrolCompany = t("association:enrol.company", { returnObjects: true }) as EnrolType;

  return (
    <div className="flex flex-col lg:flex-row gap-8">
      <Enrol enrol={enrolIndividual} />
      <Enrol enrol={enrolCompany} />
    </div>
  );
};

export default EnrolSection;
