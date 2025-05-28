import Image from "next/image";
import { ReactNode } from "react";
import classNames from "classnames";

interface Hero {
  children: ReactNode;
  imagePath: string;
  size?: "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "full"
  overlay?: boolean;
  blurAmount?: "none" | "sm" | "md" | "lg";
  className?: string;
}

const Hero = ({
  children,
  imagePath,
  size = "md",
  overlay = true,
  blurAmount = "none",
  className = "",
}: Hero) => {
  const blurValues = {
    none: "",
    sm: "backdrop-blur-xs",
    md: "backdrop-blur-sm",
    lg: "backdrop-blur-md",
  };

  return (
    <div className={classNames(
      "hero relative overflow-hidden flex flex-col justify-center items-center w-full",
      {
        "min-h-24": size === "xs",
        "min-h-32": size === "sm",
        "min-h-48": size === "md",
        "min-h-64": size === "lg",
        "min-h-80": size === "xl",
        "min-h-96": size === "2xl",
        "min-h-screen": size === "full",
      },
      className
    )}>
      <div className="absolute inset-0">
        <Image
          src={imagePath}
          alt=""
          fill
          className="object-cover object-center"
        />
      </div>
      <div className={classNames(
        `absolute inset-0 ${blurValues[blurAmount]}`,
        {
          "hero-overlay": overlay,
        }
      )}/>
      <div className="hero-content relative">{children}</div>
    </div>
  );
};

export default Hero;
