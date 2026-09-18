'use client';

import Image from "next/image";
import Head from "next/head";
import Script from "next/script";
import Link from "next/link";
import Navbar from "@/components/navbar";
import { useEffect } from "react";

export default function CarlosPublishersDetails() {
  return (
    <>
    <Navbar />
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Carlos Publishers Website Redesign — Project Details | Danushka Wickramasinghe</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
        <link rel="stylesheet" href="/style.css" />
      </Head>

      <section className="project-details-section">
        <div className="container">
          <div className="project-details-header">
            <Link href="/" className="header-back-icon">
              <img src="/image/icon/arrow left.svg" alt="Back to Projects" width={24} height={24} />
              <span>Back</span>
            </Link>
            <div>
              <h1 className="project-details-title">Carlos Publishers Website Redesign</h1>
              <p className="project-details-subtitle">
                Redesigned the Carlos Publishers website to improve responsiveness, visual consistency, usability, and overall user experience. The project focused on modernizing the interface, optimizing mobile performance, and creating a cohesive design system that aligns with the company's brand identity.
              </p>
            </div>
          </div>

          <div className="project-details-meta">
            <div className="meta-item">
              <div className="meta-icon">
                <img src="/image/developer.gif" alt="Project Type" width={40} height={40} />
              </div>
              <span className="meta-label">Project Type</span>
              <span className="meta-value">Website</span>
            </div>
            <div className="meta-item">
              <div className="meta-icon">
                <img src="/image/verified.gif" alt="Status" width={40} height={40} />
              </div>
              <span className="meta-label">Status</span>
              <span className="meta-value">Completed</span>
            </div>
            <div className="meta-item">
              <div className="meta-icon">
                <img src="/image/presentation.gif" alt="Role" width={40} height={40} />
              </div>
              <span className="meta-label">Role</span>
              <span className="meta-value">UI/UX Designer</span>
            </div>
            <div className="meta-item">
              <div className="meta-icon">
                <img src="/image/december-31.gif" alt="Year" width={40} height={40} />
              </div>
              <span className="meta-label">Year</span>
              <span className="meta-value">2025</span>
            </div>
          </div>

          <div className="content-section">
            <h3>Project Overview</h3>
            <p>
              Carlos Publishers is a publishing company website redesign project focused on improving the overall user experience, visual consistency, and mobile responsiveness. The existing website faced several usability challenges, including outdated design elements, inconsistent color usage, poor responsive behavior across devices, and navigation issues. The redesign introduced a modern, user-friendly interface that enhances accessibility, readability, and brand presentation while ensuring a seamless experience on desktop, tablet, and mobile devices.
            </p>
          </div>

          <div className="content-section">
            <h3>Key Features</h3>
            <div className="features-grid">
              <div className="feature-card"><h4>Responsive Design</h4><p>Fully optimized layouts for desktop, tablet, and mobile devices, ensuring a consistent user experience across all screen sizes.</p></div>
              <div className="feature-card"><h4>Improved Visual Identity</h4><p>Refined color palette, typography, and visual hierarchy to create a professional and modern brand presence.</p></div>
              <div className="feature-card"><h4>Enhanced Navigation</h4><p>Simplified menu structure and intuitive user flows that help visitors quickly find books, services, and company information.</p></div>
              <div className="feature-card"><h4>Better Content Presentation</h4><p>Organized content sections with improved readability, clear call-to-actions, and engaging layouts to increase user interaction.</p></div>
            </div>
          </div>

          <div className="content-section">
            <h3>Challenges Solved</h3>
            <div className="features-grid">
              <div className="feature-card"><h4>Responsive Issues</h4><p>Resolved layout inconsistencies and display problems across different devices and screen resolutions.</p></div>
              <div className="feature-card"><h4>Design Consistency</h4><p>Established a unified design system with consistent colors, spacing, typography, and components.</p></div>
              <div className="feature-card"><h4>User Experience Improvements</h4><p>Redesigned information architecture and page layouts to reduce user friction and improve navigation efficiency.</p></div>
              <div className="feature-card"><h4>Accessibility Enhancements</h4><p>Improved contrast ratios, readability, and interface clarity for a more inclusive browsing experience.</p></div>
            </div>
          </div>

          <div className="content-section">
            <h3>Technologies Used</h3>
            <div className="technologies">
              <span className="tech-badge">Figma</span>
              <span className="tech-badge">UI/UX Design</span>
              <span className="tech-badge">Responsive Web Design</span>
              <span className="tech-badge">Design System</span>
              <span className="tech-badge">Wireframing & Prototyping</span>
              <span className="tech-badge">User Experience Research</span>
            </div>
          </div>

          {/* Project Documentation */}
          <div className="content-section">
            <h3>Project Documentation</h3>
            <div className="doc-buttons">
              <a href="https://www.figma.com/proto/CCwWMams8kB57ik3TRDYd6/Carlos?node-id=61-188&t=q2MKOKvxjKgvo1qa-1&scaling=scale-down-width&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=1%3A652" className="doc-btn">
                <img
                  src="/image/icon/solar_figma-broken.svg"
                  alt=""
                  width={20}
                  height={20}
                />
                Figma Design
              </a>
            </div>
          </div>
        </div>
      </section>

      <Script src="/script.js"></Script>
    </>
  );
}
