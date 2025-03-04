import Link from "next/link";
import { EventActionProps } from "@/components/Event/event.types";
import { ReactNode } from "react";
import classNames from "classnames";

interface Action {
  cta: EventActionProps;
  icon?: ReactNode | undefined;
  className?: string | undefined;
}

const Action = ({ cta, icon, className }: Action) => {
  return (
    <Link
      href={cta.url}
      target="_blank"
      className={classNames(
        "btn",
        `btn-${cta.level}`,
        className
      )}
    >
      {icon}
      {cta.label}
    </Link>
  );
};

export default Action;
