"use client";
import React, { useState } from "react";
import { fadeInUp } from "@/utils/animations";
import { motion } from "framer-motion";
import Link from "next/link";
import Plus from "@/app/icons/Plus";
import ComparisonTable from "./ComparisonTable";

const ServicesLoop = ({ serviceArray }) => {
  const [anchor, setAnchor] = useState(serviceArray[0].id);
  const handleAnchor = (value) => {
    setAnchor(value);
    document.getElementById(value)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <section className="services-loop">
        <div className="_container">
          <div className="services-loop__top">
            {serviceArray.map((service, index) => (
              <Link
                href={`#`}
                key={index}
                onClick={() => handleAnchor(service.id)}
                className={`${anchor == service.id ? "active" : ""}`}
              >
                {service.title}
              </Link>
            ))}
            <Link
              href={`#`}
              onClick={() => handleAnchor("comparison")}
              className={`${anchor == "comparison" ? "active" : ""}`}
            >
              Solutions for Your Goals
            </Link>
            <Link
              href={`#`}
              onClick={() => handleAnchor("key-takeaways")}
              className={`${anchor == "key-takeaways" ? "active" : ""}`}
            >
              Key Takeaways
            </Link>
          </div>
          <div className="services-loop__body">
            {serviceArray.map((service, index) => (
              <div className="service" key={index} id={service.id}>
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeInUp}
                  className="section-title"
                >
                  <div className="label">
                    <img src="/images/lightning.svg" />
                    <span>{service.title}</span>
                  </div>
                  <h2 dangerouslySetInnerHTML={{ __html: service.subtitle }} />
                  <p
                    dangerouslySetInnerHTML={{ __html: service.description }}
                  />
                </motion.div>
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeInUp}
                  className="details"
                >
                  <div className="item">
                    <div>
                      <h3>Services We Provide</h3>
                      <ul>
                        {service.details.services.map((row, index) => (
                          <li key={index}>
                            <Plus />
                            <span>{row}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className="item">
                    <div>
                      <h3>Common Areas of Focus</h3>
                      <ul>
                        <ul>
                          {service.details.focusAreas.map((row, index) => (
                            <li key={index}>
                              <Plus />
                              <span>{row}</span>
                            </li>
                          ))}
                        </ul>
                      </ul>
                    </div>
                  </div>
                  <div className="item">
                    <div>
                      <h3>Pains We Solve</h3>
                      <ul>
                        {service.details.pains.map((row, index) => (
                          <li key={index}>
                            <Plus />
                            <span>{row}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeInUp}
                  className="bottom"
                >
                  <p dangerouslySetInnerHTML={{ __html: service.extra }} />
                  <button>Order {service.title}</button>
                </motion.div>
              </div>
            ))}
            <div className="comparison" id="comparison">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                className="section-title"
              >
                <h2>
                  Service Comparison: Tailored Solutions for Your <br />
                  Goals
                </h2>
                <p>
                  Every business has unique goals, and at Brandedify, we
                  understand that achieving <br />
                  those goals requires customized strategies. Below is a visual
                  breakdown of how each <br />
                  of our services can address your specific needs, whether
                  you’re focused on <br />
                  boosting visibility, generating leads, or driving conversions.
                </p>
              </motion.div>
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                className="table-wrap"
              >
                <ComparisonTable />
              </motion.div>
            </div>
            <div className="key-takeaways" id="key-takeaways">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                className="section-title"
              >
                <h2>Key Takeaways</h2>
              </motion.div>
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                className="details"
              >
                <div className="item">
                  <div>
                    <h3>SEO Optimization</h3>
                    <p>
                      Is perfect for improving long-term visibility and organic
                      lead generation.
                    </p>
                  </div>
                </div>
                <div className="item">
                  <div>
                    <h3>PPC Advertising</h3>
                    <p>
                      Drives instant results for traffic, sales, and
                      conversions.
                    </p>
                  </div>
                </div>

                <div className="item">
                  <div>
                    <h3>Social Media Marketing</h3>
                    <p>
                      Excels at building brand awareness and engaging audiences.
                    </p>
                  </div>
                </div>
                <div className="item">
                  <div>
                    <h3>Content Marketing</h3>
                    <p>
                      Establishes authority and educates your audience to
                      nurture leads.
                    </p>
                  </div>
                </div>
                <div className="item">
                  <div>
                    <h3>Email Marketing</h3>
                    <p>Keeps your brand connected with leads and customers.</p>
                  </div>
                </div>
                <div className="item">
                  <div>
                    <h3>Marketing Automation</h3>
                    <p>
                      Saves time while ensuring personalized, scalable outreach.
                    </p>
                  </div>
                </div>
              </motion.div>
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
              >
                <button>Let’s Match Services to Your Goals</button>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServicesLoop;
