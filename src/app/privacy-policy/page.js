'use client';

import Head from 'next/head';
import LegalLayout from '@/components/LegalLayout';

const tocItems = [
  { label: '1. Introduction', href: '#introduction' },
  { label: '2. Information We Collect', href: '#information-we-collect' },
  { label: '3. How We Use Information', href: '#how-we-use' },
  { label: '4. Cookies & Analytics', href: '#cookies' },
  { label: '5. Information Sharing', href: '#sharing' },
  { label: '6. Data Security', href: '#security' },
  { label: '7. Data Retention', href: '#retention' },
  { label: '8. Your Rights', href: '#your-rights' },
  { label: '9. Third-Party Services', href: '#third-party' },
  { label: "10. Children's Privacy", href: '#children' },
  { label: '11. International Transfers', href: '#international' },
  { label: '12. Changes to This Policy', href: '#changes' },
  { label: '13. Contact Us', href: '#contact-privacy' },
];

export default function PrivacyPolicy() {
  return (
    <>
      <Head>
        <title>Privacy Policy | Cybernaxe Solutions</title>
        <meta
          name="description"
          content="Learn how Cybernaxe Solutions collects, uses, and protects your personal information."
        />
      </Head>

      <LegalLayout
        label="Legal"
        title="Privacy Policy"
        subtitle="How Cybernaxe Solutions collects, uses, and protects your information."
        tocItems={tocItems}
      >
        <section id="introduction">
          <h2>1. Introduction</h2>
          <p>
            Cybernaxe Solutions (&quot;we&quot;, &quot;our&quot;, &quot;us&quot;) operates the website at{' '}
            <strong>cybernaxe.com</strong> and provides AI automation, custom
            software development, and web application services. This Privacy
            Policy explains how we collect, use, disclose, and safeguard
            information when you visit our website, use our services, or
            interact with us.
          </p>
          <p>
            By using our website or engaging our services, you agree to the
            practices described in this Privacy Policy. If you do not agree,
            please do not use our website or services.
          </p>
        </section>

        <section id="information-we-collect">
          <h2>2. Information We Collect</h2>

          <h3>Information you provide directly</h3>
          <p>We collect information you voluntarily provide when you:</p>
          <ul>
            <li>Submit a contact form or enquiry on our website</li>
            <li>Send us an email or message via WhatsApp</li>
            <li>Request a quote, consultation, or proposal</li>
            <li>Engage us for a project or ongoing services</li>
            <li>Subscribe to updates or newsletters</li>
          </ul>
          <p>This information may include:</p>
          <ul>
            <li>Your name and email address</li>
            <li>Phone number and WhatsApp contact</li>
            <li>Company name and role</li>
            <li>Project details and business requirements</li>
            <li>Any other information you choose to share</li>
          </ul>

          <h3>Information collected automatically</h3>
          <p>
            When you visit our website, we may automatically collect certain
            technical information, including:
          </p>
          <ul>
            <li>IP address and approximate location</li>
            <li>Browser type and device information</li>
            <li>Pages visited and time spent on each page</li>
            <li>Referring website or source</li>
            <li>Operating system and screen resolution</li>
          </ul>

          <h3>Information from third-party services</h3>
          <p>
            If you contact us via LinkedIn, WhatsApp, or other third-party
            platforms, we may receive limited profile information depending on
            the platform&apos;s settings.
          </p>
        </section>

        <section id="how-we-use">
          <h2>3. How We Use Information</h2>
          <p>We use the information we collect to:</p>
          <ul>
            <li>Respond to your enquiries and provide requested information</li>
            <li>Prepare proposals, quotes, and project scopes</li>
            <li>Deliver, maintain, and improve our services</li>
            <li>Communicate about projects, updates, and support</li>
            <li>Send administrative notices and service-related messages</li>
            <li>Analyze website usage to improve user experience</li>
            <li>Detect, prevent, and address technical or security issues</li>
            <li>Comply with legal obligations</li>
          </ul>
          <p>
            We do not sell, rent, or trade your personal information to third
            parties for marketing purposes.
          </p>
        </section>

        <section id="cookies">
          <h2>4. Cookies & Analytics</h2>
          <p>
            Our website may use cookies and similar technologies to enhance
            your browsing experience, remember preferences, and understand how
            visitors use the site.
          </p>

          <h3>Types of cookies we may use</h3>
          <ul>
            <li>
              <strong>Essential cookies</strong> - Required for basic website
              functionality
            </li>
            <li>
              <strong>Analytics cookies</strong> - Help us understand traffic
              and usage patterns
            </li>
            <li>
              <strong>Preference cookies</strong> - Remember your settings and
              choices
            </li>
          </ul>

          <p>
            You can control or disable cookies through your browser settings.
            Note that disabling certain cookies may affect website
            functionality.
          </p>

          <p>
            We may use privacy-friendly analytics tools to understand
            aggregate website traffic. These tools do not personally identify
            individual visitors.
          </p>
        </section>

        <section id="sharing">
          <h2>5. Information Sharing</h2>
          <p>
            We do not sell or rent your personal information. We may share
            information only in the following circumstances:
          </p>
          <ul>
            <li>
              <strong>Service providers</strong> - Trusted third-party vendors
              who help us operate our business (e.g., hosting, analytics,
              communication tools) under strict confidentiality agreements
            </li>
            <li>
              <strong>Legal requirements</strong> - When required by law,
              regulation, legal process, or governmental request
            </li>
            <li>
              <strong>Business transfers</strong> - In connection with a
              merger, acquisition, or sale of assets, with notice to affected
              users
            </li>
            <li>
              <strong>With your consent</strong> - When you explicitly
              authorize us to share your information
            </li>
          </ul>
        </section>

        <section id="security">
          <h2>6. Data Security</h2>
          <p>
            We take reasonable technical and organizational measures to
            protect your personal information from unauthorized access,
            alteration, disclosure, or destruction. These measures include:
          </p>
          <ul>
            <li>Encrypted transmission (HTTPS) across our website</li>
            <li>Access controls on internal systems and databases</li>
            <li>
              Secure third-party services for data storage and communication
            </li>
            <li>Regular review of our security practices</li>
          </ul>
          <p>
            However, no method of transmission over the internet or electronic
            storage is 100% secure. While we strive to protect your
            information, we cannot guarantee absolute security.
          </p>
        </section>

        <section id="retention">
          <h2>7. Data Retention</h2>
          <p>
            We retain personal information only as long as necessary to fulfill
            the purposes outlined in this policy, comply with legal
            obligations, resolve disputes, and enforce agreements.
          </p>
          <p>
            Contact form submissions and enquiry records are typically
            retained for up to <strong>24 months</strong>, unless a longer
            period is required for an ongoing business relationship or legal
            compliance.
          </p>
        </section>

        <section id="your-rights">
          <h2>8. Your Rights</h2>
          <p>
            Depending on your jurisdiction, you may have the following rights
            regarding your personal information:
          </p>
          <ul>
            <li>
              <strong>Access</strong> - Request a copy of the personal
              information we hold about you
            </li>
            <li>
              <strong>Correction</strong> - Request correction of inaccurate or
              incomplete information
            </li>
            <li>
              <strong>Deletion</strong> - Request deletion of your personal
              information, subject to legal obligations
            </li>
            <li>
              <strong>Objection</strong> - Object to certain processing of your
              information
            </li>
            <li>
              <strong>Portability</strong> - Request transfer of your
              information in a structured format
            </li>
            <li>
              <strong>Withdraw consent</strong> - Withdraw consent where
              processing is based on consent
            </li>
          </ul>
          <p>
            To exercise these rights, contact us at{' '}
            <a href="mailto:privacy@cybernaxe.com">privacy@cybernaxe.com</a>.
            We will respond within 30 days.
          </p>
        </section>

        <section id="third-party">
          <h2>9. Third-Party Services</h2>
          <p>
            Our website and services may use third-party tools that have their
            own privacy practices. These may include:
          </p>
          <ul>
            <li>
              <strong>Hosting</strong> - Vercel (website hosting and
              deployment)
            </li>
            <li>
              <strong>Communication</strong> - Google Workspace, WhatsApp (for
              enquiries and messaging)
            </li>
            <li>
              <strong>Analytics</strong> - Privacy-friendly analytics tools for
              aggregate traffic data
            </li>
            <li>
              <strong>Storage</strong> - Google Sheets (for contact form
              submissions)
            </li>
          </ul>
          <p>
            We recommend reviewing the privacy policies of these providers for
            more information about their practices.
          </p>
        </section>

        <section id="children">
          <h2>10. Children&apos;s Privacy</h2>
          <p>
            Our website and services are not directed to children under the
            age of 16. We do not knowingly collect personal information from
            children. If you believe a child has provided us with personal
            information, please contact us so we can delete it.
          </p>
        </section>

        <section id="international">
          <h2>11. International Transfers</h2>
          <p>
            Cybernaxe Solutions is based in Sri Lanka and serves clients
            globally. Your information may be transferred to and processed in
            countries other than your own, where data protection laws may
            differ.
          </p>
          <p>
            When transferring information internationally, we take steps to
            ensure it receives an adequate level of protection consistent with
            this Privacy Policy.
          </p>
        </section>

        <section id="changes">
          <h2>12. Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy from time to time to reflect
            changes in our practices, technology, legal requirements, or other
            factors. When we make material changes, we will update the &quot;Last
            updated&quot; date at the top of this page.
          </p>
          <p>
            We encourage you to review this Privacy Policy periodically to
            stay informed about how we protect your information.
          </p>
        </section>

        <section id="contact-privacy">
          <h2>13. Contact Us</h2>
          <p>
            If you have questions, concerns, or requests regarding this
            Privacy Policy or your personal information, please contact us:
          </p>

          <div className="legal-contact-card">
            <div className="legal-contact-row">
              <span className="legal-contact-label">Email</span>
              <a href="mailto:privacy@cybernaxe.com">
                privacy@cybernaxe.com
              </a>
            </div>

            <div className="legal-contact-row">
              <span className="legal-contact-label">WhatsApp</span>
              <a
                href="https://wa.me/94770202138"
                target="_blank"
                rel="noopener noreferrer"
              >
                +94 77 020 2138
              </a>
            </div>

            <div className="legal-contact-row">
              <span className="legal-contact-label">LinkedIn</span>
              <a
                href="https://www.linkedin.com/company/cybernaxe-solutions"
                target="_blank"
                rel="noopener noreferrer"
              >
                Cybernaxe Solutions
              </a>
            </div>

            <div className="legal-contact-row">
              <span className="legal-contact-label">Location</span>
              <span>Colombo, Sri Lanka</span>
            </div>
          </div>
        </section>

        <div className="legal-footer-note">
          <p>
            By using Cybernaxe Solutions&apos; website and services, you
            acknowledge that you have read and understood this Privacy Policy.
          </p>
        </div>
      </LegalLayout>
    </>
  );
}