"use client";
import { usePathname } from 'next/navigation'
import "@/styles/header.scss";
import Link from "next/link";
import React from "react";

const Header = () => {
  const pathname = usePathname();

  return (
    <header>
      <div className="_container">
        <div className="row">
          <Link href="/">
            <img src="/images/Logo.svg" alt="Logo" />
          </Link>
          <nav>
            <Link href="/" className={pathname === "/" ? "current" : ""}>
              Home
            </Link>
            <Link
              href="/agency"
              className={pathname === "/agency" ? "current" : ""}
            >
              Agency
            </Link>
            <Link
              href="/services"
              className={pathname === "/services" ? "current" : ""}
            >
              Services
            </Link>
            <Link
              href="/solutions"
              className={pathname === "/solutions" ? "current" : ""}
            >
              Solutions
            </Link>
            <Link
              href="/results"
              className={pathname === "/results" ? "current" : ""}
            >
              Results
            </Link>
            <Link
              href="/resources"
              className={pathname === "/resources" ? "current" : ""}
            >
              Resources
            </Link>
            <Link
              href="/pricing"
              className={pathname === "/pricing" ? "current" : ""}
            >
              Pricing
            </Link>
            <Link
              href="/faq"
              className={pathname === "/faq" ? "current" : ""}
            >
              FAQ
            </Link>
            <Link
              href="/contact"
              className={pathname === "/contact" ? "current" : ""}
            >
              Contact
            </Link>
          </nav>
          <Link href="#" className="head-button">
            Get started
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
