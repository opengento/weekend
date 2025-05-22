import { useId } from "react";
import { FaLocationArrow } from "react-icons/fa";
import Link from "next/link";
import { EventAccess } from "@/interfaces/event";
import Typography from "@/components/Typography/Typography";

interface PublicTransport {
  access: EventAccess;
}

const PublicTransport = ({ access }: PublicTransport) => {
  const id = useId();

  return (
    <div className="flex flex-col gap-2">
      <Typography color="dark" weight="semibold" className="underline">
        {access.publicTransport.title}
      </Typography>
      <Typography color="dark">
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
