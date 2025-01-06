"use client";
import React from "react";
import { fadeInUp } from "@/utils/animations";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

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

          <div className="row">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="col-01"
            ></motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="col-02"
            >
              <div className="professionals">
                <div className="wrap">
                  <div className="item">
                    <div>
                      <span>+10 Professionals</span>
                    </div>
                  </div>
                </div>
                <div className="wrap">
                  <div className="item">
                    <div>
                      <Image
                        alt="avatar1"
                        src="/images/home/st_avatar1.png"
                        width={50}
                        height={50}
                      />
                      <span>Marketing Automation Expert</span>
                    </div>
                  </div>
                </div>
                <div className="wrap">
                  <div className="item">
                    <div>
                      <Image
                        alt="avatar1"
                        src="/images/home/st_avatar2.png"
                        width={50}
                        height={50}
                      />
                      <span>Performance Marketing Manager</span>
                    </div>
                  </div>
                </div>
                <div className="wrap">
                  <div className="item">
                    <div>
                      {" "}
                      <Image
                        alt="avatar1"
                        src="/images/home/st_avatar3.png"
                        width={50}
                        height={50}
                      />
                      <span>Data Analyst</span>
                    </div>
                  </div>
                </div>
                <div className="wrap">
                  <div className="item">
                    <div>
                      <Image
                        alt="avatar1"
                        src="/images/home/st_avatar4.png"
                        width={50}
                        height={50}
                      />
                      <span>Creative Director</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="percent">
                <p>
                  Up to <span>150%</span>
                  <br />
                  increase in organic traffic
                </p>
              </div>
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="col-03"
            >
              <div className="image"></div>
              <div className="percent">
                <p>
                  Up to <span>40%</span>
                  <br />
                  efficiency improvements
                </p>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="buttons"
          >
            <Link href="/results">
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
