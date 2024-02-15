import { useState, useEffect } from "react";
import useWindowWidth from "../hooks/useWindowWidth";
import contactMainImg from "../assets/contactmain.png";
import contactMainMobImg from "../assets/contactmainmob.png";
import { FaPhoneAlt } from "react-icons/fa";
import { GoDotFill } from "react-icons/go";
import { IoIosArrowDown } from "react-icons/io";
import { motion } from "framer-motion";

const ContactMainSection = () => {
  const windowWidth = useWindowWidth();
  const [mainImage, setMainImage] = useState("");
  const isMobile = windowWidth <= 640;
  useEffect(() => {
    if (isMobile) {
      setMainImage(contactMainMobImg);
    } else {
      setMainImage(contactMainImg);
    }
  }, [isMobile]);

  const iconClasses = "w-[3rem] h-[3rem] white-shadow";
  return (
    <div className="relative min-w-screen w-screen h-[70vh] text-slate-600">
      <img
        className={`w-full h-full object-cover ${!isMobile && "object-top"}`}
        src={mainImage}
        alt="passenger and travel agent smiling and talking"
      ></img>
      <div className="absolute left-0 top-0 w-full h-full contact-main-bg flex flex-col items-center justify-start pt-[13vh] sm:pt-[12vh]">
        <motion.h2
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeInOut", type: "spring" }}
          className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-blue-950 font-black text-[1.5rem] sm:text-[2.5rem] heading-font drop-shadow white-shadow"
        >
          Discover Affordable Flights
        </motion.h2>
        <motion.p
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeInOut", type: "spring" }}
          className="white-shadow text-xl font-black"
        >
          Contact Now
        </motion.p>
        <motion.div
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.2 } },
          }}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center justify-center space-y-4 my-4"
        >
          <motion.a
            variants={{
              hidden: { y: 100, opacity: 0 },
              visible: { y: 0, opacity: 1 },
            }}
            href="tel:+35383000000"
          >
            <FaPhoneAlt
              className={`${iconClasses} fill-green-700 hover:scale-95 transition-all duration-150 ease-in`}
            />
          </motion.a>
          <motion.span
            variants={{
              hidden: { y: 100, opacity: 0 },
              visible: { y: 0, opacity: 1 },
            }}
          >
            <GoDotFill className="w-[2rem] h-[2rem] white-shadow fill-gray-400" />
          </motion.span>
          <motion.a
            variants={{
              hidden: { y: 100, opacity: 0 },
              visible: { y: 0, opacity: 1 },
            }}
            href="#contact-form-section"
          >
            <IoIosArrowDown
              className={`${iconClasses} fill-blue-700 hover:translate-y-[1.5rem] transition-all duration-200 ease-in`}
            />
          </motion.a>
        </motion.div>
      </div>
    </div>
  );
};

export default ContactMainSection;
