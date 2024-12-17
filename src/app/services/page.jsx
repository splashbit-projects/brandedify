import React from "react";
import "@/styles/services.scss";
import services from "@/lib/services";
import ServicesHero from "./_components/ServicesHero";
import GetStarted from "@/components/GetStarted";
import ServicesLoop from "./_components/ServicesLoop";

export const metadata = {
  title: "Brandedify Services | Comprehensive Digital Marketing Solutions",
  description:
    "Explore Brandedify’s range of services, including SEO, PPC, Social Media Marketing, Content Marketing, Email Marketing, and Marketing Automation.",
  openGraph: {
    title: "Brandedify Services | Comprehensive Digital Marketing Solutions",
    description:
      "Explore Brandedify’s range of services, including SEO, PPC, Social Media Marketing, Content Marketing, Email Marketing, and Marketing Automation.",
    //images: "",
  },
};

const Services = () => {
  return (
    <>
      <ServicesHero />
      <ServicesLoop serviceArray={services} />
      <GetStarted
        title={"Find the Right Plan for Your Business"}
        text="Our services are designed to fit businesses of all sizes, from startups to enterprises. Explore <br>our flexible pricing options and find the perfect package tailored to your goals."
        buttonText={"View Pricing Plans"}
        link="#"
      />
    </>
  );
};

export default Services;
