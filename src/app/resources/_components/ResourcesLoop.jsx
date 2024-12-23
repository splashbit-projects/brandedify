"use client";
import React, { useState } from "react";
import { fadeInUp } from "@/utils/animations";
import { motion } from "framer-motion";
import Link from "next/link";
import PostCard from "./PostCard";

const ResourcesLoop = ({ posts }) => {
  const [anchor, setAnchor] = useState("digital-marketing-trends");
  const handleAnchor = (value) => {
    setAnchor(value);
    document.getElementById(value)?.scrollIntoView({ behavior: "smooth" });
  };

  const digitalCategory = posts.filter(
    (post) => post.category === "digital-marketing-trends"
  );
  const practicalCategory = posts.filter(
    (post) => post.category === "practical-marketing-tips"
  );
  const businessCategory = posts.filter(
    (post) => post.category === "business-growth-strategies"
  );
  return (
    <section className="resources-loop">
      <div className="_container">
        <div className="resources-loop__top">
          <Link
            href={`#`}
            onClick={() => handleAnchor("digital-marketing-trends")}
            className={`${
              anchor == "digital-marketing-trends" ? "active" : ""
            }`}
          >
            Digital Marketing Trends
          </Link>
          <Link
            href={`#`}
            onClick={() => handleAnchor("practical-marketing-tips")}
            className={`${
              anchor == "practical-marketing-tips" ? "active" : ""
            }`}
          >
            Practical Marketing Tips
          </Link>
          <Link
            href={`#`}
            onClick={() => handleAnchor("business-growth-strategies")}
            className={`${
              anchor == "business-growth-strategies" ? "active" : ""
            }`}
          >
            Business Growth Strategies
          </Link>
        </div>
        <div className="resources-loop__body">
          <div className="category" id="digital-marketing-trends">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="section-title"
            >
              <div className="label">
                <img src="/images/lightning.svg" />
                <span>Digital Marketing Trends</span>
              </div>
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="row"
            >
              {digitalCategory.map((post, index) => (
                <PostCard key={index} post={post} />
              ))}
            </motion.div>
          </div>
          <div className="category" id="practical-marketing-tips">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="section-title"
            >
              <div className="label">
                <img src="/images/lightning.svg" />
                <span>Practical Marketing Tips</span>
              </div>
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="row"
            >
              {practicalCategory.map((post, index) => (
                <PostCard key={index} post={post} />
              ))}
            </motion.div>
          </div>
          <div className="category" id="business-growth-strategies">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="section-title"
            >
              <div className="label">
                <img src="/images/lightning.svg" />
                <span>Business Growth Strategies</span>
              </div>
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="row"
            >
              {businessCategory.map((post, index) => (
                <PostCard key={index} post={post} />
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResourcesLoop;
