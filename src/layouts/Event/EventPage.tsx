"use client";

import { useTranslation } from "next-i18next";
import Image from "next/image";
import {FaTicket, FaMicrophone, FaMoneyBill} from "react-icons/fa6";
import { Event } from "@/interfaces/event";
import { isUpcoming } from "@/lib/event/date";
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
  const hasSponsor = event.sponsors.length > 0;
  const hasStaff = event.staff.length > 0;
  const menuLinks = [
    {
      "label": t("events:information.title"),
      "href": "#information"
    },
    {
      "label": t("events:program.title"),
      "href": "#program"
    }
  ];
  if (hasSponsor) {
    menuLinks.push({
      "label": t("events:sponsors.title"),
      "href": "#sponsors"
    })
  }
  if (hasStaff) {
    menuLinks.push({
      "label": t("events:staff.title"),
      "href": "#staff"
    })
  }

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
              className="max-h-24 w-auto object-contain"
            />
            <Typography
              variant="h1"
              weight="semibold"
              color="dark"
              align="center"
              className="md:text-left"
            >
              {event.title}
            </Typography>
          </div>
          <div className="flex flex-col md:flex-row gap-4">
            {isUpcoming(event) && (
              <>
                {event.actions.registration && (
                  <ButtonLink
                    cta={event.actions.registration}
                    icon={<FaTicket />}
                  />
                )}
                {event.actions.sponsor && (
                  <ButtonLink
                    cta={event.actions.sponsor}
                    icon={<FaMoneyBill />}
                  />
                )}
                {event.actions.callForSpeakers && (
                  <ButtonLink
                    cta={event.actions.callForSpeakers}
                    icon={<FaMicrophone />}
                  />
                )}
              </>
            )}
          </div>
        </div>
      </Hero>
      <Article>
        <div className="flex flex-col lg:flex-row justify-center gap-4 mb-4">
          {menuLinks.map((cta) => (
            <ButtonLink cta={cta} key={`event-menu-link-${cta.href}`}/>
          ))}
        </div>
        <Typography color="dark" className="whitespace-pre-wrap">
          {event.content}
        </Typography>
      </Article>
      <Article color="base-100" align="center" id="information">
        <Typography variant="h2" color="dark" underlineColor="secondary">
          {t("events:information.title")}
        </Typography>
        <EventInfo event={event} />
      </Article>
      <Article color="base-200" id="program">
        <Typography variant="h2" color="dark" underlineColor="secondary">
          {t("events:program.title")}
        </Typography>
        <Program event={event}/>
      </Article>
      {hasSponsor && (
        <Article align="center" id="sponsors">
          <Typography variant="h2" color="dark" underlineColor="secondary">
            {t("events:sponsors.title")}
          </Typography>
          <Typography
            variant="subtitle1"
            color="dark"
            className="whitespace-pre-wrap mb-4"
          >
            {t("events:sponsors.subtitle")}
          </Typography>
          <SponsorList sponsors={event.sponsors}/>
        </Article>
      )}
      {hasStaff && (
        <Article color="base-100" align="center" id="staff">
          <Typography variant="h2" color="dark" underlineColor="secondary">
            {t("events:staff.title")}
          </Typography>
          <Typography
            variant="subtitle1"
            color="dark"
            className="whitespace-pre-wrap mb-4"
          >
            {t("events:staff.subtitle")}
          </Typography>
          <StaffGrid staff={event.staff} />
        </Article>
      )}
    </Container>
  );
}

export default EventPage;
