"use client";
import React, { useEffect, useRef, useState } from "react";
import { fadeInUp } from "@/utils/animations";
import { motion } from "framer-motion";
import Link from "next/link";
import Plus from "@/icons/Plus";
import ComparisonTable from "./ComparisonTable";

const ServicesLoop = ({ serviceArray }) => {
  const [anchor, setAnchor] = useState(serviceArray[0].id);
  const observerRefs = useRef([]);
  const containerRef = useRef(null);

  const handleAnchor = (value) => {
    setAnchor(value);
    document.getElementById(value)?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5, 
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

    observerRefs.current = serviceArray.map(({ id }) =>
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
  }, [serviceArray]);

  useEffect(() => {
    setTimeout(function () {
      const container = containerRef.current;
      const activeElement = document.querySelector(
        ".services-loop__top .active"
      );

      if (container && activeElement) {
        console.log("test");
        const activeOffsetLeft = activeElement.offsetLeft;

        const scrollPosition =
          activeOffsetLeft;

        container.scrollLeft = scrollPosition;
      }
    }, 1000);
  }, [anchor]);

  return (
    <>
      <section className="services-loop">
        <div className="_container">
          <div className="services-loop__top" ref={containerRef}>
            {serviceArray.map((service, index) => (
              <Link
                href={`#`}
                key={index}
                onClick={(event) => {
                  event.preventDefault(); 
                  handleAnchor(service.id); 
                }}
                className={`${anchor == service.id ? "active" : ""}`}
              >
                {service.title}
              </Link>
            ))}
            <Link
              href={`#`}
              onClick={(event) => {
                event.preventDefault(); 
                handleAnchor("comparison"); 
              }}
              className={`${anchor == "comparison" ? "active" : ""}`}
            >
              Solutions for Your Goals
            </Link>
            <Link
              href={`#`}
              onClick={(event) => {
                event.preventDefault(); 
                handleAnchor("key-takeaways");
              }}
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
                  <Link href="/request-form">Order {service.title}</Link>
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
                <Link href="/request-form">
                  Let’s Match Services to Your Goals
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServicesLoop;
