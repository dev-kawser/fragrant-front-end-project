

const Testimonial = () => {


    return (
        <div className="mx-2 lg:mx-auto max-w-4xl flex justify-center items-center gap-5 lg:gap-10">
            <div>
                <p className="lg:text-[600px] text-[200px] font-medium text-[#E4EDF1] syne inline">
                    “
                </p>
            </div>

            <div>
                <p className="lg:text-4xl font-light text-[#626363]">
                    This perfume is a sensory masterpiece! Every time I wear it, I'm enveloped in a cloud of elegance and sophistication. It's become my signature scent.
                </p>
                <h3 className="jost lg:text-2xl text-[#74909B] mt-3 lg:mt-5 font-light uppercase tracking-wider">
                    - Joshima Lin
                </h3>
                <div className="flex gap-3 items-center mt-5 lg:mt-10">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <circle cx="8" cy="8" r="8" fill="#74909B" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <circle cx="8" cy="8" r="7" stroke="#74909B" strokeWidth="2" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <circle cx="8" cy="8" r="7" stroke="#74909B" strokeWidth="2" />
                    </svg>
                </div>
            </div>
        </div>
    );
};

export default Testimonial;
