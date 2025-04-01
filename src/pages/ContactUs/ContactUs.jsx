import banner from "../../assets/images/banners/banner.webp";
import MapComponent from "../../components/website/MapComponent";
import ContactForm3 from "../../components/common/ContactForm3";

const ContactUs = () => {
  return (
    <>
      <section className="relative w-full aspect-video min-h-[60vh] max-h-[80vh]">
        <div className="absolute inset-0 h-full w-full bg-black/40 z-[-1]"></div>
        <img
          src={banner}
          className="object-cover w-full h-full absolute inset-0 z-[-2]"
          alt="Banner"
        />
        <div className="wrapper flex h-full py-[6rem] md:pt-[8rem] pb-16 items-center">
          <h1 data-aos="fade-right" className="text_xl text-white">
            Contact Us
          </h1>
        </div>
      </section>
      <ContactForm3 isBlackBg={true} />
      <MapComponent />
    </>
  );
};

export default ContactUs;
