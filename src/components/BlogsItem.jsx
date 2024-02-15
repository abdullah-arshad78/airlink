import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const randomColorsBg = [
  "bg-[rgba(21,128,61,.7)]",
  "bg-[rgba(30,64,175,.7)]",
  "bg-[rgba(126,34,206,.7)]",
  "bg-[rgba(190,18,60,.7)]",
];

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

const BlogsItem = ({ blog }) => {
  const { title, author, mainImage, categories, publishedAt, _id: id } = blog;

  const formattedDate = formatDate(publishedAt);
  const blogItemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };
  return (
    <motion.div
      variants={blogItemVariants}
      transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
      className="relative"
    >
      <Link to={`/blogs/${id}`}>
        <img
          className="object-cover rounded-lg absolute bottom-0 left-0 w-full h-full -z-10"
          src={mainImage.asset.url}
        ></img>
        <div className="content-conteiner  flex flex-col items-center justify-end h-full py-[2rem]">
          <h2 className="text-lg  max-w-[90%] rounded-lg px-2 py-1 font-bold text-white heading-font z-10 bg-[rgba(0,0,0,.6)]">
            {title}
          </h2>
          <div className="categories-container text-sm capitalize flex items-center justify-center text-white space-x-2 my-2">
            {categories.map((category) => (
              <span
                className={`${
                  randomColorsBg[Math.floor(Math.random() * 4)]
                } font-bold drop-shadow p-1 rounded-lg`}
                key={category.title}
              >
                {" "}
                {category.title}{" "}
              </span>
            ))}
          </div>
          <span className="text-sm  mb-2 bg-[rgba(8,70,70,0.9)] p-2 rounded-lg text-white">
            {formattedDate}
          </span>
          <div className="flex flex-col items-center justify-center my-4 space-y-2">
            <img
              className="w-[4rem] h-[4rem] rounded-full drop-shadow "
              src={author.image.asset.url}
            ></img>
            <p className="text-white text-sm bg-[rgba(9,54,132,0.7)] p-1 rounded-lg">
              {author.name}
            </p>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default BlogsItem;
