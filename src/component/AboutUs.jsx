import React, { useEffect } from 'react';
import { motion } from "framer-motion";
import {
    VerticalTimeline,
    VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import { GiDiamondHard, GiMineTruck, GiCutDiamond } from 'react-icons/gi';
import { MdLocalShipping, MdCheckCircle } from 'react-icons/md';
import 'react-vertical-timeline-component/style.min.css';

export default function AboutUsPage() {


    useEffect(() => {
        document.title = "Vihan Gems | About Us";
    }, []);


    const timelineItems = [
        {
            title: 'Mining the Rough Diamond',
            date: 'Step 1',
            description: 'Sustainably sourced from ethical mines with full traceability.',
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


    const certifications = [
        {
            title: "GIA – Gemological Institute of America",
            desc: "The world’s foremost authority in gemology. GIA-certified diamonds undergo rigorous testing to ensure quality, authenticity, and grading standards.",
            image: "/Img/GIA.png",
            link: "https://www.gia.edu/"
        },
        {
            title: "IGI – International Gemological Institute",
            desc: "A globally recognized certification lab known for reliable diamond grading. IGI offers affordable and precise assessments.",
            image: "/Img/IGI.png",
            link: "https://www.igi.org/"
        },
        {
            title: "HRD Antwerp",
            desc: "Europe’s leading authority in diamond certification. HRD provides thorough lab reports with an emphasis on transparency and ethics.",
            image: "/Img/HRD.png",
            link: "https://hrdantwerp.com/"
        },
        {
            title: "iTraceit",
            desc: "iTraceiT maintains and provides blockchain and QR-code-based software solutions. These cutting-edge tools enable us to track and trace the journey of our diamonds through every step of the supply chain, from the source to the end consumer. This advanced technology guarantees the authenticity, quality, and provenance of our diamonds.",
            image: "/Img/iTRACE.png",
            link: "https://itraceit.io/"
        },
        {
            title: "Tracr",
            desc: "Tracr utilises several technologies to generate an exclusive, tamper-proof digital fingerprint for individual diamonds. This enables comprehensive diamond tracing, from its origin to every stage of manufacturing, until it reaches the end-consumer. Each step of the process is meticulously recorded, ensuring complete transparency throughout the journey.",
            image: "/Img/TRA.png",
            link: "https://www.tracr.com/"
        },
        {
            title: "Natural Diamond Council",
            desc: "We promote the exceptional qualities of natural diamonds by joining forces with the Natural Diamond Council. We aim to amplify the positive impact of natural diamonds throughout the value chain. Through these efforts, our customers will gain a deeper understanding of the ethical sourcing practices, social responsibility initiatives, and environmental stewardship associated with natural diamonds.",
            image: "/Img/NDC.png",
            link: "https://www.naturaldiamonds.com/in/"
        },
        {
            title: "FOREVERMARK",
            desc: "De Beers Forevermark grading certificates from De Beers Group industry Services provide more in-depth information on the diamond's cut, clarity, color, and caratage. The information on a De Beers Forevermark grading certificate is evaluated using world-class proprietary diamond processes and technology in the De Beers Group Institute of Diamonds in Belgium, UK, or India.",
            image: "/Img/FOREVER.png",
            link: "https://www.forevermark.com/en-in/"
        },
        {
            title: "CANADA MARK",
            desc: "CANADAMARK, an origin hallmark, represents diamonds genuinely mined in Canada's North Western territories. It ensures that the diamonds are authentic, fully trusted, and can be traced back to their source. By guaranteeing the integrity of the supply chain, CANADAMARK provides consumers with confidence in the origin and history of their polished diamonds.",
            image: "/Img/CANADA.png",
            link: "https://canadamark.com/"
        },
    ];


    return (
        <div className="min-h-screen bg-gradient-to-br from-[#0F172A] via-[#374a58] to-[#F8FAFC] text-white font-sans overflow-x-hidden px-6 py-20">

            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
                className="max-w-6xl mx-auto"
            >
                <h2 className="text-3xl font-semibold mb-10 text-center">Our Team</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                    {[
                        { name: "Ravi Mehta", role: "CEO & Founder", img: "/team1.jpg" },
                        { name: "Anjali Patel", role: "Creative Director", img: "/team2.jpg" },
                        { name: "Kunal Shah", role: "Head of Operations", img: "/team3.jpg" },
                    ].map((member, index) => (
                        <motion.div
                            key={index}
                            whileHover={{ scale: 1.05 }}
                            className="bg-white/5 backdrop-blur-lg p-6 rounded-xl text-center border border-white/10"
                        >
                            <img
                                src={member.img}
                                alt={member.name}
                                className="w-32 h-32 mx-auto rounded-full mb-4 object-cover border-4 border-white/20"
                            />
                            <h3 className="text-xl font-semibold text-white">{member.name}</h3>
                            <p className="text-sm text-gray-300">{member.role}</p>
                        </motion.div>
                    ))}
                </div>
            </motion.div>

            <div className="my-16 border-t border-white/10" />

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

            {/* Certificates */}
            <div className="min-h-screen text-white px-6 py-16">
                <div className="max-w-6xl mx-auto">
                    <motion.h1
                        className="text-4xl font-bold text-center mb-8"
                        initial={{ opacity: 0, y: -30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        Diamond Industry Certifications
                    </motion.h1>
                    <motion.p
                        className="text-center text-lg mb-16 text-gray-300"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                    >
                        Our diamonds are certified by globally recognized authorities to ensure excellence, authenticity, and ethical standards.
                    </motion.p>


                    <div className="flex flex-col gap-5">
                        {certifications.map((cert, idx) => (
                            <motion.div
                                key={idx}
                                className="flex flex-col lg:flex-row items-center bg-white/10 p-6 rounded-2xl shadow-xl backdrop-blur-md hover:scale-105 transition-transform"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: idx * 0.2 }}
                                viewport={{ once: true }}
                            >
                                <div className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg flex justify-center items-center">
                                    <img src={cert.image} alt={cert.title} className="w-full max-h-32 object-contain" />
                                </div>

                                <div className="flex-1 text-center lg:text-left mb-4 lg:mb-0">
                                    <h1 className="text-[30px] font-semibold mb-2">{cert.title}</h1>
                                    <p className="text-gray-200 text-sm mb-4 max-w-xl mx-auto lg:mx-0">{cert.desc}</p>
                                    {/* <p className="text-gray-200 max-w-xl text-sm mb-4">{cert.desc}</p> */}
                                    <a
                                        href={cert.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-block border border-white text-white px-4 py-2 rounded-full hover:bg-white/20 hover:text-white transition-all duration-300"
                                    >
                                        Read More →
                                    </a>
                                </div>

                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>

        </div >
    );
}
