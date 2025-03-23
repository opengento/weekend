import { EventSponsor, EventSponsorType } from "@/interfaces/event";
import { Company } from "@/interfaces/company";

export function sortSponsorsByType(sponsors: EventSponsor[]): Record<EventSponsorType, Company[]> {
  return sponsors.reduce(
    (sponsorsByType: Record<EventSponsorType, Company[]>, sponsor) => {
      const company = sponsor.company;
      if (company) {
        sponsorsByType[sponsor.type].push(company);
      }

      return sponsorsByType;
    },
    {platinum: [], gold: [], silver: [], bronze: []}
  );
}
