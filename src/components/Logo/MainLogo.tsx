"use client";

import Logo from "@/components/Logo/Logo";
import { useTranslation } from "next-i18next";

interface MainLogoProps {
  size?: "small" | "medium" | "large";
  showText?: boolean;
}

const MainLogo = ({ size = "medium", showText = true }: MainLogoProps) => {
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
