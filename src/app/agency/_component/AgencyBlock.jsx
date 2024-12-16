"use client";
import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import AboutUs from "./AboutUs";
import OurTeam from "./OurTeam";
import CoreAreas from "./CoreAreas";
import CareersAtBrandedify from "./CareersAtBrandedify";

const AgencyBlock = () => {
  const [anchor, setAnchor] = useState("about-us");

  // Refs for each section
  const aboutUsRef = useRef(null);
  const ourTeamRef = useRef(null);
  const coreAreasRef = useRef(null);
  const careersRef = useRef(null);

  const sections = [
    { id: "about-us", ref: aboutUsRef },
    { id: "our-team", ref: ourTeamRef },
    { id: "core-areas-of-expertise", ref: coreAreasRef },
    { id: "careers-at-brandedify", ref: careersRef },
  ];

  const handleScroll = () => {
    let closestSection = "about-us"; // Default section
    let minDistance = Infinity;

    sections.forEach((section) => {
      const rect = section.ref.current?.getBoundingClientRect();
      if (rect) {
        const distance = Math.abs(rect.top);
        if (distance < minDistance) {
          minDistance = distance;
          closestSection = section.id;
        }
      }
    });

    setAnchor(closestSection);
  };

  useEffect(() => {
    // Attach scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Initial check
    handleScroll();

    // Cleanup on unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleAnchor = (value) => {
    
    // Scroll to the section
    document.getElementById(value)?.scrollIntoView({ behavior: "smooth" });
    //setAnchor(value);
  };

  return (
    <section className="agency">
      <div className="_container">
        <div className="agency__body">
          <div className="col-01">
            <Link
              href="#about-us"
              className={`${anchor == "about-us" ? "active" : ""}`}
              onClick={() => handleAnchor("about-us")}
            >
              About Us
            </Link>
            <Link
              href="#our-team"
              className={`${anchor == "our-team" ? "active" : ""}`}
              onClick={() => handleAnchor("our-team")}
            >
              Our Team
            </Link>
            <Link
              href="#core-areas-of-expertise"
              className={`${
                anchor == "core-areas-of-expertise" ? "active" : ""
              }`}
              onClick={() => handleAnchor("core-areas-of-expertise")}
            >
              Core Areas of Expertise
            </Link>
            <Link
              href="#careers-at-brandedify"
              className={`${anchor == "careers-at-brandedify" ? "active" : ""}`}
              onClick={() => handleAnchor("careers-at-brandedify")}
            >
              Careers at Brandedify
            </Link>
          </div>
          <div className="col-02">
            <div id="about-us" ref={aboutUsRef}>
              <img src="/images/agency/arrow1.svg" />
              <AboutUs />
            </div>
            <div id="our-team" ref={ourTeamRef}>
              <img src="/images/agency/arrow2.svg" />
              <OurTeam />
            </div>
            <div id="core-areas-of-expertise" ref={coreAreasRef}>
              <CoreAreas />
            </div>
            <div id="careers-at-brandedify" ref={careersRef}>
              <CareersAtBrandedify />
            </div>
          </div>
          <div className="col-03"></div>
        </div>
      </div>
    </section>
  );
};

export default AgencyBlock;
