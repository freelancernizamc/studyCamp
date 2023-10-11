import React, { useState } from 'react';
import { Link, useLoaderData, useNavigate } from 'react-router-dom';

const AdmissionForm = ({ onFormSubmit }) => {
    const collegeData = useLoaderData();
    const navigate = useNavigate();
    const [studentData, setStudentData] = useState({
        image: '',
        studentName: '',
        collegeName: '',
        subject: '',
        email: '',
        phone: '',
        date: '',
        address: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setStudentData((prevData) => ({ ...prevData, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Call the function passed via props to handle form submission
        onFormSubmit(studentData);

        const newStudentData = {
            image: '',
            studentName: '',
            collegeName: '',
            subject: '',
            email: '',
            phone: '',
            date: '',
            address: '',
        };

        setStudentData(newStudentData);
        navigate('/mycollege');


    };
    return (
        <div>
            {/* <img src={collegeData.college_image} alt='banner'/> */}
            <div className="hero min-h-screen" style={{ backgroundImage: `url(${collegeData.college_image})` }}>
    <div className="hero-overlay bg-opacity-60"></div>
    <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
           <h1 className='text-7xl font-bold text-white'> {collegeData.college_name}</h1>
            <h1 className="mb-5 text-5xl font-bold text-indigo-300">Admission</h1>
        </div>
    </div>
</div>

            <div className="max-w-lg mx-auto">

                <div><h2 className="text-3xl font-bold my-10 bg-[#272030] text-white text-center">Admission Form</h2></div>
                <form onSubmit={handleSubmit} className="space-y-4 shadow-md">
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label className="block">
                                Picture URL:
                                <input
                                    type="text"
                                    name="image"
                                    value={studentData.image}
                                    onChange={handleChange}
                                    className="border rounded-md px-2 py-1 w-full"
                                />
                            </label>
                            <label className="block">
                                Candidate Name:
                                <input
                                    type="text"
                                    name="studentName"
                                    value={studentData.studentName}
                                    onChange={handleChange}
                                    className="border rounded-md px-2 py-1 w-full"
                                />
                            </label>
                            <label className="block">
                                College Name:
                                <input
                                    type="text"
                                    name="collegeName"
                                  defaultValue={collegeData.college_name}
                                    onChange={handleChange}
                                    className="border rounded-md px-2 py-1 w-full"
                                />
                            </label>
                            <label className="block">
                                Subject:
                                <input
                                    type="text"
                                    name="subject"
                                    value={studentData.subject}
                                    onChange={handleChange}
                                    className="border rounded-md px-2 py-1 w-full"
                                />
                            </label>
                            <label className="block">
                                Candidate Email:
                                <input
                                    type="email"
                                    name="email"
                                    value={studentData.email}
                                    onChange={handleChange}
                                    className="border rounded-md px-2 py-1 w-full"
                                />
                            </label>
                        </div>
                        <div>
                            <label className="block">
                                Candidate Phone numbe:
                                <input
                                    type="number"
                                    name="phone"
                                    value={studentData.phone}
                                    onChange={handleChange}
                                    className="border rounded-md px-2 py-1 w-full"
                                />
                            </label>
                            <label className="block">
                                Date of Birth:
                                <input
                                    type="date"
                                    name="date"
                                    value={studentData.date}
                                    onChange={handleChange}
                                    className="border rounded-md px-2 py-1 w-full"
                                />
                            </label>

                        </div>
                    </div>
                    <label className="block">
                        Present Address:
                        <textarea
                            name="address"
                            value={studentData.address}
                            onChange={handleChange}
                            className="border rounded-md px-2 py-1 w-full"
                        />
                    </label>
                    <button type="submit" className="bg-[#3420B4] text-white hover:bg-green-700 px-4 py-2 rounded-md">
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
};


export default AdmissionForm;