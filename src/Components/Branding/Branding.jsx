import img1 from "../../assets/branimg1.png"
import img2 from "../../assets/branimg2.png"
import img3 from "../../assets/branimg3.png"
import img4 from "../../assets/branimg4.png"
import img5 from "../../assets/branimg5.png"
import img6 from "../../assets/branimg6.png"

const Branding = () => {
    return (
        <div className="w-full lg:mx-auto px-2 max-w-6xl lg:my-20 my-10">

            <div className="text-center mb-10">
                <h1 className="jost lg:text-6xl text-5xl uppercase text-[#74909B] font-normal tracking-[5px]">
                    INstagram <span className="lg:text-3xl text-2xl">#Fragrant_Hub</span>
                </h1>
            </div>

            <div className="grid lg:grid-cols-6 grid-cols-2 lg:gap-5 gap-2">
                <img src={img1} alt="" />
                <img src={img2} alt="" />
                <img src={img3} alt="" />
                <img src={img4} alt="" />
                <img src={img5} alt="" />
                <img src={img6} alt="" />
            </div>
        </div>
    );
};

export default Branding;