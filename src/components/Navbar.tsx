import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "@/assets/logo.png";

interface NavbarProps {
  onConnectWallet?: () => void;
  variant?: "landing" | "app";
}

const Navbar = ({ onConnectWallet, variant = "landing" }: NavbarProps) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  const landingLinks = [
    { label: "Features", href: "/#features" },
    { label: "How It Works", href: "/#how-it-works" },
    { label: "Security", href: "/#security" },
    { label: "FAQ", href: "/#faq" },
  ];

  const appLinks = [
    { label: "Markets", href: "/app" },
    { label: "Portfolio", href: "/portfolio" },
    { label: "Docs", href: "/docs" },
  ];

  const links = variant === "landing" ? landingLinks : appLinks;

  const isActive = (href: string) => {
    if (href.startsWith("/#")) return false;
    return location.pathname === href;
  };

  const handleLinkClick = (href: string) => {
    setMobileOpen(false);
    if (href.startsWith("/#")) {
      const id = href.replace("/#", "");
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/70 backdrop-blur-xl border-b border-border/30">
        <div className="container mx-auto flex items-center justify-between h-16 px-6">
          <Link to="/" className="flex items-center gap-2 group">
            <img src={logo} alt="Poly Privacy" className="h-8 w-auto invert" />
            <span className="text-xl font-bold tracking-tight text-foreground">Poly <span className="text-gradient group-hover:opacity-80 transition-opacity">Privacy</span></span>
          </Link>

          <div className="hidden md:flex items-center gap-1">
            {links.map((link) =>
              link.href.startsWith("/#") ? (
                <button
                  key={link.label}
                  onClick={() => handleLinkClick(link.href)}
                  className="px-4 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors rounded-lg hover:bg-secondary/50"
                >
                  {link.label}
                </button>
              ) : (
                <Link
                  key={link.label}
                  to={link.href}
                  className={`px-4 py-2 text-sm rounded-lg transition-colors ${
                    isActive(link.href)
                      ? "text-foreground font-medium bg-secondary/70"
                      : "text-muted-foreground hover:text-foreground hover:bg-secondary/50"
                  }`}
                >
                  {link.label}
                </Link>
              )
            )}
          </div>

          <div className="flex items-center gap-3">
            {variant === "landing" ? (
              <Link to="/app">
                <Button size="sm" className="hidden md:inline-flex">Launch App</Button>
              </Link>
            ) : (
              <Button size="sm" className="hidden md:inline-flex" onClick={onConnectWallet}>
                Connect Wallet
              </Button>
            )}
            <button
              className="md:hidden p-2 text-muted-foreground hover:text-foreground transition-colors"
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed top-16 left-0 right-0 z-40 bg-background/95 backdrop-blur-xl border-b border-border/30 md:hidden"
          >
            <div className="container mx-auto px-6 py-4 space-y-1">
              {links.map((link) =>
                link.href.startsWith("/#") ? (
                  <button
                    key={link.label}
                    onClick={() => handleLinkClick(link.href)}
                    className="block w-full text-left px-4 py-3 text-sm text-muted-foreground hover:text-foreground hover:bg-secondary/50 rounded-lg transition-colors"
                  >
                    {link.label}
                  </button>
                ) : (
                  <Link
                    key={link.label}
                    to={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="block px-4 py-3 text-sm text-muted-foreground hover:text-foreground hover:bg-secondary/50 rounded-lg transition-colors"
                  >
                    {link.label}
                  </Link>
                )
              )}
              <div className="pt-2">
                {variant === "landing" ? (
                  <Link to="/app" onClick={() => setMobileOpen(false)}>
                    <Button className="w-full">Launch App</Button>
                  </Link>
                ) : (
                  <Button className="w-full" onClick={() => { onConnectWallet?.(); setMobileOpen(false); }}>
                    Connect Wallet
                  </Button>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
