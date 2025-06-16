"use client";
import React from "react";
import { fadeInUp } from "@/utils/animations";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

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
                <div className="companies">
                  <div className="company">
                    <div className="company__name">
                      <h4>Brandora PTE LTD</h4>
                      <span>Asia</span>
                    </div>
                    <div className="company__address">
                      <h5>Office address:</h5>
                      <p>
                        Office number 128, 6th floor, 1 Paya Lebar Link,
                        Singapore 408533
                      </p>
                    </div>
                    <div className="company__address">
                      <h5>Registered address:</h5>
                      <p>
                        133 New Bridge Road, #08-01, Chinatown Point, Singapore
                        059413
                      </p>
                    </div>
                  </div>
                  <div className="company">
                    <div className="company__name">
                      <h4>Veltrix Global LTD</h4>
                      <span>UK and Europe</span>
                    </div>
                    <div className="company__address">
                      <h5>Office address:</h5>
                      <p>
                        10B Printing House Yard, Hackney Road, Shoreditch,
                        London E2 (2nd Floor, Office 26)
                      </p>
                    </div>
                    <div className="company__address">
                      <h5>Registered address:</h5>
                      <p>
                        Silverstream House, Fitzroy Street, Fitzrovia, London,
                        United Kingdom, W1T 6EB
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <h3>Get in Touch</h3>
                <Link href=":mailto:info@brandedify.com">
                  info@brandedify.com
                </Link>
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
                <Link href="https://www.facebook.com/brandedifycom/" target="_blank">Facebook</Link>
              </div>
              <div>
                <Link href="https://www.instagram.com/brandedifycom/" target="_blank">Instagram</Link>
              </div>
              <div>
                <Link href="https://x.com/brandedify" target="_blank">Twitter</Link>
              </div>
              <div className="image-wrap">
                <Image src="/images/contact/contact.png" alt="social" fill />
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
