'use client';

import Link from 'next/link';
import Navbar from '@/components/navbar';
import Footer from '@/components/Footer';

export default function LegalLayout({
  label,
  title,
  subtitle,
  lastUpdated = 'September 19, 2026',
  effective = 'September 19, 2026',
  tocItems = [],
  children,
}) {
  return (
    <>
      <Navbar />

      <div className="legal-page">
        {/* ─── HEADER ─── */}
        <header className="legal-header">
          <div className="container">
            <Link href="/" className="legal-back-link">
              <span aria-hidden="true">←</span> Back to Home
            </Link>

            <div className="section-label">{label}</div>
            <h1 className="legal-title">{title}</h1>
            {subtitle && <p className="legal-subtitle">{subtitle}</p>}

            <div className="legal-meta">
              <span>
                <strong>Last updated:</strong> {lastUpdated}
              </span>
              <span>
                <strong>Effective:</strong> {effective}
              </span>
            </div>
          </div>
        </header>

        {/* ─── BODY ─── */}
        <main className="legal-body">
          <div className="container legal-container">
            {/* Table of contents */}
            {tocItems.length > 0 && (
              <aside className="legal-toc">
                <h4>On this page</h4>
                <nav>
                  {tocItems.map((item) => (
                    <a key={item.href} href={item.href}>
                      {item.label}
                    </a>
                  ))}
                </nav>
              </aside>
            )}

            {/* Main content */}
            <article className="legal-content">{children}</article>
          </div>
        </main>
      </div>

      <Footer />
    </>
  );
}