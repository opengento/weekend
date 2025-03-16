import BackgroundImage from "@/components/BackgroundImage/BackgroundImage";
import { ReactNode } from "react";
import classNames from "classnames";

interface Banner {
  imagePath: string;
  size?: "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "full"
  children: ReactNode;
}

const Banner = ({ imagePath, size = "md", children }: Banner) => {
  return (
    <BackgroundImage
      imagePath={imagePath}
      className={classNames(
        "flex flex-col justify-center items-center rounded-lg w-full p-8",
        {
          "min-h-24": size === "xs",
          "min-h-32": size === "sm",
          "min-h-48": size === "md",
          "min-h-64": size === "lg",
          "min-h-80": size === "xl",
          "min-h-96": size === "2xl",
          "min-h-screen": size === "full",
        }
      )}

    >
      <div className="bg-neutral/75 p-4 rounded-lg">
        {children}
      </div>
    </BackgroundImage>
  );
};

export default Banner;
