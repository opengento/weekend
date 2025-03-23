import {getEvent, getPastEvents, getUpcomingEvents} from "@/lib/event";
import { getBoard, getMembers } from "@/lib/association";
import Container from "@/layouts/Container";
import EventHomePage from "@/layouts/Event/EventHomePage";
import Typography from "@/components/Typography/Typography";
import Hero from "@/components/Association/AssociationHero";
import Board from "@/components/Association/Board/Board";
import Stats from "@/components/Association/Stats/Stats";
import EventSlider from "@/components/Event/EventSlider";
import CompanyGrid from "@/components/Company/CompanyGrid";

export default function Home() {
  const upcomingEvents = getUpcomingEvents();
  const title = upcomingEvents.length > 0
    ? "Les prochains événements"
    : "Les événements passés"
  const events = upcomingEvents.length > 0 ? upcomingEvents : getPastEvents();
  const activeEvent = getEvent();

  return (
    <>
      {activeEvent && (
        <EventHomePage event={activeEvent} />
      )}
      <Hero/>
      <div className="py-14 bg-neutral">
        <Container size="large">
          <Typography
            variant="h3"
            color="dark"
            weight="semibold"
            className="mb-12"
          >
            {title}
          </Typography>
          <EventSlider events={events}/>
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
          <CompanyGrid companies={getMembers()} />
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
          <Board individuals={getBoard()} />
        </Container>
      </div>
    </>
  );
}
