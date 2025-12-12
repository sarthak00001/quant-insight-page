import { CheckCircle2 } from "lucide-react";

const TargetAudience = () => {
  const points = [
    "You tired of entering trades only to get hit by stop-loss hunts.",
    "You want to understand how big players really move the market.",
    "You want to decode manipulation, traps, and institutional intent.",
    "You want clarity instead of confusion from random patterns.",
    "You want to trade in alignment with Smart Money—not against it.",
    "You want to learn systematic algorithmic trading strategies.",
  ];

  return (
    <section className="py-20 bg-secondary text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            This <span className="text-primary">masterclass</span> is designed for You!
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {points.map((point, index) => (
            <div
              key={index}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all hover:scale-105 group"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <CheckCircle2 className="w-6 h-6 text-primary group-hover:scale-110 transition-transform" />
                </div>
                <p className="text-white/90">{point}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TargetAudience;
