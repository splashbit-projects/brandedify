"use client";
import React, { useState, useEffect, useRef } from "react";
import { fadeInUp } from "@/utils/animations";
import { motion } from "framer-motion";
import Link from "next/link";
import PostCard from "./PostCard";

const ResourcesLoop = ({ posts }) => {
  const [anchor, setAnchor] = useState("digital-marketing-trends");
  const observerRefs = useRef([]);
  const containerRef = useRef(null);

  const digitalCategory = posts.filter(
    (post) => post.category === "digital-marketing-trends"
  );
  const practicalCategory = posts.filter(
    (post) => post.category === "practical-marketing-tips"
  );
  const businessCategory = posts.filter(
    (post) => post.category === "business-growth-strategies"
  );

  const handleAnchor = (value) => {
    setAnchor(value);
    document.getElementById(value)?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5, // Adjust this threshold for when to activate the link
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setAnchor(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions
    );

    observerRefs.current = [
      "digital-marketing-trends",
      "practical-marketing-tips",
      "business-growth-strategies",
    ].map((id) => document.getElementById(id));

    observerRefs.current.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => {
      observerRefs.current.forEach((section) => {
        if (section) observer.unobserve(section);
      });
    };
  }, []);

  useEffect(() => {
    setTimeout(function () {
      const container = containerRef.current;
      const activeElement = document.querySelector(
        ".resources-loop__top .active"
      );

      if (container && activeElement) {
        console.log("test");
        const activeOffsetLeft = activeElement.offsetLeft;

        const scrollPosition = activeOffsetLeft;

        container.scrollLeft = scrollPosition;
      }
    }, 1000);
  }, [anchor]);

  return (
    <section className="resources-loop">
      <div className="_container">
        <div className="resources-loop__top" ref={containerRef}>
          <Link
            href={`#`}
            onClick={(event) => {
              event.preventDefault(); // Prevent the default link behavior
              handleAnchor("digital-marketing-trends"); // Call your anchor handling logic
            }}
            className={`${
              anchor === "digital-marketing-trends" ? "active" : ""
            }`}
          >
            Digital Marketing Trends
          </Link>
          <Link
            href={`#`}
            onClick={(event) => {
              event.preventDefault(); // Prevent the default link behavior
              handleAnchor("practical-marketing-tips"); // Call your anchor handling logic
            }}
            className={`${
              anchor === "practical-marketing-tips" ? "active" : ""
            }`}
          >
            Practical Marketing Tips
          </Link>
          <Link
            href={`#`}
            onClick={(event) => {
              event.preventDefault(); // Prevent the default link behavior
              handleAnchor("business-growth-strategies"); // Call your anchor handling logic
            }}
            className={`${
              anchor === "business-growth-strategies" ? "active" : ""
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
