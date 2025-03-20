"use client";

import Container from "@/layouts/Container";
import Article from "@/layouts/Article";
import Typography from "@/components/Typography/Typography";
import { useTranslation } from "next-i18next";
import MemberGrid from "@/components/Association/Member/MemberGrid";

export default function Page() {
  const { t } = useTranslation(["association"]);

  return (
    <Container size="large" className="flex flex-col gap-8 my-8">
      <Article>
        <Typography variant="h1" color="dark">
          {t("association:members.title")}
        </Typography>
        <Typography color="dark" className="whitespace-pre-wrap">
          {t("association:member.content")}
        </Typography>
      </Article>
      <Article>
        <MemberGrid />
      </Article>
    </Container>
  );
}
