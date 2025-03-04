"use client";

import { EventProps } from "@/components/Event/event.types";
import { FaTicket } from "react-icons/fa6";
import { useTranslation } from "next-i18next";
import Image from "next/image";
import Action from "@/components/Event/Action/Action";
import React from "react";

interface EventHero {
  event: EventProps;
}

const EventHero = ({ event }: EventHero) => {
  const { t } = useTranslation(["common"]);

  return (
    <div
      className="hero min-h-screen"
      style={{backgroundImage: `url(${event.bannerSrc})`}}>
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-neutral-content text-center">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">{event.title}</h1>
          <p className="mb-5">{event.description}</p>
          {event.actions.registration && (
            <Action
              cta={event.actions.registration}
              icon={<FaTicket />}
              className="btn-outline lg:btn-wide"
            />
          )}
        </div>
        <div className="hidden lg:block">
          <div className="flex flex-row justify-center items-center">
            <Image
              src={event.logoSrc}
              alt="logo"
              width={175}
              height={175}
            />
          </div>
          <div className="grid grid-flow-col gap-5 text-center auto-cols-max">
            <div className="flex flex-col">
              <span className="countdown font-mono text-5xl">
                <span style={{"--value": 15} as React.CSSProperties}>15</span>
              </span>
              {t("common:days")}
            </div>
            <div className="flex flex-col">
              <span className="countdown font-mono text-5xl">
                <span style={{"--value": 10} as React.CSSProperties}>10</span>
              </span>
              {t("common:hours")}
            </div>
            <div className="flex flex-col">
              <span className="countdown font-mono text-5xl">
                <span style={{"--value": 24} as React.CSSProperties}>24</span>
              </span>
              {t("common:min")}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventHero;
