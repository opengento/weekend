import classNames from "classnames";
import {ReactNode} from "react";

interface Divider {
  position?: "vertical" | "horizontal";
  color?: "primary" | "secondary" | "neutral" | "accent" | "success" | "warning" | "info" | "error";
  align?: "start" | "middle" | "end";
  children?: ReactNode | undefined
}

const Divider = ({
  position = "vertical",
  color = "primary",
  align = "middle",
  children
}: Divider) => {
  return (
    <div className={classNames(
      "divider",
      {
        "divider-primary": color === "primary",
        "divider-secondary": color === "secondary",
        "divider-neutral": color === "neutral",
        "divider-accent": color === "accent",
        "divider-success": color === "success",
        "divider-warning": color === "warning",
        "divider-info": color === "info",
        "divider-error": color === "error",
      },
      {
        "divider-horizontal": position === "vertical",
        "divider-vertical": position === "horizontal",
      },
      {
        "divider-start": align === "start",
        "divider-end": align === "end",
      }
    )}
    >
      {children}
    </div>
  );
};

export default Divider;
