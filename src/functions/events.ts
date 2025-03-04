"use client";

import { useTranslation } from "next-i18next";
import getCompany from "@/functions/company";
import { CompanyProps } from "@/components/Company/company.types";
import {
  EventSponsorProps,
  EventSponsorTypeProps
} from "@/components/Event/event.types";

const decorateSponsors = (sponsors: EventSponsorProps[]) => {
  const { t } = useTranslation(["companies"]);

  return sponsors.reduce(
    (sponsorsByType: Record<EventSponsorTypeProps, CompanyProps[]>, sponsor) => {
      const company = getCompany(sponsor.companyId);
      if (company) {
        sponsorsByType[sponsor.type].push(company);
      }

      return sponsorsByType;
    },
    {platinum: [], gold: [], silver: [], bronze: []}
  );
}

export default decorateSponsors;
