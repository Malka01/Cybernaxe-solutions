'use client';

import Head from "next/head";
import Script from "next/script";
import Link from "next/link";
import Navbar from "@/components/navbar";

export default function SmartBabyRoomDetails() {

  return (
    <>
      <Navbar />

      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Smart Baby Room — Project Details | Danushka Wickramasinghe</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
        <link rel="stylesheet" href="/style.css" />
      </Head>

      {/* Mobile menu (REMOVE closeMenu usage) */}
      <div className="mobile-menu" id="mobileMenu">
        <a href="/#about">About</a>
        <a href="/#tools">Tools</a>
        <a href="/#projects">Projects</a>
        <a href="/#gallery">Gallery</a>
        <a href="/#education">Education</a>
        <a href="/#contact">Contact</a>
      </div>

      <section className="project-details-section">
        <div className="container">

          <div className="project-details-header">
            <Link href="/" className="header-back-icon">
              <img src="/image/icon/arrow left.svg" alt="Back" width={24} height={24} />
              <span>Back</span>
            </Link>

            <div>
              <h1 className="project-details-title">Smart Baby Room</h1>
              <p className="project-details-subtitle">
                An IoT system monitoring a baby's room environment with temperature, humidity, and sound sensors, featuring Telegram Bot alerts for parents.
              </p>
            </div>
          </div>

          <div className="project-details-meta">
            <div className="meta-item">
              <span className="meta-label">Project Type</span>
              <span className="meta-value">IoT System</span>
            </div>

            <div className="meta-item">
              <span className="meta-label">Status</span>
              <span className="meta-value">Completed</span>
            </div>

            <div className="meta-item">
              <span className="meta-label">Role</span>
              <span className="meta-value">IoT Developer</span>
            </div>

            <div className="meta-item">
              <span className="meta-label">Year</span>
              <span className="meta-value">2024</span>
            </div>
          </div>

          <div className="content-section">
            <h3>Project Overview</h3>
            <p>
              Smart Baby Room is an innovative IoT project designed to monitor and track environmental conditions in a baby's room.
            </p>
          </div>

          <div className="content-section">
            <h3>Key Features</h3>

            <div className="features-grid">
              <div className="feature-card">
                <h4>Temperature Monitoring</h4>
                <p>Real-time temperature tracking with alerts.</p>
              </div>

              <div className="feature-card">
                <h4>Humidity Sensor</h4>
                <p>Maintain optimal humidity levels.</p>
              </div>

              <div className="feature-card">
                <h4>Sound Detection</h4>
                <p>Detects baby cries or unusual sound.</p>
              </div>

              <div className="feature-card">
                <h4>Telegram Alerts</h4>
                <p>Instant notifications to parents.</p>
              </div>
            </div>
          </div>

          <div className="video-section">
            <div className="video-card">
              <iframe
                src="https://www.youtube.com/embed/vMGGejP0EPY?autoplay=1&mute=1&loop=1&playlist=vMGGejP0EPY"
                title="Portfolio Video"
                frameBorder="0"
                allow="autoplay; encrypted-media"
                allowFullScreen
              />
            </div>
          </div>

          <div className="content-section">
            <h3>Technologies Used</h3>
            <div className="technologies">
              <span className="tech-badge">Arduino</span>
              <span className="tech-badge">Sensors</span>
              <span className="tech-badge">Telegram Bot</span>
            </div>
          </div>

          {/* Documentation */}
          <div className="content-section">
            <h3>Project Documentation</h3>

            <div className="doc-buttons">
              <a href="/project/babyroom/Smart baby room.pdf" className="doc-btn">
                <img src="/image/icon/file.svg" alt="" width={20} height={20} />
                Project Report
              </a>
            </div>
          </div>

        </div>
      </section>

      <Script src="/script.js" />
    </>
  );
}