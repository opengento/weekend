import {
  EventSponsorProps,
  EventSponsorTypeProps
} from "@/components/Event/event.types";
import utilEvents from "@/functions/events";
import Image from "next/image";
import Link from "next/link";
import classNames from "classnames";
import { Fragment } from "react";

interface SponsorList {
  id: string;
  sponsors: EventSponsorProps[];
}

const SponsorList = ({ id, sponsors }: SponsorList) => {
  const sponsorsByType = utilEvents.decorateSponsors(sponsors);

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

export default SponsorList;
