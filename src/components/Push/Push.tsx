import Typography from "@/components/Typography/Typography";
import { CardProps } from "@/components/Push/push.types";
import {
  FaCalendarPlus,
  FaGlobe,
  FaGraduationCap,
  FaPeopleGroup
} from "react-icons/fa6";
import { ReactNode } from "react";

const icons: Record<string, ReactNode> = {
  "people-group": <FaPeopleGroup className="w-18 h-18" />,
  "globe": <FaGlobe className="w-18 h-18" />,
  "calendar": <FaCalendarPlus className="w-18 h-18" />,
  "graduation-cap": <FaGraduationCap className="w-18 h-18" />,
};

const Card = ({ icon, label }: CardProps) => {
  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <div className="avatar">
        <div className="ring-primary ring-offset-base-100 rounded-full ring ring-offset-2">
          <div className="w-24 h-24 text-primary flex items-center justify-center">
            {icons[icon]}
          </div>
        </div>
      </div>
      <Typography variant="subtitle2" color="dark" weight="semibold">
        {label}
      </Typography>
    </div>
  );
};

interface Push {
  cards: CardProps[];
}

const Push = ({ cards }: Push) => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-3">
      {cards.map((card, index) => (
        <Card icon={card.icon} label={card.label} key={`push-card-${index}`}/>
      ))}
    </section>
  );
};

export default Push;
