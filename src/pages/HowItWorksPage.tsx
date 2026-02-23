import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/AnimatedSection";
import { Wallet, BarChart3, ShieldCheck, CheckCircle2, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { FloatingOrb } from "@/components/AnimatedSection";

const steps = [
  {
    icon: Wallet,
    number: "01",
    title: "Connect Your Wallet",
    description: "Link your preferred Web3 wallet — MetaMask, WalletConnect, Coinbase Wallet, or Phantom. It takes one click and requires no personal information.",
    details: ["No KYC or identity verification required", "Supports all major EVM-compatible wallets", "Your private keys never leave your device"],
  },
  {
    icon: BarChart3,
    number: "02",
    title: "Browse & Select a Market",
    description: "Explore hundreds of prediction markets across categories like crypto, politics, sports, tech, and more. Each market shows real-time probabilities and trading volume.",
    details: ["Filter by category, volume, or trending", "View real-time Yes/No probability charts", "See community sentiment and volume"],
  },
  {
    icon: ShieldCheck,
    number: "03",
    title: "Enable Privacy Shield",
    description: "Toggle on our proprietary Privacy Shield to mask your wallet activity. Your trades are processed through ZK-proofs, making them untraceable on the blockchain.",
    details: ["Zero-knowledge proof verification", "Wallet address is never linked to your position", "Full on-chain privacy with no trade-offs"],
  },
  {
    icon: CheckCircle2,
    number: "04",
    title: "Confirm & Trade",
    description: "Review your trade details, confirm the transaction, and your private prediction is placed. If you win, collect your payout directly to your shielded wallet.",
    details: ["Sub-second trade execution", "Transparent fee structure (0.5% on wins)", "Payouts auto-deposited to your wallet"],
  },
];

const HowItWorksPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar variant="landing" />

      <section className="pt-28 pb-16 gradient-hero relative overflow-hidden">
        <FloatingOrb className="w-96 h-96 -top-20 -right-40" />
        <div className="absolute inset-0 bg-grid-pattern opacity-30" />
        <div className="container mx-auto px-6 relative z-10 text-center">
          <AnimatedSection>
            <span className="text-sm font-medium text-primary bg-secondary rounded-full px-4 py-1.5">How It Works</span>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mt-6 mb-4">Private Trading in 4 Simple Steps</h1>
            <p className="text-muted-foreground max-w-xl mx-auto text-lg">
              From wallet connection to confirmed trade — here's exactly how Poly Privacy protects your prediction market activity.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto space-y-16">
            {steps.map((step, i) => (
              <AnimatedSection key={step.number} delay={i * 0.1}>
                <div className="flex gap-8 items-start">
                  <div className="hidden md:flex flex-col items-center">
                    <div className="w-16 h-16 rounded-2xl bg-secondary flex items-center justify-center">
                      <step.icon className="h-8 w-8 text-primary" />
                    </div>
                    {i < steps.length - 1 && (
                      <div className="w-px h-24 bg-border mt-4" />
                    )}
                  </div>
                  <div className="flex-1">
                    <span className="text-sm font-bold text-primary">Step {step.number}</span>
                    <h2 className="text-2xl font-bold text-foreground mt-1 mb-3">{step.title}</h2>
                    <p className="text-muted-foreground leading-relaxed mb-5">{step.description}</p>
                    <ul className="space-y-2">
                      {step.details.map((detail) => (
                        <li key={detail} className="flex items-center gap-2 text-sm text-foreground">
                          <CheckCircle2 className="h-4 w-4 text-success flex-shrink-0" />
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection className="text-center mt-20">
            <Link to="/app">
              <Button variant="hero" size="lg" className="text-base px-10 group">
                Start Trading Now
                <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </AnimatedSection>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default HowItWorksPage;
