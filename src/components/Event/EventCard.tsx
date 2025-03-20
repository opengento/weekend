import Image from "next/image";
import ButtonLink from "@/components/ButtonLink/ButtonLink";
import { EventProps } from "@/components/Event/event.types";
import { ButtonLinkProps } from "@/components/ButtonLink/link.types";

interface EventCard {
  event: EventProps;
}

const EventCard = ({ event }: EventCard) => {
  const eventLink = {
    label: "Découvrez le programme de l’événement !",
    href: `events/${event.identifier}`,
    level: "primary"
  } as ButtonLinkProps;

  return (
    <div className="card card-md bg-base-100 shadow-sm">
      <div className="pt-8 px-8">
        <figure>
          <Image
            src={event.logoSrc}
            alt={event.title}
            width={160}
            height={160}
            className="h-40 w-auto object-contain"
          />
        </figure>
      </div>
      <div className="card-body">
        <h2 className="card-title">{event.title}</h2>
        <p>{event.description}</p>
        <div className="card-actions justify-end">
          <ButtonLink cta={eventLink}/>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
