import { useRef, useState, useEffect } from "react";
import irishMap from "../assets/ireland-map.png";
import { motion } from "framer-motion";

const AboutUsMain = () => {
  const elementRef = useRef(null);
  const [height, setHeight] = useState(0);
  console.log(height);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    // Function to update height
    const updateHeight = () => {
      setHeight(element.clientHeight);
    };

    // Create a ResizeObserver
    const resizeObserver = new ResizeObserver(updateHeight);
    resizeObserver.observe(element);

    // Call updateHeight initially in case the element's size is already set
    updateHeight();

    // Cleanup function
    return () => {
      resizeObserver.disconnect();
    };
  }, []); // Empty dependency array ensures this runs only once after mount

  return (
    <motion.div
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: 0.2 } },
      }}
      initial="hidden"
      animate="visible"
      className="pattern-bg grid grid-rows-2 md:grid-rows-none md:grid-cols-2 pt-[13vh] sm:pt-[12vh] text-slate-600 min-w-screen w-screen"
    >
      <motion.div
        variants={{
          hidden: { x: -200, opacity: 0 },
          visible: { x: 0, opacity: 1 },
        }}
        transition={{ duration: "300ms", type: "spring" }}
        className="p-2"
      >
        <h2 className="bg-clip-text text-transparent bg-gradient-to-r from-blue-900 to-sky-600 heading-font text-[1.5rem] md:text-[2rem] font-black white-shadow">
          About Us
        </h2>
        <p
          className="sm: px-4 md:px-4 lg:px:8 lg:py-4 lg:text-[1.1rem] white-shadow"
          ref={elementRef}
        >
          Welcome to our travel agency, a beacon of affordability and
          personalized travel experiences, proudly located at 6 Parnell Street,
          Limerick, Ireland. With a heritage spanning over 25 years, we've
          mastered the art of offering tickets at unbeatable rates, complemented
          by a 100% satisfaction guarantee. Our forte lies in curating bespoke,
          budget-friendly Umrah and Hajj packages, alongside a diverse array of
          custom holiday travels. The driving force behind our enduring success
          is our owner's vast experience, ensuring every journey we craft is not
          just a trip, but a tapestry of memorable moments. Whether you seek a
          spiritual pilgrimage or a unique vacation, our commitment to
          exceptional service and value stands unwavering. Join us in exploring
          the world's wonders, where your dream trip is always within reach.
        </p>
      </motion.div>

      <motion.div
        variants={{
          hidden: { x: 200, opacity: 0 },
          visible: { x: 0, opacity: 1 },
        }}
        transition={{ duration: "300ms", type: "spring" }}
        className={`w-full h-[${height + 15}px]`}
        style={{ height: `${height + 80}px` }}
      >
        <img
          className="w-full h-full block object-cover"
          src={irishMap}
          alt="Map of Ireland"
        ></img>
      </motion.div>
    </motion.div>
  );
};

export default AboutUsMain;
