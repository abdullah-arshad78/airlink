import React from "react";
import { motion } from "framer-motion";

const FeatureCard = (props) => {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: -50 },
        visible: { opacity: 1, y: 0 },
      }}
      className=" p-2 sm:p-4 rounded-lg  capitalize sm:uppercase font-light flex flex-col items-center justify-center text-center text-white glass-bg"
    >
      {props.children}
    </motion.div>
  );
};

export default FeatureCard;
