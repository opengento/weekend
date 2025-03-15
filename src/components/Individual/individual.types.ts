import type { UrlObject } from "url";

type Individual = {
  id: number;
  name: string;
  biography: string;
  companyId: number | undefined;
  roles: string[];
  social: {
    linkedin?: string | UrlObject | undefined;
    github?: string | UrlObject | undefined;
  },
  avatarSrc: string;
}

export type IndividualProps = Individual;
