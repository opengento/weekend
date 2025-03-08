import { IndividualProps } from "@/components/Individual/individual.types";
import Image from "next/image";
import IndividualCard from "@/components/Individual/IndividualCard";
import Drawer from "@/components/Drawer/Drawer";

interface Avatar {
  individual: IndividualProps;
}

const IndividualAvatar = ({ individual }: Avatar) => {
  return (
    <Drawer
      button={(
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
      )}
      size="2xl"
    >
      <IndividualCard individual={individual}/>
    </Drawer>
  );
};

export default IndividualAvatar;
