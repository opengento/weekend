import { IndividualProps } from "@/components/Individual/individual.types";
import Image from "next/image";

interface Avatar {
  individual: IndividualProps;
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
