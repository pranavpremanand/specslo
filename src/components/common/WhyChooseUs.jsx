import React from "react";

const steps = [
  {
    letter: "S",
    title: "Solutions that Fit",
    description: "Custom solutions designed specifically for your unique business needs."
  },
  {
    letter: "P",
    title: "Pushing Boundaries",
    description: "Innovative approaches that keep you ahead of the competition."
  },
  {
    letter: "E",
    title: "End-to-End Excellence",
    description: "Comprehensive service from initial concept to ongoing support."
  },
  {
    letter: "C",
    title: "Customer-Centric",
    description: "Your goals and satisfaction are at the center of everything we do."
  },
  {
    letter: "S",
    title: "Scales as You Grow",
    description: "Flexible solutions that evolve with your business needs."
  },
  {
    letter: "L",
    title: "Loyal Support",
    description: "Dedicated team committed to your long-term success."
  },
  {
    letter: "O",
    title: "Outcomes That Matter",
    description: "Focused on delivering real, measurable results for your business."
  }
];

const WhyChooseUs = () => {
  return (
    <div className="py-14 z-[-2] bg-white text-black relative overflow-hidden">
      <div className="wrapper space-y-8">
        <div className="text-center space-y-3">
          <h2 className="text1 text-center" data-aos="fade-up">
            Why Brands Choose <span className="text-primary1">Specslo?</span>
          </h2>

          <p className="desc max-w-4xl mx-auto text-center" data-aos="fade-up" data-aos-delay="100">
            We're not just developers — we're your strategic tech partner, turning
            ideas into intelligent, scalable digital solutions. Here's what sets
            us apart:
          </p>
        </div>

        {/* Staircase Container */}
        <div className="relative max-w-5xl mx-auto pt-10">
          {/* Desktop Staircase (hidden on mobile) */}
          <div className="hidden lg:block">
            {steps.map((step, index) => (
              <div 
                key={index}
                className="relative w-full"
                style={{ 
                  marginLeft: `${index * 10}%`,
                  marginBottom: index === steps.length - 1 ? '0' : '1rem',
                  zIndex: steps.length - index
                }}
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="bg-black text-white shadow-lg rounded-s-lg rounded-e-full p-3 border-l-4 border-primary hover:shadow-xl transition-shadow duration-300 group w-1/2">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary1 flex items-center justify-center text-black text2 flex-shrink-0 shadow-md group-hover:scale-110 transition-transform duration-300">
                      {step.letter}
                    </div>
                    <div className="space-y-2">
                      <h3 className="font-bold text4">{step.title}</h3>
                      {/* <p className="text-gray-600 text-sm">{step.description}</p> */}
                    </div>
                  </div>
                </div>
                
                {/* Connector Line */}
                {/* {index < steps.length - 1 && (
                  <div 
                    className="absolute bottom-0 right-0 w-[calc(100%-5%+1rem)] h-10 border-r-2 border-b-2 border-primary1/30 rounded-br-xl"
                    style={{ 
                      transform: 'translateY(50%)'
                    }}
                  ></div>
                )} */}
              </div>
            ))}
          </div>

          {/* Mobile Staircase (visible only on mobile) */}
          <div className="lg:hidden space-y-4">
            {steps.map((step, index) => (
              <div 
                key={index}
                className="relative"
                data-aos="fade-up"
                data-aos-delay={index * 50}
              >
                <div className="bg-black text-white shadow-lg rounded-lg p-4 border-l-4 border-primary hover:shadow-xl transition-shadow duration-300 group">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary1 flex items-center justify-center text-black text-xl font-bold flex-shrink-0 shadow-md group-hover:scale-110 transition-transform duration-300">
                      {step.letter}
                    </div>
                    <div className="space-y-1">
                      <h3 className="font-bold text4">{step.title}</h3>
                      {/* <p className="text-gray-300 text-xs">{step.description}</p> */}
                    </div>
                  </div>
                </div>
                
                {/* Connector Line for Mobile */}
                {/* {index < steps.length - 1 && (
                  <div className="absolute left-5 bottom-0 w-0 h-4 border-l-2 border-primary1/30"></div>
                )} */}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;