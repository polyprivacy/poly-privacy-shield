import { Shield, Lock, Zap, Globe, ChevronRight, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const features = [
  {
    icon: Lock,
    title: "Privacy-First Trading",
    description: "Your trades are shielded from public view. No one can link your wallet to your market positions.",
  },
  {
    icon: Shield,
    title: "Wallet Activity Shield",
    description: "Advanced cryptographic techniques keep your on-chain activity private and untraceable.",
  },
  {
    icon: Zap,
    title: "Fast & Seamless Execution",
    description: "Trade instantly with minimal latency. Privacy doesn't mean slow — experience lightning-fast settlements.",
  },
  {
    icon: Globe,
    title: "Decentralized Infrastructure",
    description: "Built on decentralized protocols. No single point of failure, no centralized data collection.",
  },
];

const steps = [
  { number: "01", title: "Connect Wallet", description: "Link your preferred Web3 wallet securely." },
  { number: "02", title: "Select Market", description: "Browse prediction markets across crypto, politics, sports & more." },
  { number: "03", title: "Enable Privacy Shield", description: "Toggle on privacy mode to shield your wallet activity." },
  { number: "04", title: "Confirm Trade", description: "Execute your trade privately with full confidence." },
];

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
        <div className="container mx-auto flex items-center justify-between h-16 px-6">
          <Link to="/" className="text-xl font-bold tracking-tight text-foreground">
            Poly <span className="text-gradient">Privacy</span>
          </Link>
          <div className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Features</a>
            <a href="#how-it-works" className="text-sm text-muted-foreground hover:text-foreground transition-colors">How It Works</a>
            <Link to="/app">
              <Button size="sm">Launch App</Button>
            </Link>
          </div>
          <Link to="/app" className="md:hidden">
            <Button size="sm">Launch App</Button>
          </Link>
        </div>
      </nav>

      {/* Hero */}
      <section className="gradient-hero pt-32 pb-20 md:pt-44 md:pb-32">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-foreground mb-6 animate-fade-in">
              Trade Prediction Markets.{" "}
              <span className="text-gradient">Stay Private.</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto animate-fade-in opacity-0" style={{ animationDelay: "0.15s" }}>
              Poly Privacy allows you to participate in decentralized prediction markets while keeping your wallet activity shielded.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in opacity-0" style={{ animationDelay: "0.3s" }}>
              <Link to="/app">
                <Button variant="hero" size="lg" className="text-base px-8">
                  Launch App <ArrowRight className="ml-1 h-4 w-4" />
                </Button>
              </Link>
              <a href="#how-it-works">
                <Button variant="hero-outline" size="lg" className="text-base px-8">
                  How It Works
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-20 md:py-28">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Built for Privacy</h2>
            <p className="text-muted-foreground max-w-lg mx-auto">Every layer of Poly Privacy is designed to protect your identity and trading activity.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, i) => (
              <div
                key={feature.title}
                className="gradient-card rounded-2xl p-6 shadow-card hover-lift cursor-default animate-fade-in-up opacity-0"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center mb-5">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-20 md:py-28 bg-secondary/50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">How It Works</h2>
            <p className="text-muted-foreground max-w-lg mx-auto">Four simple steps to start trading prediction markets privately.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {steps.map((step, i) => (
              <div key={step.number} className="relative animate-fade-in-up opacity-0" style={{ animationDelay: `${i * 0.1}s` }}>
                <div className="bg-card rounded-2xl p-6 shadow-card h-full">
                  <span className="text-4xl font-bold text-primary/20 mb-4 block">{step.number}</span>
                  <h3 className="text-lg font-semibold text-foreground mb-2">{step.title}</h3>
                  <p className="text-sm text-muted-foreground">{step.description}</p>
                </div>
                {i < steps.length - 1 && (
                  <ChevronRight className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 text-primary/30 h-6 w-6" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Start Trading Privately Today</h2>
            <p className="text-muted-foreground mb-8">Join the future of private prediction markets. Your trades, your privacy.</p>
            <Link to="/app">
              <Button variant="hero" size="lg" className="text-base px-10">
                Launch Poly Privacy <ArrowRight className="ml-1 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-8">
        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <span className="text-sm text-muted-foreground">© 2026 Poly Privacy. All rights reserved.</span>
          <div className="flex gap-6">
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Docs</a>
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Twitter</a>
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Discord</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
