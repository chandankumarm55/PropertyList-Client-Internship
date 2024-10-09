import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllProperties } from '../../store/propertySlice';
import { motion } from 'framer-motion';
import PropertyCard from './PropertyCard';
import FilterComponent from './FilterComponent';
import GetInTouchDialog from './GetInTouchDialog';
import NavBar from './NavBar';
import VideoComponent from './VideoComponent';
import IntroTextComponent from './IntroTextComponent';
import Footer from './Footer';

const UserPage = () => {
    const dispatch = useDispatch();
    const { properties } = useSelector(state => state.properties);
    const [filteredProperties, setFilteredProperties] = useState(properties);
    const [isDialogOpen, setIsDialogOpen] = useState(false);
    const [selectedProperty, setSelectedProperty] = useState(null);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    useEffect(() => {
        dispatch(fetchAllProperties());
    }, [dispatch]);

    useEffect(() => {
        setFilteredProperties(properties);
    }, [properties]);

    const handleFilterChange = (filters) => {
        const { minPrice, maxPrice, location } = filters;
        const filtered = properties.filter(property => {
            return (
                (!minPrice || property.price >= minPrice) &&
                (!maxPrice || property.price <= maxPrice) &&
                (!location || property.title.includes(location) || property.description.includes(location))
            );
        });
        setFilteredProperties(filtered);
    };

    const handleClearFilters = () => {
        setFilteredProperties(properties);
    };

    const openGetInTouchDialog = (property) => {
        setSelectedProperty(property);
        setIsDialogOpen(true);
    };

    const closeGetInTouchDialog = () => {
        setIsDialogOpen(false);
    };

    return (
        <>
            <NavBar />
            <div className="p-4 mt-2 md:p-8 sd:mt-16">
                <VideoComponent />
                <IntroTextComponent />


                <FilterComponent onFilterChange={ handleFilterChange } onClearFilters={ handleClearFilters } />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
                    { filteredProperties.map((property) => (
                        <motion.div
                            key={ property._id }
                            initial={ { opacity: 0, y: 20 } }
                            whileInView={ { opacity: 1, y: 0 } }
                            transition={ { duration: 0.5 } }
                            viewport={ { once: false, amount: 0.1 } }
                        >
                            <PropertyCard
                                property={ property }
                                openGetInTouchDialog={ openGetInTouchDialog }
                            />
                        </motion.div>
                    )) }
                </div>

                <GetInTouchDialog property={ selectedProperty } isOpen={ isDialogOpen } onClose={ closeGetInTouchDialog } />
            </div>
            <Footer />
        </>
    );
};

export default UserPage;
