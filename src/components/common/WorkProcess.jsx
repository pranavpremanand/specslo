import React from "react";
import { circleImg } from "../../content/constant";

const workProcess = [
  {
    id: 1,
    title: "Discovery",
    desc: "We dive deep into your specs, goals, and business challenges to understand exactly what you need.",
  },
  {
    id: 2,
    title: "Planning",
    desc: "We turn specs into a solid strategy — outlining timelines, tech stacks, and milestones.",
  },
  {
    id: 3,
    title: "Design",
    desc: "UI/UX designs that reflect your vision and align with your audience.",
  },
  {
    id: 4,
    title: "Prototyping",
    desc: "Interactive prototypes that bring your idea to life — fast feedback, faster decisions.",
  },
  {
    id: 5,
    title: "Development",
    desc: "We code your solution with precision — scalable, secure, and built to perform.",
  },
  {
    id: 6,
    title: "Testing",
    desc: "Every feature is tested across devices to ensure performance, security, and usability.",
  },
  {
    id: 7,
    title: "Launch",
    desc: "Your solution goes live — with a smooth, stress-free rollout.",
  },
  {
    id: 8,
    title: "Deployment",
    desc: "We deploy across environments — ready for scale and real-world use.",
  },
  {
    id: 9,
    title: "Post-Launch Support",
    desc: "Your specs evolve, and so do we. We offer updates, maintenance, and optimization to keep everything running at its best.",
  },
];

const WorkProcess = () => {
  return (
    <div className="py-14 relative">
      <img
        data-aos="fade-down-right"
        src={circleImg}
        className="z-[-1] absolute top-[2rem] left-[-2rem] w-[18rem] h-[18rem] object-contain aspect-square"
        alt=""
        loading="lazy"
      />
      <img
        data-aos="fade-up-right"
        src={circleImg}
        className="absolute bottom-0 right-[2rem] w-[11rem] h-[11rem] object-contain aspect-square z-[-1]"
        alt=""
        loading="lazy"
      />
      <div className="wrapper space-y-3">
        <h3 className="text1 text-center">
          How We Bring Your
          <br />
          <span className="text-primary">Specs to Life</span>
        </h3>
        <p className="desc text-center max-w-4xl mx-auto text-[#FEFEFE]">
          From first idea to final launch — every step is built around your
          specs.
        </p>
        <div className="pt-5 flex flex-wrap justify-center gap-5 sm:gap-7 max-w-5xl mx-auto">
          {workProcess.map((item) => (
            <div
              key={item.id}
              className="group hover:bg-gradient-to-b from-primary/30 to-primary/10 
              flex flex-col gap-3 p-5 sm:p-8 rounded-2xl border-2 border-white/40 
              transition-colors duration-500 sm:w-[calc(50%-1.5rem)] lg:w-[calc(33.5%-1.5rem)]"
            >
              <h4 className="text3 text-primary1 group-hover:text-white">
                {item.title}
              </h4>
              <p className="text-[#FEFEFE] group-hover:text-[#D6D6A6]">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WorkProcess;
