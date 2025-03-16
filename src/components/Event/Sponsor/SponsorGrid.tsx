import {
  EventSponsorProps,
  EventSponsorTypeProps
} from "@/components/Event/event.types";
import Image from "next/image";
import Link from "next/link";
import classNames from "classnames";
import { Fragment, useId } from "react";
import { decorateSponsors } from "@/functions/events";

interface SponsorGrid {
  sponsors: EventSponsorProps[];
}

const SponsorGrid = ({ sponsors }: SponsorGrid) => {
  const sponsorsByType = decorateSponsors(sponsors);
  const id = useId();

  return (
    <div className="grid grid-cols-12 gap-4">
      {(Object.keys(sponsorsByType) as EventSponsorTypeProps[]).map((sponsorType, index) => (
        <Fragment key={`sponsors-${id}-${index}`}>
          {sponsorsByType[sponsorType].map((company, key) => (
            <div
              className={classNames(
                "col-span-12",
                {
                  "md:col-span-4": sponsorType === "platinum",
                  "md:col-span-3": sponsorType === "gold",
                  "md:col-span-2": sponsorType === "silver",
                  "md:col-span-1": sponsorType === "bronze",
                }
              )}
              key={`sponsors-${index}-${key}`}
            >
              <Link href={company.url} title={company.name} target="_blank">
                <Image
                  src={company.logoSrc}
                  alt={company.name}
                  width={250}
                  height={250}
                  className="object-contain"
                />
              </Link>
            </div>
          ))}
        </Fragment>
      ))}
    </div>
  );
};

export default SponsorGrid;
