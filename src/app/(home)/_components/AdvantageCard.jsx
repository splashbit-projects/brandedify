"use client";
import React, { useEffect, useRef } from "react";
import { fadeInUp } from "@/utils/animations";
import { motion, useScroll, useTransform } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import Link from "next/link";
import Image from "next/image";

const AdvantageCard = ({
  id,
  title,
  text,
  image,
  range,
  progress,
  i,
  targetScale,
}) => {
  const container = useRef(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "start start"],
  });

  const imageScale = useTransform(scrollYProgress, [0, 1], [2, 1]);
  const scale = useTransform(progress, range, [1, targetScale]);
  useEffect(() => {
    progress.on("change", (value) => console.log("Progress:", value));
  }, [progress]);
  return (
    <>
      <div
        ref={container}
        className="slide"
        style={{ top: `calc(5% + ${i * 40}px)` }}
      >
        <motion.div className="wrap" style={{ scale }}>
          {id == 3 ? (
            <div className="slide-last">
              <h2>{title}</h2>
              <p>{text}</p>
              <Link href="/services" className="gray-button">
                <span>
                  Learn more
                  <img src="/images/arrow.svg" />
                </span>
              </Link>
            </div>
          ) : (
            <motion.div className="slide-inner test">
              <div className="col-o1">
                <span className="number">0{id}</span>
                <h2>{title}</h2>
                <p>{text}</p>
              </div>
              <div className="col-o2">
                <motion.div
                  style={{ opacity: 1, scale: imageScale }}
                  className="inner"
                >
                  <Image fill src={image} alt="image" />
                </motion.div>
              </div>
            </motion.div>
          )}
        </motion.div>
      </div>
    </>
  );
};

export default AdvantageCard;
