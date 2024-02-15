import { useState, useEffect } from "react";

const useWindowWidth = () => {
  // State to store the window width
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  // Function to update the width
  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  // Set up the event listener
  useEffect(() => {
    window.addEventListener("resize", handleResize);

    // Clean up the event listener
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []); // Empty array ensures this runs only on mount and unmount
  return windowWidth;
};

export default useWindowWidth;
