"use client";

import EventHomePage from "@/layouts/Event/EventHomePage";
import Hero from "@/components/Association/AssociationHero";
import Container from "@/layouts/Container";
import MemberGrid from "@/components/Association/Member/MemberGrid";
import Typography from "@/components/Typography/Typography";
import Board from "@/components/Association/Board/Board";
import Stats from "@/components/Association/Stats/Stats";
import EventSlider from "@/components/Event/EventSlider";
import { getPastEvents } from "@/functions/events";

export default function Home() {
  return (
    <>
      <EventHomePage/>
      <Hero/>
      <div className="py-14 bg-neutral">
        <Container size="large">
          <Typography
            variant="h3"
            color="dark"
            weight="semibold"
            className="mb-12"
          >
            Les prochains événements
          </Typography>
          <EventSlider events={getPastEvents()}/>
        </Container>
      </div>
      <div className="py-14 bg-gradient-to-bl from-red-900 to-indigo-900">
        <Container size="large">
          <Typography
            variant="h3"
            color="primary"
            weight="semibold"
            underlineColor="primary"
            className="mb-12"
          >
            Nos membres donateurs
          </Typography>
          <MemberGrid/>
        </Container>
      </div>
      <div className="py-14 bg-neutral">
        <Container size="large" className="flex flex-col justify-center">
          <Typography
            variant="h3"
            color="dark"
            weight="semibold"
            underlineColor="primary"
            className="mb-12"
          >
            Quelques chiffres...
          </Typography>
          <Stats className="bg-gradient-to-b from-slate-50 to-neutral-100"/>
        </Container>
      </div>
      <div className="py-14 bg-gradient-to-bl from-violet-900 to-pink-900">
        <Container size="large">
          <Typography
            variant="h3"
            color="primary"
            weight="semibold"
            underlineColor="primary"
            className="mb-12"
          >
            Le bureau à votre service !
          </Typography>
        </Container>
        <Container size="small" className="bg-neutral rounded-lg">
          <Board/>
        </Container>
      </div>
    </>
  );
}
