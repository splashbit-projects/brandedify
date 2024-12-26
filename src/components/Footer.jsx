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
              <div>
                <img className="desktop" src="/images/footer_arrow.svg" />
                <div className="text">
                  <p>
                    Fuel Your Growth with Winning <br />
                    Digital Marketing Strategies
                  </p>
                  <img className="mobile" src="/images/footer_arrow_mob.svg" />
                </div>
              </div>
            </div>
            <div className="col">
              <h3>Agency</h3>
              <nav>
                <Link href="/agency#about-us">About Us</Link>
                <Link href="/agency#our-team">Our Team</Link>
                <Link href="/agency#careers-at-brandedify">Careers</Link>
                <Link href="/results">Results</Link>
                <Link href="/resources">Resources</Link>
                <Link href="/faq">FAQ</Link>
                <Link href="/pricing">Pricing</Link>
              </nav>
            </div>
            <div className="col">
              <h3>Services</h3>
              <nav>
                <Link href="/services#seo-optimization">SEO Optimization</Link>
                <Link href="/services#ppc-advertising">PPC Advertising</Link>
                <Link href="/services#social-media-marketing">
                  Social Media Marketing
                </Link>
                <Link href="/services#content-marketing">
                  Content Marketing
                </Link>
                <Link href="/services#email-marketing">Email Marketing</Link>
                <Link href="/services#marketing-automation">
                  Marketing Automation
                </Link>
              </nav>
            </div>
            <div className="col">
              <h3>Solutions</h3>
              <nav>
                <Link href="/solutions#lead-generation">Lead Generation</Link>
                <Link href="/solutions#brand-awareness">Brand Awareness</Link>
                <Link href="/solutions#customer-retention">
                  Customer Retention
                </Link>
                <Link href="/solutions#sales-enablement">Sales Enablement</Link>
              </nav>
            </div>
            <div className="col">
              <h3>Get in Touch</h3>
              <nav>
                <Link href="#">
                  Office address:
                  <br />1 Paya Lebar Link, Singapore 408533
                </Link>
                <Link href="#">
                  Registered address:
                  <br />
                  133 New Bridge Road, #08-01, Chinatown Point, Singapore 059413
                </Link>
              </nav>
            </div>
          </div>
        </div>
      </div>
      <div className="details">
        <div className="_container">
          <div className="soc">
            <div className="left">
              <Link href="#">
                <img src="/images/foot_phone.svg" />
                <span>+0 00 0000 00</span>
              </Link>
              <Link href="#">
                <img src="/images/foot_mail.svg" />
                <span>brandedify@gmail.com</span>
              </Link>
            </div>
            <div className="right">
              <Link href="#">
                <img src="/images/foot_x.svg" />
              </Link>
              <Link href="#">
                <img src="/images/foot_fb.svg" />
              </Link>
              <Link href="#">
                <img src="/images/foot_inst.svg" />
                <span>+3</span>
              </Link>
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
