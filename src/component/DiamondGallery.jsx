import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import SparkleParticles from "./SparkleParticles";
import { WhatsAppButton } from "./WhatsAppButton";

const diamondProducts = [
    {
        name: "Radiant Spark",
        shape: "Round Brilliant",
        carat: "1.5 ct",
        color: "D",
        clarity: "VVS1",
        image: "/Img/diamond_1.jpg",
    },
    {
        name: "Eternal Flame",
        shape: "Emerald Cut",
        carat: "2.0 ct",
        color: "E",
        clarity: "VS1",
        image: "https://images.stockcake.com/public/1/3/c/13c4da8d-9edf-46c3-9386-7bf47938e709_large/sparkling-diamond-brilliance-stockcake.jpg",
    },
    {
        name: "Celestial Heart",
        shape: "Heart Cut",
        carat: "1.2 ct",
        color: "F",
        clarity: "IF",
        image: "/Img/diamond_4.jpg",
    },
    {
        name: "Royal Prism",
        shape: "Princess Cut",
        carat: "1.8 ct",
        color: "G",
        clarity: "VVS2",
        image: "/Img/diamond_3.jpg",
    },
];

const DiamondGallery = () => {

    useEffect(() => {
        document.title = "Vihan Gems | Diamond Gallery";
    }, []);


    const [selected, setSelected] = useState(null);

    return (
        <>
            <div className="fixed inset-0 z-0 pointer-events-none">
                <SparkleParticles />
            </div>

            <WhatsAppButton />

            <div className="bg-gradient-to-b from-[#0F172A] to-[#1E293B] py-20 px-6 text-white">
                <h2 className="text-center text-4xl font-bold mb-12">Diamond Product Gallery</h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
                    {diamondProducts.map((diamond, idx) => (
                        <motion.div
                            key={idx}
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 0.3 }}
                            className="bg-white/5 rounded-2xl p-6 backdrop-blur border border-white/10 shadow-xl relative cursor-pointer"
                            onClick={() => setSelected(diamond)}
                        >
                            <img
                                src={diamond.image}
                                alt={diamond.shape}
                                className="w-full h-56 object-cover rounded-xl mb-4 border border-white/20"
                            />
                            <h3 className="text-xl font-semibold mb-1">{diamond.name}</h3>
                            <p className="text-gray-300 text-sm">Shape: {diamond.shape}</p>
                            <p className="text-gray-300 text-sm">Carat: {diamond.carat}</p>
                            <p className="text-gray-300 text-sm">Color: {diamond.color}</p>
                            <p className="text-gray-300 text-sm">Clarity: {diamond.clarity}</p>
                        </motion.div>
                    ))}
                </div>

                {/* Modal */}
                {selected && (
                    <motion.div
                        className="fixed inset-0 bg-black/70 flex items-center justify-center z-50"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelected(null)}
                    >
                        <motion.div
                            className="bg-white text-black rounded-xl p-6 max-w-md w-full relative"
                            initial={{ scale: 0.8 }}
                            animate={{ scale: 1 }}
                            exit={{ scale: 0.8 }}
                            onClick={(e) => e.stopPropagation()}
                        >
                            <img
                                src={selected.image}
                                alt={selected.name}
                                className="w-full h-64 object-cover rounded-lg mb-4"
                            />
                            <h2 className="text-2xl font-bold mb-2">{selected.name}</h2>
                            <p className="mb-1">Shape: {selected.shape}</p>
                            <p className="mb-1">Carat: {selected.carat}</p>
                            <p className="mb-1">Color: {selected.color}</p>
                            <p className="mb-1">Clarity: {selected.clarity}</p>
                            <button
                                onClick={() => setSelected(null)}
                                className="mt-4 bg-black text-white px-4 py-2 rounded hover:bg-gray-800"
                            >
                                Close
                            </button>
                        </motion.div>
                    </motion.div>
                )}
            </div>

        </>
    );
}

export default DiamondGallery;