"use client";

import { useTranslation } from "next-i18next";
import Image from "next/image";
import { FaTicket } from "react-icons/fa6";
import { Event } from "@/interfaces/event";
import { isActive } from "@/lib/event/date";
import Container from "@/layouts/Container";
import Article from "@/layouts/Article";
import Typography from "@/components/Typography/Typography";
import Hero from "@/components/Hero/Hero";
import Program from "@/components/Event/Program/Program";
import SponsorList from "@/components/Event/Sponsor/SponsorList";
import StaffGrid from "@/components/Event/Staff/StaffGrid";
import EventInfo from "@/components/Event/EventInfo";
import ButtonLink from "@/components/ButtonLink/ButtonLink";

interface EventPage {
  event: Event;
}

const EventPage = ({ event }: EventPage) => {
  const { t } = useTranslation(["events"]);

  return (
    <Container size="large" className="flex flex-col gap-8 my-8">
      <Hero imagePath={event.bannerSrc} size="xl" className="rounded-lg p-8">
        <div className="flex flex-col items-center gap-4">
          <div className="flex flex-col md:flex-row items-center gap-4">
            <Image
              src={event.logoSrc}
              alt=""
              width={56}
              height={56}
              className="w-14 object-contain"
            />
            <Typography variant="h1" weight="semibold" color="dark">
              {event.title}
            </Typography>
          </div>
          {event.actions.registration && isActive(event) && (
            <ButtonLink
              cta={event.actions.registration}
              icon={<FaTicket />}
            />
          )}
        </div>
      </Hero>
      <Article>
        <Typography color="dark" className="whitespace-pre-wrap">
          {event.content}
        </Typography>
      </Article>
      <Article color="base-100" align="center">
        <Typography variant="h2" color="dark" underlineColor="secondary">
          {t("events:information.title")}
        </Typography>
        <EventInfo event={event} />
      </Article>
      <Article color="base-200">
        <Typography variant="h2" color="dark" underlineColor="secondary">
          {t("events:program.title")}
        </Typography>
        <Program event={event}/>
      </Article>
      {event.sponsors.length > 0 && (
        <Article align="center">
          <Typography variant="h2" color="dark" underlineColor="secondary">
            {t("events:sponsors.title")}
          </Typography>
          <Typography variant="subtitle1" color="dark" className="whitespace-pre-wrap mb-4">
            {t("events:sponsors.subtitle")}
          </Typography>
          <SponsorList sponsors={event.sponsors}/>
        </Article>
      )}
      {event.staff.length > 0 && (
        <Article color="base-100" align="center">
          <Typography variant="h2" color="dark" underlineColor="secondary">
            {t("events:staff.title")}
          </Typography>
          <Typography variant="subtitle1" color="dark" className="whitespace-pre-wrap mb-4">
            {t("events:staff.subtitle")}
          </Typography>
          <StaffGrid staff={event.staff} />
        </Article>
      )}
    </Container>
  );
}

export default EventPage;
