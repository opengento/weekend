"use client";

import Logo from "@/components/Logo/Logo";
import { useTranslation } from "next-i18next";

interface MainLogo {
  size?: "small" | "medium" | "large";
  showText?: boolean;
}

const MainLogo = ({ size = "medium", showText = true }: MainLogo) => {
  const { t } = useTranslation(["common"]);

  return (
    <Logo
      href="/"
      logoSrc={t("common:logoSrc")}
      logoText={t("common:logoText")}
      showText={showText}
      size={size}
    />
  );
};

export default MainLogo;
