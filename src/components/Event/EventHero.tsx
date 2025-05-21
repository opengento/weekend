"use client";

import React from "react";
import { FaArrowRight, FaTicket } from "react-icons/fa6";
import { useTranslation } from "next-i18next";
import { ButtonLink as ButtonLinkType } from "@/interfaces/link";
import { Event } from "@/interfaces/event";
import Image from "next/image";
import Typography from "@/components/Typography/Typography";
import Hero from "@/components/Hero/Hero";
import ButtonLink from "@/components/ButtonLink/ButtonLink";

interface EventHero {
  event: Event;
}

const EventHero = ({ event }: EventHero) => {
  const { t } = useTranslation(["common"]);
  const eventLink = {
    label: t("common:KnowMore"),
    href: `events/${event.identifier}`,
    level: "primary"
  } as ButtonLinkType;
  const showTimer = false; //ToDo make it dynamic so we can enabled it again

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
          <Typography color="dark" className="whitespace-pre-wrap">
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
              className="object-contain w-xl"
            />
          </div>
          {showTimer && (
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
          )}
        </div>
      </div>
    </Hero>
  );
};

export default EventHero;
