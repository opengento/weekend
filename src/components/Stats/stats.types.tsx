import { ButtonLink } from "@/interfaces/link";

type Stat = {
  iconSrc?: string | null | undefined;
  title: string;
  value: string;
  description: string;
  color?: "primary" | "secondary" | "neutral" | "accent" | "success" | "warning" | "info" | "error" | null | undefined;
  actions: ButtonLink[]
}

export type StatProps = Stat;
