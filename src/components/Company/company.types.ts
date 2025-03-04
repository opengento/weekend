import type { UrlObject } from "url";

type Company = {
  id: number;
  name: string;
  description: string;
  url: string | UrlObject;
  logoSrc: string;
  iconSrc: string;
}

export type CompanyProps = Company;
