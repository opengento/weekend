import type { UrlObject } from "url";

type Project = {
  title: string;
  description: string;
  url: string | UrlObject;
  tags?: string[];
}

export type ProjectProps = Project;
