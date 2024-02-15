import { useEffect } from "react";
import { Link } from "react-router-dom";
import footerImg from "../assets/footer-img.png";
import { FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import useView from "../hooks/useView";

import { FaLocationDot } from "react-icons/fa6";
const Footer = () => {
  const footerLinkClasses =
    "drop-shaow-lg md:p-2 md:hover:-rotate-12 md:rounded-lg md:hover:shadow md:hover:bg-gradient-to-r md:hover:from-blue-700 md:hover:to-blue-500 md:hover:text-white transition-all duration-200 ease-in";
  const childVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: { opacity: 1, scale: 1 },
  };

  const { ref, variants, inView } = useView(false);

  return (
    <motion.footer
      ref={ref}
      variants={variants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      className="bg-[radial-gradient(ellipse_at_right,_var(--tw-gradient-stops))] from-blue-600 to-indigo-900 pt-6 md:pt-[2rem] px-[2rem] lg:pt-[3rem] flex flex-col items-center text-slate-300 w-screen"
    >
      <motion.img
        variants={childVariants}
        transition={{ duration: 0.4, stiffness: 100 }}
        className="footer-image w-[5rem] md:w-[7rem] lg:w-[10rem] "
        src={footerImg}
        alt="footer logo"
      ></motion.img>
      <motion.div
        variants={childVariants}
        transition={{ duration: 0.4, stiffness: 100 }}
        className="mt-[2rem] flex flex-col sm:flex-row sm:justify-between gap-y-2 md:gap-y-0 sm:w-full"
      >
        <div className=" flex flex-col sm:items-start lg:flex-row  gap-y-2 gap-y-2 font-black  drop-shadow-lg">
          <span className="flex items-center justify-center gap-x-2 md:p-2">
            <FaEnvelope className=" w-[1.55rem] h-[1.55rem]" />
            info@airlink.com
          </span>
          <span className="flex items-center justify-center gap-x-2 md:p-2">
            <FaPhoneAlt className="w-[1.55rem] h-[1.55rem]" />
            +35383000000
          </span>
          <span className="flex items-center justify-center gap-x-2 md:p-2">
            <FaLocationDot className="w-[1.55rem] h-[1.55rem]" />6 parnell
            Street Limerick
          </span>
        </div>
        <div className="flex flex-col sm:items-end gap-y-2 mb-4 font-black lg:flex-row">
          <Link className={footerLinkClasses} to="/about">
            About
          </Link>
          <Link className={footerLinkClasses} to="/book-a-flight">
            Book a flight
          </Link>
          <Link className={footerLinkClasses} to="/privacy">
            Privacy policy
          </Link>
        </div>
      </motion.div>
      <motion.p variants={childVariants} className="text-slate-300 font-bold">
        &copy; Airlink Travels 2023
      </motion.p>
    </motion.footer>
  );
};

export default Footer;
