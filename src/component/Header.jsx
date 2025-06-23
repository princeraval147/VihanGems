import { useState } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { NavLink } from "react-router-dom";

const Header = () => {
    const [scrolled, setScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const { scrollY } = useScroll();

    // Close mobile menu when navigating
    const closeMenu = () => setIsOpen(false);

    // Scroll effect
    useMotionValueEvent(scrollY, "change", (latest) => {
        setScrolled(latest > 20);
    });

    const navLinks = [
        { name: "Home", to: "/#home" },
        { name: "About", to: "/about" },
        { name: "Products", to: "/diamond-gallery" },
        { name: "Contact", to: "/#contact" },
    ];

    return (
        <motion.header
            style={{ fontFamily: "Playfair Display" }}
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className={`fixed top-0 w-full z-50 transition-shadow ${scrolled ? "shadow-md backdrop-blur bg-[#1b1d38]/90" : "bg-transparent"
                }`}
        >
            <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
                <NavLink to="/#home" onClick={closeMenu}>
                    <img
                        src="Images/VihanGems.png"
                        alt="Vihan Gems"
                        className="h-14 md:h-20 object-contain"
                        // style={{ aspectRatio: "auto", padding: 0, margin: 0 }}
                        style={{
                            objectFit: "contain",
                            objectPosition: "left",
                            maxHeight: "100%",
                            padding: 0,
                            margin: 0,
                        }}
                    />
                </NavLink>

                {/* Desktop Nav */}
                <nav className="hidden md:flex space-x-8 text-sm font-medium text-white">
                    {navLinks.map((link) => (
                        <NavLink
                            key={link.name}
                            to={link.to}
                            onClick={closeMenu}
                            className="block hover:text-blue-300"
                        >
                            {link.name}
                        </NavLink>
                    ))}
                </nav>

                {/* Mobile Toggle */}
                <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <CloseIcon /> : <MenuIcon />}
                </button>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <motion.nav
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className="md:hidden bg-[#1b1d38] px-6 py-4 text-white space-y-4"
                >
                    {navLinks.map((link) => (
                        <NavLink
                            key={link.name}
                            to={link.to}
                            onClick={closeMenu}
                            className="block hover:text-blue-300"
                        >
                            {link.name}
                        </NavLink>
                    ))}
                </motion.nav>
            )}
        </motion.header>
    );
};

export default Header;
