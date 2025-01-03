"use client";
import React, { useState } from "react";
import { fadeInUp } from "@/utils/animations";
import { motion } from "framer-motion";
import Link from "next/link";
import Plus from "@/icons/Plus";
import RequestForm from "./RequestForm";

const PricingLoop = ({ pricingArray }) => {
  const [selectedPackage, setSelectedPackage] = useState("");

  const handlePackage = (value) => {
    setSelectedPackage(value);
    document
      .getElementById("request-form")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="pricing-loop">
      <div className="_container">
        <div className="pricing-loop__body">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="col-01"
          >
            <h2>
              Download Our Full <br />
              Pricing Guide
            </h2>
            <p>
              Want to explore all our services and custom options? <br />
              Download our comprehensive price list for detailed insights <br />
              into what we offer and how we can help your business grow.
            </p>
            <Link href="/price_list.pdf">
              <span>Download Full Price List</span>
              <img src="/images/pricing/download.svg" />
            </Link>
            <img src="/images/pricing/text.svg" />
          </motion.div>
          <div className="col-02">
            {pricingArray.map((pricing, index) => (
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                className="pricing"
                key={index}
              >
                <div className="inner">
                  <div className="section-title">
                    <div className="label">
                      <img src="/images/lightning.svg" />
                      <span>{pricing.tagline}</span>
                    </div>
                    <h2 dangerouslySetInnerHTML={{ __html: pricing.title }} />
                  </div>
                  <div className="content">
                    <p>{pricing.description}</p>
                    <h3>What's included</h3>
                    <ul>
                      {pricing.includes.map((row, index) => (
                        <li key={index}>
                          <Plus />
                          <span>{row}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="bottom">
                    <div
                      className="price"
                      dangerouslySetInnerHTML={{ __html: pricing.price }}
                    />
                    <button onClick={() => handlePackage(pricing.title)}>
                      {pricing.orderText}
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="pricing"
              id="request-form"
            >
              <div className="inner">
                <div className="section-title">
                  <div className="label">
                    <img src="/images/lightning.svg" />
                    <span>Package Request Form</span>
                  </div>
                </div>
                <RequestForm packageValue={selectedPackage} />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingLoop;
