import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import WalletModal from "@/components/WalletModal";
import { Shield, TrendingUp, TrendingDown } from "lucide-react";

const positions = [
  { id: 1, title: "Will BTC reach $100k in 2026?", side: "Yes", amount: 500, avgPrice: 0.67, currentPrice: 0.71, pnl: "+$29.85" },
  { id: 2, title: "Will the US pass a stablecoin bill in 2026?", side: "Yes", amount: 200, avgPrice: 0.72, currentPrice: 0.74, pnl: "+$5.56" },
  { id: 3, title: "Will AI replace 50% of coding jobs by 2030?", side: "No", amount: 300, avgPrice: 0.69, currentPrice: 0.65, pnl: "-$17.39" },
];

const Portfolio = () => {
  const [walletOpen, setWalletOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
        <div className="container mx-auto flex items-center justify-between h-16 px-6">
          <Link to="/" className="text-xl font-bold tracking-tight text-foreground">
            Poly <span className="text-gradient">Privacy</span>
          </Link>
          <div className="hidden md:flex items-center gap-8">
            <Link to="/app" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Markets</Link>
            <Link to="/portfolio" className="text-sm font-medium text-foreground">Portfolio</Link>
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Docs</a>
            <Button size="sm" onClick={() => setWalletOpen(true)}>Connect Wallet</Button>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-6 py-8">
        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-8">
          <div className="bg-card rounded-2xl border border-border/50 p-6 shadow-card">
            <span className="text-sm text-muted-foreground">Total Value</span>
            <p className="text-2xl font-bold text-foreground mt-1">$1,018.02</p>
          </div>
          <div className="bg-card rounded-2xl border border-border/50 p-6 shadow-card">
            <span className="text-sm text-muted-foreground">Unrealized P&L</span>
            <p className="text-2xl font-bold text-success mt-1">+$18.02</p>
          </div>
          <div className="bg-card rounded-2xl border border-border/50 p-6 shadow-card">
            <span className="text-sm text-muted-foreground">Active Positions</span>
            <p className="text-2xl font-bold text-foreground mt-1">3</p>
          </div>
        </div>

        <h2 className="text-xl font-bold text-foreground mb-4">Your Positions</h2>

        <div className="space-y-4">
          {positions.map((pos) => (
            <div key={pos.id} className="bg-card rounded-2xl border border-border/50 p-5 shadow-card hover-lift flex flex-col md:flex-row md:items-center gap-4">
              <div className="flex-1">
                <h3 className="text-sm font-semibold text-foreground mb-1">{pos.title}</h3>
                <div className="flex items-center gap-3 text-xs text-muted-foreground">
                  <span className={`font-medium ${pos.side === "Yes" ? "text-success" : "text-destructive"}`}>{pos.side}</span>
                  <span>·</span>
                  <span>${pos.amount} invested</span>
                  <span>·</span>
                  <Shield className="h-3 w-3 text-primary inline" /> Privacy
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
                  <span className={`font-semibold ${pos.pnl.startsWith("+") ? "text-success" : "text-destructive"}`}>
                    {pos.pnl}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {walletOpen && <WalletModal onClose={() => setWalletOpen(false)} />}
    </div>
  );
};

export default Portfolio;
