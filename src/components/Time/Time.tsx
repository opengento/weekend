"use client";

import { useTranslation } from "next-i18next";

interface Time {
  date: Date | string;
  type?: "date" | "time" | "dateTime";
  locales?: Intl.LocalesArgument;
  options?: Intl.DateTimeFormatOptions;
  className?: string | undefined;
}

const Time = ({
  date,
  type = "dateTime",
  locales,
  options,
  className
}: Time) => {
  const { t } = useTranslation(["common"]);
  if (locales === undefined) {
    locales = t("common:locale");
  }
  if (options === undefined) {
    options = {
      "time": { hour: "2-digit", minute: "2-digit" },
      "date": { year: "numeric", month: "numeric", day: "numeric"},
      "dateTime": {
        year: "numeric",
        month: "numeric",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit"
      }
    }[type] as Intl.DateTimeFormatOptions;
  }
  if (typeof date === "string") {
    date = new Date(date);
  }
  const renderer = {
    "time": (): string => date.toLocaleTimeString(locales, options),
    "date": (): string => date.toLocaleDateString(locales, options),
    "dateTime": (): string => date.toLocaleString(locales, options),
  };

  return (
    <time dateTime={date.toISOString()} className={className}>
      {renderer[type]()}
    </time>
  );
};

export default Time;
