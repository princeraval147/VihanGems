import React, { useEffect } from 'react';
import { motion } from "framer-motion";
import { Eye, Target } from "lucide-react"; // Or use your own SVGs or image icons
import 'react-vertical-timeline-component/style.min.css';
import SparkleParticles from './SparkleParticles';
import { WhatsAppButton } from './WhatsAppButton';

export default function AboutUsPage() {

    useEffect(() => {
        document.title = "Vihan Gems | About Us";
    }, []);




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
    ];


    return (
        <>
            {/* // <div className="min-h-screen bg-gradient-to-br from-[#0F172A] via-[#374a58] to-[#F8FAFC] text-white font-sans overflow-x-hidden px-6 py-20"> */}
            <div className="min-h-screen  bg-gradient-to-br from-[#0F172A] to-[#1e2a38] text-white font-sans overflow-x-hidden px-6 py-20">

                <div className="fixed inset-0 z-0 pointer-events-none">
                    <SparkleParticles />
                </div>

                <WhatsAppButton />
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                    className="max-w-6xl mx-auto"
                >
                    <h2 className="text-3xl font-semibold mb-10 text-center">Our Team</h2>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
                        {[
                            { name: "Bhavin Shah", role: "Founder & Director", img: "Images/BhavinShah.jpg" },
                            { name: "Hitesh Gopani", role: "Head Of Purchase Rough Diamonds", img: "Images/hitesh.jpg" },
                            { name: "Anil Gopani", role: "Head Of Manufacturing", img: "Images/AnilGopani.jpg" },
                            { name: "Divy Shah", role: "Head Of Global Sales", img: "Images/Divy.jpg" },
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

                <section className="bg-[#0f172a] text-white px-4 sm:px-6 md:px-20 py-12 md:py-20" id="about">
                    <motion.h2
                        className="text-3xl md:text-4xl font-bold mb-6 text-center"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        About Us
                    </motion.h2>

                    <motion.div
                        className="max-w-4xl mx-auto text-base md:text-lg leading-relaxed text-gray-300 space-y-3"
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <p>
                            Established in 2018,  <strong>Vihan Gems</strong> is one of the largest manufacturers and global
                            leaders in Lab color diamonds, with a unique specialty.
                        </p>
                        <p>
                            A commitment to excellence and innovation,
                            we specialize in crafting and sourcing some of the most vibrant and rare diamonds on the
                            market—ranging from vivid yellows and elegant pinks to intense blues and greens.
                            with a unique specialty: the ultra-rare and captivating Red diamonds.
                        </p>
                        <p>
                            As one of the largest manufacturers in the industry, we combine state-of-the-art technology
                            with skilled craftsmanship to ensure each diamond meets the highest standards of beauty and
                            quality. Our diamonds are ethically sourced, IGI & GIA certified, and tailored to meet the
                            unique needs of jewelers, collectors, and luxury buyers worldwide.
                        </p>
                        <p>
                            At Vihan Gems, we don’t just sell diamonds—we bring color, passion, and timeless elegance to life.
                        </p>

                    </motion.div>
                </section>

                <section className="bg-[#0f172a] text-white py-20 px-4" id="vision-mission">
                    <div className="text-center mb-12">
                        <motion.h2
                            className="text-3xl md:text-5xl font-bold text-white inline-block border-b-4 border-blue-500 pb-2"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            Vision and Mission
                        </motion.h2>
                    </div>

                    {/* <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto"> */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 max-w-4xl lg:max-w-6xl mx-auto px-2">
                        {/* Vision */}
                        <motion.div
                            // className="bg-white/5 border border-white/10 backdrop-blur-lg rounded-xl p-8 shadow-lg"
                            className="bg-white/5 border border-white/10 backdrop-blur-lg rounded-xl p-2 md:p-8 shadow-lg"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            <div className="flex items-center justify-center mb-4">
                                <Eye size={40} className="text-blue-400" />
                            </div>
                            <h3 className="text-2xl font-semibold text-white text-center mb-2">Vision</h3>
                            <p className="text-gray-300 text-center leading-relaxed">
                                To be the world’s leading name in Lab color diamonds, celebrated for our commitment to excellence, ethical sourcing, and unmatched craftsmanship.
                            </p>
                            <p className="text-gray-300 text-center leading-relaxed">
                                We strive to bring the rare beauty of colored diamonds—from radiant yellows and elegant pinks to the exceptionally rare reds and blues—to the global stage. Our vision is to inspire timeless elegance and lasting value through every gem we create, serving jewelers, collectors, and luxury clients worldwide with integrity and innovation.
                            </p>
                        </motion.div>

                        {/* Mission */}
                        <motion.div
                            // className="bg-white/5 border border-white/10 backdrop-blur-lg rounded-xl p-8 shadow-lg"
                            className="bg-white/5 border border-white/10 backdrop-blur-lg rounded-xl p-2 md:p-8 shadow-lg"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                        >
                            <div className="flex items-center justify-center mb-4">
                                <Target size={40} className="text-blue-400" />
                            </div>
                            <h3 className="text-2xl font-semibold text-white text-center mb-2">Mission</h3>
                            <p className="text-gray-300 text-center leading-relaxed">
                                Our mission is to source, manufacture, and deliver the finest Lab color diamonds with integrity, precision, and passion. We are committed to:
                            </p>
                            <ul className="text-gray-300 list-disc list-inside mt-4">
                                <li>
                                    Offering a diverse spectrum of certified color diamonds, including rare reds, vibrant yellows,
                                    elegant pinks, and deep blues.
                                </li>
                                <li>
                                    Maintaining the highest standards of ethical sourcing, transparency, and environmental
                                    responsibility.
                                </li>
                                <li>
                                    Supporting our global clients—from jewelers to collectors—with exceptional quality,
                                    competitive pricing, and personalized service.
                                </li>
                                <li>
                                    Innovating in diamond cutting and design to enhance the natural brilliance and uniqueness
                                    of every stone we offer.
                                </li>
                            </ul>
                        </motion.div>
                    </div>
                </section>

                <div className="my-16 border-t border-white/10" />

                {/* Certificates */}
                {/* <div className="min-h-screen text-white px-6 py-16">
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
                                        <p className="text-gray-200 max-w-xl text-sm mb-4">{cert.desc}</p>
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
                    </div >
                </div > */}

                <div className="min-h-screen text-white px-4 sm:px-6 py-16">
                    <div className="max-w-6xl mx-auto">
                        <motion.h1
                            className="text-3xl md:text-4xl font-bold text-center mb-6"
                            initial={{ opacity: 0, y: -30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            Diamond Industry Certifications
                        </motion.h1>

                        <motion.p
                            className="text-center text-base md:text-lg mb-12 text-gray-300 px-2"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.2 }}
                        >
                            Our diamonds are certified by globally recognized authorities to ensure excellence, authenticity, and ethical standards.
                        </motion.p>

                        <div className="flex flex-col gap-8">
                            {certifications.map((cert, idx) => (
                                <motion.div
                                    key={idx}
                                    className="flex flex-col lg:flex-row items-center bg-white/10 p-6 sm:p-8 rounded-2xl shadow-xl backdrop-blur-md hover:scale-[1.02] transition-transform duration-300"
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: idx * 0.2 }}
                                    viewport={{ once: true }}
                                >
                                    {/* Image Section */}
                                    <div className="w-full lg:w-1/3 flex justify-center items-center mb-6 lg:mb-0 px-4">
                                        <img
                                            src={cert.image}
                                            alt={cert.title}
                                            className="w-full max-w-[220px] max-h-32 object-contain"
                                        />
                                    </div>

                                    {/* Text Section */}
                                    <div className="flex-1 text-center lg:text-left">
                                        <h2 className="text-xl md:text-2xl font-semibold mb-3">{cert.title}</h2>
                                        <p className="text-gray-200 text-sm mb-4 px-2 lg:px-0">{cert.desc}</p>
                                        <a
                                            href={cert.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-block border border-white text-white px-4 py-2 rounded-full hover:bg-white/20 transition-all duration-300"
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
        </>
    );
}
