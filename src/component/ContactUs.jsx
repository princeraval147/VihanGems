import { motion } from "framer-motion";

const ContactUs = () => {
    return (
        <div className="min-h-screen bg-gradient-to-b from-[#0f0c29] via-[#302b63] to-[#24243e] text-white px-6 py-20 font-sans">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="max-w-4xl mx-auto text-center"
            >
                <h1 className="text-5xl font-bold mb-4">Contact Us</h1>
                <p className="text-lg text-gray-300 mb-12">
                    Have questions or want to get in touch? Fill out the form and we'll get back to you shortly.
                </p>
            </motion.div>

            <motion.form
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.2 }}
                className="max-w-3xl mx-auto bg-white/5 backdrop-blur-lg p-8 rounded-xl border border-white/10 shadow-lg"
            >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label className="block text-sm mb-2">Name</label>
                        <input
                            required
                            type="text"
                            placeholder="Your Name"
                            className="w-full px-4 py-2 rounded-lg bg-white/10 text-white border border-white/20 focus:outline-none"
                        />
                    </div>
                    <div>
                        <label className="block text-sm mb-2">Email</label>
                        <input
                            required
                            type="email"
                            placeholder="you@example.com"
                            className="w-full px-4 py-2 rounded-lg bg-white/10 text-white border border-white/20 focus:outline-none"
                        />
                    </div>
                </div>
                <div className="mt-6">
                    <label className="block text-sm mb-2">Message</label>
                    <textarea
                        required
                        rows="5"
                        placeholder="Your message..."
                        className="w-full px-4 py-2 rounded-lg bg-white/10 text-white border border-white/20 focus:outline-none"
                    ></textarea>
                </div>
                <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="mt-6 px-6 py-3 border border-purple-400 hover:border-purple-600 transition rounded-lg text-white font-semibold bg-transparent"
                >
                    Send Message
                </motion.button>
            </motion.form>
        </div>
    );
}

export default ContactUs;