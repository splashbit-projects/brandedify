import React from "react";
import "@/styles/faq.scss";
import GetStarted from "@/components/GetStarted";
import FaqHero from "./_components/FaqHero";
import FaqLoop from "./_components/FaqLoop";
import { commonQuestions, howItWorks } from "@/lib/faq";

export const metadata = {
  title: "Brandedify FAQ | Your Questions Answered",
  description:
    "Get answers to common questions about Brandedify's services, approach, and strategies. Explore how we can help your business grow.",
  openGraph: {
    title: "Brandedify FAQ | Your Questions Answered",
    description:
      "Get answers to common questions about Brandedify's services, approach, and strategies. Explore how we can help your business grow.",
    images: "https://brandedify.com/images/meta.png",
  },
};

const FAQ = () => {
  return (
    <>
      <FaqHero />
      <FaqLoop title={"Common Questions"} faqs={commonQuestions} />
      <FaqLoop title={"How It Works"} faqs={howItWorks} />
      <GetStarted
        title={"Still Have Questions?"}
        text="We're here to help! If you didn't find the answer you were looking for, feel free to reach <br>out to us."
        buttonText={"Get in Touch Today"}
        link="/request-form"
      />
    </>
  );
};

export default FAQ;
