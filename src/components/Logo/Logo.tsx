import Image from "next/image";
import Link from "next/link";
import classNames from "classnames";
import type { UrlObject } from "url";

interface Logo {
  size?: "small" | "normal"| "medium" | "large";
  logoSrc?: string | undefined;
  logoText?: string;
  showText?: boolean;
  href: string | UrlObject;
  className?: string;
}

const Logo = ({
  size = "normal",
  logoSrc,
  logoText = "",
  showText = true,
  href,
  className = ""
}: Logo) => {
  return (
    <Link
      href={href}
      className={classNames(
        "flex flex-row justify-center items-center gap-1 font-semibold",
        {
          "text-sm": size === "small",
          "text-base": size === "normal",
          "text-2xl": size === "medium",
          "text-3xl": size === "large",
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
              "w-5 h-5": size === "small",
              "w-8 h-8": size === "normal",
              "w-12 h-12": size === "medium",
              "w-20 h-20": size === "large",
            }
          )}
        />
      )}
      {showText && (
        <span className={classNames(className, "hidden md:inline-block")}>
          {logoText}
        </span>
      )}
    </Link>
  );
};

export default Logo;
