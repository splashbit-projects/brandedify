import React from "react";
import "@/styles/request-form.scss";
import RequestFormBlock from "./_components/RequestFormBlock";


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
      <RequestFormBlock />
    </>
  );
};

export default Contact;
