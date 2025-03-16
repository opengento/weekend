import Date from "@/components/Event/Date/Date";
import Address from "@/components/Event/Place/Address";
import Parking from "@/components/Event/Place/Parking";
import { EventProps } from "@/components/Event/event.types";
import PublicTransport from "@/components/Event/Place/PublicTransport";

interface EventInfo {
  event: EventProps;
}

const EventInfo = ({ event }: EventInfo) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-8 my-4">
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
