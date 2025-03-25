import { Event } from "@/interfaces/event";

export function isActive(event: Event): boolean {
  const today = new Date();
  const eventDate = new Date(event.date.from);

  return today.getTime() < eventDate.getTime();
}
