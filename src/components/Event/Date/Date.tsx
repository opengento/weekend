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
  const dateFormatOptions: Intl.DateTimeFormatOptions = {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric"
  };

  return (
    <div className="flex flex-col gap-2">
      <Typography color="dark" weight="semibold" className="underline">
        {t("common:Schedules")}
      </Typography>
      <div className="flex flex-row items-center gap-x-2">
        <FaClock className="size-4 text-primary" width={16} />
        <p>
          <span>{t("common:From2")}</span>&nbsp;
          <Time date={date.from} type="date" options={dateFormatOptions}/>&nbsp;
          <span>{t("common:fromT")}</span>&nbsp;
          <Time date={date.from} type="time"/>
        </p>
      </div>
      <div className="flex flex-row items-center gap-x-2">
        <FaClock className="size-4 text-primary rotate-180" width={16}/>
        <p>
          <span>{t("common:To2")}</span>&nbsp;
          <Time date={date.to} type="date" options={dateFormatOptions}/>&nbsp;
          <span>{t("common:untilT")}</span>&nbsp;
          <Time date={date.to} type="time"/>
        </p>
      </div>
    </div>
  );
};

export default Date;
