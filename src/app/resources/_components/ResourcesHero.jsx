"use client";
import React from "react";
import { fadeInUp } from "@/utils/animations";
import { motion } from "framer-motion";

const ResourcesHero = () => {
  return (
    <section className="resources-hero">
      <div className="_container">
        <div className="resources-hero__body">
          <motion.h1
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            Insights, Tips, and Trends
          </motion.h1>
        </div>
      </div>
    </section>
  );
};

export default ResourcesHero;
