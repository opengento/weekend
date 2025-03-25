"use client";

import { useTranslation } from "next-i18next";
import StatsComponent from "@/components/Stats/Stats";
import { StatProps } from "@/components/Stats/stats.types";

interface Stats {
  className?: string
}

const Stats = ({ className }: Stats) => {
  const { t } = useTranslation(["association"]);
  const stats = t("association:stats", { returnObjects: true }) as StatProps[];

  return (
    <StatsComponent stats={stats} className={className} />
  );
};

export default Stats;
