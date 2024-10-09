import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPropertyById, modifyProperty } from '../../store/propertySlice';
import { useParams, Link, useNavigate } from 'react-router-dom';
import AdminNavbar from './AdminNavbar';
import toast from 'react-hot-toast';

const UpdateProperty = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const { currentProperty } = useSelector(state => state.properties);
    const navigate = useNavigate(); // No default argument here, use 'navigate' directly

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [image, setImage] = useState(null);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    useEffect(() => {
        dispatch(getPropertyById(id));
    }, [dispatch, id]);

    useEffect(() => {
        if (currentProperty) {
            setTitle(currentProperty.title);
            setDescription(currentProperty.description);
            setPrice(currentProperty.price);
        }
    }, [currentProperty]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('title', title);
        formData.append('description', description);
        formData.append('price', price);
        if (image) formData.append('image', image);
        dispatch(modifyProperty({ id, formData }));
        toast.success("Updated Successfully")
        navigate('/admin');
    };

    return (
        <>
            <AdminNavbar />

            <div className="min-h-screen bg-gray-100 flex items-center justify-center">
                <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-6xl">
                    <header className="text-center mb-6 flex items-center justify-between">

                        <Link to="/admin" className="text-blue-600 hover:text-blue-800 flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 mr-2">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={ 2 } d="M15 19l-7-7 7-7" />
                            </svg>
                            Back
                        </Link>

                        <h1 className="text-2xl font-semibold text-gray-700">Update Property</h1>
                    </header>

                    <form onSubmit={ handleSubmit } className="space-y-6 w-full">
                        <div>
                            <label className="block text-gray-600 mb-1">Title</label>
                            <input
                                type="text"
                                value={ title }
                                onChange={ (e) => setTitle(e.target.value) }
                                placeholder="Enter property title"
                                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-300"
                                required
                            />
                        </div>

                        <div>
                            <label className="block text-gray-600 mb-1">Description</label>
                            <textarea
                                value={ description }
                                onChange={ (e) => setDescription(e.target.value) }
                                placeholder="Enter property description"
                                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-300 h-28 resize-none"
                                required
                            />
                        </div>

                        <div>
                            <label className="block text-gray-600 mb-1">Price</label>
                            <input
                                type="number"
                                value={ price }
                                onChange={ (e) => setPrice(e.target.value) }
                                placeholder="Enter property price"
                                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-300"
                                required
                            />
                        </div>

                        <div>
                            <label className="block text-gray-600 mb-1">Property Image</label>
                            <input
                                type="file"
                                onChange={ (e) => setImage(e.target.files[0]) }
                                className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-600 hover:file:bg-blue-100"
                            />
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-green-500 text-white py-3 rounded-md text-lg font-medium hover:bg-green-600 transition duration-300"
                        >
                            Update Property
                        </button>
                    </form>
                </div>
            </div>
        </>
    );
};

export default UpdateProperty;
