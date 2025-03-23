import type { UrlObject } from "url";
import { Company } from "@/interfaces/company";

export type Individual = {
  id: number;
  name: string;
  biography: string;
  companyId: number | undefined;
  company: Company | undefined;
  roles: string[];
  social: {
    linkedin?: string | UrlObject | undefined;
    github?: string | UrlObject | undefined;
  },
  avatarSrc: string;
};
