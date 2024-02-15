import { NavLink } from "react-router-dom";
import { AiOutlineClose } from "react-icons/ai";
import { motion } from "framer-motion";
const mobNavClasses =
  "p-2 rounded-lg hover:bg-gradient-to-r hover:from-blue-700 hover:to-blue-300 hover:shadow-lg transition-all duration-200 ease-in";
const activeLinkClasses = ({ isActive }) => {
  return isActive
    ? "p-2 border-b-2 transition-all duration-200 ease-in"
    : mobNavClasses;
};
const variants = {
  hidden: { x: 280, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      duration: 0.4,
    },
  },
};
const linkVariants = {
  hidden: { x: 30, opacity: 0 },
  visible: { x: 0, opacity: 1 },
};
const MobileNavigation = ({ onClose }) => {
  return (
    <motion.nav
      variants={variants}
      initial="hidden"
      animate="visible"
      exit="hidden"
      className="fixed top-0 right-0 w-[280px] h-screen bg-red-50 shadow-lg mobile-nav-bg flex flex-col items-center pt-[20vh] gap-y-4 text-white font-bold text-[1.5rem] z-20"
    >
      <motion.div
        className="absolute top-2 p-2 z-20 shadow shadow-black cursor-pointer right-2 rounded-full bg-gray-50 flex items-center justify-center mr-4"
        onClick={onClose}
        variants={linkVariants}
      >
        {" "}
        <AiOutlineClose className="w-[2rem] h-[2rem] fill-slate-600" />
      </motion.div>
      <motion.div variants={linkVariants}>
        <NavLink onClick={onClose} to="/" className={activeLinkClasses}>
          Home
        </NavLink>
      </motion.div>
      <motion.div variants={linkVariants}>
        <NavLink to="/about" onClick={onClose} className={activeLinkClasses}>
          About
        </NavLink>
      </motion.div>
      <motion.div variants={linkVariants}>
        <NavLink
          onClick={onClose}
          to="/book-a-flight"
          className={activeLinkClasses}
        >
          Book A Flight
        </NavLink>
      </motion.div>
      <motion.div variants={linkVariants}>
        <NavLink onClick={onClose} to="/blogs" className={activeLinkClasses}>
          Blogs
        </NavLink>
      </motion.div>
    </motion.nav>
  );
};

export default MobileNavigation;
