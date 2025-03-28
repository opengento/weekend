import { Event } from "@/interfaces/event";
import { listFiles, readJson } from "@/lib/filesystem";
import { getIndividual } from "@/lib/individual";
import { getCompany } from "@/lib/company";
import { isActive, isPast, isUpcoming } from "@/lib/event/date";

const cache: {
  eventIds: string[] | null;
  events: Event[] | null;
} = {
  eventIds: null,
  events: null
};

const loadEvent = (id: string) => {
  const event = readJson(`events/${id}`) as Event | null;
  if (event) {
    // Hydrate Sponsor Companies
    event.sponsors = event.sponsors.map((sponsor) => {
      if (!sponsor.company) {
        const company = getCompany(sponsor.companyId);
        if (company) {
          sponsor.company = company;
        }
      }

      return sponsor;
    });

    // Hydrate Staff Individuals
    event.staff = event.staff.map((staff) => {
      if (!staff.individual) {
        const individual = getIndividual(staff.individualId);
        if (individual) {
          staff.individual = individual;
        }
      }

      return staff;
    });
  }

  return event;
};

const getAllEventIds = ()  => {
  return cache.eventIds ??= listFiles("events").map((file) => (
    file.replace(/\.json$/, "")
  ));
};

const getAllEvents = () => {
  return cache.events ??= getAllEventIds().reduce((eventList, eventId) => {
    const event = loadEvent(eventId);
    if (event) {
      eventList.push(event);
    }

    return eventList;
  }, [] as Event[]).sort((a, b) => new Date(a.date.from) < new Date(b.date.from) ? 1: -1);
}

const getUpcomingEvents = () => {
  return getAllEvents().filter((event) => isUpcoming(event));
};

const getCurrentEvents = () => {
  return getAllEvents().filter((event) => isActive(event));
};

const getPastEvents = () => {
  return getAllEvents().filter((event) => isPast(event));
};

const getEvent = (id?: string | undefined) => {
  if (id === undefined) {
    id = readJson("events")?.activeEventId;
  }

  return id ? loadEvent(id) : null;
};

export {
  getEvent,
  getAllEventIds,
  getAllEvents,
  getUpcomingEvents,
  getCurrentEvents,
  getPastEvents
};
