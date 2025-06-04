import React from 'react'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import XIcon from '@mui/icons-material/X';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Footer = () => {
    return (
        <>
            <footer className="bg-gradient-to-tr from-[#1b1d38] to-[#26295a] text-white pt-12 pb-8">
                <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-4 sm:grid-cols-2 gap-10">

                    {/* Logo & Description */}
                    <div>
                        <img src="/logo-white.png" alt="Vihan Gems" className="h-12 mb-4" />
                        <p className="text-sm leading-6">
                            Vihan Gems is a premium diamond company specializing in precision, trust, and brilliance. Explore the legacy of sparkle.
                        </p>
                        <div className="flex gap-4 mt-4">
                            <a href="https://facebook.com" target="_blank" rel="noreferrer" className="hover:text-blue-400">
                                <FacebookIcon />
                            </a>
                            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:text-pink-400">
                                <InstagramIcon />
                            </a>
                            <a href="https://twitter.com" target="_blank" rel="noreferrer" className="hover:text-blue-300">
                                <XIcon />
                            </a>
                            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-blue-500">
                                <LinkedInIcon />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
                        <ul className="space-y-2 text-sm">
                            <li><a href="#home" className="hover:text-gray-300">Home</a></li>
                            <li><a href="#about" className="hover:text-gray-300">About Us</a></li>
                            <li><a href="#products" className="hover:text-gray-300">Products</a></li>
                            <li><a href="#contact" className="hover:text-gray-300">Contact</a></li>
                            <li><a href="#blog" className="hover:text-gray-300">Blog</a></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="font-semibold text-lg mb-4">Contact</h4>
                        <ul className="space-y-3 text-sm">
                            <li>Email: <a href="mailto:info@vihangems.com" target='_blank' className="hover:text-gray-300">info@vihangems.com</a></li>
                            <li>Phone: <a href="tel:+919999999999" className="hover:text-gray-300">+91 99999 99999</a></li>
                            <li>Customer Support: 10am - 7pm IST</li>
                        </ul>
                    </div>

                    {/* Address */}
                    <div>
                        <h4 className="font-semibold text-lg mb-4">Address</h4>
                        <p className="text-sm leading-6">
                            Vihan Gems Pvt. Ltd.<br />
                            1st Floor, Solitaire Plaza,<br />
                            BKC Road, Surat, India - 400051<br />
                        </p>
                    </div>
                </div>

                <div className="mt-10 border-t border-white/10 pt-6 text-center text-xs text-white/70">
                    &copy; {new Date().getFullYear()} Vihan Gems. All rights reserved.
                </div>
            </footer>
        </>
    )
}

export default Footer
