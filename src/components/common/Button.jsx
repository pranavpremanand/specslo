import { IoArrowForwardOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

const Button = ({ children, action, to }) => {
  const navigate = useNavigate();

  const doAction = () => {
    if (to) {
      navigate(to);
    } else {
      action();
    }
  };
  return (
    <button
      onClick={doAction}
      className="btn group bg-primary tracking-wide uppercase min-w-[12rem] text-black relative hover:shadow-large hover:shadow-primary/60"
    >
      <div className="flex justify-end items-center absolute bg-gradient-to-r from-[#000000_70%] to-primary w-[125%] h-full inset-0 z-[-1] cursor-pointer group-hover:w-full group-hover:opacity-0 transition-all duration-500 rounded-s-full">
        <div className="w-[3rem] h-[3rem] translate-x-[1.2rem] flex items-center justify-center rounded-full p-2 bg-primary">
          <IoArrowForwardOutline size={24} />
        </div>
      </div>
      <div className="w-full h-full bg-primary">{children}</div>
    </button>
  );
};

export default Button;
