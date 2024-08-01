import { useState } from "react";

const Faq = () => {

    const [isOpen, setIsOpen] = useState(null);
    const dataArr = [{ title: "Are your Perfumes Branded?", description: 'Yes, our each and every product are branded.', }, { title: "How long does the fragnance last?", description: "Yes, our each and every product are branded.", }, { title: "Can I replace the product?", description: "Yes, our each and every product are branded.", },];
    const toggle = (idx) => {
        setIsOpen((prevIdx) => (prevIdx === idx ? null : idx))
    };


    return (
        <div>
            <div className="w-full lg:mx-auto mx-2 max-w-4xl bg-white p-3">

                <div className="text-center mb-10">
                    <h1 className="jost lg:text-6xl text-5xl uppercase text-[#74909B] font-normal tracking-[5px]">
                        FAQs Section
                    </h1>
                </div>

                {dataArr.map((PerAccordion, idx) => (
                    <div key={idx} className="border-b border-gray-500/50 py-3 last-of-type:border-b-0">
                        <button onClick={() => toggle(idx)} className="flex h-full w-full items-center justify-between font-medium outline-none">
                            <span className="jost lg:text-2xl text-xl uppercase text-[#74909B] font-normal">{PerAccordion.title}</span>
                            <span className="rounded-full p-2">
                                <svg className="ml-8 size-3 shrink-0 fill-[#74909B]" xmlns="http://www.w3.org/2000/svg">
                                    <rect y="5" width="12" height="2" rx="1" className={`origin-center transform transition duration-200 ease-out ${isOpen === idx && '!rotate-180'}`} />
                                    <rect y="5" width="12" height="2" rx="1" className={`origin-center rotate-90 transform transition duration-200 ease-out ${isOpen === idx && '!rotate-180'}`} />
                                </svg>
                            </span>
                        </button>
                        <div className={`grid overflow-hidden transition-all duration-300 ease-in-out ${isOpen === idx ? 'grid-rows-[1fr] pb-1 pt-3 opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
                            <div className="overflow-hidden text-[#626363] pr-4 lg:text-lg">{PerAccordion.description}</div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Faq;