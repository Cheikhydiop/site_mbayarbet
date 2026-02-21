import { motion } from "framer-motion";
import { UserPlus, Coins, Swords, Handshake, Lock, CheckCircle, Banknote } from "lucide-react";

const steps = [
  {
    icon: UserPlus,
    title: "Inscription",
    description: "Crée ton compte en quelques secondes avec ton numéro de téléphone. C'est gratuit et rapide.",
  },
  {
    icon: Coins,
    title: "Achète des jetons",
    description: "Recharge ton portefeuille via Wave ou Orange Money. Tu choisis le montant, de 1 000 à 500 000 FCFA.",
  },
  {
    icon: Swords,
    title: "Crée ton pari",
    description: "Choisis un combat à venir, sélectionne ton lutteur favori, et fixe le montant de ta mise.",
  },
  {
    icon: Handshake,
    title: "Un autre parieur accepte",
    description: "Un autre utilisateur qui soutient le lutteur adverse accepte ton pari au même montant. C'est un défi équitable.",
  },
  {
    icon: Lock,
    title: "Fonds bloqués en sécurité",
    description: "Les mises des deux parieurs sont bloquées dans un portefeuille sécurisé (escrow). Personne ne peut y toucher avant la fin du combat.",
  },
  {
    icon: CheckCircle,
    title: "Résultat validé",
    description: "À la fin du combat, le résultat officiel est enregistré sur la plateforme. Aucune manipulation possible.",
  },
  {
    icon: Banknote,
    title: "Gains distribués automatiquement",
    description: "Le gagnant reçoit automatiquement 95% du pot total. Les fonds arrivent directement sur ton portefeuille Mbayar.",
  },
];

const HowItWorksSection = () => {
  return (
    <section id="comment-ca-marche" className="py-32 relative overflow-hidden bg-background/50">
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Comment ça <span className="text-gradient-gold">marche ?</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg leading-relaxed">
            Mbayar Bet réinvente le pari sportif avec un modèle communautaire et transparent.
            Suivez ces étapes pour commencer à défier vos amis.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative p-8 rounded-[32px] glass border-white/5 hover:border-white/20 transition-all group overflow-hidden"
            >
              {/* Step Number Badge */}
              <div className="absolute top-6 right-8 text-5xl font-black text-white/5 group-hover:text-white/10 transition-colors">
                0{index + 1}
              </div>

              <div className="relative z-10 space-y-6">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/20 to-gold/20 flex items-center justify-center border border-white/10 group-hover:scale-110 transition-transform duration-500">
                  <step.icon className="w-7 h-7 text-white" />
                </div>

                <div className="space-y-3">
                  <h3 className="text-xl font-bold text-white group-hover:text-gold transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>

              {/* Hover Effect Light */}
              <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-primary/10 blur-[60px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>

  );
};

export default HowItWorksSection;
