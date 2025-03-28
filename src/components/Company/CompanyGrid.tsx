import { useId } from "react";
import CompanyLogo from "@/components/Company/CompanyLogo";
import { Company } from "@/interfaces/company";

interface CompanyGrid {
  companies: Company[]
}

const CompanyGrid = ({ companies }: CompanyGrid) => {
  const id = useId();

  return (
    <div className="flex flex-row flex-wrap justify-center items-center gap-8">
      {companies.map((company, index) => (
        <CompanyLogo
          key={`${id}-${index}`}
          company={company}
          className="bg-base-100 w-72 h-36 p-6 rounded-xl duration-500 hover:scale-110 hover:z-10"
        />
      ))}
    </div>
  );
};

export default CompanyGrid;
