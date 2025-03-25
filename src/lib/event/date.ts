import { Event } from "@/interfaces/event";

export function isUpcoming(event: Event): boolean {
  const today = new Date();
  const eventDate = new Date(event.date.from);

  return today.getTime() < eventDate.getTime();
}

export function isPast(event: Event): boolean {
  const today = new Date();
  const eventDate = new Date(event.date.to);

  return today.getTime() > eventDate.getTime();
}

export function isActive(event: Event): boolean {
  return !isUpcoming(event) && !isPast(event);
}
