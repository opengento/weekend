"use client";

import { useTranslation } from "next-i18next";
import { Company } from "@/interfaces/company";
import Article from "@/layouts/Article";
import Typography from "@/components/Typography/Typography";
import CompanyList from "@/components/Company/CompanyList";

interface MemberList {
  members: Company[]
}

const MemberList = ({ members }: MemberList) => {
  const { t } = useTranslation(["association"]);

  return (
    <>
      <Article>
        <Typography variant="h1" color="dark" underlineColor="primary">
          {t("association:members.title")}
        </Typography>
        <Typography color="dark" className="whitespace-pre-wrap">
          {t("association:members.content")}
        </Typography>
      </Article>
      <Article >
        <CompanyList companies={members} />
      </Article>
    </>
  );
};

export default MemberList;
