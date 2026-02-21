import { Link } from "react-router-dom";
import logo from "@/assets/logo-mbayar.jpeg";

const Footer = () => {
  return (
    <footer className="py-20 bg-background border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 items-start mb-20">
          <div className="space-y-6 col-span-1 md:col-span-2">
            <div className="flex items-center gap-4">
              <img src={logo} alt="Mbayar Bet" className="w-14 h-14 rounded-2xl object-contain border border-white/10" />
              <span className="font-bold text-2xl text-foreground">
                Mbayar<span className="text-gradient-gold">Bet</span>
              </span>
            </div>
            <p className="text-muted-foreground max-w-sm text-lg leading-relaxed">
              La plateforme communautaire n°1 pour les passionnés de lutte sénégalaise.
              Pariez en toute sécurité, entre amis et sans intermédiaire.
            </p>
          </div>

          <div className="space-y-6">
            <h4 className="font-bold text-white uppercase tracking-widest text-xs">Navigation</h4>
            <ul className="space-y-4 text-muted-foreground font-medium">
              <li><a href="#comment-ca-marche" className="hover:text-gold transition-colors">Fonctionnement</a></li>
              <li><a href="#difference" className="hover:text-gold transition-colors">Notre différence</a></li>
              <li><a href="#securite" className="hover:text-gold transition-colors">Sécurité</a></li>
              <li><a href="#tarification" className="hover:text-gold transition-colors">Tarifs</a></li>
              <li><Link to="/cgu" className="hover:text-gold transition-colors">CGU</Link></li>
            </ul>
          </div>

          <div className="space-y-6">
            <h4 className="font-bold text-white uppercase tracking-widest text-xs">Contact</h4>
            <ul className="space-y-4 text-muted-foreground font-medium">
              <li className="flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-sm">📧</span>
                <span>contact@mbayarbet.com</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-sm">📱</span>
                <span>+221 33 800 00 00</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-sm">📍</span>
                <span>Dakar, Sénégal</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 space-y-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-sm text-muted-foreground font-medium">
              © 2026 Mbayar Bet. Fait avec passion à Dakar.
            </p>
            <div className="flex items-center gap-6">
              {/* Social icons could go here */}
            </div>
          </div>

          <div className="glass-dark rounded-[32px] p-8 border-white/5">
            <div className="max-w-3xl mx-auto flex flex-col md:flex-row items-center gap-6 text-center md:text-left">
              <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center text-2xl flex-shrink-0">
                🔞
              </div>
              <div className="space-y-2">
                <p className="text-sm font-bold text-white">Jeu Responsable</p>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Le jeu comporte des risques : endettement, isolement, dépendance. Pour être aidé, appelez le service d'aide au jeu responsable au Sénégal. Jouez pour le plaisir, misez avec modération. Réservé aux personnes de 18 ans et plus.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>

  );
};

export default Footer;
