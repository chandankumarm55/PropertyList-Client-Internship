import React, { useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Link } from 'react-router-dom';
import { BackendUrl } from '../../utility/const';

const PropertyCard = ({ property }) => {
    const [isExpanded, setIsExpanded] = useState(false);


    const ref = React.useRef(null);
    const isInView = useInView(ref, { once: true });

    const toggleDescription = () => {
        setIsExpanded(prevState => !prevState);
    };


    if (!property || !property.description) {
        return null;
    }

    const imageUrl = `${BackendUrl}/${property.image}`;

    const shortDescription = property.description.length > 50
        ? `${property.description.substring(0, 50)}...`
        : property.description;


    const descriptionVariants = {
        collapsed: { height: 'auto' },
        expanded: { height: 'auto', opacity: 1, transition: { duration: 0.3 } },
    };

    return (
        <motion.div
            ref={ ref }
            className="border rounded-lg p-4 bg-white shadow-md transition-transform duration-200 hover:scale-105"
            whileHover={ { scale: 1.05 } }
            initial={ { opacity: 0 } }
            animate={ { opacity: isInView ? 1 : 0 } }
        >
            <img src={ imageUrl } alt={ property.title } className="w-full h-48 object-cover rounded-md" />
            <h3 className="text-xl font-semibold mt-2">{ property.title }</h3>

            <motion.p
                onClick={ toggleDescription }
                variants={ descriptionVariants }
                initial="collapsed"
                animate={ isExpanded ? 'expanded' : 'collapsed' }
                className="text-gray-700 cursor-pointer"
            >
                { isExpanded ? property.description : shortDescription }
            </motion.p>

            <p className="font-bold text-lg mt-2">${ property.price }</p>


            <div className="flex space-x-2 mt-2">
                <Link to={ `/admin/update-property/${property._id}` } className="bg-orange-500 text-white py-2 px-4 rounded text-center flex-1">
                    Update
                </Link>
                <Link to={ `/admin/property/${property._id}` } className="bg-green-500 text-white py-2 px-4 rounded text-center flex-1">
                    View
                </Link>
            </div>
        </motion.div>
    );
};

export default PropertyCard;
