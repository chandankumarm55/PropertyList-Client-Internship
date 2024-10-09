import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getPropertyById } from '../../store/propertySlice';
import NavBar from './NavBar';
import Footer from './Footer';
import { BackendUrl } from '../../utility/const';

const SingleProperty = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const { currentProperty } = useSelector((state) => state.properties);

    useEffect(() => {

        dispatch(getPropertyById(id));
    }, [dispatch, id]);

    if (!currentProperty) {
        return <div>Loading...</div>;
    }

    return (
        <>

            <NavBar />

            <div className="pt-20 p-6">
                <div className="max-w-4xl mx-auto bg-white rounded p-6">
                    <h1 className="text-3xl font-bold mb-4">{ currentProperty.title }</h1>
                    <img
                        src={ `${BackendUrl}/${currentProperty.image}` }
                        alt={ currentProperty.title }
                        className="w-full h-64 object-cover mb-4"
                    />
                    <p className="text-xl font-bold mb-4">Price: ${ currentProperty.price }</p>
                    <p className="text-gray-700 mb-4">{ currentProperty.description }</p>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default SingleProperty;
