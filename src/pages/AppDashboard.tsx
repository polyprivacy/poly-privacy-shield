import { useState } from "react";
import { Search, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import TradeModal from "@/components/TradeModal";
import WalletModal from "@/components/WalletModal";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/AnimatedSection";

const categories = ["All", "Crypto", "Politics", "Sports", "Tech"];

const markets = [
  { id: 1, title: "Will BTC reach $100k in 2026?", yesPercent: 67, noPercent: 33, volume: "$2.4M", category: "Crypto" },
  { id: 2, title: "Will ETH flip BTC in market cap by 2027?", yesPercent: 12, noPercent: 88, volume: "$890K", category: "Crypto" },
  { id: 3, title: "Will the US pass a stablecoin bill in 2026?", yesPercent: 74, noPercent: 26, volume: "$1.8M", category: "Politics" },
  { id: 4, title: "Will AI replace 50% of coding jobs by 2030?", yesPercent: 31, noPercent: 69, volume: "$3.1M", category: "Tech" },
  { id: 5, title: "Will a major sports league adopt crypto payments?", yesPercent: 55, noPercent: 45, volume: "$620K", category: "Sports" },
  { id: 6, title: "Will Solana TVL surpass $20B in 2026?", yesPercent: 42, noPercent: 58, volume: "$1.1M", category: "Crypto" },
  { id: 7, title: "Will there be a US presidential debate on crypto?", yesPercent: 83, noPercent: 17, volume: "$4.5M", category: "Politics" },
  { id: 8, title: "Will Apple launch a crypto wallet?", yesPercent: 18, noPercent: 82, volume: "$760K", category: "Tech" },
  { id: 9, title: "Will the FIFA World Cup 2026 break viewership records?", yesPercent: 72, noPercent: 28, volume: "$1.5M", category: "Sports" },
  { id: 10, title: "Will a Layer 2 surpass Ethereum in daily transactions?", yesPercent: 58, noPercent: 42, volume: "$2.1M", category: "Crypto" },
  { id: 11, title: "Will the EU ban proof-of-work mining?", yesPercent: 22, noPercent: 78, volume: "$440K", category: "Politics" },
  { id: 12, title: "Will OpenAI go public in 2026?", yesPercent: 35, noPercent: 65, volume: "$3.8M", category: "Tech" },
];

const AppDashboard = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [tradeMarket, setTradeMarket] = useState<typeof markets[0] | null>(null);
  const [walletOpen, setWalletOpen] = useState(false);

  const filtered = markets.filter((m) => {
    const matchCategory = activeCategory === "All" || m.category === activeCategory;
    const matchSearch = m.title.toLowerCase().includes(searchQuery.toLowerCase());
    return matchCategory && matchSearch;
  });

  return (
    <div className="min-h-screen bg-background">
      <Navbar variant="app" onConnectWallet={() => setWalletOpen(true)} />

      <div className="container mx-auto px-6 pt-24 pb-16">
        <AnimatedSection className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">Prediction Markets</h1>
          <p className="text-muted-foreground">Browse and trade on event outcomes with full privacy.</p>
        </AnimatedSection>

        {/* Search & Filters */}
        <AnimatedSection delay={0.1} className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="relative flex-1">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search markets..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full h-11 pl-10 pr-4 rounded-xl border border-border bg-card text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring/50 shadow-card transition-shadow"
            />
          </div>
          <div className="flex gap-2 flex-wrap">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 ${
                  activeCategory === cat
                    ? "bg-primary text-primary-foreground shadow-button"
                    : "bg-card text-secondary-foreground border border-border/50 hover:bg-secondary/80 shadow-card"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </AnimatedSection>

        {/* Market Grid */}
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {filtered.map((market) => (
            <StaggerItem key={market.id}>
              <div className="bg-card rounded-2xl border border-border/50 p-5 shadow-card hover-lift group">
                <span className="inline-block text-xs font-medium text-primary bg-secondary px-2.5 py-1 rounded-lg mb-3">
                  {market.category}
                </span>
                <h3 className="text-sm font-semibold text-foreground mb-4 leading-snug min-h-[2.5rem]">
                  {market.title}
                </h3>
                <div className="flex gap-3 mb-4">
                  <div className="flex-1 bg-success/10 rounded-xl p-2.5 text-center group-hover:bg-success/15 transition-colors">
                    <span className="text-xs text-muted-foreground block">Yes</span>
                    <span className="text-lg font-bold text-success">{market.yesPercent}%</span>
                  </div>
                  <div className="flex-1 bg-destructive/10 rounded-xl p-2.5 text-center group-hover:bg-destructive/15 transition-colors">
                    <span className="text-xs text-muted-foreground block">No</span>
                    <span className="text-lg font-bold text-destructive">{market.noPercent}%</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-muted-foreground">Vol: {market.volume}</span>
                  <Button size="sm" onClick={() => setTradeMarket(market)} className="group-hover:shadow-button transition-shadow">
                    Trade
                  </Button>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {filtered.length === 0 && (
          <div className="text-center py-20 text-muted-foreground">
            <p>No markets found matching your criteria.</p>
          </div>
        )}
      </div>

      <Footer />

      {tradeMarket && <TradeModal market={tradeMarket} onClose={() => setTradeMarket(null)} />}
      {walletOpen && <WalletModal onClose={() => setWalletOpen(false)} />}
    </div>
  );
};

export default AppDashboard;
