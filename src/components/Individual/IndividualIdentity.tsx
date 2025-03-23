import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";
import { Individual } from "@/interfaces/individual";

interface Identity {
  individual: Individual;
  children?: ReactNode;
}

const IndividualIdentity = ({ individual, children }: Identity) => {
  const company = individual.company;

  return (
    <div className="flex flex-col gap-2">
      {company && (
        <Link
          href={company.url}
          target="_blank"
          title={company.name}
          className="flex flex-row items-center gap-1"
        >
          <Image
            src={company.iconSrc}
            alt={company.name}
            width={16}
            height={16}
            className="w-4 h-auto object-contain"
          />
          <span className="text-sm">{company.name}</span>
        </Link>
      )}
      <h3 className="font-semibold">{individual.name}</h3>
      <div>
        {individual.roles.map((role, index) => (
          <div className="text-sm italic" key={`individual-role-${index}`}>
            {role}
          </div>
        ))}
      </div>
      {children}
    </div>
  );
};

export default IndividualIdentity;
