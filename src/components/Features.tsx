import { Trophy, Users, BookOpen, Headphones } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: Trophy,
      title: "Proven Track Record",
      description: "15+ Years of Professional Trading Experience",
      stat: "₹50Cr+",
      statLabel: "Capital Managed",
    },
    {
      icon: Users,
      title: "Community Support",
      description: "Active Learning Community",
      stat: "10K+",
      statLabel: "Students Trained",
    },
    {
      icon: BookOpen,
      title: "Comprehensive Curriculum",
      description: "Institutional-Grade Frameworks",
      stat: "20+",
      statLabel: "Frameworks Taught",
    },
    {
      icon: Headphones,
      title: "Live Support",
      description: "Real-Time Assistance",
      stat: "LIVE",
      statLabel: "Support",
    },
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="text-center group hover:scale-105 transition-transform"
              >
                <div className="mb-4 inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-2xl group-hover:bg-primary/20 transition-colors">
                  <Icon className="w-8 h-8 text-primary" />
                </div>
                <div className="text-4xl font-bold text-primary mb-1">
                  {feature.stat}
                </div>
                <div className="text-sm text-muted-foreground mb-3">
                  {feature.statLabel}
                </div>
                <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;
