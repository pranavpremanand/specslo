import bgImg1 from "../../assets/images/cta/cta-bg-1.webp";
import img1 from "../../assets/images/cta/cta-1.png";

const CTA1 = () => {
  return (
    <div className="py-14" data-aos="fade-up">
      <div className="wrapper">
        <div className="max-w-6xl relative mx-auto before:-translate-x-3 before:-translate-y-3 before:bg-primary before:w-full before:h-full before:absolute before:inset-0 before:z-[-1] before:rounded-3xl">
          <img
            src={bgImg1}
            className="brightness-[15%] absolute top-0 left-0 w-full h-full object-cover z-[-1] rounded-3xl"
            alt=""
            loading="lazy"
          />
          <div className="flex flex-col-reverse sm:grid grid-cols-2 gap-8 items-center py-7 sm:py-0 px-10 border-8 border-[#252525] rounded-3xl">
            <div className="space-y-5 max-w-[22rem] mx-auto">
              <h3 className="text2 py-3 border-y-2 border-primary/50">
                Take the Next Step with Specslo
              </h3>
              <p className="desc">
                Download our brochure to see how we turn your specs into
                future-ready digital solutions, with our services, approach, and
                vision inside.
              </p>
              <div className="pt-3">
                <a
                  href="#"
                  className="btn bg-primary text-black hover:bg-black hover:text-white border border-primary"
                >
                  Download Brochure
                </a>
              </div>
            </div>
            <div className="w-full flex sm:justify-end">
              <img
                src={img1}
                loading="lazy"
                className="object-contain w-full max-w-[22rem]"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { CTA1 };
