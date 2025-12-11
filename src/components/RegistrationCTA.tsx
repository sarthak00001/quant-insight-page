import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import useLeadSubmit from "@/hooks/useLeadSubmit";
import tradingBg from "@/assets/trading-bg.jpg";

const RegistrationCTA = () => {
  const { submitLead, loading, success } = useLeadSubmit();

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const updateField = (e) => {
    setForm({ ...form, [e.target.placeholder]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await submitLead({
      name: form.name,
      email: form.email,
      phone: form.phone,
    });
  };

  return (
    <section className="relative py-20 overflow-hidden">
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
          {success ? (
            // SUCCESS VIEW — only message
            <div className="text-center py-16">
              <h2 className="text-3xl font-bold text-green-600 mb-4">
                🎉 Registered Successfully!
              </h2>
              <p className="text-lg text-muted-foreground">
                Thank you for registering. We'll contact you soon!
              </p>
            </div>
          ) : (
            // ORIGINAL VIEW — headings + form
            <>
              <div className="text-center mb-8">
                <div className="inline-block bg-primary/10 text-primary font-bold px-6 py-2 rounded-full mb-4">
                  LIMITED TIME OFFER
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Secure Your Seat Now
                </h2>
                <p className="text-lg text-muted-foreground mb-2">
                  Registration closes in <span className="font-bold text-primary">10 hours</span>
                </p>
              </div>

              <form className="space-y-4" onSubmit={handleSubmit}>
                <Input
                  type="text"
                  placeholder="name"
                  className="h-12 text-base"
                  required
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                />

                <Input
                  // type="email"
                  placeholder="email"
                  className="h-12 text-base"
                  required
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                />

                <Input
                  type="tel"
                  placeholder="phone (eg. 9264758264)"
                  className="h-12 text-base"
                  required
                  pattern="\d{10,13}"
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                />

                <Button
                  type="submit"
                  variant="cta"
                  size="xl"
                  className="w-full"
                  disabled={loading}
                >
                  {loading ? "Submitting…" : "Register For FREE Masterclass →"}
                </Button>
              </form>

              <div className="mt-6 text-center text-sm text-muted-foreground">
                By registering, you agree to receive communications about the masterclass
              </div>
            </>
          )}
        </Card>

        </div>
      </div>
    </section>
  );
};

export default RegistrationCTA;
