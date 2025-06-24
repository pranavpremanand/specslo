import { industries, moonShapeImg } from "../../content/constant";
import useScrollTriggerAnimations from "../../hooks/useScrollTriggerAnimations";

const IndustriesSection = () => {
  const scrollRef = useScrollTriggerAnimations();
  return (
    <section
      ref={scrollRef}
      className="max-h-fit bg-black relative overflow-hidden"
    >
      <div className="pt-14 wrapper">
        <img
          loading="lazy"
          src={moonShapeImg}
          width={400}
          height={400}
          className="toTopLeft object-contain absolute w-[28rem] h-[20rem] top-[-7.5rem] left-[-10rem] -z-0"
          alt=""
        />
        <img
          loading="lazy"
          src={moonShapeImg}
          width={400}
          height={400}
          className="toBottomRight object-contain absolute w-[28rem] h-[20rem] bottom-[-7.5rem] right-[-9rem] scale-x-[-1] scale-y-[-1] -z-0"
          alt=""
        />
        {/* <img
          data-aos="fade-down-right"
          loading="lazy"
          src={circleImg}
          width={150}
          height={150}
          className="fromLeftToTopRight object-contain absolute w-[10rem] h-[10rem] top-[2rem] right-[-2rem] -z-0"
          alt=""
        /> */}
        <div data-aos="fade-up" className="z-0 relative text-center space-y-3">
          <h2 className="text1">
            <span className="text-primary">Specs </span>
            in Every Industry
          </h2>
          <h4 className="text2">Your Specs. Our Tech. Real Impact.</h4>
          <p className="desc max-w-4xl mx-auto">
            We don’t just serve industries — we decode their specs and deliver
            exactly what’s needed. From custom workflows to AI-powered tools, we
            build solutions that align perfectly with each sector’s demands.
          </p>
        </div>
      </div>
      <div className="relative h-full pb-7 xl:pb-10">
        <div className="z-0 absolute top-0 h-1/2 w-full"></div>
        <div className="z-0 absolute top-1/2 h-1/2 w-full bg-black"></div>
        <div className="wrapper flex flex-wrap justify-center gap-7 pt-10">
          {industries.map((item) => (
            <div
              key={item.id}
              data-aos="fade-up"
              className="overflow-hidden w-full sm:w-[calc(100%/2-1.75rem)] xl:w-[calc(100%/4-1.75rem)]"
            >
              <div className="relative group backdrop-blur-lg space-y-5 border border-white/20 p-5 shadow-large shadow-black/20 hover:bg-primary hover:text-black transition-all duration-500 aspect-square">
                <img
                  src={item.image}
                  alt={item.title}
                  className="absolute inset-0 w-full h-full object-cover z-[-1] grayscale group-hover:grayscale-0 transition-all duration-500"
                />
              </div>
              <h6 className="text4 !font-normal py-2 text-center">
                {item.title}
              </h6>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustriesSection;
