import React from "react";

const WhyChooseUs = () => {
  return (
    <div className="py-14 z-[-2] bg-white text-black relative overflow-hidden">
      <div className="z-[-1] w-[7rem] h-[7rem] rounded-full bg-[radial-gradient(circle,_#FFFFFF,_#FFFF82)] absolute top-[-1.5rem] left-[-1.5rem] drop-shadow-2xl"></div>
      <div className="z-[-1] w-[7rem] h-[7rem] rounded-full bg-[radial-gradient(circle,_#FFFFFF,_#FFFF82)] absolute bottom-1/3 right-4 sm:right-[4rem] drop-shadow-2xl"></div>

      <div className="wrapper">
        <h2 className="text1 text-center">
          Why Choose <span className="text-primaryDim">Specslo?</span>
        </h2>

        <ul className="space-y-4 mt-7 max-w-5xl mx-auto">
          <li className="relative pl-[1.1rem] sm:pl-[1.8rem]">
            <span className="text-primaryDim text2 absolute inset-0 -top-0 sm:-top-[.5rem]">S</span> - Solutions that
            Fit: Every project is built around your unique specs—no
            cookie-cutter solutions, just what your business needs.
          </li>
          <li className="relative pl-[1.1rem] sm:pl-[1.8rem]">
            <span className="text-primaryDim text2 absolute inset-0 -top-0 sm:-top-[.5rem]">P</span> - Pushing
            Boundaries: From AI to machine learning, we bring future-forward
            tech that gives you a competitive edge.
          </li>
          <li className="relative pl-[1.1rem] sm:pl-[1.8rem]">
            <span className="text-primaryDim text2 absolute inset-0 -top-0 sm:-top-[.5rem]">E</span> - End-to-End
            Excellence: We handle it all—from planning to launch and
            beyond—delivering a seamless, stress-free experience.
          </li>
          <li className="relative pl-[1.1rem] sm:pl-[1.8rem]">
            <span className="text-primaryDim text2 absolute inset-0 -top-0 sm:-top-[.5rem]">C</span> - Customer-Centric:
            Your vision and feedback drive our work, ensuring every solution
            feels like it was made just for you.
          </li>
          <li className="relative pl-[1.1rem] sm:pl-[1.8rem]">
            <span className="text-primaryDim text2 absolute inset-0 -top-0 sm:-top-[.5rem]">S</span> - Scale as You
            Grow: Our designs are built to grow with you, adapting effortlessly
            to new needs.
          </li>
          <li className="relative pl-[1.1rem] sm:pl-[1.8rem]">
            <span className="text-primaryDim text2 absolute inset-0 -top-0 sm:-top-[.5rem]">L</span> - Loyal Support: We
            don’t stop at launch. Count on us for ongoing updates, support, and
            insights as your business evolves.
          </li>
          <li className="relative pl-[1.1rem] sm:pl-[1.8rem]">
            <span className="text-primaryDim text2 absolute inset-0 -top-0 sm:-top-[.5rem]">O</span> - Outcomes That
            Matter: We’re not just here to complete a project; we’re here to
            make a real impact that helps you succeed.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default WhyChooseUs;
