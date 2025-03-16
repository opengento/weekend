import { EventDateProps } from "@/components/Event/event.types";
import Time from "@/components/Time/Time";
import { useTranslation } from "next-i18next";
import { FaClock } from "react-icons/fa";

interface Date {
  date: EventDateProps;
}

const Date = ({ date }: Date) => {
  const { t } = useTranslation(["common"]);

  return (
    <div className="flex flex-col gap-2">
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
