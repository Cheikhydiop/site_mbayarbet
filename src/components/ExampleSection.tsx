import { motion } from "framer-motion";
import { User, ArrowRight, Trophy, Banknote } from "lucide-react";

const ExampleSection = () => {
  return (
    <section className="py-32 bg-background relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Un pari <span className="text-gradient-gold">en action</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg leading-relaxed">
            Découvrez comment Mbayar Bet simplifie et sécurise vos défis sur la lutte sénégalaise.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="p-1 rounded-[48px] bg-gradient-to-br from-white/10 to-transparent shadow-2xl"
          >
            <div className="bg-card rounded-[47px] p-8 md:p-12 space-y-12">
              {/* Parieurs */}
              <div className="grid sm:grid-cols-2 gap-8 relative">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 hidden sm:block">
                  <div className="w-12 h-12 rounded-full glass border-white/10 flex items-center justify-center font-bold text-white">VS</div>
                </div>

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="p-6 rounded-3xl glass border-primary/20 bg-primary/5 flex items-center gap-5 translate-x-0"
                >
                  <div className="w-16 h-16 rounded-2xl bg-primary/20 flex items-center justify-center border border-primary/30">
                    <User className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <p className="font-bold text-white text-lg">Moussa</p>
                    <p className="text-sm text-gold font-medium mb-1">Mise sur Modou Lô</p>
                    <p className="text-xl font-black text-white">15 000 FCFA</p>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="p-6 rounded-3xl glass border-accent/20 bg-accent/5 flex items-center gap-5"
                >
                  <div className="w-16 h-16 rounded-2xl bg-accent/20 flex items-center justify-center border border-accent/30">
                    <User className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <p className="font-bold text-white text-lg">Fatou</p>
                    <p className="text-sm text-accent font-medium mb-1">Mise sur Siteu</p>
                    <p className="text-xl font-black text-white">15 000 FCFA</p>
                  </div>
                </motion.div>
              </div>

              {/* Pot Section */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="flex flex-col items-center gap-6"
              >
                <div className="h-20 w-px bg-gradient-to-b from-white/10 to-gold/50 hidden sm:block" />
                <div className="bg-white/5 border border-white/10 rounded-[32px] px-10 py-6 text-center backdrop-blur-md">
                  <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground font-bold mb-2">Pot total sécurisé</p>
                  <p className="text-4xl md:text-5xl font-black text-gold">30 000 FCFA</p>
                </div>
                <div className="h-20 w-px bg-gradient-to-t from-white/10 to-gold/50 hidden sm:block" />
              </motion.div>

              {/* Victory Section */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-accent/10 border border-accent/20 rounded-[40px] p-10 text-center space-y-6 relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-gold/10 blur-[60px] rounded-full" />
                <motion.div
                  animate={{ rotate: [0, -10, 10, -5, 5, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="relative z-10"
                >
                  <div className="w-20 h-20 rounded-full bg-gold/20 flex items-center justify-center mx-auto border border-gold/40">
                    <Trophy className="w-10 h-10 text-gold" />
                  </div>
                </motion.div>

                <div className="space-y-2 relative z-10">
                  <p className="text-2xl font-bold text-white">Modou Lô remporte le combat !</p>
                  <div className="flex flex-col items-center">
                    <p className="text-muted-foreground font-medium">Moussa empoche le gain final</p>
                    <p className="text-5xl font-black text-white mt-4 flex items-center gap-3">
                      <span className="text-2xl text-accent">+</span> 28 500 <span className="text-2xl font-bold text-muted-foreground uppercase">FCFA</span>
                    </p>
                  </div>
                </div>

                <div className="pt-6 border-t border-white/5 text-xs text-muted-foreground font-medium">
                  Calcul : 30 000 FCFA - 5% commission plateforme = 28 500 FCFA
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>

  );
};

export default ExampleSection;
