import { useEffect } from "react";
import ContactMainSection from "../components/ContactMainSection";
import ContactFormContainer from "../components/ContactFormContainer";

const Contact = () => {
  useEffect(() => {
    // Scroll to the top of the page
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <ContactMainSection />
      <ContactFormContainer />
    </>
  );
};

export default Contact;
