import { useEffect, useState } from "react";
import LeadFormModal from "./LeadFormModal"; 
import { Button } from "@/components/ui/button";
import { Calendar, Clock, Globe, Timer, Star } from "lucide-react";
// import heroImage from "@/assets/hero-instructor.jpg";
import heroImage from "@/assets/og-instructor.jpeg";

const Hero = () => {
  const TOTAL_TIME = 15 * 60;
  const [isOpen, setIsOpen] = useState(false);
  const [timeLeft, setTimeLeft] = useState(TOTAL_TIME);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(interval);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;
  const formattedTime = `${minutes}:${seconds.toString().padStart(2, "0")}`;

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-secondary via-secondary to-[hsl(var(--hero-gradient-end))] text-white overflow-hidden">

      {isOpen && <LeadFormModal onClose={() => setIsOpen(false)} />}
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDE4YzAgOS45NC04LjA2IDE4LTE4IDE4cy0xOC04LjA2LTE4LTE4IDguMDYtMTggMTgtMTggMTggOC4wNiAxOCAxOHoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-40"></div>

      <div className="container mx-auto px-4 py-12 relative z-10">
        {/* Top offer banner */}
        <div className="flex justify-center mb-8">
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-6 py-3 inline-flex items-center gap-3">
            <span className="text-2xl font-bold text-primary">FREE</span>
            <span className="text-muted-foreground line-through">₹999</span>
            <span className="text-sm">•</span>
            <span className="text-sm flex items-center gap-2">
              <Timer className="w-4 h-4" />
              Offer Expires in{" "}
              <span className="font-bold text-primary">{formattedTime}</span>
            </span>
          </div>
        </div>

        {/* --- rest of your page unchanged --- */}
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
          {/* Left content */}
          <div className="space-y-8">
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                Masterclass on{" "}
                <span className="text-primary">Algorithmic Trading</span>{" "}
                using AI
              </h1>
              <p className="text-xl text-white/80 mb-4">
                Over <span className="font-bold text-primary">10,000+ traders</span> have already mastered AI-powered trading strategies.
              </p>
            </div>

            {/* Event details grid */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 hover:bg-white/10 transition-all">
                <Calendar className="w-6 h-6 text-primary mb-2" />
                <div className="text-xs text-white/60 uppercase mb-1">Date</div>
                <div className="font-semibold">14 December 2025</div>
              </div>
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 hover:bg-white/10 transition-all">
                <Clock className="w-6 h-6 text-primary mb-2" />
                <div className="text-xs text-white/60 uppercase mb-1">Time</div>
                <div className="font-semibold">12:00 PM IST</div>
              </div>
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 hover:bg-white/10 transition-all">
                <Globe className="w-6 h-6 text-primary mb-2" />
                <div className="text-xs text-white/60 uppercase mb-1">Language</div>
                <div className="font-semibold">Hindi & English</div>
              </div>
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 hover:bg-white/10 transition-all">
                <Timer className="w-6 h-6 text-primary mb-2" />
                <div className="text-xs text-white/60 uppercase mb-1">Duration</div>
                <div className="font-semibold">2+ Hours</div>
              </div>
            </div>

            {/* CTA Button */}
            <div className="space-y-4">
              <Button variant="cta" size="xl" className="w-full" onClick={() => setIsOpen(true)}>
                Register Now For Free →
              </Button>

              {/* Reviews */}
              <div className="flex items-center justify-center gap-4">
                <div className="flex -space-x-2">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-orange-600 border-2 border-white"></div>
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 border-2 border-white"></div>
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-green-500 to-teal-600 border-2 border-white"></div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="flex">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                    ))}
                  </div>
                  <span className="text-sm">
                    <span className="font-bold">18k+</span> reviews (4.9 of 5)
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white/10 animate-float">
              <img
                src={heroImage}
                alt="Expert Algo Trading Instructor"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-secondary/80 via-transparent to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="bg-primary text-white font-bold text-lg px-4 py-2 rounded-lg inline-block mb-2">
                  MASTERING ALGO TRADING
                </div>
                <div className="flex gap-4 text-sm mt-2">
                  <span className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full">
                    ✓ Verified Expert
                  </span>
                  <span className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full">
                    ⚡ Live Support
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom banner */}
        <div className="mt-12 text-center">
          <div className="bg-muted/10 backdrop-blur-sm border border-white/10 rounded-xl p-6 max-w-4xl mx-auto">
            <p className="text-lg">
              Learn from <span className="font-bold text-primary">expert traders</span> with expertise in AI-driven algorithmic trading,
              having taught over <span className="font-bold text-primary">10,000 students</span> with{" "}
              <span className="font-bold text-primary">15+ years of experience</span>.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
