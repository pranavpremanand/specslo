import React from "react";

const PortfolioItem = ({ item, isServiceVisible }) => {
  return (
    <div
      data-aos="fade-up"
      className="group relative aspect-square sm:w-[calc(100%/2-1.75rem)] lg:w-[calc(100%/3-1.75rem)] rounded-2xl overflow-hidden"
    >
      {isServiceVisible && (
        <p className="absolute z-10 right-1 top-1 rounded-2xl bg-black text-white text-sm px-4 py-2">
          {item.serviceType}
        </p>
      )}
      <img
        src={item.image}
        alt={item.title}
        className="w-full h-full group-hover:scale-125 hover:rotate-12 transition-all duration-500"
      />
      <h5 className="text3 absolute w-full bottom-0 left-0 py-3 bg-primary text-black text-center">
        {item.title}
      </h5>
    </div>
  );
};

export default PortfolioItem;
