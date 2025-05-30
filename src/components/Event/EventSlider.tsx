"use client";

import { useId } from "react";
import Image from "next/image";
import { useTranslation } from "next-i18next";
import classNames from "classnames";
import { isPast, isUpcoming } from "@/lib/event/date";
import { ButtonLink as ButtonLinkType } from "@/interfaces/link";
import { Event } from "@/interfaces/event";
import ButtonLink from "@/components/ButtonLink/ButtonLink";
import Typography from "@/components/Typography/Typography";
import Time from "@/components/Time/Time";

interface EventSlider {
  events: Event[];
}

const EventSlider = ({ events }: EventSlider) => {
  const { t } = useTranslation(["common"]);
  const createEventLink = (event: Event): ButtonLinkType => {
    return {
      label: t("common:findOutMoreEvent"),
      href: `events/${event.identifier}`,
      level: "neutral"
    }
  };
  const id = useId();

  const renderDate = (event: Event) => {
    const from = new Date(event.date.from);
    const to = new Date(event.date.to);
    const sameDay = from.getFullYear() === to.getFullYear() &&
      from.getMonth() === to.getMonth() &&
      from.getDate() === to.getDate();

    return (
      <span className="flex flex-row gap-2">
        <Time date={event.date.from} type="date"/>
        {!sameDay && (
          <>
            -
            <Time date={event.date.to} type="date"/>
          </>
        )}
      </span>
    );
  };

  const resolveStatus = (event: Event) => {
    if (isUpcoming(event)) {
      return t("common:Upcoming")
    }
    if (isPast(event)) {
      return t("common:Past")
    }

    return t("common:OnGoing")
  }

  return (
    <div className="carousel rounded-box flex gap-8 scrollbar-thin pb-4">
      {events.map((event, index) => (
        <div
          className={classNames(
            "carousel-item w-xs flex flex-col justify-center items-center gap-4 relative",
            "p-4 rounded-lg border border-primary shadow bg-gradient-to-r from-red-500 to-orange-500",
          )}
          key={`${id}-${index}`}
        >
          <div className="badge badge-outline badge-neutral absolute top-4 right-4">
            {resolveStatus(event)}
          </div>
          <figure>
            <Image
              src={event.logoSrc}
              alt={event.title}
              width={160}
              height={160}
              className="h-32 w-auto object-contain"
            />
          </figure>
          <Typography
            variant="h4"
            color="primary"
            align="center"
          >
            {event.title}
          </Typography>
          <Typography color="primary" align="center">
            {renderDate(event)}
          </Typography>
          <ButtonLink cta={createEventLink(event)} />
        </div>
      ))}
    </div>
  );
};

export default EventSlider;
