import { motion } from "framer-motion";

export default function AboutUsPage() {
    return (
        <div className="min-h-screen bg-gradient-to-b from-[#0f0c29] via-[#302b63] to-[#24243e] text-white font-sans overflow-x-hidden px-6 py-20">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="max-w-5xl mx-auto text-center"
            >
                <h1 className="text-5xl font-bold mb-6">About Us</h1>
                <p className="text-lg text-gray-300 mb-12">
                    At DiamondCo, our mission is to craft timeless beauty through ethical sourcing and world-class craftsmanship. With decades of experience, we continue to set new standards of excellence in the diamond industry.
                </p>
            </motion.div>

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
        </div>
    );
}
