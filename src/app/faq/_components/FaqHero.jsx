"use client";
import React from "react";
import { fadeInUp } from "@/utils/animations";
import { motion } from "framer-motion";

const FaqHero = () => {
  return (
    <section className="faq-hero">
      <div className="_container">
        <div className="faq-hero__body">
          <motion.h1
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            Your Questions, Answered
          </motion.h1>
        </div>
      </div>
    </section>
  );
};

export default FaqHero;
