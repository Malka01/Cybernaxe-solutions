'use client';

export default function AIAgentIllustration({ className = '' }) {
  return (
    <svg
      viewBox="0 0 400 200"
      xmlns="http://www.w3.org/2000/svg"
      className={`ai-agent-illustration ${className}`}
      aria-hidden="true"
      preserveAspectRatio="xMidYMid meet"
    >
      <defs>
        <radialGradient id="agentGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#2A7BEC" stopOpacity="0.28" />
          <stop offset="60%" stopColor="#2A7BEC" stopOpacity="0.06" />
          <stop offset="100%" stopColor="#2A7BEC" stopOpacity="0" />
        </radialGradient>

        <linearGradient id="agentNodeFill" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="100%" stopColor="#F0F7FF" />
        </linearGradient>

        <linearGradient id="agentRobotFill" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#2A7BEC" stopOpacity="0.18" />
          <stop offset="100%" stopColor="#00C6FF" stopOpacity="0.08" />
        </linearGradient>

        <linearGradient id="agentLineGrad" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#2A7BEC" stopOpacity="0.1" />
          <stop offset="50%" stopColor="#2A7BEC" stopOpacity="0.6" />
          <stop offset="100%" stopColor="#00C6FF" stopOpacity="0.4" />
        </linearGradient>

        <radialGradient id="agentDot" cx="50%" cy="50%" r="50%">
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

      {/* Center glow */}
      <circle cx="200" cy="100" r="95" fill="url(#agentGlow)" />

      {/* Orbit ring */}
      <circle cx="200" cy="100" r="78" fill="none" stroke="#2A7BEC" strokeOpacity="0.2" strokeWidth="1" strokeDasharray="6 6" />

      {/* ─── Robot head ─── */}
      <g>
        {/* Antenna */}
        <line x1="200" y1="42" x2="200" y2="58" stroke="#2A7BEC" strokeWidth="1.6" strokeLinecap="round" />
        <circle cx="200" cy="40" r="3.5" fill="#2A7BEC">
          <animate attributeName="opacity" values="0.5;1;0.5" dur="2s" repeatCount="indefinite" />
        </circle>

        {/* Head */}
        <rect
          x="160"
          y="58"
          width="80"
          height="74"
          rx="16"
          fill="url(#agentRobotFill)"
          stroke="#2A7BEC"
          strokeWidth="1.8"
        />

        {/* Eyes */}
        <circle cx="182" cy="88" r="5" fill="#2A7BEC">
          <animate attributeName="r" values="5;5;1;5;5" dur="4s" repeatCount="indefinite" />
        </circle>
        <circle cx="218" cy="88" r="5" fill="#2A7BEC">
          <animate attributeName="r" values="5;5;1;5;5" dur="4s" repeatCount="indefinite" />
        </circle>

        {/* Mouth */}
        <path
          d="M182 110 Q200 118 218 110"
          fill="none"
          stroke="#2A7BEC"
          strokeWidth="1.8"
          strokeLinecap="round"
        />

        {/* Side "ears" */}
        <rect x="152" y="82" width="6" height="20" rx="3" fill="#2A7BEC" fillOpacity="0.5" />
        <rect x="242" y="82" width="6" height="20" rx="3" fill="#2A7BEC" fillOpacity="0.5" />
      </g>

      {/* ─── Connection lines to agent nodes ─── */}
      <line x1="160" y1="95" x2="70" y2="60" stroke="url(#agentLineGrad)" strokeWidth="1.4" />
      <line x1="240" y1="95" x2="330" y2="60" stroke="url(#agentLineGrad)" strokeWidth="1.4" />
      <line x1="160" y1="115" x2="70" y2="150" stroke="url(#agentLineGrad)" strokeWidth="1.4" />
      <line x1="240" y1="115" x2="330" y2="150" stroke="url(#agentLineGrad)" strokeWidth="1.4" />

      {/* ─── Agent nodes ─── */}
      {/* Top-left: Chat bubble */}
      <g>
        <rect x="40" y="38" width="42" height="42" rx="10" fill="url(#agentNodeFill)" stroke="#2A7BEC" strokeWidth="1.4" />
        <path
          d="M52 54 Q52 50 56 50 L66 50 Q70 50 70 54 L70 62 Q70 66 66 66 L60 66 L56 70 L56 66 L56 66 Q52 66 52 62 Z"
          fill="none"
          stroke="#2A7BEC"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
        <circle cx="58" cy="58" r="0.9" fill="#2A7BEC" />
        <circle cx="61" cy="58" r="0.9" fill="#2A7BEC" />
        <circle cx="64" cy="58" r="0.9" fill="#2A7BEC" />
      </g>

      {/* Top-right: Gear */}
      <g>
        <rect x="318" y="38" width="42" height="42" rx="10" fill="url(#agentNodeFill)" stroke="#2A7BEC" strokeWidth="1.4" />
        <circle cx="339" cy="59" r="7" fill="none" stroke="#2A7BEC" strokeWidth="1.6" />
        <circle cx="339" cy="59" r="3" fill="none" stroke="#2A7BEC" strokeWidth="1.6" />
        {Array.from({ length: 8 }).map((_, i) => {
          const angle = (i * 45 * Math.PI) / 180;
          const x1 = 339 + Math.cos(angle) * 7;
          const y1 = 59 + Math.sin(angle) * 7;
          const x2 = 339 + Math.cos(angle) * 10;
          const y2 = 59 + Math.sin(angle) * 10;
          return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="#2A7BEC" strokeWidth="1.6" strokeLinecap="round" />;
        })}
      </g>

      {/* Bottom-left: Lightning bolt */}
      <g>
        <rect x="40" y="128" width="42" height="42" rx="10" fill="url(#agentNodeFill)" stroke="#2A7BEC" strokeWidth="1.4" />
        <path
          d="M62 138 L54 152 L60 152 L57 162 L66 148 L60 148 Z"
          fill="#2A7BEC"
          fillOpacity="0.85"
          stroke="#2A7BEC"
          strokeWidth="1"
          strokeLinejoin="round"
        />
      </g>

      {/* Bottom-right: Users/people */}
      <g>
        <rect x="318" y="128" width="42" height="42" rx="10" fill="url(#agentNodeFill)" stroke="#2A7BEC" strokeWidth="1.4" />
        <circle cx="332" cy="144" r="4" fill="none" stroke="#2A7BEC" strokeWidth="1.5" />
        <path d="M325 156 Q325 150 332 150 Q339 150 339 156" fill="none" stroke="#2A7BEC" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="348" cy="146" r="3.5" fill="none" stroke="#2A7BEC" strokeWidth="1.4" />
        <path d="M342 158 Q342 152 348 152 Q354 152 354 158" fill="none" stroke="#2A7BEC" strokeWidth="1.4" strokeLinecap="round" />
      </g>

      {/* Animated data dots */}
      <circle r="3" fill="url(#agentDot)">
        <animateMotion dur="3s" repeatCount="indefinite" path="M200,100 L70,60" />
      </circle>
      <circle r="3" fill="url(#agentDot)">
        <animateMotion dur="3s" begin="0.75s" repeatCount="indefinite" path="M200,100 L330,60" />
      </circle>
      <circle r="3" fill="url(#agentDot)">
        <animateMotion dur="3s" begin="1.5s" repeatCount="indefinite" path="M200,100 L70,150" />
      </circle>
      <circle r="3" fill="url(#agentDot)">
        <animateMotion dur="3s" begin="2.25s" repeatCount="indefinite" path="M200,100 L330,150" />
      </circle>
    </svg>
  );
}