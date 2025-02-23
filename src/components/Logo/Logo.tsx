import Image from "next/image";
import Link from "next/link";
import classNames from "classnames";

interface LogoProps {
  size?: "small" | "medium" | "large";
  logoSrc?: string | undefined;
  logoText?: string;
  showText?: boolean;
  href: string;
}

const Logo = ({
  size = "medium",
  logoSrc,
  logoText = "",
  showText = true,
  href
}: LogoProps) => {
  return (
    <Link
      href={href}
      className={classNames(
        "flex flex-row justify-center items-center gap-1 font-semibold",
        {
          "text-lg": size === "small",
          "text-xl": size === "medium",
          "text-xll": size === "large",
        }
      )}
    >
      {logoSrc && (
        <Image
          src={logoSrc}
          alt={logoText}
          width={100}
          height={100}
          className={classNames(
            {
              "w-8 h-8": size === "small",
              "w-12 h-12": size === "medium",
              "w-20 h-20": size === "large",
            }
          )}
        />
      )}
      {showText && (
        <span className="hidden md:inline-block">{logoText}</span>
      )}
    </Link>
  );
};

export default Logo;
