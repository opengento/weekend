import { Company } from "@/interfaces/company";
import { readJson } from "@/lib/filesystem";

const cache: {
  companies: Company[] | null
} = {
  companies: null
};

const getAllCompanies = () => {
  return cache.companies ??= (readJson("companies")?.list ?? []) as Company[];
}

const getCompany = (id: number) => {
  return getAllCompanies().find((company) => company.id === id);
}

export { getAllCompanies, getCompany };
