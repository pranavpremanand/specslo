import React from "react";
import { ImPhone } from "react-icons/im";
import { Link } from "react-router-dom";
import { circleImg, companyDetails } from "../../content/constant";
import { IoLocation, IoMail } from "react-icons/io5";

const ContactForm2 = ({ isDark }) => {
  return (
    <div
      className={`${
        isDark ? "bg-black text-white" : "bg-white text-black"
      } text-black py-14 relative overflow-hidden`}
    >
      {isDark ? (
        <img
          data-aos="fade-up-left"
          loading="lazy"
          src={circleImg}
          width={150}
          height={150}
          className="object-contain absolute w-[10rem] h-[10rem] top-[2rem] right-[-2rem] -z-0"
          alt=""
        />
      ) : (
        <div
          data-aos="fade-up-left"
          className="z-0 w-[8rem] md:w-[12rem] h-[8rem] md:h-[12rem] rounded-full bg-[radial-gradient(circle,_#FFFFFF,_#FFFF82)] absolute -bottom-4 -right-4 drop-shadow-2xl"
        ></div>
      )}
      <div className="wrapper flex flex-col-reverse md:grid grid-cols-2 gap-7 relative z-[1]">
        <form data-aos='fade-right' className="bg-black text-white p-7 border-[2px] border-primary rounded-[2.5rem] space-y-5">
          <div className="grid sm:grid-cols-2 md:grid-cols-1 xl:grid-cols-2 gap-4">
            <div className="space-y-1 grid">
              <label className="text-sm">Full Name</label>
              <input
                type="text"
                className="p-3 rounded-[2rem] outline-none border-2 border-primary bg-transparent w-full"
                placeholder="Enter your full name"
              />
            </div>
            <div className="space-y-1 grid">
              <label className="text-sm">Email</label>
              <input
                type="email"
                className="p-3 rounded-[2rem] outline-none border-2 border-primary bg-transparent w-full"
                placeholder="Enter your email address"
              />
            </div>
          </div>
          <div className="space-y-1 grid">
            <label className="text-sm">Phone Number</label>
            <input
              type="tel"
              className="p-3 rounded-[2rem] outline-none border-2 border-primary bg-transparent w-full"
              placeholder="Enter your phone number"
            />
          </div>
          <div className="space-y-1 grid">
            <label className="text-sm">Subject</label>
            <input
              type="text"
              className="p-3 rounded-[2rem] outline-none border-2 border-primary bg-transparent w-full"
              placeholder="Enter subject"
            />
          </div>
          <div className="space-y-1 grid">
            <label className="text-sm">Message</label>
            <textarea
              className="p-3 rounded-[2rem] outline-none border-2 border-primary bg-transparent w-full"
              placeholder="Enter your message here"
            />
          </div>
          <button className="btn w-full bg-white text-black hover:bg-primary border border-primary">
            Submit
          </button>
        </form>
        <div  data-aos='fade-up' className="space-y-4">
          <h2 className="text1">Get It Touch</h2>
          <div className="h-2 w-[18rem] bg-black"></div>
          <h5 className="text2">
            Let’s Build Something Extraordinary Together!
          </h5>
          <p className="desc">
            Your website is more than an online presence—it’s a gateway to
            success.
          </p>
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div
                className={`${
                  isDark ? "bg-white text-black" : "bg-black text-white"
                } w-12 h-12 rounded-full flex items-center justify-center`}
              >
                <ImPhone size={24} />
              </div>
              <Link
                to={`tel:${companyDetails.phone}`}
                className="desc hover:text-primary1"
              >
                {companyDetails.phone}
              </Link>
            </div>
            <div className="flex items-center gap-2">
              <div
                className={`${
                  isDark ? "bg-white text-black" : "bg-black text-white"
                } w-12 h-12 rounded-full flex items-center justify-center`}
              >
                <IoMail size={24} />
              </div>
              <Link
                to={`mailto:${companyDetails.email}`}
                className="desc hover:text-primary1"
              >
                {companyDetails.email}
              </Link>
            </div>

            <div className="flex gap-2">
              <div
                className={`${
                  isDark ? "bg-white text-black" : "bg-black text-white"
                } w-12 h-12 rounded-full flex items-center justify-center`}
              >
                <IoLocation size={28} />
              </div>
              <p className="desc max-w-[16rem]">{companyDetails.location}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm2;
