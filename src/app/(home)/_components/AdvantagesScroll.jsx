"use client";
import React, { useEffect, useRef } from "react";
import { fadeInUp } from "@/utils/animations";
import { motion, useScroll } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import Link from "next/link";
import Image from "next/image";
import AdvantageCard from "./AdvantageCard";

const AdvantagesScroll = () => {
  const slides = [
    {
      id: 1,
      title: "We Solve Real Challenges",
      text: "Whether you're struggling to generate leads, improve brand visibility, or retain customers, our proven strategies help",
      image: "/images/home/slide1.png",
    },
    {
      id: 2,
      title: "Data-Driven Success",
      text: "Every service is backed by analytics to ensure optimal performance and continuous improvement.",
      image: "/images/home/slide2.png",
    },
    {
      id: 3,
      title: "Explore All Services",
      text: "Learn more about our services",
      image: "",
    },
  ];

  const container = useRef(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  useEffect(() => {
    //scrollYProgress.on("change", (e) => console.log(scrollYProgress.current));
  }, []);

  return (
    <div ref={container} className="scroll-wrapper">
      {slides.map((slide, index) => {
        const targetScale = 1 - (slides.length - index) * 0.05;
        return (
          <AdvantageCard
            key={index}
            {...slide}
            range={[index * 0.33, 1]}
            progress={scrollYProgress}
            i={index}
            targetScale={targetScale}
          />
        );
      })}
    </div>
  );
};

export default AdvantagesScroll;
