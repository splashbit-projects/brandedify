"use client";
import React from "react";
import { fadeInUp } from "@/utils/animations";
import { motion } from "framer-motion";
import Link from "next/link";

const HomePartners = () => {
  return (
    <section className="home-partners">
      <div className="_container">
        <div className="home-partners__body">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="section-title"
          >
            <div className="label">
              <img src="/images/lightning.svg" />
              <span>We know how to solve your problems</span>
            </div>
            <h2>
              Your Trusted Growth Partners in the <br />
              Digital Era
            </h2>
            <p>
              Specializing in B2B strategies, we empower businesses to overcome
              digital marketing <br />
              challenges and achieve measurable, impactful results tailored to
              their goals.
            </p>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="buttons"
          >
            <Link href="#">
              <span>Learn More About Us</span>
              <img src="/images/arrow-purple.svg" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HomePartners;
