import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import SearchBar from "../SearchBar/SearchBar";



const Home = () => {
    return (
        <>
            <Helmet>
                <title>StudyCamp | Home</title>

            </Helmet>
            <div className="bg-black text-white">
                <Banner />
                <SearchBar />
            </div>
        </>
    );
};

export default Home;