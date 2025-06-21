import React from 'react';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import XIcon from '@mui/icons-material/X';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
import { NavLink } from 'react-router-dom';
import LocationPinIcon from '@mui/icons-material/LocationPin';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';

const Footer = () => {
    return (
        <footer className="bg-gradient-to-tr from-[#111320] to-[#1f2345] text-white pt-12 pb-8">
            {/* <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10"> */}
            <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">


                {/* Logo & Description */}
                <div className='flex flex-col items-center'>
                    <NavLink to="/#home" className="flex items-center mb-2">
                        <img src="/Images/VihanGems.png" alt="Vihan Gems" className="h-12 mb-2" />
                    </NavLink>
                    <p className="text-sm leading-6">
                        Vihan Gems is a premium diamond company specializing in precision, trust, and brilliance.
                    </p>
                    <div className="flex gap-4 mt-2 flex-wrap">
                        <a href="https://www.instagram.com/vihan_gems" target="_blank" rel="noreferrer" className="hover:text-pink-400" aria-label='Instagram' title='Instagram'>
                            <InstagramIcon />
                        </a>
                        <a href="https://youtube.com/@bhavinshah6582?si=j_AET1ohA263z8vS" target="_blank" rel="noreferrer" className="hover:text-red-600">
                            <YouTubeIcon />
                        </a>
                    </div>
                </div>

                {/* Quick Links */}
                <div>
                    <h4 className="font-semibold text-base md:text-lg mb-4">Quick Links</h4>
                    {/* <ul className="space-y-2 text-sm"> */}
                    <ul className="flex gap-2 text-sm md:block md:space-y-2">
                        <li>
                            <a href="#home" className="hover:text-gray-300">Home</a>
                        </li>
                        <li>
                            <NavLink to="/about" className="hover:text-gray-300">About Us</NavLink>
                        </li>
                        <li>
                            <NavLink to="/diamond-gallery" className="hover:text-gray-300">Products</NavLink>
                        </li>
                        <li>
                            <a href="#contact" className="hover:text-gray-300">Contact</a>
                        </li>
                        {/* <li>
                            <a href="#blog" className="hover:text-gray-300">Blog</a>
                        </li> */}
                    </ul>
                </div>

                {/* Contact Info */}
                <div>
                    <h4 className="font-semibold text-base md:text-lg mb-4">Contact</h4>
                    <ul className="space-y-3 text-sm">
                        <li>
                            <EmailIcon /> Email: {" "}
                            <a href="mailto:Bhavinshah_4029@yahoo.in" target='_blank' className="hover:text-gray-300">
                                Bhavinshah_4029@yahoo.in
                            </a>
                        </li>
                        <li>
                            <LocalPhoneIcon /> Phone: <a href="tel:+919879820993" className="hover:text-gray-300">+91 98798 20993</a>
                        </li>


                        <li><SupportAgentIcon /> Customer Support: 10am - 7pm IST</li>
                    </ul>
                </div>

                {/* Address */}
                <div>
                    <h4 className="font-semibold text-base md:text-lg mb-4">Our Location</h4>
                    <a
                        href="https://maps.app.goo.gl/tScUet7GxLzWyo8B8?g_st=iw"
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-start gap-2 text-sm hover:text-gray-300"
                    >
                        <LocationPinIcon className="mt-1" />
                        <span>
                            Vihan Gems Pvt. Ltd.<br />
                            1st Floor Sankalp Building,<br />
                            Beside Gopal Locho,<br />
                            Mahidharpura, Surat, India - 395003
                        </span>
                    </a>
                </div>

                {/* <div>
                    <p className="text-sm leading-6">
                        Vihan Gems Pvt. Ltd.<br />
                        1st Floor Sankalp Building, <br />
                        Beside Gopal Locho, <br />
                        Mahidharpura, Surat, India - 395003
                    </p>
                </div> */}
            </div>

            <div className="mt-10 border-t border-white/10 pt-6 text-center text-xs text-white/70 px-4">
                &copy; {new Date().getFullYear()} Vihan Gems. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;
