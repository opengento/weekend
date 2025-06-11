import Image from "next/image";
import Link from "next/link";
import classNames from "classnames";
import { Fragment, useId } from "react";
import { EventSponsor, EventSponsorType } from "@/interfaces/event";
import { sortSponsorsByType } from "@/lib/event/sponsor";

interface SponsorGrid {
  sponsors: EventSponsor[];
}

const SponsorGrid = ({ sponsors }: SponsorGrid) => {
  const sponsorsByType = sortSponsorsByType(sponsors);
  const id = useId();

  return (
    <div className="grid grid-cols-12 auto-rows-[2.5rem] gap-4">
      {(Object.keys(sponsorsByType) as EventSponsorType[]).map((sponsorType, index) => (
        <Fragment key={`sponsors-${id}-${index}`}>
          {sponsorsByType[sponsorType].map((company, key) => (
            <Link
              href={company.url}
              title={company.name}
              target="_blank"
              className={classNames(
                "rounded-lg relative duration-500 hover:scale-110 hover:z-10",
                "flex justify-center items-center overflow-hidden",
                "bg-slate-400/75",
                {
                  "col-span-12 row-span-6 md:col-span-4 px-4 py-16 hover:bg-gradient-to-r hover:from-fuchsia-300 hover:to-pink-500": sponsorType === "platinum",
                  "col-span-12 row-span-3 md:col-span-4 px-6 py-8 hover:bg-gradient-to-r hover:from-fuchsia-300 hover:to-purple-500": sponsorType === "gold",
                  "col-span-12 row-span-2 md:col-span-3 px-8 py-4 hover:bg-gradient-to-r hover:from-indigo-300 hover:to-purple-500": sponsorType === "silver",
                  "col-span-6 md:col-span-2 px-4 py-2 hover:bg-gradient-to-r hover:from-violet-300 hover:to-indigo-500": sponsorType === "bronze",
                }
              )}
              key={`sponsors-${index}-${key}`}
            >
              <Image
                src={`/images/events/sponsors/type/${sponsorType}.svg`}
                alt={sponsorType}
                width={48}
                height={48}
                className={classNames(
                  "object-contain absolute",
                  {
                    "size-12 top-6 right-6": sponsorType === "platinum",
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
                className="object-contain w-grow h-full"
              />
            </Link>
          ))}
        </Fragment>
      ))}
    </div>
  );
};

export default SponsorGrid;
