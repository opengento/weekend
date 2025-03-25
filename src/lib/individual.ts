import { Individual } from "@/interfaces/individual";
import { readJson } from "@/lib/filesystem";
import { getCompany } from "@/lib/company";

const cache: {
  individuals: Individual[] | null
} = {
  individuals: null
};

const getAllIndividuals = () => {
  if (cache.individuals === null) {
    const individuals = (readJson("individuals")?.list ?? []) as Individual[];

    cache.individuals = individuals.map((individual) => {
      // Hydrate Individual’s Company
      if (individual.companyId && !individual.company) {
        individual.company = getCompany(individual.companyId);
      }

      return individual;
    });
  }

  return cache.individuals;
}

const getIndividual = (id: number) => {
  return getAllIndividuals().find((individual) => individual.id === id);
}

export { getAllIndividuals, getIndividual };
