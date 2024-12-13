"use client";
import React, { useState } from "react";
import { fadeInUp } from "@/utils/animations";
import { motion } from "framer-motion";
import Image from "next/image";

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
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="row col"
        >
          <div className="item">
            <div>
              <span className="title">Demand Generation</span>
              <p>
                Capturing attention and driving engagement with the right
                audience.
              </p>
            </div>
          </div>
          <div className="item">
            <div>
              <span className="title">Customer Acquisition</span>
              <p>
                Turning prospects into loyal customers through targeted and
                effective marketing funnels.
              </p>
            </div>
          </div>
          <div className="item">
            <div>
              <span className="title">Retention & Referral</span>
              <p>
                Strengthening customer relationships and leveraging referrals to
                build sustainable growth.
              </p>
            </div>
          </div>
        </motion.div>
        <Image
          src="/images/agency/core1.png"
          width={590}
          height={430}
          alt="core1"
        />
        <motion.h3
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          Additional Expertise
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
                <img src="/images/agency/plus.svg" />
              </span>
              <p>Personalizing campaigns to enhance audience engagement.</p>
            </div>
          </div>
          <div className="item">
            <div>
              <span className="title">
                <img src="/images/agency/plus.svg" />
              </span>
              <p>Optimizing multi-channel strategies for maximum impact.</p>
            </div>
          </div>
          <div className="item">
            <div>
              <span className="title">
                <img src="/images/agency/plus.svg" />
              </span>
              <p>
                Implementing the latest tools to automate and scale campaigns.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default CoreAreas;
