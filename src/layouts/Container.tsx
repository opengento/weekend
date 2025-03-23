import { ReactNode } from "react";
import classNames from "classnames";

interface Container {
  children: ReactNode;
  className?: string;
  size?: "default" | "small" | "large";
}

const Container = ({
  children,
  className,
  size = "default",
}: Container) => {
  return (
    <div
      className={classNames(
        "mx-auto px-4 sm:px-8 md:px-12 lg:px-16",
        {
          "max-w-7xl": size === "default",
          "max-w-5xl": size === "small",
          "max-w-[1440px]": size === "large",
        },
        className
      )}
    >
      {children}
    </div>
  );
};

export default Container;
