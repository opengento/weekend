import Image from "next/image";
import { StatProps } from "@/components/Stats/stats.types";
import classNames from "classnames";
import { useId } from "react";
import ButtonLink from "@/components/ButtonLink/ButtonLink";

interface Stat {
  stat: StatProps;
}

const Stat = ({ stat }: Stat) => {
  const id = useId();

  return (
    <div className="stat">
      {stat.iconSrc && (
        <div className={classNames(
          "stat-figure",
          {
            "text-primary": stat.color === "primary",
            "text-secondary": stat.color === "secondary",
            "text-neutral": stat.color === "neutral",
            "text-accent": stat.color === "accent",
            "text-info": stat.color === "info",
            "text-success": stat.color === "success",
            "text-warning": stat.color === "warning",
            "text-error": stat.color === "error",
          }
        )}>
          <figure className="w-full flex">
            <Image
              src={stat.iconSrc}
              alt={stat.title}
              width={48}
              height={48}
              className="grow object-contain"
            />
          </figure>
        </div>
      )}
      <div className="stat-title">{stat.title}</div>
      <div className={classNames(
        "stat-value",
        {
          "text-primary": stat.color === "primary",
          "text-secondary": stat.color === "secondary",
          "text-neutral": stat.color === "neutral",
          "text-accent": stat.color === "accent",
          "text-info": stat.color === "info",
          "text-success": stat.color === "success",
          "text-warning": stat.color === "warning",
          "text-error": stat.color === "error",
        }
      )}>
        {stat.value}
      </div>
      <div className="stat-desc whitespace-pre-wrap">{stat.description}</div>
      {stat.actions && (
        <div className="stat-actions flex flex-col md:flex-row md:flex-wrap md:justify-start md:items-start mt-2 gap-2">
          {stat.actions.map((action, index) => (
            <ButtonLink
              key={`${id}-${index}`}
              cta={action}
              className="btn-xs"
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Stat;
