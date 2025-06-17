import { Button } from "@/components/ui/button";
import { cn } from "@/lib";
import React from "react";
import { AppIcon, IconMap } from "../icon";

interface IAppButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  text?: string;
  className?: string;
  labelClass?: string;
  disabled?: boolean;
  preIcon?: keyof typeof IconMap;
  suffIcon?: keyof typeof IconMap;
  preIconClassName?: string;
  suffIconClassName?: string;
  isLoading?: boolean;
  variant?:
    | "default"
    | "destructive"
    | "outline"
    | "secondary"
    | "ghost"
    | "link";
}
export const AppButton = ({
  text,
  className,
  onClick,
  disabled,
  variant,
  labelClass,
  preIcon,
  suffIcon,
  preIconClassName,
  suffIconClassName,
  isLoading,
  ...rest
}: IAppButtonProps) => {
  return (
    <div>
      <Button
        className={cn("cursor-pointer flex items-center", className)}
        onClick={onClick}
        disabled={disabled}
        variant={variant}
        {...rest}
      >
        {isLoading ? (
          <AppIcon className={"animate-spin size-5"} name={"loading"} />
        ) : (
          <>
            {preIcon && <AppIcon className={preIconClassName} name={preIcon} />}
            <span className={cn("text-base font-semibold", labelClass)}>
              {text}
            </span>
            {suffIcon && (
              <AppIcon className={suffIconClassName} name={suffIcon} />
            )}
          </>
        )}
      </Button>
    </div>
  );
};
