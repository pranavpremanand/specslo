import React, { useState } from "react";
import { faqs } from "../../content/constant";
import { AiFillMinusCircle, AiFillPlusCircle } from "react-icons/ai";
import img from "../../assets/images/faq.webp";

const Faqs = () => {
  const [activeId, setActiveId] = useState(1);

  const toggleFaq = (id) => {
    setActiveId(id);
  };

  return (
    <div className="py-14 bg-white text-black">
      <div className="wrapper !max-w-6xl grid md:grid-cols-[30%,1fr] gap-7">
        <div data-aos="fade-right">
          <div className="border-y-2 border-black py-3 w-fit">
            <h2 className="text1 z-[2] relative">
              <div className="absolute left-0 top-0 w-[3rem] h-full bg-primary z-0"></div>
              <p className="pl-4">
                <span className="relative z-[1] font-glacial">
                  Frequently <br />
                  Asked <br />
                  Questions
                </span>
              </p>
            </h2>
          </div>
          <img
            data-aos="fade-up"
            src={img}
            alt="FAQ"
            loading="lazy"
            className="object-contain md:block hidden"
          />
        </div>
        <div className="">
          <div
            data-aos="fade-up"
            className="space-y-3 col-start-1 row-start-3 lg:row-start-2 lg:row-span-5"
          >
            {faqs.map((item) => (
              <div
                key={item.id}
                className="overflow-hidden transition-all duration-500 border-b border-gray-200 last:border-b-0 pb-4"
              >
                <button
                  onClick={() => toggleFaq(item.id)}
                  className="flex justify-between gap-4 w-full py-1 lg:py-3"
                >
                  <p className="desc !font-bold text-start">{item.question}</p>
                  <div className="mt-1">
                    {item.id === activeId ? (
                      <AiFillMinusCircle size={20} />
                    ) : (
                      <AiFillPlusCircle size={20} />
                    )}
                  </div>
                </button>
                <p
                  className={`desc text-gray-700 transition-all duration-500 ease-in-out overflow-hidden ${
                    activeId === item.id
                      ? "max-h-[500px] opacity-100"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  {item.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faqs;
