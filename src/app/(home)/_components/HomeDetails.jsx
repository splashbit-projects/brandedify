"use client";
import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const HomeDetails = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const sliderWrapper = containerRef.current;

      if (!sliderWrapper) {
        console.error("Element .home-details not found.");
        return;
      }

      const rows = sliderWrapper.querySelectorAll(".row");
      if (rows.length === 0) {
        console.error("No rows found inside .home-details.");
        return;
      }

      const viewportHeight = window.innerHeight;
      const scrollY = window.scrollY;
      const wrapperStart = sliderWrapper.offsetTop;

      if (scrollY >= wrapperStart && scrollY < wrapperStart + rows.length * viewportHeight) {
        const activeRowIndex = Math.floor((scrollY - wrapperStart) / viewportHeight);

        rows.forEach((row, index) => {
          if (index === activeRowIndex) {
            row.classList.add("active");
          } else {
            row.classList.remove("active");
          }
        });
      }
    };

    window.addEventListener("scroll", handleScroll);

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section className="home-details" ref={containerRef}>
      <div className="_container">
        <div className="home-details__body">
          {[
            {
              title: "Transforming Insights into Revenue Growth",
              text: "Unlock the full potential of your marketing operations with data-driven strategies that accelerate pipeline velocity, enhance conversion rates, and maximize lifetime customer value.",
              image: "/images/home/details1.png",
              width: 373,
              height: 382,
            },
            {
              title: "Aligning Teams for Seamless Growth",
              text: "Break down silos between your marketing and sales teams with our holistic approach, ensuring consistent communication, better lead management, and strategies that maximize ROI.",
              image: "/images/home/details2.png",
              width: 585,
              height: 370,
            },
            {
              title: "Win, Grow, and Retain Your Key Accounts",
              text: "Create hyper-personalized marketing strategies tailored for high-value accounts, driving meaningful engagement, faster conversions, and long-term partnerships.",
              image: "/images/home/details3.png",
              width: 373,
              height: 378,
            },
            {
              title: "Achieve Sustainable Growth with Data-Driven Marketing",
              text: "Our adaptive and data-backed marketing strategies ensure your business achieves measurable results, with continuous optimization driving long-term success at every stage of your journey.",
              image: "/images/home/details4.png",
              width: 465,
              height: 374,
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              className={`row ${index == 0 ? "active" : ""}`}
              transition={{ duration: 0 }}
            >
              <div className="col-01">
                <h2>{item.title}</h2>
                <p>{item.text}</p>
              </div>
              <div className="col-02">
                <Image
                  src={item.image}
                  width={item.width}
                  height={item.height}
                  alt={`details${index + 1}`}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeDetails;
