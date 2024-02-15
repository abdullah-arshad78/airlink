import { useState, useEffect } from "react";
import arshadPic from "../assets/arshadPic.jpg";
import harisPic from "../assets/harisPic.jpg";
import harisAvatar from "../assets/harisAvatar.png";
import arshadAvatar from "../assets/arshadAvatar.png";
import { MdPerson, MdEmojiEmotions } from "react-icons/md";
import { motion } from "framer-motion";
import useView from "../hooks/useView";

const TeamsContainer = () => {
  const [harisProfPic, setHarisProfPic] = useState(harisAvatar);
  const [arshadProfPic, setArshadProfPic] = useState(arshadAvatar);
  const {
    ref: headingRef,
    inView: heaadingInView,
    controls: headingControls,
  } = useView();
  const {
    ref: toggleRef,
    inView: toggleInView,
    controls: toggleControls,
  } = useView();
  const {
    ref: teamsref,
    inView: teamsInView,
    controls: teamsControls,
    variants: teamsvariants,
  } = useView();
  useEffect(() => {
    if (heaadingInView) {
      headingControls.start("visible");
    }
  }, [headingControls, heaadingInView]);
  useEffect(() => {
    if (toggleInView) {
      toggleControls.start("visible");
    }
  }, [toggleControls, toggleInView]);
  useEffect(() => {
    if (teamsInView) {
      teamsControls.start("visible");
    }
  }, [teamsControls, teamsInView]);

  const toggleHarisPic = () => {
    if (harisProfPic === harisAvatar) {
      setHarisProfPic(harisPic);
    } else {
      setHarisProfPic(harisAvatar);
    }
  };

  const toggleArshadpic = () => {
    if (arshadProfPic === arshadAvatar) {
      setArshadProfPic(arshadPic);
    } else {
      setArshadProfPic(arshadAvatar);
    }
  };

  const settingAvatars = () => {
    if (arshadProfPic !== arshadAvatar) {
      setArshadProfPic(arshadAvatar);
    }
    if (harisProfPic !== harisAvatar) {
      setHarisProfPic(harisAvatar);
    }
  };

  const settingRealImages = () => {
    if (arshadProfPic !== arshadPic) {
      setArshadProfPic(arshadPic);
    }
    if (harisProfPic !== harisPic) {
      setHarisProfPic(harisPic);
    }
  };
  return (
    <div className="py-4 md:py-8 bg-gradient-to-r from-blue-400 to blue-100 min-w-screen w-screen">
      <motion.h2
        ref={headingRef}
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={headingControls}
        transition={{ duration: "400ms", ease: "easeOut", type: "spring" }}
        className="bg-clip-text text-transparent bg-gradient-to-r from-blue-900
        to-sky-600 heading-font text-[1.5rem] md:text-[2rem] font-black
        white-shadow"
      >
        {" "}
        Meet The Team
      </motion.h2>
      <div className="w-full px-8 my-6 flex justify-end items-center">
        <motion.div
          ref={toggleRef}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          animate={toggleControls}
          transition={{ duration: "400ms", ease: "easeOut", type: "spring" }}
          className="flex rounded-lg bg-gray-200 p-2 shadow shadow-neutral-900/50 space-x-2 w-[max-content]"
        >
          <button
            onClick={settingAvatars}
            className={`transition-all duration-200 ease-in p-2 rounded-lg hover:bg-gray-300 hover:scale-95 ${
              harisProfPic === harisAvatar && arshadProfPic === arshadAvatar
                ? "bg-slate teams-toggle-shadow bg-gray-300"
                : ""
            } `}
          >
            <MdEmojiEmotions className="w-[1.7rem] h-[1.7rem] fill-slate-700" />
          </button>{" "}
          <button
            onClick={settingRealImages}
            className={`transition-all duration-200 ease-in p-2 rounded-lg hover:bg-gray-300 hover:scale-95 ${
              harisProfPic === harisPic && arshadProfPic === arshadPic
                ? "bg-slate teams-toggle-shadow bg-gray-300"
                : ""
            } `}
          >
            <MdPerson className="w-[1.7rem] h-[1.7rem] fill-slate-700" />
          </button>
        </motion.div>
      </div>
      <motion.div
        ref={teamsref}
        variants={teamsvariants}
        initial="hidden"
        animate={teamsControls}
        className="team-container flex flex-col md:flex-row items-center justify-center space-y-8 md:space-y-0  md:space-x-[6rem] md:space-x-[10rem]  mt-4 md:mt-8"
      >
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: "400ms", ease: "easeOut", type: "spring" }}
          className="bg-white rounded-lg drop-shadow-lg"
        >
          <img
            className="w-[16rem] h-[19rem] lg:w-[20rem] md:h-[25rem] object-cover rounded-t-lg drop-shaow"
            src={arshadProfPic}
            onMouseEnter={toggleArshadpic}
            onMouseLeave={toggleArshadpic}
            alt="Arshad Pic"
          ></img>
          <h3 className="my-4 heading-font font-black text-[1.3rem] text-slate-600 drop-shadow">
            Muhammad Arshad
          </h3>
          <p className="mb-4 text-gray-500">Managing Director</p>
        </motion.div>
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: "400ms", ease: "easeOut", type: "spring" }}
          className="bg-white rounded-lg drop-shadow-lg"
        >
          <img
            className="w-[16rem] h-[19rem] lg:w-[20rem] md:h-[25rem]  object-cover rounded-t-lg drop-shaow"
            src={harisProfPic}
            onMouseEnter={toggleHarisPic}
            onMouseLeave={toggleHarisPic}
            alt="Haris Pic"
          ></img>
          <h3 className="my-4 heading-font font-black text-[1.3rem] text-slate-600 drop-shadow">
            Muhammad Haris
          </h3>
          <p className="mb-4 text-gray-500">Manager</p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default TeamsContainer;
