/* eslint-disable @next/next/no-html-link-for-pages */
'use client';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          {/* Services */}
          <div className="footer-column">
            <h3>Services</h3>
            <a href="/#services">Web Development</a>
            <a href="/#services">Software Development</a>
            <a href="/#services">AI Agents & Automation</a>
            <a href="/#services">UI/UX Design</a>
            <a href="/#services">E-commerce Solutions</a>
            <a href="/#services">SEO & Digital Growth</a>
          </div>

          {/* Solutions */}
          <div className="footer-column">
            <h3>Solutions</h3>
            <a href="/#solutions">AI Customer Support</a>
            <a href="/#solutions">Lead Automation</a>
            <a href="/#solutions">Booking Automation</a>
            <a href="/#solutions">Business Dashboards</a>
            <a href="/#solutions">Custom Business Systems</a>
          </div>

          {/* Company */}
          <div className="footer-column">
            <h3>Company</h3>
            <a href="/#about">About Us</a>
            <a href="/#projects">Our Work</a>
            <a href="/#process">How We Work</a>
            <a href="/#contact">Contact</a>
            <a href="/#contact">Become a Partner</a>
          </div>

          {/* Brand */}
          <div className="footer-brand">
            <h2>Cybernaxe Solutions</h2>
            <p>
              Building intelligent digital solutions that help businesses
              automate, grow, and operate smarter.
            </p>

            <div className="footer-socials">
              <a
                href="https://www.linkedin.com/company/cybernaxe-solutions"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                LinkedIn
              </a>
              <a
                href="https://www.facebook.com/Cybernaxesolution"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
              >
                Facebook
              </a>
              {/* <a
                href="https://www.tiktok.com/@cybernaxesolution"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TikTok"
              >
                TikTok
              </a> */}
              {/* <a
                href="YOUR_INSTAGRAM_URL"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                Instagram
              </a> */}
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="footer-bottom">
          <div>
            © {new Date().getFullYear()} Cybernaxe Solutions. All rights
            reserved.
          </div>

          <div className="footer-links">
            <a href="/privacy-policy">Privacy Policy</a>
            <a href="/terms">Terms & Conditions</a>
          </div>
        </div>
      </div>
    </footer>
  );
}