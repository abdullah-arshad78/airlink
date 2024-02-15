import { useEffect } from "react";
import { getSingleBlog } from "../utils/sanity-https";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import SanityBlockContent from "@sanity/block-content-to-react";
import LoaderContainer from "../UI/LoaderContainer";
import { motion } from "framer-motion";
function formatDate(dateString) {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const date = new Date(dateString);
  const year = date.getFullYear();
  const monthIndex = date.getMonth();
  const day = date.getDate();

  return `${months[monthIndex]} ${day}, ${year}`;
}

const BlogDetail = () => {
  const { id } = useParams();
  const { data, isPending } = useQuery({
    queryKey: ["blogs", { id: id }],
    queryFn: () => getSingleBlog(id),
  });
  useEffect(() => {
    // Scroll to the top of the page
    window.scrollTo(0, 0);
  }, []);
  let content;
  if (isPending) {
    content = <LoaderContainer />;
  }
  let blogPost;
  let formattedDate;
  if (data) {
    blogPost = data[0];
    formattedDate = formatDate(blogPost.publishedAt);

    content = (
      <div className="w-[100vw] min-w-[100vw] pt-[13vh] sm:pt-[12vh] pb-4 flex justify-center">
        <motion.div
          initial={{ opacity: 0, y: 120 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", duration: "300ms", stiffness: 100 }}
          className="w-[95%] max-w-[50rem] bg-slate-100  pb-4 rounded-lg drop-shadow-lg text-left md:leading-7 text-slate-600"
        >
          <img
            src={blogPost.mainImage.asset.url}
            alt={blogPost.title}
            className="rounded-t-lg"
          ></img>
          <div className="blog-heading-content my-4 w-full flex flex-col items-center justify-center px-2">
            <h2 className="bg-clip-text text-transparent bg-gradient-to-r from-blue-900 to-sky-600 heading-font text-[1.5rem] md:text-[2rem] font-black white-shadow text-center ">
              {blogPost.title}
            </h2>
            <div className="flex items-center justify-center space-x-4 my-4">
              {" "}
              <img
                className="w-[3rem] h-[3rem] rounded-full drop-shadow"
                src={blogPost.author.image.asset.url}
                alt={blogPost.author.name}
              ></img>
              <span className="text-sm  mb-2 bg-[rgba(8,70,70,0.7)] p-2 rounded-lg text-white">
                {formattedDate}
              </span>
            </div>
          </div>

          <SanityBlockContent
            blocks={blogPost.body}
            dataset="production"
            projectId="xax3gmwv"
            className="px-4"
          />
        </motion.div>
      </div>
    );
  }

  return <>{content}</>;
};

export default BlogDetail;
