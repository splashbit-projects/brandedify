"use client";
import React, { useState } from "react";
import { fadeInUp } from "@/utils/animations";
import { motion } from "framer-motion";
import Link from "next/link";
import AboutUs from "./AboutUs";
import OurTeam from "./OurTeam";
import CoreAreas from "./CoreAreas";
import CareersAtBrandedify from "./CareersAtBrandedify";

const AgencyBlock = () => {
  const [anchor, setAnchor] = useState("about-us");

  const handleAnchor = (value) => {
    setAnchor(value);
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
            <div id="about-us">
              <img src="/images/agency/arrow1.svg" />
              <AboutUs />
            </div>
            <div id="our-team">
              <img src="/images/agency/arrow2.svg" />
              <OurTeam />
            </div>
            <div id="core-areas-of-expertise">
              <CoreAreas />
            </div>
            <div id="careers-at-brandedify">
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
