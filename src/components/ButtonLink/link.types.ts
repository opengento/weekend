import type { UrlObject } from "url";
import {HTMLAttributeAnchorTarget} from "react";

type ButtonLink = {
  label: string;
  href: string | UrlObject;
  target?: HTMLAttributeAnchorTarget | undefined;
  level?: "primary" | "secondary" | "neutral" | "accent" | "success" | "warning" | "info" | "error" | null | undefined;
}

export type ButtonLinkProps = ButtonLink;
