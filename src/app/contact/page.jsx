import React from "react";
import "@/styles/contact.scss";
import ContactBlock from "./_components/ContactBlock";


export const metadata = {
    title: "Contact Brandedify | Let's Grow Your Brand",
    description:
      "Contact Brandedify for personalized digital marketing solutions. You can reach us via email, phone, or our contact form.",
    openGraph: {
      title: "Contact Brandedify | Let's Grow Your Brand",
      description:
        "Contact Brandedify for personalized digital marketing solutions. You can reach us via email, phone, or our contact form.",
      //images: "",
    },
  };
  

const Contact = () => {
  return (
    <>
      <ContactBlock />
    </>
  );
};

export default Contact;
