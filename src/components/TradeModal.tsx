import { useState } from "react";
import { Shield, X, Check } from "lucide-react";
import { Button } from "@/components/ui/button";

interface TradeModalProps {
  market: { title: string; yesPercent: number; noPercent: number };
  onClose: () => void;
}

const TradeModal = ({ market, onClose }: TradeModalProps) => {
  const [side, setSide] = useState<"yes" | "no">("yes");
  const [amount, setAmount] = useState("");
  const [privacyEnabled, setPrivacyEnabled] = useState(true);
  const [confirmed, setConfirmed] = useState(false);

  const payout = amount ? (parseFloat(amount) / (side === "yes" ? market.yesPercent : market.noPercent) * 100).toFixed(2) : "0.00";

  if (confirmed) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-foreground/20 backdrop-blur-sm" onClick={onClose}>
        <div className="bg-card rounded-2xl shadow-card-hover p-8 w-full max-w-md mx-4 animate-scale-in text-center" onClick={(e) => e.stopPropagation()}>
          <div className="w-16 h-16 rounded-full bg-success/10 flex items-center justify-center mx-auto mb-4">
            <Check className="h-8 w-8 text-success" />
          </div>
          <h3 className="text-xl font-bold text-foreground mb-2">Trade Confirmed</h3>
          <p className="text-sm text-muted-foreground mb-6">
            Your {side.toUpperCase()} position has been placed{privacyEnabled ? " with Privacy Shield enabled" : ""}.
          </p>
          <Button onClick={onClose} className="w-full">Done</Button>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-foreground/20 backdrop-blur-sm" onClick={onClose}>
      <div className="bg-card rounded-2xl shadow-card-hover p-6 w-full max-w-md mx-4 animate-scale-in" onClick={(e) => e.stopPropagation()}>
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-bold text-foreground">Place Trade</h3>
          <button onClick={onClose} className="text-muted-foreground hover:text-foreground transition-colors">
            <X className="h-5 w-5" />
          </button>
        </div>

        <p className="text-sm text-muted-foreground mb-5">{market.title}</p>

        {/* Side Toggle */}
        <div className="flex gap-2 mb-5">
          <button
            onClick={() => setSide("yes")}
            className={`flex-1 py-3 rounded-xl text-sm font-semibold transition-all duration-200 ${
              side === "yes"
                ? "bg-success text-success-foreground shadow-sm"
                : "bg-secondary text-secondary-foreground"
            }`}
          >
            Yes {market.yesPercent}%
          </button>
          <button
            onClick={() => setSide("no")}
            className={`flex-1 py-3 rounded-xl text-sm font-semibold transition-all duration-200 ${
              side === "no"
                ? "bg-destructive text-destructive-foreground shadow-sm"
                : "bg-secondary text-secondary-foreground"
            }`}
          >
            No {market.noPercent}%
          </button>
        </div>

        {/* Amount */}
        <div className="mb-5">
          <label className="text-sm font-medium text-foreground block mb-2">Amount (USDC)</label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="0.00"
            className="w-full h-12 px-4 rounded-xl border border-border bg-background text-foreground text-lg placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring/50 transition-shadow"
          />
        </div>

        {/* Privacy Toggle */}
        <div className="flex items-center justify-between bg-secondary rounded-xl p-4 mb-5">
          <div className="flex items-center gap-3">
            <Shield className="h-5 w-5 text-primary" />
            <div>
              <span className="text-sm font-medium text-foreground block">Privacy Shield</span>
              <span className="text-xs text-muted-foreground">Hide your wallet activity</span>
            </div>
          </div>
          <button
            onClick={() => setPrivacyEnabled(!privacyEnabled)}
            className={`relative w-12 h-7 rounded-full transition-colors duration-300 ${
              privacyEnabled ? "bg-primary" : "bg-border"
            }`}
          >
            <span
              className={`absolute top-0.5 left-0.5 w-6 h-6 rounded-full bg-card shadow-sm transition-transform duration-300 ${
                privacyEnabled ? "translate-x-5" : "translate-x-0"
              }`}
            />
          </button>
        </div>

        {/* Payout */}
        <div className="flex justify-between text-sm mb-6 px-1">
          <span className="text-muted-foreground">Estimated Payout</span>
          <span className="font-semibold text-foreground">${payout} USDC</span>
        </div>

        <Button
          className="w-full h-12 text-base"
          variant="hero"
          disabled={!amount || parseFloat(amount) <= 0}
          onClick={() => setConfirmed(true)}
        >
          Confirm Trade
        </Button>
      </div>
    </div>
  );
};

export default TradeModal;
