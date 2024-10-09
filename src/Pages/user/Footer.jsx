import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {

    const fadeInVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    };

    const footerRef = useRef(null);
    const isFooterInView = useInView(footerRef, { once: true });

    return (
        <motion.footer
            ref={ footerRef }
            variants={ fadeInVariants }
            initial="hidden"
            animate={ isFooterInView ? "visible" : "hidden" }
            className="bg-blue-500 text-white py-4 px-4"
        >
            <div className="container mx-auto flex flex-col md:flex-row justify-between items-start md:items-center space-y-4 md:space-y-0">

                <div>
                    <h3 className="text-lg font-bold mb-1">Property Hub</h3>
                    <p className="text-sm">Phone: <a href="tel:+1234567890" className="text-white hover:underline">+1 (234) 567-8901</a></p>
                    <p className="text-sm">Location: <span className="text-white">123 Property Lane, Real Estate City, RE 12345</span></p>
                </div>


                <div className="flex items-center space-x-3">
                    <h3 className="text-lg font-bold">Follow Us</h3>
                    <div className="flex space-x-2">
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-300">
                            <FaFacebookF size={ 20 } />
                        </a>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-300">
                            <FaTwitter size={ 20 } />
                        </a>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-300">
                            <FaInstagram size={ 20 } />
                        </a>
                        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-300">
                            <FaLinkedinIn size={ 20 } />
                        </a>
                    </div>
                </div>
            </div>

            <div className="text-center mt-4 text-sm">
                <p>&copy; { new Date().getFullYear() } Property Hub. All rights reserved.</p>
            </div>
        </motion.footer>
    );
};

export default Footer;
