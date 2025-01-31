import { type ReactNode } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";

interface RecommendationCarouselProps {
  children: ReactNode;
  className?: string;
}

export function RecommendationCarousel({
  children,
  className,
}: RecommendationCarouselProps) {
  return (
    <Carousel
      opts={{
        align: "start",
        loop: true,
      }}
      className={cn("w-full", className)}
    >
      <CarouselContent>
        {Array.isArray(children)
          ? children.map((child, index) => (
              <CarouselItem
                key={index}
                className="md:basis-1/2 lg:basis-1/3"
              >
                {child}
              </CarouselItem>
            ))
          : <CarouselItem>{children}</CarouselItem>}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}