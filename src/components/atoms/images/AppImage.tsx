import { Skeleton } from "@/components/ui/skeleton";
import { cn } from "@/lib";
import Image, { ImageProps, StaticImageData } from "next/image";
import React from "react";

export interface IAppImageProps extends ImageProps {
  src: string | StaticImageData;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  isLoading?: boolean;
}

export const AppImage: React.FC<IAppImageProps> = ({
  src,
  alt,
  width,
  height,
  className,
  fill,
  isLoading,
  ...props
}) => {
  return (
    <>
      {isLoading ? (
        <Skeleton className={cn("h-[500px] w-full", className)} />
      ) : (
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          fill={fill}
          className={cn("object-cover", className)}
          {...props}
        />
      )}
    </>
  );
};
