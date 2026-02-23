import { X, Wallet } from "lucide-react";

interface WalletModalProps {
  onClose: () => void;
}

const wallets = [
  { name: "MetaMask", icon: "🦊" },
  { name: "WalletConnect", icon: "🔗" },
  { name: "Coinbase Wallet", icon: "🔵" },
  { name: "Phantom", icon: "👻" },
];

const WalletModal = ({ onClose }: WalletModalProps) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-foreground/20 backdrop-blur-sm" onClick={onClose}>
      <div className="bg-card rounded-2xl shadow-card-hover p-6 w-full max-w-sm mx-4 animate-scale-in" onClick={(e) => e.stopPropagation()}>
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-bold text-foreground">Connect Wallet</h3>
          <button onClick={onClose} className="text-muted-foreground hover:text-foreground transition-colors">
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="space-y-3">
          {wallets.map((wallet) => (
            <button
              key={wallet.name}
              onClick={onClose}
              className="w-full flex items-center gap-4 p-4 rounded-xl bg-secondary hover:bg-secondary/80 transition-all duration-200 hover-lift"
            >
              <span className="text-2xl">{wallet.icon}</span>
              <span className="text-sm font-medium text-foreground">{wallet.name}</span>
            </button>
          ))}
        </div>

        <p className="text-xs text-muted-foreground text-center mt-5">
          By connecting, you agree to the Terms of Service.
        </p>
      </div>
    </div>
  );
};

export default WalletModal;
