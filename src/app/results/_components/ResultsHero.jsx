"use client";
import React from "react";
import { fadeInUp } from "@/utils/animations";
import { motion } from "framer-motion";

const ResultsHero = () => {
  return (
    <section className="results-hero">
      <div className="_container">
        <div className="results-hero__body">
          <motion.h1
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            Driving Success with Proven Impact
          </motion.h1>
        </div>
      </div>
    </section>
  );
};

export default ResultsHero;
