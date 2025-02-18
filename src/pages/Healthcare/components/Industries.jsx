import { useKeenSlider } from "keen-slider/react";
import React from "react";

const animation = { duration: 25000, easing: (t) => t };

const Industries = () => {
  const [sliderRef] = useKeenSlider({
    loop: true,
    renderMode: "performance",
    drag: true,
    slides: {
      perView: 1,
      spacing: 40,
      origin: "center",
    },
    breakpoints: {
      "(max-width: 500px)": {
        slides: {
          perView: 1,
          spacing: 40,
        },
      },
      "(min-width: 501px) and (max-width: 690px)": {
        slides: {
          perView: 2,
          spacing: 40,
        },
      },
      "(min-width: 691px)": {
        slides: {
          perView: 2.5,
          spacing: 40,
        },
      },
      "(min-width: 1024px)": {
        slides: {
          perView: 4,
          spacing: 40,
        },
      },
    },
    created(s) {
      s.moveToIdx(5, true, animation);
    },
    updated(s) {
      s.moveToIdx(s.track.details.abs + 5, true, animation);
    },
    animationEnded(s) {
      s.moveToIdx(s.track.details.abs + 5, true, animation);
    },
  });
  return (
    <div className="py-14 bg-white text-black">
      <div className="space-y-7">
        <div className="wrapper">
          <h2 className="text1 text-center">
            <span className="text-primary1">Industries</span> We Serve
          </h2>
        </div>
        <div ref={sliderRef} className="keen-slider">
          {industries.map((item) => (
            <div key={item.id} className="keen-slider__slide text-center space-y-3 p-5">
              <img
                src={item.image}
                alt={item.image}
                className="rounded-full object-cover"
                loading="lazy"
              />
              <h6 className="text4">{item.title}</h6>
              <p className="desc">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Industries;

const industries = [
  {
    id: 1,
    image: require("../../../assets/images/healthcare industries/1.jpeg"),
    title: "Hospitals and Multi-Specialty Clinics",
    desc: "Streamline operations, enhance patient engagement, and improve care delivery with customized digital tools.",
  },
  {
    id: 2,
    image: require("../../../assets/images/healthcare industries/2.jpeg"),
    title: "Diagnostic Centers",
    desc: "Automate lab processes and provide seamless result delivery for better efficiency and accuracy.",
  },
  {
    id: 3,
    image: require("../../../assets/images/healthcare industries/3.jpeg"),
    title: "Pharmaceutical Companies",
    desc: "Leverage analytics for drug trials, compliance, and market insights.",
  },
  {
    id: 4,
    image: require("../../../assets/images/healthcare industries/4.jpeg"),
    title: "Telemedicine Providers",
    desc: "Expand access to healthcare with secure and efficient telehealth platforms.",
  },
  {
    id: 5,
    image: require("../../../assets/images/healthcare industries/5.jpeg"),
    title: "Fitness and Wellness Centers",
    desc: "Engage clients through health monitoring apps and personalized fitness tools.",
  },
  {
    id: 6,
    image: require("../../../assets/images/healthcare industries/6.jpeg"),
    title: "Public Health Agencies",
    desc: "Track disease outbreaks, analyze trends, and deploy preventive measures effectively.",
  },
  {
    id: 7,
    image: require("../../../assets/images/healthcare industries/7.jpeg"),
    title: "Senior Care Providers",
    desc: "Build platforms for caregiver support, telehealth services, and elderly wellness programs.",
  },
  {
    id: 8,
    image: require("../../../assets/images/healthcare industries/8.jpeg"),
    title: "Health Research Organizations",
    desc: "Facilitate clinical trials and research initiatives with advanced dashboards and data management.",
  },
];
