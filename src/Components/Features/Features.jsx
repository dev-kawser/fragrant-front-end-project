import img from "../../assets/featureimg.png"

const Features = () => {
    return (
        <div className="font-light px-2 lg:mx-auto mb-14 max-w-6xl flex lg:flex-row flex-col gap-5 justify-center items-center">
            <div className="lg:space-y-8 space-y-5 text-center">
                <div className="space-y-1">
                    <h4 className="jost tracking-wider font-normal text-xl lg:text-2xl text-[#74909B] uppercase">
                        Wireless Connectivity
                    </h4>
                    <p className="text-[#626363]">
                        Seamlessly connect to your devices Bluetooth for a tangle-free listening experience.
                    </p>
                </div>
                <div className="space-y-1">
                    <h4 className="jost tracking-wider font-normal text-xl lg:text-2xl text-[#74909B] uppercase">
                        Long Battery Life
                    </h4>
                    <p className="text-[#626363]">
                        Enjoy hours of uninterrupted music with the long-lasting battery of Heady headphones.
                    </p>
                </div>
                <div className="space-y-1">
                    <h4 className="jost tracking-wider font-normal text-xl lg:text-2xl text-[#74909B] uppercase">
                        Sleek Design
                    </h4>
                    <p className="text-[#626363]">
                        Show off the stylish and sleek design of the headphones, available in various colors.
                    </p>
                </div>
            </div>

            <div className="relative">
                <img className="relative z-0" src={img} alt="" />
                <div className="absolute h-1/4 bottom-0 inset-x-0 bg-gradient-to-t from-white to-transparent z-10"></div>
            </div>

            <div className="lg:space-y-8 space-y-5 text-center lg:pt-0 pt-7">
                <div className="space-y-1">
                    <h4 className="jost tracking-wider font-normal text-xl lg:text-2xl text-[#74909B] uppercase">
                        Superior sound quality                    </h4>
                    <p className="text-[#626363]">
                        Enjoy rich, immersive sound with high-fidelity audio technology from heady.                    </p>
                </div>
                <div className="space-y-1">
                    <h4 className="jost tracking-wider font-normal text-xl lg:text-2xl text-[#74909B] uppercase">
                        noise isolation                    </h4>
                    <p className="text-[#626363]">
                        Block out external distractions immerse you in your music and yourself in your music.                    </p>
                </div>
                <div className="space-y-1">
                    <h4 className="jost tracking-wider font-normal text-xl lg:text-2xl text-[#74909B] uppercase">
                        Comfortable fit                    </h4>
                    <p className="text-[#626363]">
                        Designed with plush ear cushions and an adjustable headband for listening sessions.                    </p>
                </div>
            </div>
        </div>
    );
};

export default Features;