"use client";
import React from "react";
import { useState } from "react";
import { fadeInUp } from "@/utils/animations";
import { motion } from "framer-motion";

const FaqLoop = ({ title, faqs }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };
  return (
    <section className="faq-loop">
      <div className="_container">
        <div className="faq-loop__body">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="section-title"
          >
            <div className="label">
              <img src="/images/lightning.svg" />
              <span>{title}</span>
            </div>
          </motion.div>

          <div className="faq-accordion">
            {faqs.map((faq, index) => (
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                key={index}
                className={`faq-item ${activeIndex === index ? "opened" : ""}`}
                onClick={() => toggleAccordion(index)}
              >
                <details className="inner" name={title}>
                  <summary className="top">
                    <span>{faq.question}</span>
                    <img src="/images/faq/arrow.svg" />
                  </summary>

                  <div
                    className="faq-content"
                    dangerouslySetInnerHTML={{ __html: faq.answer }}
                  />
                </details>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FaqLoop;
