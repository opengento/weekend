import Date from "@/components/Event/Date/Date";
import Divider from "@/components/Divider/Divider";
import Place from "@/components/Event/Place/Place";
import { EventProps } from "@/components/Event/event.types";
import { FaHotel, FaLocationArrow, FaParking } from "react-icons/fa";

interface EventInfo {
  event: EventProps;
}

const EventInfo = ({ event }: EventInfo) => {
  return (
    <div className="flex flex-col flex-wrap md:flex-row gap-4 my-4">
      <Date date={event.date}/>
      <Divider position="vertical"/>
      <Place place={event.place}/>
      <Divider position="vertical"/>
      <div>
        Accès au lieu<br/>
        <FaLocationArrow className="text-primary" />
        - Transports<br/>
        <FaParking className="text-primary" />
        - Parking
      </div>
      <Divider position="vertical"/>
      <div>
        <FaHotel className="text-primary" />
        Hébergement
      </div>
    </div>
  );
};

export default EventInfo;
