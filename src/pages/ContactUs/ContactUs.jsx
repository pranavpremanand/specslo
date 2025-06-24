import MapComponent from "../../components/website/MapComponent";
import ContactForm3 from "../../components/common/ContactForm3";
import PageBanner from "../../components/common/PageBanner";

const ContactUs = () => {
  const contactStats = [
    { value: "24/7", label: "Support Available" },
    { value: "<24h", label: "Response Time" },
  ];

  return (
    <>
      <PageBanner
        title="Contact Us"
        subtitle="Get in touch with our team to discuss your project requirements and how we can help bring your vision to life."
        stats={contactStats}
        dividerBg="bg-black"
      />
      <ContactForm3 isBlackBg={true} />
      <MapComponent />
    </>
  );
};

export default ContactUs;
