import React from "react";
import banner from "../../assets/images/banners/banner.webp";
import { blogs } from "../../content/blogs";
import BlogItem from "../../components/website/BlogItem";

const Blogs = () => {
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
            Blogs
          </h1>
        </div>
      </section>
      <section className="py-14">
        <div className="wrapper space-y-[3rem]">
          <div className="space-y-2">
            <h2 className="text1 mb-4">Healthcare</h2>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-7">
              {blogs.HEALTHCARE.sort((a, b) => b.id - a.id).map((blog) => (
                <BlogItem blog={blog} key={blog.id} />
              ))}
            </div>
          </div>
          <div className="space-y-2">
            <h2 className="text1 mb-4">Others</h2>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-7">
              {blogs.OTHER.sort((a, b) => b.id - a.id).map((blog) => (
                <BlogItem blog={blog} key={blog.id} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Blogs;
