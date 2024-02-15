import { useEffect } from "react";
import introVid1 from "../assets/intro-vid-1.mp4";
import introVid2 from "../assets/intro-vid-2.mp4";
import introVid3 from "../assets/intro-vid-3.mp4";
import { motion } from "framer-motion";

import useView from "../hooks/useView";

const IntroSection = () => {
  const { ref, variants, controls, inView } = useView(true);

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      variants={variants}
      initial="hidden"
      animate={controls}
      className=" grid grid-rows-2 md:grid-rows-none md:grid-cols-2 bg-gradient-to-b from-blue-400 to-blue-50 pt-[4rem] lg:pt-[6rem]  w-screen pb-6 mt-[-10rem] h-[max-content] intro-container"
    >
      <motion.div
        variants={{
          hidden: { opacity: 0, x: -150 },
          visible: { opacity: 1, x: 0 },
        }}
        transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
        className="mt-[6rem] px-2"
      >
        <h3 className="font-bold text-[.85rem] sm:text-[1.2rem] text-slate-600 p-2 sm:p-10 md:p-6 mb-4 sm:mb-0">
          Discover the world with Airlink Travels, your trusted partner in
          bespoke holiday experiences. For over 25 years, we've excelled in
          offering affordable, swift flight fares and meticulously crafted
          travel packages. Our dedicated team is committed to ensuring your
          journey is seamless, from finding the perfect destination to providing
          round-the-clock support. Whether you're seeking adventure, relaxation,
          or cultural exploration, Airlink Travels is here to make your travel
          dreams a reality, tailored to your unique preferences and needs.
        </h3>
      </motion.div>
      <motion.div
        variants={{
          hidden: { opacity: 0, x: 150 },
          visible: { opacity: 1, x: 0 },
        }}
        transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
        className="relative mt-2 md:mt-[6rem] md:min-h-[25rem]"
      >
        <video
          className="block object-cover origin-bottom rotate-[10deg] sm:rotate-[15deg] absolute top-[50%] left-[65%] sm:left-[50%] lg:left-[65%] translate-x-[-50%] translate-y-[-50%] w-[8rem] h-[16rem] sm:w-[10rem] sm:h-[20rem] lg:w-[13rem]  rounded-lg drop-shadow-lg"
          loop
          autoPlay
          muted
        >
          <source src={introVid1} type="video/mp4" />
        </video>
        <video
          className="block object-cover origin-bottom rotate-[-10deg] sm:rotate-[-15deg] absolute top-[50%] left-[35%] sm:left-[50%] lg:left-[35%] translate-x-[-50%] translate-y-[-50%] w-[8rem] h-[16rem] sm:w-[10rem] sm:h-[20rem] lg:w-[13rem]   rounded-lg drop-shadow-lg"
          loop
          autoPlay
          muted
        >
          <source src={introVid2} type="video/mp4" />
        </video>
        <video
          className="block object-cover absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-[8rem] h-[16rem] sm:w-[10rem] sm:h-[20rem] lg:w-[13rem]   rounded-lg drop-shadow-lg"
          loop
          autoPlay
          muted
        >
          <source src={introVid3} type="video/mp4" />
        </video>
      </motion.div>
    </motion.div>
  );
};

export default IntroSection;
