import { Brain, Droplets, Target, BarChart3, Zap, Eye, Banknote, DollarSign, PiggyBank } from "lucide-react";
import { Card } from "@/components/ui/card";

const WhatYouLearn = () => {
  const learnings = [
    {
      icon: Brain,
      title: "The Smart Money Mindset",
      description:
        "How institutions think, plan, and operate differently from retail traders.",
    },
    {
      icon: DollarSign,
      title: "Liquidity & Manipulation",
      description:
        "How operators identify liquidity pockets and trigger market moves.",
    },
    {
      icon: Target,
      title: "Stop-Loss Psychology",
      description:
        "Why your SL becomes an entry signal for smart money—and how to escape manipulation.",
    },
    {
      icon: BarChart3,
      title: "Market Structure of Institutions",
      description:
        "Accumulation → Manipulation → Expansion. Learn how these cycles play out on real charts.",
    },
    {
      icon: Eye,
      title: "Decoding Institutional Intent",
      description:
        "Understand manipulation, traps, sweeps, and how big players engineer moves.",
    },
    {
      icon: Zap,
      title: "Practical, Real-Chart Insights",
      description:
        "Mahesh breaks down institutional footprints and live chart behavior with clarity.",
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            What You'll <span className="text-primary">Learn</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            A deep-dive into how the market truly works, backed by Smart Money
            concepts and real institutional logic.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {learnings.map((item, index) => {
            const Icon = item.icon;
            return (
              <Card
                key={index}
                className="p-6 hover:shadow-xl transition-all hover:scale-105 border-2 hover:border-primary/50 group"
              >
                <div className="mb-4">
                  <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Icon className="w-7 h-7 text-primary" />
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhatYouLearn;
