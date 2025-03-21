"use client";

import Image from "next/image";
import ButtonLink from "@/components/ButtonLink/ButtonLink";
import { EventProps } from "@/components/Event/event.types";
import { ButtonLinkProps } from "@/components/ButtonLink/link.types";
import {useTranslation} from "next-i18next";
import classNames from "classnames";

interface EventCard {
  event: EventProps;
  className?: string;
}

const EventCard = ({ event, className }: EventCard) => {
  const { t } = useTranslation(["common"]);
  const eventLink = {
    label: t("common:findOutMoreEvent"),
    href: `events/${event.identifier}`,
    level: "primary"
  } as ButtonLinkProps;

  return (
    <div className={classNames(
      "card card-md bg-base-100 shadow-sm",
      className
    )}>
      <div className="pt-8 px-8">
        <figure>
          <Image
            src={event.logoSrc}
            alt={event.title}
            width={160}
            height={160}
            className="h-40 w-auto object-contain"
          />
        </figure>
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
