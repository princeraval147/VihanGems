import { motion } from "framer-motion";
import SparkleParticles from "./SparkleParticles";
import { NavLink } from "react-router-dom";

export default function HeroSection() {
    return (
        <>
            {/* Sparkle Particles */}
            <div className="absolute inset-0 z-10 pointer-events-none">
                <SparkleParticles />
            </div>

            {/* Background Video */}
            <video
                className="absolute inset-0 w-full h-full object-cover z-0"
                autoPlay
                loop
                muted
                playsInline
            >
                <source src="/videos/CompanyVideo.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>

            {/* Gradient Overlay */}
            <div className="absolute inset-0 z-10 bg-gradient-to-b from-[#0e0f1d]/95 via-[#0e0f1d]/80 to-transparent" />
            {/* <div className="absolute inset-0 z-10 bg-gradient-to-b from-[#0e0f1d]/95 via-[#0e0f1d]/90 to-[#0e0f1d]/60 sm:to-transparent" /> */}
            {/* <div className="absolute inset-0 z-10 bg-gradient-to-b from-[#0e0f1d]/90 via-[#0e0f1d]/70 to-transparent" /> */}

            <div className="relative min-h-screen flex items-center justify-center text-white overflow-hidden px-4 sm:px-6 lg:px-8 z-30">
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
                        {/* <span className="text-blue-400">Vihan Gems</span> */}
                        <span className="drop-shadow-[0_2px_10px_rgba(0,0,0,0.4)]">Vihan Gems</span>
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
                        <NavLink
                            to='/diamond-gallery'
                            className="px-8 py-3 rounded-full border-2 border-white text-white uppercase tracking-wide font-semibold 
                       hover:border-blue-500 hover:text-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 
                       transition-colors duration-300 cursor-pointer shadow-md"
                        >
                            View Collection
                        </NavLink>

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

            <section className="py-20 px-6 md:px-16">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -40 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                    className="max-w-6xl mx-auto text-center"
                >
                    <h2 className="text-4xl font-semibold mb-6 text-white">Our Craftsmanship</h2>
                    <p className="text-lg leading-relaxed text-gray-300 mb-6">
                        Each diamond we cut tells a story of elegance and meticulous attention to detail. We
                        combine advanced technology with expert artisans to create masterpieces that last
                        generations.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
                        <div className="bg-white/5 backdrop-blur-lg p-6 rounded-xl border border-white/10">
                            <h3 className="text-xl font-semibold mb-2">Precision Cutting</h3>
                            <p className="text-sm text-gray-300">High-precision tools for perfect symmetry and brilliance.</p>
                        </div>
                        <div className="bg-white/5 backdrop-blur-lg p-6 rounded-xl border border-white/10">
                            <h3 className="text-xl font-semibold mb-2">Sustainability</h3>
                            <p className="text-sm text-gray-300">Ethical sourcing and eco-friendly manufacturing practices.</p>
                        </div>
                        <div className="bg-white/5 backdrop-blur-lg p-6 rounded-xl border border-white/10">
                            <h3 className="text-xl font-semibold mb-2">Global Reach</h3>
                            <p className="text-sm text-gray-300">Trusted by customers in over 50 countries.</p>
                        </div>
                    </div>
                </motion.div>
            </section>
        </>
    );
}

