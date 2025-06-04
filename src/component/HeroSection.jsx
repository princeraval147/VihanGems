import { motion } from "framer-motion";
import SparkleParticles from "./SparkleParticles";

export default function HeroSection() {

    return (
        <div className="relative min-h-screen flex items-center justify-center text-white overflow-hidden">
            <SparkleParticles />

            {/* Content */}
            <motion.div
                className="text-center px-6 z-10"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
            >
                <motion.h1
                    className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                >
                    Timeless Brilliance by <span className="text-blue-300">Vihan Gems</span>
                </motion.h1>
                <motion.p
                    className="text-lg max-w-xl mx-auto text-gray-200"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6 }}
                >
                    Discover precision-crafted diamonds that shine forever.
                </motion.p>

                {/* Buttons */}
                <motion.div
                    className="mt-8 flex justify-center gap-6"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.9 }}
                >
                    <button className="px-6 py-3 border border-white hover:border-blue-400 hover:text-blue-300 rounded-full transition duration-300">
                        View Collection
                    </button>

                    <button className="border border-[#3B82F6] text-[#3B82F6] hover:bg-[#1E3A8A] hover:text-white transition duration-300 px-6 py-2 rounded-full">
                        Learn More
                    </button>
                    <button className="px-6 py-3 border border-white hover:border-green-400 hover:text-green-300 rounded-full transition duration-300">
                        Explore
                    </button>
                </motion.div>
            </motion.div>
        </div>
    );
}
