import React, { useState } from 'react';
import { motion } from 'framer-motion';
import toast from 'react-hot-toast';
import { BackendUrl } from '../../utility/const';

const GetInTouchDialog = ({ property, isOpen, onClose }) => {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        message: '',
    });
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const { name, phone, email, message } = formData;
        if (!name || !phone || !email || !message) {
            toast.error('All fields are required!');
            return;
        }


        setLoading(true);

        try {

            const response = await fetch(`${BackendUrl}/api/contacts`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ ...formData, propertyTitle: property.title }),
            });

            if (!response.ok) {
                throw new Error('Failed to submit the form. Please try again later.');
            }

            toast.success('Message sent successfully!');

            setFormData({
                name: '',
                phone: '',
                email: '',
                message: '',
            });
            onClose();
        } catch (error) {

            toast.error(error.message || 'Something went wrong!');
        } finally {
            setLoading(false);
        }
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex justify-center items-center z-50">
            <motion.div
                className="bg-white p-6 rounded shadow-lg w-full max-w-md"
                initial={ { opacity: 0, y: -50 } }
                animate={ { opacity: 1, y: 0 } }
                transition={ { duration: 0.3 } }
            >
                <h2 className="text-xl mb-4 text-center">Get in Touch for { property.title }</h2>
                <form onSubmit={ handleSubmit }>
                    <input
                        type="text"
                        name="name"
                        placeholder="Name"
                        value={ formData.name }
                        onChange={ handleChange }
                        className="border p-2 mb-4 w-full"
                    />
                    <input
                        type="text"
                        name="phone"
                        placeholder="Phone"
                        value={ formData.phone }
                        onChange={ handleChange }
                        className="border p-2 mb-4 w-full"
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={ formData.email }
                        onChange={ handleChange }
                        className="border p-2 mb-4 w-full"
                    />
                    <textarea
                        name="message"
                        placeholder="Message"
                        value={ formData.message }
                        onChange={ handleChange }
                        className="border p-2 mb-4 w-full"
                        rows="4"
                    />
                    <div className="flex justify-between">
                        <button
                            type="submit"
                            className={ `bg-blue-500 text-white p-2 rounded ${loading ? 'opacity-50 cursor-not-allowed' : ''}` }
                            disabled={ loading }
                        >
                            { loading ? 'Sending...' : 'Submit' }
                        </button>
                        <button
                            type="button"
                            onClick={ onClose }
                            className="ml-4 text-red-500"
                        >
                            Cancel
                        </button>
                    </div>
                </form>
            </motion.div>
        </div>
    );
};

export default GetInTouchDialog;
