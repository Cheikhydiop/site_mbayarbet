import { motion } from "framer-motion";
import { Users, ShieldCheck, Banknote, Zap } from "lucide-react";

const stats = [
    {
        icon: Users,
        label: "Parieurs Actifs",
        value: "25k+",
        description: "Une communauté passionnée et grandissante",
        color: "text-gold",
    },
    {
        icon: Banknote,
        label: "Gains Distribués",
        value: "1.2B",
        description: "En FCFA, payés instantanément via Mobile Money",
        color: "text-accent",
    },
    {
        icon: ShieldCheck,
        label: "Sécurité Escrow",
        value: "100%",
        description: "Fonds protégés jusqu'à la fin du combat",
        color: "text-primary",
    },
    {
        icon: Zap,
        label: "Temps de Retrait",
        value: "< 5min",
        description: "La rapidité est notre marque de fabrique",
        color: "text-white",
    },
];

const StatsSection = () => {
    return (
        <section className="py-24 relative overflow-hidden bg-background">
            <div className="container mx-auto px-6">
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="relative p-8 rounded-[32px] glass border-white/5 group hover:border-white/10 transition-all"
                        >
                            <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity">
                                <stat.icon size={64} />
                            </div>

                            <div className="space-y-4">
                                <div className={`w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center ${stat.color} border border-white/10 group-hover:scale-110 transition-transform`}>
                                    <stat.icon size={24} />
                                </div>

                                <div className="space-y-1">
                                    <p className="text-4xl font-black text-white">{stat.value}</p>
                                    <p className="text-sm font-bold uppercase tracking-widest text-muted-foreground">{stat.label}</p>
                                </div>

                                <p className="text-xs text-muted-foreground/80 leading-relaxed">
                                    {stat.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default StatsSection;
