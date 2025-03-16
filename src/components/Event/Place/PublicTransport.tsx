import { FaLocationArrow } from "react-icons/fa";
import { EventAccessProps } from "@/components/Event/event.types";
import Typography from "@/components/Typography/Typography";
import Link from "next/link";
import { useId } from "react";

interface PublicTransport {
  access: EventAccessProps;
}

const PublicTransport = ({ access }: PublicTransport) => {
  const id = useId();
  return (
    <div className="flex flex-col gap-2">
      <Typography color="dark" className="underline">
        {access.publicTransport.title}
      </Typography>
      <Typography variant="small" color="dark">
        {access.publicTransport.description}
      </Typography>
      <div className="flex fex-col gap-2">
        <ul>
          {access.publicTransport.itinerary.map((location, index) => (
            <li key={`${id}-${index}`}>
              <Link
                href={location.url}
                target="_blank"
                className="flex items-center gap-1"
              >
                <FaLocationArrow className="text-primary" />
                {location.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PublicTransport;
