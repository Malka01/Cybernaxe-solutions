'use client';

import Image from "next/image";
import Head from "next/head";
import Script from "next/script";
import Link from "next/link";
import Navbar from "@/components/navbar";
import { useEffect } from "react";

export default function AppparelDetails() {
  return (
    <>
    <Navbar />
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Apparel Printing Management System — Project Details | Danushka Wickramasinghe</title>
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
              <h1 className="project-details-title">Apparel Printing Management System</h1>
              <p className="project-details-subtitle">
                A comprehensive web-based system designed to streamline and digitize business operations for an apparel printing company.
              </p>
            </div>
          </div>

          <div className="project-details-meta">
            <div className="meta-item">
              <div className="meta-icon">
                <img src="/image/developer.gif" alt="Project Type" width={40} height={40} />
              </div>
              <span className="meta-label">Project Type</span>
              <span className="meta-value">Web Application</span>
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
              <span className="meta-value">UI/UX Designer &amp; System Architect</span>
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
              This project involved designing and architecting a comprehensive management system for an apparel printing company. The system was built to digitize and streamline all business operations, from order management and inventory tracking to production scheduling and customer relationship management.
            </p>
          </div>

          <div className="content-section">
            <h3>Key Features</h3>
            <div className="features-grid">
              <div className="feature-card"><h4>Order Management</h4><p>Create, track, and manage customer orders with real-time status updates.</p></div>
              <div className="feature-card"><h4>Inventory System</h4><p>Track fabric stock, printing supplies, and finished goods efficiently.</p></div>
              <div className="feature-card"><h4>Production Scheduling</h4><p>Automated scheduling of production tasks and workforce management.</p></div>
              <div className="feature-card"><h4>Customer Dashboard</h4><p>Customers can view order status, history, and place new orders online.</p></div>
            </div>
          </div>

          <div className="content-section">
            <h3>Technologies Used</h3>
            <div className="technologies">
              <span className="tech-badge">Figma</span>
              <span className="tech-badge">Dashboard Design</span>
              <span className="tech-badge">System Architecture</span>
            </div>
          </div>
          {/* Project Documentation */}
          <div className="content-section">
            <h3>Project Documentation</h3>
            <div className="doc-buttons">
              <a
                href="/project/apparel/Apparel printing management system for carlos embellishers.pdf"
                className="doc-btn"
              >
                <img src="/image/icon/file.svg" alt="" width={20} height={20} />
                Project Report
              </a>
              <a href="https://www.figma.com/design/NeyYEWa2FoU42GX6cjGOlv/Untitled?node-id=0-1&t=ymj0H0zcfQEIrO5U-1" className="doc-btn">
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
