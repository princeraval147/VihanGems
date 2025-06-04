import { useState } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { NavLink } from "react-router-dom";

const Header = () => {
    const [scrolled, setScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const { scrollY } = useScroll();

    useMotionValueEvent(scrollY, "change", (latest) => {
        setScrolled(latest > 20);
    });

    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <motion.header
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className={`fixed top-0 w-full z-50 transition-shadow ${scrolled ? "shadow-lg backdrop-blur bg-[#1b1d38]/90" : "bg-transparent"
                }`}
        >
            <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

                <NavLink to='/'>
                    <img src="/logo-white.png" alt="Vihan Gems" className="h-10" />
                </NavLink>

                {/* Desktop Nav */}
                <ul className="hidden md:flex space-x-8 text-sm font-medium text-white">
                    {/* <li>
                        <a href="#home" className="hover:text-blue-300">Home</a>
                    </li> */}
                    <li>
                        <NavLink to='/about' className="hover:text-blue-300">About</NavLink>
                    </li>
                    {/* About DropDown */}
                    {/* <li className="relative group">
                        <a className="hover:text-blue-300 cursor-pointer">About</a>
                        <ul className="absolute left-0 mt-2 w-48 bg-white text-black rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transform group-hover:translate-y-0 -translate-y-2 transition-all duration-200 z-50">
                            <li><a href="#our-story" className="block px-4 py-2 hover:bg-gray-100">Our Story</a></li>
                            <li><a href="#certifications" className="block px-4 py-2 hover:bg-gray-100">Certifications</a></li>
                        </ul>
                    </li> */}
                    <li>
                        <NavLink to="/#products" href="#product" className="hover:text-blue-300">Products</NavLink>
                    </li>
                    <li>
                        <NavLink to="/#contact" className="hover:text-blue-300">Contact</NavLink>
                    </li>
                </ul>

                {/* Mobile Toggle */}
                <button className="md:hidden text-white" onClick={toggleMenu}>
                    {isOpen ? <CloseIcon /> : <MenuIcon />}
                </button>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden bg-[#1b1d38] px-6 py-4 space-y-4 text-white">
                    <a href="#home" className="block">Home</a>
                    <NavLink to='/about'>About</NavLink>
                    {/* About DropDown */}
                    {/* <details className="group">
                        <summary className="cursor-pointer">About</summary>
                        <ul className="pl-4 space-y-2">
                            <li><a href="#our-story">Our Story</a></li>
                            <li><a href="#certifications">Certifications</a></li>
                        </ul>
                    </details> */}
                    <a href="#products" className="block">Products</a>
                    <a href="#blog" className="block">Blog</a>
                    <a href="#contact" className="block">Contact</a>
                </div>
            )}
        </motion.header>
    );
};

export default Header;
