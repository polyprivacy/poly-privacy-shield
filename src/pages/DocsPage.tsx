import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/AnimatedSection";
import { Book, Code, Shield, Zap, ExternalLink, FileText, Terminal, HelpCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const sections = [
  {
    icon: Book,
    title: "Getting Started",
    description: "Learn the basics of Poly Privacy and how to make your first private trade.",
    links: ["Quick Start Guide", "Connecting Your Wallet", "Making Your First Trade", "Understanding Privacy Shield"],
  },
  {
    icon: Code,
    title: "Technical Docs",
    description: "Deep dive into our smart contracts, ZK proofs, and protocol architecture.",
    links: ["Smart Contract Reference", "ZK-SNARK Implementation", "Protocol Architecture", "API Documentation"],
  },
  {
    icon: Shield,
    title: "Security",
    description: "Learn about our security practices, audits, and how we protect your funds.",
    links: ["Security Model", "Audit Reports", "Bug Bounty Program", "Responsible Disclosure"],
  },
  {
    icon: Zap,
    title: "Integrations",
    description: "Integrate Poly Privacy into your dApp, bot, or trading infrastructure.",
    links: ["SDK Overview", "REST API", "WebSocket Feeds", "Trading Bot Guide"],
  },
];

const DocsPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar variant="app" />

      <div className="pt-24 pb-16">
        <div className="container mx-auto px-6">
          <AnimatedSection className="text-center mb-16">
            <span className="text-sm font-medium text-primary bg-secondary rounded-full px-4 py-1.5">Documentation</span>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mt-6 mb-4">Poly Privacy Docs</h1>
            <p className="text-muted-foreground max-w-xl mx-auto text-lg">
              Everything you need to know about trading privately on prediction markets.
            </p>
          </AnimatedSection>

          {/* Search */}
          <AnimatedSection delay={0.1} className="max-w-xl mx-auto mb-16">
            <div className="relative">
              <Terminal className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search documentation..."
                className="w-full h-14 pl-12 pr-6 rounded-2xl border border-border bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring/50 shadow-card transition-shadow text-base"
              />
            </div>
          </AnimatedSection>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
            {sections.map((section) => (
              <StaggerItem key={section.title}>
                <div className="group bg-card rounded-2xl p-7 shadow-card border border-border/30 hover-lift h-full">
                  <div className="flex items-center gap-4 mb-5">
                    <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center group-hover:bg-primary/10 transition-colors duration-300">
                      <section.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h2 className="text-lg font-semibold text-foreground">{section.title}</h2>
                      <p className="text-xs text-muted-foreground">{section.description}</p>
                    </div>
                  </div>
                  <ul className="space-y-2">
                    {section.links.map((link) => (
                      <li key={link}>
                        <button className="w-full text-left flex items-center justify-between px-4 py-2.5 rounded-xl text-sm text-muted-foreground hover:text-foreground hover:bg-secondary/50 transition-colors group/link">
                          <span className="flex items-center gap-2">
                            <FileText className="h-4 w-4" />
                            {link}
                          </span>
                          <ExternalLink className="h-3.5 w-3.5 opacity-0 group-hover/link:opacity-100 transition-opacity" />
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <AnimatedSection className="text-center">
            <div className="bg-secondary/50 rounded-2xl p-10 max-w-xl mx-auto">
              <HelpCircle className="h-10 w-10 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-bold text-foreground mb-2">Need Help?</h3>
              <p className="text-sm text-muted-foreground mb-6">Can't find what you're looking for? Our community is here to help.</p>
              <div className="flex gap-3 justify-center">
                <Button variant="outline">Join Discord</Button>
                <Button>Contact Support</Button>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default DocsPage;
