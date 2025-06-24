import img1 from "../../assets/images/our-story.png";
import img2 from "../../assets/images/client-engagement-and-support.png";
import img3 from "../../assets/images/ongoing-support.png";
import img4 from "../../assets/images/Partnership Beyond Projects.png";
import { futureGoals } from "../../content/constant";
import Testimonials from "../../components/common/Testimonials";
import { Link } from "react-router-dom";
import ceo from "../../assets/images/ceo.webp";
import ContactForm3 from "../../components/common/ContactForm3";
import PageBanner from "../../components/common/PageBanner";

const AboutUs = () => {
  const aboutStats = [
    { value: "20+", label: "Successful Projects" },
    { value: "7+", label: "Industries Served" },
    { value: "100%", label: "Client Satisfaction" }
  ];

  return (
    <>
      <PageBanner 
        title="About Specslo" 
        subtitle="We transform business specifications into powerful, scalable, and AI-driven digital solutions that drive meaningful impact."
        stats={aboutStats}
        highlightedWord="Specslo"
      />
      <section className="py-14 bg-white text-black relative z-0">
        <div
          data-aos="fade-up"
          className="bg-primary absolute z-[-1] right-0 top-14 w-[6rem] h-[20rem]"
        ></div>
        <div className="wrapper space-y-4">
          <h2
            data-aos="fade-up"
            className="text1 text-center max-w-6xl mx-auto"
          >
            Built Around Your Specs. Designed for the Future.
          </h2>
          <p className="desc max-w-5xl mx-auto text-center">
            At <b>Specslo Software Solutions</b>, we see every{" "}
            <b>specification</b> as more than a requirement — it's a{" "}
            <b>blueprint for innovation</b>. We specialize in transforming
            business specs into powerful, scalable, and AI-driven digital
            solutions that drive meaningful impact.
          </p>
          <p className="desc max-w-5xl mx-auto text-center">
            Our name says it all: <br />
            <b>"Specs"</b> for specifications, and <b>"Lo"</b> (from Hindi,
            meaning take) — together, Specslo means we take your specs and build
            technology that fits perfectly. No templates. No assumptions. Just
            custom-built solutions shaped by your vision.
          </p>
          <div className="grid md:grid-cols-[40%_1fr] gap-8 pt-10">
            <div className="rounded-xl overflow-hidden">
              <img
                data-aos="fade-right"
                loading="lazy"
                src={img1}
                className="w-full h-full aspect-[4/3] object-cover"
                alt=""
              />
            </div>
            <div data-aos="fade-up">
              <h2 className="text1">Our Story</h2>
              <p className="desc mt-3">
                Every project begins with <b>understanding</b>. We founded
                Specslo with the belief that{" "}
                <b>great technology starts with listening</b> — listening to
                your goals, your needs, and your specs. <br />
                Since our inception, we’ve delivered{" "}
                <b>20+ successful solutions across 7+ industries</b>, turning
                complex challenges into future-ready platforms — combining{" "}
                <b>AI, data, design, and development</b> in ways that unlock
                growth. <br />
                At Specslo, we don’t just code — we co-create. Your specs guide
                every decision, and your success is our mission.
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
              <p className="text2 text-center group-hover:text-primary2 lg:pr-12 translate-y-2 lg:translate-y-0 group-hover:translate-y-0">
                {item.title}
              </p>
              <img
                src={item.image}
                alt={item.title}
                className="opacity-0 group-hover:opacity-100 w-0 group-hover:w-[15rem] h-0 group-hover:h-fit transition-all duration-500 aspect-square object-cover lg:-rotate-12 group-hover:border-4 group-hover:border-primary"
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
        {/* <img
          data-aos="fade-down-right"
          loading="lazy"
          src={circleImg}
          className="z-[-1] absolute top-[-4rem] left-[-3rem] w-[18rem] h-[18rem] object-contain aspect-square"
          alt=""
        />
        <img
          data-aos="fade-up-right"
          loading="lazy"
          src={circleImg}
          className="absolute bottom-0 right-[2rem] w-[11rem] h-[11rem] object-contain aspect-square z-[-1]"
          alt=""
        /> */}
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
        {/* 
        <div
          data-aos="fade-down-right"
          className="z-[-1] w-[8rem] h-[8rem] rounded-full bg-[radial-gradient(circle,_#FFFFFF,_#FFFF82)] absolute top-[-1.5rem] left-[-1.5rem] drop-shadow-2xl"
        ></div>
        */}
        <div
          data-aos="fade-up-right"
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
                <span className="text4">Planning: </span>
                Insights for growth and adaptation.
              </li>
              <li>
                <span className="text4">
                  Consistent Check-Ins:{" "}
                </span>{" "}
                Regular touchpoints to stay aligned.
              </li>
              <li>
                <span className="text4">
                  Solution Enhancements:{" "}
                </span>{" "}
                Updates as your business evolves.
              </li>
              <li>
                <span className="text4"> Priority Support: </span>{" "}
                Fast assistance for ongoing needs.
              </li>
              <li>
                <span className="text4">Industry Insights: </span>{" "}
                Guidance to keep you competitive.
              </li>
              <li>
                <span className="text4">Flexible Scaling: </span>{" "}
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
          className="absolute z-[-1] top-[-3rem] left-[-3rem] h-[18rem] w-[8rem] bg-primary rounded-ee-[8rem]"
        />
        <div
          data-aos="fade-down"
          className="absolute z-[-1] top-[-3rem] right-0 h-[18rem] w-[8rem] bg-primary rounded-bl-[8rem]"
        />
        <div className="wrapper relative space-y-10">
          {/* <div
            data-aos="fade-up-right"
            className="z-[-1] w-[6rem] h-[6rem] rounded-full bg-[radial-gradient(circle,_#FFFFFF,_#FFFF82)] absolute top-full right-[15%] drop-shadow-2xl"
          ></div> */}
          <div className="space-y-3 flex flex-col items-start">
            <h2 data-aos="fade-up" className="text1">
              Vision
            </h2>
            <p data-aos="fade-up" className="desc max-w-4xl">
              To lead the next wave of digital transformation by building
              specs-first, AI-powered solutions that help businesses adapt,
              grow, and connect in an ever-evolving world.
            </p>
            <div data-aos="fade-up" className="space-y-3 pt-3">
              <p className="desc">We aim to empower organizations through:</p>
              <ul className="space-y-3 list-disc list-inside">
                <li>Adaptive, intelligent technologies</li>
                <li>Sustainable innovation</li>
                <li>Precision-led development</li>
                <li>Global impact with a personal touch</li>
              </ul>
            </div>
          </div>
          <div className="space-y-3 flex flex-col items-end">
            <h2 data-aos="fade-up" className="text1">
              Mission
            </h2>

            <div data-aos="fade-up" className="space-y-3 pt-3">
              <ul className="space-y-3 list-disc list-inside">
                <li>
                  To build custom solutions that perfectly match each client’s
                  specs
                </li>
                <li>
                  To blend creativity, data, and emerging tech into every
                  project
                </li>
                <li>
                  To deliver with precision, transparency, and partnership
                </li>
                <li>To empower businesses through innovation that matters</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="wrapper py-16 space-y-3">
          <h2 data-aos="fade-up" className="text1 text-center">
            Our Future Goals
          </h2>
          <h3 className="text2 text-center">
            Driven by Specs. Designed for the Future.
          </h3>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-7 pt-7">
            {futureGoals.map((item) => (
              <div key={item.title} data-aos="fade-up">
                <div className="bg-black group hover:bg-primary hover:text-black text-start text-white rounded-xl p-7 space-y-3 transition-all duration-300 h-full">
                  <div className="pb-7 text-primary group-hover:text-black">
                    {item.icon}
                  </div>
                  <h6 className="text3">{item.title}</h6>
                  <p className="desc">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-16 bg-black">
        <div className="wrapper space-y-9">
          <div className="space-y-3 flex flex-col items-center">
            <h2 data-aos="fade-up" className="text1 text-center">
              A Message from <span className="text-primary">Our CEO</span>
              <hr className="border-2 border-white mt-2" />
            </h2>
          </div>
          <div className="grid lg:grid-cols-[23rem,1fr] gap-4 md:gap-8">
            <div
              data-aos="fade-up"
              className="p-3 border border-primary rounded-xl"
            >
              <img
                src={ceo}
                alt="CEO"
                className="h-full bg-[#FFD63B] w-full aspect-[4/3] lg:aspect-auto object-contain lg:object-cover rounded-xl"
              />
            </div>
            <div className="space-y-5 py-3">
              <h3 data-aos="fade-up" className="text3 !font-semibold">
                ❝ The world doesn’t need more software. It needs smarter,
                sharper solutions built around real problems — and that’s where{" "}
                <span className="text-primary">Specslo </span>
                comes in. ❞
              </h3>
              <p data-aos="fade-up" className="desc pt-3">
                ❝ When I started Specslo, I wasn’t chasing trends — I was
                chasing purpose. Too many businesses struggle with off-the-shelf
                tech that doesn’t really solve their problems. I wanted to
                change that.
                <br />
                At Specslo, we don’t just write code — we decode what your
                business truly needs and build with precision, passion, and
                future-ready tech like AI, automation, and clean design. We
                believe in the power of specs — your specs. Every project we
                take on is a chance to co-create something meaningful that
                drives impact. This isn’t just about building software. It’s
                about building solutions that{" "}
                <b>work today, scale tomorrow, and lead the future.</b>
                <br />
                Let’s build smart. Let’s build bold. Let’s build yours. ❞
              </p>
              <p data-aos="fade-up" className="text3 text-end">
                — <b>Ruchir Mandora</b> <br />
                <span className="!font-normal">Founder & CEO, Specslo</span>
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="py-16 bg-white text-black">
        <div data-aos="fade-up" className="wrapper space-y-4 text-center">
          <h4 className="text2">Download Our Company Brochure</h4>
          <h5 className="text3">
            Looking for a detailed breakdown of our services, industry use
            cases, and successful deployments?
          </h5>
          <p>
            <Link
              to="https://heyzine.com/flip-book/afc660e209.html"
              target="_blank"
              className="text-primary2 bg-black px-2 py-1 rounded"
            >
              📥{" "}
              <span className="underline">
                Download the Specslo Company Brochure
              </span>
            </Link>{" "}
            to learn how we can help your business grow with custom, AI-powered
            technology.
          </p>
        </div>
      </section>
      {/* <ContactForm2 isDark={true} /> */}
      <ContactForm3 isBlackBg={true} />
    </>
  );
};

export default AboutUs;
