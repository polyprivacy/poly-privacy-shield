import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import WalletModal from "@/components/WalletModal";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/AnimatedSection";
import { Shield, TrendingUp, TrendingDown } from "lucide-react";

const positions = [
  { id: 1, title: "Will BTC reach $100k in 2026?", side: "Yes", amount: 500, avgPrice: 0.67, currentPrice: 0.71, pnl: "+$29.85", pnlPositive: true },
  { id: 2, title: "Will the US pass a stablecoin bill in 2026?", side: "Yes", amount: 200, avgPrice: 0.72, currentPrice: 0.74, pnl: "+$5.56", pnlPositive: true },
  { id: 3, title: "Will AI replace 50% of coding jobs by 2030?", side: "No", amount: 300, avgPrice: 0.69, currentPrice: 0.65, pnl: "-$17.39", pnlPositive: false },
  { id: 4, title: "Will a major sports league adopt crypto payments?", side: "Yes", amount: 150, avgPrice: 0.55, currentPrice: 0.58, pnl: "+$8.18", pnlPositive: true },
];

const Portfolio = () => {
  const [walletOpen, setWalletOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      <Navbar variant="app" onConnectWallet={() => setWalletOpen(true)} />

      <div className="container mx-auto px-6 pt-24 pb-16">
        <AnimatedSection className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">Portfolio</h1>
          <p className="text-muted-foreground">Track your positions and performance.</p>
        </AnimatedSection>

        {/* Stats */}
        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5 mb-10">
          {[
            { label: "Total Value", value: "$1,168.20", color: "text-foreground" },
            { label: "Unrealized P&L", value: "+$26.20", color: "text-success" },
            { label: "Active Positions", value: "4", color: "text-foreground" },
            { label: "Win Rate", value: "75%", color: "text-primary" },
          ].map((stat) => (
            <StaggerItem key={stat.label}>
              <div className="bg-card rounded-2xl border border-border/50 p-6 shadow-card hover-lift">
                <span className="text-sm text-muted-foreground">{stat.label}</span>
                <p className={`text-2xl font-bold mt-1 ${stat.color}`}>{stat.value}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <AnimatedSection delay={0.2}>
          <h2 className="text-xl font-bold text-foreground mb-4">Your Positions</h2>
        </AnimatedSection>

        <StaggerContainer className="space-y-4">
          {positions.map((pos) => (
            <StaggerItem key={pos.id}>
              <div className="bg-card rounded-2xl border border-border/50 p-5 shadow-card hover-lift flex flex-col md:flex-row md:items-center gap-4">
                <div className="flex-1">
                  <h3 className="text-sm font-semibold text-foreground mb-1">{pos.title}</h3>
                  <div className="flex items-center gap-3 text-xs text-muted-foreground">
                    <span className={`font-medium ${pos.side === "Yes" ? "text-success" : "text-destructive"}`}>{pos.side}</span>
                    <span>·</span>
                    <span>${pos.amount} invested</span>
                    <span>·</span>
                    <span className="flex items-center gap-1">
                      <Shield className="h-3 w-3 text-primary" /> Privacy
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-6 text-sm">
                  <div>
                    <span className="text-muted-foreground text-xs block">Avg Price</span>
                    <span className="font-medium text-foreground">${pos.avgPrice}</span>
                  </div>
                  <div>
                    <span className="text-muted-foreground text-xs block">Current</span>
                    <span className="font-medium text-foreground">${pos.currentPrice}</span>
                  </div>
                  <div>
                    <span className="text-muted-foreground text-xs block">P&L</span>
                    <span className={`font-semibold flex items-center gap-1 ${pos.pnlPositive ? "text-success" : "text-destructive"}`}>
                      {pos.pnlPositive ? <TrendingUp className="h-3 w-3" /> : <TrendingDown className="h-3 w-3" />}
                      {pos.pnl}
                    </span>
                  </div>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>

      <Footer />
      {walletOpen && <WalletModal onClose={() => setWalletOpen(false)} />}
    </div>
  );
};

export default Portfolio;
