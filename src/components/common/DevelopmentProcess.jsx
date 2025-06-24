import iconImg from "../../assets/images/curved-icon-black.png";
import { FaArrowRight } from "react-icons/fa";

const DevelopmentProcess = ({ content }) => {
  if (!content || content.length === 0) return null;

  return (
    <section className="relative py-20 text-black bg-gradient-to-b from-gray-100 to-white overflow-hidden">
      <div className="wrapper z-[1] relative">
        <div className="flex flex-col items-center mb-12">
          <div className="h-1 w-20 bg-primary mb-4" data-aos="fade-up"></div>
          <h2 data-aos="fade-up" className="text2 text-center mb-4">
            Our Development Process
          </h2>
          <p
            data-aos="fade-up"
            className="desc max-w-4xl mx-auto text-center text-gray-700"
          >
            At Specslo, our development approach ensures precision, efficiency,
            and innovation at every stage. Our process is structured to bring
            your vision to life with a streamlined workflow:
          </p>
        </div>

        {/* Process timeline */}
        <div className="relative max-w-5xl mx-auto pt-10">
          {/* Timeline connector */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-primary via-primary to-primary/50 top-0 hidden md:block"></div>

          <div className="space-y-16 md:space-y-0">
            {content.map((item, index) => (
              <div
                key={item.title}
                data-aos="fade-up"
                data-aos-delay={index * 100}
                className="relative md:grid md:grid-cols-2 gap-8 items-center"
              >
                {/* Timeline dot */}
                <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-8 h-8 rounded-full bg-primary border-4 border-white shadow-lg z-10"></div>

                {/* Content positioning based on index */}
                <div
                  className={`${
                    index % 2 === 0 ? "md:col-start-1" : "md:col-start-2"
                  }`}
                >
                  <div className="bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden transform transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
                    <div className="relative">
                      <div className="absolute inset-0 bg-primary/20 transform -translate-x-2 translate-y-2 rounded-full"></div>
                      <img
                        src={item.img}
                        className="w-full h-48 object-cover rounded-t-2xl"
                        alt={item.title}
                      />
                      <div className="absolute top-4 left-4 w-16 h-16 rounded-full bg-primary flex items-center justify-center text-white text-2xl font-bold shadow-lg">
                        {index + 1}
                      </div>
                    </div>

                    <div className="p-6 space-y-4">
                      <h3 className="text3 text-black font-bold">
                        {item.title}
                      </h3>
                      <ul className="space-y-2">
                        {item.list.map((text, idx) => (
                          <li key={text} className="flex items-start gap-2">
                            <FaArrowRight className="text-primary mt-1 flex-shrink-0" />
                            <span className="text-gray-700">{text}</span>
                          </li>
                        ))}
                      </ul>
                      <div className="pt-4 flex justify-center">
                        <img
                          src={iconImg}
                          className="w-[2.5rem] object-contain opacity-70"
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Empty column for alternating layout */}
                <div
                  className={`${
                    index % 2 === 0 ? "md:col-start-2" : "md:col-start-1"
                  } hidden md:block`}
                ></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DevelopmentProcess;
