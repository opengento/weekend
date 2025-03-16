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
    <div className="grid grid-cols-12 auto-rows-4 gap-4">
      {(Object.keys(sponsorsByType) as EventSponsorTypeProps[]).map((sponsorType, index) => (
        <Fragment key={`sponsors-${id}-${index}`}>
          {sponsorsByType[sponsorType].map((company, key) => (
            <div
              className={classNames(
                "col-span-12 rounded-lg relative duration-500 hover:scale-110 hover:z-10",
                {
                  "row-span-4 md:col-span-6 bg-cyan-100": sponsorType === "platinum",
                  "row-span-3 md:col-span-3 bg-blue-100": sponsorType === "gold",
                  "row-span-2 md:col-span-2 bg-red-100": sponsorType === "silver",
                  "md:col-span-1 bg-green-100": sponsorType === "bronze",
                }
              )}
              key={`sponsors-${index}-${key}`}
            >
              <Link
                href={company.url}
                title={company.name}
                target="_blank"
                className="flex justify-center items-center w-full h-full"
              >
                <Image
                  src={`/images/events/sponsors/type/${sponsorType}.svg`}
                  alt={sponsorType}
                  width={48}
                  height={48}
                  className={classNames(
                    "object-contain absolute",
                    {
                      "size-12 top-8 right-8": sponsorType === "platinum",
                      "size-10 top-4 right-4": sponsorType === "gold",
                      "size-8 top-2 right-2": sponsorType === "silver",
                      "size-6 top-1 right-1": sponsorType === "bronze",
                    }
                  )}
                />
                <Image
                  src={company.logoSrc}
                  alt={company.name}
                  width={250}
                  height={250}
                  className={classNames(
                    "object-contain",
                    {
                      "w-64 p-8": sponsorType === "platinum",
                      "w-50 p-6": sponsorType === "gold",
                      "w-30 p-4": sponsorType === "silver",
                      "w-12 p-2": sponsorType === "bronze",
                    }
                  )}
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
