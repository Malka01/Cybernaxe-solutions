'use client';

import Image from "next/image";
import Head from "next/head";
import Script from "next/script";
import Link from "next/link";
import Navbar from "@/components/navbar";
import { useEffect } from "react";

export default function GobusDetails() {
  return (
    <>
    <Navbar />
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>GO BUS Mobile App — Project Details | Danushka Wickramasinghe</title>
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
              <h1 className="project-details-title">GO BUS Mobile App</h1>
              <p className="project-details-subtitle">
                A modern bus tracking and booking application for Sri Lanka with real-time routes, seat selection, and live arrival updates.
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
              GO BUS is a comprehensive mobile application designed to transform public transportation in Sri Lanka. The app provides real-time bus tracking, route information, seat availability, and seamless booking capabilities.
            </p>
          </div>

          <div className="content-section">
            <h3>Key Features</h3>
            <div className="features-grid">
              <div className="feature-card"><h4>Live Bus Tracking</h4><p>Real-time GPS tracking of buses on their routes with live location updates.</p></div>
              <div className="feature-card"><h4>Route Discovery</h4><p>Search and discover bus routes with detailed stop information and schedules.</p></div>
              <div className="feature-card"><h4>Seat Selection</h4><p>Interactive seat map with real-time availability and instant booking.</p></div>
              <div className="feature-card"><h4>Arrival Alerts</h4><p>Get notifications when your bus is approaching your destination.</p></div>
            </div>
          </div>

          <div className="content-section">
            <h3>Technologies Used</h3>
            <div className="technologies">
              <span className="tech-badge">Figma</span>
              <span className="tech-badge">Mobile Design</span>
              <span className="tech-badge">Transit App</span>
            </div>
          </div>
          </div>
          {/* Project Documentation */}
          <div className="content-section">
            <h3>Project Documentation</h3>
            <div className="doc-buttons">
              {/* <a
                href="/project/apparel/Apparel printing management system for carlos embellishers.pdf"
                className="doc-btn"
              >
                <img src="/image/icon/file.svg" alt="" width={20} height={20} />
                Project Report
              </a> */}
              <a href="https://www.figma.com/design/ia3B4v9VsC3k8nV3C0i6SD/Go-Bus?node-id=38-155&t=Iq9AtiIM3CAopgdg-1" className="doc-btn">
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
      </section>

      <Script src="/script.js"></Script>
    </>
  );
}
