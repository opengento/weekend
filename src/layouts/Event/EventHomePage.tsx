"use client";

import EventHero from "@/components/Event/EventHero";
import { getEvent } from "@/functions/events";
import SponsorGrid from "@/components/Event/Sponsor/SponsorGrid";
import Container from "@/layouts/Container";
import Hero from "@/components/Hero/Hero";
import Typography from "@/components/Typography/Typography";

const EventHomePage = () => {
  const event = getEvent();

  if (event === null) {
    return <></>;
  }

  return (
    <>
      <EventHero event={event} />
      Programme

      <Hero imagePath="/images/media/bg.webp" size="xs" blurAmount="sm">
        <Typography variant="h3" weight="semibold" color="dark">
          Merci à nos sponsors
        </Typography>
      </Hero>
      <div className="bg-violet-200 py-8">
        <Container size="small">
          <SponsorGrid sponsors={event.sponsors} />
        </Container>
      </div>


      Préparer ma venue

      Staff
    </>
  );
};

export default EventHomePage;
