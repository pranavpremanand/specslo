import React from "react";
import Button from "../../components/common/Button";
import banner from "../../assets/images/banners/healthcare.png";
import aboutImg from "../../assets/images/about.png";
import { Link as Scroll } from "react-scroll";
import ContactForm1 from "../../components/common/ContactForm1";
import WebsiteSolutions from "./components/WebsiteSolutions";
import Industries from "./components/Industries";
import { Link } from "react-router-dom";

const Healthcare = () => {
  return (
    <>
      <section className="min-h-screen flex items-center relative">
        <div className="absolute w-full h-full right-0 top-0 opacity-70">
          <div className="h-full flex items-center w-full bg-black/20 absolute"></div>
          <img
            loading="lazy"
            src={banner}
            height={1000}
            width={900}
            className="h-full w-full object-cover object-top opacity-60"
            alt=""
          />
        </div>
        <div
          data-aos="fade-up"
          className="wrapper text-center relative z-10 py-[6rem] md:py-[4rem]"
        >
          <div className="space-y-3 translate-y-[3rem]">
            <h1 className="text_xl font-atkinson">
              <span className="text-stroke font-atkinson">EMPOWERING</span>{" "}
              <span className="text_xl text-primary font-atkinson">
                HEALTHCARE
              </span>
            </h1>
            <h2 className="text1 font-atkinson uppercase">
              <span className="text-primary font-atkinson">Through</span>{" "}
              <span className="text1 text-stroke font-atkinson">
                digital transformation
              </span>
            </h2>
            <p className="desc max-w-4xl mx-auto pb-3">
              In today’s fast-paced world, technology is reshaping healthcare.
              At Specslo, we specialize in guiding healthcare providers through
              their digital transformation journey. Whether you’re new to
              technology or looking to update systems, our tailored solutions
              ensure seamless innovation.
            </p>
            <div className="pt-5 flex justify-center">
              <Button scrollTo="contact" offset={-100}>
                Get Started
              </Button>
            </div>
          </div>
        </div>
      </section>
      <section className="py-14 bg-white text-black">
        <div className="wrapper flex flex-col md:grid grid-cols-[1fr_55%] gap-7">
          <div className="w-full flex flex-col">
            <img
              data-aos="fade-right"
              loading="lazy"
              src={aboutImg}
              width={500}
              height={600}
              alt=""
              className="max-w-[20rem] md:max-w-max mx-auto w-full h-full object-contain"
              placeholder="blur"
            />
          </div>
          <div data-aos="fade-up" className="space-y-5 py-4">
            <h3 className="text2">
              Welcome to Specslo -{" "}
              <span className="text-primary1">
                Transforming Care, Specs by Specs
              </span>
            </h3>
            <h5 className="text3">How Specslo Modernizes Healthcare</h5>
            <h6 className="text4 text-primary1">
              Comprehensive Solutions for Healthcare Providers
            </h6>
            <p className="desc">
              At Specslo, we combine deep industry knowledge with cutting-edge
              technology to:
            </p>
            <ul className="list-disc space-y-3 pl-5">
              <li>
                Understand Your Challenges: Identifying technology gaps to
                create impactful solutions Deliver
              </li>
              <li>
                Customize Innovations: Developing tools that align with your
                unique needs and goals.
              </li>
              <li>
                Deliver Seamless Implementation: From design to deployment,
                ensuring every detail is optimized.
              </li>
            </ul>

            <div className="flex gap-10 pt-4">
              <Scroll
                offset={-70}
                smooth
                spy
                duration={500}
                to="contact"
                className="btn uppercase min-w-[8rem] border border-black text-black bg-transparent hover:bg-black hover:text-white"
              >
                Quick inquiry
              </Scroll>
              <Link
                to="/contact-us"
                className="btn uppercase min-w-[8rem] border border-black text-black bg-transparent hover:bg-black hover:text-white"
              >
                contact us
              </Link>
            </div>
          </div>
        </div>
      </section>
      <WebsiteSolutions />
      <Industries />
      <section className="py-20">
        <div className="wrapper space-y-3">
          <h2 className="text1 text-center">
            Why Specslo is{" "}
            <span className="text-primary">Your Trusted Partner</span>
          </h2>
          <ul className="max-w-3xl mx-auto list-disc text4 !font-normal pl-4 space-y-5 pt-7">
            <li>
              <span className="text-primary">Expertise in Healthcare:</span>{" "}
              Deep understanding of industry challenges and solutions.
            </li>
            <li>
              <span className="text-primary">Tailored Technology:</span>{" "}
              Solutions customized to your goals and compliance needs.
            </li>
            <li>
              <span className="text-primary">Innovation - Driven:</span>{" "}
              Cutting-edge tools and methods that keep you ahead.
            </li>
            <li>
              <span className="text-primary">Continuous Support:</span> Ongoing
              maintenance and updates for long-term success.
            </li>
          </ul>
        </div>
      </section>
      <ContactForm1 />
    </>
  );
};

export default Healthcare;
