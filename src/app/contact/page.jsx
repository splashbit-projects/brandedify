import React from "react";
import "@/styles/contact.scss";
import GetStarted from "@/components/GetStarted";
import ContactHero from "./_components/ContactHero";
import ContactRow from "./_components/ContactRow";

export const metadata = {
  title: "Contact Brandedify | Let's Grow Your Brand",
  description:
    "Contact Brandedify for personalized digital marketing solutions. You can reach us via email, phone, or our contact form.",
  openGraph: {
    title: "Contact Brandedify | Let's Grow Your Brand",
    description:
      "Contact Brandedify for personalized digital marketing solutions. You can reach us via email, phone, or our contact form.",
    images: "https://brandedify.com/images/meta.png",
  },
};

const FAQ = () => {
  return (
    <>
      <ContactHero />
      <ContactRow />
      <GetStarted
        title={"Ready to Grow with Us?"}
        text="Let's partner to achieve your business goals. Reach out today, and let's create a personalized <br>strategy that drives measurable results and lasting success."
        buttonText={"Get started"}
        link="/request-form"
      />
    </>
  );
};

export default FAQ;
