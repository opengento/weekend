import Image from "next/image";
import { ReactNode } from "react";

interface BackgroundImage {
  children: ReactNode;
  imagePath: string;
  className?: string;
  blurAmount?: "none" | "sm" | "md" | "lg";
}

const BackgroundImage = ({
  children,
  imagePath,
  className = "",
  blurAmount = "none"
}: BackgroundImage) => {
  const blurValues = {
    none: "",
    sm: "backdrop-blur-sm",
    md: "backdrop-blur-md",
    lg: "backdrop-blur-lg",
  };

  return (
    <div className={`relative overflow-hidden ${className}`}>
      <div className="absolute inset-0">
        <Image
          src={imagePath}
          alt=""
          fill
          className="object-cover object-center"
        />
      </div>
      <div className={`absolute inset-0 ${blurValues[blurAmount]}`}/>
      <div className="relative">{children}</div>
    </div>
  );
};

export default BackgroundImage;
