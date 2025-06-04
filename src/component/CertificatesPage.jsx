import { motion } from "framer-motion";
import { FaGem } from "react-icons/fa";

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

export default function CertificatesPage() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-[#0f172a] to-[#1e3a8a] text-white px-6 py-16">
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
                            <div className="w-[350px] h-[200px] flex justify-center">
                                <img src={cert.image} alt={cert.title} className="h-48 object-contain" />
                            </div>

                            <div className="flex-1 text-center lg:text-left mb-4 lg:mb-0">
                                <h1 className="text-[30px] font-semibold mb-2">{cert.title}</h1>
                                <p className="text-gray-200 w-4/5 text-sm mb-4">{cert.desc}</p>
                                <a
                                    href={cert.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-block border border-white text-white px-4 py-2 rounded-full hover:bg-white hover:text-black transition-all duration-300"
                                >
                                    Read More →
                                </a>
                            </div>

                        </motion.div>
                    ))}
                </div>


            </div>
        </div>
    );
}
