"use client";
import React, { useState } from "react";
import { fadeInUp } from "@/utils/animations";
import { motion } from "framer-motion";

const CoreAreas = () => {
  return (
    <>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
        className="section-title"
      >
        <div className="label">
          <img src="/images/lightning.svg" />
          <span>Our strengths</span>
        </div>
        <h2>Core Areas of Expertise</h2>
      </motion.div>
      <div className="content">
        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          At Brandedify, we specialize in creating seamless and effective
          strategies that address every stage of the customer journey — from
          demand generation to long-term retention.
        </motion.p>
      </div>
    </>
  );
};

export default CoreAreas;
