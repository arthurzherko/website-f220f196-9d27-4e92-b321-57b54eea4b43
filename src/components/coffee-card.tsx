import { Coffee } from "lucide-react";
import { type ReactNode } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Typography } from "@/components/ui/typography";
import { cn } from "@/lib/utils";

interface CoffeeCardProps {
  title: string;
  description: string;
  icon?: ReactNode;
  className?: string;
  children?: ReactNode;
}

export function CoffeeCard({
  title,
  description,
  icon = <Coffee className="text-primary" />,
  className,
  children,
}: CoffeeCardProps) {
  return (
    <Card className={cn("overflow-hidden", className)}>
      <CardHeader className="grid gap-4 space-y-0">
        <div className="flex items-center gap-3">
          {icon}
          <CardTitle className="line-clamp-1">{title}</CardTitle>
        </div>
        <CardDescription className="line-clamp-2">{description}</CardDescription>
      </CardHeader>
      <CardContent>
        {children || (
          <Typography.P className="text-muted-foreground">
            No additional details available.
          </Typography.P>
        )}
      </CardContent>
    </Card>
  );
}