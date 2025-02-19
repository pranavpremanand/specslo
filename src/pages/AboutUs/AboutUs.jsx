import banner from "../../assets/images/banners/aboutus.png";
import img1 from "../../assets/images/our-story.png";
import img2 from "../../assets/images/client-engagement-and-support.png";
import img3 from "../../assets/images/ongoing-support.png";
import img4 from "../../assets/images/Partnership Beyond Projects.png";
import { circleImg, futureGoals } from "../../content/constant";
import ContactForm1 from "../../components/common/ContactForm1";
import Testimonials from "../../components/common/Testimonials";

const AboutUs = () => {
  return (
    <>
      <section className="relative w-full aspect-video min-h-[60vh] max-h-[80vh]">
        <div className="absolute inset-0 h-full w-full bg-black/20 z-[-1]"></div>
        <img
          src={banner}
          className="object-cover w-full h-full absolute inset-0 z-[-2]"
          alt="Banner"
        />
        <div className="wrapper flex h-full py-16 items-end">
          <h1 data-aos="fade-right" className="text_xl">
            About Us
          </h1>
        </div>
      </section>
      <section className="py-14 bg-white text-black relative z-0">
        <div
          data-aos="fade-up"
          className="bg-primary absolute z-[-1] right-0 top-14 w-[6rem] h-[20rem]"
        ></div>
        <div className="wrapper">
          <h2 data-aos="fade-up" className="text1 text-center">
            Our Story
          </h2>
          <div className="grid md:grid-cols-[40%_1fr] gap-8 pt-5">
            <div className="rounded-xl overflow-hidden">
              <img
                data-aos="fade-right"
                loading="lazy"
                src={img1}
                className="w-full h-full aspect-square object-cover"
                alt=""
              />
            </div>
            <div data-aos="fade-up">
              <p className="desc">
                At Specslo, we see every spec as a story waiting to be told—a
                unique set of needs and aspirations that, when combined with the
                right technology, can create something extraordinary. Founded
                with the belief that great technology starts with understanding,
                our mission is to transform your specs into meaningful solutions
                that drive innovation and success.
                <br />
                Our name, "Specs" (specifications) and "Lo" (meaning "take" in
                Hindi), reflects this philosophy: to take your vision and
                deliver solutions that not only meet your needs but exceed your
                expectations. We embrace each challenge as an opportunity to
                co-create with you, ensuring every project is a step toward a
                brighter, more connected future.
                <br />
                At Specslo, we don’t just develop technology—we craft
                transformative experiences. By seamlessly integrating your
                unique specifications into future-ready solutions, we help
                businesses adapt, grow, and thrive in an ever-evolving digital
                world.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="py-14">
        <div
          data-aos="fade-up"
          className="wrapper flex flex-col items-center gap-3"
        >
          <h2 className="text1 text-primary2 max-w-3xl text-center">
            Quality Assurance & Security: Specs for Peace of Mind
          </h2>
          <div className="h-2 w-[18rem] bg-white"></div>
        </div>
        <div className="pt-12">
          {[
            {
              title: "Quality First",
              image: require("../../assets/images/Quality First.jpeg"),
              content: `Every Specslo solution undergoes rigorous testing to ensure reliability, speed, and userfriendliness. Our specs-driven quality process includes: 

- Automated & Manual Testing: For smooth and reliable performance. 
- Usability Checks: Ensuring intuitive functionality aligned with your specs.
- Continuous Optimization: Ongoing improvements to match evolving specifications.`,
            },
            {
              title: "Your Peace of Mind",
              image: require("../../assets/images/Your Peace of Mind.png"),
              content: `At Specslo, your specs guide every aspect of our commitment to quality and security. We deliver solutions that empower your business with:

- Dependable Outcomes: Built for consistency and reliability.
- Enhanced Protection: Comprehensive data security at every step. 
- Trusted Support: Confidence in Specslo’s commitment to your long-term success.`,
            },
            {
              title: "Security Built-In",
              image: require("../../assets/images/Security Built-In.png"),
              content: `We prioritize safeguarding your specs with: 
              
 - Data Encryption: Secures sensitive information.
 - Access Control: Ensures only authorized access.
- Security Audits: Identifies and mitigates vulnerabilities.`,
            },
          ].map((item) => (
            <div
              key={item.title}
              className="py-7 border-t group last:border-b border-primary2 flex lg:flex-row flex-col items-center justify-center gap-4"
              data-aos="fade-up"
            >
              <p className="text2 text-center group-hover:text-primary2 pr-12">
                {item.title}
              </p>
              <img
                src={item.image}
                alt={item.title}
                className="opacity-0 group-hover:opacity-100 w-0 group-hover:w-[15rem] h-0 group-hover:h-fit transition-all duration-500 aspect-square object-cover lg:-rotate-12 border-4 border-primary"
              />
              <div className="opacity-0 group-hover:opacity-100 hidden group-hover:block whitespace-pre-line max-w-[30rem] pl-12">
                {item.content}
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className="py-14 relative bg-white text-black overflow-hidden z-0">
        <div className="absolute z-[-1] top-[-3rem] left-[-3rem] h-[18rem] w-[12rem] bg-primary rounded-ee-full"></div>
        <div
          data-aos="fade-up"
          className="wrapper flex flex-col items-center gap-3"
        >
          <h2 className="text1 max-w-3xl text-center">
            Client Engagement & Support: Specslo's Commitment to You
          </h2>
          <div className="h-2 w-[18rem] bg-white"></div>
        </div>
        <div className="wrapper pt-12 grid md:grid-cols-2 lg:grid-cols-[40%_1fr] items-center gap-8">
          <div className="">
            <img
              data-aos="fade-right"
              loading="lazy"
              src={img2}
              className="object-contain w-full aspect-square max-h-[30rem]"
              alt="Client Engagement & Support"
            />
          </div>
          <div data-aos="fade-up" className="space-y-5">
            <h4 className="text2">Engaged from Day One</h4>
            <p className="desc">
              At Specslo, we prioritize understanding your specs and keeping you
              involved throughout the journey. Here’s how we stay engaged:
            </p>
            <ul className="space-y-5 pt-3">
              <li>
                <span className="text4">Kickoff Meetings: </span>
                Align on goals and expectations from the start.
              </li>
              <li>
                <span className="text4">Clear Milestones: </span>
                Regular updates to track progress together.
              </li>
              <li>
                <span className="text4">Feedback Integration: </span>
                Your input shapes every stage of the project.
              </li>
              <li>
                <span className="text4">Dedicated Contact: </span>
                Quick access to support whenever you need it.
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section className="py-14 relative">
        <img
          data-aos="fade-down-right"
          loading="lazy"
          src={circleImg}
          className="z-[-1] absolute top-[-4rem] left-[-3rem] w-[18rem] h-[18rem] object-contain aspect-square"
          alt=""
        />
        <img
          data-aos="fade-up-left"
          loading="lazy"
          src={circleImg}
          className="absolute bottom-0 right-[2rem] w-[11rem] h-[11rem] object-contain aspect-square z-[-1]"
          alt=""
        />
        <div className="wrapper flex flex-col-reverse md:grid grid-cols-2 gap-7">
          <div data-aos="fade-up" className="space-y-3">
            <h3 className="text2">Ongoing Support</h3>
            <p className="desc">
              Our commitment goes beyond delivery, offering:
            </p>
            <ul className="space-y-5 pt-3">
              <li>
                <span className="text4 text-primary2">
                  Updates & Enhancements:{" "}
                </span>
                Regular improvements to keep you ahead.
              </li>
              <li>
                <span className="text4 text-primary2">24/7 Help Desk: </span>{" "}
                Quick responses for any issues or questions.
              </li>
              <li>
                <span className="text4 text-primary2">
                  Performance Checks:{" "}
                </span>
                Routine monitoring for peak performance.
              </li>
              <li>
                <span className="text4 text-primary2">Scalable Options: </span>{" "}
                Flexible adjustments as your needs grow.
              </li>
              <li>
                <span className="text4 text-primary2">
                  Proactive Solutions:{" "}
                </span>
                Identifying and solving issues before they arise.
              </li>
            </ul>
          </div>
          <div data-aos="fade-right">
            <img
              loading="lazy"
              src={img3}
              alt="Ongoing Support"
              className="object-cover rounded-xl w-full h-full"
            />
          </div>
        </div>
      </section>
      <section className="z-[-2] bg-white text-black py-14 relative overflow-hidden">
        <div
          data-aos="fade-down-right"
          className="z-[-1] w-[8rem] h-[8rem] rounded-full bg-[radial-gradient(circle,_#FFFFFF,_#FFFF82)] absolute top-[-1.5rem] left-[-1.5rem] drop-shadow-2xl"
        ></div>
        <div
          data-aos="fade-up-left"
          className="z-[-1] w-[15rem] h-[20rem] rounded-t-[6rem] bg-gradient-to-b from-primary to-transparent absolute bottom-[-2rem] right-[-2rem] drop-shadow-2xl"
        ></div>
        <div className="wrapper grid md:grid-cols-[40%_1fr] items-center gap-7">
          <div data-aos="fade-right" className="">
            <img
              loading="lazy"
              src={img4}
              alt="Partnership Beyond Projects"
              className="object-contain w-full"
            />
          </div>
          <div data-aos="fade-up" className="space-y-3">
            <h3 className="text2">Partnership Beyond Projects</h3>
            <p className="desc">
              At Specslo, we’re committed to your growth, even after project
              completion: Future
            </p>
            <ul className="space-y-5 pt-3">
              <li>
                <span className="text4 text-primary2">Planning: </span>
                Insights for growth and adaptation.
              </li>
              <li>
                <span className="text4 text-primary2">
                  Consistent Check-Ins:{" "}
                </span>{" "}
                Regular touchpoints to stay aligned.
              </li>
              <li>
                <span className="text4 text-primary2">
                  Solution Enhancements:{" "}
                </span>{" "}
                Updates as your business evolves.
              </li>
              <li>
                <span className="text4 text-primary2"> Priority Support: </span>{" "}
                Fast assistance for ongoing needs.
              </li>
              <li>
                <span className="text4 text-primary2">Industry Insights: </span>{" "}
                Guidance to keep you competitive.
              </li>
              <li>
                <span className="text4 text-primary2">Flexible Scaling: </span>{" "}
                Adjustments as your demands grow.
              </li>
            </ul>
          </div>
        </div>
      </section>

      <Testimonials />
      <section className="py-14 bg-white text-black relative overflow-hidden z-0">
        <div
          data-aos="fade-down"
          className="absolute z-[-1] top-[-3rem] lef-[-3rem] h-[18rem] w-[8rem] bg-primary rounded-ee-[8rem]"
        />
        <div className="wrapper relative text-center space-y-3">
          <div
            data-aos="fade-up-left"
            className="z-[-1] w-[6rem] h-[6rem] rounded-full bg-[radial-gradient(circle,_#FFFFFF,_#FFFF82)] absolute top-full right-[15%] drop-shadow-2xl"
          ></div>
          <h2 data-aos="fade-up" className="text1 text-primary2">
            Vision
          </h2>
          <p data-aos="fade-up" className="desc max-w-4xl mx-auto">
            To lead the next wave of digital transformation by turning specs
            into intelligent, AI-powered solutions. Specslo is committed to
            redefining how businesses innovate, fostering sustainable growth,
            and building meaningful connections in a future shaped by advanced
            technologies. With a focus on adaptability, precision, and
            collaboration, we aim to empower businesses to navigate tomorrow’s
            challenges with confidence and creativity.
          </p>
        </div>
        <div className="wrapper py-16 text-center">
          <h2 data-aos="fade-up" className="text1 text-primary2">
            Future Goals
          </h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-7 pt-7">
            {futureGoals.map((item) => (
              <div key={item.title} data-aos='fade-up'>
                <div
                  className="bg-black group hover:bg-primary hover:text-black text-start text-white rounded-xl p-7 space-y-3 transition-all duration-300 h-full"
                >
                  <div className="pb-7 text-primary group-hover:text-black">{item.icon}</div>
                  <h6 className="text3">{item.title}</h6>
                  <p className="desc">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <ContactForm1 />
    </>
  );
};

export default AboutUs;
