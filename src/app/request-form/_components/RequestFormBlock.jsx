"use client";
import React from "react";
import { fadeInUp } from "@/utils/animations";
import { motion } from "framer-motion";
import useRequestFormStore from "@/stores/requestFormStore";
import MultiStepForm from "./MultiStepForm";
import usePopupStore from "@/stores/popupStore";

const RequestFormBlock = () => {
  const { step } = useRequestFormStore();
  const { thanksPopupDisplay, setThanksPopupDisplay } = usePopupStore();

  const closePopup = () => {
    setThanksPopupDisplay(false);
  };

  return (
    <>
      <section className="contact-block">
        <div className="_container">
          <div className="contact-block__body">
            <div className="col-01">
              <div>
                <motion.h1
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeInUp}
                >
                  Let's Bring Your <br />
                  Vision to Life
                </motion.h1>
                <motion.p
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeInUp}
                >
                  Share your business and marketing goals with us, and let's
                  craft a strategy tailored to your success.
                  <br />
                  <br />
                  Complete the form below to help us understand your needs,
                  challenges, and target audience. Together, we'll create
                  measurable results that drive growth.
                </motion.p>
              </div>
              <div className="steps">
                <img src="/images/request-form/line.svg" />
                <div className={`${step >= 1 ? "active" : ""} step`}>
                  Business Data
                </div>
                <div className={`${step >= 2 ? "active" : ""} step`}>
                  Marketing Data
                </div>
                <div className={`${step >= 3 ? "active" : ""} step`}>
                  Target Audience
                </div>
                <div className={`${step >= 4 ? "active" : ""} step`}>
                  Contact
                </div>
              </div>
            </div>
            <div className="col-02">
              <MultiStepForm />
            </div>
          </div>
        </div>
      </section>

      <div
        className={`thanks-popup-wrap ${thanksPopupDisplay ? "opened" : ""}`}
      >
        <div className="overlay" onClick={() => closePopup()}></div>
        <div className="popup-inner">
          <svg
            className="popup-close"
            onClick={() => closePopup()}
            width="20"
            height="21"
            viewBox="0 0 20 21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M18 18.5L2 2.5M18 2.5L2 18.5"
              stroke="#030A1D"
              strokeWidth="4"
              strokeLinecap="round"
            />
          </svg>
          <div>
            <div className="form-wrap">
              <div className="success">
                <img src="/images/success.svg" />
                <h3>
                  Thank you for choosing <br />
                  Brandedify!
                </h3>
                <p>Our representative will reach out to you shortly.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RequestFormBlock;
