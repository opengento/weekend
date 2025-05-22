import { useId } from "react";
import { FaParking } from "react-icons/fa";
import Link from "next/link";
import { EventAccess } from "@/interfaces/event";
import Typography from "@/components/Typography/Typography";

interface Parking {
  access: EventAccess;
}

const Parking = ({ access }: Parking) => {
  const id = useId();

  return (
    <div className="flex flex-col gap-2">
      <Typography color="dark" weight="semibold" className="underline">
        {access.parking.title}
      </Typography>
      <Typography color="dark">
        {access.parking.description}
      </Typography>
      <ul>
        {access.parking.locations.map((location, index) => (
          <li key={`${id}-${index}`}>
            <Link
              href={location.url}
              target="_blank"
              className="flex items-center gap-1"
            >
              <FaParking className="text-primary" />
              {location.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Parking;
