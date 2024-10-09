import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaUsers, FaBars } from 'react-icons/fa';

const AdminNavbar = () => {

    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="bg-blue-500 text-white p-4 relative">
            <div className="container mx-auto flex justify-between items-center">

                <div className="text-2xl font-bold">
                    <Link to="/admin" className="flex items-center">
                        <FaHome className="mr-2" />
                        Admin Panel
                    </Link>
                </div>

                <div className="hidden md:flex space-x-6">
                    <Link to="/admin/list-property" className="hover:text-gray-300 flex items-center">
                        <FaHome className="mr-2" />
                        List New Property
                    </Link>
                    <Link to="/admin/view-users" className="hover:text-gray-300 flex items-center">
                        <FaUsers className="mr-2" />
                        View Interested Users
                    </Link>
                </div>


                <div className="md:hidden">
                    <button onClick={ toggleMenu }>
                        <FaBars className="text-xl" />
                    </button>
                </div>
            </div>

            <div
                className={ `absolute top-16 left-0 w-full bg-white shadow-md md:hidden transition-transform duration-300 ease-in-out z-50 ${isOpen ? 'block' : 'hidden'
                    }` }  // z-50 ensures it's on top
            >
                <div className="p-4 space-y-4">
                    <Link
                        to="/admin/list-property"
                        className="block text-gray-700 hover:text-blue-500"
                        onClick={ toggleMenu }
                    >
                        <FaHome className="inline mr-2" />
                        List New Property
                    </Link>
                    <Link
                        to="/admin/view-users"
                        className="block text-gray-700 hover:text-blue-500"
                        onClick={ toggleMenu }
                    >
                        <FaUsers className="inline mr-2" />
                        View Interested Users
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default AdminNavbar;
