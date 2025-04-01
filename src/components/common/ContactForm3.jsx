import { useContext } from "react";
import { SpinnerContext } from "./SpinnerContext";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { companyDetails } from "../../content/constant";
import axios from "axios";
import toast from "react-hot-toast";
import { ImPhone } from "react-icons/im";
import { IoLocation, IoMail } from "react-icons/io5";

const ContactForm3 = ({ isBlackBg }) => {
  const { setLoading } = useContext(SpinnerContext);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      message: "",
    },
    mode: "all",
  });

  const onSubmit = async (values) => {
    setLoading(true);
    try {
      let body =
        "Full Name : " +
        values.fullName +
        "\n\n" +
        "Email : " +
        values.email +
        "\n\n" +
        "Phone : " +
        values.phone +
        "\n\n" +
        "Message : " +
        values.message +
        "\n\n";

      const data = {
        body,
        name: "SPECSLO",
        subject: values.subject,
        to: companyDetails.email,
      };

      const res = await axios.post(
        "https://send-mail-redirect-boostmysites.vercel.app/send-email",
        data
      );

      if (res.data.success) {
        toast.success(res.data.message);
        reset();
        navigate("/thank-you");
      } else {
        toast.error(res.data.message);
      }
    } catch (err) {
      toast.error("Something went wrong");
    } finally {
      setLoading(false);
    }
  };
  return (
    <section className={`${isBlackBg ? "bg-black" : "bg-[#222222]"} py-14`}>
      <div className="wrapper flex flex-col-reverse md:grid grid-cols-2 gap-7">
        <form
          onSubmit={handleSubmit(onSubmit)}
          data-aos="fade-right"
          className="p-6 space-y-4 rounded-2xl bg-[#EDEDED] text-black"
        >
          <div className="grid sm:grid-cols-2 md:grid-cols-1 xl:grid-cols-2 gap-4">
            <div className="space-y-1 grid">
              <label className="text-sm">Full Name</label>
              <input
                type="text"
                className="p-3 rounded-[1rem] outline-none border-2 border-gray-700 bg-transparent w-full"
                placeholder="Enter your full name"
                {...register("fullName", {
                  required: "Full Name is required",
                  validate: (value) => {
                    if (value.trim() === "") {
                      return "Full Name is required";
                    }
                  },
                })}
              />
              {errors.fullName && (
                <small className="text-red-500">
                  {errors.fullName.message}
                </small>
              )}
            </div>
            <div className="space-y-1 grid">
              <label className="text-sm">Email</label>
              <input
                type="email"
                className="p-3 rounded-[1rem] outline-none border-2 border-gray-700 bg-transparent w-full"
                placeholder="Enter your email address"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                    message: "Invalid email address",
                  },
                })}
              />
              {errors.email && (
                <small className="text-red-500">{errors.email.message}</small>
              )}
            </div>
          </div>
          <div className="space-y-1 grid">
            <label className="text-sm">Phone Number</label>
            <input
              type="tel"
              className="p-3 rounded-[1rem] outline-none border-2 border-gray-700 bg-transparent w-full"
              placeholder="Enter your phone number"
              {...register("phone", {
                required: "Phone number is required",
                pattern: {
                  value: /^\+?[\d\s\-()]{6,14}\d$/,
                  message: "Entered phone number is invalid",
                },
              })}
            />
            <small className="text-red-500">{errors.phone?.message}</small>
          </div>
          <div className="space-y-1 grid">
            <label className="text-sm">Subject</label>
            <input
              type="text"
              className="p-3 rounded-[1rem] outline-none border-2 border-gray-700 bg-transparent w-full"
              placeholder="Enter subject"
              {...register("subject", {
                required: "Subject is required",
                validate: (value) => {
                  if (value.trim() === "") {
                    return "Subject is required";
                  }
                },
              })}
            />
            {errors.subject && (
              <small className="text-red-500">{errors.subject.message}</small>
            )}
          </div>
          <div className="space-y-1 grid">
            <label className="text-sm">Message</label>
            <textarea
              className="p-3 rounded-[1rem] outline-none border-2 border-gray-700 bg-transparent w-full"
              placeholder="Enter your message here"
              {...register("message", {
                required: "Message is required",
                validate: (value) => {
                  if (value.trim() === "") {
                    return "Message is required";
                  }
                },
              })}
            />
            {errors.message && (
              <small className="text-red-500">{errors.message.message}</small>
            )}
          </div>
          <button
            type="submit"
            className="btn bg-[#222222] hover:bg-black w-full text-white"
          >
            Submit Now
          </button>
        </form>
        <div data-aos="fade-up" className="space-y-4">
          <h2 className="text1 text-primary">Connect With Us</h2>
          <div className="h-2 w-[24rem] bg-white"></div>
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
  );
};

export default ContactForm3;
