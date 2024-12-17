import React from "react";
import "@/styles/solutions.scss";
import solutions from "@/lib/solutions";
import GetStarted from "@/components/GetStarted";
import SolutionsHero from "./_components/SolutionsHero";
import SolutionsLoop from "./_components/SolutionsLoop";

export const metadata = {
  title: "Brandedify Solutions | Tailored Strategies for Business Growth",
  description:
    "Discover how Brandedify’s solutions in Lead Generation, Brand Awareness, Customer Retention, and Sales Enablement help businesses achieve success.",
  openGraph: {
    title: "Brandedify Solutions | Tailored Strategies for Business Growth",
    description:
      "Discover how Brandedify’s solutions in Lead Generation, Brand Awareness, Customer Retention, and Sales Enablement help businesses achieve success.",
    //images: "",
  },
};

const Solutions = () => {
  return (
    <>
      <SolutionsHero />
      <SolutionsLoop solutionsArray={solutions} />
      <GetStarted
        title={"Take the Next Step"}
        text="Ready to drive results? Get in touch with us today to learn more about how our solutions can <br>transform your business."
        buttonText={"Book a Free Consultation"}
        link="/contact"
      />
    </>
  );
};

export default Solutions;
