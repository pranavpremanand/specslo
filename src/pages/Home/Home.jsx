import bannerImg from "../../assets/images/banner.jpg";
import Button from "../../components/common/Button";
import aboutImg from "../../assets/images/about.png";
import { Link } from "react-router-dom";
import IndustriesSection from "../../components/common/IndustriesSection";
import ServicesSection from "./components/ServicesSection";
import WorkProcess from "../../components/common/WorkProcess";
import WhyChooseUs from "../../components/common/WhyChooseUs";
import Spline from "@splinetool/react-spline";
import { useEffect } from "react";
import gsap from "gsap";
import robot from "../../assets/images/ai-robot.png";
import ContactForm2 from "../../components/common/ContactForm2";
import {
  appDevelopmentPortfolio,
  webDevelopmentPortfolio,
} from "../../content/constant";
import PortfolioItem from "../../components/common/PortfolioItem";
import { blogs } from "../../content/blogs";
import BlogItem from "../../components/website/BlogItem";
import Testimonials from "../../components/common/Testimonials";
import Faqs from "../../components/common/Faqs";
import ReactPlayer from "react-player";
import banner from "../../assets/videos/banner.mp4";

export default function Home() {
  useEffect(() => {
    const tl = gsap.timeline();
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
      <section className="min-h- video-banner lg:pt-[10rem] flex flex-col justify-center relative">
        <div className="h-full flex items-center w-full bg-black/40 absolute inset-0"></div>
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
        <div className="wrapper flex flex-col-reverse lg:grid grid-cols-[65%_1fr] items-center lg:items-end gap-5">
          <div
            data-aos="fade-right"
            className="space-y-3 relative z-10 py-[6rem]"
          >
            <h1 className="text1 font-montserrat max-w-[60rem]">
              Got Specs,{" "}
              <span className="text-primary font-montserrat">
                But No One’s Building What You Actually Need ?
              </span>
            </h1>
            <p className="desc max-w-2xl pb-3">
              Let’s fix that. At <span className="font-bold">Specslo</span> ,
              with 20+ successful deployments across 7 industries, we merge AI,
              design, and development to transform your specs into smart,
              scalable digital products — built for what’s next.
            </p>
          </div>

          <div className="h-[38vh] lg:h-[50vh] flex justify-start translate-y-2/3 lg:translate-y-0">
            <img
              loading="lazy"
              id="robot"
              src={robot}
              srcset={`${robot} 300w,
             ${robot} 600w,
             ${robot} 1200w`}
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 600px"
              alt="robot"
              width="600"
              height="400"
              className="h-[32vh] lg:h-[40vh] w-fit object-contain"
            />
          </div>
        </div>
        <div className="wrapper relative z-[10] -translate-y-[4rem] lg:-translate-y-[3rem] w-full">
          <div
            data-aos="fade-up"
            className="w-full lg:col-span-2 flex sm:flex-row flex-col justify-center gap-7"
          >
            <Link
              className="btn bg-black border border-white min-w-[15rem] uppercase hover:bg-primary hover:text-black hover:border-primary hover:shadow-large hover:shadow-primary/60"
              to="/contact-us"
            >
              Start Your Project
            </Link>
            <Link
              className="btn bg-primary text-black border border-primary min-w-[15rem] uppercase hover:bg-black hover:text-white hover:border-white hover:shadow-large hover:shadow-primary/60"
              to="/portfolio"
            >
              View Our Works
            </Link>
            {/* <Button to="/">View Our Work</Button> */}
          </div>
        </div>
        <div
          data-aos="fade-up"
          className="w-full py-[4rem] wrapper text-center"
        >
          <h2 className="text1 font-montserrat">
            What You Can Expect From Us?
          </h2>
        </div>
      </section>
      {/* <section className="py-14 bg-white text-black">
        <div className="wrapper flex flex-col-reverse md:grid grid-cols-[60%_1fr] gap-7">
          <div data-aos="fade-right" className="space-y-5 py-4">
            <h3 className="text2">
              <span className="text-primary1">Specslo:</span> Where Your Specs
              Shape Tomorrow's Technology.
            </h3>
            <p className="desc hyphens-auto">
              At Specslo, your specs are the foundation of intelligent,
              future-ready solutions. We leverage advanced IT and AI
              technologies to transform your vision into measurable impact,
              empowering businesses to thrive in a rapidly evolving digital
              world. <br />
              Our expertise spans a wide range of services, including web and
              mobile development, custom software engineering, artificial
              intelligence (AI) and machine learning, data science and
              analytics, immersive game development, and UX/UI design. <br />
              At Specslo, collaboration is at the heart of everything we do. By
              prioritizing your specifications, we craft tailored solutions that
              enable growth, efficiency, and leadership in the next wave of
              digital transformation.
            </p>
            <div className="flex gap-10 pt-4">
              <Link
                to="/about-us"
                className="btn uppercase min-w-[8rem] border border-black text-black bg-transparent hover:bg-black hover:text-white"
              >
                About Us
              </Link>
              <Link
                to="/contact-us"
                className="btn uppercase min-w-[8rem] border border-black text-black bg-transparent hover:bg-black hover:text-white"
              >
                Quick Inquiry
              </Link>
            </div>
          </div>
          <div className="w-full flex flex-col">
            <img
              data-aos="fade-up"
              loading="lazy"
              src={aboutImg}
              width={500}
              height={600}
              alt=""
              className="max-w-[20rem] md:max-w-max mx-auto w-full h-full object-contain"
              placeholder="blur"
            />
          </div>
        </div>
      </section> */}
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
      <section className="py-14 bg-[#242424]">
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
                {/* <Link
                  to={blog.link}
                  target="_blank"
                  rel="noreferrer"
                  className="btn bg-primary text-black hover:bg-black hover:text-white border border-primary h-fit"
                >
                  Read More
                </Link> */}
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
      <ContactForm2 isDark={true} />
    </>
  );
}
