"use client";

import Time from "@/components/Time/Time";
import { useTranslation } from "next-i18next";
import { FaClock } from "react-icons/fa";
import Typography from "@/components/Typography/Typography";
import { EventDate } from "@/interfaces/event";

interface Date {
  date: EventDate;
}

const Date = ({ date }: Date) => {
  const { t } = useTranslation(["common"]);

  return (
    <div className="flex flex-col gap-2">
      <Typography color="dark" className="underline">
        {t("common:Schedules")}
      </Typography>
      <div className="flex flex-row items-center gap-2">
        <FaClock className="size-4 text-primary" width={16} />
        <span>{t("common:From2")}</span>
        <Time date={date.from} type="dateTime" />
      </div>
      <div className="flex flex-row items-center gap-2">
        <FaClock className="size-4 text-primary rotate-180" width={16} />
        <span>{t("common:to2")}</span>
        <Time date={date.to} type="dateTime" />
      </div>
    </div>
  );
};

export default Date;
