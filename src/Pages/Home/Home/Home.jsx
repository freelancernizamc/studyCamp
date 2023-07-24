import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import SearchBar from "../SearchBar/SearchBar";
import BestColleges from "./BestColleges/BestColleges";
import Gallary from "../Gallary/Gallary";
import ResearchPaper from "../ResearchPaper/ResearchPaper";
import FeedBack from "../FeedBack/FeedBack";



const Home = () => {
    return (
        <>
            <Helmet>
                <title>StudyCamp | Home</title>

            </Helmet>
            <div className="bg-black text-white">
                <Banner />
                <SearchBar />
                <BestColleges />
                <Gallary />
                <ResearchPaper />
                <FeedBack />
            </div>
        </>
    );
};

export default Home;