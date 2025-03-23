"use client";

import CompanyCard from "@/components/Company/CompanyCard";
import classNames from "classnames";
import { Fragment, useId } from "react";
import Image from "next/image";
import { useTranslation } from "next-i18next";
import { EventSponsor, EventSponsorType } from "@/interfaces/event";
import Typography from "@/components/Typography/Typography";
import { sortSponsorsByType } from "@/lib/event/sponsor";

interface SponsorList {
  sponsors: EventSponsor[];
}

const SponsorList = ({ sponsors }: SponsorList) => {
  const { t } = useTranslation(["common"]);
  const sponsorsByType = sortSponsorsByType(sponsors);
  const id = useId();

  return (
    <div className="flex flex-col gap-y-8">
      {(Object.keys(sponsorsByType) as EventSponsorType[]).map((sponsorType, index) => (
        <Fragment key={`sponsors-${id}-${sponsorType}-${index}`}>
          {sponsorsByType[sponsorType].length > 0 && (
            <div className="flex flex-col gap-y-8">
              <header className="flex flex-row items-center gap-x-1 p-4 bg-secondary rounded-lg">
                <Image
                  src={`/images/events/sponsors/type/${sponsorType}.svg`}
                  alt={sponsorType}
                  width={32}
                  height={32}
                  className="w-8 h-auto object-contain bg-neutral p-1 rounded-full mr-2"
                />
                <Typography variant="subtitle1" color="secondary" weight="semibold">
                  {t(`common:${sponsorsByType[sponsorType].length > 1 ? "sponsors" : "sponsor"}`)}
                </Typography>
                <Typography variant="subtitle1" color="secondary" weight="semibold">
                  {t(`common:${sponsorType}`)}
                </Typography>
              </header>
              <div
                className={classNames(
                  "grid grid-cols-1 gap-8 rounded-lg",
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
            </div>
          )}
        </Fragment>
      ))}
    </div>
  );
};

export default SponsorList;
