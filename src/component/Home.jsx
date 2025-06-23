import React, { Suspense, useEffect } from "react";
import { motion } from "framer-motion";
import { NavLink, useLocation } from 'react-router-dom';
import ContactUs from "./ContactUs";
import { WhatsAppButton } from "./WhatsAppButton";
import Marquee from 'react-fast-marquee';
import HeroSection from "./HeroSection";
import WhyChooseUs from "./WhyChooseUs";
import EventDetail from "./EventDetail";
// import GlobalPresenceMap from "./GlobalMap";
const GlobalPresenceMap = React.lazy(() => import('./GlobalMap'));
import {
    VerticalTimeline,
    VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import { GiDiamondHard, GiMineTruck, GiCutDiamond } from 'react-icons/gi';
import { MdLocalShipping, MdCheckCircle } from 'react-icons/md';
import SparkleParticles from "./SparkleParticles";
import ExportGlobe from "./ExportGlobe";

const HomePage = () => {

    const timelineItems = [
        {
            title: 'Growing the Rough Diamond',
            date: 'Step 1',
            description: 'Grown by Science, Rooted in Nature.',
            icon: <GiMineTruck />,
            bgColor: '#1e3a8a',
        },
        {
            title: 'Cutting & Polishing',
            date: 'Step 2',
            description: 'Master artisans shape and polish each diamond to perfection.',
            icon: <GiCutDiamond />,
            bgColor: '#1e40af',
        },
        {
            title: 'Grading & Certification',
            date: 'Step 3',
            description: 'Certified by trusted labs like GIA, IGI, and HRD.',
            icon: <GiDiamondHard />,
            bgColor: '#3b82f6',
        },
        {
            title: 'Global Logistics',
            date: 'Step 4',
            description: 'Secure transport through vetted global supply chains.',
            icon: <MdLocalShipping />,
            bgColor: '#0ea5e9',
        },
        {
            title: 'Delivered to Client',
            date: 'Step 5',
            description: 'Arrives in premium packaging with lifetime authenticity.',
            icon: <MdCheckCircle />,
            bgColor: '#10b981',
        },
    ];



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
        document.title = "Vihan Gems | Build on Trust";
    }, []);




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
            <div className="fixed inset-0 z-0 pointer-events-none">
                <SparkleParticles />
            </div>
            <div style={{ fontFamily: "Playfair Display" }} id="home" className="min-h-screen bg-gradient-to-br from-[#0F172A] to-[#1e2a38] text-white font-sans overflow-x-hidden">

                <WhatsAppButton />
                <HeroSection />

                {/* Diamond Journey  */}
                <h2 className="text-4xl font-bold text-center mt-24 mb-12">The Journey of a Diamond</h2>
                <VerticalTimeline lineColor="#1e40af">
                    {timelineItems.map((item, idx) => (
                        <VerticalTimelineElement
                            key={idx}
                            className="vertical-timeline-element--work"
                            contentStyle={{ background: item.bgColor, color: '#fff' }}
                            contentArrowStyle={{ borderRight: '7px solid  #1e3a8a' }}
                            date={item.date}
                            iconStyle={{ background: item.bgColor, color: '#fff' }}
                            icon={item.icon}
                        >
                            <h3 className="vertical-timeline-element-title text-xl font-semibold">{item.title}</h3>
                            <p>{item.description}</p>
                        </VerticalTimelineElement>
                    ))}
                </VerticalTimeline>

                <div className="my-16 border-t border-white/10" />




                <section id="products" className="relative text-white py-20 px-6 overflow-hidden">
                    {/* Decorative Background Element */}

                    <div className="max-w-7xl mx-auto grid md:grid-cols-2 items-center gap-12 relative z-10">
                        <div className="grid grid-cols-2 sm:grid-cols-2 gap-4 px-4 max-w-5xl mx-auto">
                            {[1, 2, 3, 4].map((i) => (
                                <motion.div
                                    key={i}
                                    whileHover={{ scale: 1.03 }}
                                    className="rounded-xl overflow-hidden shadow-lg border border-white/10"
                                >
                                    <img
                                        src={`/Img/diamond_${i}.jpg`}
                                        alt={`Diamond frame ${i}`}
                                        className="w-44 object-cover"
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
                                    Vihan Gems specializes in crafting certified, high-quality lab-grown diamonds using advanced
                                    technology and sustainable practices. As a leading manufacturer, we offer a wide range of Lab Grown Diamonds
                                    in various shapes, sizes, and clarities—perfectly suited for your unique designs. With precision cutting and
                                    in-house expertise, we ensure brilliance, consistency, and exceptional value. source the finest lab-created diamonds
                                    directly from the experts.

                                </p>
                                <NavLink to='/diamond-gallery' className="mt-4 px-6 py-3 border border-purple-400 text-purple-300 hover:border-white hover:text-white rounded-lg transition duration-300 bg-transparent">
                                    View More
                                </NavLink>
                            </motion.div>
                        </div>
                    </div>
                </section>

                <div id="contact">
                    <ContactUs />
                </div>

                {/* Animation  */}
                {/* <div className="py-8">
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
                </div> */}

                <WhyChooseUs />


                {/* <EventsNews /> */}
                <EventDetail />

                {/* <GlobalPresenceMap /> */}
                {/* <Suspense fallback={<div>Loading map...</div>}>
                    <GlobalPresenceMap />
                </Suspense> */}

                <ExportGlobe />



            </div >
        </>

    );
}


export default HomePage;