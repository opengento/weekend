import { Event } from "@/interfaces/event";
import Date from "@/components/Event/Date/Date";
import Address from "@/components/Event/Place/Address";
import Parking from "@/components/Event/Place/Parking";
import PublicTransport from "@/components/Event/Place/PublicTransport";

interface EventInfo {
  event: Event;
}

const EventInfo = ({ event }: EventInfo) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 my-4">
      <Date date={event.date} />
      <Address place={event.place}/>
      {event.place.access && (
        <>
          <Parking access={event.place.access}/>
          <PublicTransport access={event.place.access}/>
        </>
      )}
    </div>
  );
};

export default EventInfo;
