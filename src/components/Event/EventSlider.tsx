"use client";

import { useId } from "react";
import Image from "next/image";
import { useTranslation } from "next-i18next";
import { ButtonLink as ButtonLinkType } from "@/interfaces/link";
import { Event } from "@/interfaces/event";
import ButtonLink from "@/components/ButtonLink/ButtonLink";
import Typography from "@/components/Typography/Typography";
import Time from "@/components/Time/Time";

interface EventSlider {
  events: Event[];
  className?: string;
}

const EventSlider = ({ events, className }: EventSlider) => {
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
        {sameDay && (
          <>
            -
            <Time date={event.date.to} type="date"/>
          </>
        )}
      </span>
    );
  };

  return (
    <div className="carousel rounded-box flex gap-8">
      {events.map((event, index) => (
        <div
          className="carousel-item w-sm flex flex-col justify-center items-center gap-4 p-4 rounded-lg border border-primary shadow bg-gradient-to-r from-red-500 to-orange-500"
          key={`${id}-${index}`}
        >
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
            weight="thin"
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
