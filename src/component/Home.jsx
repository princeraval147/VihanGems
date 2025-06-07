import React, { Suspense, useEffect } from "react";
import { motion } from "framer-motion";
import { NavLink, useLocation } from 'react-router-dom';
import ContactUs from "./ContactUs";
import { WhatsAppButton } from "./WhatsAppButton";
import Marquee from 'react-fast-marquee';
import HeroSection from "./HeroSection";
import WhyChooseUs from "./WhyChooseUs";
import EventsNews from "./EventNews";
// import GlobalPresenceMap from "./GlobalMap";
const GlobalPresenceMap = React.lazy(() => import('./GlobalMap'));

const HomePage = () => {

    const location = useLocation();
    useEffect(() => {
        if (location.hash) {
            const target = document.querySelector(location.hash);
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        }
    }, [location]);


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
        <>
            {/* <div className="min-h-screen bg-gradient-to-b from-[#0f0c29] via-[#302b63] to-[#24243e] text-white font-sans overflow-x-hidden"> */}
            {/* <div className="min-h-screen bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#334155] text-white font-sans overflow-x-hidden"> */}
            {/* <div className="min-h-screen bg-gradient-to-br from-[#2e1065] via-[#3b0764] to-[#1e1b4b] text-white font-sans overflow-x-hidden"> */}
            {/* <div className="min-h-screen bg-gradient-to-br from-[#000000] via-[#0f172a] to-[#1e40af] text-white font-sans overflow-x-hidden"> */}
            {/* <div className="min-h-screen bg-gradient-to-br from-[#0F172A] to-[#F8FAFC] text-[#F8FAFC] font-sans overflow-x-hidden"> */}
            {/* <div className="min-h-screen bg-gradient-to-br from-[#0F172A] via-[#1E3A8A] to-[#F8FAFC] text-white font-sans overflow-x-hidden"> */}

            {/* <div style={{ fontFamily: "Playfair Display" }} id="home" className="min-h-screen bg-gradient-to-br from-[#0F172A] via-[#374a58] to-[#F8FAFC] text-white font-sans overflow-x-hidden"> */}
            {/* <div className="absolute inset-0 bg-black/50 z-0" /> */}

            <div style={{ fontFamily: "Playfair Display" }} id="home" className="min-h-screen bg-gradient-to-br from-[#0F172A] to-[#1e2a38] text-white font-sans overflow-x-hidden">

                <WhatsAppButton />
                <HeroSection />

                <section id="products" className="relative text-white py-20 px-6 overflow-hidden">
                    {/* Decorative Background Element */}

                    <div className="max-w-7xl mx-auto grid md:grid-cols-2 items-center gap-12 relative z-10">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 px-4 max-w-5xl mx-auto">
                            {[1, 2, 3, 4].map((i) => (
                                <motion.div
                                    key={i}
                                    whileHover={{ scale: 1.03 }}
                                    className="rounded-xl overflow-hidden shadow-lg border border-white/10"
                                >
                                    <img
                                        src={`/Img/diamond_${i}.jpg`}
                                        alt={`Diamond frame ${i}`}
                                        className="w-full h-44 object-cover"
                                    />
                                </motion.div>
                            ))}
                        </div>

                        <div>
                            <motion.div
                                initial={{ opacity: 0, x: 40 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8 }}
                            >
                                <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                                    About <span className="text-purple-400">Vihan Gems</span> Diamond
                                </h2>
                                <p className="text-gray-300 mb-6 text-lg leading-relaxed">
                                    At Vihan Gems, we blend innovation and sustainability to craft breathtaking diamonds. Our lab-grown gems
                                    reflect ethical precision and timeless beauty—perfected with advanced tech and zero compromise on quality.
                                </p>
                                <NavLink to='/diamond-gallery' className="mt-4 px-6 py-3 border border-purple-400 text-purple-300 hover:border-white hover:text-white rounded-lg transition duration-300 bg-transparent">
                                    Read More
                                </NavLink>
                            </motion.div>
                        </div>
                    </div>
                </section>

                <div id="contact">
                    <ContactUs />
                </div>

                {/* Animation  */}
                <div className="py-8">
                    <h1 className="text-center font-bold text-2xl sm:text-3xl text-white mb-5">Origins</h1>
                    <Marquee speed={50} gradient={false} pauseOnHover={true}>
                        {logos.map((logo, index) => (
                            <div
                                key={index}
                                className="mx-4 sm:mx-8 md:mx-10 flex items-center justify-center"
                            >
                                <img
                                    src={logo}
                                    alt={`Client logo ${index}`}
                                    className="h-16 sm:h-20 md:h-24 object-contain max-w-[120px] sm:max-w-[160px] md:max-w-[200px]"
                                />
                            </div>
                        ))}
                    </Marquee>
                </div>

                <WhyChooseUs />


                <EventsNews />

                {/* <GlobalPresenceMap /> */}
                <Suspense fallback={<div>Loading map...</div>}>
                    <GlobalPresenceMap />
                </Suspense>



            </div >
        </>

    );
}


export default HomePage;