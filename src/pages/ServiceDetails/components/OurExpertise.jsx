import React from "react";
import { circleImg } from "../../../data/constant";

const OurExpertise = ({ img }) => {
  return (
    <div className="py-14 lg:py-0 lg:-translate-y-[10rem] relative">
      <img
        loading="lazy"
        src={circleImg}
        width={150}
        height={150}
        className="object-contain absolute w-[12rem] h-[12rem] top-[2rem] right-[-2rem] -z-[1]"
        alt=""
      />
      <div className="wrapper">
        <div className="max-w-6xl mx-auto space-y-3">
          <h2 className="text2 text-primary text-center">Our Expertise</h2>
          <div className="">
            {[2, 4, 5, 6, 7, 8].map(() => (
              <div
                key={Math.random()}
                className="py-4 md:py-2 px-2 odd:bg-white even:bg-primary text-black flex flex-col md:odd:flex-row md:even:flex-row-reverse items-center gap-5 w-full"
              >
                <img
                  src={img}
                  className="object-cover rounded-full w-[12rem] aspect-square"
                  alt=""
                />
                <div className="space-y-4">
                  <h5 className="text3">Lorem ipsum dolor sit,</h5>
                  <ul className="list-disc pl-5">
                    <li>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Odio tempore, aliquam impedit facer
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Odio tempore, aliquam impedit facer
                    </li>
                    <li>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Odio tempore, aliquam impedit facer
                    </li>
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurExpertise;
