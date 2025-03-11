import {
  TypographyAlign,
  TypographyColor,
  TypographyProps,
  TypographyUnderlineColor,
  TypographyVariant,
  TypographyWeight,
} from "@/components/Typography/Typography.types";
import React from "react";

const Typography = ({
  variant = "body1",
  color = "dark",
  weight = "normal",
  align = "left",
  className = "",
  children,
  underlineColor,
}: TypographyProps) => {
  const variants: Record<TypographyVariant, string> = {
    h1: "font-alt text-4xl md:text-5xl lg:text-5xl",
    h2: "font-alt text-2xl md:text-3xl lg:text-3xl",
    h3: "text-2xl md:text-3xl lg:text-4xl",
    h4: "text-xl md:text-2xl lg:text-3xl",
    h5: "text-lg md:text-xl lg:text-2xl",
    h6: "text-base md:text-lg lg:text-xl",
    subtitle1: "text-xl",
    subtitle2: "text-lg",
    body1: "text-base",
    body2: "text-sm md:text-base",
    small: "text-xs md:text-sm",
    caption: "text-xs",
    button: "text-sm uppercase tracking-wide",
    overline: "text-xs uppercase tracking-wider",
  };

  const colors: Record<TypographyColor, string> = {
    primary: "text-primary-content",
    secondary: "text-secondary-content",
    success: "text-success-content",
    error: "text-error-content",
    warning: "text-warning-content",
    info: "text-info",
    light: "text-neutral-content",
    dark: "text-base-content",
  };

  const weights: Record<TypographyWeight, string> = {
    thin: "font-thin",
    light: "font-light",
    normal: "font-normal",
    medium: "font-medium",
    semibold: "font-semibold",
    bold: "font-bold",
    extrabold: "font-extrabold",
  };

  const alignments: Record<TypographyAlign, string> = {
    left: "text-left",
    center: "text-center",
    right: "text-right",
    justify: "text-justify",
  };

    const underlineColors: Record<TypographyUnderlineColor, string> = {
      primary: "bg-primary",
      secondary: "bg-secondary",
      success: "bg-success",
      error: "bg-error",
      warning: "bg-warning",
      info: "bg-info",
      light: "bg-neutral",
      dark: "bg-color-base-300",
    };

  const classes = [
    variants[variant],
    colors[color],
    weights[weight],
    alignments[align],
    className,
  ].join(" ");

  return React.createElement(
    variant.startsWith("h") ? variant : "p",
    {
      className: `relative w-fit ${classes}`,
    },
    <>
      <span className="relative z-10">{children}</span>
      {underlineColor && (
        <span
          className={`absolute rounded -inset-x-1 bottom-0 h-[42%] ${underlineColors[underlineColor]}`}
        />
      )}
    </>
  );
};

export default Typography;
