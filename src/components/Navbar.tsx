import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo-mbayar.jpeg";

const navLinks = [
  { label: "Accueil", href: "#accueil" },
  { label: "Combats", href: "#combats" },
  { label: "Fonctionnement", href: "#comment-ca-marche" },
  { label: "Pourquoi nous", href: "#difference" },
  { label: "Sécurité", href: "#securite" },
  { label: "Tarifs", href: "#tarification" },
  { label: "FAQ", href: "#faq" },
];


const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleClick = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled
        ? "bg-background/80 backdrop-blur-xl border-b border-white/5 py-4"
        : "bg-transparent py-6"
        }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <a href="#accueil" className="flex items-center gap-3 group">
          <div className="relative">
            <div className="absolute inset-0 bg-gold/20 blur-lg rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
            <img src={logo} alt="Mbayar Bet" className="w-10 h-10 rounded-xl object-contain relative z-10 border border-white/10" />
          </div>
          <span className="font-bold text-xl tracking-tight text-foreground">
            Mbayar<span className="text-gradient-gold">Bet</span>
          </span>
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleClick(link.href)}
              className="text-sm font-medium text-muted-foreground hover:text-white transition-colors relative group"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gold transition-all group-hover:w-full" />
            </button>
          ))}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => handleClick("#telecharger")}
            className="gradient-cta text-white px-6 py-2.5 rounded-xl text-sm font-bold shadow-lg"
          >
            S'inscrire
          </motion.button>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden w-10 h-10 flex items-center justify-center rounded-xl glass border-white/10 text-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Menu"
        >
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 md:hidden bg-background/95 backdrop-blur-2xl border-b border-white/5 overflow-hidden shadow-2xl"
          >
            <div className="container mx-auto px-6 py-8 flex flex-col gap-6">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleClick(link.href)}
                  className="text-left text-lg font-semibold text-muted-foreground hover:text-white transition-colors"
                >
                  {link.label}
                </button>
              ))}
              <button
                onClick={() => handleClick("#telecharger")}
                className="gradient-cta text-white px-6 py-4 rounded-2xl text-base font-bold text-center shadow-xl"
              >
                Commencer maintenant
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>

  );
};

export default Navbar;
