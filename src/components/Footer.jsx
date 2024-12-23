import "@/styles/footer.scss";
import Link from "next/link";
import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer>
      <div className="foot-top">
        <div className="_container">
          <div className="row">
            <div className="col">
              <Link href="#">
                <img src="/images/Logo.svg" alt="Logo" />
              </Link>
              <p>
                Fuel Your Growth with Winning <br />
                Digital Marketing Strategies
              </p>
            </div>
            <div className="col">
              <h3>Agency</h3>
              <nav>
                <Link href="/agency#about-us">About Us</Link>
                <Link href="/agency#our-team">Our Team</Link>
                <Link href="/agency#careers-at-brandedify">Careers</Link>
                <Link href="/results">Results</Link>
                <Link href="#">Resources</Link>
                <Link href="/faq">FAQ</Link>
                <Link href="#">Pricing</Link>
              </nav>
            </div>
            <div className="col">
              <h3>Services</h3>
              <nav>
                <Link href="/services#seo-optimization">SEO Optimization</Link>
                <Link href="/services#ppc-advertising">PPC Advertising</Link>
                <Link href="/services#social-media-marketing">Social Media Marketing</Link>
                <Link href="/services#content-marketing">Content Marketing</Link>
                <Link href="/services#email-marketing">Email Marketing</Link>
                <Link href="/services#marketing-automation">Marketing Automation</Link>
              </nav>
            </div>
            <div className="col">
              <h3>Solutions</h3>
              <nav>
                <Link href="/solutions#lead-generation">Lead Generation</Link>
                <Link href="/solutions#brand-awareness">Brand Awareness</Link>
                <Link href="/solutions#customer-retention">Customer Retention</Link>
                <Link href="/solutions#sales-enablement">Sales Enablement</Link>
              </nav>
            </div>
            <div className="col">
              <h3>Get in Touch</h3>
              <nav>
                <Link href="#">OFFICE ADDRESS</Link>
                <Link href="#">REGISTERED ADDRESS</Link>
                <Link href="#">EMAIL</Link>
                <Link href="#">NUMBER</Link>
                <Link href="#">Facebook</Link>
                <Link href="#">Instagram</Link>
                <Link href="#">Twitter</Link>
              </nav>
            </div>
          </div>
        </div>
      </div>
      <div className="foot-copy">
        <div className="_container">
          <div className="row">
            <p>© {currentYear} Brandedify. All Rights Reserved</p>
            <nav>
              <Link href="#">Terms and Conditions</Link>
              <Link href="#">Privacy Policy</Link>
              <Link href="#">Cookie Policy</Link>
              <Link href="#">Refund Policy</Link>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
