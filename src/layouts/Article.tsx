import { ReactNode } from "react";
import classNames from "classnames";

interface ContainerProps {
  align?: "left" | "center"
  children: ReactNode;
}

const Container = ({
  align = "left",
  children,
}: ContainerProps) => {
  return (
    <article className={classNames(
      "bg-neutral rounded-lg py-6 px-4 md:p-12 flex flex-col flex-wrap gap-4",
      {
        "justify-center items-center": align === "center"
      }
    )}>
      {children}
    </article>
  );
};

export default Container;
