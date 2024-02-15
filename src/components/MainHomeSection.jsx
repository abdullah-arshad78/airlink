import { useState, useEffect } from "react";
import { FaPaperPlane } from "react-icons/fa";
import { Link } from "react-router-dom";
import homeImageDesk from "../assets/homeImg.webp";
import homeImageMob from "../assets/main-img-mob.png";
import { motion } from "framer-motion";
import FeatureCard from "../UI/FeatureCard";
import useWindowWidth from "../hooks/useWindowWidth";

const MainHomeSection = () => {
  const windowWidth = useWindowWidth();
  const [mainImage, setMainImage] = useState("");
  const isMobile = windowWidth <= 640;
  useEffect(() => {
    if (isMobile) {
      setMainImage(homeImageMob);
    } else {
      setMainImage(homeImageDesk);
    }
  }, [isMobile]);

  return (
    <div className="w-screen min-h-screen relative flex flex-col sm:items-start sm:justify-start items-center justify-between pt-[17vh] sm:pt-[12vh] px-[10vw] sm:text-left text-slate-600">
      <img
        className="absolute top-0 left-0 w-full h-full object-cover -z-10"
        src={mainImage}
        alt="standing aircraft"
      ></img>
      <motion.div
        animate={{ opacity: [0, 1], x: [-50, 0] }}
        transition={{ type: "spring", duration: "200ms" }}
        className="md:w-[50vw] flex flex-col gap-4 items-center sm:block justify-center"
      >
        <h1 className="bg-clip-text text-transparent bg-gradient-to-r from-blue-900 to-sky-600 font-black text-[1.5rem] sm:text-[2.5rem] heading-font drop-shadow white-shadow">
          Your Gateway to Unforgettable Adventures!
        </h1>

        {!isMobile && (
          <p className="font-bold sm:w-[35vw] my-4 white-shadow md:text-[1.3rem]">
            25 Years of Expertise in Delivering Exceptional Flight Services and
            Bespoke Travel Packages for Unforgettable Global Journeys.
          </p>
        )}
        <Link
          to="/book-a-flight"
          className="flex items-center justify-center gap-x-2 w-[max-content] text-white font-bold md:text-[1.2rem] bg-gradient-to-r from-sky-600 to-blue-900 rounded-lg hover:from-blue-900 hover:to-sky-600 hover:-translate-y-[3px] p-2 transition-all duration-200 ease-in white-shadow "
        >
          Book Now <FaPaperPlane className="inline-block" />
        </Link>
      </motion.div>

      <motion.div
        variants={{
          hidden: { opacity: 1 },
          visible: { transition: { staggerChildren: 0.3 } },
        }}
        initial="hidden"
        animate="visible"
        className="sm:absolute  sm:right-4 sm:bottom-4 flex gap-4 flex-col sm:flex-row my-4"
      >
        <FeatureCard>
          <h2 className="sm:text-[1.6rem] font-black">100%</h2>
          <span>satisfaction guarantee</span>
        </FeatureCard>
        <FeatureCard>
          <h2 className="sm:text-[1.6rem] font-black">25+</h2>
          <span>years experience</span>
        </FeatureCard>
        <FeatureCard>
          <h2 className="sm:text-[1.6rem] font-black">100+</h2>
          <span>airlines</span>
        </FeatureCard>
      </motion.div>
    </div>
  );
};

export default MainHomeSection;
