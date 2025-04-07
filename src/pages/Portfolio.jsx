import banner from "../assets/images/banners/banner.webp";
import ContactForm2 from "../components/common/ContactForm2";
import PortfolioItem from "../components/common/PortfolioItem";
import {
  appDevelopmentPortfolio,
  gameDevelopmentPortfolio,
  webDevelopmentPortfolio,
} from "../content/constant";

const Portfolio = () => {
  const portfolio = webDevelopmentPortfolio.concat(
    appDevelopmentPortfolio,
    gameDevelopmentPortfolio
  );

  // Shuffle the array (Fisher-Yates algorithm)
  for (let i = portfolio.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [portfolio[i], portfolio[j]] = [portfolio[j], portfolio[i]]; // Swap elements
  }
  return (
    <>
      <section className="relative w-full aspect-video min-h-[60vh] max-h-[80vh]">
        <div className="absolute inset-0 h-full w-full bg-black/40 z-[-1]"></div>
        <img
          src={banner}
          className="object-cover object-center w-full h-full absolute inset-0 z-[-2]"
          alt="Banner"
        />
        <div className="wrapper flex h-full py-16 items-center">
          <h1 data-aos="fade-right" className="text_xl">
            Portfolio
          </h1>
        </div>
      </section>
      <section id="works" className="py-14">
        <div className="wrapper">
          <h2 data-aos="fade-up" className="text1 text-center">
            Our <span className="text-primary">Works</span>
          </h2>
          <div className="flex flex-wrap justify-center gap-7 pt-8">
            {portfolio.map((item) => (
              <PortfolioItem
                isServiceVisible={true}
                key={item.id}
                item={item}
              />
            ))}
          </div>
        </div>
      </section>
      <ContactForm2 isDark={true} />
    </>
  );
};

export default Portfolio;
