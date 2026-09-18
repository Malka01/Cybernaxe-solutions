/* eslint-disable @next/next/no-page-custom-font */
/* eslint-disable @next/next/no-css-tags */
/* eslint-disable @next/next/no-img-element */
'use client';
import "./globals.css";
import emailjs from "@emailjs/browser";
import Image from "next/image";
import Head from "next/head";
import Script from "next/script";
import Link from "next/link";
import Navbar from "@/components/navbar";
import { useEffect, useState } from "react";

export default function Home() {
  const [chatOpen, setChatOpen] = useState(false);
  const [isSending, setIsSending] = useState(false);

  const openChat = () => setChatOpen(true);
  const closeChat = () => setChatOpen(false);

  const showToast = (type, icon, title, sub) => {
    if (typeof window !== "undefined" && typeof window.showToast === "function") {
      window.showToast(type, icon, title, sub);
    }
  };

  const closeToast = () => {
    if (typeof window !== "undefined" && typeof window.hideToast === "function") {
      window.hideToast();
    }
  };

  // Top of file — remove emailjs import if no longer used:
// import emailjs from "@emailjs/browser";

const handleSubmit = async (e) => {
  e.preventDefault();

  const url = process.env.NEXT_PUBLIC_GOOGLE_SCRIPT_URL;

  if (!url) {
    showToast(
      "error",
      "⚠️",
      "Form not configured",
      "Contact form is temporarily unavailable."
    );
    return;
  }

  const payload = {
    name:    e.target.name.value.trim(),
    email:   e.target.email.value.trim(),
    subject: e.target.subject.value.trim(),
    message: e.target.message.value.trim(),
    source:  "Cybernaxe Website",
    page:    "Homepage",
  };

  if (!payload.name || !payload.email || !payload.message) {
    showToast("error", "⚠️", "Missing fields", "Please fill in all required fields.");
    return;
  }

  setIsSending(true);

  try {
    // no-cors → we cannot read the response. Treat as fire-and-forget.
    await fetch(url, {
      method: "POST",
      mode: "no-cors",
      headers: { "Content-Type": "text/plain;charset=utf-8" },
      body: JSON.stringify(payload),
    });

    e.target.reset();
    showToast(
      "success",
      "🎉",
      "Message Sent!",
      "We'll get back to you within 24 hours."
    );
  } catch (error) {
    console.error("SUBMIT ERROR:", error);
    showToast(
      "error",
      "⚠️",
      "Message not sent",
      "Please try again or email us directly."
    );
  } finally {
    setIsSending(false);
  }
};

  useEffect(() => {
    window.scrollTo(0, 0);

    setTimeout(() => {
      document.querySelectorAll('.reveal').forEach(el => {
        el.classList.remove('visible');
      });

      const observer = new IntersectionObserver((entries) => {
        entries.forEach(el => {
          if (el.isIntersecting) {
            el.target.classList.add('visible');
          }
        });
      }, { threshold: 0.15 });

      document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
    }, 0);
  }, []);

  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Cybernaxe Solutions | AI Agents & Business Automation</title>
        <meta
          name="description"
          content="Cybernaxe Solutions builds AI agents, business automation systems, custom software and modern web applications that help businesses automate customer communication, leads, bookings and repetitive workflows."
        />
        <meta property="og:title" content="Cybernaxe Solutions | AI Agents & Business Automation" />
        <meta
          property="og:description"
          content="AI agents, business automation, custom software and modern web applications."
        />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/image/cybernaxe-og.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
        <link rel="stylesheet" href="/style.css" />
      </Head>

      <Navbar />

      {/* ─── HERO ─── */}
      <section id="hero">
        <div className="hero-bg">
          <div className="hero-blob hero-blob-1" />
          <div className="hero-blob hero-blob-2" />
          <div className="hero-blob hero-blob-3" />
        </div>

        <div className="container">
          <div className="hero-grid">
            <div className="hero-content">
              <div className="hero-badge">
                {/* AI Automation • Custom Software • Web Applications */}
                Site Currently Development Pharse But You can Contact via Whats App Contact Form
              </div>

              <h1 className="hero-title">
                Build Smarter.
                <br />
                <span className="name">Automate Your Business.</span>
              </h1>

              <div className="hero-role">
                AI Agents & Business Automation
              </div>

              <p className="hero-sub">
                We help businesses automate customer communication, capture and
                qualify leads, manage bookings, and streamline repetitive workflows
                with AI-powered solutions and modern software.
              </p>

              <div className="hero-actions">
                <a href="#solutions" className="btn btn-primary">
                  <svg width={16} height={16} fill="none" viewBox="0 0 24 24"
                    stroke="currentColor" strokeWidth="2.5">
                    <path d="M4 6a2 2 0 012-2h12a2 2 0 012 2v12a2 2 0 01-2 2H6a2 2 0 01-2-2V6z" />
                    <path d="M4 10h16M10 4v16" />
                  </svg>
                  Explore Solutions
                </a>

                <a href="#contact" className="btn btn-secondary">
                  <svg width={16} height={16} fill="none" viewBox="0 0 24 24"
                    stroke="currentColor" strokeWidth="2.5">
                    <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  Start a Project
                </a>
              </div>

              <div className="hero-stats">
                <div>
                  <div className="hero-stat-num">AI</div>
                  <div className="hero-stat-label">Automation</div>
                </div>
                <div>
                  <div className="hero-stat-num">Web</div>
                  <div className="hero-stat-label">Applications</div>
                </div>
                <div>
                  <div className="hero-stat-num">Custom</div>
                  <div className="hero-stat-label">Solutions</div>
                </div>
              </div>
            </div>
          </div>

          <div className="scroll-indicator">
            <div className="scroll-text">Explore</div>
            <div className="scroll-mouse">
              <div className="mouse-wheel" />
            </div>
          </div>
        </div>
      </section>

      {/* ─── ABOUT CYBERNAXE ─── */}
      <section id="about">
        <div className="container">
          <div className="section-label">About Cybernaxe</div>

          <div className="about-grid">
            <div className="about-text reveal">
              <h2 className="section-title">
                Technology That Solves <span>Real Business Problems</span>
              </h2>

              <p>
                Cybernaxe Solutions is a technology studio focused on AI-powered
                automation, custom software, and modern web applications.
              </p>

              <p>
                We build practical digital solutions that help businesses reduce
                repetitive work, improve customer communication, capture leads,
                manage bookings, and organize their everyday operations.
              </p>

              <p>
                Our approach combines modern web technologies with artificial
                intelligence to create solutions around the actual workflow of each
                business — rather than forcing businesses to adapt to generic software.
              </p>

              <p>
                From AI agents and knowledge assistants to dashboards, POS systems,
                booking platforms, and business websites, we turn ideas and
                operational challenges into working digital products.
              </p>
            </div>

            <div className="skills-grid reveal reveal-delay-2">
              <div className="skill-card">
                <div className="skill-icon">🤖</div>
                <div className="skill-name">AI Automation</div>
                <div className="skill-desc">
                  Automate customer communication, lead qualification, bookings and
                  repetitive workflows.
                </div>
              </div>

              <div className="skill-card">
                <div className="skill-icon">💬</div>
                <div className="skill-name">AI Agents</div>
                <div className="skill-desc">
                  Intelligent assistants connected to your business information and
                  workflows.
                </div>
              </div>

              <div className="skill-card">
                <div className="skill-icon">💻</div>
                <div className="skill-name">Custom Software</div>
                <div className="skill-desc">
                  Dashboards, management systems, APIs and internal business tools.
                </div>
              </div>

              <div className="skill-card">
                <div className="skill-icon">🌐</div>
                <div className="skill-name">Web Applications</div>
                <div className="skill-desc">
                  Modern, responsive websites and web apps designed around business goals.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── SOLUTIONS ─── */}
      <section id="solutions">
        <div className="container">
          <div className="section-label">What We Build</div>
          <h2 className="section-title">
            Solutions for <span>Growing Businesses</span>
          </h2>

          <div className="tools-grid">
            <div className="tool-card reveal">
              <div className="skill-icon">🤖</div>
              <div className="tool-name">AI Agents</div>
              <div className="tool-tooltip">Intelligent business assistants</div>
              <p>
                Customer support, lead qualification, knowledge assistants and
                task automation.
              </p>
            </div>

            <div className="tool-card reveal reveal-delay-1">
              <div className="skill-icon">⚙️</div>
              <div className="tool-name">Business Automation</div>
              <div className="tool-tooltip">Automate repetitive workflows</div>
              <p>
                Connect forms, databases, APIs, CRM systems, notifications and
                AI workflows.
              </p>
            </div>

            <div className="tool-card reveal reveal-delay-2">
              <div className="skill-icon">💻</div>
              <div className="tool-name">Custom Software</div>
              <div className="tool-tooltip">Built around your workflow</div>
              <p>
                Dashboards, POS systems, management platforms and internal
                business tools.
              </p>
            </div>

            <div className="tool-card reveal">
              <div className="skill-icon">🌐</div>
              <div className="tool-name">Web Applications</div>
              <div className="tool-tooltip">Modern digital experiences</div>
              <p>
                Business websites, e-commerce platforms, booking systems and
                web applications.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── AI AGENTS ─── */}
      <section id="ai-agents">
        <div className="container">
          <div className="section-label">AI Automation</div>
          <h2 className="section-title">
            Your Business, <span>Working Smarter</span>
          </h2>

          <p style={{ maxWidth: 720, marginBottom: 32, color: "var(--text-secondary)" }}>
            AI agents handle repetitive customer and business workflows while
            keeping your team in control.
          </p>

          <div className="projects-grid">
            <div className="project-card reveal">
              <div className="project-body">
                <div className="project-title">Customer Support Agent</div>
                <div className="project-desc">
                  Answers common customer questions using your own business
                  information and provides consistent responses around the clock.
                </div>
                <div className="project-tags">
                  <span className="tag">AI</span>
                  <span className="tag">RAG</span>
                  <span className="tag">Knowledge Base</span>
                </div>
              </div>
            </div>

            <div className="project-card reveal reveal-delay-1">
              <div className="project-body">
                <div className="project-title">Lead Qualification Agent</div>
                <div className="project-desc">
                  Captures customer information, understands requirements,
                  qualifies potential leads and sends structured data to your team.
                </div>
                <div className="project-tags">
                  <span className="tag">AI Agent</span>
                  <span className="tag">Lead Generation</span>
                  <span className="tag">Automation</span>
                </div>
              </div>
            </div>

            <div className="project-card reveal reveal-delay-2">
              <div className="project-body">
                <div className="project-title">Booking Agent</div>
                <div className="project-desc">
                  Helps customers with availability, collects booking details
                  and connects the conversation to your booking workflow.
                </div>
                <div className="project-tags">
                  <span className="tag">AI</span>
                  <span className="tag">Bookings</span>
                  <span className="tag">API</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── CASE STUDIES ─── */}
      <section id="projects">
        <div className="container">
          <div className="section-label">Our Work</div>
          <h2 className="section-title">
            Selected <span>Case Studies</span>
          </h2>

          {/* <div className="projects-grid">
            <div
              className="project-card reveal"
              onClick={() => window.open('https://aj-website-alpha.vercel.app/', '_blank')}
              style={{ cursor: 'pointer' }}
            >
              <div className="project-img">
                <img src="/image/AJ_saloon.png" alt="AJ Saloon Web Application" className="project-image" />
                <div className="project-type">Website</div>
              </div>
              <div className="project-body">
                <div className="project-title">AJ Saloon Web Application</div>
                <div className="project-desc">
                  A full-stack web application for AJ Salon featuring online appointment
                  booking, customer management, and secure cloud-based booking management.
                </div>
                <div className="project-tags">
                  <span className="tag">Next.js</span>
                  <span className="tag">React.js</span>
                  <span className="tag">JavaScript</span>
                </div>
                <div className="project-cta">View Website</div>
              </div>
            </div>

            <Link href="/eventstune-details">
              <div className="project-card reveal reveal-delay-1">
                <div className="project-img">
                  <img src="/image/project/event tune.jpg" alt="Eventstune.lk" className="project-image" />
                  <div className="project-type">Website</div>
                </div>
                <div className="project-body">
                  <div className="project-title">Eventstune.lk</div>
                  <div className="project-desc">
                    An event discovery and ticketing platform for Sri Lanka — browse, book
                    and manage event listings seamlessly.
                  </div>
                  <div className="project-tags">
                    <span className="tag">HTML</span>
                    <span className="tag">CSS</span>
                    <span className="tag">JavaScript</span>
                    <span className="tag">PHP</span>
                  </div>
                  <div className="project-cta">View Details</div>
                </div>
              </div>
            </Link>

            <Link href="/safelink-details">
              <div className="project-card reveal reveal-delay-2">
                <div className="project-img">
                  <img src="/image/project/safelink.jpg" alt="SafeLink App" className="project-image" />
                  <div className="project-type">Mobile App</div>
                </div>
                <div className="project-body">
                  <div className="project-title">SafeLink App</div>
                  <div className="project-desc">
                    An emergency response mobile application with automatic accident
                    detection, satellite communication and real-time emergency support.
                  </div>
                  <div className="project-tags">
                    <span className="tag">UI/UX</span>
                    <span className="tag">Mobile</span>
                  </div>
                  <div className="project-cta">View Details</div>
                </div>
              </div>
            </Link>

            <Link href="/apparel-details">
              <div className="project-card reveal">
                <div className="project-img">
                  <img src="/image/project/apperal.jpg" alt="Apparel Printing Management System" className="project-image" />
                  <div className="project-type">Web Application</div>
                </div>
                <div className="project-body">
                  <div className="project-title">Apparel Printing Management System</div>
                  <div className="project-desc">
                    A web-based management system digitizing and streamlining business
                    operations for an apparel printing company.
                  </div>
                  <div className="project-tags">
                    <span className="tag">Dashboard</span>
                    <span className="tag">System Design</span>
                  </div>
                  <div className="project-cta">View Details</div>
                </div>
              </div>
            </Link>

            <Link href="/smart-baby-room-details">
              <div className="project-card reveal reveal-delay-1">
                <div className="project-img">
                  <img src="/image/project/baby room.png" alt="Smart Baby Room" className="project-image" />
                  <div className="project-type">IoT</div>
                </div>
                <div className="project-body">
                  <div className="project-title">Smart Baby Room</div>
                  <div className="project-desc">
                    An IoT system monitoring a baby&apos;s room environment — temperature,
                    humidity, sound — with Telegram Bot alerts for parents.
                  </div>
                  <div className="project-tags">
                    <span className="tag">Arduino</span>
                    <span className="tag">Sensors</span>
                    <span className="tag">Telegram Bot</span>
                  </div>
                  <div className="project-cta">View Details</div>
                </div>
              </div>
            </Link>

            <Link href="/gobus-details">
              <div className="project-card reveal reveal-delay-2">
                <div className="project-img">
                  <img src="/image/project/gobus.png" alt="GO BUS Mobile App" className="project-image" />
                  <div className="project-type">Mobile App</div>
                </div>
                <div className="project-body">
                  <div className="project-title">GO BUS Mobile App</div>
                  <div className="project-desc">
                    A modern bus tracking and booking app for Sri Lanka — real-time routes,
                    seat selection and live arrival updates.
                  </div>
                  <div className="project-tags">
                    <span className="tag">Mobile</span>
                    <span className="tag">Transit</span>
                  </div>
                  <div className="project-cta">View Details</div>
                </div>
              </div>
            </Link>

            <Link href="/neohouse-details">
              <div className="project-card reveal">
                <div className="project-img">
                  <img src="/image/project/airline.png" alt="Sri Lanka Airline Website" className="project-image" />
                  <div className="project-type">Website</div>
                </div>
                <div className="project-body">
                  <div className="project-title">Sri Lanka Airline Website</div>
                  <div className="project-desc">
                    A modern airline website concept with flight booking, check-in and
                    travel information features.
                  </div>
                  <div className="project-tags">
                    <span className="tag">UI/UX Design</span>
                    <span className="tag">Web Design</span>
                  </div>
                  <div className="project-cta">View Details</div>
                </div>
              </div>
            </Link>

            <Link href="/carlos-publishers-details">
              <div className="project-card reveal">
                <div className="project-img">
                  <img src="/image/project/apperal.jpg" alt="Carlos Publishers Website Redesign" className="project-image" />
                  <div className="project-type">Website</div>
                </div>
                <div className="project-body">
                  <div className="project-title">Carlos Publishers Website Redesign</div>
                  <div className="project-desc">
                    Redesigned the Carlos Publishers website to improve responsiveness,
                    visual consistency, usability and overall user experience.
                  </div>
                  <div className="project-tags">
                    <span className="tag">UI/UX Design</span>
                    <span className="tag">Responsive</span>
                  </div>
                  <div className="project-cta">View Details</div>
                </div>
              </div>
            </Link>
          </div> */}
        </div>
      </section>

      {/* ─── HOW WE WORK ─── */}
      <section id="process">
        <div className="container">
          <div className="section-label">Our Process</div>
          <h2 className="section-title">
            From Idea to <span>Automation</span>
          </h2>

          <div className="skills-grid">
            <div className="skill-card reveal">
              <div className="skill-icon">01</div>
              <div className="skill-name">Discover</div>
              <div className="skill-desc">
                Understand your business, customers and repetitive workflows.
              </div>
            </div>

            <div className="skill-card reveal reveal-delay-1">
              <div className="skill-icon">02</div>
              <div className="skill-name">Design</div>
              <div className="skill-desc">
                Design the solution and define the automation workflow.
              </div>
            </div>

            <div className="skill-card reveal reveal-delay-2">
              <div className="skill-icon">03</div>
              <div className="skill-name">Build</div>
              <div className="skill-desc">
                Develop the AI agent, software or web application.
              </div>
            </div>

            <div className="skill-card reveal">
              <div className="skill-icon">04</div>
              <div className="skill-name">Automate</div>
              <div className="skill-desc">
                Connect the system with your existing business workflow.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── UPCOMING ─── */}
      <section id="upcoming-projects" className="upcoming-section">
        <div className="section-title">
          <h2>Upcoming Projects</h2>
          <p>
            A preview of ongoing work where AI and software concepts evolve into
            functional, business-ready solutions.
          </p>
        </div>

        {/* <div className="upcoming-card">
          <div className="upcoming-media">
            <div className="upcoming-image desktop-img" aria-hidden="true">
              <Image
                src="/image/srilanka.png"
                alt="Sri Lanka"
                fill
                priority
                sizes="(max-width: 768px) 100vw, 1300px"
                className="upcoming-image-content"
              />
            </div>

            <div className="upcoming-image mobile-img" aria-hidden="true">
              <Image
                src="/image/srilanka-mobile1.png"
                alt="Sri Lanka Mobile"
                fill
                sizes="(max-width: 768px) 100vw, 600px"
                className="upcoming-image-content"
              />
            </div>
          </div>

          <div className="overlay">
            <span className="status">Coming Soon</span>
            <h3>Rebuild Lanka</h3>
            <p>
              A smart community reporting platform enabling citizens to report
              public issues, track resolutions and collaborate with local
              authorities to build better communities.
            </p>
            <div className="tech">AI • Next.js • React.js</div>
          </div>
        </div> */}
      </section>

      {/* ─── CONTACT ─── */}
      <section id="contact">
        <div className="container">
          <div className="section-label">Start a Project</div>
          <h2 className="section-title">
            Let&apos;s Build Something <span>Smarter</span>
          </h2>

          <div className="contact-grid">
            <div className="contact-info reveal">
              <p>
                Have a repetitive business process, customer communication problem,
                booking workflow or software idea? Tell us what you&apos;re trying to solve.
                We&apos;ll explore how AI and modern software can help.
              </p>

              <div className="contact-items">
                <div className="contact-item">
                  <div className="contact-icon">
                    <Image src="/image/icon/mail1.gif" alt="Email" width={24} height={24} unoptimized />
                  </div>
                  <div>
                    <div className="contact-item-label">Email</div>
                    <div className="contact-item-value">cybernaxesolutions@gmail.com</div>
                  </div>
                </div>

                <div className="contact-item">
                  <div className="contact-icon">
                    <Image src="/image/icon/whatsapp.gif" alt="WhatsApp" width={24} height={24} unoptimized />
                  </div>
                  <div>
                    <div className="contact-item-label">Phone / WhatsApp</div>
                    <div className="contact-item-value">+94 770202138</div>
                  </div>
                </div>

                <div className="contact-item">
                  <div className="contact-icon">
                    <Image src="/image/icon/location.gif" alt="Location" width={24} height={24} unoptimized />
                  </div>
                  <div>
                    <div className="contact-item-label">Location</div>
                    <div className="contact-item-value">Colombo, Sri Lanka</div>
                  </div>
                </div>

                <a
                  href="https://www.linkedin.com/company/cybernaxe-solutions/"
                  target="_blank"
                  rel="noreferrer"
                  className="contact-item"
                >
                  <div className="contact-icon">
                    <Image src="/image/icon/linkedin.gif" alt="LinkedIn" width={24} height={24} unoptimized />
                  </div>
                  <div>
                    <div className="contact-item-label">LinkedIn</div>
                    <div className="contact-item-value">Cybernaxe Solutions</div>
                  </div>
                </a>
              </div>
            </div>

            <form className="contact-form reveal reveal-delay-2" id="contactForm" onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <input type="text" id="name" name="name" placeholder=" " autoComplete="off" required />
                  <label htmlFor="name">Your Name</label>
                </div>

                <div className="form-group">
                  <input type="email" id="email" name="email" placeholder=" " autoComplete="off" required />
                  <label htmlFor="email">Email Address</label>
                </div>
              </div>

              <div className="form-group">
                <input type="text" id="subject" name="subject" placeholder=" " autoComplete="off" />
                <label htmlFor="subject">What can we help you automate?</label>
              </div>

              <div className="form-group textarea">
                <textarea id="message" name="message" placeholder=" " required />
                <label htmlFor="message">Tell us about your business or project</label>
              </div>

              <button type="submit" className="btn-submit" disabled={isSending}>
                <svg width={16} height={16} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                  <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" />
                </svg>
                {isSending ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Toast */}
      <div className="toast" id="toast">
        <div className="toast-icon" id="toastIcon" />
        <div>
          <div className="toast-title" id="toastTitle" />
          <div className="toast-sub" id="toastSub" />
        </div>
        <div className="toast-close" onClick={closeToast}>✕</div>
      </div>

      {/* Floating Actions */}
      <div className="floating-actions">
        {/* WhatsApp */}
        <a
          href="https://wa.me/94770202138"
          target="_blank"
          rel="noopener noreferrer"
          className="whatsapp-float"
        >
          <div className="whatsapp-icon">
            <svg width="26" height="26" viewBox="0 0 24 24" fill="white">
              <path d="M20.52 3.48A11.8 11.8 0 0012.06 0C5.51 0 .2 5.31.2 11.86c0 2.09.55 4.14 1.6 5.94L0 24l6.38-1.67a11.8 11.8 0 005.68 1.45h.01c6.55 0 11.86-5.31 11.86-11.86 0-3.16-1.23-6.13-3.41-8.34zM12.07 21.5h-.01a9.6 9.6 0 01-4.88-1.33l-.35-.21-3.78.99 1.01-3.68-.23-.38a9.6 9.6 0 01-1.47-5.1c0-5.3 4.31-9.6 9.61-9.6 2.57 0 4.98 1 6.8 2.83a9.57 9.57 0 012.8 6.78c0 5.3-4.31 9.6-9.6 9.6zm5.28-7.2c-.29-.14-1.7-.84-1.96-.94-.26-.1-.45-.14-.64.14-.19.29-.74.94-.9 1.13-.17.19-.33.21-.61.07-.29-.14-1.22-.45-2.32-1.43-.86-.76-1.44-1.7-1.61-1.99-.17-.29-.02-.45.13-.59.13-.13.29-.33.43-.5.14-.17.19-.29.29-.48.1-.19.05-.36-.02-.5-.07-.14-.64-1.55-.88-2.12-.23-.55-.47-.47-.64-.48h-.55c-.19 0-.5.07-.76.36-.26.29-1 1-1 2.43s1.02 2.82 1.17 3.01c.14.19 2.05 3.14 4.98 4.4.7.3 1.24.48 1.66.61.7.22 1.34.19 1.85.12.56-.08 1.7-.7 1.94-1.38.24-.68.24-1.27.17-1.38-.07-.11-.26-.17-.55-.31z" />
            </svg>
          </div>
          <span className="whatsapp-badge">Talk to us</span>
        </a>

        {/* Chatbot Overlay */}
        <div
          className={`chatbot-overlay ${chatOpen ? "show" : ""}`}
          onClick={closeChat}
        />

        {/* Chatbot Modal */}
        <div className={`chatbot-modal ${chatOpen ? "show" : ""}`}>
          <div className="chatbot-header">
            <div className="chatbot-title-area">
              <img src="/image/icon/bot.svg" alt="Bot" className="chatbot-bot-icon" />
              <h3 className="chatbot-title">Cybernaxe Agent</h3>
            </div>
            <button className="chatbot-close" onClick={closeChat}>✕</button>
          </div>

          <div className="chatbot-body">
            <div className="chatbot-message">
              <h2>👋 Hi! I&apos;m Cybernaxe Agent.</h2>
              <p>
                I can help you explore our AI automation, software development,
                web applications and business solutions.
              </p>
              <p>
                Tell me about your business or the process you&apos;d like to automate.
              </p>
            </div>
          </div>

          <div className="chatbot-input-area">
            <input
              type="text"
              className="chatbot-input"
              placeholder="Ask about our services..."
            />
            <button className="chatbot-send">Send</button>
          </div>
        </div>

        {/* Chatbot Icon */}
        <div className="chatbot-icon" id="chatbotIcon" onClick={openChat}>
          <svg width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
            <rect x={5} y={8} width={14} height={12} rx={2} />
            <circle cx={10} cy={11} r="1.5" fill="currentColor" />
            <circle cx={14} cy={11} r="1.5" fill="currentColor" />
            <line x1={8} y1={8} x2={8} y2={4} />
            <circle cx={8} cy={3} r={1} fill="currentColor" />
            <line x1={16} y1={8} x2={16} y2={4} />
            <circle cx={16} cy={3} r={1} fill="currentColor" />
            <path d="M10 15 Q12 16 14 15" stroke="currentColor" strokeWidth="1.5" fill="none" />
          </svg>
          <span className="chat-badge">AI</span>
        </div>
      </div>

      <Script src="/script.js" />
    </>
  );
}