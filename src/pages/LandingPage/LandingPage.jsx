import Button from "../../components/common/Button";
import webAboutImg from "../../assets/images/landing page/web-about.jpg";
import appAboutImg from "../../assets/images/landing page/app-about.png";
import IndustriesSection from "../../components/common/IndustriesSection";
import WhyChooseUs from "../../components/common/WhyChooseUs";
import { Link } from "react-scroll";
import DevelopmentProcess from "../../components/common/DevelopmentProcess";
import { ourServices } from "../../content/ourServices";
import Testimonials from "../../components/common/Testimonials";
import {
  appDevelopmentPortfolio,
  webDevelopmentPortfolio,
} from "../../content/constant";
import ServicesSlider from "../../components/landingpage/ServicesSlider";
import ClientLogos from "../../components/common/ClientLogos";
import { useEffect } from "react";
import gsap from "gsap";
import robot from "../../assets/images/ai-robot.png";
import PortfolioItem from "../../components/common/PortfolioItem";
import ContactForm3 from "../../components/common/ContactForm3";
import ReactPlayer from "react-player";
import banner from "../../assets/videos/banner.mp4";

export default function LandingPage({ page }) {
  const isWeb = page === "web";

  const data = ourServices.find((service) =>
    service.title === isWeb ? "Web Development" : "App Development"
  ).serviceDetails;

  const portfolio = isWeb ? webDevelopmentPortfolio : appDevelopmentPortfolio;

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
      <section
        id="banner"
        className="min-h-screen video-banner flex flex-col justify-center relative overflow-hidden"
      >
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
            {isWeb ? (
              <h1 className="banner-heading text1 font-glacial max-w-[60rem] leading-tight">
                Elevate Your Business with Cutting-Edge{" "}
                <span className="text-primary font-glacial relative inline-block">
                  Web Solutions
                  <span className="absolute -bottom-2 left-0 w-full h-[3px] bg-primary opacity-70"></span>
                </span>
              </h1>
            ) : (
              <h1 className="banner-heading text1 font-glacial max-w-[55rem] leading-tight">
                Elevate Your Business with Next-Generation{" "}
                <span className="text-primary font-glacial relative inline-block">
                  Mobile Apps
                  <span className="absolute -bottom-2 left-0 w-full h-[3px] bg-primary opacity-70"></span>
                </span>
              </h1>
            )}
            <p className="banner-desc desc max-w-2xl pb-3 text-gray-200 text-lg">
              {isWeb
                ? "Your website is the digital face of your business. It deserves to be innovative, user-friendly, and aligned with the latest trends. At Specslo, we create custom-built web solutions designed to deliver exceptional user experiences, seamless functionality, and business growth."
                : "Your business deserves a mobile app that not only meets today's needs but is ready for the challenges of tomorrow. At Specslo, we craft custom-built mobile applications that deliver seamless user experiences, drive engagement, and accelerate growth across iOS, Android, and cross-platform environments."}
            </p>
            <div className="banner-button">
              <Button scrollTo="contact" offset={100} className="font-bold">
                Get Started
              </Button>
            </div>
          </div>

          <div className="h-[38vh] lg:h-[50vh] flex justify-start translate-y-1/3 lg:translate-y-0 relative">
            {/* Glow effect behind robot */}
            {/* <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-[200px] h-[200px] rounded-full bg-primary/20 filter blur-3xl"></div> */}

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
      </section>
      <ContactForm3 />
      <section id="about" className="py-14 bg-white text-black">
        <div className="wrapper flex flex-col-reverse md:grid grid-cols-[60%_1fr] gap-7">
          <div data-aos="fade-right" className="space-y-5 py-4 w-full">
            <h3 className="text2">
              Welcome to{" "}
              <span className="text-black">
                Specslo {isWeb ? "Web" : "App"} Solutions
              </span>
            </h3>
            <h3 className="text2">
              Where Your{" "}
              <span className="text-black">
                {isWeb
                  ? "Vision Meets Our Expertise"
                  : "Ideas Turn into Powerful Apps"}
              </span>
            </h3>
            <p
              className="desc hyphens-auto w-full"
              dangerouslySetInnerHTML={{
                __html: isWeb
                  ? `At Specslo, we specialize in building high-performance,
              scalable, and visually stunning websites that drive business
              growth. Our team of experts transforms your ideas into powerful
              digital experiences, ensuring a strong online presence for your
              brand. <br/> Our services include custom website development, e-commerce
              solutions, web application development, UI/UX design, SEO
              optimization, and CMS integrations. We leverage the latest
              technologies and best practices to deliver fast, secure, and
              user-friendly web solutions tailored to your business needs.
              <br/> Collaboration is at the heart of what we do. By prioritizing your
              requirements, we craft web solutions that enhance engagement,
              boost conversions, and ensure long-term success in the digital
              landscape.`
                  : `At Specslo, we specialize in building high-performance, scalable, and 
    user-friendly mobile and web applications that bring your vision to life. 
    Whether you need a native mobile app, cross-platform solution, or a custom 
    web application, we leverage the latest technologies to create seamless 
    digital experiences. <br/> Our expertise includes iOS and Android app development, progressive web apps 
    (PWAs), UI/UX design, app integrations, API development, and cloud-based 
    solutions. We ensure your app is optimized for performance, security, and 
    user engagement, helping your business stand out in the competitive digital 
    space. <br/> Collaboration is at the core of what we do. By prioritizing your requirements, 
    we develop apps that are innovative, efficient, and built for long-term success.`,
              }}
            ></p>
            <h5 className="text4">
              <span className="text-black">Specslo:</span>{" "}
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
              <PortfolioItem key={item.id} item={item} />
            ))}
          </div>
        </div>
      </section>
      <ClientLogos />
      <WhyChooseUs />
      <Testimonials />
      <ContactForm3 isBlackBg={true} />
    </>
  );
}
