import React from "react";
import "@/styles/agency.scss";
import AgencyBlock from "./_component/AgencyBlock";

export const metadata = {
  title: "About Brandedify | Your Trusted Digital Marketing Agency",
  description:
    "Discover Brandedify, a dynamic digital marketing agency specializing in creative strategies, data-driven solutions, and exceptional results for brands of all sizes.",
  openGraph: {
    title: "About Brandedify | Your Trusted Digital Marketing Agency",
    description:
      "Discover Brandedify, a dynamic digital marketing agency specializing in creative strategies, data-driven solutions, and exceptional results for brands of all sizes.",
    //images: "",
  },
};

const Agency = () => {
  return (
    <>
      <AgencyBlock />
    </>
  );
};

export default Agency;
