"use client";
import React, { useState } from "react";
import { fadeInUp } from "@/utils/animations";
import { motion } from "framer-motion";
import Image from "next/image";

const ResultsLoop = ({ resultsArray }) => {
  return (
    <section className="results-loop">
      <div className="_container">
        <div className="results-loop__body">
          {resultsArray.map((result, index) => (
            <div className="result" key={index} id={result.id}>
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                className="section-title"
              >
                <div className="label">
                  <img src="/images/lightning.svg" />
                  <span>Case Study {index + 1}</span>
                </div>
                <h2 dangerouslySetInnerHTML={{ __html: result.title }} />
              </motion.div>
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                className="details"
              >
                <div className="col-01">
                  <Image
                    src={result.image}
                    width={234}
                    height={234}
                    alt={result.title}
                  />
                  <div className="about">
                    <div>
                      <h3>
                        <img src="/images/cases/client.svg" />
                        Client
                      </h3>
                      <p>{result.client}</p>
                    </div>
                    <div>
                      <h3>
                        <img src="/images/cases/challenge.svg" />
                        Challenge
                      </h3>
                      <p>{result.challenge}</p>
                    </div>
                  </div>
                </div>
                <div className="col-02">
                  <div>
                    <h3>Solution</h3>
                    <div className="solutions">
                      {result.solution.map((row, index) => (
                        <div key={index}>{row}</div>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h3>Results</h3>
                    <div className="results">
                      {result.results.map((row, index) => (
                        <div
                          key={index}
                          dangerouslySetInnerHTML={{ __html: row }}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResultsLoop;
