"use client";
import React, { useEffect, useRef, useState } from "react";
import { fadeInUp } from "@/utils/animations";
import { motion } from "framer-motion";
import Link from "next/link";
import Plus from "@/icons/Plus";
import Image from "next/image";

const SolutionsLoop = ({ solutionsArray }) => {
  const [solutionAnchor, setSolutionAnchor] = useState(solutionsArray[0].id);
  const containerRef = useRef(null);
  const handleAnchor = (value) => {
    setSolutionAnchor(value);
    document.getElementById(value)?.scrollIntoView({ behavior: "smooth" });
  };

  const observerRefs = useRef([]);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5, // Adjust this threshold based on when you want the link to activate
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setSolutionAnchor(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions
    );

    observerRefs.current = solutionsArray.map(({ id }) =>
      document.getElementById(id)
    );
    observerRefs.current.push(
      document.getElementById("comparison"),
      document.getElementById("key-takeaways")
    );

    observerRefs.current.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => {
      observerRefs.current.forEach((section) => {
        if (section) observer.unobserve(section);
      });
    };
  }, [solutionsArray]);

  useEffect(() => {
    setTimeout(function () {
      const container = containerRef.current;
      const activeElement = document.querySelector(
        ".solutions-loop__top .active"
      );

      if (container && activeElement) {
        console.log("test");
        const activeOffsetLeft = activeElement.offsetLeft;

        const scrollPosition = activeOffsetLeft;

        container.scrollLeft = scrollPosition;
      }
    }, 1000);
  }, [solutionAnchor]);

  return (
    <section className="solutions-loop">
      <div className="_container">
        <div className="solutions-loop__top" ref={containerRef}>
          {solutionsArray.map((solution, index) => (
            <Link
              href={`#`}
              key={index}
              onClick={(event) => {
                event.preventDefault(); // Prevent the default link behavior
                handleAnchor(solution.id); // Call your anchor handling logic
              }}
              className={`${solutionAnchor == solution.id ? "active" : ""}`}
            >
              {solution.title}
            </Link>
          ))}
        </div>
        <div className="solutions-loop__body">
          {solutionsArray.map((solution, index) => (
            <div className="solution" key={index} id={solution.id}>
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                className="section-title"
              >
                {solution.title && (
                  <div className="label">
                    <img src="/images/lightning.svg" />
                    <span>{solution.title}</span>
                  </div>
                )}

                <h2 dangerouslySetInnerHTML={{ __html: solution.subtitle }} />
                <p dangerouslySetInnerHTML={{ __html: solution.description }} />
              </motion.div>
              {solution.id !== "solutions-by-industry" ? (
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeInUp}
                  className="block"
                >
                  <div className="inner">
                    <div className="left">
                      <h3>0{index + 1}</h3>
                      <h4>What We Deliver</h4>
                      <ul>
                        {solution.deliverables.map((row, index) => (
                          <li key={index}>
                            <Plus />
                            <span>{row}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <Image
                      src={solution.image}
                      width={516}
                      height={420}
                      alt={solution.title}
                    />
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeInUp}
                  className="row"
                >
                  {solution.industries.map((industry, index) => (
                    <div className="item" key={index}>
                      <div>
                        <h3>{industry.name}</h3>
                        <ul>
                          {industry.solutions.map((row, index) => (
                            <li key={index}>
                              <Plus />
                              <span>{row}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ))}
                </motion.div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionsLoop;
