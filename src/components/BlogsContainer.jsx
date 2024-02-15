import { useEffect } from "react";
import { motion } from "framer-motion";

import BlogsItem from "./BlogsItem";
import useView from "../hooks/useView";

const BlogsContainer = (props) => {
  const { ref, variants, controls, inView } = useView(true);

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const blogContent = props.blogs.map((blog) => (
    <BlogsItem blog={blog} key={blog.slug.current} />
  ));

  return (
    <motion.div
      ref={ref}
      variants={variants}
      initial="hidden"
      animate={controls}
      className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 drop-shadow-lg rounded-lg my-4"
    >
      {blogContent}
    </motion.div>
  );
};

export default BlogsContainer;
