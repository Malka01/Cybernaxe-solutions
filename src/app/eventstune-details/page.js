'use client';

import Image from "next/image";
import Head from "next/head";
import Script from "next/script";
import Link from "next/link";
import Navbar from "@/components/navbar";
import { useEffect } from "react";

export default function EventstuneDetails() {
  return (
    <>
      <Navbar />
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Eventstune.lk — Project Details | Danushka Wickramasinghe</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
        <link rel="stylesheet" href="/style.css" />
      </Head>

      {/* ─── PROJECT DETAILS ─── */}
      <section className="project-details-section">
        <div className="container">
          <div className="project-details-header">
            <Link href="/" className="header-back-icon">
              <img
                src="/image/icon/arrow left.svg"
                alt="Back to Projects"
                width={24}
                height={24}
              />
              <span>Back</span>
            </Link>
            <div>
              <h1 className="project-details-title">Eventstune.lk</h1>
              <p className="project-details-subtitle">
                A modern event management and artist booking platform designed to
                connect event organizers, performers, and audiences through a
                seamless digital experience.
              </p>
            </div>
          </div>

          <div className="project-details-meta">
            <div className="meta-item">
              <div className="meta-icon">
                <img
                  src="/image/developer.gif"
                  alt="Project Type"
                  width={40}
                  height={40}
                />
              </div>
              <span className="meta-label">Project Type</span>
              <span className="meta-value">Website</span>
            </div>
            <div className="meta-item">
              <div className="meta-icon">
                <img
                  src="/image/verified.gif"
                  alt="Status"
                  width={40}
                  height={40}
                />
              </div>
              <span className="meta-label">Status</span>
              <span className="meta-value">Completed</span>
            </div>
            <div className="meta-item">
              <div className="meta-icon">
                <img
                  src="/image/presentation.gif"
                  alt="Role"
                  width={40}
                  height={40}
                />
              </div>
              <span className="meta-label">Role</span>
              <span className="meta-value">UI/UX Designer &amp; Developer</span>
            </div>
            <div className="meta-item">
              <div className="meta-icon">
                <img
                  src="/image/december-31.gif"
                  alt="Year"
                  width={40}
                  height={40}
                />
              </div>
              <span className="meta-label">Year</span>
              <span className="meta-value">2025</span>
            </div>
          </div>

          {/* Overview */}
          <div className="content-section">
            <h3>Project Overview</h3>
            <p>
              Eventstune.lk is a modern event management and artist booking platform
              designed to connect event organizers, performers, and audiences
              through a seamless digital experience. The platform simplifies event
              planning, artist discovery, and booking management while providing
              performers with a professional space to showcase their talent.
            </p>
            <p>
              The system was designed with a strong focus on usability,
              accessibility, and user experience, ensuring smooth interaction for
              both organizers and artists across multiple devices.
            </p>
          </div>

          {/* Key Features */}
          <div className="content-section">
            <h3>Key Features</h3>
            <div className="features-grid">
              <div className="feature-card">
                <h4>Event Management</h4>
                <p>
                  Create, organize, and manage events through an efficient and
                  user-friendly workflow.
                </p>
              </div>
              <div className="feature-card">
                <h4>Artist Profiles</h4>
                <p>
                  Professional profiles for artists to showcase their experience,
                  media, and performance details.
                </p>
              </div>
              <div className="feature-card">
                <h4>Music Bands Section</h4>
                <p>
                  Dedicated space for music bands to promote their work and connect
                  with event organizers.
                </p>
              </div>
              <div className="feature-card">
                <h4>Dance Teams Section</h4>
                <p>
                  Platform for dance groups to display performances and booking
                  availability.
                </p>
              </div>
              <div className="feature-card">
                <h4>Singers Section</h4>
                <p>Specialized profiles for singers and vocal performers.</p>
              </div>
              <div className="feature-card">
                <h4>Secure Authentication</h4>
                <p>
                  Secure login and registration system with role-based access
                  management.
                </p>
              </div>
              <div className="feature-card">
                <h4>Responsive Design</h4>
                <p>
                  Optimized user experience across desktop, tablet, and mobile
                  devices.
                </p>
              </div>
              <div className="feature-card">
                <h4>Modern UI/UX</h4>
                <p>
                  Clean and intuitive interface focused on accessibility, usability,
                  and visual consistency.
                </p>
              </div>
            </div>
          </div>

          {/* Technologies Used */}
          <div className="content-section">
            <h3>Technologies Used</h3>
            <div className="technologies">
              <span className="tech-badge">HTML5</span>
              <span className="tech-badge">CSS3</span>
              <span className="tech-badge">JavaScript</span>
              <span className="tech-badge">PHP</span>
            </div>
          </div>

          {/* Project Gallery */}
          <div className="content-section">
            <h3>Project Gallery</h3>
            <div className="gallery-grid">
              <div className="gallery-item">
                <img src="/project/eventtunes/homepage.jpg"
                 alt="Homepage" />
                <div className="gallery-label">Homepage</div>
              </div>
              {/* <div className="gallery-item">
                <img
                  src="/project/evettunes/dancingteams.jpg"
                  alt="Event Discovery Page"
                />
                <div className="gallery-label">Event Discovery Page</div>
              </div> */}
              <div className="gallery-item">
                <img src="/project/eventtunes/music bands.jpg" alt="Artist Directory" />
                <div className="gallery-label">Artist Directory</div>
              </div>
              <div className="gallery-item">
                <img
                  src="/project/eventtunes/music bands.jpg"
                  alt="Music Bands Section"
                />
                <div className="gallery-label">Music Bands Section</div>
              </div>
              <div className="gallery-item">
                <img
                  src="/project/eventtunes/dance.jpg"
                  alt="Dance Teams Section"
                />
                <div className="gallery-label">Dance Teams Section</div>
              </div>
              <div className="gallery-item">
                <img src="/project/eventtunes/singers.jpg" alt="Singers Section" />
                <div className="gallery-label">Singers Section</div>
              </div>
              <div className="gallery-item">
                <img src="/project/eventtunes/Artist login.jpg" alt="Login Page" />
                <div className="gallery-label">Login Page</div>
              </div>
              <div className="gallery-item">
                <img src="/project/eventtunes/Artist sign up.jpg" alt="Artist Sign Up" />
                <div className="gallery-label">Artist Sign Up</div>
              </div>
              <div className="gallery-item">
                <img
                  src="/project/eventtunes/organizer login.jpg"
                  alt="Organization Registration"
                />
                <div className="gallery-label">Organization Registration</div>
              </div>
            </div>
          </div>

          {/* Project Documentation */}
          <div className="content-section">
            <h3>Project Documentation</h3>
            <div className="doc-buttons">
              <a
                 href="/project/eventtunes/eventstuneslk.pdf"
                className="doc-btn"
              >
                <img src="/image/icon/file.svg" alt="" width={20} height={20} />
                Project Report
              </a>
              {/* <a href="#" className="doc-btn">
                <img
                  src="/image/icon/solar_figma-broken.svg"
                  alt=""
                  width={20}
                  height={20}
                />
                Figma Design
              </a> */}
              <a href="https://github.com/Danush1236/Eventstune.lk" className="doc-btn">
                <img
                  src="/image/icon/git.png"
                  alt="GitHub Repository"
                  width={20}
                  height={20}
                />
                GitHub Repository
              </a>
            </div>
          </div>
        </div>
      </section>

      <Script src="/script.js"></Script>
    </>
  );
}
