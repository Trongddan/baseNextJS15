import { cn } from "@/lib";
import React, { ReactNode } from "react";

type HeadingTag = "h1" | "h2" | "h3" | "h4" | "h5" | "p";

export interface ITypography {
  children: ReactNode;
  className?: string;
  type?: HeadingTag;
}

export const Typography = ({
  className,
  children,
  type = "p",
}: ITypography) => {
  const Tag: HeadingTag = type;

  const baseClass = "font-bold";
  const sizeClass = {
    h1: "text-3xl md:text-4xl lg:text-5xl",
    h2: "text-2xl md:text-3xl lg:text-4xl",
    h3: "text-xl md:text-2xl lg:text-3xl",
    h4: "text-lg md:text-xl lg:text-2xl",
    h5: "text-base md:text-lg lg:text-xl",
    p: "text-base",
  }[Tag];

  return <Tag className={cn(baseClass, sizeClass, className)}>{children}</Tag>;
};
