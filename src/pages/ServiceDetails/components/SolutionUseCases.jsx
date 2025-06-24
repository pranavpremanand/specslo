import { FaLightbulb } from "react-icons/fa";

const SolutionUseCases = ({ content }) => {
  if (!content) return null;
  return (
    <div className="py-20 relative overflow-hidden bg-gradient-to-b from-gray-900 to-black">
      <div className="wrapper">
        <div className="flex flex-col items-center mb-12">
          <div className="h-1 w-20 bg-primary mb-4" data-aos="fade-up"></div>
          <h2
            data-aos="fade-up"
            className="text2 text-primary text-center mb-4"
          >
            {content.heading}
          </h2>
          <p data-aos="fade-up" className="text-gray-300 text-center max-w-2xl">
            Explore how our solutions can be applied to solve real-world
            challenges and drive business growth
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 pt-8">
          {content.contentArr.map((item, index, arr) => {
            const isLastItemOdd =
              arr.length % 2 !== 0 && index === arr.length - 1;
            return (
              <div
                key={item.title}
                data-aos="fade-up"
                data-aos-delay={100 * (index + 1)}
                className={`
                  ${isLastItemOdd ? "md:col-span-2 md:w-1/2 mx-auto" : ""}
                  w-full rounded-2xl p-6 space-y-5
                  bg-gradient-to-br from-gray-900 to-black
                  border border-gray-800 shadow-xl
                  transform transition-all duration-300 hover:shadow-primary/20 hover:border-primary/30
                `}
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                    <FaLightbulb className="text-primary text-xl" />
                  </div>
                  <h3 className="text4 text-primary font-bold">{item.title}</h3>
                </div>

                <div className="space-y-3 pl-4">
                  {item.list.map((text, idx) => (
                    <div
                      key={text}
                      className="flex gap-3 items-start bg-black/30 p-3 rounded-lg border-l-2 border-primary/50 transition-all duration-300 hover:border-primary"
                      data-aos="fade-right"
                      data-aos-delay={150 * (idx + 1)}
                    >
                      <div className="w-2 h-2 min-w-2 rounded-full bg-primary mt-2" />
                      <p className="text-gray-300">{text}</p>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SolutionUseCases;
