import { Link, Navigate, useParams } from "react-router-dom";
import DevelopmentProcess from "../../components/common/DevelopmentProcess";
import OurExpertise from "./components/OurExpertise";
import SolutionUseCases from "./components/SolutionUseCases";
import { ourServices } from "../../content/ourServices";
import { createUrlParam } from "../../utils/helper";
import ContactForm3 from "../../components/common/ContactForm3";
import PageBanner from "../../components/common/PageBanner";
import { FaCheckCircle } from "react-icons/fa";
import { useEffect } from "react";

const ServiceDetails = () => {
  const { param } = useParams();

  const data = ourServices.find((item) => createUrlParam(item.title) === param);

  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, [param]);

  if (!data) {
    return <Navigate to="/services" />;
  }

  const {
    serviceDetails: { whyChooseContent, ...serviceDetails },
    title,
  } = data;

  // Create stats for the banner if available
  const stats = serviceDetails.stats || [
    { value: "100%", label: "Client Satisfaction" },
    { value: "24/7", label: "Support Available" },
    // { value: "15+", label: "Years Experience" }
  ];

  return (
    <>
      <PageBanner
        title={title}
        dividerBg="bg-black"
        subtitle={data.desc}
        highlightedWord={title.split(" ")[0]}
        stats={stats}
      />

      <section className="relative overflow-hidden py-20 bg-gradient-to-b from-black to-gray-900">
        {/* Background decorative elements */}
        <div className="absolute top-20 right-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl"></div>
        
        <div className="wrapper">
          <div className="grid lg:grid-cols-5 gap-10">
            <div className="lg:col-span-3">
              <div className="bg-black/40 backdrop-blur-sm p-8 rounded-2xl border border-gray-800 shadow-xl">
                <h2 
                  data-aos="fade-up" 
                  className="text2 text-primary mb-8 inline-block relative after:content-[''] after:absolute after:w-1/2 after:h-1 after:bg-primary after:bottom-0 after:left-0 after:-mb-2"
                >
                  {whyChooseContent.heading}
                </h2>
                <ul className="space-y-6 pt-4 desc">
                  {whyChooseContent.list.map((item, index) => (
                    <li 
                      data-aos="fade-up" 
                      data-aos-delay={100 + (index * 50)}
                      key={item.title}
                      className="flex items-start gap-3 bg-black/20 p-4 rounded-lg border-l-4 border-primary transition-all duration-300 hover:translate-x-1"
                    >
                      <FaCheckCircle className="text-primary text-xl mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-primary mb-1">{item.title}</h4>
                        <p className="text-gray-300">{item.desc}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            
            <div className="lg:col-span-2" data-aos="fade-left">
              {serviceDetails.img2 ? (
                <img
                  src={serviceDetails.img2}
                  className="object-cover w-full h-full rounded-2xl shadow-2xl"
                  alt={title}
                />
              ) : (
                <div className="bg-gradient-to-br from-primary/20 to-black h-full rounded-2xl flex items-center justify-center p-10">
                  <h3 className="text-3xl font-bold text-center text-white">
                    Elevate Your Business with <span className="text-primary block mt-2">{title}</span>
                  </h3>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Service journey section - visual separator */}
      <div className="relative h-24 bg-gradient-to-r from-primary/80 via-primary to-primary/80 overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzRoNHYxaC00di0xem0wLTJoMXY0aC0xdi00em0yLTJoMXYxaC0xdi0xem0tMiAyaDF2MWgtMXYtMXptLTItMmgxdjFoLTF2LTF6bTItMmgxdjFoLTF2LTF6bS0yIDJoMXYxaC0xdi0xem0tMi0yaDJ2MWgtMnYtMXoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-50"></div>
        <div className="wrapper h-full flex items-center justify-center">
          <h3 className="text-2xl md:text-3xl font-bold text-black text-center">
            Your Journey to Excellence Starts Here
          </h3>
        </div>
      </div>

      <OurExpertise content={serviceDetails.ourExpertiseContent || null} />
      <DevelopmentProcess content={serviceDetails.developmentProcess || null} />
      <SolutionUseCases content={serviceDetails.solutionUseCases || null} />
      <ContactForm3 isBlackBg={true} />
    </>
  );
};

export default ServiceDetails;
