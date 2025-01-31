import { useState, type FormEvent } from "react";
import { Coffee, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";

interface CoffeeFormProps {
  onSubmit: (preferences: string) => Promise<void>;
  className?: string;
}

export function CoffeeForm({ onSubmit, className }: CoffeeFormProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [preferences, setPreferences] = useState("");

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setIsLoading(true);
    
    try {
      await onSubmit(preferences);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <Card className={cn("w-full", className)}>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Coffee className="text-primary" />
          Tell us your preferences
        </CardTitle>
        <CardDescription>
          Describe your ideal coffee experience and let our AI help you discover
          your perfect brew.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="grid gap-4">
          <div className="grid gap-2">
            <Label htmlFor="preferences">Coffee Preferences</Label>
            <Input
              id="preferences"
              placeholder="I like strong coffee with chocolate notes..."
              value={preferences}
              onChange={(e) => setPreferences(e.target.value)}
              disabled={isLoading}
              required
            />
          </div>
          <Button disabled={isLoading || !preferences}>
            {isLoading && <Loader2 className="mr-2 size-4 animate-spin" />}
            Get Recommendations
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}