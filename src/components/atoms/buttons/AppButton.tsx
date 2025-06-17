import { Button } from "@/components/ui/button";
import React, { ReactNode } from "react";

interface IAppButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  text?: ReactNode;
  className?: string;
  disabled?: boolean;
  variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link";
}
export const AppButton = ({ text, className, onClick, disabled, variant }: IAppButtonProps) => {
  return (
    <div>
      <Button className={className} onClick={onClick} disabled={disabled} variant={variant}>
        {text}
      </Button>
    </div>
  );
};
