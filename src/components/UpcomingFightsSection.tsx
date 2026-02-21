import { motion } from "framer-motion";
import { Clock, Trophy } from "lucide-react";

const upcomingFights = [
    {
        time: "18:00",
        fighter1: "Franc",
        fighter2: "Tapha Tine",
        category: "Poids Lourds",
        status: "Grand Combat",
        gradient: "from-primary/20 via-primary/5 to-transparent",
    },
    {
        time: "17:30",
        fighter1: "Sa Thiès",
        fighter2: "Modou Lô",
        category: "Poids Lourds",
        status: "Choc des Titans",
        gradient: "from-gold/20 via-gold/5 to-transparent",
    },
    {
        time: "17:00",
        fighter1: "Lac 2",
        fighter2: "Princ",
        category: "Poids Lourds",
        status: "Historique",
        gradient: "from-accent/20 via-accent/5 to-transparent",
    },
];

const UpcomingFightsSection = () => {
    return (
        <section id="combats" className="py-32 relative overflow-hidden bg-background">
            {/* Background Decorative Rings */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-white/5 rounded-full pointer-events-none" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-white/5 rounded-full pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-20"
                >
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        className="inline-block px-4 py-1.5 rounded-full glass border-white/10 text-[10px] font-bold uppercase tracking-[0.2em] text-gold mb-6"
                    >
                        L'Arène en ébullition
                    </motion.div>
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">
                        Prochains <span className="text-gradient-primary">Combats</span>
                    </h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto text-lg leading-relaxed">
                        Ne manquez aucune affiche. Anticipez les chocs et préparez vos défis dès maintenant sur Mbayar Bet.
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                    {upcomingFights.map((fight, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ y: -10 }}
                            className={`relative overflow-hidden rounded-[40px] glass border-white/10 p-8 group bg-gradient-to-br ${fight.gradient}`}
                        >
                            <div className="relative z-10 space-y-8">
                                {/* Header: Date & Status */}
                                <div className="flex justify-between items-start">
                                    <div className="space-y-1">
                                        <div className="flex items-center gap-2 text-gold text-xs font-bold uppercase tracking-wider">
                                            <Clock className="w-3.5 h-3.5" />
                                            {fight.time}
                                        </div>
                                    </div>
                                    <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] font-bold text-white uppercase tracking-tighter">
                                        {fight.status}
                                    </span>
                                </div>

                                {/* Main: Fighters */}
                                <div className="flex flex-col items-center gap-6 py-4">
                                    <div className="text-center space-y-2">
                                        <p className="text-2xl font-black text-white group-hover:text-gold transition-colors">{fight.fighter1}</p>
                                        <div className="flex items-center justify-center gap-4">
                                            <div className="h-px w-8 bg-white/20" />
                                            <span className="text-sm font-bold text-white/40 italic">VS</span>
                                            <div className="h-px w-8 bg-white/20" />
                                        </div>
                                        <p className="text-2xl font-black text-white group-hover:text-gold transition-colors">{fight.fighter2}</p>
                                    </div>

                                    <div className="flex items-center gap-2 px-4 py-1.5 rounded-xl bg-white/5 border border-white/5 text-[10px] font-bold text-muted-foreground">
                                        <Trophy className="w-3.5 h-3.5" />
                                        {fight.category}
                                    </div>
                                </div>

                                {/* Footer: CTA */}
                                <motion.a
                                    href="https://lambji.vercel.app/auth"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="w-full py-4 rounded-2xl bg-white text-black font-bold text-sm tracking-widest uppercase hover:bg-gold transition-colors shadow-lg block text-center"
                                >
                                    🚀 Parier maintenant
                                </motion.a>

                            </div>

                            {/* Decorative elements */}
                            <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-white/5 blur-[80px] rounded-full group-hover:bg-gold/10 transition-colors" />
                        </motion.div>
                    ))}
                </div>

                {/* View All Button */}
                <motion.div
                    className="mt-16 text-center"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                >
                    <button className="text-white/60 hover:text-white font-bold text-sm uppercase tracking-widest border-b border-white/10 hover:border-white transition-all pb-1">
                        Voir tout le calendrier
                    </button>
                </motion.div>
            </div>
        </section>
    );
};

export default UpcomingFightsSection;
