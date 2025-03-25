import { ButtonLinkProps } from "@/components/ButtonLink/link.types";

type Stat = {
  iconSrc?: string | null | undefined;
  title: string;
  value: string;
  description: string;
  color?: "primary" | "secondary" | "neutral" | "accent" | "success" | "warning" | "info" | "error" | null | undefined;
  actions: ButtonLinkProps[]
}

export type StatProps = Stat;
