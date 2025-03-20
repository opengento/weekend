import { useId } from "react";
import { CompanyProps } from "@/components/Company/company.types";
import CompanyCard from "@/components/Company/CompanyCard";

interface CompanyList {
  companies: CompanyProps[]
}

const CompanyList = ({ companies }: CompanyList) => {
  const id = useId();

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      {companies.map((company, index) => (
        <CompanyCard company={company} size="md" key={`${id}-${index}`} />
      ))}
    </div>
  );
};

export default CompanyList;
