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
                <Link href="#">Office number 128, located on the 6th floor at 1 Paya Lebar Link, Singapore 408533</Link>
                <Link href="#">10B Printing House Yard, Hackney Road, Shoreditch, London E2 (2nd Floor, Office 26)</Link>
              </div>
              <div>
                <h3>Official Correspondence</h3>
                <Link href="#">133 New Bridge Road, #08-01, Chinatown Point, Singapore 059413</Link>
                <Link href="#">Silverstream House, Fitzroy Street, Fitzrovia, London, United Kingdom, W1T 6EB</Link>
              </div>
              <div>
                <h3>Get in Touch</h3>
                <Link href=":mailto:info@brandedify.com">info@brandedify.com</Link>
              </div>
              <div>
                <h3>Speak with Us</h3>
                <Link href="tel:+6531060141">+6531060141</Link>
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
