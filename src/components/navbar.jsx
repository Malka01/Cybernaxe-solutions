/* eslint-disable @next/next/no-html-link-for-pages */
/* eslint-disable @next/next/no-img-element */
'use client';

import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(prev => !prev);
  const closeMenu = () => setMenuOpen(false);

  const navLinks = [
    { label: "About", href: "#about" },
    { label: "AI Agents", href: "#ai-agents" },
    { label: "Solutions", href: "#solutions" },
    { label: "Case Studies", href: "#projects" },
    { label: "Process", href: "#process" },
    { label: "Contact", href: "#contact", isCTA: true },
  ];

  return (
    <>
      <nav id="navbar">
        <div className="nav-inner">

          {/* Logo */}
          <a href="/" className="nav-logo" onClick={closeMenu}>
            <img
              src="/Logo/Cybernaxe-Solutions-Logo.jpg"
              alt="Cybernaxe Solutions"
              className="nav-profile-img"
            />
          </a>

          {/* Desktop Menu */}
          <ul className="nav-links">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={link.isCTA ? "nav-cta" : ""}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Contact Icon */}
          <a
            href="#contact"
            className="nav-contact-icon"
            onClick={closeMenu}
          >
            <img src="/image/icon/contact.svg" alt="Contact" />
          </a>

          {/* Hamburger */}
          <div className="hamburger" onClick={toggleMenu}>
            <img
              src="/image/icon/menu.svg"
              alt="Menu"
              className="hamburger-icon"
            />
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            onClick={closeMenu}
            className={link.isCTA ? "nav-cta" : ""}
          >
            {link.label}
          </a>
        ))}
      </div>
    </>
  );
}