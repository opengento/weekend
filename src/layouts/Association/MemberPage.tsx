"use client";

import { useTranslation } from "next-i18next";
import { Company } from "@/interfaces/company";
import { Enrol as EnrolType } from "@/interfaces/association";
import Article from "@/layouts/Article";
import Typography from "@/components/Typography/Typography";
import CompanyList from "@/components/Company/CompanyList";
import Enrol from "@/components/Association/Enrol/Enrol";
import Hero from "@/components/Hero/Hero";

interface MemberPage {
  members: Company[]
}

const MemberPage = ({ members }: MemberPage) => {
  const { t } = useTranslation(["association"]);
  const enrol = t("association:enrol.company", { returnObjects: true }) as EnrolType;

  return (
    <>
      <Hero imagePath="/images/media/unity.jpg" className="rounded-lg min-h-64">
        <div className="flex flex-col gap-2 justify-center items-center">
          <Typography variant="h1" color="dark" underlineColor="primary">
            {t("association:members.title")}
          </Typography>
          <Typography color="dark" className="whitespace-pre-wrap">
            {t("association:members.content")}
          </Typography>
        </div>
      </Hero>
      <Article >
        <CompanyList companies={members} />
      </Article>
      <Article>
        <Enrol enrol={enrol} />
      </Article>
    </>
  );
};

export default MemberPage;
