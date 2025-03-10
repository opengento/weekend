"use client";

import Container from "@/layouts/Container";
import Article from "@/layouts/Article";
import Typography from "@/components/Typography/Typography";
import Program from "@/components/Event/Program/Program";
import { getEvent } from "@/functions/events";

export default function Page() {
  const event = getEvent();

  return (
    <Container className="flex flex-col gap-8 my-8">
      <Article>
        <Typography variant="h1" color="dark">
          {event.title}
        </Typography>
        <Typography color="dark" className="whitespace-pre-wrap">
          {event.content}
        </Typography>
      </Article>
      <Article>
        <Program id="current" event={event} />
      </Article>
    </Container>
  );
}
