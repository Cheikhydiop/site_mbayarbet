import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const PrivacyPolicy = () => {
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
          Politique de Confidentialité
        </motion.h1>
        <motion.p {...fadeUp} transition={{ delay: 0.15 }} className="text-muted-foreground mb-12">
          Dernière mise à jour : Février 2026
        </motion.p>

        <div className="space-y-10 text-foreground">
          {[
            {
              title: "1. Introduction",
              content: "Mbayar Bet accorde une importance primordiale à la protection de vos données personnelles. Cette politique de confidentialité explique comment nous collectons, utilisons, stockons et protégeons vos informations lorsque vous utilisez notre plateforme."
            },
            {
              title: "2. Données collectées",
              content: "Nous collectons les données suivantes :",
              list: [
                "**Données d'identification** : nom, prénom, numéro de téléphone.",
                "**Données de compte** : adresse e-mail, mot de passe (chiffré).",
                "**Données financières** : historique des transactions, solde du portefeuille, montants des paris.",
                "**Données d'utilisation** : pages visitées, actions effectuées, durée des sessions.",
                "**Données techniques** : adresse IP, type d'appareil, système d'exploitation, navigateur."
              ]
            },
            {
              title: "3. Utilisation des données",
              content: "Vos données sont utilisées pour :",
              list: [
                "Créer et gérer votre compte utilisateur.",
                "Traiter vos dépôts, paris et retraits.",
                "Assurer la sécurité de la plateforme et prévenir la fraude.",
                "Vous envoyer des notifications relatives à vos paris.",
                "Améliorer nos services et votre expérience utilisateur.",
                "Respecter nos obligations légales et réglementaires."
              ]
            },
            {
              title: "4. Partage des données",
              content: "Mbayar Bet ne vend jamais vos données personnelles. Nous pouvons partager vos données avec :",
              list: [
                "**Prestataires de paiement** (Wave, Orange Money) pour le traitement des transactions.",
                "**Autorités compétentes** en cas d'obligation légale.",
                "**Prestataires techniques** pour l'hébergement et la maintenance de la plateforme."
              ]
            },
            {
              title: "5. Sécurité des données",
              content: "Nous mettons en œuvre des mesures de sécurité robustes :",
              list: [
                "Chiffrement des données sensibles (mots de passe, transactions).",
                "Système escrow sécurisé pour le blocage des fonds.",
                "Surveillance continue contre les accès non autorisés.",
                "Sauvegardes régulières des données.",
                "Accès restreint aux données personnelles au sein de l'équipe."
              ]
            },
            {
              title: "6. Conservation des données",
              content: null,
              list: [
                "Les données de compte sont conservées tant que le compte est actif.",
                "Les données de transactions sont conservées pendant **5 ans** conformément aux obligations légales.",
                "En cas de suppression de compte, les données personnelles sont effacées sous **30 jours**, à l'exception des données requises par la loi."
              ]
            },
            {
              title: "7. Vos droits",
              content: "Conformément à la réglementation, vous disposez des droits suivants :",
              list: [
                "**Droit d'accès** : consulter les données que nous détenons sur vous.",
                "**Droit de rectification** : corriger des données inexactes.",
                "**Droit de suppression** : demander la suppression de vos données.",
                "**Droit d'opposition** : vous opposer au traitement de vos données.",
                "**Droit à la portabilité** : recevoir vos données dans un format structuré."
              ]
            },
            {
              title: "8. Cookies",
              content: "Mbayar Bet utilise des cookies pour :",
              list: [
                "Maintenir votre session de connexion.",
                "Mémoriser vos préférences.",
                "Analyser l'utilisation de la plateforme pour l'améliorer.",
                "Vous pouvez gérer vos préférences de cookies dans les paramètres de votre navigateur."
              ]
            },
            {
              title: "9. Mineurs",
              content: "Mbayar Bet est strictement réservé aux personnes de 18 ans et plus. Nous ne collectons pas sciemment de données relatives aux mineurs. Si nous découvrons qu'un mineur a créé un compte, celui-ci sera immédiatement supprimé."
            },
            {
              title: "10. Modifications",
              content: "Nous pouvons mettre à jour cette politique de confidentialité à tout moment. Les modifications importantes seront notifiées aux utilisateurs. La date de dernière mise à jour est indiquée en haut de cette page."
            },
            {
              title: "11. Contact",
              content: "Pour exercer vos droits ou poser des questions sur la protection de vos données :\n\n📧 privacy@mbayarbet.com\n📱 +221 XX XXX XX XX\n📍 Dakar, Sénégal\n\nDélégué à la protection des données : dpo@mbayarbet.com"
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

export default PrivacyPolicy;
