import { IndividualProps } from "@/components/Individual/individual.types";
import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import getCompany from "@/functions/company";

interface Card {
  individual: IndividualProps;
}

const IndividualCard = ({ individual }: Card) => {
  const company = individual.companyId ? getCompany(individual.companyId) : null;

  return (
    <div className="card card-side bg-base-100 shadow-sm">
      <figure>
        <Image
          src={individual.avatarSrc}
          alt={individual.name}
          width={275}
          height={275}
          className="object-contain"
        />
      </figure>
      <div className="card-body">
        {company && (
          <Link
            href={company.url}
            target="_blank"
            title={company.name}
            className="flex flex-row"
          >
            <div className="avatar">
              <div className="w-12">
                  <Image
                    src={company.iconSrc}
                    alt={company.name}
                    width={48}
                    height={48}
                    className="object-contain"
                  />
              </div>
            </div>
            <span className="">{company.name}</span>
          </Link>
        )}
        <h2 className="card-title">{individual.name}</h2>
        {individual.roles.map((role, index) => (
          <div
            className="badge badge-ghost"
            key={`individual-role-${index}`}
          >
            {role}
          </div>
        ))}
        <p>{individual.biography}</p>
        <div className="card-actions justify-end">
          {individual.social.linkedin && (
            <Link
              href={individual.social.linkedin}
              target="_blank"
            >
              <FaLinkedin/>
            </Link>
          )}
          {individual.social.github && (
            <Link
              href={individual.social.github}
              target="_blank"
            >
              <FaGithub/>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default IndividualCard;
