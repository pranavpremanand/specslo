import banner from "../../assets/images/services/banners/519a64738ccecd6c66dda62b0edd51bf.jpeg";
import { circleImg } from "../../data/constant";
import DevelopmentProcess from "./components/DevelopmentProcess";
import OurExpertise from "./components/OurExpertise";

const ServiceDetails = () => {
  return (
    <>
      <section className="relative w-full aspect-video min-h-[60vh] max-h-[80vh]">
        <div className="absolute inset-0 h-full w-full bg-black/30 z-[-1]"></div>
        <img
          loading="lazy"
          src={banner}
          className="object-cover w-full h-full absolute inset-0 z-[-2]"
          alt="Banner"
        />
        <div className="wrapper flex flex-col gap-3 h-full py-16 justify-center translate-y-[2rem]">
          <div className="flex gap-4 items-center text4 !font-normal">
            <p>Home</p> <span>|</span>
            <p>Service Details</p>
          </div>
          <h1 className="text_xl">Service Details</h1>
        </div>
      </section>

      <section className="relative overflow-hidden">
        <img
          loading="lazy"
          src={circleImg}
          width={150}
          height={150}
          className="object-contain absolute w-[17rem] h-[17rem] top-[-1rem] left-[-2rem] -z-[1]"
          alt=""
        />
        <div className="wrapper">
          <div className="flex justify-between gap-7">
            <div className="py-14">
              <h2 className="text2 text-primary">
                Why Choose Specslo for Web Development?
              </h2>
              <ul className="space-y-4 pt-4 lg:max-w-[calc(100%-5rem)] desc">
                <li>
                  <span className="text-primary">
                    ✅ Future-Ready Solutions :
                  </span>{" "}
                  We integrate the latest technologies, including React, Vue.js,
                  Angular, Next.js, and WebAssembly, ensuring your web
                  applications are scalable, secure, and future-proof.
                </li>
                <li>
                  <span className="text-primary">
                    ✅ Tailored to Your Vision :
                  </span>{" "}
                  Our client-first approach ensures your website reflects your
                  brand identity while achieving your business objectives.
                </li>
                <li>
                  <span className="text-primary">
                    ✅ Seamless Performance :{" "}
                  </span>
                  We prioritize fast load times, mobile responsiveness, and
                  bug-free functionality to enhance user satisfaction.
                </li>
                <li>
                  <span className="text-primary">✅ End-to-End Support : </span>
                  From concept to launch and beyond, our comprehensive support
                  ensures your web application remains high-performing and
                  up-to-date.
                </li>
              </ul>
            </div>
            <img
              src={banner}
              className="hidden lg:block object-cover aspect-[3/4] h-fit overflow-hidden rounded-xl max-w-[17rem] -rotate-[5deg] -translate-y-1/2"
              alt=""
            />
          </div>
          <div className="flex justify-end">
            <img
              src={banner}
              className="object-cover aspect-[4/2] lg:aspect-[3/4] rounded-xl lg:max-w-[17rem] lg:-translate-y-[50%]"
              alt=""
            />
          </div>
        </div>
      </section>
      <OurExpertise img={banner} />
      <DevelopmentProcess img={banner} />
    </>
  );
};

export default ServiceDetails;
