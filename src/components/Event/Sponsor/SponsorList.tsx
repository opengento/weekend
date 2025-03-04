"use client";

import {
  EventSponsorProps,
  EventSponsorTypeProps
} from "@/components/Event/event.types";
import CompanyCard from "@/components/Company/CompanyCard";
import classNames from "classnames";
import { Fragment } from "react";
import Image from "next/image";
import decorateSponsors from "@/functions/events";
import { useTranslation } from "next-i18next";

interface SponsorList {
  id: string;
  sponsors: EventSponsorProps[];
}

const SponsorList = ({ id, sponsors }: SponsorList) => {
  const { t } = useTranslation(["common"]);
  const sponsorsByType = decorateSponsors(sponsors);

  return (
    <div className="flex flex-col">
      {(Object.keys(sponsorsByType) as EventSponsorTypeProps[]).map((sponsorType, index) => (
        <Fragment key={`sponsors-${id}-${sponsorType}-${index}`}>
          {sponsorsByType[sponsorType].length > 0 && (
            <>
              <header className="flex flex-row bg-secondary">
                <Image
                  src={`/images/events/sponsors/type/${sponsorType}.svg`}
                  alt={sponsorType}
                  width={45}
                  height={45}
                  className="object-contain"
                />
                {t(`common:${sponsorsByType[sponsorType].length > 1 ? "sponsor" : "sponsors"}`)}
                {t(`common:${sponsorType}`)}
              </header>
              <div
                className={classNames(
                  "grid grid-cols-1 gap-4 bg-base-100",
                  {
                    "md:grid-cols-1": sponsorType === "platinum",
                    "md:grid-cols-2": sponsorType === "gold",
                    "md:grid-cols-3": sponsorType === "silver",
                    "md:grid-cols-4": sponsorType === "bronze",
                  }
                )}
              >
                {sponsorsByType[sponsorType].map((company, key) => (
                  <CompanyCard
                    company={company}
                    key={`sponsors-${id}-${sponsorType}-${index}-${key}`}
                  />
                ))}
              </div>
            </>
          )}
        </Fragment>
      ))}
    </div>
  );
};

export default SponsorList;
