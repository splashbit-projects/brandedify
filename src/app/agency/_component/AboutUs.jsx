"use client";
import React, { useState } from "react";
import { fadeInUp } from "@/utils/animations";
import { motion } from "framer-motion";

const AboutUs = () => {
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
          <span>About Us</span>
        </div>
        <h2>Who We Are</h2>
      </motion.div>
      <div className="content">
        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          At Brandedify, we are a young and innovative digital marketing agency
          with a mission to create impactful and measurable results for
          businesses of all sizes. <br />
          <br />
          While our name is new, our team is built on a foundation of
          experienced professionals who specialize in crafting tailored
          strategies that help brands stand out, grow, and succeed in a
          competitive marketplace.
        </motion.p>
      </div>
    </>
  );
};

export default AboutUs;
