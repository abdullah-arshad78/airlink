import React from "react";
import ContactForm from "./ContactForm";

const ContactFormContainer = () => {
  return (
    <div
      id="contact-form-section"
      className="bg-gray-200 py-[2rem] min-w-screen w-screen flex items-center justify-center"
    >
      <ContactForm />
    </div>
  );
};

export default ContactFormContainer;
