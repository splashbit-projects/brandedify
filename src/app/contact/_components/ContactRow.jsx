"use client";
import React from "react";
import { fadeInUp } from "@/utils/animations";
import { motion } from "framer-motion";
import Link from "next/link";

const ContactRow = () => {
  return (
    <section className="contact-row">
      <div className="_container">
        <div className="contact-row__body">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <div className="inner">
              <div>
                <h3>Where We Work</h3>
                <Link href="#">OFFICE ADDRESS</Link>
              </div>
              <div>
                <h3>Of icial Correspondence</h3>
                <Link href="#">REGISTERED ADDRESS</Link>
              </div>
              <div>
                <h3>Get in Touch</h3>
                <Link href="#">EMAIL</Link>
              </div>
              <div>
                <h3>Speak with Us</h3>
                <Link href="#">NUMBER</Link>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <div className="inner">
              <div>
                <h3>Follow Us on Social Media</h3>
                <p>Stay connected with us for updates, tips, and insights:</p>
              </div>
              <div>
                <Link href="#">Facebook</Link>
              </div>
              <div>
                <Link href="#">Instagram</Link>
              </div>
              <div>
                <Link href="#">Twitter</Link>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <div className="inner">
              <div>
                <h3>Let's Start a Conversation</h3>
                <p>
                  Have a question or a project in mind? Use the form below to
                  get in touch, and one of our team members will get back to you
                  as soon as possible.
                </p>
              </div>
              <Link href="/request-form" className="main-button">
                <span>Request Form</span>
                <img src="/images/arrow.svg" />
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactRow;
