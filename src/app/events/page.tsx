"use client";

import Container from "@/layouts/Container";
import Article from "@/layouts/Article";
import Typography from "@/components/Typography/Typography";
import { useTranslation } from "next-i18next";
import EventCard from "@/components/Event/EventCard";
import {
  getCurrentEvents,
  getEvent,
  getPastEvents,
  getUpcomingEvents
} from "@/functions/events";
import EventList from "@/components/Event/EventList";

export default function Page() {
  const { t } = useTranslation(["events"]);
  const event = getEvent();

  return (
    <Container size="large" className="flex flex-col gap-8 my-8">
      <Article>
        <Typography variant="h1" color="dark" underlineColor="primary">
          {t("events:title")}
        </Typography>
        <Typography color="dark" className="whitespace-pre-wrap">
          {t("events:content")}
        </Typography>
        {event && (<EventCard event={event} />)}
        <EventList events={getCurrentEvents()} />
      </Article>
      <Article>
        <Typography variant="h2" color="dark">
          {t("events:upcoming.title")}
        </Typography>
        <Typography color="dark" className="whitespace-pre-wrap">
          {t("events:upcoming.content")}
        </Typography>
        <EventList events={getUpcomingEvents()} />
      </Article>
      <Article>
        <Typography variant="h2" color="dark">
          {t("events:past.title")}
        </Typography>
        <Typography color="dark" className="whitespace-pre-wrap">
          {t("events:past.content")}
        </Typography>
        <EventList events={getPastEvents()} />
      </Article>
    </Container>
  );
}
