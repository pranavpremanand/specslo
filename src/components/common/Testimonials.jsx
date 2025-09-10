import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import { testimonials } from "../../content/constant";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";
import useScrollTriggerAnimations from "../../hooks/useScrollTriggerAnimations";
import { useKeenSlider } from "keen-slider/react";

const animation = { duration: 40000, easing: (t) => t };

export default function Testimonials() {
  const swiperRef = useRef(null);

  const scrollRef = useScrollTriggerAnimations();
  const [sliderRef, instanceRef] = useKeenSlider({
    loop: true,
    renderMode: "performance",
    drag: true,
    slides: {
      perView: 2,
      spacing: 30,
      origin: "auto",
    },
    breakpoints: {
      "(max-width: 650px)": {
        slides: {
          perView: 1,
          spacing: 10,
        },
      },
      "(min-width: 651px)": {
        slides: {
          perView: 1.5,
          spacing: 20,
        },
      },
      "(min-width: 1024px)": {
        slides: {
          perView: 3,
          spacing: 30,
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
    <div className="py-14 relative overflow-hidden">
      <div data-aos="fade-up" className="wrapper text-center space-y-3 mb-8">
        <h2 className="text1 border-b-2 pb-1 border-primary w-fit mx-auto">
          Client Success{" "}
          <span className="text-black bg-primary px-1 font-glacial">
            Stories
          </span>
        </h2>
        <p className="desc max-w-3xl mx-auto">
          Hear how Specslo’s spec-driven approach has helped clients transform
          operations, enhance user experiences, and achieve measurable growth
          across industries.
        </p>
      </div>

      <div
        data-aos="fade-up"
        ref={sliderRef}
        className="keen-slider w-full pt-6"
      >
        {testimonials.concat(testimonials, testimonials).map((item, i) => (
          <div
            key={Math.random() * i}
            className="flex flex-col gap-4 keen-slider__slide bg-gradient-to-br from-white/30 via-white/10 to-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20"
          >
            <p className="desc">{item.review}</p>
            <div className="grid grid-cols-[5rem,1fr] items-center">
              <img
                src={item.image}
                className="z-[1] w-[4rem] h-[4rem] min-w-[4rem] object-cover rounded-full border-4 border-black"
                alt=""
                loading="lazy"
              />
              <div className="space-y-2">
                <div className="space-y-1">
                  <p className="text-primary2 text4 !font-medium">
                    {item.name}
                  </p>
                  <div className="text-uppercase">
                    {item.position}, {item.company}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
