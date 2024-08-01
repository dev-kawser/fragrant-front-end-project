import img1 from "../../assets/checkimg1.png"
import img2 from "../../assets/checkimg2.png"
import img3 from "../../assets/checkimg3.png"

const CheckOut = () => {
    return (
        <div className="mx-2 lg:-mt-40 mt-10 lg:mx-auto max-w-6xl">
            <div className="text-center">
                <h1 className="jost lg:text-6xl text-5xl uppercase text-[#74909B] font-normal tracking-[5px]">
                    Check our perfumes
                </h1>
                <p className="lg:text-xl text-lg mt-3 text-[#626363]">
                    Check it out our varieties of colorful headphones.
                </p>
            </div>
            <div className="mt-10 grid lg:grid-cols-3 grid-cols-1 gap-5">
                <div>
                    <img src={img1} alt="" />
                    <div className="mt-5 flex flex-col justify-center items-center text-[#74909B]">
                        <h4 className="uppercase text-2xl">
                            Best perfume
                        </h4>
                        <div className="flex gap-1 items-center">
                            <h3 className="text-2xl font-normal">$250</h3>
                            <h3 className="text-xl font-light line-through">$290</h3>
                        </div>
                    </div>
                </div>
                <div>
                    <img src={img2} alt="" />
                    <div className="mt-5 flex flex-col justify-center items-center text-[#74909B]">
                        <h4 className="uppercase text-2xl">
                            Best perfume
                        </h4>
                        <div>
                            <h3 className="text-2xl font-normal">$250</h3>
                        </div>
                    </div>
                </div>
                <div>
                    <img src={img3} alt="" />
                    <div className="mt-5 flex flex-col justify-center items-center text-[#74909B]">
                        <h4 className="uppercase text-2xl">
                            Best perfume
                        </h4>
                        <div>
                            <h3 className="text-2xl font-normal">$250</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CheckOut;