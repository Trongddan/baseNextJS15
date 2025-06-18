/* eslint-disable @typescript-eslint/no-explicit-any */

import React, { ReactNode } from "react";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../../ui/carousel";
import { cn } from "@/lib";

interface IAppCarousel {
  list?: any[];
  renderItem?: (val: any) => ReactNode;
  containerClass?: string;
  gap?: number;
  orientation?: "vertical" | "horizontal";
  align?: "start" | "center" | "end";
  loop?: boolean;
}
export const AppCarousel = ({
  list,
  renderItem,
  containerClass,
  gap,
  orientation,
  loop = true,
  align = "start",
}: IAppCarousel) => {
  return (
    <Carousel
      opts={{
        align: align,
        loop: loop,
      }}
      plugins={[
        Autoplay({
          delay: 5000,
        }),
      ]}
      orientation={orientation}
      className={cn("w-full  relative", containerClass)}
    >
      <CarouselContent className={cn(gap ? `-ml-[${gap}px]` : "")}>
        {list?.length &&
          list.map((item, index) => (
            <CarouselItem key={index} className={cn(gap)}>
              {renderItem?.(item)}
            </CarouselItem>
          ))}
      </CarouselContent>
      <CarouselPrevious className="absolute left-10 top-1/2 -translate-y-1/2" />
      <CarouselNext className="absolute right-10 top-1/2 -translate-y-1/2" />
    </Carousel>
  );
};
