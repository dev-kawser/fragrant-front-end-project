import img from "../../assets/bannerimg.png"

const Banner = () => {
    return (
        <div className="bg-gradient-to-b from-blue-100 to-white pt-24">
            <div className="flex lg:flex-row flex-col justify-center items-center gap-10 mx-2 lg:mx-auto max-w-6xl">
                <div className="lg:w-1/2">
                    <img className="lg:h-[673px] h-[325px] w-[250px] lg:w-[582px]" src={img} alt="" />
                </div>
                <div className="lg:w-1/2 text-center">
                    <h1 className="lg:text-7xl text-4xl text-[#74909B] uppercase font-light jost tracking-[9px]">
                        Essence of Elegance
                    </h1>

                    <p className="lg:text-[20px] text-[#626363] lg:mt-5 mt-4">
                        Immerse yourself in a symphony of delightful notes that dance upon your skin. Our perfumes blend artistry and passion, capturing the essence of femininity and allure. Enchanting aromas transport you to a realm of pure indulgence.
                    </p>
                    <button className="bg-white text-center text-[#626363] lg:px-10 px-7 py-3 lg:py-5 mt-6 lg:mt-9 shadow-md">
                        Order Now
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Banner;