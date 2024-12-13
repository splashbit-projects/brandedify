"use client";
import React, { useState } from "react";
import { fadeInUp } from "@/utils/animations";
import { motion } from "framer-motion";
import Image from "next/image";

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
        <Image
          src="/images/agency/about1.png"
          width={590}
          height={296}
          alt="about1"
        />
        <motion.h3
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          Our Mission
        </motion.h3>
        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          To empower businesses by turning their vision into a reality through
          data-driven strategies and cutting-edge marketing solutions.
        </motion.p>
        <motion.h3
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          Our Values
        </motion.h3>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="row"
        >
          <div className="item">
            <div>
              <span className="title">
                <img src="/images/agency/val1.svg" />
                Creativity
              </span>
              <p>Driving unique approaches that make brands unforgettable.</p>
            </div>
          </div>
          <div className="item">
            <div>
              <span className="title">
                <img src="/images/agency/val2.svg" />
                Collaboration
              </span>
              <p>Partnering with businesses to achieve shared goals.</p>
            </div>
          </div>
          <div className="item">
            <div>
              <span className="title">
                <img src="/images/agency/val3.svg" />
                Excellence
              </span>
              <p>
                Delivering high-quality, result-oriented solutions every time.
              </p>
            </div>
          </div>
        </motion.div>
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          Why Choose Brandedify?
        </motion.h2>
        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          We don't just market your brand — we amplify it. Our expertise and
          forward-thinking methodologies ensure every campaign delivers results
          and leaves a lasting impact on your target audience.
        </motion.p>
        <Image
          src="/images/agency/about2.png"
          width={590}
          height={170}
          alt="about1"
        />
      </div>
    </>
  );
};

export default AboutUs;
