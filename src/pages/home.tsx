import { useState } from "react";
import { ModeToggle } from "@/components/mode-toggle";
import { CoffeeHero } from "@/components/coffee-hero";
import { CoffeeForm } from "@/components/coffee-form";
import { CoffeeCard } from "@/components/coffee-card";
import { RecommendationCarousel } from "@/components/recommendation-carousel";
import { Typography } from "@/components/ui/typography";
import { Heart, Coffee, ThumbsUp } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

interface CoffeeRecommendation {
  id: number;
  title: string;
  description: string;
  details: string;
}

export function Home() {
  const { toast } = useToast();
  const [recommendations, setRecommendations] = useState<CoffeeRecommendation[]>([]);

  // Simulated AI recommendation function
  const getRecommendations = async (preferences: string) => {
    // This would normally call your AI service
    const mockRecommendations: CoffeeRecommendation[] = [
      {
        id: 1,
        title: "Ethiopian Yirgacheffe",
        description: "Light roasted, floral and citrusy",
        details: "Known for its clean and bright taste with distinctive floral notes and a light, tea-like body.",
      },
      {
        id: 2,
        title: "Colombian Supremo",
        description: "Medium roasted, balanced and smooth",
        details: "Well-balanced with caramel sweetness, a touch of citrus, and a clean aftertaste.",
      },
      {
        id: 3,
        title: "Sumatra Mandheling",
        description: "Dark roasted, full-bodied and earthy",
        details: "Rich and complex with a full body, low acidity, and notes of dark chocolate and earth.",
      },
    ];

    return mockRecommendations;
  };

  const handleSubmit = async (preferences: string) => {
    try {
      const results = await getRecommendations(preferences);
      setRecommendations(results);
      toast({
        title: "Recommendations Ready!",
        description: "We've found some perfect matches for your taste.",
      });
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Failed to get recommendations. Please try again.",
      });
    }
  };

  return (
    <div className="container relative min-h-screen">
      <header className="flex items-center justify-end p-4">
        <ModeToggle />
      </header>

      <main className="grid gap-8 pb-8">
        <CoffeeHero
          title="AI Coffee Recommender"
          description="Discover your perfect brew with our AI-powered coffee recommendations"
        />

        <div className="grid gap-8 lg:grid-cols-2">
          <CoffeeForm onSubmit={handleSubmit} />
          
          <div className="grid content-center gap-4">
            <Typography.H2 className="text-primary">Why Use Our AI?</Typography.H2>
            <div className="grid gap-4">
              <div className="flex items-center gap-2">
                <Coffee className="text-primary" />
                <Typography.P>Personalized recommendations based on your taste</Typography.P>
              </div>
              <div className="flex items-center gap-2">
                <Heart className="text-primary" />
                <Typography.P>Discover new coffee varieties you'll love</Typography.P>
              </div>
              <div className="flex items-center gap-2">
                <ThumbsUp className="text-primary" />
                <Typography.P>Expert-level coffee knowledge at your fingertips</Typography.P>
              </div>
            </div>
          </div>
        </div>

        {recommendations.length > 0 && (
          <section className="grid gap-4">
            <Typography.H2 className="text-primary">Your Personalized Recommendations</Typography.H2>
            <RecommendationCarousel>
              {recommendations.map((rec) => (
                <CoffeeCard
                  key={rec.id}
                  title={rec.title}
                  description={rec.description}
                >
                  <Typography.P>{rec.details}</Typography.P>
                </CoffeeCard>
              ))}
            </RecommendationCarousel>
          </section>
        )}
      </main>
    </div>
  );
}