"use client";
import React from "react";
import { fadeInUp } from "@/utils/animations";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const HomeSolutions = () => {
  return (
    <section className="home-solutions">
      <div className="_container">
        <div className="home-solutions__body">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="section-title"
          >
            <div className="label">
              <img src="/images/lightning.svg" />
              <span>Solve your digital challenges</span>
            </div>
            <h2>Solutions That Drive Results</h2>
            <p>
              Overcome your biggest digital marketing challenges with tailored
              strategies that deliver <br />
              measurable success. From increasing website traffic to maximizing
              customer engagement, <br />
              Brandedify services are designed to elevate your business.
            </p>
          </motion.div>
          <div className="row">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="item"
            >
              <h3>SEO Optimization</h3>
              <Image
                src={"/images/home/solution1.png"}
                height={189}
                width={347}
                alt="solution1"
              />
              <p>
                Rank higher on search engines and increase organic traffic by up
                to 150%.
              </p>
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="item"
            >
              <h3>Social Media Marketing</h3>
              <Image
                src={"/images/home/solution2.png"}
                height={189}
                width={347}
                alt="solution2"
              />
              <p>
                Engage audiences effectively, boosting brand awareness by 2x on
                platforms that matter most.
              </p>
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="item"
            >
              <h3>Content Marketing</h3>
              <Image
                src={"/images/home/solution3.png"}
                height={189}
                width={347}
                alt="solution3"
              />
              <p>
                Build trust and authority with high-quality content that
                increases lead generation by up to 3x.
              </p>
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="item"
            >
              <h3>PPC Advertising</h3>
              <Image
                src={"/images/home/solution4.png"}
                height={189}
                width={347}
                alt="solution4"
              />
              <p>
                Drive instant leads with conversion-focused campaigns that lower
                acquisition costs by up to 25%.
              </p>
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="item"
            >
              <h3>Email Marketing</h3>
              <Image
                src={"/images/home/solution5.png"}
                height={189}
                width={347}
                alt="solution5"
              />
              <p>
                Nurture lasting relationships through targeted campaigns with
                average open rates exceeding 30%.
              </p>
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="item"
            >
              <h3>Marketing Automation</h3>
              <Image
                src={"/images/home/solution6.png"}
                height={189}
                width={347}
                alt="solution6"
              />
              <p>
                Save time and scale seamlessly, achieving up to 40% efficiency
                improvements.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeSolutions;
