"use client";
import React from "react";
import { fadeInUp } from "@/utils/animations";
import { motion } from "framer-motion";

const SolutionsHero = () => {
  return (
    <section className="solutions-hero">
      <div className="_container">
        <div className="solutions-hero__body">
          <motion.h1
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            Empower Your Business with <br />
            Targeted Approaches
          </motion.h1>
        </div>
      </div>
    </section>
  );
};

export default SolutionsHero;
