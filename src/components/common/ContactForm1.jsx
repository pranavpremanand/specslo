import React from "react";
import { circleImg } from "../../content/constant";
import contactImg from "../../assets/images/contact.png";

const ContactForm1 = () => {
  return (
    <div id="contact" className="relative pt-14 pb-4 overflow-hidden">
      <img
        loading="lazy"
        src={circleImg}
        className="z-[-1] absolute top-[-2rem] left-[-2rem] w-[18rem] h-[18rem] object-contain aspect-square"
        alt=""
      />
      <img
        loading="lazy"
        src={circleImg}
        className="absolute bottom-1/4 right-[2rem] w-[11rem] h-[11rem] object-contain aspect-square z-[-1]"
        alt=""
      />
      <div className="wrapper space-y-3">
        <p className="uppercase text-primary text-center">Contact Us</p>
        <h2 className="text1 text-center">Get a Quote Today</h2>
        <div>
          <p className="desc max-w-3xl text-center mx-auto capitalize">
            Contact us today to create a website that transforms the way you
            connect with patients and delivers value at every interaction.
          </p>
        </div>
        <div className="lg:pt-8 grid lg:grid-cols-[55%_1fr]">
          <div className="flex flex-col justify-end h-full">
            <img
              loading="lazy"
              src={contactImg}
              className="object-contain h-full aspect-[6/5]"
              alt="Contact Us"
            />
          </div>
          <form className="p-5 sm:p-8 border-2 border-primary flex flex-col items-center space-y-5 rounded-xl">
            <div className="flex flex-col gap-1 w-full">
              <label className="text-sm">Full Name</label>
              <input
                type="text"
                className="outline-none p-3 bg-white text-black rounded-lg w-full"
                placeholder="Enter your full name"
              />
            </div>
            <div className="grid sm:grid-cols-2 gap-5 w-full">
              <div className="flex flex-col gap-1 w-full">
                <label className="text-sm">Email</label>
                <input
                  type="email"
                  className="outline-none p-3 bg-white text-black rounded-lg"
                  placeholder="Enter your email address"
                />
              </div>
              <div className="flex flex-col gap-1 w-full">
                <label className="text-sm">Phone Number</label>
                <input
                  type="tel"
                  className="outline-none p-3 bg-white text-black rounded-lg"
                  placeholder="Enter your phone number"
                />
              </div>
            </div>
            <div className="flex flex-col gap-1 w-full">
              <label className="text-sm">Subject</label>
              <input
                type="text"
                className="outline-none p-3 bg-white text-black rounded-lg"
                placeholder="Enter subject"
              />
            </div>
            <div className="flex flex-col gap-1 w-full">
              <label className="text-sm">Message</label>
              <textarea
                rows="5"
                className="outline-none p-3 bg-white text-black rounded-lg"
                placeholder="Enter message"
              />
            </div>
            <button className="btn w-full sm:w-fit bg-primary text-black hover:bg-black hover:text-white border border-primary">
              Book Appointment Now
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm1;
