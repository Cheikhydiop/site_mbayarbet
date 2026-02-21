import { motion } from "framer-motion";
import { Check, X } from "lucide-react";

const comparisons = [
  { feature: "Tu paries contre un autre parieur", mbayar: true, classic: false },
  { feature: "Pas de cotes compliquées", mbayar: true, classic: false },
  { feature: "Même mise des deux côtés", mbayar: true, classic: false },
  { feature: "Plateforme neutre (pas de bookmaker)", mbayar: true, classic: false },
  { feature: "Commission fixe et transparente (5%)", mbayar: true, classic: false },
  { feature: "Tu paries contre la plateforme", mbayar: false, classic: true },
  { feature: "Cotes variables et opaques", mbayar: false, classic: true },
  { feature: "La maison gagne toujours", mbayar: false, classic: true },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5, ease: "easeOut" as const } },
};

const WhyDifferentSection = () => {
  return (
    <section id="difference" className="py-32 bg-background relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gold/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Pourquoi <span className="text-gradient-primary">Mbayar Bet</span> est différent ?
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg leading-relaxed">
            Mbayar Bet n'est pas un site de paris classique. Nous avons supprimé les intermédiaires
            et les algorithmes opaques pour créer une expérience 100% équitable.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24"
        >
          {[
            {
              title: "Pas de cotes",
              text: "Oublie les calculs complexes. Tu mises un montant, ton ami mise le même. Simple et direct.",
            },
            {
              title: "Pas de bookmaker",
              text: "La plateforme est un arbitre neutre. Nous sécurisons les fonds et validons les résultats.",
            },
            {
              title: "Équité Totale",
              text: "Chaque pari est un face-à-face direct. Personne n'a d'avantage statistique caché.",
            },
            {
              title: "Transparence",
              text: "Une commission unique de 5% pour faire tourner la plateforme. Pas de frais de retrait.",
            },
          ].map((item) => (
            <motion.div
              key={item.title}
              variants={itemVariants}
              whileHover={{ y: -8 }}
              className="p-8 rounded-[32px] glass border-white/5 hover:border-gold/20 transition-all group"
            >
              <h3 className="text-xl font-bold text-white mb-4 group-hover:text-gold transition-colors">{item.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{item.text}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Tableau comparatif */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="relative p-1 rounded-[40px] bg-gradient-to-br from-white/10 to-transparent">
            <div className="bg-card rounded-[39px] overflow-hidden border border-white/5 shadow-2xl">
              <div className="grid grid-cols-3 gap-0 text-center items-center py-8 px-6 bg-white/[0.02]">
                <span className="text-muted-foreground font-bold uppercase tracking-wider text-xs text-left">Critère</span>
                <span className="text-gold font-bold text-lg">Mbayar Bet</span>
                <span className="text-muted-foreground font-bold text-lg">Classique</span>
              </div>

              <div className="divide-y divide-white/5">
                {comparisons.map((row, i) => (
                  <motion.div
                    key={i}
                    className="grid grid-cols-3 gap-0 text-center items-center py-6 px-6 group hover:bg-white/[0.01] transition-colors"
                  >
                    <span className="text-foreground text-left text-sm font-medium pr-4">{row.feature}</span>
                    <span className="flex justify-center">
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center ${row.mbayar ? 'bg-accent/10 border border-accent/20' : 'bg-red-500/10 border border-red-500/20'}`}>
                        {row.mbayar ? (
                          <Check className="w-5 h-5 text-accent" />
                        ) : (
                          <X className="w-5 h-5 text-red-500" />
                        )}
                      </div>
                    </span>
                    <span className="flex justify-center">
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center ${row.classic ? 'bg-accent/10 border border-accent/20' : 'bg-red-500/10 border border-red-500/20'}`}>
                        {row.classic ? (
                          <Check className="w-5 h-5 text-accent" />
                        ) : (
                          <X className="w-5 h-5 text-red-500" />
                        )}
                      </div>
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>

  );
};

export default WhyDifferentSection;
