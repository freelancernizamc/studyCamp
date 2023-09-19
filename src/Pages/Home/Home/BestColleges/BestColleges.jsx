
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

const BestColleges = () => {
    const { isLoading, isError, error, data } = useQuery({
        queryKey: ['colleges'], // Update the query key to match the server-side query
        queryFn: () =>
            fetch('https://study-camp-server.vercel.app/best-colleges?limit=3') // Add a limit parameter to fetch only 6 instructors
                .then((res) => res.json()),
    });

    useEffect(() => {
        AOS.init();
    }, [])

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (isError) {
        return <div>Error: {error.message}</div>;
    }



    return (
        <>
            <h1 className='md:text-5xl font-bold text-center my-20 underline'>Favourite Colleges of Students</h1>
            <div className="grid md:grid-cols-3 gap-4 ml-5 animate-pulse">
                {data.map((colleges) => (
                    <div key={colleges._id} className="card w-96 bg-[#22174B] text-white hover:bg-[#3420B4] hover:text-white shadow-xl" data-aos="flip-left" data-aos-duration="3000">
                        <figure className="px-10 pt-10">
                            <img src={colleges.college_image} alt="Shoes" className="rounded-xl" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">{colleges.college_name}</h2>
                            <p>{colleges.email}</p>
                            <p>Admission Date: {colleges.admission_date}</p>
                            <p>Events: {colleges.events}</p>
                            <p>Research History: {colleges.research_history}</p>
                            <p>Sports: {colleges.sports}</p>
                            <div className="card-actions">
                                <Link to={`/collegedetails/${colleges._id}`} ><button className="btn bg-[#3420B4] text-white hover:bg-[#272030]">See Details</button></Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
};

export default BestColleges;