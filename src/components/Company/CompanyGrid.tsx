import { useId } from "react";
import { CompanyProps } from "@/components/Company/company.types";
import CompanyLogo from "@/components/Company/CompanyLogo";

interface CompanyGrid {
  companies: CompanyProps[]
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
