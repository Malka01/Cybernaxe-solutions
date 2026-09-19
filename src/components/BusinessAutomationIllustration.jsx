'use client';

export default function BusinessAutomationIllustration({ className = '' }) {
  return (
    <svg
      viewBox="0 0 400 200"
      xmlns="http://www.w3.org/2000/svg"
      className={`business-automation-illustration ${className}`}
      aria-hidden="true"
      preserveAspectRatio="xMidYMid meet"
    >
      <defs>
        <radialGradient id="autoGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#2A7BEC" stopOpacity="0.24" />
          <stop offset="60%" stopColor="#2A7BEC" stopOpacity="0.05" />
          <stop offset="100%" stopColor="#2A7BEC" stopOpacity="0" />
        </radialGradient>

        <linearGradient id="autoNodeFill" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="100%" stopColor="#F0F7FF" />
        </linearGradient>

        <linearGradient id="autoPath" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#2A7BEC" stopOpacity="0.15" />
          <stop offset="50%" stopColor="#2A7BEC" stopOpacity="0.7" />
          <stop offset="100%" stopColor="#00C6FF" stopOpacity="0.4" />
        </linearGradient>

        <radialGradient id="autoDot" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="40%" stopColor="#00C6FF" />
          <stop offset="100%" stopColor="#00C6FF" stopOpacity="0.3" />
        </radialGradient>
      </defs>

      {/* Background grid */}
      <g opacity="0.13">
        {Array.from({ length: 11 }).map((_, i) => (
          <line key={`v${i}`} x1={i * 40} y1="0" x2={i * 40} y2="200" stroke="#2A7BEC" strokeWidth="0.6" />
        ))}
        {Array.from({ length: 6 }).map((_, i) => (
          <line key={`h${i}`} x1="0" y1={i * 40} x2="400" y2={i * 40} stroke="#2A7BEC" strokeWidth="0.6" />
        ))}
      </g>

      {/* Glow */}
      <circle cx="200" cy="100" r="105" fill="url(#autoGlow)" />

      {/* ─── Workflow nodes ─── */}
      {/* Node 1 — Trigger (form) */}
      <g>
        <rect x="30" y="80" width="56" height="56" rx="12" fill="url(#autoNodeFill)" stroke="#2A7BEC" strokeWidth="1.6" />
        <rect x="44" y="94" width="28" height="6" rx="2" fill="#2A7BEC" fillOpacity="0.85" />
        <rect x="44" y="104" width="28" height="4" rx="2" fill="#2A7BEC" fillOpacity="0.4" />
        <rect x="44" y="112" width="20" height="4" rx="2" fill="#2A7BEC" fillOpacity="0.4" />
        <circle cx="76" cy="96" r="2.5" fill="#2A7BEC" />
      </g>

      {/* Node 2 — Process (gear) */}
      <g>
        <rect x="140" y="80" width="56" height="56" rx="12" fill="url(#autoNodeFill)" stroke="#2A7BEC" strokeWidth="1.6" />
        <g transform="translate(168 108)">
          <circle r="10" fill="none" stroke="#2A7BEC" strokeWidth="1.8">
            <animateTransform attributeName="transform" type="rotate" from="0" to="360" dur="6s" repeatCount="indefinite" />
          </circle>
          <circle r="4" fill="none" stroke="#2A7BEC" strokeWidth="1.8" />
          {Array.from({ length: 8 }).map((_, i) => {
            const a = (i * 45 * Math.PI) / 180;
            return (
              <line
                key={i}
                x1={Math.cos(a) * 10}
                y1={Math.sin(a) * 10}
                x2={Math.cos(a) * 14}
                y2={Math.sin(a) * 14}
                stroke="#2A7BEC"
                strokeWidth="1.8"
                strokeLinecap="round"
              />
            );
          })}
        </g>
      </g>

      {/* Node 3 — Decision (branch) */}
      <g>
        <rect x="250" y="80" width="56" height="56" rx="12" fill="url(#autoNodeFill)" stroke="#2A7BEC" strokeWidth="1.6" />
        <path d="M278 96 L290 108 L278 120 L266 108 Z" fill="none" stroke="#2A7BEC" strokeWidth="1.6" strokeLinejoin="round" />
        <circle cx="278" cy="108" r="2" fill="#2A7BEC" />
      </g>

      {/* Node 4 — Output (check) */}
      <g>
        <rect x="356" y="80" width="28" height="56" rx="12" fill="url(#autoNodeFill)" stroke="#2A7BEC" strokeWidth="1.6" />
        <path
          d="M362 108 L368 114 L376 104"
          fill="none"
          stroke="#2A7BEC"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>

      {/* ─── Connection paths ─── */}
      <path d="M86 108 L140 108" stroke="url(#autoPath)" strokeWidth="2" />
      <path d="M196 108 L250 108" stroke="url(#autoPath)" strokeWidth="2" />
      <path d="M306 108 L356 108" stroke="url(#autoPath)" strokeWidth="2" />

      {/* Arrow markers */}
      <g fill="#2A7BEC">
        <path d="M136 104 L142 108 L136 112 Z" />
        <path d="M246 104 L252 108 L246 112 Z" />
        <path d="M352 104 L358 108 L352 112 Z" />
      </g>

      {/* ─── Animated data dots along path ─── */}
      <circle r="3" fill="url(#autoDot)">
        <animateMotion dur="4s" repeatCount="indefinite" path="M86,108 L356,108" />
      </circle>
      <circle r="3" fill="url(#autoDot)">
        <animateMotion dur="4s" begin="1.3s" repeatCount="indefinite" path="M86,108 L356,108" />
      </circle>
      <circle r="3" fill="url(#autoDot)">
        <animateMotion dur="4s" begin="2.6s" repeatCount="indefinite" path="M86,108 L356,108" />
      </circle>

      {/* ─── Loop-back path (branch returns) ─── */}
      <path
        d="M278 136 Q278 170 168 170 Q86 170 86 136"
        fill="none"
        stroke="#2A7BEC"
        strokeOpacity="0.28"
        strokeWidth="1.4"
        strokeDasharray="4 4"
      />

      {/* Loop label */}
      <rect x="150" y="164" width="60" height="14" rx="7" fill="#ffffff" stroke="#2A7BEC" strokeOpacity="0.3" strokeWidth="1" />
      <text
        x="180"
        y="174"
        textAnchor="middle"
        fill="#2A7BEC"
        fontSize="8"
        fontWeight="700"
        letterSpacing="1.2"
        fontFamily="Inter, system-ui, sans-serif"
      >
        RETRY
      </text>
    </svg>
  );
}