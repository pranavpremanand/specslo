import iconImg from '../../../assets/images/curved-icon-black.png'

const DevelopmentProcess = ({ img }) => {
  return (
    <section className="py-14 text-black bg-white h-[calc(100%+3rem)]">
      <div className="wrapper text-center space-y-3">
        <h2 className="text2">Our Development Process</h2>
        <p className="desc max-w-4xl mx-auto">
          At Specslo, our development approach ensures precision, efficiency,
          and innovation at every stage. Our process is structured to bring your
          vision to life with a streamlined workflow:
        </p>
        <div className="max-w-4xl mx-auto grid grid-cols-3 gap-7 pt-[8rem]">
          {[1, 2, 3].map((item) => (
            <div className="bg-primary relative first:translate-y-[-4rem] last:translate-y-[-4rem] rounded-xl">
              <img
                src={img}
                className="w-[7rem] h-[7rem] rounded-full border-8 border-black absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                alt=""
              />
              <div className="space-y-3 pt-[4.5rem] px-5 pb-5">
                <h3 className="text3"> Discovery & Planning</h3>
                <p className="desc">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos
                  eveniet tempora harum unde error recusandae! Ullam cumque
                  ducimus et porro amet, libero molestias numquam excepturi
                  animi quisquam corporis suscipit inventore!
                </p>
                <img src={iconImg} className='w-[2.5rem] mx-auto object-contain' alt="" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DevelopmentProcess;
