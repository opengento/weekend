import Image from "next/image";
import Link from "next/link";
import classNames from "classnames";
import { Company } from "@/interfaces/company";

interface CompanyLogo {
  company: Company;
  className?: string;
}

const CompanyLogo = ({ company, className }: CompanyLogo) => {
  return (
    <Link
      href={company.url}
      title={company.name}
      className={classNames(
        "flex",
        className
      )}
    >
      <Image
        src={company.logoSrc}
        alt={company.name}
        width={160}
        height={160}
        className="grow object-contain"
      />
    </Link>
  );
};

export default CompanyLogo;
