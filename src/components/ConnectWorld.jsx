import { useEffect } from "react";
import connectWorldImg from "../assets/connectWorld.png";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const ConnectWorld = () => {
  return (
    <div className="w-screen connect-world-container relative h-[55vh] flex items-start justify-center pt-6 px-2">
      <h2 className="tracking-wider heading-font connect-world-heading sm:text-[1.5rem] md:text-[2.7rem] uppercase   font-black ">
        Bringing the world to doorsteps
      </h2>
      <img
        src={connectWorldImg}
        className="-z-10 absolute top-0 left-0 object-cover connect-img  w-full h-full "
      ></img>
    </div>
  );
};

export default ConnectWorld;
