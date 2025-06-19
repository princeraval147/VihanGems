import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const events = [
    {
        title: "Vihan Gems at Asia World Expo",
        date: "2-6 March, 2025",
        location: "Hong Kong",
        description:
            "We showcased our latest sustainable diamond collections and connected with over 100+ clients worldwide.",
        media: [
            { type: "image", url: "/Images/Events/AsiaExpo3.jpg" },
            { type: "image", url: "/Images/Events/AsiaExpo.jpg" },
            { type: "image", url: "/Images/Events/AsiaExpo2.jpg" },
            { type: "video", url: "/Images/Events/AsiaExpoVIdeo.mp4" },
        ],
    },
];

const MediaCarousel = ({ media }) => {
    const [current, setCurrent] = useState(0);
    const total = media.length;

    const prev = () => setCurrent((i) => (i - 1 + total) % total);
    const next = () => setCurrent((i) => (i + 1) % total);

    // Keyboard nav
    useEffect(() => {
        const onKey = (e) => {
            if (e.key === "ArrowLeft") prev();
            if (e.key === "ArrowRight") next();
        };
        window.addEventListener("keydown", onKey);
        return () => window.removeEventListener("keydown", onKey);
    }, [total]);

    return (
        <div className="relative w-full aspect-video overflow-hidden">
            <AnimatePresence initial={false}>
                <motion.div
                    key={current}
                    className="absolute inset-0"
                    initial={{ x: 300, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: -300, opacity: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    {media[current].type === "image" ? (
                        <img
                            src={media[current].url}
                            alt={`Slide ${current + 1}`}
                            // className="w-full h-full object-cover"
                            className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-105 group-hover:brightness-110"
                            loading="lazy"
                        />
                    ) : (
                        <video
                            src={media[current].url}
                            // controls
                            loop
                            muted
                            playsInline
                            autoPlay
                            preload="metadata"
                            // className="w-full h-full object-cover"
                            className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-105 group-hover:brightness-110"
                        />
                    )}
                </motion.div>
            </AnimatePresence>

            {/* Prev/Next Buttons */}
            <button
                onClick={prev}
                className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/40 text-white p-2 rounded-full hover:bg-black/60"
                aria-label="Previous slide"
            >
                ‹
            </button>
            <button
                onClick={next}
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/40 text-white p-2 rounded-full hover:bg-black/60"
                aria-label="Next slide"
            >
                ›
            </button>

            {/* Pagination Dots */}
            <div className="absolute bottom-2 w-full flex justify-center items-center gap-2">
                {media.map((_, idx) => (
                    <button
                        key={idx}
                        onClick={() => setCurrent(idx)}
                        className={`w-3 h-3 rounded-full ${idx === current ? "bg-white" : "bg-white/50"
                            }`}
                        aria-label={`Go to slide ${idx + 1}`}
                    />
                ))}
            </div>
        </div>
    );
};

const EventDetail = () => {
    useEffect(() => {
        document.title = "Vihan Gems | Events";
    }, []);

    return (
        <section className="bg-[#0f172a] text-white py-20" id="events-news">
            <motion.h2
                className="text-4xl font-bold text-center mb-6"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
            >
                Events & News
            </motion.h2>
            <motion.p
                className="text-center text-gray-300 max-w-2xl mx-auto mb-16 leading-relaxed text-lg px-4"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
            >
                <strong className="text-white">Vihan Gems</strong> regularly participates in
                premier international trade fairs for gems and jewellery across the globe,
                showcasing brilliance and craftsmanship.
            </motion.p>

            {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto px-6"> */}
            <div
                className={`max-w-6xl mx-auto px-6 gap-10 ${events.length === 1
                    ? "flex justify-center"
                    : "grid grid-cols-1 md:grid-cols-2"
                    }`}
            >
                {events.map((event, idx) => (
                    <motion.div
                        key={idx}
                        // className="bg-white/5 border border-white/10 rounded-2xl shadow-2xl backdrop-blur-md overflow-hidden group hover:scale-[1.02] transition-transform cursor-pointer"
                        className="bg-white/5 border border-white/10 rounded-2xl shadow-md backdrop-blur-md overflow-hidden group transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:border-white/20 hover:bg-white/10"
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: idx * 0.15 }}
                        viewport={{ once: true }}
                    >
                        <MediaCarousel media={event.media} />
                        <div className="p-6">
                            <h3 className="text-2xl font-semibold text-white mb-1">
                                {event.title}
                            </h3>
                            <p className="text-sm text-gray-400 mb-2 italic">
                                {event.date} — {event.location}
                            </p>
                            <p className="text-sm text-gray-300">
                                {event.description}
                            </p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default EventDetail;
