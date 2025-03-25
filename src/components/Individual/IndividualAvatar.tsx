import Image from "next/image";
import { Individual } from "@/interfaces/individual";

interface Avatar {
  individual: Individual;
}

const IndividualAvatar = ({ individual }: Avatar) => {
  return (
    <div className="avatar">
      <div className="ring-primary ring-offset-base-100 w-24 rounded-full ring ring-offset-2">
        <Image
          src={individual.avatarSrc}
          alt={individual.name}
          width={96}
          height={96}
          className="object-contain"
        />
      </div>
    </div>
  );
};

export default IndividualAvatar;
