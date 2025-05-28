import type { UrlObject } from "url";
import { ButtonLink } from "@/interfaces/link";
import { Individual } from "@/interfaces/individual";
import { Company } from "@/interfaces/company";

export type EventDate = {
  from: Date;
  to: Date;
};

export type EventSchedules = {
  name: string;
  description: string;
  date: EventDate;
};

export type EventProgram = {
  title: string;
  schedules: EventSchedules[];
};

export type EventPlaceLocation = {
  icons?: {
    name: string;
    src: string;
  };
  name: string;
  url: string | UrlObject;
};

export type EventPlacePublicTransport = {
  title: string;
  description: string;
  itinerary: EventPlaceLocation[];
};

export type EventPlaceParking = {
  title: string;
  description: string;
  locations: EventPlaceLocation[];
};

export type EventAccess = {
  publicTransport: EventPlacePublicTransport;
  parking: EventPlaceParking;
};

export type EventPlace = {
  name: string;
  url: string | UrlObject;
  address: string;
  access: EventAccess | null;
};

export type EventSponsorType = "bronze" | "silver" | "gold" | "platinum";

export type EventSponsor = {
  type: EventSponsorType;
  companyId: number;
  company?: Company;
};

export type EventStaff = {
  individualId: Individual["id"];
  individual: Individual;
};

export type Media = {
  name: string;
  alt: string;
  src: string;
  height: number;
  width: number;
  content?: string | undefined;
};

export type Event = {
  identifier: string;
  title: string;
  bannerSrc: string;
  logoSrc: string;
  description: string;
  content: string;
  actions: {
    registration: ButtonLink | undefined;
    callForPapers: ButtonLink | undefined;
  };
  date: EventDate;
  programs: EventProgram[];
  place: EventPlace;
  sponsors: EventSponsor[];
  staff: EventStaff[];
  gallery: Media[];
};
