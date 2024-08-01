import Banner from "../../Components/Banner/Banner";
import About from "../../Components/About/About";
import Features from "../../Components/Features/Features";
import VideoSection from "../../Components/VideoSection/VideoSection";
import Testimonial from "../../Components/Testimonial/Testimonial";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <Features></Features>
            <VideoSection></VideoSection>
            <Testimonial></Testimonial>
        </div>
    );
};

export default Home;