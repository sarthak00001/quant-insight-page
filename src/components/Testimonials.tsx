import { Card } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Rajesh K.",
      role: "Trader",
      text: "This is the first class that finally explained WHY the market behaves the way it does. The strategies are easy to follow and I feel much more confident trading now.",
      rating: 5,
    },
    {
      name: "Priya S.",
      role: "Part-Time Trader",
      text: "Understanding Smart Money psychology saved me from so many common traps. The examples are very clear and practical—I can apply them immediately.",
      rating: 5,
    },
    {
      name: "Amit P.",
      role: "Financial Analyst",
      text: "Mahesh’s explanation of liquidity and market manipulation changed my trading forever. The insights are practical and easy to implement in real trades.",
      rating: 5,
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            What our <span className="text-primary">Students Say</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Hear what our students say after learning Smart Money trading strategies
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="p-6 hover:shadow-xl transition-all hover:scale-105 relative"
            >
              <Quote className="absolute top-4 right-4 w-8 h-8 text-primary/20" />
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-muted-foreground mb-6 italic">
                "{testimonial.text}"
              </p>
              <div>
                <div className="font-bold">{testimonial.name}</div>
                <div className="text-sm text-muted-foreground">
                  {testimonial.role}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
