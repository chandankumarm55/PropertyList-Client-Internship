import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addProperty } from '../../store/propertySlice';
import toast from 'react-hot-toast';
import AdminNavbar from './AdminNavbar';
import Footer from '../user/Footer';
import { useNavigate } from 'react-router-dom';

const ListProperty = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [image, setImage] = useState(null);
    const dispatch = useDispatch();
    const navigate = useNavigate()

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);


    const handleSubmit = (e) => {
        e.preventDefault();
        if (!title || !description || !price || !image) {
            toast.error("All fields are required!");
            return;
        }

        const formData = new FormData();
        formData.append('title', title);
        formData.append('description', description);
        formData.append('price', price);
        formData.append('image', image);

        dispatch(addProperty(formData)).then(() => {
            setTitle('');
            setDescription('');
            setPrice('');
            setImage(null);
            toast.success("Property listed successfully!");
            navigate('/admin')
        });
    };

    return (
        <>
            <AdminNavbar />
            <div className="min-h-screen bg-gray-100">
                <main className="container mx-auto p-6">
                    <h1 className="text-3xl font-bold text-center mb-6">List a New Property</h1>
                    <form onSubmit={ handleSubmit } className="bg-white shadow-md rounded-lg p-8">
                        <div className="mb-4">
                            <label className="block text-gray-700 mb-1" htmlFor="title">Title</label>
                            <input
                                type="text"
                                value={ title }
                                onChange={ (e) => setTitle(e.target.value) }
                                placeholder="Enter property title"
                                className="p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 mb-1" htmlFor="description">Description</label>
                            <textarea
                                value={ description }
                                onChange={ (e) => setDescription(e.target.value) }
                                placeholder="Enter property description"
                                className="p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                                rows="4"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 mb-1" htmlFor="price">Price</label>
                            <div className="relative">
                                <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-500">$</span>
                                <input
                                    type="number"
                                    value={ price }
                                    onChange={ (e) => setPrice(e.target.value) }
                                    placeholder="Enter property price"
                                    className="p-2 pl-8 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                                    required
                                />
                            </div>
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 mb-1" htmlFor="image">Image</label>
                            <input
                                type="file"
                                onChange={ (e) => setImage(e.target.files[0]) }
                                className="mb-4 border border-gray-300 rounded-md p-2 w-full cursor-pointer"
                                required
                            />
                        </div>
                        <button type="submit" className="bg-green-500 p-2 text-white rounded-md hover:bg-green-600 transition duration-200">Submit</button>
                    </form>
                </main>
            </div>
            <Footer />
        </>
    );
};

export default ListProperty;
