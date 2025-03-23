import { useId } from "react";
import { Event } from "@/interfaces/event";
import EventCard from "@/components/Event/EventCard";

interface EventList {
  events: Event[]
}

const EventList = ({ events }: EventList) => {
  const id = useId();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {events.map((event, index) => (
        <EventCard event={event} key={`${id}-${index}`} />
      ))}
    </div>
  );
};

export default EventList;
