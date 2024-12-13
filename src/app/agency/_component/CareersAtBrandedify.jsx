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
        <motion.h3
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          Why Work With Us?
        </motion.h3>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="row col"
        >
          <div className="item">
            <div>
              <span className="title">01</span>
              <p>Be part of a forward-thinking agency focused on innovation.</p>
            </div>
          </div>
          <div className="item">
            <div>
              <span className="title">02</span>
              <p>
                Collaborate with industry-leading experts and exciting brands.
              </p>
            </div>
          </div>
          <div className="item">
            <div>
              <span className="title">03</span>
              <p>
                Enjoy opportunities for professional development and personal
                growth.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default CareersAtBrandedify;
