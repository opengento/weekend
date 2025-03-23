"use client";

import { useTranslation } from "next-i18next";
import { Event } from "@/interfaces/event";
import Container from "@/layouts/Container";
import EventHero from "@/components/Event/EventHero";
import SponsorGrid from "@/components/Event/Sponsor/SponsorGrid";
import Typography from "@/components/Typography/Typography";
import EventInfo from "@/components/Event/EventInfo";

interface EventHomePage {
  event: Event;
}

const EventHomePage = ({ event }: EventHomePage) => {
  const { t } = useTranslation(["events"]);

  return (
    <>
      <EventHero event={event} />
      <div className="bg-orange-50 flex py-12">
        <Container size="large">
          <Typography variant="h4" weight="semibold" className="mb-8">
            {t("events:information.hero.title")}
          </Typography>
          <EventInfo event={event} />
        </Container>
      </div>
      <div className="bg-gradient-to-br from-violet-900 to-neutral-900 flex flex-col justify-center items-center py-14 gap-2">
        <Typography variant="h3" weight="semibold" color="primary" underlineColor="primary" className="mx-4">
          {t("events:sponsors.hero.title")}
        </Typography>
        <Typography variant="subtitle1" weight="thin" color="primary" className="mx-4">
          {t("events:sponsors.hero.subtitle")}
        </Typography>
        <Container size="small" className="mt-8">
          <SponsorGrid sponsors={event.sponsors}/>
        </Container>
      </div>
    </>
  );
};

export default EventHomePage;
