import { motion } from "framer-motion";
import { ShieldCheck, Wallet, Award, Eye, Scale } from "lucide-react";

const trustPoints = [
  {
    icon: ShieldCheck,
    title: "Fonds bloqués et sécurisés",
    description: "Dès qu'un pari est accepté, les mises des deux parieurs sont bloquées dans un portefeuille escrow sécurisé. Personne — ni toi, ni l'autre parieur, ni même Mbayar Bet — ne peut toucher aux fonds avant la fin du combat.",
  },
  {
    icon: Wallet,
    title: "Paiements Wave & Orange Money",
    description: "Dépose et retire tes fonds avec les moyens de paiement que tu utilises tous les jours. Rapide, simple, et sécurisé.",
  },
  {
    icon: Award,
    title: "Résultats validés officiellement",
    description: "Les résultats des combats sont validés à partir des sources officielles. Aucun résultat ne peut être modifié ou manipulé.",
  },
  {
    icon: Eye,
    title: "Aucune manipulation des paris",
    description: "Mbayar Bet ne fixe pas de cotes et ne joue pas contre toi. La plateforme est un tiers de confiance neutre. Tout est transparent.",
  },
  {
    icon: Scale,
    title: "Plateforme tiers de confiance",
    description: "Mbayar Bet joue le rôle d'arbitre entre les parieurs. Nous garantissons que chaque pari est équitable et que les gains sont distribués automatiquement.",
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40, rotateX: 10 },
  visible: { opacity: 1, y: 0, rotateX: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

const SecuritySection = () => {
  return (
    <section id="securite" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Une sécurité <span className="text-gradient-primary">sans compromis</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg leading-relaxed">
            Votre confiance est notre priorité. Mbayar Bet utilise les dernières technologies
            de sécurisation pour garantir l'intégrité de chaque transaction.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"
        >
          {trustPoints.map((point) => (
            <motion.div
              key={point.title}
              variants={cardVariants}
              whileHover={{ y: -8 }}
              className="p-8 rounded-[40px] glass border-white/5 hover:border-accent/40 transition-all group relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-accent/5 blur-3xl rounded-full" />

              <div className="relative z-10 space-y-6">
                <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center border border-accent/20 group-hover:scale-110 transition-transform">
                  <point.icon className="w-7 h-7 text-accent" />
                </div>

                <div className="space-y-3">
                  <h3 className="text-xl font-bold text-white group-hover:text-gold transition-colors">
                    {point.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {point.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>

  );
};

export default SecuritySection;
