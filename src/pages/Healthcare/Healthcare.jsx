import React from "react";
import Button from "../../components/common/Button";
import banner from "../../assets/images/banners/healthcare.png";

const Healthcare = () => {
  return (
    <div>
      <section className="min-h-screen flex items-center relative">
        <div className="absolute w-full h-full right-0 top-0 opacity-70">
          <div className="h-full flex items-center w-full bg-black/20 absolute"></div>
          <img
            loading="lazy"
            src={banner}
            height={1000}
            width={900}
            className="h-full w-full object-cover object-top opacity-60"
            alt=""
          />
        </div>
        <div className="wrapper text-center space-y-3 relative z-10 translate-y-[2rem] py-[4rem]">
          <h1 className="text_xl font-atkinson">
            <span className="text-stroke font-atkinson">EMPOWERING</span>{" "}
            <span className="text_xl text-primary font-atkinson">
              HEALTHCARE
            </span>
          </h1>
          <h2 className="text1 font-atkinson uppercase">
            <span className="text-primary font-atkinson">Through</span>{" "}
            <span className="text1 text-stroke font-atkinson">
              digital transformation
            </span>
          </h2>
          <p className="desc max-w-4xl mx-auto pb-3">
            In today’s fast-paced world, technology is reshaping healthcare. At
            Specslo, we specialize in guiding healthcare providers through their
            digital transformation journey. Whether you’re new to technology or
            looking to update systems, our tailored solutions ensure seamless
            innovation.
          </p>
          <Button to="/home">Get Started</Button>
        </div>
      </section>
    </div>
  );
};

export default Healthcare;
