import React from "react";
import { circleImg } from "../../data/constant";

const workProcess = [
  {
    id: 1,
    title: "Discovery",
    desc: "Understanding your specs in depth—your business goals, audience needs, and challenges.",
  },
  {
    id: 2,
    title: "Planning & Strategy Development",
    desc: "A well-defined roadmap ensures clarity, with deliverables, timelines, and milestones clearly outlined.",
  },
  {
    id: 3,
    title: "Design & Prototyping",
    desc: "Crafting wireframes and prototypes to visualize the user journey, incorporating your feedback at every stage.",
  },
  {
    id: 4,
    title: "Development & Testing",
    desc: "Leveraging modern tech stacks, we turn designs into functional solutions, rigorously tested for high performance and security.",
  },
  {
    id: 5,
    title: "Launch & Deployment",
    desc: "Efficiently deploying your solution to minimize downtime and maximize impact.",
  },
];

const WorkProcess = () => {
  return (
    <div className="py-14 relative">
      <img
        src={circleImg}
        className="z-[-1] absolute top-[2rem] left-[-2rem] w-[18rem] h-[18rem] object-contain aspect-square"
        alt=""
        loading="lazy"
      />
      <img
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
          From concept to completion, Specslo ensures that your specifications
          are the foundation of every solution we create. Our structured
          approach ensures clarity, collaboration, and measurable results at
          every stage.
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
