"use client";
import React from "react";
import { fadeInUp } from "@/utils/animations";
import { motion } from "framer-motion";
import Link from "next/link";

const HomeHero = () => {
  return (
    <section className="home-hero">
      <div className="_container">
        <div className="home-hero__body">
          <div className="top">
            <motion.h1
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              Fuel Your Growth with <br />
              Winning Digital Marketing <br />
              Strategies
            </motion.h1>
            <motion.p
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              Drive more leads, boost revenue, and build lasting customer
              relationships with our tailored <br />
              solutions. The next chapter of your success starts here.
            </motion.p>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="buttons"
            >
              <Link href="/solutions" className="main-button">
                <span>Get started</span>
                <img src="/images/arrow.svg" />
              </Link>
              <Link href="/request-form" className="gray-button">
                <span>Book a Consultation</span>
              </Link>
              <img src="/images/home/decor.svg" />
            </motion.div>
          </div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="bottom"
          >
            <div className="left">
              <Link href="tel:+6531060141">
                <img src="/images/phone.svg" />
                <span>+6531060141</span>
              </Link>
              <Link href="mailto:info@brandedify.com">
                <img src="/images/mail.svg" />
                <span>info@brandedify.com</span>
              </Link>
            </div>
            <div className="right">
              <Link href="https://x.com/brandedify" target="_blank">
                <img src="/images/x.svg" />
              </Link>
              <Link href="https://www.facebook.com/brandedifycom/" target="_blank">
                <img src="/images/fb.svg" />
              </Link>
              <Link href="https://www.instagram.com/brandedifycom/" target="_blank">
                <img src="/images/inst.svg" />
                <span>+3</span>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HomeHero;
