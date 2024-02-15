import { useEffect } from "react";
import MainHomeSection from "../components/MainHomeSection";
import ConnectWorld from "../components/ConnectWorld";
import IntroSection from "../components/IntroSection";
import HomePageBlogsContainer from "../components/HomePageBlogsContainer";

const Home = () => {
  useEffect(() => {
    // Scroll to the top of the page
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <MainHomeSection />
      <ConnectWorld />
      <IntroSection />
      <HomePageBlogsContainer />
    </>
  );
};

export default Home;
