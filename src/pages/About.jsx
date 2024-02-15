import { useEffect } from "react";
import AboutUsMain from "../components/AboutUsMain";
import Services from "../components/Services";
import TeamsContainer from "../components/TeamsContainer";

const About = () => {
  useEffect(() => {
    // Scroll to the top of the page
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <AboutUsMain />
      <Services />
      <TeamsContainer />
    </>
  );
};

export default About;
