import React, { useState, useRef, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import NavBar from './NavBar';
import Footer from './Footer';
import toast, { Toaster } from 'react-hot-toast';
import { BackendUrl } from '../../utility/const';

const ContactUsPage = () => {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        message: '',
    });

    useEffect(() => {
        window.scrollTo(0, 0); // Scroll to the top
    }, []);


    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Check for empty fields
        if (!formData.name || !formData.phone || !formData.email || !formData.message) {
            toast.error('All fields are required!');
            return;
        }

        try {
            const response = await fetch(`${BackendUrl}/api/contacts`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }


            toast.success('Message sent successfully!');
            setFormData({ name: '', phone: '', email: '', message: '' }); // Clear form data
        } catch (error) {
            toast.error('Failed to send message: ' + error.message);
        }
    };

    // Framer Motion: Animation Variants
    const fadeInVariants = {
        hidden: { opacity: 0, y: 20 }, // Start with opacity 0 and slightly below
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }, // Animate to opacity 1 and move to original position
    };

    // Hook to trigger animation when the text and form come into view
    const headerRef = useRef(null);
    const textRef = useRef(null);
    const formRef = useRef(null);
    const locationRef = useRef(null);
    const phoneRef = useRef(null);

    const isHeaderInView = useInView(headerRef, { once: true });
    const isTextInView = useInView(textRef, { once: true });
    const isFormInView = useInView(formRef, { once: true });
    const isLocationInView = useInView(locationRef, { once: true });
    const isPhoneInView = useInView(phoneRef, { once: true });

    return (
        <>
            <NavBar />
            <div className="p-4 md:p-8 bg-gray-100 mt-16"> {/* Added mt-16 */ }
                <Toaster /> {/* Add Toaster component for notifications */ }
                <motion.h1
                    ref={ headerRef }
                    variants={ fadeInVariants }
                    initial="hidden"
                    animate={ isHeaderInView ? "visible" : "hidden" }
                    className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-6 text-blue-600"
                >
                    Contact Us
                </motion.h1>

                <div className="mb-8">
                    <motion.h2
                        ref={ textRef }
                        variants={ fadeInVariants }
                        initial="hidden"
                        animate={ isTextInView ? "visible" : "hidden" }
                        className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-4 text-gray-800"
                    >
                        Get in Touch
                    </motion.h2>
                    <motion.p
                        variants={ fadeInVariants }
                        initial="hidden"
                        animate={ isTextInView ? "visible" : "hidden" }
                        className="text-lg md:text-xl text-gray-700 mb-2"
                    >
                        We would love to hear from you! Feel free to reach out using the form below or contact us directly.
                    </motion.p>

                    {/* Location and Phone Information with Animation */ }
                    <motion.div
                        ref={ locationRef }
                        variants={ fadeInVariants }
                        initial="hidden"
                        animate={ isLocationInView ? "visible" : "hidden" }
                        className="text-lg md:text-xl text-gray-700 mb-2"
                    >
                        <p><strong>Location:</strong> <span className="text-blue-500">123 Property Lane, Real Estate City, RE 12345</span></p>
                    </motion.div>

                    <motion.div
                        ref={ phoneRef }
                        variants={ fadeInVariants }
                        initial="hidden"
                        animate={ isPhoneInView ? "visible" : "hidden" }
                        className="text-lg md:text-xl text-gray-700 mb-2"
                    >
                        <p><strong>Phone:</strong> <span className="text-blue-500">+1 (234) 567-8901</span></p>
                    </motion.div>

                    <motion.div
                        variants={ fadeInVariants }
                        initial="hidden"
                        animate={ isPhoneInView ? "visible" : "hidden" }
                        className="text-lg md:text-xl text-gray-700"
                    >
                        <p><strong>Email:</strong> <a href="mailto:info@propertyhub.com" className="text-blue-500 hover:underline">info@propertyhub.com</a></p>
                    </motion.div>
                </div>

                {/* Contact Form with Animation */ }
                <motion.form
                    ref={ formRef }
                    variants={ fadeInVariants }
                    initial="hidden"
                    animate={ isFormInView ? "visible" : "hidden" }
                    onSubmit={ handleSubmit }
                    className="bg-white shadow-md rounded-lg p-6"
                >
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-4 text-gray-800">Contact Form</h2>
                    <div className="mb-4">
                        <label htmlFor="name" className="block text-lg font-medium mb-1">Name</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={ formData.name }
                            onChange={ handleChange }

                            className="border border-gray-300 p-2 rounded-md w-full"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="phone" className="block text-lg font-medium mb-1">Phone Number</label>
                        <input
                            type="tel"
                            id="phone"
                            name="phone"
                            value={ formData.phone }
                            onChange={ handleChange }

                            className="border border-gray-300 p-2 rounded-md w-full"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-lg font-medium mb-1">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={ formData.email }
                            onChange={ handleChange }

                            className="border border-gray-300 p-2 rounded-md w-full"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="message" className="block text-lg font-medium mb-1">Message</label>
                        <textarea
                            id="message"
                            name="message"
                            value={ formData.message }
                            onChange={ handleChange }

                            rows="4"
                            className="border border-gray-300 p-2 rounded-md w-full"
                        />
                    </div>
                    <button
                        type="submit"
                        className="bg-green-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-600 transition duration-300"
                    >
                        Send Message
                    </button>
                </motion.form>
            </div>
            <Footer />
        </>
    );
};

export default ContactUsPage;
