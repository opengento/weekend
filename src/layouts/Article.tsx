import { ReactNode } from "react";
import classNames from "classnames";

interface Article {
  align?: "left" | "center";
  color?: "neutral" | "base-100" | "base-200";
  children: ReactNode;
}

const Article = ({
  align = "left",
  color = "neutral",
  children,
}: Article) => {
  return (
    <article className={classNames(
      "rounded-lg py-6 px-4 md:p-12 flex flex-col flex-wrap gap-4",
      {
        "justify-center items-center": align === "center",
        "bg-neutral": color === "neutral",
        "bg-base-100": color === "base-100",
        "bg-base-200": color === "base-200",
      }
    )}>
      {children}
    </article>
  );
};

export default Article;
