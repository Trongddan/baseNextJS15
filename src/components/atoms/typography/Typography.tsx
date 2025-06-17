import { cn } from "@/lib";
import React, { ReactNode } from "react";

type HeadingTag = "h1" | "h2" | "h3" | "h4" | "p";

export interface ITypography {
  children: ReactNode;
  className?: string;
  type?: HeadingTag;
}

export const Typography = ({ className, children, type = "p" }: ITypography) => {
  const Tag: HeadingTag = type;

  const baseClass = "font-bold";
  const sizeClass = {
    h1: "text-5xl",
    h2: "text-4xl",
    h3: "text-3xl",
    h4: "text-2xl",
    p: "text-base",
  }[Tag];

  return <Tag className={cn(baseClass, sizeClass, className)}>{children}</Tag>;
};
