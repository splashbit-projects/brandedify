"use client";
import React from "react";
import { fadeInUp } from "@/utils/animations";
import { motion } from "framer-motion";
import Link from "next/link";

const GetStarted = ({ title, text, buttonText, link }) => {
  return (
    <section className="get-started">
      <div className="_container">
        <div className="get-started__body">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            dangerouslySetInnerHTML={{
              __html: title ? title : "Ready to Grow with Us?",
            }}
          />
          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            dangerouslySetInnerHTML={{
              __html: text
                ? text
                : "Let's partner to achieve your business goals. Reach out today, and let's create a personalized <br /> strategy that drives measurable results and lasting success.",
            }}
          />

          <Link href={link ? link : "/request-form"} className="main-button">
            <span>{buttonText ? buttonText : "Get started"}</span>
            <img src="/images/arrow.svg" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default GetStarted;
