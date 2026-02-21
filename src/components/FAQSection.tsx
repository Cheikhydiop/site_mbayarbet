import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Est-ce que Mbayar Bet est légal ?",
    answer: "Mbayar Bet est une plateforme de paris communautaires entre particuliers. Nous travaillons en conformité avec les réglementations en vigueur au Sénégal. Notre objectif est de formaliser les paris informels qui existent déjà dans la culture de la lutte sénégalaise, en apportant sécurité et transparence.",
  },
  {
    question: "Que se passe-t-il si personne n'accepte mon pari ?",
    answer: "Si personne n'accepte ton pari avant le début du combat, ta mise est automatiquement remboursée sur ton portefeuille Mbayar. Tu ne perds rien. Tu peux aussi annuler ton pari à tout moment tant qu'il n'a pas été accepté.",
  },
  {
    question: "Est-ce que je peux annuler un pari ?",
    answer: "Oui, tu peux annuler un pari tant qu'aucun autre parieur ne l'a accepté. Une fois le pari accepté par les deux parties, les fonds sont bloqués et le pari ne peut plus être annulé. C'est un engagement, comme dans la vraie vie.",
  },
  {
    question: "Comment je retire mes gains ?",
    answer: "C'est simple ! Depuis ton portefeuille Mbayar, clique sur « Retirer » et choisis Wave ou Orange Money. Tes fonds arrivent en quelques minutes sur ton compte mobile money. Des frais de retrait de 2,5% sont appliqués.",
  },
  {
    question: "Et si le combat se termine par un match nul ?",
    answer: "En cas de match nul ou de combat sans vainqueur, les mises sont intégralement remboursées aux deux parieurs. Aucune commission n'est prélevée. Tu récupères 100% de ta mise.",
  },
  {
    question: "Quel est le montant minimum pour parier ?",
    answer: "Le montant minimum pour créer ou accepter un pari est de 1 000 FCFA. Le montant maximum est de 500 000 FCFA par pari. Tu paries ce que tu veux dans cette fourchette.",
  },
  {
    question: "Comment Mbayar Bet gagne de l'argent ?",
    answer: "Mbayar Bet prend une commission de 5% uniquement sur le pot du gagnant, et 2,5% sur les retraits. C'est tout. Pas de frais cachés, pas d'abonnement. La plateforme ne joue jamais contre toi.",
  },
];

const FAQSection = () => {
  return (
    <section id="faq" className="py-32 bg-background relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Questions <span className="text-gradient-gold">réponses</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg leading-relaxed">
            Besoin de plus de précision ? Voici les réponses aux questions les plus fréquemment posées par notre communauté.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
              >
                <AccordionItem
                  value={`item-${index}`}
                  className="glass rounded-3xl border-white/5 px-8 data-[state=open]:bg-white/[0.02] data-[state=open]:border-primary/20 transition-all overflow-hidden"
                >
                  <AccordionTrigger className="text-left font-bold text-lg text-white hover:no-underline py-6">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground text-base leading-relaxed pb-8">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>

  );
};

export default FAQSection;
