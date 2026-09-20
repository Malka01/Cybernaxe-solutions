'use client';

export default function UIUXDesignIllustration({ className = '' }) {
  return (
    <svg
      viewBox="0 0 400 200"
      xmlns="http://www.w3.org/2000/svg"
      className={`ui-ux-design-illustration ${className}`}
      aria-hidden="true"
      preserveAspectRatio="xMidYMid meet"
    >
      <defs>
        <radialGradient id="uiuxGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#2A7BEC" stopOpacity="0.22" />
          <stop offset="60%" stopColor="#2A7BEC" stopOpacity="0.05" />
          <stop offset="100%" stopColor="#2A7BEC" stopOpacity="0" />
        </radialGradient>

        <linearGradient id="uiuxHeader" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#2A7BEC" stopOpacity="0.1" />
          <stop offset="100%" stopColor="#2A7BEC" stopOpacity="0.03" />
        </linearGradient>

        <linearGradient id="uiuxHero" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#2A7BEC" />
          <stop offset="100%" stopColor="#00C6FF" />
        </linearGradient>

        <radialGradient id="uiuxCursor" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="100%" stopColor="#2A7BEC" />
        </radialGradient>
      </defs>

      {/* Background grid */}
      <g opacity="0.13">
        {Array.from({ length: 11 }).map((_, i) => (
          <line
            key={`v${i}`}
            x1={i * 40}
            y1="0"
            x2={i * 40}
            y2="200"
            stroke="#2A7BEC"
            strokeWidth="0.6"
          />
        ))}
        {Array.from({ length: 6 }).map((_, i) => (
          <line
            key={`h${i}`}
            x1="0"
            y1={i * 40}
            x2="400"
            y2={i * 40}
            stroke="#2A7BEC"
            strokeWidth="0.6"
          />
        ))}
      </g>

      {/* Glow */}
      <circle cx="200" cy="100" r="105" fill="url(#uiuxGlow)" />

      {/* ─── Main artboard ─── */}
      <g>
        <rect
          x="70"
          y="30"
          width="220"
          height="150"
          rx="10"
          fill="#ffffff"
          stroke="#2A7BEC"
          strokeWidth="1.6"
        />

        {/* Header bar */}
        <rect x="70" y="30" width="220" height="22" rx="10" fill="url(#uiuxHeader)" />
        <rect x="70" y="42" width="220" height="10" fill="url(#uiuxHeader)" />
        <line
          x1="70"
          y1="52"
          x2="290"
          y2="52"
          stroke="#2A7BEC"
          strokeOpacity="0.18"
          strokeWidth="1"
        />

        {/* Logo */}
        <circle cx="84" cy="41" r="3" fill="#2A7BEC" fillOpacity="0.55" />
        <rect x="92" y="39" width="28" height="4" rx="2" fill="#2A7BEC" fillOpacity="0.35" />

        {/* Nav dots */}
        <rect x="210" y="39" width="14" height="4" rx="2" fill="#2A7BEC" fillOpacity="0.22" />
        <rect x="230" y="39" width="14" height="4" rx="2" fill="#2A7BEC" fillOpacity="0.22" />
        <rect x="250" y="39" width="14" height="4" rx="2" fill="#2A7BEC" fillOpacity="0.22" />
        <rect x="270" y="36" width="14" height="10" rx="5" fill="#2A7BEC" fillOpacity="0.65" />

        {/* Hero block */}
        <rect x="82" y="66" width="120" height="10" rx="3" fill="url(#uiuxHero)" />
        <rect x="82" y="82" width="170" height="4" rx="2" fill="#2A7BEC" fillOpacity="0.2" />
        <rect x="82" y="90" width="150" height="4" rx="2" fill="#2A7BEC" fillOpacity="0.2" />
        <rect x="82" y="104" width="56" height="14" rx="5" fill="#2A7BEC" />
        <rect x="146" y="104" width="46" height="14" rx="5" fill="none" stroke="#2A7BEC" strokeOpacity="0.35" strokeWidth="1" />

        {/* Content cards (3) */}
        {[0, 1, 2].map((i) => (
          <g key={`card-${i}`} transform={`translate(${82 + i * 60} 130)`}>
            <rect width="50" height="40" rx="5" fill="#F8FAFF" stroke="#2A7BEC" strokeOpacity="0.2" strokeWidth="0.8" />
            <circle cx="12" cy="12" r="5" fill="#2A7BEC" fillOpacity="0.3" />
            <rect x="6" y="24" width="38" height="3" rx="1.5" fill="#2A7BEC" fillOpacity="0.22" />
            <rect x="6" y="31" width="28" height="3" rx="1.5" fill="#2A7BEC" fillOpacity="0.22" />
          </g>
        ))}
      </g>

      {/* ─── Selection rectangle around hero ─── */}
      <g>
        <rect
          x="76"
          y="60"
          width="146"
          height="62"
          rx="4"
          fill="none"
          stroke="#2A7BEC"
          strokeWidth="1"
          strokeDasharray="3 3"
        />
        {/* Corner handles */}
        <circle cx="76" cy="60" r="2.5" fill="#ffffff" stroke="#2A7BEC" strokeWidth="1.2" />
        <circle cx="222" cy="60" r="2.5" fill="#ffffff" stroke="#2A7BEC" strokeWidth="1.2" />
        <circle cx="76" cy="122" r="2.5" fill="#ffffff" stroke="#2A7BEC" strokeWidth="1.2" />
        <circle cx="222" cy="122" r="2.5" fill="#ffffff" stroke="#2A7BEC" strokeWidth="1.2" />
      </g>

      {/* ─── Cursor pointer ─── */}
      <g transform="translate(196 118)">
        <path
          d="M0 0 L0 15 L4.5 11 L8.5 17 L11 15.5 L7 9.5 L12 9 Z"
          fill="#0A0F1D"
          stroke="#ffffff"
          strokeWidth="1.2"
          strokeLinejoin="round"
        />
        {/* Click ripple */}
        <circle r="3" fill="none" stroke="#2A7BEC" strokeWidth="1.2" opacity="0.6">
          <animate attributeName="r" values="3;14" dur="1.8s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0.6;0" dur="1.8s" repeatCount="indefinite" />
        </circle>
      </g>

      {/* ─── Color palette (top-left floating) ─── */}
      <g transform="translate(38 60)">
        <circle r="22" fill="#ffffff" stroke="#2A7BEC" strokeWidth="1.4" />
        <circle cx="-6" cy="-4" r="5" fill="#2A7BEC" />
        <circle cx="5" cy="-4" r="5" fill="#00C6FF" />
        <circle cx="-6" cy="6" r="5" fill="#10B981" />
        <circle cx="5" cy="6" r="5" fill="#F59E0B" />
      </g>

      {/* ─── Layers panel (right floating) ─── */}
      <g transform="translate(330 92)">
        <rect x="-30" y="-45" width="62" height="90" rx="8" fill="#ffffff" stroke="#2A7BEC" strokeWidth="1.4" />
        <line
          x1="-30"
          y1="-30"
          x2="32"
          y2="-30"
          stroke="#2A7BEC"
          strokeOpacity="0.18"
          strokeWidth="1"
        />
        <rect x="-24" y="-25" width="20" height="3" rx="1.5" fill="#2A7BEC" fillOpacity="0.4" />

        {[0, 1, 2, 3].map((i) => (
          <g key={`layer-${i}`} transform={`translate(-22 ${-15 + i * 15})`}>
            <rect x="0" y="0" width="5" height="5" rx="1" fill="#2A7BEC" fillOpacity={i === 1 ? 0.85 : 0.45} />
            <rect
              x="10"
              y="1"
              width={i === 1 ? 34 : 30}
              height="3"
              rx="1.5"
              fill="#2A7BEC"
              fillOpacity={i === 1 ? 0.5 : 0.22}
            />
          </g>
        ))}
      </g>

      {/* ─── Sparkles ─── */}
      <circle cx="340" cy="45" r="2.5" fill="#2A7BEC" opacity="0.4" />
      <circle cx="60" cy="145" r="2" fill="#00C6FF" opacity="0.5" />
      <circle cx="350" cy="180" r="2" fill="#10B981" opacity="0.4" />
    </svg>
  );
}