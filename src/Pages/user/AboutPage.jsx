import React, { useRef, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import NavBar from './NavBar';
import Footer from './Footer';

const AboutPage = () => {

    const fadeInVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    };

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const headerRef = useRef(null);
    const missionRef = useRef(null);
    const valuesRef = useRef(null);
    const teamRef = useRef(null);
    const choiceRef = useRef(null);
    const contactRef = useRef(null);

    const isHeaderInView = useInView(headerRef, { once: true });
    const isMissionInView = useInView(missionRef, { once: true });
    const isValuesInView = useInView(valuesRef, { once: true });
    const isTeamInView = useInView(teamRef, { once: true });
    const isChoiceInView = useInView(choiceRef, { once: true });
    const isContactInView = useInView(contactRef, { once: true });

    return (
        <>
            <NavBar />
            <div className="p-4 md:p-8 mt-16">
                <motion.h1
                    ref={ headerRef }
                    variants={ fadeInVariants }
                    initial="hidden"
                    animate={ isHeaderInView ? "visible" : "hidden" }
                    className="text-3xl md:text-5xl font-bold text-center mb-6 text-blue-500"
                >
                    About Property Hub
                </motion.h1>

                <motion.p
                    variants={ fadeInVariants }
                    initial="hidden"
                    animate={ isHeaderInView ? "visible" : "hidden" }
                    className="text-lg md:text-xl text-gray-700 mb-4"
                >
                    Welcome to Property Hub, your one-stop destination for finding the perfect property! We are dedicated to helping you discover your dream home with ease and confidence.
                </motion.p>

                <motion.h2
                    ref={ missionRef }
                    variants={ fadeInVariants }
                    initial="hidden"
                    animate={ isMissionInView ? "visible" : "hidden" }
                    className="text-2xl md:text-4xl font-semibold mb-4"
                >
                    Our Mission
                </motion.h2>
                <motion.p
                    ref={ missionRef }
                    variants={ fadeInVariants }
                    initial="hidden"
                    animate={ isMissionInView ? "visible" : "hidden" }
                    className="text-lg md:text-xl text-gray-700 mb-4"
                >
                    At Property Hub, our mission is to provide a seamless and user-friendly experience for buyers and renters alike. We strive to offer a comprehensive range of properties that cater to various tastes and budgets, ensuring that everyone can find a place they can call home.
                </motion.p>

                <motion.h2
                    ref={ valuesRef }
                    variants={ fadeInVariants }
                    initial="hidden"
                    animate={ isValuesInView ? "visible" : "hidden" }
                    className="text-2xl md:text-4xl font-semibold mb-4"
                >
                    Our Values
                </motion.h2>
                <motion.ul
                    ref={ valuesRef }
                    variants={ fadeInVariants }
                    initial="hidden"
                    animate={ isValuesInView ? "visible" : "hidden" }
                    className="list-disc list-inside text-lg md:text-xl text-gray-700 mb-4"
                >
                    <li>Integrity: We believe in honesty and transparency in all our dealings.</li>
                    <li>Customer Focus: Our clients are our priority. We listen to your needs and work tirelessly to meet them.</li>
                    <li>Innovation: We embrace technology to enhance your property search experience.</li>
                    <li>Diversity: We celebrate the diverse needs of our clients and offer a variety of properties to choose from.</li>
                </motion.ul>

                <motion.h2
                    ref={ teamRef }
                    variants={ fadeInVariants }
                    initial="hidden"
                    animate={ isTeamInView ? "visible" : "hidden" }
                    className="text-2xl md:text-4xl font-semibold mb-4"
                >
                    Meet Our Team
                </motion.h2>
                <motion.p
                    ref={ teamRef }
                    variants={ fadeInVariants }
                    initial="hidden"
                    animate={ isTeamInView ? "visible" : "hidden" }
                    className="text-lg md:text-xl text-gray-700 mb-4"
                >
                    Our dedicated team of real estate professionals has years of experience in the industry. We are passionate about helping you find the right property and are here to assist you every step of the way.
                </motion.p>

                <motion.h2
                    ref={ choiceRef }
                    variants={ fadeInVariants }
                    initial="hidden"
                    animate={ isChoiceInView ? "visible" : "hidden" }
                    className="text-2xl md:text-4xl font-semibold mb-4"
                >
                    Why Choose Us?
                </motion.h2>
                <motion.p
                    ref={ choiceRef }
                    variants={ fadeInVariants }
                    initial="hidden"
                    animate={ isChoiceInView ? "visible" : "hidden" }
                    className="text-lg md:text-xl text-gray-700 mb-4"
                >
                    Property Hub stands out from the crowd by offering a personalized approach to property search. Our platform provides:
                </motion.p>
                <motion.ul
                    ref={ choiceRef }
                    variants={ fadeInVariants }
                    initial="hidden"
                    animate={ isChoiceInView ? "visible" : "hidden" }
                    className="list-disc list-inside text-lg md:text-xl text-gray-700 mb-4"
                >
                    <li>A wide selection of properties, including residential, commercial, and rental options.</li>
                    <li>Advanced filtering options to help you find exactly what you’re looking for.</li>
                    <li>Expert advice from our knowledgeable team to guide you through the process.</li>
                    <li>Regular updates on the property market to keep you informed.</li>
                </motion.ul>

                <motion.h2
                    ref={ contactRef }
                    variants={ fadeInVariants }
                    initial="hidden"
                    animate={ isContactInView ? "visible" : "hidden" }
                    className="text-2xl md:text-4xl font-semibold mb-4"
                >
                    Get in Touch
                </motion.h2>
                <motion.p
                    ref={ contactRef }
                    variants={ fadeInVariants }
                    initial="hidden"
                    animate={ isContactInView ? "visible" : "hidden" }
                    className="text-lg md:text-xl text-gray-700 mb-4"
                >
                    If you have any questions or need assistance, feel free to <a href="/contact" className="text-blue-500 hover:underline">contact us</a>. We are here to help you find your perfect property!
                </motion.p>
            </div>
            <Footer />
        </>
    );
};

export default AboutPage;
