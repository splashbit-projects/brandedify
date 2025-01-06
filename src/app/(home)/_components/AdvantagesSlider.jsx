"use client";
import React from "react";
import { fadeInUp } from "@/utils/animations";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import 'swiper/css/effect-fade';
import Link from "next/link";

const AdvantagesSlider = () => {
  return (
    <Swiper
      spaceBetween={36}
      slidesPerView={1}
      autoplay={{
        delay: 4000,
        disableOnInteraction: false,
      }}
      modules={[Autoplay, EffectFade]}
      effect="fade"
      fadeEffect={true}
    >
      <SwiperSlide>
        <div className="slide-inner">
          <div className="col-o1">
            <span className="number">01</span>
            <h2>We Solve Real Challenges</h2>
            <p>
              Whether you're struggling to generate leads, improve brand
              visibility, or retain customers, our proven strategies help
            </p>
          </div>
          <div
            className="col-o2"
            style={{ backgroundImage: "url(/images/home/slide1.png)" }}
          ></div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="slide-inner">
          <div className="col-o1">
            <span className="number">02</span>
            <h2>Data-Driven Success</h2>
            <p>
              Every service is backed by analytics to ensure optimal performance
              and continuous improvement.
            </p>
          </div>
          <div
            className="col-o2"
            style={{ backgroundImage: "url(/images/home/slide2.png)" }}
          ></div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="slide-last">
          <h2>Explore All Services</h2>
          <p>Learn more about our services</p>
          <Link href="/services" className="gray-button">
            <span>
              Learn more
              <img src="/images/arrow.svg" />
            </span>
          </Link>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default AdvantagesSlider;
