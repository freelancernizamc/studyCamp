import React, { useContext } from 'react';
import { Helmet } from 'react-helmet-async';
import { AuthContext } from '../../providers/AuthProviders';

const MyCollege = ({ newStudentsData = [] }) => { // Added default value []
    const { user } = useContext(AuthContext);

    return (
        <>
            <Helmet>
                <title>StudyCamp | My College</title>
            </Helmet>
            <div>
                <div className="hero max-h-screen bg-base-200">
                    <div className="hero-content flex-col lg:flex-row-reverse">
                        {user && <img src={user.photoURL} className="max-w-full rounded-lg shadow-2xl" />}
                        <div>
                            <h1 className="text-5xl font-bold">MY COLLEGE</h1>
                            {/* Render the list of colleges here */}
                        </div>
                    </div>
                </div>
                <ul>
                    {newStudentsData.map((studentData, index) => (
                        <li key={index}>{studentData.studentName}</li>
                    ))}
                </ul>
            </div>
        </>
    );
};

export default MyCollege;
