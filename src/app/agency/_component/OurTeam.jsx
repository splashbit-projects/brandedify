"use client";
import React, { useState } from "react";
import { fadeInUp } from "@/utils/animations";
import { motion } from "framer-motion";

const OurTeam = () => {
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
          <span>A team of professionals</span>
        </div>
        <h2>Our Team</h2>
      </motion.div>
      <div className="content">
        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          Behind our success is a dedicated team of strategists, content
          creators, paid media specialists, and analysts who bring passion,
          creativity, and precision to every project. <br />
          <br />
          We are problem solvers and storytellers, working together to create
          powerful marketing strategies that resonate with your audience.
        </motion.p>
      </div>
    </>
  );
};

export default OurTeam;
