"use client";
import React from "react";
import { fadeInUp } from "@/utils/animations";
import { motion } from "framer-motion";

const ContactHero = () => {
  return (
    <section className="contact-hero">
      <div className="_container">
        <div className="contact-hero__body">
          <motion.h1
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            Contact Us
          </motion.h1>
          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            We're here to help! Whether you have questions, need more
            information, or want to discuss <br />
            your project, feel free to reach out through any of the channels
            below.
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default ContactHero;
