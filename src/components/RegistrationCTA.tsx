import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import tradingBg from "@/assets/trading-bg.jpg";

const RegistrationCTA = () => {
  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0">
        <img
          src={tradingBg}
          alt="Trading background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-secondary/95 via-secondary/90 to-secondary/95"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto">
          <Card className="p-8 md:p-12 bg-white/95 backdrop-blur-sm shadow-2xl">
            <div className="text-center mb-8">
              <div className="inline-block bg-primary/10 text-primary font-bold px-6 py-2 rounded-full mb-4">
                LIMITED TIME OFFER
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Secure Your Seat Now
              </h2>
              <p className="text-lg text-muted-foreground mb-2">
                Registration closes in <span className="font-bold text-primary">48 hours</span>
              </p>
              <p className="text-sm text-muted-foreground">
                Don't miss this opportunity to transform your trading journey
              </p>
            </div>

            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div>
                <Input
                  type="text"
                  placeholder="Full Name"
                  className="h-12 text-base"
                  required
                />
              </div>
              <div>
                <Input
                  type="email"
                  placeholder="Email Address"
                  className="h-12 text-base"
                  required
                />
              </div>
              <div>
                <Input
                  type="tel"
                  placeholder="Phone Number"
                  className="h-12 text-base"
                  required
                />
              </div>
              <div className="pt-4">
                <Button
                  type="submit"
                  variant="cta"
                  size="xl"
                  className="w-full"
                >
                  Register For FREE Masterclass →
                </Button>
              </div>
            </form>

            <div className="mt-6 text-center text-sm text-muted-foreground">
              By registering, you agree to receive communications about the masterclass
            </div>

            <div className="mt-8 flex items-center justify-center gap-8 text-sm">
              <div className="text-center">
                <div className="font-bold text-2xl text-primary">100%</div>
                <div className="text-muted-foreground">Free</div>
              </div>
              <div className="h-12 w-px bg-border"></div>
              <div className="text-center">
                <div className="font-bold text-2xl text-primary">2+</div>
                <div className="text-muted-foreground">Hours</div>
              </div>
              <div className="h-12 w-px bg-border"></div>
              <div className="text-center">
                <div className="font-bold text-2xl text-primary">Live</div>
                <div className="text-muted-foreground">Session</div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default RegistrationCTA;
