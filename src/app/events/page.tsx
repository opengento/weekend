import {
  getCurrentEvents,
  getEvent,
  getPastEvents,
  getUpcomingEvents
} from "@/lib/event";
import EventsPage from "@/layouts/Event/EventsPage";

export default function Page() {
  return (
    <EventsPage
      activeEvent={getEvent()}
      currentEvents={getCurrentEvents()}
      upcomingEvents={getUpcomingEvents()}
      pastEvents={getPastEvents()}
    />
  )
}
