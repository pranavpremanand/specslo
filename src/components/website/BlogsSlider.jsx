import { Link } from "react-router-dom";
import { blogs } from "../../content/blogs";
import { useKeenSlider } from "keen-slider/react";
import { RxCaretRight } from "react-icons/rx";
import { PiCaretLeftBold, PiCaretRightBold } from "react-icons/pi";

const BlogsSlider = () => {
  const [sliderRef, instanceRef] = useKeenSlider(
    {
      loop: true,
      breakpoints: {
        "(min-width: 768px)": {
          slides: {
            perView: 2,
            spacing: 20,
          },
        },
        "(min-width: 1024px)": {
          slides: {
            perView: 3,
            spacing: 20,
          },
        },
        "(min-width: 1280px)": {
          slides: {
            perView: 4,
            spacing: 20,
          },
        },
      },
      slides: {
        perView: 1,
        spacing: 20,
      },
    },
    [
      (slider) => {
        let timeout;
        let mouseOver = false;
        function clearNextTimeout() {
          clearTimeout(timeout);
        }
        function nextTimeout() {
          clearTimeout(timeout);
          if (mouseOver) return;
          timeout = setTimeout(() => {
            slider.next();
          }, 2000);
        }
        slider.on("created", () => {
          slider.container.addEventListener("mouseover", () => {
            mouseOver = true;
            clearNextTimeout();
          });
          slider.container.addEventListener("mouseout", () => {
            mouseOver = false;
            nextTimeout();
          });
          nextTimeout();
        });
        slider.on("dragStarted", clearNextTimeout);
        slider.on("animationEnded", nextTimeout);
        slider.on("updated", nextTimeout);
      },
    ]
  );

  const prevClick = () => {
    if (instanceRef.current) {
      instanceRef.current.prev();
    }
  };

  const nextClick = () => {
    if (instanceRef.current) {
      instanceRef.current.next();
    }
  };
  return (
    <section className="py-14 bg-black">
      <div data-aos="fade-up" className="wrapper space-y-3">
        <h2 className="text1 text-center border-b-2 pb-3 border-white w-fit">
          <span className="text-black bg-primary font-glacial pl-1 pb-1">
            Blogs
          </span>{" "}
          & Inspecs News
        </h2>
        <p className="desc">
          Stay ahead with insights, trends, and stories from the Specslo team.
          <br />
          Explore how tech and AI shape the future of your business.
        </p>
        <div ref={sliderRef} className="keen-slider py-8">
          {blogs.OTHER.concat(blogs.OTHER).map((blog) => (
            <div
              key={blog.id}
              className="keen-slider__slide flex justify-between flex-col gap-6 border border-primary/25"
            >
              <div className="flex flex-col gap-3">
                <Link
                  to={blog.link}
                  target="_blank"
                  rel="noreferrer"
                  className="group"
                >
                  <div className="overflow-hidden">
                    <img
                      src={blog.image}
                      alt="Blog"
                      className="object-cover w-full aspect-[5/3] group-hover:brightness-90 group-hover:scale-105 transition-all duration-300"
                    />
                  </div>
                </Link>
                <div className="p-2">
                  <Link
                    to={blog.link}
                    target="_blank"
                    rel="noreferrer"
                    className="text4 !font-medium mt-2 link line-clamp-2"
                  >
                    <span className="text-black px-1 bg-primary">
                      {blog.title.split(" ")[0]}
                    </span>{" "}
                    {blog.title.split(" ").slice(1).join(" ")}
                  </Link>
                </div>
                <div className="p-3">
                  <div className="flex justify-between gap-5 items-center">
                    <p className="text-black text-sm bg-primary px-1">Other</p>
                    <Link
                      to={blog.link}
                      target="_blank"
                      rel="noreferrer"
                      className="bg-primary text-black hover:bg-black hover:text-white border border-primary h-fit !px-2 !py-0.5 text-sm rounded-full btn flex items-center gap-2"
                    >
                      Read More{" "}
                      <RxCaretRight
                        size={20}
                        className="w-5 min-w-5 inline-block"
                      />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex gap-8 pt-4">
          <button
            onClick={prevClick}
            className="w-10 h-10 flex items-center justify-center rounded-full btn text-black btn hover:bg-black hover:text-primary bg-primary border"
          >
            <PiCaretLeftBold strokeWidth={0.5} size={30} />
          </button>
          <button
            onClick={nextClick}
            className="w-10 h-10 flex items-center justify-center rounded-full btn text-black btn hover:bg-black hover:text-primary bg-primary border"
          >
            <PiCaretRightBold strokeWidth={0.5} size={30} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default BlogsSlider;
