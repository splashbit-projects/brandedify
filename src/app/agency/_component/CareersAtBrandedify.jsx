"use client";
import React, { useState } from "react";
import { fadeInUp } from "@/utils/animations";
import { motion } from "framer-motion";
import Link from "next/link";
import JobButton from "@/components/JobButton";

const CareersAtBrandedify = () => {
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
          <span>Maybe we are looking for you</span>
        </div>
        <h2>Careers at Brandedify</h2>
      </motion.div>
      <div className="content">
        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          Brandedify is more than an agency — it's a place where creativity
          meets opportunity. We're looking for talented individuals who want to
          make an impact in the ever-evolving world of digital marketing.
          <br />
          <br />
          Whether you're an experienced marketer or someone eager to learn, we
          offer an environment where growth and collaboration thrive.
        </motion.p>
        <motion.h3
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          Why Work With Us?
        </motion.h3>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="row col"
        >
          <div className="item">
            <div>
              <span className="title">01</span>
              <p>Be part of a forward-thinking agency focused on innovation.</p>
            </div>
          </div>
          <div className="item">
            <div>
              <span className="title">02</span>
              <p>
                Collaborate with industry-leading experts and exciting brands.
              </p>
            </div>
          </div>
          <div className="item">
            <div>
              <span className="title">03</span>
              <p>
                Enjoy opportunities for professional development and personal
                growth.
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
          Open Positions
        </motion.h2>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="position"
        >
          <div className="left">
            <div
              style={{ backgroundImage: "url(/images/agency/job1.svg" }}
            ></div>
            <p>Social Media Manager</p>
          </div>
          <div className="right">
            <div>
              <h3>Responsibilities</h3>
              <p>
                Develop and implement comprehensive marketing strategies for
                clients.
              </p>
              <p>
                Analyze campaign performance and provide actionable insights.
              </p>
              <p>
                Collaborate with teams to deliver seamless and effective
                campaigns.
              </p>
            </div>

            <div>
              <h3>Requirements</h3>
              <p>Proven experience in digital marketing</p>
              <p>
                Strong analytical skills and creative problem-solving ability.
              </p>
              <p>Excellent project management and communication skills.</p>
            </div>
            <JobButton position={"Social Media Manager"} />
          </div>
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="position"
        >
          <div className="left">
            <div
              style={{ backgroundImage: "url(/images/agency/job2.svg" }}
            ></div>
            <p>Content Marketing Specialist</p>
          </div>
          <div className="right">
            <div>
              <h3>Responsibilities</h3>
              <p>
                Create compelling, high-quality content tailored to target
                audiences.
              </p>
              <p>Develop and manage content calendars for various channels.</p>
              <p>Optimize content for SEO and analyze performance metrics</p>
            </div>

            <div>
              <h3>Requirements</h3>
              <p>Experience in content creation and copywriting.</p>
              <p>Solid understanding of SEO and digital marketing trends.</p>
              <p>Exceptional writing and organizational skills.</p>
            </div>
            <JobButton position={"Content Marketing Specialist"} />
          </div>
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="position"
        >
          <div className="left">
            <div
              style={{ backgroundImage: "url(/images/agency/job3.svg" }}
            ></div>
            <p>Paid Media Specialist</p>
          </div>
          <div className="right">
            <div>
              <h3>Responsibilities</h3>
              <p>
                Manage and optimize paid advertising campaigns across platforms
              </p>
              <p>Conduct keyword research and audience targeting.</p>
              <p>
                Monitor campaign performance and make data-driven adjustments.
              </p>
            </div>

            <div>
              <h3>Requirements</h3>
              <p>
                Hands-on experience with paid media platforms (Google Ads,
                Facebook Ads)
              </p>
              <p>Strong analytical skills and attention to detail.</p>
              <p>Ability to handle multiple campaigns simultaneously</p>
            </div>
            <JobButton position={"Paid Media Specialist"} />
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default CareersAtBrandedify;
