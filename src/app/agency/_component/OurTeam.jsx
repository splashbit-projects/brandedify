"use client";
import React, { useState } from "react";
import { fadeInUp } from "@/utils/animations";
import { motion } from "framer-motion";
import Image from "next/image";

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
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <Image
            src="/images/agency/team.png"
            width={590}
            height={296}
            alt="core1"
          />
        </motion.div>
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          What Drives Brandedify
        </motion.h2>
        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          We don’t just market your brand — we amplify it. Our expertise and
          forward-thinking methodologies ensure every campaign delivers results
          and leaves a lasting impact on your target audience.
        </motion.p>
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
              <p>
                A shared belief in the power of branding to transform
                businesses.
              </p>
            </div>
          </div>
          <div className="item">
            <div>
              <span className="title">02</span>
              <p>Diverse expertise across multiple industries and platforms.</p>
            </div>
          </div>
          <div className="item">
            <div>
              <span className="title">03</span>
              <p>
                A collaborative culture that thrives on innovation and results.
              </p>
            </div>
          </div>
        </motion.div>
        <motion.h3
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          Our Methodology
        </motion.h3>
        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          We approach each project with a blend of creativity and data, ensuring
          that every campaign aligns perfectly with your goals.
          <br /> <br />
          Our step-by-step process guarantees that we consistently deliver
          exceptional outcomes for our clients.
        </motion.p>
        <motion.h3
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          Our Process
        </motion.h3>
        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          We don’t just market your brand — we amplify it. Our expertise and
          forward-thinking methodologies ensure every campaign delivers results
          and leaves a lasting impact on your target audience.
        </motion.p>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <Image
            src="/images/agency/team1.png"
            width={590}
            height={430}
            alt="core1"
          />
        </motion.div>
      </div>
    </>
  );
};

export default OurTeam;
