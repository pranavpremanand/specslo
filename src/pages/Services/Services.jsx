import { Link } from "react-router-dom";
import Testimonials from "../../components/common/Testimonials";
import Faqs from "../../components/common/Faqs";
import CTA from "../../components/common/CTA";
import { ourServices } from "../../content/ourServices";
import { createUrlParam } from "../../utils/helper";
import PageBanner from "../../components/common/PageBanner";

const Services = () => {
  const serviceStats = [
    { value: "7+", label: "Service Categories" },
    { value: "100%", label: "Customizable Solutions" },
  ];

  return (
    <>
      <PageBanner
        title="Our Services"
        subtitle="Comprehensive digital solutions tailored to your specific business requirements."
        stats={serviceStats}
        dividerBg="bg-[#111111]"
      />
      <section className="py-14 bg-[#111111]">
        <div className="wrapper grid lg:grid-cols-2 gap-10">
          {ourServices.map((item) => (
            <div
              data-aos="fade-up"
              key={item.id}
              className="lg:last:col-span-2 lg:last:w-1/2 mx-auto"
            >
              <Link
                to={`/services/${createUrlParam(item.title)}`}
                className="group bg-white hover:bg-primary transition-all duration-300 text-black rounded-xl grid sm:grid-cols-2 overflow-hidden"
              >
                <div className="w-full overflow-hidden">
                  <img
                    loading="lazy"
                    src={item.image}
                    alt={item.title}
                    className="group-hover:scale-110 aspect-[16/11] sm:aspect-[4/3] lg:aspect-square transition-all duration-300 object-cover w-full h-full"
                  />
                </div>
                <div className="p-5 space-y-4">
                  <h5 className="text2">{item.title}</h5>
                  <p className="desc">{item.desc}</p>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </section>
      <Faqs />
      <CTA />
      <Testimonials />
    </>
  );
};

export default Services;
