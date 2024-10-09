import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllProperties } from '../../store/propertySlice';
import PropertyCard from './PropertyCard';
import Footer from '../user/Footer';
import AdminNavbar from './AdminNavbar';

const Admin = () => {
  const dispatch = useDispatch();
  const { properties } = useSelector(state => state.properties);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    dispatch(fetchAllProperties());
  }, [dispatch]);

  return (
    <div className="min-h-screen bg-gray-100">
      <AdminNavbar />

      <main className="p-4">
        <h2 className="text-2xl mb-4">Listed Properties</h2>


        { properties && properties.length === 0 ? (
          <div className="text-center text-gray-600 text-lg">
            Let's list new properties!
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            { properties?.map(property => (
              <PropertyCard key={ property._id } property={ property } />
            )) }
          </div>
        ) }
      </main>

      <Footer />
    </div>
  );
};

export default Admin;
