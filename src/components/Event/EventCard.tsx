"use client";

import Image from "next/image";
import { useTranslation } from "next-i18next";
import classNames from "classnames";
import { Event } from "@/interfaces/event";
import { ButtonLink as ButtonLinkType } from "@/interfaces/link";
import ButtonLink from "@/components/ButtonLink/ButtonLink";
import Hero from "@/components/Hero/Hero";

interface EventCard {
  event: Event;
  showLogo?: boolean;
  className?: string;
}

const EventCard = ({ event, showLogo = true, className }: EventCard) => {
  const { t } = useTranslation(["common"]);
  const eventLink = {
    label: t("common:findOutMoreEvent"),
    href: `events/${event.identifier}`,
    level: "primary"
  } as ButtonLinkType;

  return (
    <div className={classNames(
      "card card-md bg-base-100 shadow-sm",
      className
    )}>
      <div className="pt-6 px-6">
        <Hero
          imagePath={event.bannerSrc}
          className="rounded-md p-4"
        >
          {showLogo && (
            <figure>
              <Image
                src={event.logoSrc}
                alt={event.title}
                width={160}
                height={160}
                className="h-30 w-auto object-contain"
              />
            </figure>
          )}
        </Hero>
      </div>
      <div className="card-body">
        <h3 className="card-title">{event.title}</h3>
        <p>{event.description}</p>
        <div className="card-actions justify-end mt-4">
          <ButtonLink cta={eventLink}/>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
