import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Shield, Lock, Zap, Globe, ChevronRight, ArrowRight,
  Eye, EyeOff, BarChart3, Users, TrendingUp, CheckCircle2,
  Layers, Code, Fingerprint, Server, Wallet, ShieldCheck,
  Sparkles, ArrowUpRight, ChevronDown, Minus
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { AnimatedSection, StaggerContainer, StaggerItem, FloatingOrb, CountUp } from "@/components/AnimatedSection";
import { useState } from "react";

/* ─── Data ─── */
const stats = [
  { value: 12400, suffix: "+", label: "Active Traders" },
  { value: 48, suffix: "M+", label: "Volume Traded" },
  { value: 200, suffix: "+", label: "Markets Available" },
  { value: 99.9, suffix: "%", label: "Uptime" },
];

const features = [
  { icon: Lock, title: "Privacy-First Trading", description: "Every trade you make is cryptographically shielded. No one — not even us — can link your wallet to your positions." },
  { icon: Shield, title: "Wallet Activity Shield", description: "Our proprietary shielding layer masks your on-chain footprint, making your trading activity invisible to block explorers." },
  { icon: Zap, title: "Fast & Seamless Execution", description: "Sub-second trade execution powered by optimistic rollups. Privacy doesn't mean slow — it means smarter." },
  { icon: Globe, title: "Decentralized Infrastructure", description: "No single point of failure. Built on battle-tested protocols with no centralized data collection." },
  { icon: Fingerprint, title: "Zero-Knowledge Proofs", description: "Leverage cutting-edge ZK technology to verify trades without revealing any personal information." },
  { icon: Layers, title: "Multi-Chain Support", description: "Trade across Ethereum, Polygon, Arbitrum, and Base — all with the same privacy guarantees." },
];

const steps = [
  { number: "01", title: "Connect Wallet", description: "Link your MetaMask, WalletConnect, or any Web3 wallet securely in one click.", icon: Wallet },
  { number: "02", title: "Select Market", description: "Browse hundreds of prediction markets across crypto, politics, sports, tech, and more.", icon: BarChart3 },
  { number: "03", title: "Enable Privacy Shield", description: "Toggle on our proprietary privacy shield to mask your wallet activity from public view.", icon: ShieldCheck },
  { number: "04", title: "Confirm Trade", description: "Execute your trade with confidence. Your position is private, secure, and verifiable.", icon: CheckCircle2 },
];

const marketCategories = [
  { name: "Crypto", count: 84, icon: "₿", color: "bg-primary/10 text-primary" },
  { name: "Politics", count: 42, icon: "🏛", color: "bg-primary/10 text-primary" },
  { name: "Sports", count: 36, icon: "⚽", color: "bg-primary/10 text-primary" },
  { name: "Tech", count: 28, icon: "💻", color: "bg-primary/10 text-primary" },
  { name: "Entertainment", count: 19, icon: "🎬", color: "bg-primary/10 text-primary" },
  { name: "Science", count: 15, icon: "🔬", color: "bg-primary/10 text-primary" },
];

const testimonials = [
  { name: "Alex K.", role: "DeFi Researcher", text: "Finally a prediction market where I don't have to worry about my trading strategies being front-run. The privacy features are genuinely next-level.", avatar: "A" },
  { name: "Sarah M.", role: "Crypto Fund Manager", text: "Poly Privacy solved our biggest concern — institutional-grade privacy. Our fund can now participate in prediction markets without exposing our positions.", avatar: "S" },
  { name: "Dev P.", role: "Web3 Developer", text: "The UX is incredible. Clean, fast, and the privacy toggle is seamlessly integrated. This is how Web3 should feel.", avatar: "D" },
];

const comparisons = [
  { feature: "Private Trading", polyPrivacy: true, others: false },
  { feature: "Wallet Shielding", polyPrivacy: true, others: false },
  { feature: "Zero-Knowledge Proofs", polyPrivacy: true, others: false },
  { feature: "Multi-Chain Support", polyPrivacy: true, others: "Partial" },
  { feature: "Decentralized", polyPrivacy: true, others: true },
  { feature: "Low Fees", polyPrivacy: true, others: "Varies" },
  { feature: "Institutional Grade", polyPrivacy: true, others: false },
];

const securityFeatures = [
  { icon: Server, title: "Non-Custodial", description: "Your funds stay in your wallet. We never hold your assets." },
  { icon: Code, title: "Open Source", description: "Our smart contracts are fully audited and open source on GitHub." },
  { icon: ShieldCheck, title: "Audited by Top Firms", description: "Multiple independent security audits by Trail of Bits, OpenZeppelin." },
  { icon: Eye, title: "Transparent Governance", description: "Community-driven governance with full on-chain voting transparency." },
];

const partners = ["Ethereum", "Polygon", "Arbitrum", "Base", "Chainlink", "The Graph"];

const faqs = [
  { q: "How does Poly Privacy protect my wallet identity?", a: "We use a combination of zero-knowledge proofs and cryptographic mixing to ensure your wallet address cannot be linked to your prediction market positions. Your trades are verified without revealing your identity." },
  { q: "Is Poly Privacy fully decentralized?", a: "Yes. Our smart contracts are deployed on multiple EVM-compatible chains and operate without any centralized intermediary. All governance is on-chain and community-driven." },
  { q: "What chains are supported?", a: "We currently support Ethereum, Polygon, Arbitrum, and Base. More chains are being added based on community governance proposals." },
  { q: "How are markets resolved?", a: "Markets are resolved using a decentralized oracle network powered by Chainlink and UMA, ensuring fair and tamper-proof outcomes." },
  { q: "Are there any fees?", a: "Poly Privacy charges a minimal 0.5% fee on winning trades. There are no deposit or withdrawal fees beyond standard network gas costs." },
  { q: "Can I use Poly Privacy on mobile?", a: "Yes! Our interface is fully responsive and works with mobile wallets like MetaMask Mobile, Coinbase Wallet, and Rainbow." },
];

/* ─── Component ─── */
const LandingPage = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Navbar variant="landing" />

      {/* ══════ HERO ══════ */}
      <section className="relative gradient-hero pt-28 pb-20 md:pt-40 md:pb-32 overflow-hidden">
        {/* Background effects */}
        <FloatingOrb className="w-96 h-96 -top-20 -left-40" />
        <FloatingOrb className="w-72 h-72 top-20 right-0" />
        <div className="absolute inset-0 bg-grid-pattern opacity-40" />

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 bg-card/80 backdrop-blur-sm border border-border/50 rounded-full px-4 py-2 mb-8"
            >
              <span className="w-2 h-2 rounded-full bg-success animate-pulse" />
              <span className="text-sm text-muted-foreground">Live on Ethereum, Polygon, Arbitrum & Base</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-5xl md:text-7xl font-bold tracking-tight text-foreground mb-6 leading-[1.1]"
            >
              Trade Prediction Markets.{" "}
              <span className="text-gradient">Stay Private.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed"
            >
              Poly Privacy allows you to participate in decentralized prediction markets while keeping your wallet activity shielded. No tracking. No exposure. Just private trading.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link to="/app">
                <Button variant="hero" size="lg" className="text-base px-8 h-13 group">
                  Launch App
                  <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <a href="#how-it-works">
                <Button variant="hero-outline" size="lg" className="text-base px-8 h-13">
                  How It Works
                </Button>
              </a>
            </motion.div>

            {/* Hero visual: mock dashboard preview */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mt-16 relative"
            >
              <div className="bg-card rounded-2xl border border-border/50 shadow-lg-primary p-6 md:p-8 max-w-3xl mx-auto">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-3 h-3 rounded-full bg-destructive/40" />
                  <div className="w-3 h-3 rounded-full bg-warning/40" />
                  <div className="w-3 h-3 rounded-full bg-success/40" />
                  <span className="text-xs text-muted-foreground ml-2">app.polyprivacy.xyz</span>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {["BTC $100k?", "ETH Flippening?", "US Stablecoin Bill?"].map((title, i) => (
                    <div key={i} className="bg-secondary/50 rounded-xl p-4">
                      <p className="text-xs font-medium text-foreground mb-2">{title}</p>
                      <div className="flex gap-2">
                        <span className="text-xs bg-success/10 text-success px-2 py-1 rounded-lg font-medium">
                          Yes {[67, 12, 74][i]}%
                        </span>
                        <span className="text-xs bg-destructive/10 text-destructive px-2 py-1 rounded-lg font-medium">
                          No {[33, 88, 26][i]}%
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-4 flex items-center gap-2 bg-primary/5 rounded-xl p-3">
                  <ShieldCheck className="h-4 w-4 text-primary" />
                  <span className="text-xs text-primary font-medium">Privacy Shield Active — Your trades are hidden</span>
                </div>
              </div>
              {/* Floating badges */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -right-2 md:right-10 top-4 bg-card border border-border/50 rounded-xl px-3 py-2 shadow-card hidden sm:flex items-center gap-2"
              >
                <EyeOff className="h-4 w-4 text-primary" />
                <span className="text-xs font-medium text-foreground">Wallet Hidden</span>
              </motion.div>
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -left-2 md:left-10 bottom-8 bg-card border border-border/50 rounded-xl px-3 py-2 shadow-card hidden sm:flex items-center gap-2"
              >
                <CheckCircle2 className="h-4 w-4 text-success" />
                <span className="text-xs font-medium text-foreground">Trade Confirmed</span>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ══════ STATS ══════ */}
      <section className="py-16 border-b border-border/50">
        <div className="container mx-auto px-6">
          <StaggerContainer className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <StaggerItem key={stat.label} className="text-center">
                <p className="text-3xl md:text-4xl font-bold text-foreground">
                  <CountUp target={stat.value} suffix={stat.suffix} />
                </p>
                <p className="text-sm text-muted-foreground mt-1">{stat.label}</p>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ══════ FEATURES ══════ */}
      <section id="features" className="py-24 md:py-32 relative">
        <div className="absolute inset-0 bg-dots-pattern opacity-50" />
        <div className="container mx-auto px-6 relative z-10">
          <AnimatedSection className="text-center mb-16">
            <span className="text-sm font-medium text-primary bg-secondary rounded-full px-4 py-1.5">Features</span>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mt-6 mb-4">Built for Privacy. Designed for Speed.</h2>
            <p className="text-muted-foreground max-w-xl mx-auto text-lg">Every layer of Poly Privacy is engineered to protect your identity while delivering a seamless trading experience.</p>
          </AnimatedSection>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature) => (
              <StaggerItem key={feature.title}>
                <div className="group gradient-card rounded-2xl p-7 shadow-card hover-lift cursor-default h-full border border-border/30">
                  <div className="w-14 h-14 rounded-2xl bg-secondary flex items-center justify-center mb-5 group-hover:bg-primary/10 transition-colors duration-300">
                    <feature.icon className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ══════ HOW IT WORKS ══════ */}
      <section id="how-it-works" className="py-24 md:py-32 gradient-section-alt relative overflow-hidden">
        <FloatingOrb className="w-80 h-80 -bottom-40 -right-20" />
        <div className="container mx-auto px-6 relative z-10">
          <AnimatedSection className="text-center mb-16">
            <span className="text-sm font-medium text-primary bg-secondary rounded-full px-4 py-1.5">How It Works</span>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mt-6 mb-4">Four Steps to Private Trading</h2>
            <p className="text-muted-foreground max-w-xl mx-auto text-lg">Get started in under a minute. No KYC. No data collection. Just connect and trade.</p>
          </AnimatedSection>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step, i) => (
              <StaggerItem key={step.number}>
                <div className="relative group">
                  <div className="bg-card rounded-2xl p-7 shadow-card h-full border border-border/30 group-hover:border-primary/20 transition-all duration-300 hover-lift">
                    <div className="flex items-center justify-between mb-5">
                      <span className="text-5xl font-bold text-primary/10 group-hover:text-primary/20 transition-colors">{step.number}</span>
                      <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center group-hover:bg-primary/10 transition-colors duration-300">
                        <step.icon className="h-6 w-6 text-primary" />
                      </div>
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">{step.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
                  </div>
                  {i < steps.length - 1 && (
                    <ChevronRight className="hidden lg:block absolute top-1/2 -right-4 -translate-y-1/2 text-primary/20 h-6 w-6" />
                  )}
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ══════ MARKET CATEGORIES ══════ */}
      <section className="py-24 md:py-32">
        <div className="container mx-auto px-6">
          <AnimatedSection className="text-center mb-16">
            <span className="text-sm font-medium text-primary bg-secondary rounded-full px-4 py-1.5">Markets</span>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mt-6 mb-4">Predict on What Matters to You</h2>
            <p className="text-muted-foreground max-w-xl mx-auto text-lg">From crypto to politics, sports to tech — find markets that match your knowledge.</p>
          </AnimatedSection>

          <StaggerContainer className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {marketCategories.map((cat) => (
              <StaggerItem key={cat.name}>
                <Link to="/app" className="block group">
                  <div className="bg-card rounded-2xl p-6 shadow-card border border-border/30 text-center hover-lift group-hover:border-primary/20 transition-all duration-300">
                    <span className="text-3xl block mb-3">{cat.icon}</span>
                    <h3 className="font-semibold text-foreground mb-1">{cat.name}</h3>
                    <p className="text-xs text-muted-foreground">{cat.count} markets</p>
                  </div>
                </Link>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <AnimatedSection delay={0.3} className="text-center mt-10">
            <Link to="/app">
              <Button variant="outline" size="lg" className="group">
                Explore All Markets
                <ArrowUpRight className="ml-1 h-4 w-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Button>
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* ══════ PRIVACY EXPLAINER ══════ */}
      <section className="py-24 md:py-32 gradient-section-alt relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-30" />
        <FloatingOrb className="w-64 h-64 top-10 -left-20" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection>
              <span className="text-sm font-medium text-primary bg-secondary rounded-full px-4 py-1.5">Privacy Technology</span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-6 mb-6">Your Wallet. Your Privacy. No Compromises.</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Traditional prediction markets expose your every move. Your wallet address, trade sizes, and strategies are all public on the blockchain. Poly Privacy changes that fundamentally.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Using zero-knowledge proofs and cryptographic mixing, we ensure your trades are verified on-chain without revealing your identity. Think of it as a privacy vault for your predictions.
              </p>
              <div className="space-y-4">
                {[
                  "Trades verified via ZK-SNARKs — no identity revealed",
                  "Wallet addresses are never linked to positions",
                  "Fully non-custodial — your keys, your coins",
                  "Open-source and independently audited",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div className="bg-card rounded-3xl border border-border/50 shadow-lg-primary p-8 relative">
                {/* Privacy toggle demo */}
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-bold text-foreground">Privacy Dashboard</h3>
                    <span className="text-xs font-medium text-primary bg-secondary px-3 py-1 rounded-full">Live</span>
                  </div>
                  <div className="space-y-3">
                    <div className="bg-secondary/70 rounded-xl p-4 flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <EyeOff className="h-5 w-5 text-primary" />
                        <span className="text-sm font-medium text-foreground">Wallet Shielded</span>
                      </div>
                      <span className="w-10 h-6 rounded-full bg-primary relative">
                        <span className="absolute right-0.5 top-0.5 w-5 h-5 rounded-full bg-primary-foreground shadow-sm" />
                      </span>
                    </div>
                    <div className="bg-secondary/70 rounded-xl p-4 flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <Fingerprint className="h-5 w-5 text-primary" />
                        <span className="text-sm font-medium text-foreground">ZK Proof Active</span>
                      </div>
                      <span className="w-10 h-6 rounded-full bg-primary relative">
                        <span className="absolute right-0.5 top-0.5 w-5 h-5 rounded-full bg-primary-foreground shadow-sm" />
                      </span>
                    </div>
                    <div className="bg-secondary/70 rounded-xl p-4 flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <Globe className="h-5 w-5 text-primary" />
                        <span className="text-sm font-medium text-foreground">Multi-Chain Shield</span>
                      </div>
                      <span className="w-10 h-6 rounded-full bg-primary relative">
                        <span className="absolute right-0.5 top-0.5 w-5 h-5 rounded-full bg-primary-foreground shadow-sm" />
                      </span>
                    </div>
                  </div>
                  <div className="bg-success/5 border border-success/20 rounded-xl p-4 flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 text-success" />
                    <span className="text-sm text-success font-medium">All privacy shields active</span>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ══════ SECURITY ══════ */}
      <section id="security" className="py-24 md:py-32">
        <div className="container mx-auto px-6">
          <AnimatedSection className="text-center mb-16">
            <span className="text-sm font-medium text-primary bg-secondary rounded-full px-4 py-1.5">Security</span>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mt-6 mb-4">Institutional-Grade Security</h2>
            <p className="text-muted-foreground max-w-xl mx-auto text-lg">Built with the same security standards used by leading financial institutions and DeFi protocols.</p>
          </AnimatedSection>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {securityFeatures.map((feat) => (
              <StaggerItem key={feat.title}>
                <div className="group text-center p-7 rounded-2xl hover-lift cursor-default border border-border/30 bg-card shadow-card">
                  <div className="w-14 h-14 rounded-2xl bg-secondary flex items-center justify-center mx-auto mb-5 group-hover:bg-primary/10 transition-colors duration-300">
                    <feat.icon className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">{feat.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{feat.description}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ══════ COMPARISON ══════ */}
      <section className="py-24 md:py-32 gradient-section-alt">
        <div className="container mx-auto px-6">
          <AnimatedSection className="text-center mb-16">
            <span className="text-sm font-medium text-primary bg-secondary rounded-full px-4 py-1.5">Comparison</span>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mt-6 mb-4">Why Poly Privacy?</h2>
            <p className="text-muted-foreground max-w-xl mx-auto text-lg">See how we stack up against traditional prediction market platforms.</p>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <div className="max-w-2xl mx-auto bg-card rounded-2xl border border-border/50 shadow-card overflow-hidden">
              <div className="grid grid-cols-3 bg-secondary/70 p-4 text-sm font-semibold">
                <span className="text-muted-foreground">Feature</span>
                <span className="text-center text-primary">Poly Privacy</span>
                <span className="text-center text-muted-foreground">Others</span>
              </div>
              {comparisons.map((row, i) => (
                <div key={row.feature} className={`grid grid-cols-3 p-4 text-sm items-center ${i % 2 === 0 ? "" : "bg-secondary/20"} border-t border-border/30`}>
                  <span className="text-foreground font-medium">{row.feature}</span>
                  <span className="text-center">
                    {row.polyPrivacy === true ? (
                      <CheckCircle2 className="h-5 w-5 text-success mx-auto" />
                    ) : (
                      <span className="text-muted-foreground">{String(row.polyPrivacy)}</span>
                    )}
                  </span>
                  <span className="text-center">
                    {row.others === true ? (
                      <CheckCircle2 className="h-5 w-5 text-success mx-auto" />
                    ) : row.others === false ? (
                      <Minus className="h-5 w-5 text-muted-foreground/40 mx-auto" />
                    ) : (
                      <span className="text-xs text-muted-foreground">{String(row.others)}</span>
                    )}
                  </span>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ══════ TESTIMONIALS ══════ */}
      <section className="py-24 md:py-32 relative">
        <div className="absolute inset-0 bg-dots-pattern opacity-30" />
        <div className="container mx-auto px-6 relative z-10">
          <AnimatedSection className="text-center mb-16">
            <span className="text-sm font-medium text-primary bg-secondary rounded-full px-4 py-1.5">Testimonials</span>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mt-6 mb-4">Loved by Traders Worldwide</h2>
            <p className="text-muted-foreground max-w-xl mx-auto text-lg">See what the community is saying about Poly Privacy.</p>
          </AnimatedSection>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <StaggerItem key={t.name}>
                <div className="bg-card rounded-2xl p-7 shadow-card border border-border/30 hover-lift h-full flex flex-col">
                  <p className="text-sm text-muted-foreground leading-relaxed flex-1 mb-6">"{t.text}"</p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-sm">
                      {t.avatar}
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-foreground">{t.name}</p>
                      <p className="text-xs text-muted-foreground">{t.role}</p>
                    </div>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ══════ PARTNERS ══════ */}
      <section className="py-16 border-y border-border/50 bg-secondary/20">
        <div className="container mx-auto px-6">
          <AnimatedSection className="text-center mb-10">
            <p className="text-sm text-muted-foreground font-medium uppercase tracking-wider">Powered By & Integrated With</p>
          </AnimatedSection>
          <StaggerContainer className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
            {partners.map((partner) => (
              <StaggerItem key={partner}>
                <span className="text-xl font-bold text-muted-foreground/40 hover:text-muted-foreground transition-colors duration-300 cursor-default">
                  {partner}
                </span>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ══════ FAQ ══════ */}
      <section id="faq" className="py-24 md:py-32">
        <div className="container mx-auto px-6">
          <AnimatedSection className="text-center mb-16">
            <span className="text-sm font-medium text-primary bg-secondary rounded-full px-4 py-1.5">FAQ</span>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mt-6 mb-4">Frequently Asked Questions</h2>
            <p className="text-muted-foreground max-w-xl mx-auto text-lg">Everything you need to know about Poly Privacy.</p>
          </AnimatedSection>

          <div className="max-w-2xl mx-auto space-y-3">
            {faqs.map((faq, i) => (
              <AnimatedSection key={i} delay={i * 0.05}>
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full text-left bg-card rounded-2xl border border-border/30 shadow-card overflow-hidden hover:border-primary/20 transition-all duration-300"
                >
                  <div className="flex items-center justify-between p-5">
                    <span className="text-sm font-semibold text-foreground pr-4">{faq.q}</span>
                    <ChevronDown
                      className={`h-5 w-5 text-muted-foreground flex-shrink-0 transition-transform duration-300 ${
                        openFaq === i ? "rotate-180" : ""
                      }`}
                    />
                  </div>
                  <motion.div
                    initial={false}
                    animate={{ height: openFaq === i ? "auto" : 0, opacity: openFaq === i ? 1 : 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <p className="px-5 pb-5 text-sm text-muted-foreground leading-relaxed">{faq.a}</p>
                  </motion.div>
                </button>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ══════ FINAL CTA ══════ */}
      <section className="py-24 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 gradient-hero" />
        <FloatingOrb className="w-96 h-96 -bottom-40 left-1/4" />
        <FloatingOrb className="w-64 h-64 top-0 right-1/4" />
        <div className="absolute inset-0 bg-grid-pattern opacity-30" />

        <div className="container mx-auto px-6 relative z-10 text-center">
          <AnimatedSection>
            <div className="max-w-2xl mx-auto">
              <Sparkles className="h-10 w-10 text-primary mx-auto mb-6" />
              <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">Start Trading Privately Today</h2>
              <p className="text-muted-foreground text-lg mb-10 max-w-lg mx-auto">
                Join thousands of traders who trust Poly Privacy for confidential prediction market trading. No KYC. No tracking. No compromises.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/app">
                  <Button variant="hero" size="lg" className="text-base px-10 h-13 group">
                    Launch Poly Privacy
                    <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
                <Link to="/docs">
                  <Button variant="hero-outline" size="lg" className="text-base px-10 h-13">
                    Read Documentation
                  </Button>
                </Link>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default LandingPage;
