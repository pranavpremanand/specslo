import bannerImg from "../../assets/images/banner.jpg";
import Button from "../../components/common/Button";
import webAboutImg from "../../assets/images/landing page/web-about.jpg";
import appAboutImg from "../../assets/images/landing page/app-about.png";
import IndustriesSection from "../../components/common/IndustriesSection";
import WhyChooseUs from "../../components/common/WhyChooseUs";
import { Link } from "react-scroll";
import ContactForm2 from "../../components/common/ContactForm2";
import DevelopmentProcess from "../../components/common/DevelopmentProcess";
import { ourServices } from "../../content/ourServices";
import Testimonials from "../../components/common/Testimonials";
import {
  appDevelopmentPortfolio,
  webDevelopmentPortfolio,
} from "../../content/constant";
import ServicesSlider from "../../components/landingpage/ServicesSlider";
import ClientLogos from "../../components/common/ClientLogos";

export default function LandingPage({ page }) {
  const isWeb = page === "web";

  const data = ourServices.find((service) =>
    service.title === isWeb ? "Web Development" : "App Development"
  ).serviceDetails;

  const portfolio = isWeb ? webDevelopmentPortfolio : appDevelopmentPortfolio;
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
        <div
          data-aos="fade-right"
          className="wrapper space-y-3 relative z-10 py-[6rem]"
        >
          {isWeb ? (
            <h1 className="text1 font-montserrat max-w-[60rem]">
              Empowering Your Digital Presence with{" "}
              <span className="text-primary font-montserrat">
                Custom Web Solutions
              </span>
            </h1>
          ) : (
            <h1 className="text1 font-montserrat max-w-[55rem]">
              Innovative App Development for{" "}
              <span className="text-primary font-montserrat">
                A Digital Future
              </span>
            </h1>
          )}
          <p className="desc max-w-2xl pb-3">
            {isWeb
              ? "At Specslo Web Solutions, we craft high-performance, user-centric websites that elevate brands and drive engagement. Whether you're a startup, an expanding business, or an established enterprise, our expert team delivers tailored web solutions that align with your goals."
              : "At Specslo App Solutions, we turn ideas into powerful, user-friendly mobile and web applications. Whether you're a startup, a growing business, or an enterprise, our expert team delivers custom-built, scalable, and high-performance apps tailored to your unique needs."}
          </p>
          <Button scrollTo="contact" offset={100}>
            Get Started
          </Button>
        </div>
      </section>
      <section id="about" className="py-14 bg-white text-black">
        <div className="wrapper flex flex-col-reverse md:grid grid-cols-[60%_1fr] gap-7">
          <div data-aos="fade-right" className="space-y-5 py-4 w-full">
            <h3 className="text2">
              Welcome to{" "}
              <span className="text-primary1">
                Specslo {isWeb ? "Web" : "App"} Solutions
              </span>
            </h3>
            <h3 className="text2">
              Where Your{" "}
              <span className="text-primary1">
                {isWeb
                  ? "Vision Meets Our Expertise"
                  : "Ideas Turn into Powerful Apps"}
              </span>
            </h3>
            <p className="desc whitespace-pre-line hyphens-auto w-full">
              {isWeb
                ? `At Specslo, we specialize in building high-performance,
              scalable, and visually stunning websites that drive business
              growth. Our team of experts transforms your ideas into powerful
              digital experiences, ensuring a strong online presence for your
              brand. \n Our services include custom website development, e-commerce
              solutions, web application development, UI/UX design, SEO
              optimization, and CMS integrations. We leverage the latest
              technologies and best practices to deliver fast, secure, and
              user-friendly web solutions tailored to your business needs.
              \n Collaboration is at the heart of what we do. By prioritizing your
              requirements, we craft web solutions that enhance engagement,
              boost conversions, and ensure long-term success in the digital
              landscape.`
                : `At Specslo, we specialize in building high-performance, scalable, and 
    user-friendly mobile and web applications that bring your vision to life. 
    Whether you need a native mobile app, cross-platform solution, or a custom 
    web application, we leverage the latest technologies to create seamless 
    digital experiences. \n Our expertise includes iOS and Android app development, progressive web apps 
    (PWAs), UI/UX design, app integrations, API development, and cloud-based 
    solutions. We ensure your app is optimized for performance, security, and 
    user engagement, helping your business stand out in the competitive digital 
    space. \n Collaboration is at the core of what we do. By prioritizing your requirements, 
    we develop apps that are innovative, efficient, and built for long-term success.`}
            </p>
            <h5 className="text4">
              <span className="text-[#FFD63C]">Specslo:</span>{" "}
              {isWeb
                ? "Empowering Your Web Presence with Innovation."
                : "Crafting the Future of Mobile Apps."}
            </h5>
            <div className="flex gap-10 pt-4">
              <Link
                to="contact"
                smooth={true}
                offset={-100}
                duration={500}
                spy={true}
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
              src={isWeb ? webAboutImg : appAboutImg}
              width={500}
              height={600}
              alt=""
              className="w-full h-full object-cover"
              placeholder="blur"
            />
          </div>
        </div>
      </section>
      <ServicesSlider
        service={isWeb ? "Web" : "App"}
        data={data.ourExpertiseContent}
      />
      <IndustriesSection />
      <DevelopmentProcess content={data.developmentProcess} />
      <section id="works" className="py-14">
        <div className="wrapper">
          <h2 data-aos="fade-up" className="text1 text-center text-primary">
            Few of our Works
          </h2>
          <div className="flex flex-wrap justify-center gap-7 pt-8">
            {portfolio.map((item) => (
              <div
                data-aos="fade-up"
                key={item.id}
                className="group relative aspect-square sm:w-[calc(100%/2-1.75rem)] lg:w-[calc(100%/3-1.75rem)] rounded-2xl overflow-hidden"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full group-hover:scale-110 transition-all duration-500"
                />
                <h5 className="text3 absolute w-full bottom-0 left-0 py-3 bg-primary text-black text-center">
                  {item.title}
                </h5>
              </div>
            ))}
          </div>
        </div>
      </section>
      <ClientLogos />
      <WhyChooseUs />
      <Testimonials />
      <ContactForm2 />
    </>
  );
}
