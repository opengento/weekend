"use client";

import { useTranslation } from "next-i18next";
import { Event } from "@/interfaces/event";
import Container from "@/layouts/Container";
import Article from "@/layouts/Article";
import Typography from "@/components/Typography/Typography";
import EventCard from "@/components/Event/EventCard";
import EventList from "@/components/Event/EventList";

interface EventPage {
  activeEvent?: Event | null;
  currentEvents: Event[];
  upcomingEvents: Event[];
  pastEvents: Event[];
}

const EventPage = ({ activeEvent, currentEvents, upcomingEvents, pastEvents }: EventPage) => {
  const { t } = useTranslation(["events"]);

  return (
    <Container size="large" className="flex flex-col gap-8 my-8">
      <Article>
        <Typography variant="h1" color="dark" underlineColor="primary">
          {t("events:title")}
        </Typography>
        <Typography color="dark" className="whitespace-pre-wrap">
          {t("events:content")}
        </Typography>
        {activeEvent && (<EventCard event={activeEvent} />)}
        <EventList events={currentEvents} />
      </Article>
      <Article>
        <Typography variant="h2" color="dark">
          {t("events:upcoming.title")}
        </Typography>
        <Typography color="dark" className="whitespace-pre-wrap">
          {t("events:upcoming.content")}
        </Typography>
        <EventList events={upcomingEvents} />
      </Article>
      <Article>
        <Typography variant="h2" color="dark">
          {t("events:past.title")}
        </Typography>
        <Typography color="dark" className="whitespace-pre-wrap">
          {t("events:past.content")}
        </Typography>
        <EventList events={pastEvents} />
      </Article>
    </Container>
  );
}

export default EventPage;
