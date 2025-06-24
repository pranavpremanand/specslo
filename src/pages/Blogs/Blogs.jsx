import React from "react";
import { blogs } from "../../content/blogs";
import BlogItem from "../../components/website/BlogItem";
import PageBanner from "../../components/common/PageBanner";

const Blogs = () => {
  // Calculate total number of blogs across all categories
  const totalBlogs = Object.values(blogs).reduce(
    (total, categoryBlogs) => total + categoryBlogs.length, 
    0
  );
  
  // const blogStats = [
  //   { value: `${totalBlogs}+`, label: "Articles" },
  //   { value: `${Object.keys(blogs).length}`, label: "Categories" }
  // ];

  return (
    <>
      <PageBanner 
        title="Our Blog" 
        subtitle="Insights, trends, and expert perspectives on technology, development, and digital transformation."
        // stats={blogStats}
        dividerBg="bg-black"
      />
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
