import bannerImg from "../../assets/images/banner.jpg";
import Button from "../../components/common/Button";
import aboutImg from "../../assets/images/about.png";
import { Link } from "react-router-dom";
import IndustriesSection from "../../components/common/IndustriesSection";
import ServicesSection from "./components/ServicesSection";
import WorkProcess from "../../components/common/WorkProcess";
import WhyChooseUs from "../../components/common/WhyChooseUs";
import ContactForm1 from "../../components/common/ContactForm1";

export default function Home() {
  return (
    <>
      <section className="min-h-screen flex items-center relative">
        <div className="absolute w-full h-full sm:h-full sm:w-1/2 md:w-1/3 right-0 top-0">
          <div className="h-full flex items-center w-full bg-black/30 absolute"></div>
          <img
            loading="lazy"
            src={bannerImg}
            height={1000}
            width={400}
            className="h-full w-full object-cover object-top"
            alt=""
          />
        </div>
        <div className="wrapper space-y-3 relative z-10 py-[6rem]">
          <h1 className="text1 font-montserrat max-w-[60rem]">
            Shaping the{" "}
            <span className="text-primary font-montserrat">
              Future of Technology
            </span>{" "}
            with
            <span className="text-primary font-montserrat"> Custom </span>{" "}
            Software
          </h1>
          <p className="desc max-w-2xl pb-3">
            At Specslo Software Solutions, we transform your visions into
            innovative digital realities. Whether you’re a startup, a growing
            business, or an enterprise, our expert team delivers cutting-edge
            technology solutions tailored to your unique needs.
          </p>
          <Button to="/home">Get Started</Button>
        </div>
      </section>
      <section className="py-14 bg-white text-black">
        <div className="wrapper flex flex-col-reverse md:grid grid-cols-[60%_1fr] gap-7">
          <div className="space-y-5 py-4">
            <h3 className="text2">
              Welcome to{" "}
              <span className="text-primary1">Specslo Software Solutions</span>
            </h3>
            <h3 className="text2">
              Where Your{" "}
              <span className="text-primary1">Specs Meet Our Solutions</span>
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
            <h5 className="text4">
              <span className="text-[#FFD63C]">Specslo:</span> Where Your Specs
              Shape Tomorrow's Technology.
            </h5>
            <div className="flex gap-10 pt-4">
              <Link
                to="/"
                className="btn uppercase min-w-[8rem] border border-black text-black bg-transparent hover:bg-black hover:text-white"
              >
                About Us
              </Link>
              <Link
                to="/"
                className="btn uppercase min-w-[8rem] border border-black text-black bg-transparent hover:bg-black hover:text-white"
              >
                Quick Inquiry
              </Link>
            </div>
          </div>
          <div className="w-full flex flex-col">
            <img
              loading="lazy"
              src={aboutImg}
              width={500}
              height={600}
              alt=""
              className="w-full h-full object-contain"
              placeholder="blur"
            />
          </div>
        </div>
      </section>
      <IndustriesSection />
      <ServicesSection />
      <WorkProcess />
      <WhyChooseUs />
      <ContactForm1 />
    </>
  );
}
