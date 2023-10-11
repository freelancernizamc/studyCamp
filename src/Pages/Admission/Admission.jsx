import { useQuery } from "@tanstack/react-query";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";


const Admission = () => {
    const { isLoading, error, isError, data } = useQuery({
        queryKey: ["repoData"],
        queryFn: () =>
            fetch("https://study-camp-server.vercel.app/colleges").then(
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
                <title>StudyCamp | Admission</title>

            </Helmet>
            <div>
                <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://i.ibb.co/fQMhHbJ/manhattancollege.jpg)' }}>
                    <div className="hero-overlay bg-opacity-60"></div>
                    <div className="hero-content text-center text-neutral-content">
                        <div className="max-w-md">
                            <h1 className="mb-5 text-7xl font-bold text-white">Admission</h1>
                            <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                            
                        </div>
                    </div>

                </div>
            </div>
            <marquee className="text-3xl bg-gray-900 text-purple-300">To take Admission Please Click the below Link of your Desired College</marquee>
            <h1 className="text-5xl ml-20 underline font-bold my-10">College Name</h1>
            {data.map(Colleges => (
                <div

                    key={Colleges._id}
                    className="card w-96 bg-[#272030] text-white hover:bg-slate-300 hover:text-black mb-4 shadow-xl"
                >

                    <Link to={`/admissionform/${Colleges._id}`} className="text-3xl ml-20">{Colleges.college_name}</Link>
                </div>
            ))}


        </>
    );
};

export default Admission;