import {
  FaSearch,
  FaClipboardList,
  FaPaintBrush,
  FaLaptopCode,
  FaVial,
  FaRocket,
  FaServer,
  FaHeadset,
} from "react-icons/fa";
import { MdOutlinePreview } from "react-icons/md";

const workProcess = [
  {
    id: 1,
    title: "Discovery",
    desc: "We dive deep into your specs, goals, and business challenges to understand exactly what you need.",
    icon: <FaSearch className="text-2xl" />,
  },
  {
    id: 2,
    title: "Planning",
    desc: "We turn specs into a solid strategy — outlining timelines, tech stacks, and milestones.",
    icon: <FaClipboardList className="text-2xl" />,
  },
  {
    id: 3,
    title: "Design",
    desc: "UI/UX designs that reflect your vision and align with your audience.",
    icon: <FaPaintBrush className="text-2xl" />,
  },
  {
    id: 4,
    title: "Prototyping",
    desc: "Interactive prototypes that bring your idea to life — fast feedback, faster decisions.",
    icon: <MdOutlinePreview className="text-2xl" />,
  },
  {
    id: 5,
    title: "Development",
    desc: "We code your solution with precision — scalable, secure, and built to perform.",
    icon: <FaLaptopCode className="text-2xl" />,
  },
  {
    id: 6,
    title: "Testing",
    desc: "Every feature is tested across devices to ensure performance, security, and usability.",
    icon: <FaVial className="text-2xl" />,
  },
  {
    id: 7,
    title: "Launch",
    desc: "Your solution goes live — with a smooth, stress-free rollout.",
    icon: <FaRocket className="text-2xl" />,
  },
  {
    id: 8,
    title: "Deployment",
    desc: "We deploy across environments — ready for scale and real-world use.",
    icon: <FaServer className="text-2xl" />,
  },
  {
    id: 9,
    title: "Post-Launch Support",
    desc: "Your specs evolve, and so do we. We offer updates, maintenance, and optimization to keep everything running at its best.",
    icon: <FaHeadset className="text-2xl" />,
  },
];

const WorkProcess = () => {
  return (
    <div className="py-14 relative">
      <div className="wrapper space-y-6">
        <h3 className="text1 text-center" data-aos="fade-up">
          How We Bring
          <span className="text-primary font-glacial"> Specs to Life</span>
        </h3>

        {/* Timeline Container */}
        <div className="relative mt-12 max-w-6xl mx-auto">
          {/* Vertical Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-primary/80 to-primary/30 rounded-full hidden md:block"></div>

          {/* Timeline Items */}
          <div className="space-y-12 md:space-y-0">
            {workProcess.map((item, index) => (
              <div
                key={item.id}
                className={`relative flex flex-col md:flex-row items-center md:justify-between gap-8 md:gap-0 mb-12 ${
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
                data-aos={index % 2 === 0 ? "fade-left" : "fade-right"}
                data-aos-delay={index * 50}
              >
                {/* Timeline Circle */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-full bg-primary flex items-center justify-center z-10 hidden md:flex transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-primary/50 text-white">
                  {item.icon}
                </div>

                {/* Mobile Timeline Line (visible only on small screens) */}
                {index < workProcess.length - 1 && (
                  <div className="md:hidden absolute left-1/2 transform -translate-x-1/2 h-16 w-1 bg-gradient-to-b from-primary/80 to-primary/30 top-[100%] z-0"></div>
                )}

                {/* Content Box */}
                <div
                  className={`w-full md:w-[45%] group hover:bg-gradient-to-b from-primary/30 to-primary/10 
                  flex flex-col gap-3 p-5 sm:p-8 rounded-2xl border-2 border-white/40 
                  transition-all duration-500 hover:shadow-lg hover:shadow-primary/20 relative`}
                >
                  {/* Mobile Icon (visible only on small screens) */}
                  <div className="md:hidden absolute -top-6 left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-full bg-primary flex items-center justify-center z-10 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-primary/50 text-white">
                    {item.icon}
                  </div>

                  {/* Step Number */}
                  <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">
                    {item.id}
                  </div>

                  <h4 className="text3 text-primary1 group-hover:text-white mt-6 md:mt-0">
                    {item.title}
                  </h4>
                  <p className="text-[#FEFEFE] group-hover:text-[#D6D6A6]">
                    {item.desc}
                  </p>
                </div>

                {/* Empty Div for Layout */}
                <div className="w-full md:w-[45%]"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkProcess;
