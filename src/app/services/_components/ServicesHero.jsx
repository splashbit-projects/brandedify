"use client";
import React from "react";
import { fadeInUp } from "@/utils/animations";
import { motion } from "framer-motion";

const ServicesHero = () => {
  return (
    <section className="services-hero">
      <div className="_container">
        <div className="services-hero__body">
          <motion.h1
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            Amplify Your Success with <br />
            Brandedify
          </motion.h1>
        </div>
      </div>
    </section>
  );
};

export default ServicesHero;
