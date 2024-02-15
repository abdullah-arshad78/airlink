import { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

import airLinkLogo from "../assets/logo.png";
import useWindowWidth from "../hooks/useWindowWidth";
import { RxHamburgerMenu } from "react-icons/rx";
import MobileNavigation from "../components/MobileNavigation";
const navLinkClasses = ({ isActive }) => {
  let classes =
    "drop-shadow-sm text-slate-600 white-shadow flex items-center  justify-center w-full h-full p-2 hover:bg-slate-300 hover:rounded-lg hover:drop-shadow transition-all duration-150 ease-in ";
  return isActive
    ? `${classes} text-blue-700 font-black border-b-2 border-blue-600 text-blue-600 hover:rounded-none hover:rounded-t-lg`
    : classes;
};
// bg-blue-50
const MainNavigation = () => {
  const windowWidth = useWindowWidth();
  const isMobile = windowWidth <= 640;
  // State for navbar background color
  const [navBackground, setNavBackground] = useState("transparent");
  const [scrolled, setScrolled] = useState(false);
  const [showMobNavigation, setShowMobNavigation] = useState(false);

  // Function to update the background based on scroll position
  const handleScroll = () => {
    const currentScrollY = window.scrollY;
    if (currentScrollY > 50) {
      setNavBackground("bg-gradient-to-r from-blue-400 to-blue-50 shadow-lg"); // Or any color you like
      setScrolled(true);
    } else {
      setNavBackground("transparent");
      setScrolled(false);
    }
  };

  // Set up the event listener
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const closeMobNavHandler = () => setShowMobNavigation(false);

  let navContent = (
    <nav
      className={`flex p-2 md:py-4 md:px-8 items-center  justify-between w-screen overflow-hidden heading-font fixed z-10 ${navBackground}`}
    >
      <Link to="/" className="w-[10rem]">
        <motion.img
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ type: "spring", duration: "300ms" }}
          className="w-full drop-shadow"
          src={airLinkLogo}
          alt="airlink-logo"
        ></motion.img>
      </Link>
      {isMobile && (
        <div
          onClick={() => setShowMobNavigation(true)}
          className="cursor-pointer"
        >
          <RxHamburgerMenu className="w-[2rem] h-[2rem] mr-4" />
        </div>
      )}

      {!isMobile && (
        <motion.ul
          variants={{
            hidden: { opacity: 1 },
            visible: { transition: { staggerChildren: 0.2 } },
          }}
          initial="hidden"
          animate="visible"
          className="flex  font-bold items-center justify-center space-x-4 md:space-x-6 "
        >
          <motion.li
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <NavLink className={navLinkClasses} to="/about">
              About
            </NavLink>
          </motion.li>
          <motion.li
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <NavLink className={navLinkClasses} to="/book-a-flight">
              Book A Flight
            </NavLink>
          </motion.li>
          <motion.li
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <NavLink className={navLinkClasses} to="/blogs">
              Blogs
            </NavLink>
          </motion.li>
        </motion.ul>
      )}
    </nav>
  );
  if (isMobile && scrolled && !showMobNavigation) {
    navContent = (
      <div
        className="fixed top-4 p-2 z-20 shadow-lg cursor-pointer right-4 rounded-full bg-gray-50 flex items-center justify-center mr-4"
        onClick={() => setShowMobNavigation(true)}
      >
        {" "}
        <RxHamburgerMenu className="w-[2rem] h-[2rem] " />
      </div>
    );
  }
  if (isMobile && scrolled && showMobNavigation) {
    navContent = "";
  }

  return (
    <>
      {navContent}
      <AnimatePresence>
        {showMobNavigation && isMobile && (
          <MobileNavigation onClose={closeMobNavHandler} />
        )}
      </AnimatePresence>
    </>
  );
};

export default MainNavigation;
