import { useState } from "react";
import banner from "../assets/images/banners/banner.webp";
import ContactForm2 from "../components/common/ContactForm2";
import PortfolioItem from "../components/common/PortfolioItem";
import {
  appDevelopmentPortfolio,
  gameDevelopmentPortfolio,
  webDevelopmentPortfolio,
} from "../content/constant";

// Shuffle function
const shuffleArray = (array) => {
  return [...array].sort(() => Math.random() - 0.5);
};

const Portfolio = () => {
  const [activeTab, setActiveTab] = useState("all");

  // Combine all and deduplicate by title
  const allCombined = Array.from(
    new Map(
      [
        ...webDevelopmentPortfolio,
        ...appDevelopmentPortfolio,
        ...gameDevelopmentPortfolio,
      ].map((item) => [item.title, item])
    ).values()
  );

  // Portfolio categories with shuffled 'all' array
  const portfolioCategories = {
    all: shuffleArray(allCombined),
    web: webDevelopmentPortfolio,
    app: appDevelopmentPortfolio,
    game: gameDevelopmentPortfolio,
  };

  return (
    <>
      {/* Hero Banner */}
      <section className="relative w-full aspect-video min-h-[60vh] max-h-[80vh]">
        <div className="absolute inset-0 h-full w-full bg-gradient-to-t from-black/80 to-black/40 z-[-1]"></div>
        <img
          src={banner}
          className="object-cover object-center w-full h-full absolute inset-0 z-[-2]"
          alt="Our Portfolio Work"
          loading="eager"
        />
        <div className="wrapper flex h-full py-16 items-center">
          <div data-aos="fade-right" className="max-w-2xl">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4">
              Our Portfolio
            </h1>
            <p className="text-lg text-white/80">
              Explore our diverse range of projects across web, app, and game
              development
            </p>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="works" className="py-14">
        <div className="wrapper w-full">
          <div data-aos="fade-up" className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-3">
              Featured <span className="text-primary">Works</span>
            </h2>
            <p className="text-white/70 desc max-w-2xl mx-auto">
              Browse through our collection of successful projects and solutions
            </p>
          </div>

          {/* Portfolio Tabs */}
          <div className="flex justify-center mb-12">
            <div className="flex flex-wrap gap-2 sm:gap-0 sm:inline-flex rounded-lg bg-white p-1 shadow-md border border-gray-200">
              {[
                { id: "all", label: "All Projects" },
                { id: "app", label: "App Development" },
                { id: "web", label: "Web Development" },
                { id: "game", label: "Game Development" },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-4 py-2 text-sm font-medium rounded-md transition-all ${
                    activeTab === tab.id
                      ? "bg-primary text-black shadow-sm"
                      : "text-gray-700 hover:bg-gray-100"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Portfolio Grid */}
          <div className="flex flex-wrap gap-7 pt-8">
            {portfolioCategories[activeTab].map((item) => (
              <PortfolioItem
                isServiceVisible={true}
                key={`${item.serviceType}-${item.title}`} // Unique key
                item={item}
              />
            ))}
          </div>

          {portfolioCategories[activeTab].length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500">
                No projects found in this category
              </p>
            </div>
          )}
        </div>
      </section>

      <ContactForm2 isDark={true} />
    </>
  );
};

export default Portfolio;
