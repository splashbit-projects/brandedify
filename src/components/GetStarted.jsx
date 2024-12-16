"use client";
import React from "react";
import { fadeInUp } from "@/utils/animations";
import { motion } from "framer-motion";
import Link from "next/link";

const GetStarted = () => {
  return (
    <section className="get-started">
      <div className="_container">
        <div className="get-started__body">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            Ready to Grow with Us?
          </motion.h2>
          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            Let's partner to achieve your business goals. Reach out today, and
            let's create a personalized <br />
            strategy that drives measurable results and lasting success.
          </motion.p>
          <Link href="/contact" className="main-button">
            <span>Get started</span>
            <img src="/images/arrow.svg" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default GetStarted;
