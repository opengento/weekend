"use client";

import Container from "@/layouts/Container";
import Article from "@/layouts/Article";
import Typography from "@/components/Typography/Typography";
import { useTranslation } from "next-i18next";
import EventCard from "@/components/Event/EventCard";
import {getEvent} from "@/functions/events";

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
        {event && (
          <EventCard event={getEvent()} />
        )}
      </Article>
      <Article>
        <Typography variant="h2" color="dark">
          {t("events:upcoming.title")}
        </Typography>
        <Typography color="dark" className="whitespace-pre-wrap">
          {t("events:upcoming.content")}
        </Typography>
      </Article>
      <Article>
        <Typography variant="h2" color="dark">
          {t("events:past.title")}
        </Typography>
        <Typography color="dark" className="whitespace-pre-wrap">
          {t("events:past.content")}
        </Typography>
      </Article>
    </Container>
  );
}
