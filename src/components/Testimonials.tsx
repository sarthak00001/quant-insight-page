import { Card } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Rajesh Kumar",
      role: "Software Engineer",
      text: "The algorithmic trading masterclass completely transformed my approach to the stock market. I'm now generating consistent returns with automated strategies!",
      rating: 5,
    },
    {
      name: "Priya Sharma",
      role: "Business Owner",
      text: "Best investment I made was in my trading education. The AI tools and strategies taught here are game-changing. Highly recommended!",
      rating: 5,
    },
    {
      name: "Amit Patel",
      role: "Finance Professional",
      text: "From zero knowledge to confidently running my own algo trading systems. The step-by-step approach and live support made all the difference.",
      rating: 5,
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            What Our <span className="text-primary">Students</span> Say
          </h2>
          <p className="text-lg text-muted-foreground">
            Join thousands of successful traders who transformed their financial future
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
