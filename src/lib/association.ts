import { readJson } from "@/lib/filesystem";
import { Individual } from "@/interfaces/individual";
import { Company } from "@/interfaces/company";
import { getIndividual } from "@/lib/individual";
import { getCompany } from "@/lib/company";

const getBoard = () => {
  const members = (readJson("association")?.data?.board?.members ?? []) as number[];

  return members.reduce((individuals, individualId) => {
    const individual = getIndividual(individualId);
    if (individual) {
      individuals.push(individual);
    }

    return individuals;
  }, [] as Individual[]);
}

const getMembers = () => {
  const members = (readJson("association")?.data?.membership?.companies ?? []) as number[];

  return members.reduce((companies, companyId) => {
    const company = getCompany(companyId);
    if (company) {
      companies.push(company);
    }

    return companies;
  }, [] as Company[]);
}

export { getBoard, getMembers };
