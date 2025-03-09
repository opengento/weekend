"use client";

import { useTranslation } from "next-i18next";
import getCompany from "@/functions/company";
import { CompanyProps } from "@/components/Company/company.types";
import {
  EventSponsorProps,
  EventSponsorTypeProps,
  EventStaffProps
} from "@/components/Event/event.types";
import {IndividualProps} from "@/components/Individual/individual.types";
import getIndividual from "@/functions/individual";

const decorateStaff = (staff: EventStaffProps[]) => {
  const { t } = useTranslation(["individuals"]);

  return staff.reduce(
    (staffIndividuals: IndividualProps[], staff) => {
      const individual = getIndividual(staff);
      if (individual) {
        staffIndividuals.push(individual);
      }

      return staffIndividuals;
    },
    []
  );
}

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

export default { decorateStaff, decorateSponsors };
