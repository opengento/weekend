import { FaParking } from "react-icons/fa";
import { EventAccessProps } from "@/components/Event/event.types";
import Typography from "@/components/Typography/Typography";
import Link from "next/link";
import { useId } from "react";

interface Parking {
  access: EventAccessProps;
}

const Parking = ({ access }: Parking) => {
  const id = useId();
  return (
    <div className="flex flex-col gap-2">
      <Typography color="dark" className="underline">
        {access.parking.title}
      </Typography>
      <Typography variant="small" color="dark">
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
