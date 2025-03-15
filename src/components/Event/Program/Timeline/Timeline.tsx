"use client";

import classNames from "classnames";
import { useTranslation } from "next-i18next";
import { EventProgramProps } from "@/components/Event/event.types";
import Time from "@/components/Time/Time";
import { useId } from "react";

interface Timeline {
  program: EventProgramProps;
}

const Timeline = ({ program } : Timeline) => {
  const { t } = useTranslation(["common"]);
  const id = useId();

  return (
    <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
      {program.schedules.map((schedule, index) => (
        <li key={`timeline-${id}-${index}`}>
          <hr />
          <div className="timeline-middle">
            <div className="rounded-full border border-secondary text-[0px] p-0.5">
              <div className="inline-block rounded-full bg-primary w-4 h-4"></div>
            </div>
          </div>
          <div className={classNames(
            "mb-10",
            {
              "timeline-start md:text-end pr-2": index % 2 === 0,
              "timeline-end pl-2": index % 2 === 1,
            }
          )}>
            <span>
              {t("common:From")}
              <Time date={schedule.date.from} type="time" className="font-mono italic mx-2" />
              {t("common:to")}
              <Time date={schedule.date.to} type="time" className="font-mono italic mx-2" />
            </span>
            <div className="text-lg font-black">{schedule.name}</div>
            {schedule.description}
          </div>
          <hr/>
        </li>
      ))}
    </ul>
  );
};

export default Timeline;
