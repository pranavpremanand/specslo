import React, { useState } from "react";
import { Divide as Hamburger } from "hamburger-react";
import { logo } from "../../content/constant";
import Drawer from "react-modern-drawer";
import { Link } from "react-router-dom";
import { IoClose } from "react-icons/io5";

// Website links
export const websiteLinks = [
  { id: 1, title: "Home", url: "/" },
  { id: 2, title: "Who We Are", url: "/about-us" },
  { id: 3, title: "Services", url: "/services" },
  { id: 4, title: "Healthcare Solutions", url: "/healthcare" },
  { id: 5, title: "Portfolio", url: "/portfolio" },
  { id: 6, title: "Blogs", url: "/blogs" },
  { id: 7, title: "Contact", url: "/contact-us" },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => setIsOpen((prevState) => !prevState);

  return (
    <>
      <div className="bg-black fixed top-0 h-[5rem] sm:h-[6.5rem] flex items-center py-2 left-0 w-full z-[100]">
        <div className="wrapper w-full h-fit flex items-center justify-between gap-10">
          <a data-aos="fade-down" href="/" className="flex items-center gap-2">
            <img
              src={logo}
              alt="logo"
              width={150}
              height={38}
              className="w-[8rem] sm:w-[10rem]"
            />
          </a>

          {/* Desktop Navigation */}
          {/* <div
            data-aos="fade-down"
            className="hidden lg:flex items-center gap-10"
          >
            {websiteLinks.map((link) => (
              <Link
                key={link.id}
                to={link.url}
                className={`${
                  pathname === link.url ? "text-primary" : "text-white"
                } uppercase text-sm link`}
              >
                {link.title}
              </Link>
            ))}
          </div> */}

          {/* Mobile Hamburger Button */}
          <button data-aos="fade-down" className="">
            <Hamburger toggled={isOpen} toggle={setIsOpen} size={28} />
          </button>
        </div>

        <Drawer
          open={isOpen}
          onClose={toggleDrawer}
          direction="right"
          className="py-4 px-10 z-10"
        >
          <div className="mb-6 flex items-center justify-end pr-[.7rem] py-[.4rem]">
            <button onClick={toggleDrawer} className="text-white text-[2.2rem]">
              <IoClose />
            </button>
          </div>
          <div className="flex flex-col gap-6">
            {websiteLinks.map(({ title, url, id }) => (
              <Link
                key={id}
                className="text-3xl text-white font-medium transition-colors duration-300 link"
                to={url}
                onClick={toggleDrawer}
              >
                {title}
              </Link>
            ))}
          </div>
        </Drawer>
      </div>
    </>
  );
};

export default Header;
