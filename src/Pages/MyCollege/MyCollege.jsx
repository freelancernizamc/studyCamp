import React, { useContext } from 'react';
import { Helmet } from 'react-helmet-async';
import { AuthContext } from '../../providers/AuthProviders';

const MyCollege = ({ studentData = [] }) => { // Added default value []
    const { user } = useContext(AuthContext);

    return (
        <>
            <Helmet>
                <title>StudyCamp | My College</title>
            </Helmet>
            <div>
                <div className="hero min-h-[500px] bg-base-200">
                    <div className="hero-content flex-col lg:flex-row-reverse">
                        {user && <img src={user.photoURL} className="min-w-[400px] h-[400px] rounded-lg shadow-2xl" />}
                        <div>
                            <h1 className="text-5xl font-bold">MY COLLEGE</h1>
                            <h1 className="text-5xl font-bold">I Am {user.displayName}</h1>
                            {/* Render the list of colleges here */}
                        </div>
                    </div>
                </div>
                <ul>
                    {studentData.map((studentData, index) => (
                        <li key={index}>{studentData.studentName}</li>
                    ))}
                </ul>
            </div>
        </>
    );
};

export default MyCollege;
