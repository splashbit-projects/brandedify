"use client";
import React, { useState } from "react";
import { fadeInUp } from "@/utils/animations";
import { motion } from "framer-motion";
import Link from "next/link";
import Plus from "@/icons/Plus";
import Image from "next/image";

const SolutionsLoop = ({ solutionsArray }) => {
  const [solutionAnchor, setSolutionAnchor] = useState(solutionsArray[0].id);
  const handleAnchor = (value) => {
    setSolutionAnchor(value);
    document.getElementById(value)?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <section className="solutions-loop">
      <div className="_container">
        <div className="solutions-loop__top">
          {solutionsArray.map((solution, index) => (
            <Link
              href={`#`}
              key={index}
              onClick={() => handleAnchor(solution.id)}
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
                    <Image src={solution.image} width={516} height={420} alt={solution.title} />
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
