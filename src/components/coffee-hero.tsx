import { CoffeeIcon } from "lucide-react";
import { Typography } from "@/components/ui/typography";
import { cn } from "@/lib/utils";

interface CoffeeHeroProps {
  title: string;
  description: string;
  className?: string;
}

export function CoffeeHero({ title, description, className }: CoffeeHeroProps) {
  return (
    <section
      className={cn(
        "grid gap-4 pb-8 pt-6 md:gap-8 md:pb-12 md:pt-10 lg:py-16",
        className
      )}
    >
      <div className="flex items-center gap-4 text-primary">
        <CoffeeIcon className="size-12" />
        <div className="grid gap-1">
          <Typography.H1>{title}</Typography.H1>
          <Typography.Lead>{description}</Typography.Lead>
        </div>
      </div>
    </section>
  );
}