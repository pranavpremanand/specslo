import React from "react";
import { Link } from "react-router-dom";

const BlogItem = ({ blog }) => {
  return (
    <div
      data-aos="fade-up"
      className="p-3 border border-primary2 rounded-xl flex justify-between flex-col gap-6"
    >
      <div className="space-y-3">
        <Link to={blog.link} target="_blank" rel="noreferrer" className="group">
          <div className="overflow-hidden aspect-square rounded-xl">
            <img
              src={blog.image}
              alt="Blog"
              className="object-cover w-full aspect-square group-hover:brightness-90 group-hover:scale-105 transition-all duration-300"
            />
          </div>
        </Link>
        <h3 className="text3 !font-medium mt-2">{blog.title}</h3>
      </div>
      <Link
        to={blog.link}
        target="_blank"
        rel="noreferrer"
        className="btn bg-primary text-black hover:bg-black hover:text-white border border-primary h-fit"
      >
        Read More
      </Link>
    </div>
  );
};

export default BlogItem;
