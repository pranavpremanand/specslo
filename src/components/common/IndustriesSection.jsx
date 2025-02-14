import React from "react";
import { circleImg, industries } from "../../data/constant";
import moonShapeImg from "../../assets/images/yellow-moon-shape.png";

const IndustriesSection = () => {
  return (
    <section className="max-h-fit bg-[#242424] relative -z-[1] overflow-hidden">
      <div className="pt-14 wrapper">
        <img
          src={moonShapeImg}
          width={400}
          height={400}
          className="object-contain absolute w-[28rem] h-[20rem] top-[-7.5rem] left-[-10rem] -z-[1]"
          alt=""
        />
        <img
          src={moonShapeImg}
          width={400}
          height={400}
          className="object-contain absolute w-[28rem] h-[20rem] bottom-[-7.5rem] right-[-9rem] scale-x-[-1] scale-y-[-1] -z-0"
          alt=""
        />
        <img
          src={circleImg}
          width={150}
          height={150}
          className="object-contain absolute w-[10rem] h-[10rem] top-[2rem] right-[-2rem] -z-0"
          alt=""
        />
        <h2 className="text1 text-center">
          Industry-Specific Specs <br />
          <span className="text-primary">We Excel In</span>
        </h2>
      </div>
      <div className="relative h-full pb-7 xl:pb-10">
        <div className="z-[-1] absolute top-0 h-1/2 w-full"></div>
        <div className="z-[-1] absolute top-1/2 h-1/2 w-full bg-black"></div>
        <div className="wrapper grid sm:grid-cols-2 xl:grid-cols-4 gap-7 pt-10">
          {industries.slice(0, 4).map((item) => (
            <div className="relative backdrop-blur-lg space-y-5 border border-white/20 p-5 rounded-[1rem] shadow-large shadow-black/20 hover:bg-black transition-all duration-500">
              <div className="bg-white/5 flex justify-center items-center w-[3rem] h-[3rem] rounded-full border-2 border-white/10">
                <img
                  alt={item.title}
                  src={item.image}
                  width={50}
                  height={50}
                  className="w-[1.5rem] h-[1.5rem] object-contain"
                />
              </div>
              <h6 className="text4">{item.title}</h6>
              <p className="desc text-[#A4B4C3]">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="bg-black lg:h-[30rem] pb-14 lg:pb-0">
        <div className="relative h-full">
          <div className="z-0 absolute top-0 h-1/3 w-full bg-[#242424]"></div>
          <div className="z-[-1] absolute top-1/2 h-2/3 w-full bg-black"></div>
          <div className="wrapper grid sm:grid-cols-2 xl:grid-cols-3 xl:max-w-5xl gap-7 xl:pt-4">
            {industries.slice(4, 7).map((item) => (
              <div
                key={item.id}
                className="sm:last:col-span-2 sm:last:w-1/2 xl:last:col-span-1 xl:last:w-full mx-auto backdrop-blur-lg space-y-5 border border-white/20 p-5 rounded-[1rem] shadow-large shadow-black/20"
              >
                <div className="bg-white/5 flex justify-center items-center w-[3rem] h-[3rem] rounded-full border-2 border-white/10">
                  <img
                    alt={item.title}
                    src={item.image}
                    width={50}
                    height={50}
                    className="w-[1.5rem] h-[1.5rem] object-contain"
                  />
                </div>
                <h6 className="text4">{item.title}</h6>
                <p className="desc text-[#A4B4C3]">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default IndustriesSection;
