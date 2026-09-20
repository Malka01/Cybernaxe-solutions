/* eslint-disable @next/next/no-page-custom-font */
/* eslint-disable @next/next/no-img-element */
'use client';

import './globals.css';
import Image from 'next/image';
import Head from 'next/head';
import Script from 'next/script';
import Link from 'next/link';
import Navbar from '@/components/navbar';
import Footer from '@/components/Footer';
import { useEffect, useRef, useState } from 'react';
import AITransformation from '@/components/AITransformation';
import { MdOutlineSupportAgent } from "react-icons/md";
import { TbAutomation } from "react-icons/tb";
import { MdDataThresholding } from "react-icons/md";
import { FaLaptop } from "react-icons/fa";
import { RiCustomerService2Line } from "react-icons/ri";
import { GiDiceTarget } from "react-icons/gi";
import { SiBookingdotcom } from "react-icons/si";
import { FcWorkflow } from "react-icons/fc";
import { BiWorld } from "react-icons/bi";
import { FaSquareWhatsapp } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import AIBusinessIllustration from '@/components/AIBusinessIllustration';
import AIAgentIllustration from '@/components/AIAgentIllustration';
import BusinessAutomationIllustration from '@/components/BusinessAutomationIllustration';
import WebAppsIllustration from '@/components/WebAppsIllustration';
import BusinessWebsitesIllustration from '@/components/BusinessWebsitesIllustration';
import UIUXDesignIllustration from '@/components/UIUXDesignIllustration';
// import CommentWidget from '@/components/CommentWidget';


import {
  SUGGESTED_QUESTIONS,
  findAnswer,
  FALLBACK_ANSWER,
} from '@/data/chatbotQA';

export default function Home() {
  const [chatOpen, setChatOpen] = useState(false);
  const [isSending, setIsSending] = useState(false);

  const openChat = () => setChatOpen(true);
  const closeChat = () => setChatOpen(false);

  // ─── Chat state ───
  const [chatMessages, setChatMessages] = useState([
    {
      role: 'assistant',
      content:
        "👋 Hi! I'm the Cybernaxe AI Assistant.\n\nAsk me anything about our services, pricing, or how we work. Or tap a suggestion below to get started.",
      isIntro: true,
    },
  ]);
  const [chatInput, setChatInput] = useState('');
  const [chatLoading, setChatLoading] = useState(false);
  const chatBodyRef = useRef(null);

  // Auto-scroll to bottom on new message
  useEffect(() => {
    if (chatBodyRef.current) {
      chatBodyRef.current.scrollTop = chatBodyRef.current.scrollHeight;
    }
  }, [chatMessages, chatLoading]);

  // ─── Send handler (predefined Q&A) ───
  const handleChatSend = (text) => {
    const message = (text || chatInput).trim();
    if (!message || chatLoading) return;

    // Add user message
    setChatMessages((prev) => [...prev, { role: 'user', content: message }]);
    setChatInput('');
    setChatLoading(true);

    // Simulate typing delay (feels natural)
    const delay = 400 + Math.random() * 400;

    setTimeout(() => {
      const answer = findAnswer(message) || FALLBACK_ANSWER;
      setChatMessages((prev) => [
        ...prev,
        { role: 'assistant', content: answer },
      ]);
      setChatLoading(false);
    }, delay);
  };

  const handleChatKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleChatSend();
    }
  };

  const handleSuggestedQuestion = (question) => {
    handleChatSend(question);
  };

  const showToast = (type, icon, title, sub) => {
    if (
      typeof window !== 'undefined' &&
      typeof window.showToast === 'function'
    ) {
      window.showToast(type, icon, title, sub);
    }
  };

  const closeToast = () => {
    if (
      typeof window !== 'undefined' &&
      typeof window.hideToast === 'function'
    ) {
      window.hideToast();
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const url = process.env.NEXT_PUBLIC_GOOGLE_SCRIPT_URL;

    if (!url) {
      showToast(
        'error',
        '⚠️',
        'Form not configured',
        'Contact form is temporarily unavailable.'
      );
      return;
    }

    const payload = {
      name: e.target.name.value.trim(),
      email: e.target.email.value.trim(),
      subject: e.target.subject.value.trim(),
      message: e.target.message.value.trim(),
      source: 'Cybernaxe Website',
      page: 'Homepage',
    };

    if (!payload.name || !payload.email || !payload.message) {
      showToast(
        'error',
        '⚠️',
        'Missing fields',
        'Please fill in all required fields.'
      );
      return;
    }

    setIsSending(true);

    try {
      await fetch(url, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'text/plain;charset=utf-8' },
        body: JSON.stringify(payload),
      });

      e.target.reset();

      showToast(
        'success',
        '🎉',
        'Message Sent!',
        "We'll get back to you within 24 hours."
      );
    } catch (error) {
      console.error('SUBMIT ERROR:', error);

      showToast(
        'error',
        '⚠️',
        'Message not sent',
        'Please try again or contact us directly.'
      );
    } finally {
      setIsSending(false);
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);

    setTimeout(() => {
      document.querySelectorAll('.reveal').forEach((el) => {
        el.classList.remove('visible');
      });

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('visible');
            }
          });
        },
        { threshold: 0.15 }
      );

      document
        .querySelectorAll('.reveal')
        .forEach((el) => observer.observe(el));

      return () => observer.disconnect();
    }, 0);
  }, []);

  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <title>
          Cybernaxe Solutions | AI Agents, Automation & Software Solutions
        </title>

        <meta
          name="description"
          content="Cybernaxe Solutions builds AI agents, business automation systems, custom web applications and AI-powered digital solutions for modern businesses."
        />

        <meta
          name="keywords"
          content="AI agents, AI automation, business automation, software development, web applications, AI solutions, Cybernaxe Solutions"
        />

        <meta
          property="og:title"
          content="Cybernaxe Solutions | AI Agents & Business Automation"
        />
        <meta
          property="og:description"
          content="AI agents, business automation, custom software and modern web applications."
        />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/Logo/Cybernaxe-Solutions-Logo.jpg" />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
        {/* <link rel="stylesheet" href="/style.css" /> */}
      </Head>

      <Navbar />

      {/* ================= HERO ================= */}

      <section id="hero">
        <div className="hero-bg">
          {/* <div className="hero-blob hero-blob-1" />
          <div className="hero-blob hero-blob-2" />
          <div className="hero-blob hero-blob-3" /> */}
        </div>

        <div className="container">
          <div className="hero-grid">
            <div className="hero-content">
              <div className="hero-badge">AI • Automation • Software</div>

              <h1 className="hero-title">
                Build Smarter.
                <br />
                <span className="name">Automate More.</span>
              </h1>

              <div className="hero-role">AI-Powered Business Solutions</div>

              <p className="hero-sub">
                Cybernaxe Solutions helps businesses automate repetitive
                work, engage customers with AI agents, and build powerful
                digital products that drive real business growth.
              </p>

              <div className="hero-actions">
                <a href="#contact" className="btn btn-primary">
                  Start a Project
                </a>
                <a href="#services" className="btn btn-secondary">
                  Explore Solutions
                </a>
              </div>

              <div className="hero-stats">
                <div>
                  <div className="hero-stat-num">AI</div>
                  <div className="hero-stat-label">Powered Solutions</div>
                </div>
                <div>
                  <div className="hero-stat-num">Web</div>
                  <div className="hero-stat-label">Digital Products</div>
                </div>
                <div>
                  <div className="hero-stat-num">24/7</div>
                  <div className="hero-stat-label">Automation</div>
                </div>
              </div>
            </div>

            <div className="hero-visual">
              <AITransformation />
            </div>
          </div>

          <div className="scroll-indicator">
            <div className="scroll-text">Explore Cybernaxe</div>
            <div className="scroll-mouse">
              <div className="mouse-wheel" />
            </div>
          </div>
        </div>
      </section>

      {/* ================= ABOUT ================= */}

      <section id="about">
        <div className="container">
          <div className="section-label">What We Do</div>

          <div className="about-grid">
            <div className="about-text reveal">
              <h2 className="section-title">
                Technology that
                <span> solves real problems.</span>
              </h2>

              <p>
                Cybernaxe Solutions is a technology solutions company
                focused on helping businesses use AI, automation and
                modern software to work smarter.
              </p>

              <p>
                From AI-powered customer communication to custom
                business platforms, we design and build digital
                solutions around real business needs.
              </p>

              <p>
                Our goal is simple: reduce repetitive work, improve
                customer experiences and create systems that help
                businesses scale.
              </p>
            </div>

            <div className="skills-grid reveal reveal-delay-2">
              <div className="skill-card">
                <div className="skill-icon"><MdOutlineSupportAgent /></div>
                <div className="skill-name">AI Agents</div>
                <div className="skill-desc">
                  Intelligent agents for customer support, lead
                  generation, bookings and business workflows.
                </div>
              </div>

              <div className="skill-card">
                <div className="skill-icon"><TbAutomation /></div>
                <div className="skill-name">Business Automation</div>
                <div className="skill-desc">
                  Automate repetitive tasks and connect business
                  processes using modern automation.
                </div>
              </div>

              <div className="skill-card">
                <div className="skill-icon"><FaLaptop /></div>
                <div className="skill-name">Custom Software</div>
                <div className="skill-desc">
                  Scalable web applications and digital platforms
                  built around your business.
                </div>
              </div>

              <div className="skill-card">
                <div className="skill-icon"><MdDataThresholding /></div>
                <div className="skill-name">Data & Dashboards</div>
                <div className="skill-desc">
                  Turn business data into useful dashboards, reports
                  and actionable insights.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ================= SERVICES ================= */}

      <section id="services">
        <div className="container">
          <div className="section-label">Our Services</div>

          <h2 className="section-title">
            Solutions built for
            <span> modern businesses.</span>
          </h2>

          <div className="projects-grid">

            {/* Card 1 — Business Websites & E-commerce */}
            <div className="project-card reveal reveal-delay-1">
              <div className="project-img service-img service-img-websites">
                <div className="project-type">Web</div>
                <BusinessWebsitesIllustration />
              </div>

              <div className="project-body">
                <div className="project-title">Business Websites & E-commerce</div>
                <div className="project-desc">
                  Modern business websites, e-commerce stores and portfolio sites
                  built for speed, SEO and conversions.
                </div>
                <div className="project-tags">
                  <span className="tag">Next.js</span>
                  <span className="tag">WordPress</span>
                  <span className="tag">Shopify</span>
                  <span className="tag">SEO</span>
                </div>
              </div>
            </div>

            {/* Card 2 — AI Agent Development */}
            <div className="project-card reveal">
              <div className="project-img service-img service-img-agent">
                <div className="project-type">AI</div>
                <AIAgentIllustration />
              </div>

              <div className="project-body">
                <div className="project-title">AI Agent Development</div>
                <div className="project-desc">
                  Build AI agents that communicate with customers, answer
                  questions, qualify leads, handle bookings and support
                  business operations.
                </div>
                <div className="project-tags">
                  <span className="tag">AI</span>
                  <span className="tag">LLMs</span>
                  <span className="tag">RAG</span>
                  <span className="tag">Automation</span>
                </div>
              </div>
            </div>

            {/* Card 3 — Business Automation */}
            <div className="project-card reveal reveal-delay-1">
              <div className="project-img service-img service-img-automation">
                <div className="project-type">Automation</div>
                <BusinessAutomationIllustration />
              </div>

              <div className="project-body">
                <div className="project-title">Business Automation</div>
                <div className="project-desc">
                  Connect your tools and automate repetitive workflows so
                  your team can spend more time on valuable work.
                </div>
                <div className="project-tags">
                  <span className="tag">n8n</span>
                  <span className="tag">APIs</span>
                  <span className="tag">Webhooks</span>
                  <span className="tag">Automation</span>
                </div>
              </div>
            </div>

            {/* Card 4 — Custom Web Applications */}
            <div className="project-card reveal reveal-delay-2">
              <div className="project-img service-img service-img-web">
                <div className="project-type">Software</div>
                <WebAppsIllustration />
              </div>

              <div className="project-body">
                <div className="project-title">Custom Web Applications</div>
                <div className="project-desc">
                  Modern web applications, dashboards, customer portals and
                  business management systems.
                </div>
                <div className="project-tags">
                  <span className="tag">Next.js</span>
                  <span className="tag">React</span>
                  <span className="tag">Node.js</span>
                  <span className="tag">MongoDB</span>
                </div>
              </div>
            </div>

            {/* Card 5 — AI-Powered Business Solutions */}
            <div className="project-card reveal">
              <div className="project-img service-img service-img-solutions">
                <div className="project-type">AI Solutions</div>
                <AIBusinessIllustration />
              </div>

              <div className="project-body">
                <div className="project-title">AI-Powered Business Solutions</div>
                <div className="project-desc">
                  Add AI capabilities to existing business systems including
                  intelligent search, assistants, document processing and
                  knowledge retrieval.
                </div>
                <div className="project-tags">
                  <span className="tag">OpenAI</span>
                  <span className="tag">RAG</span>
                  <span className="tag">Vector DB</span>
                  <span className="tag">APIs</span>
                </div>
              </div>
            </div>

            {/* Card 6 — UI/UX Design & Prototyping */}
            <div className="project-card reveal reveal-delay-2">
              <div className="project-img service-img service-img-design">
                <div className="project-type">Design</div>
                <UIUXDesignIllustration />
              </div>

              <div className="project-body">
                <div className="project-title">UI/UX Design & Prototyping</div>
                <div className="project-desc">
                  User research, wireframes and high-fidelity prototypes that
                  turn business goals into intuitive digital products.
                </div>
                <div className="project-tags">
                  <span className="tag">Figma</span>
                  <span className="tag">Wireframes</span>
                  <span className="tag">Prototypes</span>
                  <span className="tag">Design Systems</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= AI AGENTS ================= */}

      <section id="ai-agents">
        <div className="container">
          <div className="section-label">AI Agents</div>

          <h2 className="section-title">
            Your business can
            <span> work 24/7.</span>
          </h2>

          <p
            style={{
              // maxWidth: '720px',
              margin: '0 auto 50px',
              // textAlign: 'center',
              color: 'var(--text-secondary)',
            }}
          >
            AI agents can communicate with customers, capture leads,
            answer questions and perform repetitive business tasks
            automatically.
          </p>

          <div className="skills-grid">
            <div className="skill-card reveal">
              <div className="skill-icon"><RiCustomerService2Line /></div>
              <div className="skill-name">Customer Support Agent</div>
              <div className="skill-desc">
                Answer customer questions instantly across your
                website and digital channels.
              </div>
            </div>

            <div className="skill-card reveal reveal-delay-1">
              <div className="skill-icon"><GiDiceTarget /></div>
              <div className="skill-name">Lead Generation Agent</div>
              <div className="skill-desc">
                Engage visitors, qualify prospects and capture
                valuable leads automatically.
              </div>
            </div>

            <div className="skill-card reveal reveal-delay-2">
              <div className="skill-icon"><SiBookingdotcom /></div>
              <div className="skill-name">Booking Agent</div>
              <div className="skill-desc">
                Allow customers to ask questions, select services and
                request appointments.
              </div>
            </div>

            <div className="skill-card reveal">
              <div className="skill-icon"><FcWorkflow /></div>
              <div className="skill-name">Workflow Agent</div>
              <div className="skill-desc">
                Connect AI with your business systems and automate
                multi-step workflows.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= WHO WE HELP ================= */}

      <section id="solutions">
        <div className="container">
          <div className="section-label">Who We Help</div>

          <h2 className="section-title">
            Technology for <span>growing businesses.</span>
          </h2>

          <p className="solutions-subtitle">
            We build AI agents, automation workflows, and custom
            software for teams who want to reduce manual work and
            scale faster.
          </p>

          <div className="solution-grid">
            <div className="solution-card reveal">
              <div className="solution-card-icon">🏪</div>
              <h3 className="solution-card-title">Small Businesses</h3>
              <p className="solution-card-desc">
                Automate operations and customer communication without
                hiring a larger team.
              </p>
            </div>

            <div className="solution-card reveal reveal-delay-1">
              <div className="solution-card-icon">🛠️</div>
              <h3 className="solution-card-title">Service Businesses</h3>
              <p className="solution-card-desc">
                Leads, bookings, and customer support handled by AI
                agents around the clock.
              </p>
            </div>

            <div className="solution-card reveal reveal-delay-2">
              <div className="solution-card-icon">🛒</div>
              <h3 className="solution-card-title">E-commerce</h3>
              <p className="solution-card-desc">
                AI customer support, order enquiries, and business
                automation built into your store.
              </p>
            </div>

            <div className="solution-card reveal">
              <div className="solution-card-icon">🚀</div>
              <h3 className="solution-card-title">Startups</h3>
              <p className="solution-card-desc">
                MVPs, SaaS platforms, and scalable systems engineered
                for speed to market.
              </p>
            </div>

            <div className="solution-card reveal reveal-delay-1">
              <div className="solution-card-icon">🏥</div>
              <h3 className="solution-card-title">Healthcare</h3>
              <p className="solution-card-desc">
                Digital systems, patient enquiry handling, and
                intelligent appointment workflows.
              </p>
            </div>

            <div className="solution-card reveal reveal-delay-2">
              <div className="solution-card-icon">💼</div>
              <h3 className="solution-card-title">Professional Services</h3>
              <p className="solution-card-desc">
                Automate enquiries, internal workflows, and reporting
                for consultants, agencies, and firms.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= PROJECTS ================= */}

      <section id="projects">
        <div className="container">
          <div className="section-label">Our Work</div>

          <h2 className="section-title">
            Selected <span>Projects</span>
          </h2>

          <div className="projects-grid">
            <div
              className="project-card reveal"
              onClick={() =>
                window.open('https://grocery-tau-sooty.vercel.app', '_blank')
              }
              style={{ cursor: 'pointer' }}
            >
              <div className="project-img">
                <img
                  src="/Project/grocery.png"
                  alt="Grocery Delivery Application"
                  className="project-image"
                />
                <div className="project-type">Web Application</div>
              </div>

              <div className="project-body">
                <div className="project-title">Grocery Application</div>
                <div className="project-desc">
                  A business website with online ordering and delivery system for a local grocery store.
                </div>
                <div className="project-tags">
                  <span className="tag">Next.js</span>
                  <span className="tag">MERN</span>
                  <span className="tag">Tailwind</span>
                  <span className="tag">JavaScript</span>
                </div>
                <div className="project-cta">Live View</div>
              </div>
            </div>

            <Link href="/demos/bio-class" target='_blank' rel="noopener noreferrer">
              <div className="project-card reveal reveal-delay-2">
                <div className="project-img">
                  <img
                    src="/Project/class.png"
                    alt="Grocery Delivery Application"
                    className="project-image"
                  />
                  <div className="project-type">One Page</div>
                </div>

                <div className="project-body">
                  <div className="project-title">
                    Class Student Poratal
                  </div>
                  <div className="project-desc">
                    A full-stack reporting platform with team
                    dashboards, analytics and an AI-powered assistant
                    for report insights.
                  </div>
                  <div className="project-tags">
                    <span className="tag">MERN</span>
                    <span className="tag">APIs</span>
                    <span className="tag">Next</span>
                    <span className="tag">Claude</span>
                  </div>
                  <div className="project-cta">Live View</div>
                </div>
              </div>
            </Link>

            <Link href="https://v0-vila-resort-booking.vercel.app" target="_blank" rel="noopener noreferrer">
              <div className="project-card reveal reveal-delay-1">
                <div className="project-img">
                  <img
                    src="/Project/vila.png"
                    alt="Eventstune"
                    className="project-image"
                  />
                  <div className="project-type">Platform</div>
                </div>

                <div className="project-body">
                  <div className="project-title">Villa Resort</div>
                  <div className="project-desc">
                    Event discovery and ticketing platform designed for
                    discovering and managing events, venues, and ticket sales with a focus on user experience and event promotion.
                  </div>
                  <div className="project-tags">
                    <span className="tag">HTML</span>
                    <span className="tag">CSS</span>
                    <span className="tag">JavaScript</span>
                    <span className="tag">PHP</span>
                  </div>
                  <div className="project-cta">Live View</div>
                </div>
              </div>
            </Link>

            <Link href="#">
              <div className="project-card reveal">
                <div className="project-img">
                  <img
                    src="/Project/ai-agent.png"
                    alt="Ai Agent"
                    className="project-image"
                  />
                  <div className="project-type">Ai Agent</div>
                </div>

                <div className="project-body">
                  <div className="project-title">Ai Agent</div>
                  <div className="project-desc">
                    An emergency response application designed around
                    accident detection and real-time emergency
                    communication.
                  </div>
                  <div className="project-tags">
                    <span className="tag">MERN</span>
                    <span className="tag">Pinocorn</span>
                    <span className="tag">LLM/RAG</span>
                    <span className="tag">OpenAI</span>
                  </div>
                  <div className="project-cta"><a href="#contact">
                    Launching Soon
                  </a></div>
                </div>
              </div>
            </Link>

            <Link href="#">
              <div className="project-card reveal reveal-delay-2">
                <div className="project-img">
                  <img
                    src="/Project/weather-dashboard.png"
                    alt="Weather Forecast Application"
                    className="project-image"
                  />
                  <div className="project-type">One Page</div>
                </div>

                <div className="project-body">
                  <div className="project-title">
                    Weather Focast System
                  </div>
                  <div className="project-desc">
                    A fully Completed weather forecast reporting platform with
                    dashboards, analytics and an real time assistant
                    for report insights.
                  </div>
                  <div className="project-tags">
                    <span className="tag">MERN</span>
                    <span className="tag">APIs</span>
                    <span className="tag">Next</span>
                    <span className="tag">Tailwind CSS</span>
                  </div>
                  <div className="project-cta">
                    <a href="#contact">
                      Request Code
                    </a></div>
                </div>
              </div>
            </Link>

            <Link href="#">
              <div className="project-card reveal reveal-delay-2">
                <div className="project-img">
                  <img
                    src="/Project/Admin-dashboard.png"
                    alt="Grocery Delivery Application"
                    className="project-image"
                  />
                  <div className="project-type">Full Functionality</div>
                </div>

                <div className="project-body">
                  <div className="project-title">
                    Task Management System
                  </div>
                  <div className="project-desc">
                    A full-stack reporting platform with team
                    dashboards, analytics and an AI-powered assistant
                    for report insights.
                  </div>
                  <div className="project-tags">
                    <span className="tag">MERN</span>
                    <span className="tag">APIs</span>
                    <span className="tag">Next</span>
                    <span className="tag">Tailwind CSS</span>
                  </div>
                  <div className="project-cta">
                    <a href="#contact">
                      Request Code
                    </a>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* ================= TECHNOLOGY ================= */}

      <section id="technology">
        <div className="container">
          <div className="section-label">Technology</div>

          <h2 className="section-title">
            Built with <span>modern technology.</span>
          </h2>

          <div className="tools-grid">
            <div className="tool-card"><div className="tool-name">Next.js</div></div>
            <div className="tool-card"><div className="tool-name">React</div></div>
            <div className="tool-card"><div className="tool-name">Node.js</div></div>
            <div className="tool-card"><div className="tool-name">MongoDB</div></div>
            <div className="tool-card"><div className="tool-name">Python</div></div>
            <div className="tool-card"><div className="tool-name">OpenAI</div></div>
            <div className="tool-card"><div className="tool-name">PinoconAPI</div></div>
            <div className="tool-card"><div className="tool-name">LLM</div></div>
            <div className="tool-card"><div className="tool-name">RAG</div></div>
            <div className="tool-card"><div className="tool-name">Express</div></div>
            <div className="tool-card"><div className="tool-name">Tailwind</div></div>
            <div className="tool-card"><div className="tool-name">Javascript</div></div>
            <div className="tool-card"><div className="tool-name">Java</div></div>
            <div className="tool-card"><div className="tool-name">Go</div></div>
          </div>
        </div>
      </section>

      {/* ================= PROCESS ================= */}

      <section id="process">
        <div className="container">
          <div className="section-label">Our Process</div>

          <h2 className="section-title">
            From idea to <span>working solution.</span>
          </h2>

          <div className="process-grid">
            <div className="process-step reveal">
              <span className="process-num">01</span>
              <h3 className="process-title">Discover</h3>
              <p className="process-desc">
                Understand your business, customers, and biggest
                operational challenges.
              </p>
            </div>

            <div className="process-step reveal reveal-delay-1">
              <span className="process-num">02</span>
              <h3 className="process-title">Design</h3>
              <p className="process-desc">
                Define the solution architecture and user experience.
              </p>
            </div>

            <div className="process-step reveal reveal-delay-2">
              <span className="process-num">03</span>
              <h3 className="process-title">Build</h3>
              <p className="process-desc">
                Develop the application, AI agent, or automation
                workflow.
              </p>
            </div>

            <div className="process-step reveal reveal-delay-3">
              <span className="process-num">04</span>
              <h3 className="process-title">Integrate</h3>
              <p className="process-desc">
                Connect your existing tools, APIs, and business
                systems.
              </p>
            </div>

            <div className="process-step reveal reveal-delay-4">
              <span className="process-num">05</span>
              <h3 className="process-title">Launch</h3>
              <p className="process-desc">
                Test, deploy, and continuously improve the solution.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}

      <section id="cta">
        <div className="container">
          <div className="about-text reveal">
            <div className="section-label">Start Building</div>

            <h2 className="section-title">
              Have a business problem?
              <span> Let&apos;s solve it.</span>
            </h2>

            <p>
              Whether you need an AI agent, business automation
              workflow, custom application or AI-powered feature,
              let&apos;s discuss what you want to build.
            </p>

            <div className="hero-actions">
              <a href="#contact" className="btn btn-primary">
                Talk to Cybernaxe
              </a>

              <a
                href="https://www.linkedin.com/company/cybernaxe-solutions"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary"
              >
                Follow Us on LinkedIn
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ================= CONTACT ================= */}

      <section id="contact">
        <div className="container">
          <div className="section-label">Contact</div>

          <h2 className="section-title">
            Let&apos;s <span>build something.</span>
          </h2>

          <div className="contact-grid">
            <div className="contact-info reveal">
              <p>
                Have a project, automation idea or business problem
                you&apos;d like to solve? Send us a message and let&apos;s
                explore the right solution.
              </p>

              <div className="contact-items">
                <div className="contact-item">
                  <div className="contact-icon"><FaSquareWhatsapp /></div>
                  <div>
                    <div className="contact-item-label">WhatsApp</div>
                    <div className="contact-item-value">
                      Let&apos;s discuss your project
                    </div>
                  </div>
                </div>

                <a
                  href="https://www.linkedin.com/company/cybernaxe-solutions"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-item"
                >
                  <div className="contact-icon"><FaLinkedin /></div>
                  <div>
                    <div className="contact-item-label">LinkedIn</div>
                    <div className="contact-item-value">
                      Cybernaxe Solutions
                    </div>
                  </div>
                </a>

                <div className="contact-item">
                  <div className="contact-icon"><BiWorld /></div>
                  <div>
                    <div className="contact-item-label">Location</div>
                    <div className="contact-item-value">
                      Sri Lanka • Serving Global Clients
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <form
              className="contact-form reveal reveal-delay-2"
              onSubmit={handleSubmit}
            >
              <div className="form-row">
                <div className="form-group">
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder=" "
                    autoComplete="off"
                    required
                  />
                  <label htmlFor="name">Your Name</label>
                </div>

                <div className="form-group">
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder=" "
                    autoComplete="off"
                    required
                  />
                  <label htmlFor="email">Email Address</label>
                </div>
              </div>

              <div className="form-group">
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  placeholder=" "
                  autoComplete="off"
                />
                <label htmlFor="subject">What do you need?</label>
              </div>

              <div className="form-group textarea">
                <textarea
                  id="message"
                  name="message"
                  placeholder=" "
                  required
                />
                <label htmlFor="message">
                  Tell us about your project
                </label>
              </div>

              <button
                type="submit"
                className="btn-submit"
                disabled={isSending}
              >
                {isSending ? 'Sending...' : 'Start a Conversation'}
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <Footer />

      {/* ================= TOAST ================= */}

      <div className="toast" id="toast">
        <div className="toast-icon" id="toastIcon" />
        <div>
          <div className="toast-title" id="toastTitle" />
          <div className="toast-sub" id="toastSub" />
        </div>
        <div className="toast-close" onClick={closeToast}>
          ✕
        </div>
      </div>

      {/* ================= FLOATING ACTIONS ================= */}

      <div className="floating-actions">
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
          <span className="whatsapp-badge">Let&apos;s Talk</span>
        </a>

        {/* Chatbot overlay */}
        <div
          className={`chatbot-overlay ${chatOpen ? 'show' : ''}`}
          onClick={closeChat}
        />
        {/* Chatbot modal */}
        <div className={`chatbot-modal ${chatOpen ? 'show' : ''}`}>
          <div className="chatbot-header">
            <div className="chatbot-title-area">
              <img
                src="/image/icon/contact.svg"
                alt="AI Assistant"
                className="chatbot-bot-icon"
              />
              <h3 className="chatbot-title">Cybernaxe AI Assistant</h3>
            </div>
            <button
              className="chatbot-close"
              onClick={closeChat}
              aria-label="Close chat"
            >
              ✕
            </button>
          </div>

          <div className="chatbot-body" ref={chatBodyRef}>
            {chatMessages.map((msg, i) => (
              <div key={i} className={`chat-message chat-message-${msg.role}`}>
                {msg.content.split('\n').map((line, j) => (
                  <span key={j}>
                    {line}
                    {j < msg.content.split('\n').length - 1 && <br />}
                  </span>
                ))}
              </div>
            ))}

            {chatLoading && (
              <div className="chat-message chat-message-assistant chat-typing">
                <span />
                <span />
                <span />
              </div>
            )}

            {/* Suggested questions — only show at the start */}
            {chatMessages.length === 1 && !chatLoading && (
              <div className="chat-suggestions">
                <div className="chat-suggestions-label">Try asking:</div>
                <div className="chat-suggestions-grid">
                  {SUGGESTED_QUESTIONS.map((q) => (
                    <button
                      key={q}
                      className="chat-suggestion-chip"
                      onClick={() => handleSuggestedQuestion(q)}
                    >
                      {q}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          <div className="chatbot-input-area">
            <input
              type="text"
              className="chatbot-input"
              placeholder="Ask about Cybernaxe..."
              value={chatInput}
              onChange={(e) => setChatInput(e.target.value)}
              onKeyDown={handleChatKeyDown}
              disabled={chatLoading}
            />
            <button
              className="chatbot-send"
              onClick={() => handleChatSend()}
              disabled={chatLoading || !chatInput.trim()}
            >
              {chatLoading ? '...' : 'Send'}
            </button>
          </div>
        </div>

        <div className="chatbot-icon" onClick={openChat}>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <rect x="5" y="8" width="14" height="12" rx="2" />
            <circle cx="10" cy="11" r="1.5" fill="currentColor" />
            <circle cx="14" cy="11" r="1.5" fill="currentColor" />
            <line x1="8" y1="8" x2="8" y2="4" />
            <circle cx="8" cy="3" r="1" fill="currentColor" />
            <line x1="16" y1="8" x2="16" y2="4" />
            <circle cx="16" cy="3" r="1" fill="currentColor" />
            <path
              d="M10 15 Q12 16 14 15"
              stroke="currentColor"
              strokeWidth="1.5"
              fill="none"
            />
          </svg>
          <span className="chat-badge">AI</span>
        </div>
      </div>
      {/* <CommentWidget /> */}
      <Script src="/script.js" />
    </>
  );
}