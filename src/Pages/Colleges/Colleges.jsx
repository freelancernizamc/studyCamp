import { Helmet } from "react-helmet-async";
import CollegeBanner from "./CollegeBanner";
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";


const Colleges = () => {
    const { isLoading, error, isError, data } = useQuery({
        queryKey: ["repoData"],
        queryFn: () =>
            fetch("http://localhost:5000/colleges").then(
                (res) => res.json()
            )
    });

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
                        className="card w-96 bg-[#272030] text-white hover:bg-slate-300 hover:text-black mb-4 shadow-xl"
                    >
                        <figure className="px-10 pt-10">
                            <img src={Colleges.college_image} alt="College" className="rounded-xl" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">College Name: {Colleges.college_name}</h2>
                            <p>Ratings: {Colleges.college_rating}</p>
                            <p>Admission Date: {Colleges.admission_date}</p>
                            <p>Number of Research: {Colleges.research_count}</p>
                            <div className="card-actions">
                                <Link to={`/instractordetails/${Colleges._id}`}>
                                    <button className="btn bg-[#9931E1] text-white hover:bg-[#272030]">
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