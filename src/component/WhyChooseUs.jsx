import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

const stats = [
    { value: 10000, label: "Carats Sold", suffix: "+" },
    { value: 25, label: "Global Clients", suffix: "+" },
    { value: 24, label: "Hour Response Guarantee", suffix: "h" },
];

const AnimatedCounter = ({ target, suffix }) => {
    const base = useMotionValue(0);
    const smooth = useSpring(base, {
        stiffness: 100,
        damping: 20,
    });

    const [display, setDisplay] = useState(0);

    useEffect(() => {
        base.set(target);
        const unsubscribe = smooth.on("change", (latest) => {
            setDisplay(Math.floor(latest));
        });

        return () => unsubscribe();
    }, [target]);

    return (
        <span className="text-4xl font-bold text-white">
            {display.toLocaleString()}
            {suffix}
        </span>
    );
};

const WhyChooseUs = () => {
    return (
        <section className="bg-gradient-to-br from-[#0f172a] to-[#1e293b] py-20 text-center text-white" id="why-choose-us">
            <motion.h2
                className="text-3xl md:text-4xl font-bold mb-10"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
            >
                Why Choose Vihan Gems
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-5xl mx-auto px-6">
                {stats.map((item, idx) => (
                    <motion.div
                        key={idx}
                        className="bg-white/10 p-8 rounded-2xl backdrop-blur-md shadow-xl"
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: idx * 0.2 }}
                        viewport={{ once: true }}
                    >
                        <AnimatedCounter target={item.value} suffix={item.suffix} />
                        <p className="text-lg mt-2 text-gray-300">{item.label}</p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default WhyChooseUs;
