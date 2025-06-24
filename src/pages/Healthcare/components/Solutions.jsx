import React from "react";
import {
  healthcareWebSolutions,
  moonShapeImg,
} from "../../../content/constant";
import { useKeenSlider } from "keen-slider/react";
import { PiCaretLeftBold, PiCaretRightBold } from "react-icons/pi";
import useScrollTriggerAnimations from "../../../hooks/useScrollTriggerAnimations";

const Solutions = () => {
  const scrollRef = useScrollTriggerAnimations();
  const [sliderRef, instanceRef] = useKeenSlider(
    {
      loop: true,
      drag: true,
    },
    [
      (slider) => {
        let timeout;
        let mouseOver = false;
        function clearNextTimeout() {
          clearTimeout(timeout);
        }
        function nextTimeout() {
          clearTimeout(timeout);
          if (mouseOver) return;
          timeout = setTimeout(() => {
            slider.next();
          }, 10000);
        }
        slider.on("created", () => {
          slider.container.addEventListener("mouseover", () => {
            mouseOver = true;
            clearNextTimeout();
          });
          slider.container.addEventListener("mouseout", () => {
            mouseOver = false;
            nextTimeout();
          });
          nextTimeout();
        });
        slider.on("dragStarted", clearNextTimeout);
        slider.on("animationEnded", nextTimeout);
        slider.on("updated", nextTimeout);
      },
    ]
  );

  const prevClick = () => {
    if (instanceRef.current) {
      instanceRef.current.prev();
    }
  };

  const nextClick = () => {
    if (instanceRef.current) {
      instanceRef.current.next();
    }
  };

  return (
    <section className="max-h-fit bg-black relative z-0 overflow-hidden">
      <div ref={scrollRef} className="pt-14 wrapper">
        <img
          data-aos="fade-down-right"
          loading="lazy"
          src={moonShapeImg}
          width={400}
          height={400}
          className="object-contain absolute w-[28rem] h-[20rem] top-[-7.5rem] left-[-10rem] z-[-1]"
          alt=""
        />
        <img
          loading="lazy"
          src={moonShapeImg}
          width={400}
          height={400}
          className="object-contain absolute w-[28rem] h-[20rem] bottom-[-7.5rem] right-[-9rem] scale-x-[-1] scale-y-[-1] z-[1]"
          alt=""
        />
        {/* <img
          data-aos="fade-down-right"
          loading="lazy"
          src={circleImg}
          width={150}
          height={150}
          className="fromLeftToTopRight object-contain absolute w-[10rem] h-[10rem] top-[2rem] right-[-2rem] z-[-1]"
          alt=""
        /> */}
        <h2 data-aos="fade-up" className="text1 text-center">
          Explore Healthcare <span className="text-primary"> Solutions</span>
        </h2>
      </div>
      <div className="relative h-full pb-7 xl:pb-10">
        <div className="z-[-1] absolute top-0 h-[20%] w-full"></div>
        <div className="z-[-1] absolute top-[20%] h-[80%] w-full bg-black"></div>
        <div className="wrapper py-10 relative z-0">
          {/* Navigation Buttons (Outside the Slider) */}
          <div
            data-aos="fade-up"
            className="flex justify-center items-center gap-4 mb-6 mx-auto"
          >
            <button
              onClick={prevClick}
              className="bg-white text-black btn hover:bg-white/80 p-2"
            >
              <PiCaretLeftBold />
            </button>
            <button
              onClick={nextClick}
              className="bg-white text-black btn hover:bg-white/80 p-2"
            >
              <PiCaretRightBold />
            </button>
          </div>

          {/* Slider Content */}
          <div data-aos="fade-up" ref={sliderRef} className="keen-slider">
            {healthcareWebSolutions.map((item) => (
              <div key={item.id} className="keen-slider__slide space-y-10">
                <div className="flex justify-center items-center gap-4 mx-auto">
                  <img
                    src={item.image}
                    className="aspect-[4/3] w-full max-w-[30rem] object-cover rounded-2xl mx-auto"
                    alt=""
                  />
                </div>

                <div
                  className="max-w-5xl mx-auto p-2"
                  dangerouslySetInnerHTML={{
                    __html: item.html,
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solutions;
