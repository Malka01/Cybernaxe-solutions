'use client';

import Head from 'next/head';
import LegalLayout from '@/components/LegalLayout';

const tocItems = [
  { label: '1. Acceptance of Terms', href: '#acceptance' },
  { label: '2. Our Services', href: '#services' },
  { label: '3. Acceptable Use', href: '#use' },
  { label: '4. Intellectual Property', href: '#ip' },
  { label: '5. Client Responsibilities', href: '#client' },
  { label: '6. Payments & Billing', href: '#payment' },
  { label: '7. Disclaimers', href: '#warranty' },
  { label: '8. Limitation of Liability', href: '#liability' },
  { label: '9. Termination', href: '#termination' },
  { label: '10. Governing Law', href: '#governing' },
  { label: '11. Changes to Terms', href: '#changes-terms' },
  { label: '12. Contact', href: '#contact-terms' },
];

export default function Terms() {
  return (
    <>
      <Head>
        <title>Terms & Conditions | Cybernaxe Solutions</title>
        <meta
          name="description"
          content="Terms and conditions governing the use of Cybernaxe Solutions website and services."
        />
      </Head>

      <LegalLayout
        label="Legal"
        title="Terms & Conditions"
        subtitle="The terms governing your use of our website and services."
        tocItems={tocItems}
      >
        <section id="acceptance">
          <h2>1. Acceptance of Terms</h2>
          <p>
            By accessing or using the Cybernaxe Solutions website or engaging
            our services, you agree to be bound by these Terms & Conditions.
            If you do not agree, please do not use our website or services.
          </p>
        </section>

        <section id="services">
          <h2>2. Our Services</h2>
          <p>
            Cybernaxe Solutions provides AI agent development, business
            automation, custom software, and web application services.
            Specific scope, deliverables, timelines, and pricing are defined
            in individual project agreements or proposals.
          </p>
        </section>

        <section id="use">
          <h2>3. Acceptable Use</h2>
          <p>You agree not to use our website or services to:</p>
          <ul>
            <li>Violate any applicable laws or regulations</li>
            <li>Infringe on intellectual property or privacy rights</li>
            <li>Transmit malware, spam, or harmful content</li>
            <li>Attempt unauthorized access to our systems</li>
            <li>Interfere with the operation of our website or services</li>
          </ul>
        </section>

        <section id="ip">
          <h2>4. Intellectual Property</h2>
          <p>
            All content on this website - including text, graphics, logos,
            code, and design - is the property of Cybernaxe Solutions or its
            licensors and is protected by applicable intellectual property
            laws.
          </p>
          <p>
            Ownership of custom deliverables (software, code, designs) is
            defined in individual project agreements. Unless otherwise stated,
            clients receive a license to use deliverables upon full payment.
          </p>
        </section>

        <section id="client">
          <h2>5. Client Responsibilities</h2>
          <p>When engaging our services, you agree to:</p>
          <ul>
            <li>Provide accurate and complete project information</li>
            <li>Respond to communications in a timely manner</li>
            <li>Provide necessary access, content, and approvals</li>
            <li>Ensure you have rights to any materials you provide</li>
          </ul>
        </section>

        <section id="payment">
          <h2>6. Payments & Billing</h2>
          <p>
            Payment terms, milestones, and currencies are defined in
            individual project agreements. Late payments may incur additional
            fees or suspension of services.
          </p>
        </section>

        <section id="warranty">
          <h2>7. Disclaimers</h2>
          <p>
            Our website and services are provided &quot;as is&ldquo; and &quot;as available.&quot;
            We make no warranties, express or implied, regarding the accuracy,
            reliability, or completeness of information on our website.
          </p>
        </section>

        <section id="liability">
          <h2>8. Limitation of Liability</h2>
          <p>
            To the maximum extent permitted by law, Cybernaxe Solutions shall
            not be liable for any indirect, incidental, special, or
            consequential damages arising from your use of our website or
            services.
          </p>
        </section>

        <section id="termination">
          <h2>9. Termination</h2>
          <p>
            We reserve the right to suspend or terminate access to our website
            or services at any time, with or without notice, for conduct that
            violates these Terms or is otherwise harmful to us or other users.
          </p>
        </section>

        <section id="governing">
          <h2>10. Governing Law</h2>
          <p>
            These Terms are governed by the laws of Sri Lanka. Any disputes
            shall be resolved in the courts of Colombo, Sri Lanka, unless
            otherwise agreed in writing.
          </p>
        </section>

        <section id="changes-terms">
          <h2>11. Changes to Terms</h2>
          <p>
            We may update these Terms from time to time. Continued use of our
            website or services after changes constitutes acceptance of the
            updated Terms.
          </p>
        </section>

        <section id="contact-terms">
          <h2>12. Contact</h2>
          <p>
            For questions about these Terms & Conditions, contact us at{' '}
            <a href="mailto:cybernaxesolutions@gmail.com">cybernaxesolutions@gmail.com</a>.
          </p>

          <div className="legal-contact-card">
            <div className="legal-contact-row">
              <span className="legal-contact-label">Email</span>
              <a href="mailto:cybernaxesolutions@gmail.com">cybernaxesolutions@gmail.com</a>
            </div>

            <div className="legal-contact-row">
              <span className="legal-contact-label">WhatsApp</span>
              <a
                href="https://wa.me/94788522997"
                target="_blank"
                rel="noopener noreferrer"
              >
                +94 78 852 2997
              </a>
            </div>

            <div className="legal-contact-row">
              <span className="legal-contact-label">Location</span>
              <span>Colombo, Sri Lanka</span>
            </div>
          </div>
        </section>
      </LegalLayout>
    </>
  );
}