import { motion } from "framer-motion";
import { Check } from "lucide-react";

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.9 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6, type: "spring" as const, bounce: 0.3 } },
};

const PricingSection = () => {
  return (
    <section id="tarification" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Une tarification <span className="text-gradient-gold">transparente</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg leading-relaxed">
            Chez Mbayar Bet, nous croyons en la clarté. Pas de frais d'inscription,
            pas d'abonnement. Tu ne paies que lorsque tu gagnes.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto"
        >
          {[
            {
              title: "Commission sur paris",
              value: "5%",
              description: "Prélevée uniquement sur le pot du gagnant. Une contribution équitable pour le service.",
            },
            {
              title: "Frais de retrait",
              value: "2.5%",
              description: "Appliqués aux transferts vers Wave ou Orange Money. Couvre les frais d'opérateur.",
            },
            {
              title: "Frais cachés",
              value: "0 FCFA",
              description: "Pas de frais de tenue de compte ni de dépôt. Votre argent reste le vôtre.",
            },
          ].map((item) => (
            <motion.div
              key={item.title}
              variants={cardVariants}
              whileHover={{ y: -12 }}
              className="p-10 rounded-[40px] glass border-white/5 text-center group transition-all"
            >
              <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-6 group-hover:text-gold transition-colors">
                {item.title}
              </p>
              <motion.p
                className="text-6xl font-black text-white mb-6"
                initial={{ scale: 0.8 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
              >
                {item.value}
              </motion.p>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 max-w-3xl mx-auto"
        >
          <div className="relative p-1 rounded-[32px] bg-gradient-to-r from-accent/20 to-gold/20">
            <div className="bg-card rounded-[31px] p-10 border border-white/5">
              <h4 className="text-xl font-bold text-white mb-8 text-center">Inclus gratuitement</h4>
              <div className="grid sm:grid-cols-2 gap-6">
                {[
                  "Inscription instantanée",
                  "Création de paris illimitée",
                  "Historique des combats live",
                  "Notifications temps réel",
                  "Sécurisation Escrow",
                  "Support client prioritaires",
                ].map((item, i) => (
                  <motion.div
                    key={item}
                    className="flex items-center gap-4"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
                  >
                    <div className="w-6 h-6 rounded-full bg-accent/10 flex items-center justify-center">
                      <Check className="w-3 h-3 text-accent" />
                    </div>
                    <span className="text-sm font-medium text-foreground">{item}</span>
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

export default PricingSection;
