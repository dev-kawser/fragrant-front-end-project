import Banner from "../../Components/Banner/Banner";
import About from "../../Components/About/About";
import Features from "../../Components/Features/Features";
import VideoSection from "../../Components/VideoSection/VideoSection";
import Testimonial from "../../Components/Testimonial/Testimonial";
import CheckOut from "../../Components/CheckOut/CheckOut";
import Features2 from "../../Components/Features2/Features2";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <Features></Features>
            <VideoSection></VideoSection>
            <Testimonial></Testimonial>
            <CheckOut></CheckOut>
            <Features2></Features2>
        </div>
    );
};

export default Home;