import type { UrlObject } from "url";
import { IndividualProps } from "@/components/Individual/individual.types";

type EventDate = {
  from: Date;
  to: Date;
}

type EventSchedules = {
  name: string;
  description: string;
  date: EventDate;
}

type EventProgram = {
  title: string;
  schedules: EventSchedules[];
}

type EventPlaceLocation = {
  icons?: {
    name: string;
    src: string;
  };
  name: string;
  url: string | UrlObject;
}

type EventPlacePublicTransport = {
  title: string;
  description: string;
  itinerary: EventPlaceLocation[];
}

type EventPlaceParking = {
  title: string;
  description: string;
  locations: EventPlaceLocation[];
}

type EventAccess = {
  publicTransport: EventPlacePublicTransport;
  parking: EventPlaceParking;
}

type EventPlace = {
  name: string;
  url: string | UrlObject;
  address: string;
  access: EventAccess | null;
}

type EventSponsorType = "bronze" | "silver" | "gold" | "platinum";

type EventSponsor = {
  type: EventSponsorType;
  companyId: number;
}

type EventStaff = IndividualProps["id"];

type Media = {
  name: string;
  alt: string;
  src: string;
  height: number;
  width: number;
  content?: string | undefined;
}

type EventAction = {
  label: string;
  url: string | UrlObject;
  level: "primary" | "secondary" | "accent" | "info" | "success" | "warning" | "error";
}

type Event = {
  identifier: string;
  title: string;
  bannerSrc: string;
  logoSrc: string;
  description: string;
  content: string;
  actions: {
    registration: EventAction | undefined;
    callForPapers: EventAction | undefined;
  }
  date: EventDate;
  programs: EventProgram[];
  place: EventPlace;
  sponsors: EventSponsor[];
  staff: EventStaff[];
  gallery: Media[];
};

export type EventActionProps = EventAction;
export type EventProgramProps = EventProgram;
export type EventAccessProps = EventAccess;
export type EventPlaceProps = EventPlace;
export type EventSponsorTypeProps = EventSponsorType;
export type EventSponsorProps = EventSponsor;
export type EventStaffProps = EventStaff;
export type EventDateProps = EventDate;
export type EventProps = Event;
