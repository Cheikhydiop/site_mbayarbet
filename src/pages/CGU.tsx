import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const CGU = () => {
  const fadeUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 },
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <motion.div {...fadeUp}>
          <Link to="/" className="inline-flex items-center gap-2 text-gold hover:text-foreground transition-colors mb-8">
            <ArrowLeft className="w-4 h-4" />
            <span className="text-sm font-display font-semibold">Retour à l'accueil</span>
          </Link>
        </motion.div>

        <motion.h1
          {...fadeUp}
          transition={{ delay: 0.1 }}
          className="text-4xl md:text-5xl font-display font-black text-foreground mb-4"
        >
          Conditions Générales d'Utilisation
        </motion.h1>
        <motion.p {...fadeUp} transition={{ delay: 0.15 }} className="text-muted-foreground mb-12">
          Dernière mise à jour : Février 2026
        </motion.p>

        <div className="space-y-10 text-foreground">
          {[
            {
              title: "1. Objet",
              content: "Les présentes Conditions Générales d'Utilisation (CGU) régissent l'accès et l'utilisation de la plateforme Mbayar Bet, une plateforme de paris communautaires peer-to-peer dédiée à la lutte sénégalaise. En utilisant Mbayar Bet, vous acceptez ces conditions dans leur intégralité."
            },
            {
              title: "2. Définitions",
              content: null,
              list: [
                "**Plateforme** : le site web et l'application mobile Mbayar Bet.",
                "**Utilisateur** : toute personne inscrite sur la plateforme.",
                "**Pari communautaire** : un pari entre deux utilisateurs (peer-to-peer) sur le résultat d'un combat de lutte sénégalaise.",
                "**Pot** : la somme totale des mises des deux parieurs.",
                "**Escrow** : système de blocage sécurisé des fonds pendant la durée du pari.",
                "**Jetons** : unité de compte utilisée sur la plateforme, achetée via Wave ou Orange Money."
              ]
            },
            {
              title: "3. Inscription et éligibilité",
              content: null,
              list: [
                "L'utilisateur doit avoir au moins **18 ans** pour s'inscrire.",
                "L'inscription nécessite un numéro de téléphone valide.",
                "L'utilisateur s'engage à fournir des informations exactes et à jour.",
                "Un seul compte par personne est autorisé.",
                "Mbayar Bet se réserve le droit de suspendre ou supprimer tout compte en cas de fraude ou de non-respect des CGU."
              ]
            },
            {
              title: "4. Fonctionnement des paris",
              content: "Mbayar Bet est une plateforme de paris peer-to-peer. L'utilisateur ne parie pas contre la plateforme mais contre un autre utilisateur.",
              list: [
                "L'utilisateur crée un pari en choisissant un combat, un lutteur et un montant.",
                "Un autre utilisateur peut accepter le pari au même montant.",
                "Une fois le pari accepté, les fonds des deux parieurs sont bloqués (escrow).",
                "Le résultat est validé à partir de sources officielles.",
                "Le gagnant reçoit 95% du pot total (5% de commission).",
                "En cas de match nul, les mises sont intégralement remboursées."
              ]
            },
            {
              title: "5. Dépôts et retraits",
              content: null,
              list: [
                "Les dépôts se font via **Wave** ou **Orange Money** sans frais.",
                "Le montant minimum de dépôt est de **1 000 FCFA**.",
                "Les retraits sont soumis à une commission de **2,5%**.",
                "Les retraits sont traités sous 24 heures maximum.",
                "Mbayar Bet se réserve le droit de demander une vérification d'identité pour les retraits importants."
              ]
            },
            {
              title: "6. Commissions",
              content: null,
              list: [
                "**5%** prélevés sur le pot du gagnant.",
                "**2,5%** de frais sur les retraits vers Wave ou Orange Money.",
                "Aucun frais d'inscription, de dépôt ou d'abonnement."
              ]
            },
            {
              title: "7. Comportement des utilisateurs",
              content: "Les utilisateurs s'engagent à :",
              list: [
                "Ne pas utiliser la plateforme à des fins frauduleuses.",
                "Ne pas créer de faux comptes ou utiliser de fausses identités.",
                "Ne pas tenter de manipuler les résultats des paris.",
                "Respecter les autres utilisateurs de la plateforme.",
                "Ne pas utiliser de robots ou de scripts automatisés."
              ]
            },
            {
              title: "8. Responsabilité de Mbayar Bet",
              content: "Mbayar Bet agit en tant que tiers de confiance et arbitre neutre. La plateforme ne participe pas aux paris et ne fixe aucune cote. Mbayar Bet ne saurait être tenu responsable des pertes financières résultant des paris. Les jeux d'argent comportent des risques."
            },
            {
              title: "9. Jeu responsable",
              content: "Mbayar Bet s'engage à promouvoir le jeu responsable :",
              list: [
                "L'accès est strictement réservé aux personnes de 18 ans et plus.",
                "Des limites de mise sont en place (1 000 à 500 000 FCFA).",
                "L'utilisateur peut demander une auto-exclusion temporaire ou définitive.",
                "En cas de comportement addictif, veuillez contacter notre service de support."
              ]
            },
            {
              title: "10. Modification des CGU",
              content: "Mbayar Bet se réserve le droit de modifier les présentes CGU à tout moment. Les utilisateurs seront informés de toute modification majeure par notification. L'utilisation continue de la plateforme après modification vaut acceptation des nouvelles CGU."
            },
            {
              title: "11. Contact",
              content: "Pour toute question relative à ces CGU, contactez-nous :\n\n📧 contact@mbayarbet.com\n📱 +221 XX XXX XX XX\n📍 Dakar, Sénégal"
            },
          ].map((section, i) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + i * 0.05 }}
              className="space-y-3"
            >
              <h2 className="text-2xl font-display font-bold text-foreground">{section.title}</h2>
              {section.content && (
                <p className="text-muted-foreground leading-relaxed whitespace-pre-line">{section.content}</p>
              )}
              {section.list && (
                <ul className="space-y-2 ml-4">
                  {section.list.map((item, j) => (
                    <li key={j} className="text-muted-foreground leading-relaxed flex items-start gap-2">
                      <span className="text-gold mt-1.5 flex-shrink-0">•</span>
                      <span dangerouslySetInnerHTML={{ __html: item.replace(/\*\*(.*?)\*\*/g, '<strong class="text-foreground">$1</strong>') }} />
                    </li>
                  ))}
                </ul>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CGU;
