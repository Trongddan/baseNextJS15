import { Input } from "@/components/ui/input";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { cn } from "@/lib";
import React from "react";
interface IAppInput extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  textClassName?: string;
  containerClassName?: string;
  error?: string;
  label?: string;
  labelClassName?: string;
  required?: boolean;
}
export const AppInput = ({
  label,
  labelClassName,
  error,
  className,
  containerClassName,
  required,
  textClassName,
  ...rest
}: IAppInput) => {
  return (
    <div className={cn("h-auto", containerClassName)}>
      {label && (
        <label className={cn("text-base font-bold", labelClassName)}>
          {label} {required && <span className="!text-red-500 font-semibold">*</span>}
        </label>
      )}
      {rest.readOnly ? (
        <Tooltip>
          <TooltipTrigger asChild>
            <p className={cn("text-base text-balance line-clamp-1 ", textClassName)}>{rest.value}</p>
          </TooltipTrigger>
          <TooltipContent>
            <p>Add to library</p>
          </TooltipContent>
        </Tooltip>
      ) : (
        <Input
          className={cn(
            "min-h-[38px]",
            {
              "border-red-500": error,
            },
            className
          )}
          {...rest}
        />
      )}
      {error && <p className="text-sm mt-1 ml-1 text-red-500">{error}</p>}
    </div>
  );
};
