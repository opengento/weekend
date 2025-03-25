"use client";

import { useTranslation } from "next-i18next";
import { Company } from "@/interfaces/company";
import { Enrol as EnrolType } from "@/interfaces/association";
import Article from "@/layouts/Article";
import Typography from "@/components/Typography/Typography";
import CompanyList from "@/components/Company/CompanyList";
import Enrol from "@/components/Association/Enrol/Enrol";

interface MemberList {
  members: Company[]
}

const MemberList = ({ members }: MemberList) => {
  const { t } = useTranslation(["association"]);
  const enrol = t("association:enrol.company", { returnObjects: true }) as EnrolType;

  return (
    <>
      <Article>
        <Typography variant="h1" color="dark" underlineColor="primary">
          {t("association:members.title")}
        </Typography>
        <Typography color="dark" className="whitespace-pre-wrap">
          {t("association:members.content")}
        </Typography>
        <Enrol enrol={enrol} />
      </Article>
      <Article >
        <CompanyList companies={members} />
      </Article>
    </>
  );
};

export default MemberList;
