"use client";

import { EventProps } from "@/components/Event/event.types";
import { FaTicket } from "react-icons/fa6";
import { useTranslation } from "next-i18next";
import Image from "next/image";
import React from "react";
import Typography from "@/components/Typography/Typography";
import Hero from "@/components/Hero/Hero";
import { FaArrowRight } from "react-icons/fa";
import ButtonLink from "@/components/ButtonLink/ButtonLink";
import { ButtonLinkProps } from "@/components/ButtonLink/link.types";

interface EventHero {
  event: EventProps;
}

const EventHero = ({ event }: EventHero) => {
  const { t } = useTranslation(["common"]);
  const eventLink = {
    label: t("common:KnowMore"),
    href: `events/${event.identifier}`,
    level: "primary"
  } as ButtonLinkProps;

  return (
    <Hero
      imagePath={event.bannerSrc}
      size="full"
    >
      <div className="max-w-4xl flex flex-row items-center gap-16">
        <div className="flex flex-col gap-5">
          <Typography variant="h1" weight="bold" color="dark">
            {event.title}
          </Typography>
          <Typography color="dark">
            {event.description}
          </Typography>
          <div className="flex flex-row flex-wrap items-center gap-8">
            <ButtonLink cta={eventLink} icon={<FaArrowRight />}/>
            {event.actions.registration && (
              <ButtonLink
                cta={event.actions.registration}
                icon={<FaTicket/>}
                className="btn lg:btn-wide"
              />
            )}
          </div>
        </div>
        <div className="hidden lg:block">
          <div className="flex flex-row justify-center items-center mb-8">
            <Image
              src={event.logoSrc}
              alt="logo"
              width={175}
              height={175}
            />
          </div>
          <div className="grid grid-flow-col gap-5 text-center auto-cols-max">
            <div className="flex flex-col">
            <span className="countdown font-mono font-bold text-5xl">
              <span style={{"--value": 15} as React.CSSProperties}>15</span>
            </span>
              {t("common:days")}
            </div>
            <div className="flex flex-col">
            <span className="countdown font-mono font-bold text-5xl">
              <span style={{"--value": 10} as React.CSSProperties}>10</span>
            </span>
              {t("common:hours")}
            </div>
            <div className="flex flex-col">
            <span className="countdown font-mono font-bold text-5xl">
              <span style={{"--value": 24} as React.CSSProperties}>24</span>
            </span>
              {t("common:min")}
            </div>
          </div>
        </div>
      </div>
    </Hero>
  );
};

export default EventHero;
