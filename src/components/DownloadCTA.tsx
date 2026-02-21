import { motion } from "framer-motion";

const DownloadCTA = () => {
  return (
    <section id="telecharger" className="py-32 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative rounded-[48px] overflow-hidden bg-gradient-to-br from-primary via-primary/90 to-primary/80 p-12 md:p-24 text-center shadow-[0_40px_100px_-20px_hsl(var(--primary)/0.4)]"
        >
          {/* Decorative Background Elements */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute -top-1/2 -right-1/4 w-[100%] h-[200%] bg-gold/10 rotate-12 blur-3xl" />
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-2xl animate-pulse" />
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-black/10 rounded-full blur-3xl" />
          </div>

          <div className="relative z-10 space-y-10 max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="inline-block px-6 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs font-bold uppercase tracking-[0.2em] text-white"
            >
              Rejoins l'aventure
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-6xl font-bold text-white leading-[1.1]"
            >
              Prêt à défier tes amis sur la lutte ?
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-lg md:text-xl text-white/80 leading-relaxed"
            >
              Inscris-toi aujourd'hui et découvre une nouvelle façon de vivre ta passion.
              Gagne de l'argent grâce à tes connaissances en toute sécurité.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="pt-6"
            >
              <motion.a
                href="https://lambji.vercel.app/auth"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05, boxShadow: "0 20px 40px -10px rgba(0,0,0,0.3)" }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-primary px-12 py-5 rounded-2xl font-bold text-xl hover:bg-white/90 transition-all inline-flex items-center gap-3"
              >
                <span>Commencer maintenant</span>
                <span className="text-2xl">🚀</span>
              </motion.a>

              <p className="text-white/60 text-sm mt-8 font-medium">
                Déjà plus de 25,000 parieurs nous font confiance.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>

  );
};

export default DownloadCTA;
