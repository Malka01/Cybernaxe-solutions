'use client';

import Image from "next/image";
import Head from "next/head";
import Script from "next/script";
import Link from "next/link";
import Navbar from "@/components/navbar";
import { useEffect } from "react";

export default function NeohouseDetails() {
  return (
    <>
    <Navbar />
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>SriLankan Airlines Website — Project Details | Danushka Wickramasinghe</title>
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
              <h1 className="project-details-title">SriLankan Airlines Website</h1>
              <p className="project-details-subtitle">
               A modern airline website concept designed for SriLankan Airlines, focusing on seamless flight booking, travel exploration, and a smooth user experience inspired by premium aviation interfaces.
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
              <span className="meta-value">2026</span>
            </div>
          </div>

          <div className="content-section">
            <h3>Project Overview</h3>
            <p>
             This project is a UI/UX redesign concept for the official homepage of SriLankan Airlines. The goal was to create a clean, intuitive, and conversion-focused travel experience that enhances flight booking, destination discovery, and customer engagement.
            </p>
          </div>

          <div className="content-section">
            <h3>Key Features</h3>
            <div className="features-grid">
              <div className="feature-card"><h4>Flight Search & Booking</h4><p>Easy-to-use flight search system with destination, date, and passenger selection.</p></div>
              <div className="feature-card"><h4>Destination Highlights</h4><p>Showcase of popular travel destinations with engaging visuals and offers.</p></div>
              <div className="feature-card"><h4>Offers & Promotions</h4><p>Dynamic section for seasonal deals, discounts, and travel packages.</p></div>
              <div className="feature-card"><h4>Manage Booking</h4><p>Quick access for users to view, modify, or cancel bookings.</p></div>
            </div>
          </div>

          <div className="content-section">
            <h3>Technologies Used</h3>
            <div className="technologies">
              <span className="tech-badge">Figma</span>
              <span className="tech-badge">UI/UX Design</span>
              <span className="tech-badge">Travel/Aviation Concept</span>
              <span className="tech-badge">Web Design</span>
            </div>
          </div>
          {/* Project Documentation */}
          <div className="content-section">
            <h3>Project Documentation</h3>
            <div className="doc-buttons">
              {/* <a
                href="/project/babyroom/Smart baby room.pdf"
                className="doc-btn"
              >
                <img src="/image/icon/file.svg" alt="" width={20} height={20} />
                Project Report
              </a> */}
              <a href="https://www.figma.com/design/6jsjW5OI22Oz8kmwMuEYp4/Sri-Lankan-Airline?node-id=2-670&t=mzKZJ1orF8k3zNVi-1" className="doc-btn">
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
