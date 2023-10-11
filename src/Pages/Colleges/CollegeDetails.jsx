import React from 'react';
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const CollegeDetails = () => {
    const { _id } = useParams();
    const [colleges, setColleges] = useState(null);

    useEffect(() => {
        fetch(`https://study-camp-server.vercel.app/users/colleges/${_id}`)
            .then((res) => res.json())
            .then((data) => setColleges(data))
            .catch((error) => console.error(error));
    }, [_id]);


    if (!colleges) {
        return <div>Loading...</div>;
    }

    const { college_image, college_name, college_rating, admission_date, research_count, events, research_history, sports, collegesDetails } = colleges;

    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero min-h-screen bg-[#272030] text-white">
                    <div className="hero-content flex-col lg:flex-row-reverse">
                        <img src={college_image} className="max-w-lg rounded-full shadow-2xl" />
                        <div className="mr-20">
                            <h1 className="text-5xl font-bold mb-4">{college_name}</h1>
                            <p>Ratings: {college_rating}</p>
                            <p className="my-2">Admission Date: {admission_date}</p>
                            <Link to='/contact'><button className="btn bg-[#3420B4] text-white hover:bg-[#272030]">Contact</button></Link>
                        </div>
                    </div>
                </div>
            </div>
            <h2 className="text-5xl text-center my-10 font-bold">See College Details</h2>

            <h2 className="text-3xl text-center my-10">College Information</h2>
            <div className="grid md:grid-cols-3 gap-4">

                <figure className="px-10 pt-10">
                    <img src={college_image} alt="College" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">College Name: {college_name}</h2>
                    <p className='font-bold'>Ratings: {college_rating}</p>
                    <p>Admission Date: {admission_date}</p>
                    <p>Number of Research: {research_count}</p>
                    <p>Events: {events}</p>
                    <p>Research History: {research_history}</p>
                    <p>Sports: {sports}</p>
                    <div className="card-actions">
                    <Link to={`/admissionform/${colleges._id}`}>
                            <button className="btn bg-[#3420B4] text-white hover:bg-[#272030]">
                                Take Admission Now
                            </button>
                        </Link>
                    </div>
                </div>
            </div>

        </div>

    );
};

export default CollegeDetails;