"use client";

import classNames from "classnames";
import { useTranslation } from "next-i18next";
import { EventProgramProps } from "@/components/Event/event.types";
import Time from "@/components/Time/Time";

interface Timeline {
  id: string;
  program: EventProgramProps;
}

const Timeline = ({ id, program } : Timeline) => {
  const { t } = useTranslation(["common"]);

  return (
    <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
      {program.schedules.map((schedule, index) => (
        <li key={`timeline-${id}-${index}`}>
          <div className="timeline-middle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-5 w-5">
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clipRule="evenodd"/>
            </svg>
          </div>
          <div className={classNames(
            "mb-10 md:text-end",
            {
              "timeline-start": index % 2 === 1,
              "timeline-end": index % 2 === 0,
            }
          )}>
            <span>
              {t("common:from")}
              <Time date={schedule.date.from} className="font-mono italic" />
              {t("common:to")}
              <Time date={schedule.date.to} className="font-mono italic" />
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
