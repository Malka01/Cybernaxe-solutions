'use client';

import Image from "next/image";
import Head from "next/head";
import Script from "next/script";
import Link from "next/link";
import Navbar from "@/components/navbar";
import { useEffect } from "react";

export default function SafelinkDetails() {
  return (
    <>
    <Navbar />
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>SafeLink App — Project Details | Danushka Wickramasinghe</title>
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
              <h1 className="project-details-title">SafeLink App</h1>
              <p className="project-details-subtitle">
                An emergency response mobile application with automatic accident detection, satellite communication, and real-time emergency support.
              </p>
            </div>
          </div>

          <div className="project-details-meta">
            <div className="meta-item">
              <div className="meta-icon">
                <img src="/image/developer.gif" alt="Project Type" width={40} height={40} />
              </div>
              <span className="meta-label">Project Type</span>
              <span className="meta-value">Mobile App</span>
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
              <span className="meta-value">2024</span>
            </div>
          </div>

          <div className="content-section">
            <h3>Project Overview</h3>
            <p>
              SafeLink is an innovative emergency response application designed to provide immediate assistance during emergencies. The app uses advanced accident detection technology, integrates satellite communication for remote areas, and connects users with emergency services in real-time.
            </p>
          </div>

          <div className="content-section">
            <h3>Key Features</h3>
            <div className="features-grid">
              <div className="feature-card"><h4>Accident Detection</h4><p>Automatic detection of accidents using accelerometer and impact sensors.</p></div>
              <div className="feature-card"><h4>Emergency SOS</h4><p>One-tap emergency button to alert contacts and emergency services.</p></div>
              <div className="feature-card"><h4>Location Tracking</h4><p>Real-time GPS location sharing with emergency responders.</p></div>
              <div className="feature-card"><h4>Satellite Communication</h4><p>Works in remote areas with limited cellular coverage.</p></div>
            </div>
          </div>

          <div className="content-section">
            <h3>Technologies Used</h3>
            <div className="technologies">
              <span className="tech-badge">Figma</span>
              <span className="tech-badge">UI/UX</span>
              <span className="tech-badge">Mobile</span>
            </div>
          </div>
          {/* Project Documentation */}
          <div className="content-section">
            <h3>Project Documentation</h3>
            <div className="doc-buttons">
              <a
                href="/project/safelink/safelink.pptx"
                className="doc-btn"
              >
                <img src="/image/icon/file.svg" alt="" width={20} height={20} />
                Project Report
              </a>
              <a href="https://www.figma.com/proto/MAqINcUUtCdqY3DrHJAU13/Safe-Link?node-id=706-67&t=dBc8H6Gdro0lYlD6-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=706%3A67" className="doc-btn">
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
