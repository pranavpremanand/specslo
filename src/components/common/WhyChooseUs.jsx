import React from "react";

const WhyChooseUs = () => {
  return (
    <div className="py-14 z-[-2] bg-white text-black relative overflow-hidden">
      <div
        data-aos="fade-down-right"
        className="z-[-1] w-[8rem] h-[8rem] rounded-full bg-[radial-gradient(circle,_#FFFFFF,_#FFFF82)] absolute top-[-1.5rem] left-[-1.5rem] drop-shadow-2xl"
      ></div>
      <div
        data-aos="fade-up-right"
        className="z-[-1] w-[8rem] h-[8rem] rounded-full bg-[radial-gradient(circle,_#FFFFFF,_#FFFF82)] absolute bottom-1/3 right-4 sm:right-[4rem] drop-shadow-2xl"
      ></div>

      <div className="wrapper space-y-3">
        <h2 className="text1 text-center">
          Why Brands Choose <span className="text-primary1">Specslo?</span>
        </h2>

        <p className="desc max-w-4xl mx-auto text-center">
          We’re not just developers — we’re your strategic tech partner, turning
          ideas into intelligent, scalable digital solutions. Here’s what sets
          us apart:
        </p>

        <ul className="space-y-5 sm:space-y-8 pt-3 max-w-2xl mx-auto">
          <li className="relative pl-[1.8rem] sm:pl-[2.6rem]">
            <span className="text-black text1 absolute inset-0 -top-[.4rem] sm:-top-[1.1rem]">
              S
            </span>{" "}
            - <span className="font-bold text4">Smart Solutions</span> : Custom-built
            tech aligned with your exact needs.
          </li>
          <li className="relative pl-[1.8rem] sm:pl-[2.6rem]">
            <span className="text-black text1 absolute inset-0 -top-[.4rem] sm:-top-[1.1rem]">
              P
            </span>{" "}
            - <span className="font-bold text4">Progressive Thinking</span> : We lead
            with AI, automation, and next-gen tools.
          </li>
          <li className="relative pl-[1.8rem] sm:pl-[2.6rem]">
            <span className="text-black text1 absolute inset-0 -top-[.4rem] sm:-top-[1.1rem]">
              E
            </span>{" "}
            - <span className="font-bold text4">End-to-End Delivery</span> : From idea
            to launch — we’ve got you covered.
          </li>
          <li className="relative pl-[1.8rem] sm:pl-[2.6rem]">
            <span className="text-black text1 absolute inset-0 -top-[.4rem] sm:-top-[1.1rem]">
              C
            </span>{" "}
            - <span className="font-bold text4">Customer-Centric</span> : Your vision
            drives everything we create.
          </li>
          <li className="relative pl-[1.8rem] sm:pl-[2.6rem]">
            <span className="text-black text1 absolute inset-0 -top-[.4rem] sm:-top-[1.1rem]">
              S
            </span>{" "}
            - <span className="font-bold text4">Scalable Systems</span> : Solutions
            that grow with your business.
          </li>
          <li className="relative pl-[1.8rem] sm:pl-[2.6rem]">
            <span className="text-black text1 absolute inset-0 -top-[.4rem] sm:-top-[1.1rem]">
              L
            </span>{" "}
            - <span className="font-bold text4">Long-Term Support</span> : Continuous
            updates, improvements, and care.
          </li>
          <li className="relative pl-[1.8rem] sm:pl-[2.6rem]">
            <span className="text-black text1 absolute inset-0 -top-[.4rem] sm:-top-[1.1rem]">
              O
            </span>{" "}
            - <span className="font-bold text4">Outcome-Focused</span> : We don’t just
            build. We help you succeed.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default WhyChooseUs;
