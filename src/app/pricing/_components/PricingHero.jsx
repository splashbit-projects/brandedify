"use client";
import React from "react";
import { fadeInUp } from "@/utils/animations";
import { motion } from "framer-motion";

const PricingHero = () => {
  return (
    <section className="pricing-hero">
      <div className="_container">
        <div className="pricing-hero__body">
          <motion.h1
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            Transparent Solutions, Tailored for <br />
            Your Success
          </motion.h1>
          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            At Brandedify, we believe in delivering value-driven marketing
            solutions tailored to businesses <br />
            of all sizes. Whether you're a startup, a growing business, or an
            established enterprise, our <br />
            flexible pricing ensures you get the services you need without
            compromise.
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default PricingHero;
