import { useLoaderData } from "react-router-dom";
import Banner from "../Banner/Banner";
import Books from "../Books/Books";



const Home = () => {

    return (
        <div className="bg-white text-black">
            <div className="container mx-auto">
                <Banner></Banner>
                <Books></Books>
            </div>
        </div>
    );
};

export default Home;