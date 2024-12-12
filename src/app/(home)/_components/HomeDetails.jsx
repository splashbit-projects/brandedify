"use client";
import React from "react";
import { fadeInUp } from "@/utils/animations";
import { motion } from "framer-motion";
import Image from "next/image";

const HomeDetails = () => {
  return (
    <section className="home-details">
      <div className="_container">
        <div className="home-details__body">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="row"
          >
            <div className="col-01">
              <h2>Transforming Insights into Revenue Growth</h2>
              <p>
                Unlock the full potential of your marketing operations with
                data-driven strategies that accelerate pipeline velocity,
                enhance conversion rates, and maximize lifetime customer value.
              </p>
            </div>
            <div className="col-02">
              <Image src="/images/home/details1.png" width={373} height={382} alt="details1" />
            </div>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="row"
          >
            <div className="col-01">
              <h2>Aligning Teams for Seamless Growth</h2>
              <p>
                Break down silos between your marketing and sales teams with our
                holistic approach, ensuring consistent communication, better
                lead management, and strategies that maximize ROI.
              </p>
            </div>
            <div className="col-02">
              <Image src="/images/home/details2.png" width={585} height={370} alt="details2" />
            </div>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="row"
          >
            <div className="col-01">
              <h2>Win, Grow, and Retain Your Key Accounts</h2>
              <p>
                Create hyper-personalized marketing strategies tailored for
                high-value accounts, driving meaningful engagement, faster
                conversions, and long-term partnerships.
              </p>
            </div>
            <div className="col-02">
              <Image src="/images/home/details3.png" width={373} height={378} alt="details3" />
            </div>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="row"
          >
            <div className="col-01">
              <h2>Achieve Sustainable Growth with Data-Driven Marketing</h2>
              <p>
                Our adaptive and data-backed marketing strategies ensure your
                business achieves measurable results, with continuous
                optimization driving long-term success at every stage of your
                journey.
              </p>
            </div>
            <div className="col-02">
              <Image src="/images/home/details4.png" width={465} height={374} alt="details4" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HomeDetails;
