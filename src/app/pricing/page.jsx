import React from "react";
import "@/styles/pricing.scss";
import { pricing } from "@/lib/pricing";
import GetStarted from "@/components/GetStarted";
import PricingHero from "./_components/PricingHero";
import PricingLoop from "./_components/PricingLoop";

export const metadata = {
  title: "Brandedify Pricing | Flexible Digital Marketing Plans",
  description:
    "Find your business's perfect digital marketing plan with Brandedify's transparent and flexible pricing options.",
  openGraph: {
    title: "Brandedify Pricing | Flexible Digital Marketing Plans",
    description:
      "Find your business's perfect digital marketing plan with Brandedify's transparent and flexible pricing options.",
    images: "https://brandedify.com/images/meta.png",
  },
};

const Pricing = () => {
  return (
    <>
      <PricingHero />
      <PricingLoop pricingArray={pricing} />
      <GetStarted
        title={"Need Something Unique?"}
        text="We understand that every business is different. If you have specific needs or goals, let us <br>create a custom marketing package tailored to your requirements."
        buttonText={"Request a Custom Quote"}
        link="/request-form"
      />
    </>
  );
};

export default Pricing;
