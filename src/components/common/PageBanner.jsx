import React from "react";

/**
 * A reusable page banner component with modern design
 * @param {Object} props
 * @param {string} props.title - Main title text
 * @param {string} props.subtitle - Optional subtitle text
 * @param {string} props.highlightedWord - Optional word to highlight in the title
 * @param {string} props.banner - Banner image source
 * @param {string} props.bottomText - Bottom text content
 * @returns {JSX.Element} The rendered page banner component
 */
const PageBanner = ({
  title,
  subtitle,
  highlightedWord = null,
  banner,
  bottomText,
}) => {
  // Split the title to highlight a specific word if provided
  let titleContent;

  if (highlightedWord && title.includes(highlightedWord)) {
    const parts = title.split(highlightedWord);
    titleContent = (
      <>
        {parts[0]}
        <span className="text-primary font-glacial">{highlightedWord}</span>
        {parts[1]}
      </>
    );
  } else {
    titleContent = title;
  }

  return (
    <section className="relative w-full min-h-[70vh] overflow-hidden">
      <img
        src={banner}
        className="w-full h-full absolute top-0 left-0 object-cover brightness-[20%]"
        alt=""
      />
      {/* Decorative elements */}
      <div className="absolute flex flex-col justify-between top-0 left-0 w-full h-full overflow-hidden">
        <div className="wrapper relative z-10 flex flex-col justify-center h-full py-24">
          <div className="max-w-4xl">
            <h1 data-aos="fade-right" className="text_xl mb-4">
              {titleContent}
            </h1>

            {subtitle && (
              <p
                className="text4 !font-normal max-w-2xl"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                {subtitle}
              </p>
            )}
          </div>
        </div>
        <div data-aos="fade-up" className="pb-5 flex justify-center">
          <h4
            className="text3 !font-normal"
            dangerouslySetInnerHTML={{ __html: bottomText }}
          />
        </div>
      </div>
    </section>
  );
};

export default PageBanner;
