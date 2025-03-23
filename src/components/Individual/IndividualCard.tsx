import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Individual } from "@/interfaces/individual";

interface Card {
  individual: Individual;
}

const IndividualCard = ({ individual }: Card) => {
  const company = individual.company;

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
            className="flex flex-row items-center gap-1"
          >
            <Image
              src={company.iconSrc}
              alt={company.name}
              width={24}
              height={24}
              className="w-6 h-auto object-contain"
            />
            <span className="">{company.name}</span>
          </Link>
        )}
        <h3 className="card-title">{individual.name}</h3>
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
              <FaLinkedin className="h-6 w-auto text-primary"/>
            </Link>
          )}
          {individual.social.github && (
            <Link
              href={individual.social.github}
              target="_blank"
            >
              <FaGithub className="h-6 w-auto text-primary"/>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default IndividualCard;
