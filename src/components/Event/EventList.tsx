import { EventProps } from "@/components/Event/event.types";
import EventCard from "@/components/Event/EventCard";
import { useId } from "react";

interface EventList {
  events: EventProps[]
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
