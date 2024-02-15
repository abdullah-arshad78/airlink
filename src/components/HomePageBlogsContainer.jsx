import React from "react";
import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getBlogs } from "../utils/sanity-https";
import BlogsContainer from "./BlogsContainer";

const HomePageBlogsContainer = () => {
  const { data, isPending, isError, error } = useQuery({
    queryKey: ["blogs"],
    queryFn: getBlogs,
  });
  let content;
  let famousBlogs;

  if (isPending) {
    content = <div className="loader-secondary"></div>;
  }
  if (data) {
    famousBlogs = data.slice(0, 4);
    content = <BlogsContainer blogs={famousBlogs} />;
  }

  return (
    <div className="relative pattern-bg px-2 py-[3rem] w-[100vw] min-w-[100vw]">
      <h2 className="bg-clip-text text-transparent bg-gradient-to-r from-blue-900 to-sky-600 heading-font text-[1.5rem] md:text-[2rem] font-black white-shadow mb-4">
        Famous Blogs
      </h2>

      {content}
      <Link
        className="block absolute bottom-0 right-[2rem] bg-clip-text text-transparent bg-gradient-to-r from-blue-900 to-sky-600 text-[1.3rem] md:text-[1.5rem] font-black white-shadow mb-4 hover:-translate-y-2 transition-all duration-200 ease-in"
        to="/blogs"
      >
        View All
      </Link>
    </div>
  );
};

export default HomePageBlogsContainer;
