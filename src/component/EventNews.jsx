import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";

const events = [
    {
        title: "Vihan Gems at Dubai Diamond Expo 2024",
        date: "May 12, 2024",
        location: "Dubai World Trade Centre",
        description:
            "We showcased our latest sustainable diamond collections and connected with over 100+ clients worldwide.",
        image: "https://news.jewellerynet.com/uploads/article/26121/1_1731394010_Jewellery__Gem___Technology_in_Dubai_opens_today_with_exciting_product_reveals__market_insights.jpg",
    },
    {
        title: "New Manufacturing Facility Launch",
        date: "March 30, 2024",
        location: "Surat, India",
        description:
            "Our new state-of-the-art facility is designed to ensure higher precision, ethics, and sustainability.",
        image: "https://sdasurat.org/wp-content/uploads/2024/07/WhatsApp-Image-2024-07-23-at-17.43.18_24b811cb-1024x682.jpg",
    },
];

const EventsNews = () => {
    return (
        <>

            <section className="bg-[#0f172a] text-white py-20" id="events-news">
                <motion.h2
                    className="text-3xl md:text-4xl font-bold text-center mb-12"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    Events & News
                </motion.h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto px-6">
                    {events.map((event, idx) => (
                        <motion.a
                            key={idx}
                            className="bg-white/10 rounded-2xl shadow-xl backdrop-blur-md overflow-hidden hover:scale-[1.02] transition-transform cursor-pointer"
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: idx * 0.2 }}
                            viewport={{ once: true }}
                        >
                            <div className="aspect-video overflow-hidden">
                                <img src={event.image} alt={event.title} className="w-full h-full object-cover" />
                            </div>

                            {/* <img
                                src={event.image}
                                alt={event.title}
                                className="w-full h-60 object-cover"
                            /> */}
                            <div className="p-6">
                                <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
                                <p className="text-sm text-gray-300 mb-1">{event.date} — {event.location}</p>
                                {/* <p className="text-white text-sm mb-4">{event.description}</p> */}
                                {/* <a
                                    href="#"
                                    className="text-blue-300 text-sm font-medium hover:underline"
                                >
                                    Read More →
                                </a> */}
                            </div>
                        </motion.a>
                    ))}
                </div>
                <div className="flex justify-center mt-5">
                    <NavLink to='/events' className="mt-4 px-6 py-3 border border-purple-400 text-purple-300 hover:border-white hover:text-white rounded-lg transition duration-300 bg-transparent">
                        View More
                    </NavLink>
                </div>
            </section >
        </>
    );
};

export default EventsNews;
