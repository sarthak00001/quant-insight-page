import { Brain, TrendingUp, BarChart3, Zap, Shield, Cpu } from "lucide-react";
import { Card } from "@/components/ui/card";

const WhatYouLearn = () => {
  const learnings = [
    {
      icon: Brain,
      title: "AI-Powered Analysis",
      description: "Learn to use cutting-edge AI tools to analyze market trends and predict movements.",
    },
    {
      icon: TrendingUp,
      title: "Algorithmic Strategies",
      description: "Master proven algorithmic trading strategies that generate consistent returns.",
    },
    {
      icon: BarChart3,
      title: "Technical Indicators",
      description: "Understand key technical indicators and how to combine them for better decisions.",
    },
    {
      icon: Zap,
      title: "Automated Trading",
      description: "Set up automated trading systems that work 24/7 without emotional bias.",
    },
    {
      icon: Shield,
      title: "Risk Management",
      description: "Implement robust risk management techniques to protect your capital.",
    },
    {
      icon: Cpu,
      title: "Backtesting Methods",
      description: "Learn to backtest and validate your strategies before deploying real capital.",
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
            Comprehensive curriculum designed to transform you into a confident algorithmic trader
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
