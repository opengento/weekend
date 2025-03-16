import { EventPlaceProps } from "@/components/Event/event.types";
import { FaLocationDot } from "react-icons/fa6";
import Link from "next/link";

interface Place {
  place: EventPlaceProps
}

const Place = ({ place }: Place) => {
  return (
    <Link href={place.url} target="_blank" className="flex flex-row gap-2">
      <FaLocationDot className="size-8 text-primary" width={32} height={32} />
      <address className="whitespace-pre-wrap">
        {place.name}<br />
        {place.address}
      </address>
    </Link>
  );
};

export default Place;
