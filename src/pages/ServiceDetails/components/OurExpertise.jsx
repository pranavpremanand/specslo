import { FaStar } from "react-icons/fa";

const OurExpertise = ({ content }) => {
  if (!content) return null;
  return (
    <div className="py-20 relative bg-gradient-to-b from-black to-gray-900 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>

      <div className="wrapper">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col items-center mb-12">
            <div className="h-1 w-20 bg-primary mb-4" data-aos="fade-up"></div>
            <h2
              data-aos="fade-up"
              className="text2 text-primary text-center mb-4"
            >
              Our Expertise
            </h2>
            <p
              data-aos="fade-up"
              className="text-gray-300 text-center max-w-2xl"
            >
              Discover our specialized knowledge and skills that make us the
              perfect partner for your business needs
            </p>
          </div>

          <div className="space-y-8">
            {content.map((item, i) => (
              <div
                key={item.title}
                data-aos={i % 2 === 0 ? "fade-right" : "fade-left"}
                data-aos-delay={100 * (i + 1)}
                className={`
                  rounded-2xl overflow-hidden shadow-2xl border border-gray-800
                  ${
                    i % 2 === 0
                      ? "bg-gradient-to-r from-black to-gray-900"
                      : "bg-gradient-to-l from-black to-gray-900"
                  }
                  transform transition-all duration-300 hover:scale-[1.02] hover:shadow-primary/20
                `}
              >
                <div
                  className={`
                  flex flex-col ${
                    i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  } 
                  items-center gap-8 p-6
                `}
                >
                  <div className="relative md:w-1/3 flex-shrink-0">
                    <div className="absolute inset-0 bg-primary/20 rounded-full blur-md transform -translate-x-2 translate-y-2"></div>
                    <img
                      src={item.img}
                      className="object-cover rounded-full w-full aspect-square border-4 border-primary/30 relative z-10 shadow-xl"
                      alt={item.title}
                    />
                  </div>

                  <div
                    className={`space-y-5 md:w-2/3 ${
                      i % 2 === 0 ? "md:pl-5" : "md:pr-5"
                    }`}
                  >
                    <div
                      className={`flex items-center ${
                        i % 2 === 0 ? "" : "md:justify-end"
                      }`}
                    >
                      <h3 className="text3 text-primary font-bold relative inline-block">
                        {item.title}
                        <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary/50"></span>
                      </h3>
                    </div>

                    <ul
                      className={`space-y-3 ${
                        i % 2 === 0 ? "" : "md:text-right"
                      }`}
                    >
                      {item.list.map((text, index) => (
                        <li
                          key={text}
                          className="flex items-start gap-2"
                          style={{
                            flexDirection: i % 2 === 0 ? "row" : "row-reverse",
                          }}
                        >
                          <FaStar className="text-primary mt-1 flex-shrink-0" />
                          <span className="text-gray-200">{text}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurExpertise;
