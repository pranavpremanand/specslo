import React from "react";

/**
 * A reusable page banner component with modern design
 * @param {Object} props
 * @param {string} props.title - Main title text
 * @param {string} props.subtitle - Optional subtitle text
 * @param {Array} props.stats - Optional array of stats objects with value and label
 * @param {string} props.highlightedWord - Optional word to highlight in the title
 * @param {string} props.dividerBg - Background color for the diagonal divider
 */
const PageBanner = ({
  title,
  subtitle,
  stats = [],
  highlightedWord = null,
  dividerBg = "bg-white",
}) => {
  // Split the title to highlight a specific word if provided
  let titleContent;

  if (highlightedWord && title.includes(highlightedWord)) {
    const parts = title.split(highlightedWord);
    titleContent = (
      <>
        {parts[0]}
        <span className="text-primary">{highlightedWord}</span>
        {parts[1]}
      </>
    );
  } else {
    titleContent = title;
  }

  return (
    <section className="relative w-full min-h-[70vh] bg-gradient-to-r from-black via-gray-900 to-black overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <div className="absolute top-[10%] left-[5%] w-24 h-24 rounded-full bg-primary/20 blur-xl"></div>
        {/* <div className="absolute bottom-[20%] right-[10%] w-32 h-32 rounded-full bg-primary/30 blur-xl"></div> */}
        {/* <div className="absolute top-[40%] right-[20%] w-16 h-16 rounded-full bg-primary/20 blur-xl"></div> */}

        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMyMDIwMjAiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0aDR2MWgtNHYtMXptMC0yaDF2NGgtMXYtNHptMi0yaDF2MWgtMXYtMXptLTIgMmgxdjFoLTF2LTF6bS0yLTJoMXYxaC0xdi0xem0yLTJoMXYxaC0xdi0xem0tMiAyaDF2MWgtMXYtMXptLTItMmgxdjFoLTF2LTF6Ii8+PC9nPjwvZz48L3N2Zz4=')]"></div>
      </div>

      <div className="wrapper relative z-10 flex flex-col justify-center h-full py-24">
        <div className="max-w-4xl">
          {/* Animated highlight bar */}
          <div
            className="w-20 h-2 bg-primary mb-6"
            data-aos="fade-right"
            data-aos-delay="100"
          ></div>

          <h1 data-aos="fade-right" className="text_xl mb-6">
            {titleContent}
          </h1>

          {subtitle && (
            <p
              className="text-lg text-gray-300 max-w-2xl"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              {subtitle}
            </p>
          )}

          {/* Animated stats */}
          {stats.length > 0 && (
            <div
              className="flex flex-wrap gap-8 mt-10"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              {stats.map((stat, index) => (
                <div key={index} className="flex flex-col">
                  <span className="text2 text-primary">{stat.value}</span>
                  <span className="text-sm text-gray-400">{stat.label}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Diagonal divider */}
      {/* <div
        className={`absolute bottom-0 left-0 w-full h-24 transform -skew-y-2 translate-y-8 z-20 ${dividerBg}`}
      ></div> */}
    </section>
  );
};

export default PageBanner;
