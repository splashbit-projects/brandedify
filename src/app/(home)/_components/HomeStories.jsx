"use client";
import React from "react";
import { fadeInUp } from "@/utils/animations";
import { motion } from "framer-motion";
import Link from "next/link";

const HomeStories = () => {
  return (
    <section className="home-stories">
      <div className="_container">
        <div className="home-stories__body">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="section-title"
          >
            <div className="label">
              <img src="/images/lightning.svg" />
              <span>Overcome your biggest digital</span>
            </div>
            <h2>Success Stories That Inspire</h2>
            <p>
              Discover how we've helped businesses achieve remarkable growth
              through tailored strategies <br />
              and data-driven marketing. From boosting conversions to building
              lasting customer <br />
              relationships, our results speak for themselves.
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
              <span>How We Deliver Results</span>
              <img src="/images/arrow-purple.svg" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HomeStories;
