"use client";
import React, { useState } from "react";
import { fadeInUp } from "@/utils/animations";
import { motion } from "framer-motion";

const CareersAtBrandedify = () => {
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
          <span>Maybe we are looking for you</span>
        </div>
        <h2>Careers at Brandedify</h2>
      </motion.div>
      <div className="content">
        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          Brandedify is more than an agency — it's a place where creativity
          meets opportunity. We're looking for talented individuals who want to
          make an impact in the ever-evolving world of digital marketing.
          <br />
          <br />
          Whether you're an experienced marketer or someone eager to learn, we
          offer an environment where growth and collaboration thrive.
        </motion.p>
      </div>
    </>
  );
};

export default CareersAtBrandedify;
