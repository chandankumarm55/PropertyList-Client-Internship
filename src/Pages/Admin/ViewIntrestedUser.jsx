import React, { useEffect, useState } from 'react';
import axios from 'axios';
import AdminNavbar from './AdminNavbar';
import Footer from '../user/Footer';
import { BackendUrl } from '../../utility/const';

const ViewInterestedUser = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await axios.get(`${BackendUrl}/api/contacts`);
                setUsers(response.data);
                setLoading(false);
            } catch (error) {
                setError('Error fetching users');
                setLoading(false);
            }
        };

        fetchUsers();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>{ error }</div>;
    }

    return (
        <>
            <AdminNavbar />

            <div className="min-h-screen p-4">
                <h1 className="text-2xl font-semibold mb-4">Interested Users</h1>
                <div className="overflow-x-auto bg-white shadow-md rounded-lg p-4">
                    { users.length > 0 ? (
                        <table className="min-w-full table-auto border-collapse text-sm">
                            <thead>
                                <tr>
                                    <th className="px-4 py-2 border">Name</th>
                                    <th className="px-4 py-2 border">Phone</th>
                                    <th className="px-4 py-2 border">Email</th>
                                    <th className="px-4 py-2 border">Message</th>
                                    <th className="px-4 py-2 border">Date</th>
                                </tr>
                            </thead>
                            <tbody>
                                { users.map((user) => (
                                    <tr key={ user._id } className="border-t">
                                        <td className="px-4 py-2 border">{ user.name }</td>
                                        <td className="px-4 py-2 border">{ user.phone }</td>
                                        <td className="px-4 py-2 border truncate">{ user.email }</td>
                                        <td className="px-4 py-2 border truncate">{ user.message }</td>
                                        <td className="px-4 py-2 border">{ new Date(user.createdAt).toLocaleDateString() }</td>
                                    </tr>
                                )) }
                            </tbody>
                        </table>
                    ) : (
                        <div>No users have shown interest yet.</div>
                    ) }
                </div>
            </div>
            <Footer />
        </>
    );
};

export default ViewInterestedUser;
