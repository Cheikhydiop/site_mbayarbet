import { motion } from "framer-motion";
import screenshot1 from "@/assets/screenshot-1.png";
import screenshot2 from "@/assets/screenshot-2.png";
import screenshot3 from "@/assets/screenshot-3.png";
import screenshot4 from "@/assets/screenshot-4.jpeg";
import screenshot5 from "@/assets/screenshot-5.png";
import googlePlayBadge from "@/assets/google-play-badge.svg";
import appStoreBadge from "@/assets/app-store-badge.svg";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const screenshots = [
  { src: screenshot1, alt: "Écran de pari - Relever un défi" },
  { src: screenshot2, alt: "Écran d'accueil - Mon solde et événements" },
  { src: screenshot3, alt: "Écran Mes Paris - Historique et statistiques" },
  { src: screenshot4, alt: "Portefeuille - Dépôts et retraits sécurisés" },
  { src: screenshot5, alt: "Détails du Combat - Suivi en temps réel" },
];



const AppScreenshotsSection = () => {
  return (
    <section id="application" className="py-32 relative overflow-hidden bg-background">
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            L'expérience <span className="text-gradient-gold">Mobile</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg leading-relaxed">
            Une interface épurée, rapide et sécurisée. Gérez vos paris, suivez les directs
            et retirez vos gains instantanément depuis votre smartphone.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <Carousel opts={{ align: "center", loop: true }} className="w-full">
            <CarouselContent className="-ml-6">
              {screenshots.map((shot, i) => (
                <CarouselItem key={i} className="pl-6 basis-full sm:basis-1/2 lg:basis-1/3 flex justify-center">
                  <motion.div
                    className="relative group p-4"
                    whileHover={{ y: -12 }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-b from-primary/20 to-gold/20 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                    <div className="relative rounded-[3rem] overflow-hidden border-[8px] border-white/5 shadow-[0_0_50px_rgba(0,0,0,0.5)]">
                      <img
                        src={shot.src}
                        alt={shot.alt}
                        className="w-full h-auto max-w-[280px]"
                      />
                    </div>
                  </motion.div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center gap-4 mt-12">
              <CarouselPrevious className="static translate-y-0 w-12 h-12 glass border-white/10" />
              <CarouselNext className="static translate-y-0 w-12 h-12 glass border-white/10" />
            </div>
          </Carousel>
        </motion.div>

        {/* Store badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap items-center justify-center gap-8 mt-20"
        >
          <motion.a href="#" whileHover={{ scale: 1.05 }} className="relative group">
            <div className="absolute -inset-4 bg-primary/20 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
            <img src={googlePlayBadge} alt="Google Play" className="h-14 relative z-10" />
          </motion.a>
          <motion.a href="#" whileHover={{ scale: 1.05 }} className="relative group opacity-50 grayscale hover:grayscale-0 hover:opacity-100 transition-all">
            <img src={appStoreBadge} alt="App Store" className="h-14 relative z-10" />
            <p className="text-[10px] text-center mt-2 font-bold uppercase tracking-widest text-white/40">Bientôt</p>
          </motion.a>
        </motion.div>
      </div>
    </section>

  );
};

export default AppScreenshotsSection;
