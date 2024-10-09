import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { motion } from 'framer-motion';
import logo from '../../assets/logo.png';

const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const menuVariants = {
        open: { opacity: 1, height: 'auto', transition: { duration: 0.3 } },
        closed: { opacity: 0, height: 0, transition: { duration: 0.3 } },
    };

    return (
        <nav className="bg-white shadow-md fixed top-0 left-0 w-full z-50 p-4 h-16">
            <div className="container mx-auto flex justify-between items-center flex-wrap">
                <div className="flex items-center cursor-pointer">
                    <Link to='/'>
                        <img
                            src={ logo }
                            alt="Logo"
                            className="w-12 h-12"
                        />
                    </Link>

                </div>

                <div className="hidden md:flex space-x-6 flex-grow justify-end">
                    <motion.div whileHover={ { scale: 1.1 } } transition={ { type: 'spring', stiffness: 300 } }>
                        <Link to="/" className="text-gray-700 hover:text-blue-500">Properties</Link>
                    </motion.div>
                    <motion.div whileHover={ { scale: 1.1 } } transition={ { type: 'spring', stiffness: 300 } }>
                        <Link to="/about" className="text-gray-700 hover:text-blue-500">About Us</Link>
                    </motion.div>
                    <motion.div whileHover={ { scale: 1.1 } } transition={ { type: 'spring', stiffness: 300 } }>
                        <Link to="/contact" className="text-gray-700 hover:text-blue-500">Contact Us</Link>
                    </motion.div>
                </div>

                <div className="md:hidden">
                    <button onClick={ toggleMenu } aria-label="Toggle Menu">
                        { isOpen ? (
                            <XMarkIcon className="h-8 w-8 text-gray-700" />
                        ) : (
                            <Bars3Icon className="h-8 w-8 text-gray-700" />
                        ) }
                    </button>
                </div>
            </div>


            <motion.div
                variants={ menuVariants }
                initial="closed"
                animate={ isOpen ? "open" : "closed" }
                className="md:hidden overflow-hidden mt-4 bg-white z-40 fixed top-16 left-0 right-0"
            >
                <Link to="/" className="block px-4 py-2 text-gray-700 hover:text-blue-500">Properties</Link>
                <Link to="/about" className="block px-4 py-2 text-gray-700 hover:text-blue-500">About Us</Link>
                <Link to="/contact" className="block px-4 py-2 text-gray-700 hover:text-blue-500">Contact Us</Link>
            </motion.div>
        </nav>
    );
};

export default NavBar;
