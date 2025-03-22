"use client";

import { useTranslation } from "next-i18next";
import getCompany from "@/functions/company";
import { CompanyProps } from "@/components/Company/company.types";
import {
  EventProps,
  EventSponsorProps,
  EventSponsorTypeProps,
  EventStaffProps
} from "@/components/Event/event.types";
import { IndividualProps } from "@/components/Individual/individual.types";
import getIndividual from "@/functions/individual";

const getAllEvents = () => {
  const { t } = useTranslation(["events"]);
  const eventIds = t("events:eventIds", { returnObjects: true }) as string[];

  return eventIds.reduce((eventList, eventId) => {
    const event = getEvent(eventId);
    if (event) {
      eventList.push(event);
    }

    return eventList;
  }, [] as EventProps[]);
}

const getUpcomingEvents = () => {
  const date = new Date();

  return getAllEvents().filter((event) => {
    const from = new Date(event.date.from);

    return from.getTime() > date.getTime();
  });
};

const getCurrentEvents = () => {
  const date = new Date();
  const tomorrow = new Date(date);
  tomorrow.setDate(tomorrow.getDate() + 1);

  return getAllEvents().filter((event) => {
    const from = new Date(event.date.from);
    const to = new Date(event.date.to);

    return from.getTime() < date.getTime() && to.getTime() > tomorrow.getTime();
  });
};

const getPastEvents = () => {
  const date = new Date();

  return getAllEvents().filter((event) => {
    const to = new Date(event.date.to);

    return to.getTime() < date.getTime();
  });
};

const getEvent = (id?: string | undefined) => {
  const { t } = useTranslation(["events"]);
  if (id === undefined) {
    id = t("events:activeEventId");
  }
  if (!id) {
    return null;
  }

  return ((id) => {
    const { t } = useTranslation([`events/${id}`]);

    return t("event", { returnObjects: true }) as EventProps;
  })(id);
};

const decorateStaff = (staff: EventStaffProps[]) => {
  const { t } = useTranslation(["individuals"]);

  return staff.reduce(
    (staffIndividuals: IndividualProps[], staff) => {
      const individual = getIndividual(staff);
      if (individual) {
        staffIndividuals.push(individual);
      }

      return staffIndividuals;
    },
    []
  );
}

const decorateSponsors = (sponsors: EventSponsorProps[]) => {
  const { t } = useTranslation(["companies"]);

  return sponsors.reduce(
    (sponsorsByType: Record<EventSponsorTypeProps, CompanyProps[]>, sponsor) => {
      const company = getCompany(sponsor.companyId);
      if (company) {
        sponsorsByType[sponsor.type].push(company);
      }

      return sponsorsByType;
    },
    {platinum: [], gold: [], silver: [], bronze: []}
  );
}

export {
  getEvent,
  getUpcomingEvents,
  getCurrentEvents,
  getPastEvents,
  decorateStaff,
  decorateSponsors
};
