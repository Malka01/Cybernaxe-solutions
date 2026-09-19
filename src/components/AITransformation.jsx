'use client';

import { useEffect, useState } from 'react';
import { SiInductiveautomation } from "react-icons/si";

const stages = [
  {
    number: '01',
    title: 'Business Challenge',
    description: 'Manual work, missed leads & slow processes',
  },
  {
    number: '02',
    title: 'AI Intelligence',
    description: 'AI understands your business & customers',
  },
  {
    number: '03',
    title: 'Automation',
    description: 'Smart workflows run automatically',
  },
  {
    number: '04',
    title: 'Business Growth',
    description: 'Faster operations, better customer experience',
  },
];

export default function AITransformation() {
  const [activeStage, setActiveStage] = useState(0);

  useEffect(() => {
    const prefersReduced =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReduced) return;

    const interval = setInterval(() => {
      setActiveStage((current) => (current + 1) % stages.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="ai-transformation">
      {/* Background */}
      <div className="ai-background-glow" />
      <div className="ai-grid" />

      {/* Decorative particles */}
      <span className="ai-particle particle-1" />
      <span className="ai-particle particle-2" />
      <span className="ai-particle particle-3" />
      <span className="ai-particle particle-4" />
      <span className="ai-particle particle-5" />
      <span className="ai-particle particle-6" />

      {/* Main system */}
      <div className="ai-system">
        {/* Orbit rings */}
        <div className="ai-orbit orbit-1" />
        <div className="ai-orbit orbit-2" />
        <div className="ai-orbit orbit-3" />

        {/* Connection lines */}
        <div className="connection connection-top" />
        <div className="connection connection-left" />
        <div className="connection connection-right" />
        <div className="connection connection-bottom" />

        {/* Animated data flows */}
        <span className="data-flow flow-top" />
        <span className="data-flow flow-left" />
        <span className="data-flow flow-right" />
        <span className="data-flow flow-bottom" />

        {/* Center AI */}
        <div className="ai-core-wrapper">
          <div className="ai-core-pulse" />
          <div className="ai-core">
            <div className="ai-core-inner">
              <span className="ai-core-symbol">✦</span>
              <span className="ai-core-text">AI</span>
            </div>
          </div>
          <div className="ai-core-label">
            <strong>CYBERNAXE</strong>
            {/* <span>CYBERNAXE</span> */}
              <br />
            <strong>AI ENGINE</strong>
          </div>
        </div>

        {/* Top node */}
        <div
          className={`ai-node node-top ${activeStage === 0 ? 'active' : ''}`}
        >
          <div className="node-icon">◈</div>
          <div>
            <span className="node-number">01</span>
            <strong>Business</strong>
            <small>Challenges</small>
          </div>
        </div>

        {/* Left node */}
        <div
          className={`ai-node node-left ${activeStage === 1 ? 'active' : ''}`}
        >
          <div className="node-icon">✦</div>
          <div>
            <span className="node-number">02</span>
            <strong>AI Agents</strong>
            <small>Intelligence</small>
          </div>
        </div>

        {/* Right node */}
        <div
          className={`ai-node node-right ${activeStage === 2 ? 'active' : ''}`}
        >
          <div className="node-icon"><SiInductiveautomation /></div>
          <div>
            <span className="node-number">03</span>
            <strong>Automation</strong>
            <small>Workflows</small>
          </div>
        </div>

        {/* Bottom node */}
        <div
          className={`ai-node node-bottom ${activeStage === 3 ? 'active' : ''}`}
        >
          <div className="node-icon">↗</div>
          <div>
            <span className="node-number">04</span>
            <strong>Growth</strong>
            <small>Business Impact</small>
          </div>
        </div>
      </div>

      {/* Bottom status */}
      <div className="ai-status">
        <div className="status-indicator">
          <span />
          SYSTEM ACTIVE
        </div>

        <div className="status-stage" aria-live="polite">
          <span>{stages[activeStage].number}</span>
          <div>
            <strong>{stages[activeStage].title}</strong>
            <small>{stages[activeStage].description}</small>
          </div>
        </div>
      </div>
    </div>
  );
}