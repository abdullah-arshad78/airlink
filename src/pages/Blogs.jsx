import { useEffect } from "react";
import { getBlogs } from "../utils/sanity-https";
import { useQuery } from "@tanstack/react-query";
import BlogsContainer from "../components/BlogsContainer";
import LoaderContainer from "../UI/LoaderContainer";
const Blogs = () => {
  useEffect(() => {
    // Scroll to the top of the page
    window.scrollTo(0, 0);
  }, []);
  const { data, isPending, error } = useQuery({
    queryKey: ["blogs"],
    queryFn: getBlogs,
  });

  let content;
  if (isPending) {
    content = <LoaderContainer />;
  }
  if (data) {
    content = <BlogsContainer blogs={data} />;
  }
  if (error) {
    console.log(error);
  }

  return (
    <div className="min-h-[95vh] min-w-[100vw] w-[100vw] bg-white [background:radial-gradient(125%_125%_at_50%_10%,#fff_40%,#1c50ca_100%)] pt-[13vh] pb-[2rem] sm:pt-[12vh] px-[1rem]  sm:px-[2rem] lg:px-[3.3rem]">
      {content}
    </div>
  );
};

export default Blogs;
