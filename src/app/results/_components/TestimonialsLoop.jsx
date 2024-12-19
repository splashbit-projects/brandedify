"use client";
import React, { useState } from "react";
import { fadeInUp } from "@/utils/animations";
import { motion } from "framer-motion";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";

const TestimonialsLoop = ({ testimonialsArray }) => {
  return (
    <section className="testimonials-loop">
      <div className="_container">
        <div className="testimonials-loop__body">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="section-title"
          >
            <div className="label">
              <img src="/images/lightning.svg" />
              <span>What are they saying about us?</span>
            </div>
            <h2>Client Testimonials</h2>
          </motion.div>
          <Swiper
            spaceBetween={36}
            slidesPerView={1}
            loop={true}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            navigation={{
              nextEl: ".next",
              prevEl: ".prev",
            }}
            modules={[Autoplay, Navigation]}
          >
            {testimonialsArray.map((testimonial, index) => (
              <SwiperSlide key={index}>
                <div className="slide-inner">
                  <div>
                    <h3>{testimonial.name}</h3>
                    <h4>{testimonial.title}</h4>
                  </div>
                  <p
                    dangerouslySetInnerHTML={{
                      __html: `“${testimonial.testimonial}”`,
                    }}
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="navigation">
            <button className="prev">
              <img src="/images/cases/prev.svg" />
            </button>
            <button className="next">
              <img src="/images/cases/next.svg" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsLoop;
