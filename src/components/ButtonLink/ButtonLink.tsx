import Link from "next/link";
import { ReactNode } from "react";
import classNames from "classnames";
import { ButtonLink as ButtonLinkType } from "@/interfaces/link";

interface ButtonLink {
  cta: ButtonLinkType;
  icon?: ReactNode | undefined;
  className?: string | undefined;
}

const ButtonLink = ({ cta, icon, className }: ButtonLink) => {
  return (
    <Link
      href={cta.href}
      target={cta.target}
      className={classNames(
        "btn",
        {
          "btn-primary": cta.level === "primary",
          "btn-secondary": cta.level === "secondary",
          "btn-neutral": cta.level === "neutral",
          "btn-accent": cta.level === "accent",
          "btn-info": cta.level === "info",
          "btn-success": cta.level === "success",
          "btn-warning": cta.level === "warning",
          "btn-error": cta.level === "error",
        },
        className
      )}
    >
      {icon}
      {cta.label}
    </Link>
  );
};

export default ButtonLink;
