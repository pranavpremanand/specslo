import React from "react";
import banner from "../../assets/images/banners/contactus.png";
import { Link } from "react-router-dom";
import { IoLocation, IoMail } from "react-icons/io5";
import { ImPhone } from "react-icons/im";
import { companyDetails } from "../../data/constant";
import MapComponent from "../../components/website/MapComponent";

const ContactUs = () => {
  return (
    <>
      <section className="relative w-full aspect-video min-h-[60vh] max-h-[80vh]">
        <div className="absolute inset-0 h-full w-full bg-white/10 z-[-1]"></div>
        <img
          src={banner}
          loading="lazy"
          className="object-cover w-full h-full absolute inset-0 z-[-2]"
          alt="Banner"
        />
        <div className="wrapper flex h-full py-[6rem] md:pt-[8rem] pb-16 items-start">
          <h1 className="text_xl text-black">Contact Us</h1>
        </div>
      </section>
      <section className="py-14">
        <div className="wrapper flex flex-col-reverse md:grid grid-cols-2 gap-7">
          <form className="p-6 space-y-4 rounded-2xl bg-[#EDEDED] text-black">
            <div className="grid sm:grid-cols-2 md:grid-cols-1 xl:grid-cols-2 gap-4">
              <div className="space-y-1 grid">
                <label className="text-sm">Full Name *</label>
                <input
                  type="text"
                  className="p-3 rounded-[1rem] outline-none border-2 border-gray-700 bg-transparent w-full"
                  placeholder="Enter your full name"
                />
              </div>
              <div className="space-y-1 grid">
                <label className="text-sm">Email *</label>
                <input
                  type="email"
                  className="p-3 rounded-[1rem] outline-none border-2 border-gray-700 bg-transparent w-full"
                  placeholder="Enter your email address"
                />
              </div>
            </div>
            <div className="space-y-1 grid">
              <label className="text-sm">Phone Number *</label>
              <input
                type="tel"
                className="p-3 rounded-[1rem] outline-none border-2 border-gray-700 bg-transparent w-full"
                placeholder="Enter your phone number"
              />
            </div>
            <div className="space-y-1 grid">
              <label className="text-sm">Subject *</label>
              <input
                type="text"
                className="p-3 rounded-[1rem] outline-none border-2 border-gray-700 bg-transparent w-full"
                placeholder="Enter subject"
              />
            </div>
            <div className="space-y-1 grid">
              <label className="text-sm">Message *</label>
              <textarea
                className="p-3 rounded-[1rem] outline-none border-2 border-gray-700 bg-transparent w-full"
                placeholder="Enter your message here"
              />
            </div>
            <button className="btn bg-[#222222] hover:bg-black w-full text-white">
              Submit Now
            </button>
          </form>
          <div className="space-y-3">
            <h2 className="text1 text-primary">Get It Touch</h2>
            <div className="h-2 w-[18rem] bg-white"></div>
            <h5 className="text2">
              Let’s Build Something Extraordinary Together!
            </h5>
            <p className="desc">
              Your website is more than an online presence—it’s a gateway to
              success.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <div className="w-12 h-12 rounded-full flex items-center justify-center bg-white">
                  <ImPhone size={24} className="text-black" />
                </div>
                <Link
                  to={`tel:${companyDetails.phone}`}
                  className="desc hover:text-primary"
                >
                  {companyDetails.phone}
                </Link>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-12 h-12 rounded-full flex items-center justify-center bg-white">
                  <IoMail size={24} className="text-black" />
                </div>
                <Link
                  to={`mailto:${companyDetails.email}`}
                  className="desc hover:text-primary"
                >
                  {companyDetails.email}
                </Link>
              </div>

              <div className="flex gap-2">
                <div className="w-12 h-12 rounded-full flex items-center justify-center bg-white">
                  <IoLocation size={28} className="text-black" />
                </div>
                <p className="desc max-w-[16rem]">{companyDetails.location}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <MapComponent />
    </>
  );
};

export default ContactUs;
