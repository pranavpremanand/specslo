import { Link } from "react-router-dom";

const ThankYou = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex-1 flex items-center">
        <div className="wrapper flex flex-col gap-2 items-center">
          <h1 className="text1 text-primary2">Thank You</h1>
          <p className="text4">Your message has been sent successfully</p>
          <p className="pb-4 text4">We will get back to you soon</p>
          <Link
            to="/"
            className="btn bg-primary text-black hover:bg-black hover:text-white border border-primary"
          >
            Go to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ThankYou;
