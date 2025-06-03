import { motion } from "framer-motion";
import { useEffect } from "react";
import AboutUsPage from "./AboutUs";
import ContactUs from "./ContactUs";
import { WhatsAppButton } from "./WhatsAppButton";
import Marquee from 'react-fast-marquee';

const HomePage = () => {
    useEffect(() => {
        document.title = "Vihan Gems | Build With Trust";
    }, []);

    const logos = [
        '/Img/GIA.png',
        '/Img/DIA.png',
        '/Img/GJE.png',
        '/Img/GLOBAL.png',
        '/Img/WDC.png',
        '/Img/FP.png',
        '/Img/BDB.png',
    ];

    const blogs = [
        {
            title: "Top 5 Benefits of Lab-Grown Diamonds",
            date: "June 2025",
            excerpt: "Discover why lab-grown diamonds are redefining the jewelry industry...",
        },
        {
            title: "Diamond Shapes & What They Say About You",
            date: "May 2025",
            excerpt: "Explore the personality behind each popular diamond shape...",
        },
    ];


    return (
        <div className="min-h-screen bg-gradient-to-b from-[#0f0c29] via-[#302b63] to-[#24243e] text-white font-sans overflow-x-hidden">
            {/* Header */}
            <motion.header
                initial={{ y: -80, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8 }}
                className="fixed top-0 left-0 w-full z-50 bg-black/60 backdrop-blur-md px-6 py-4 flex items-center justify-between shadow-md"
            >
                <div className="text-2xl font-bold tracking-wider text-white">
                    Vihan Gems
                </div>
                <nav className="space-x-6 text-sm uppercase tracking-wide">
                    <a href="#" className="hover:text-gray-300 transition">Home</a>
                    <a href="#" className="hover:text-gray-300 transition">About</a>
                    <a href="#" className="hover:text-gray-300 transition">Products</a>
                    <a href="#" className="hover:text-gray-300 transition">Contact</a>
                </nav>
            </motion.header>

            {/* Hero Section */}
            <section className="relative h-screen flex items-center justify-center text-center px-4 pt-24">
                <video
                    autoPlay
                    loop
                    muted
                    className="absolute top-0 left-0 w-full h-full object-cover opacity-20 z-0"
                >
                    <source src="/hero-video.mp4" type="video/mp4" />
                </video>
                <div className="z-10">
                    <motion.h1
                        initial={{ opacity: 0, y: 60 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                        className="text-5xl md:text-7xl font-bold tracking-wide text-white"
                    >
                        Timeless Brilliance
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.4 }}
                        className="mt-6 text-lg md:text-xl text-gray-200"
                    >
                        Discover the world of rare diamonds and exquisite craftsmanship
                    </motion.p>
                </div>
            </section>

            {/* Craftsmanship Section */}
            <section className="py-20 px-6 md:px-16">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
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
            <AboutUsPage />

            <section className="relative bg-gradient-to-r from-[#1a1f38] to-[#2e2f70] text-white py-20 px-6 overflow-hidden">
                {/* Decorative Background Element */}
                <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none bg-[url('/grid.svg')] bg-cover" />

                <div className="max-w-7xl mx-auto grid md:grid-cols-2 items-center gap-12 relative z-10">
                    {/* Diamond Video Grid */}
                    <div className="grid grid-cols-2 gap-4">
                        {[1, 2, 3, 4].map((i) => (
                            <motion.video
                                key={i}
                                src={`/videos/diamond${i}.mp4`} // Place videos here
                                alt="Video Don't support"
                                autoPlay
                                loop
                                muted
                                playsInline
                                whileHover={{ scale: 1.05 }}
                                className="rounded-xl shadow-xl border border-white/10"
                            />
                        ))}
                    </div>

                    {/* About Text */}
                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                            Why Choose <span className="text-purple-400">Vihan Gems</span> ?
                        </h2>
                        <p className="text-gray-300 mb-6 text-lg leading-relaxed">
                            At Vihan Gems, we blend innovation and sustainability to craft breathtaking diamonds. Our lab-grown gems
                            reflect ethical precision and timeless beauty—perfected with advanced tech and zero compromise on quality.
                        </p>
                        <button className="mt-4 px-6 py-3 border border-purple-400 text-purple-300 hover:border-white hover:text-white rounded-lg transition duration-300 bg-transparent">
                            Learn More
                        </button>
                    </motion.div>
                </div>
            </section>

            <ContactUs />

            {/* Animation  */}
            <div className="bg-white py-8 bg-gradient-to-r from-[#1a1f38] to-[#2e2f70]">
                <Marquee speed={50} gradient={false} pauseOnHover={true}>
                    {logos.map((logo, index) => (
                        <div key={index} className="mx-10">
                            <img
                                src={logo}
                                alt={`Client logo ${index}`}
                                className="h-24"
                            />
                        </div>
                    ))}
                </Marquee>

                {/* <BlogSection /> */}
                <section className="py-16 px-6">
                    <h2 className="text-4xl font-bold text-center mb-10">Diamond Tips & News</h2>
                    <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                        {blogs.map((post, i) => (
                            <div key={i} className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition">
                                <h3 className="text-2xl text-black font-bold mb-2">{post.title}</h3>
                                <p className="text-sm text-gray-500 mb-3">{post.date}</p>
                                <p className="text-gray-700">{post.excerpt}</p>
                            </div>
                        ))}
                    </div>
                </section>
            </div>

            <WhatsAppButton />


            {/* Footer */}
            <motion.footer
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
                className="bg-black border-t border-gray-800 py-10 px-6 text-center"
            >
                <div className="text-sm text-gray-400">
                    © {new Date().getFullYear()} VihanGems. All rights reserved.
                </div>
                <div className="mt-2 space-x-4">
                    <a href="#" className="hover:text-white transition">Privacy</a>
                    <a href="#" className="hover:text-white transition">Terms</a>
                    <a href="#" className="hover:text-white transition">Contact</a>
                </div>
            </motion.footer>
        </div >
    );
}


export default HomePage;