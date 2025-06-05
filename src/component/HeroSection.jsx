import { motion } from "framer-motion";
import SparkleParticles from "./SparkleParticles";
import { NavLink } from "react-router-dom";

export default function HeroSection() {
    return (
        <div className="relative min-h-screen flex items-center justify-center text-white overflow-hidden px-4 sm:px-6 lg:px-8">
            {/* Background overlay */}
            <div className="absolute inset-0 bg-black/50 z-0" />

            {/* Sparkle Particles */}
            <div className="absolute inset-0 z-10 pointer-events-none">
                <SparkleParticles />
            </div>

            {/* Content */}
            <motion.div
                className="relative z-20 max-w-3xl text-center"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
            >
                <motion.h1
                    className="text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-wide mb-6 leading-tight"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                >
                    Timeless Brilliance by{" "}
                    <span className="text-blue-400">Vihan Gems</span>
                </motion.h1>

                <motion.p
                    className="text-xl sm:text-2xl max-w-xl mx-auto text-gray-300 mb-10"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6 }}
                >
                    Discover precision-crafted diamonds that shine forever.
                </motion.p>

                {/* Buttons */}
                <motion.div
                    className="flex flex-wrap justify-center gap-6"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.9 }}
                >
                    <button
                        className="px-8 py-3 rounded-full border-2 border-white text-white uppercase tracking-wide font-semibold 
                       hover:border-blue-500 hover:text-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 
                       transition-colors duration-300 cursor-pointer shadow-md"
                    >
                        View Collection
                    </button>

                    <NavLink
                        to='/about'
                        className="px-8 py-3 rounded-full border-2 border-blue-500 text-blue-500 uppercase tracking-wide font-semibold
                       hover:bg-blue-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-700
                       transition-colors duration-300 cursor-pointer shadow-md"

                    >
                        Learn More
                    </NavLink>
                </motion.div>
            </motion.div>
        </div>
    );
}

