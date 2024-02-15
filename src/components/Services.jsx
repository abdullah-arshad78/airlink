import { useEffect } from "react";
import ServiceCard from "../UI/ServiceCard";
import { GiPayMoney } from "react-icons/gi";
import { FaStarAndCrescent } from "react-icons/fa";
import { MdHolidayVillage } from "react-icons/md";
import { SiYourtraveldottv } from "react-icons/si";
import { motion } from "framer-motion";
import useView from "../hooks/useView";
const cardHeadingClasses =
  "my-2 heading-font font-bold drop-shadow text-[1.2rem]";

const SERVICE_CONTENT = [
  {
    id: "s1",
    headingcolor: "text-green-700",
    icon: (
      <GiPayMoney className="w-[4rem] h-[4rem] md:w-[5rem] md:w-[5rem] fill-green-700 drop-shadow" />
    ),
    title: "Affordable Fares",
    content:
      "Experience exceptional journeys at unbeatable prices with our travel agency. Your gateway to affordable, quality adventures without compromising on the joy of travel!",
  },
  {
    id: "s2",
    headingcolor: "text-purple-700",
    icon: (
      <FaStarAndCrescent className="w-[4rem] h-[4rem] md:w-[5rem] md:w-[5rem] fill-purple-700 drop-shadow" />
    ),
    title: "Umrah & Hajj",
    content:
      "Embark on a serene spiritual journey with our best Umrah and Hajj packages, promising comprehensive services, devoted guidance, and exceptional value to enhance your pilgrimage experience.",
  },
  {
    id: "s3",
    headingcolor: "text-indigo-700",
    icon: (
      <MdHolidayVillage className="w-[4rem] h-[4rem] md:w-[5rem] md:w-[5rem] fill-indigo-700 drop-shadow" />
    ),
    title: "Holiday Packages",
    content:
      "Discover idyllic destinations with our top-tier holiday packages, offering a perfect blend of relaxation, adventure, and luxury at value prices for an unforgettable getaway experience.",
  },
  {
    id: "s4",
    headingcolor: "text-yellow-600",
    icon: (
      <SiYourtraveldottv className="w-[4rem] h-[4rem] md:w-[5rem] md:w-[5rem] fill-yellow-600 drop-shadow" />
    ),
    title: "Travel Insurance",
    content:
      "Travel with peace of mind through our top-rated travel insurance, providing comprehensive coverage, quick claims, and 24/7 support for a worry-free and secure trip.",
  },
];

const Services = () => {
  const { ref, variants, controls, inView } = useView();
  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);
  const serviceContent = SERVICE_CONTENT.map((item) => (
    <ServiceCard key={item.id}>
      <>{item.icon}</>
      <h3 className={`${cardHeadingClasses} ${item.headingcolor}`}>
        {item.title}
      </h3>
      <p className="text-sm md:text-base">{item.content}</p>
    </ServiceCard>
  ));

  return (
    <motion.div
      ref={ref}
      variants={variants}
      initial="hidden"
      animate={controls}
      className="service-container min-w-screen w-screen py-4 md:py-8 text-slate-600"
    >
      <motion.h2
        variants={{
          hidden: { opacity: 0, y: 100 },
          visible: { opacity: 1, y: 0 },
        }}
        transition={{ duration: "300ms", type: "spring" }}
        className="bg-clip-text text-transparent bg-gradient-to-r from-blue-900 to-sky-600 heading-font text-[1.5rem] md:text-[2rem] font-black white-shadow"
      >
        Our Services
      </motion.h2>
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 100 },
          visible: { opacity: 1, y: 0 },
        }}
        transition={{ duration: "300ms", type: "spring" }}
        className="grid grid-rows-4 sm:grid-rows-2 sm:grid-cols-2 lg:grid-rows-none lg:grid-cols-4 p-4 gap-4"
      >
        {serviceContent}
      </motion.div>
    </motion.div>
  );
};

export default Services;
