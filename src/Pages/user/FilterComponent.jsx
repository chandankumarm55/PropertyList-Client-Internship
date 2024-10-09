import React, { useState } from 'react';
import { motion } from 'framer-motion';

const FilterComponent = ({ onFilterChange, onClearFilters }) => {
    const [minPrice, setMinPrice] = useState('');
    const [maxPrice, setMaxPrice] = useState('');
    const [location, setLocation] = useState('');

    const handleFilter = () => {
        onFilterChange({ minPrice, maxPrice, location });
    };

    return (
        <motion.div
            initial={ { opacity: 0, y: -20 } }
            whileInView={ { opacity: 1, y: 0 } }
            transition={ { duration: 0.5 } }
            viewport={ { once: false, amount: 0.1 } }
            className="flex flex-wrap justify-between p-4 space-x-2 mt-4 md:mt-0"
        >
            <input
                type="number"
                placeholder="$ Min Price"
                value={ minPrice }
                onChange={ e => setMinPrice(e.target.value) }
                className="border p-1 text-sm flex-1 min-w-[100px] md:w-auto"
            />
            <input
                type="number"
                placeholder="$ Max Price"
                value={ maxPrice }
                onChange={ e => setMaxPrice(e.target.value) }
                className="border p-1 text-sm flex-1 min-w-[100px] md:w-auto"
            />
            <input
                type="text"
                placeholder="Location"
                value={ location }
                onChange={ e => setLocation(e.target.value) }
                className="border p-1 text-sm flex-1 min-w-[100px] md:w-auto"
            />
            <button onClick={ handleFilter } className="bg-blue-500 text-white p-1 text-sm min-w-[100px] md:w-auto">
                Filter
            </button>
            <button onClick={ onClearFilters } className="bg-red-500 text-white p-1 text-sm min-w-[100px] md:w-auto">
                Clear Filters
            </button>
        </motion.div>
    );
};

export default FilterComponent;
