import { useState } from "react";
import { motion } from "framer-motion";
import { Play, X } from "lucide-react";
import pubImage from "@/assets/pub-mbayar.jpeg";

const HeroSection = () => {
  const [showDemo, setShowDemo] = useState(false);

  return (
    <section id="accueil" className="relative min-h-[90vh] gradient-hero overflow-hidden flex items-center pt-24 pb-12">
      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[20%] left-[10%] w-64 h-64 rounded-full bg-primary/20 blur-[120px] animate-pulse" />
        <div className="absolute bottom-[20%] right-[10%] w-80 h-80 rounded-full bg-gold/15 blur-[100px] animate-pulse" style={{ animationDelay: "2s" }} />
        <div className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-primary/5 rounded-full blur-[150px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-10"
          >
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border-white/10 text-xs font-bold uppercase tracking-widest text-gold mb-2"
              >
                <span className="w-2 h-2 rounded-full bg-gold animate-ping" />
                Live en ce moment : Franc vs Tapha Tine
              </motion.div>

              <motion.h1
                className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1]"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <span className="text-foreground">Défie tes amis</span>
                <br />
                <span className="text-foreground">sur </span>
                <span className="text-gradient-primary">la Lutte</span>
              </motion.h1>

              <motion.p
                className="text-lg md:text-xl text-muted-foreground/90 max-w-xl leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                Vivez la passion de la lutte sénégalaise autrement. Créez vos propres paris,
                invitez vos amis et prouvez qui est le meilleur expert. <span className="text-foreground font-semibold">Zéro bookmaker, 100% passion.</span>
              </motion.p>
            </div>

            <motion.div
              className="flex flex-wrap gap-5"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setShowDemo(true)}
                className="gradient-cta px-10 py-5 rounded-2xl font-bold text-lg text-white flex items-center gap-3 shadow-xl"
              >
                <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                  <Play className="w-4 h-4 fill-white" />
                </div>
                Voir la démo
              </motion.button>

              <motion.a
                href="https://lambji.vercel.app/auth"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02, backgroundColor: "rgba(255,255,255,0.05)" }}
                whileTap={{ scale: 0.98 }}
                className="px-10 py-5 rounded-2xl font-semibold text-lg text-foreground border border-white/10 glass transition-all inline-block"
              >
                Commencer
              </motion.a>
            </motion.div>

            <motion.div
              className="grid grid-cols-3 gap-8 pt-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              {[
                { label: "Utilisateurs", value: "25K+", sub: "En 3 mois" },
                { label: "Format", value: "P2P", sub: "Entre amis" },
                { label: "Sécurité", value: "100%", sub: "Garantie" },
              ].map((stat, idx) => (
                <div key={idx} className="space-y-1">
                  <p className="text-3xl font-bold text-white leading-none">{stat.value}</p>
                  <p className="text-xs uppercase tracking-wider text-muted-foreground font-bold">{stat.label}</p>
                  <p className="text-[10px] text-muted-foreground/60">{stat.sub}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
            className="relative flex justify-center"
          >
            <div className="relative w-full max-w-[480px]">
              {/* Floating Cards */}
              <motion.div
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-10 -left-10 z-20 glass p-4 rounded-2xl shadow-2xl border-white/20"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center">
                    <span className="text-white font-bold">✓</span>
                  </div>
                  <div>
                    <p className="text-xs font-bold text-white">Pari Gagné !</p>
                    <p className="text-[10px] text-muted-foreground">+15,000 FCFA</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [0, 15, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -bottom-10 -right-5 z-20 glass p-5 rounded-2xl shadow-2xl border-white/20"
              >
                <div className="space-y-2">
                  <p className="text-[10px] font-bold text-gold uppercase tracking-tighter">Combat a venir </p>
                  <div className="flex items-center gap-4">
                    <span className="font-bold text-sm">SA THIES</span>
                    <span className="text-xs text-muted-foreground">VS</span>
                    <span className="font-bold text-sm">MODOU LO</span>
                  </div>
                </div>
              </motion.div>

              {/* Main Image Container */}
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/30 to-gold/30 rounded-[40px] blur-2xl opacity-40 group-hover:opacity-60 transition-opacity" />
                <div className="relative rounded-[40px] overflow-hidden border border-white/10 shadow-[0_0_50px_rgba(0,0,0,0.5)]">
                  <img
                    src={pubImage}
                    alt="Mbayar Bet Mobile App"
                    className="w-full h-auto scale-[1.01]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>


      {/* Video Demo Popup */}
      {showDemo && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setShowDemo(false)}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", damping: 25 }}
            className="relative w-full max-w-3xl aspect-video bg-card rounded-2xl border border-border overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setShowDemo(false)}
              className="absolute top-3 right-3 z-10 w-10 h-10 rounded-full bg-background/80 flex items-center justify-center text-foreground hover:bg-background transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="w-full h-full flex items-center justify-center">
              <div className="text-center space-y-4 p-8">
                <div className="w-20 h-20 rounded-full gradient-cta flex items-center justify-center mx-auto glow-maroon">
                  <Play className="w-10 h-10 text-primary-foreground ml-1" />
                </div>
                <h3 className="text-2xl font-display font-bold text-foreground">Démo Mbayar Bet</h3>
                <p className="text-muted-foreground max-w-md">
                  La vidéo de démonstration sera bientôt disponible. En attendant, inscris-toi pour découvrir l'application !
                </p>
                <motion.a
                  href="https://lambji.vercel.app/auth"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="gradient-cta px-6 py-3 rounded-xl font-display font-bold text-primary-foreground inline-block"
                >
                  Découvrir l'app
                </motion.a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
};

export default HeroSection;
