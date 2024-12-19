import React from "react";
import "@/styles/results.scss";
import caseStudies from "@/lib/caseStudies";
import testimonials from "@/lib/testimonials";
import GetStarted from "@/components/GetStarted";
import ResultsHero from "./_components/ResultsHero";
import ResultsLoop from "./_components/ResultsLoop";
import TestimonialsLoop from "./_components/TestimonialsLoop";

export const metadata = {
  title: "Brandedify Results | Case Studies and Success Stories",
  description:
    "See how Brandedify has helped businesses across industries achieve measurable growth through tailored digital marketing strategies.",
  openGraph: {
    title: "Brandedify Results | Case Studies and Success Stories",
    description:
      "See how Brandedify has helped businesses across industries achieve measurable growth through tailored digital marketing strategies.",
    //images: "",
  },
};

const Results = () => {
  return (
    <>
      <ResultsHero />
      <ResultsLoop resultsArray={caseStudies} />
      <TestimonialsLoop testimonialsArray={testimonials} />
      <GetStarted
        title={"Let's Achieve Results Together"}
        text="Ready to transform your business? Explore how we can help you achieve measurable success <br>through our tailored solutions."
        buttonText={"Contact Us Today"}
        link="/contact"
      />
    </>
  );
};

export default Results;
