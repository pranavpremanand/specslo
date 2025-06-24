import { Link } from "react-router-dom";
import IndustriesSection from "../../components/common/IndustriesSection";
import ServicesSection from "./components/ServicesSection";
import WorkProcess from "../../components/common/WorkProcess";
import WhyChooseUs from "../../components/common/WhyChooseUs";
import { useEffect } from "react";
import gsap from "gsap";
import robot from "../../assets/images/ai-robot.png";
// import ContactForm2 from "../../components/common/ContactForm2";
import {
  appDevelopmentPortfolio,
  webDevelopmentPortfolio,
} from "../../content/constant";
import PortfolioItem from "../../components/common/PortfolioItem";
import { blogs } from "../../content/blogs";
import Testimonials from "../../components/common/Testimonials";
import Faqs from "../../components/common/Faqs";
import ReactPlayer from "react-player";
import banner from "../../assets/videos/banner.mp4";
import ContactForm3 from "../../components/common/ContactForm3";

export default function Home() {
  useEffect(() => {
    const tl = gsap.timeline();

    // Robot animation
    tl.to("#robot", {
      translateY: -80,
      duration: 2,
      ease: "power1.inOut",
      repeat: -1,
      yoyo: true,
    });

    return () => {
      tl.kill();
    };
  }, []);
  return (
    <>
      <section className="min-h-screen video-banner flex flex-col justify-center relative overflow-hidden">
        {/* Enhanced overlay with gradient */}
        <div className="h-full w-full absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80 z-[1]"></div>

        {/* Animated particles effect */}
        <div className="absolute inset-0 z-[2] opacity-30 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxkZWZzPjxwYXR0ZXJuIGlkPSJwYXR0ZXJuIiB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiIHBhdHRlcm5UcmFuc2Zvcm09InJvdGF0ZSg0NSkiPjxjaXJjbGUgY3g9IjIiIGN5PSIyIiByPSIxIiBmaWxsPSIjZmZmZmZmIiBvcGFjaXR5PSIwLjMiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjcGF0dGVybikiLz48L3N2Zz4=')]"></div>

        {/* Video background */}
        <ReactPlayer
          className="h-full w-full object-cover"
          url={banner}
          width="100%"
          height="100%"
          pip={false}
          playsinline={true}
          playing
          loop
          muted
          config={{
            file: {
              attributes: {
                controlsList: "nodownload noplaybackrate",
                disablePictureInPicture: true,
              },
            },
          }}
        />

        {/* Main content */}
        <div className="wrapper flex flex-col-reverse lg:grid grid-cols-[65%_1fr] items-center lg:items-end gap-8 relative z-10 py-16">
          <div
            data-aos="fade-up"
            className="space-y-6 relative z-10 py-[3rem] lg:py-[6rem]"
          >
            <div className="w-16 h-1 bg-primary rounded-full mb-4 hidden lg:block"></div>
            <h1 className="banner-heading text1 font-montserrat max-w-[60rem] leading-tight">
              Got Specs,{" "}
              <span className="text-primary font-montserrat relative inline-block">
                But No One's Building What You Actually Need?
                <span className="absolute -bottom-2 left-0 w-full h-[3px] bg-primary opacity-70"></span>
              </span>
            </h1>
            <p className="banner-desc desc max-w-2xl pb-3 text-gray-200 text-lg">
              Let's fix that. At{" "}
              <span className="font-bold text-white">Specslo</span>, with{" "}
              <span className="text-primary font-bold">100+</span> successful
              deployments across
              <span className="text-primary font-bold"> 7</span> industries, we
              merge AI, design, and development to transform your specs into
              smart, scalable digital products — built for what's next.
            </p>

            {/* Moved buttons up for better flow */}
            <div className="banner-buttons flex sm:flex-row flex-col justify-start gap-5 mt-8">
              <Link
                className="btn bg-primary text-black border border-primary min-w-[15rem] uppercase font-bold hover:bg-black hover:text-white hover:border-primary hover:shadow-large hover:shadow-primary/60 transition-all duration-300"
                to="/contact-us"
              >
                Start Your Project
              </Link>
              <Link
                className="btn bg-transparent backdrop-blur-sm text-white border border-white min-w-[15rem] uppercase font-bold hover:bg-white/10 hover:text-primary hover:border-primary hover:shadow-large hover:shadow-primary/30 transition-all duration-300"
                to="/portfolio"
              >
                View Our Works
              </Link>
            </div>
          </div>

          <div className="h-[38vh] lg:h-[50vh] flex justify-start translate-y-1/3 lg:translate-y-0 relative">
            {/* Glow effect behind robot */}
            <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-[200px] h-[200px] rounded-full bg-primary/20 filter blur-3xl"></div>

            <img
              loading="lazy"
              id="robot"
              src={robot}
              srcSet={`${robot} 300w, ${robot} 600w, ${robot} 1200w`}
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 600px"
              alt="AI Robot"
              width="600"
              height="400"
              className="h-[32vh] lg:h-[40vh] w-fit object-contain relative z-10 drop-shadow-[0_0_15px_rgba(255,214,60,0.3)]"
            />
          </div>
        </div>

        {/* What to expect section */}
        <div className="relative z-10 w-full py-[4rem] wrapper text-center bg-gradient-to-b from-transparent to-black">
          <div className="w-24 h-1 bg-primary mx-auto mb-6 rounded-full"></div>
          <h2 className="text1 font-montserrat">
            What You Can <span className="text-primary">Expect</span> From Us?
          </h2>
        </div>
      </section>

      <ServicesSection />
      <IndustriesSection />
      <WorkProcess />
      <WhyChooseUs />
      <section className="py-14">
        <div className="wrapper">
          <h2 data-aos="fade-up" className="text1 text-center">
            Few of <span className="text-primary"> Our Works</span>
          </h2>
          <div className="flex flex-wrap justify-center gap-7 pt-8">
            {webDevelopmentPortfolio
              .slice(0, 2)
              .concat(appDevelopmentPortfolio[0])
              .map((item) => (
                <PortfolioItem key={item.id} item={item} />
              ))}
          </div>
          <div data-aos="fade-up" className="mt-10 flex justify-center">
            <Link
              to="/portfolio"
              className="btn bg-primary text-black border border-primary min-w-[15rem] uppercase hover:bg-black hover:text-white hover:border-white hover:shadow-large hover:shadow-primary/60"
            >
              View All Works
            </Link>
          </div>
        </div>
      </section>
      <section className="py-14 bg-black">
        <div data-aos="fade-up" className="wrapper">
          <h2 className="text1 text-center">
            Our Latest <span className="text-primary">Blogs</span>
          </h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-7 pt-8">
            {blogs.OTHER.sort((a, b) => b.id - a.id).map((blog) => (
              <div
                key={blog.id}
                className="p-3 border border-primary2 rounded-xl flex justify-between flex-col gap-6"
              >
                <div className="flex flex-col gap-3">
                  <Link
                    to={blog.link}
                    target="_blank"
                    rel="noreferrer"
                    className="group"
                  >
                    <div className="overflow-hidden aspect-[5/3] rounded-xl">
                      <img
                        src={blog.image}
                        alt="Blog"
                        className="object-cover w-full aspect-[5/3] group-hover:brightness-90 group-hover:scale-105 transition-all duration-300"
                      />
                    </div>
                  </Link>
                  <Link
                    to={blog.link}
                    target="_blank"
                    rel="noreferrer"
                    className="text3 !font-medium mt-2 link"
                  >
                    {blog.title}
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-10 flex justify-center">
            <Link
              to="/blogs"
              className="btn bg-primary text-black border border-primary min-w-[15rem] uppercase hover:bg-black hover:text-white hover:border-white hover:shadow-large hover:shadow-primary/60"
            >
              View All Blogs
            </Link>
          </div>
        </div>
      </section>
      <Testimonials />
      <Faqs />
      {/* <ContactForm2 isDark={true} /> */}
      <ContactForm3 isBlackBg={true} />
    </>
  );
}
