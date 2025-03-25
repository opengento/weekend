import { useId } from "react";
import { StatProps } from "@/components/Stats/stats.types";
import Stat from "@/components/Stats/Stat";
import classNames from "classnames";

interface Stats {
  stats: StatProps[];
  direction?: "horizontal" | "vertical";
  className?: string;
}

const Stats = ({ stats, direction = "horizontal", className }: Stats) => {
  const id = useId();

  return (
    <div className={classNames(
      "stats shadow stats-vertical",
      {
        "md:stats-horizontal": direction === "horizontal",
      },
      className
    )}>
      {stats.map((stat, index) => (
        <Stat stat={stat} key={`${id}-${index}`} />
      ))}
    </div>
  );
};

export default Stats;
