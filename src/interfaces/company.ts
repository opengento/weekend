import type { UrlObject } from "url";

export type Company = {
  id: number;
  name: string;
  description: string;
  url: string | UrlObject;
  logoSrc: string;
  iconSrc: string;
};
