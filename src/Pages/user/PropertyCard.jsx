import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { BackendUrl } from '../../utility/const';

const PropertyCard = ({ property, openGetInTouchDialog }) => {
    const { _id, image, title, description, price } = property;


    const cardVariants = {
        initial: { scale: 1, opacity: 0 },
        animate: { scale: 1, opacity: 1 },
        hover: { scale: 1.05, transition: { duration: 0.3 } },
    };

    return (
        <motion.div
            className="border p-4"
            variants={ cardVariants }
            initial="initial"
            whileHover="hover"
            animate="animate"
            transition={ { duration: 0.5 } }
            viewport={ { once: true, amount: 0.2 } }
        >
            <img src={ `${BackendUrl}/${image}` } alt={ title } className="w-full h-48 object-cover" />
            <h3 className="text-xl mt-2">{ title }</h3>
            <p className="mt-2">{ description.slice(0, 60) }...</p>
            <p className="font-bold mt-2">${ price }</p>
            <div className="mt-4">
                <Link to={ `/property/${_id}` } className="text-blue-500">View More Details</Link>
                <button
                    onClick={ () => openGetInTouchDialog(property) }
                    className="bg-blue-500 text-white p-2 rounded ml-4"
                >
                    Get in Touch
                </button>
            </div>
        </motion.div>
    );
};

export default PropertyCard;
