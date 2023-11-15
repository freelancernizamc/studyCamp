import { Helmet } from "react-helmet-async";
import CollegeBanner from "./CollegeBanner";
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';


const Colleges = () => {
    const { isLoading, error, isError, data } = useQuery({
        queryKey: ["repoData"],
        queryFn: () =>
            fetch("https://study-camp-server.vercel.app/colleges").then(
                (res) => res.json()
            )
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
            <Helmet>
                <title>StudyCamp | Colleges</title>

            </Helmet>
            <div>
                <CollegeBanner />
            </div>
            <div className="grid md:grid-cols-3 gap-4">
                {data.map(Colleges => (
                    <div
                        key={Colleges._id}
                        className="card w-96 bg-[#22174B] text-white hover:bg-[#3420B4] hover:text-white mb-4 shadow-xl" data-aos="flip-left" data-aos-duration="3000"
                    >
                        <figure className="px-10 pt-10">
                            <img src={Colleges.college_image} alt="College" className="rounded-xl" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">College Name: {Colleges.college_name}</h2>
                            <p className="font-bold">Ratings: {Colleges.college_rating}</p>
                            <p>Admission Date: {Colleges.admission_date}</p>
                            <p>Number of Research: {Colleges.research_count}</p>
                            <p>Tuition Fee: {Colleges.fee}</p>
                            <div className="card-actions">
                                <Link to={`/collegedetails/${Colleges._id}`}>
                                    <button className="btn bg-[#3420B4] text-white hover:bg-[#100831]">
                                        See Details
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
};

export default Colleges;