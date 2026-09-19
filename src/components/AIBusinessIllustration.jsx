'use client';

export default function AIBusinessIllustration({ className = '' }) {
  return (
    <svg
      viewBox="0 0 400 200"
      xmlns="http://www.w3.org/2000/svg"
      className={`ai-business-illustration ${className}`}
      aria-hidden="true"
      preserveAspectRatio="xMidYMid meet"
    >
      <defs>
        {/* Center glow */}
        <radialGradient id="aiCoreGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#2A7BEC" stopOpacity="0.30" />
          <stop offset="60%" stopColor="#2A7BEC" stopOpacity="0.06" />
          <stop offset="100%" stopColor="#2A7BEC" stopOpacity="0" />
        </radialGradient>

        {/* Node background */}
        <linearGradient id="aiNodeFill" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="100%" stopColor="#F0F7FF" />
        </linearGradient>

        {/* Connection line */}
        <linearGradient id="aiLineGrad" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#2A7BEC" stopOpacity="0.05" />
          <stop offset="50%" stopColor="#2A7BEC" stopOpacity="0.55" />
          <stop offset="100%" stopColor="#00C6FF" stopOpacity="0.35" />
        </linearGradient>

        {/* Core hexagon fill */}
        <linearGradient id="aiCoreFill" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#2A7BEC" stopOpacity="0.16" />
          <stop offset="100%" stopColor="#00C6FF" stopOpacity="0.08" />
        </linearGradient>

        {/* Data dot */}
        <radialGradient id="aiDot" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="40%" stopColor="#00C6FF" />
          <stop offset="100%" stopColor="#00C6FF" stopOpacity="0.3" />
        </radialGradient>
      </defs>

      {/* ─── Background grid ─── */}
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

      {/* ─── Center glow ─── */}
      <circle cx="200" cy="100" r="95" fill="url(#aiCoreGlow)" />

      {/* ─── Orbit rings ─── */}
      <circle
        cx="200"
        cy="100"
        r="72"
        fill="none"
        stroke="#2A7BEC"
        strokeOpacity="0.18"
        strokeWidth="1"
        strokeDasharray="5 5"
      />
      <circle
        cx="200"
        cy="100"
        r="92"
        fill="none"
        stroke="#2A7BEC"
        strokeOpacity="0.07"
        strokeWidth="1"
      />

      {/* ─── Connection lines ─── */}
      <line
        x1="200"
        y1="100"
        x2="60"
        y2="50"
        stroke="url(#aiLineGrad)"
        strokeWidth="1.5"
      />
      <line
        x1="200"
        y1="100"
        x2="340"
        y2="50"
        stroke="url(#aiLineGrad)"
        strokeWidth="1.5"
      />
      <line
        x1="200"
        y1="100"
        x2="60"
        y2="150"
        stroke="url(#aiLineGrad)"
        strokeWidth="1.5"
      />
      <line
        x1="200"
        y1="100"
        x2="340"
        y2="150"
        stroke="url(#aiLineGrad)"
        strokeWidth="1.5"
      />

      {/* ─── Node: Intelligent Search (top-left) ─── */}
      <g>
        <rect
          x="40"
          y="30"
          width="40"
          height="40"
          rx="9"
          fill="url(#aiNodeFill)"
          stroke="#2A7BEC"
          strokeWidth="1.4"
        />
        <circle
          cx="56"
          cy="46"
          r="6"
          fill="none"
          stroke="#2A7BEC"
          strokeWidth="1.7"
        />
        <line
          x1="60"
          y1="50"
          x2="66"
          y2="56"
          stroke="#2A7BEC"
          strokeWidth="1.7"
          strokeLinecap="round"
        />
      </g>

      {/* ─── Node: AI Assistant (top-right) ─── */}
      <g>
        <rect
          x="320"
          y="30"
          width="40"
          height="40"
          rx="9"
          fill="url(#aiNodeFill)"
          stroke="#2A7BEC"
          strokeWidth="1.4"
        />
        <path
          d="M331 44 Q331 40 335 40 L346 40 Q350 40 350 44 L350 52 Q350 56 346 56 L340 56 L336 60 L336 56 L335 56 Q331 56 331 52 Z"
          fill="none"
          stroke="#2A7BEC"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
        <circle cx="338" cy="48" r="1" fill="#2A7BEC" />
        <circle cx="342" cy="48" r="1" fill="#2A7BEC" />
        <circle cx="346" cy="48" r="1" fill="#2A7BEC" />
      </g>

      {/* ─── Node: Document Processing (bottom-left) ─── */}
      <g>
        <rect
          x="40"
          y="130"
          width="40"
          height="40"
          rx="9"
          fill="url(#aiNodeFill)"
          stroke="#2A7BEC"
          strokeWidth="1.4"
        />
        <rect
          x="50"
          y="140"
          width="20"
          height="24"
          rx="2"
          fill="none"
          stroke="#2A7BEC"
          strokeWidth="1.5"
        />
        <line
          x1="54"
          y1="147"
          x2="66"
          y2="147"
          stroke="#2A7BEC"
          strokeWidth="1.4"
          strokeLinecap="round"
        />
        <line
          x1="54"
          y1="152"
          x2="66"
          y2="152"
          stroke="#2A7BEC"
          strokeWidth="1.4"
          strokeLinecap="round"
        />
        <line
          x1="54"
          y1="157"
          x2="62"
          y2="157"
          stroke="#2A7BEC"
          strokeWidth="1.4"
          strokeLinecap="round"
        />
      </g>

      {/* ─── Node: Knowledge Retrieval (bottom-right) ─── */}
      <g>
        <rect
          x="320"
          y="130"
          width="40"
          height="40"
          rx="9"
          fill="url(#aiNodeFill)"
          stroke="#2A7BEC"
          strokeWidth="1.4"
        />
        <ellipse
          cx="340"
          cy="142"
          rx="10"
          ry="4"
          fill="none"
          stroke="#2A7BEC"
          strokeWidth="1.5"
        />
        <path
          d="M330 142 L330 158 Q330 162 340 162 Q350 162 350 158 L350 142"
          fill="none"
          stroke="#2A7BEC"
          strokeWidth="1.5"
        />
        <path
          d="M330 150 Q330 154 340 154 Q350 154 350 150"
          fill="none"
          stroke="#2A7BEC"
          strokeWidth="1.4"
        />
      </g>

      {/* ─── Center AI core ─── */}
      <g>
        <polygon
          points="200,60 235,80 235,120 200,140 165,120 165,80"
          fill="url(#aiCoreFill)"
          stroke="#2A7BEC"
          strokeWidth="1.6"
          strokeLinejoin="round"
        />
        <polygon
          points="200,72 224,86 224,114 200,128 176,114 176,86"
          fill="#2A7BEC"
          fillOpacity="0.08"
          stroke="#2A7BEC"
          strokeWidth="1"
          strokeLinejoin="round"
          strokeOpacity="0.5"
        />
        <text
          x="200"
          y="108"
          textAnchor="middle"
          fill="#2A7BEC"
          fontSize="22"
          fontWeight="800"
          fontFamily="Inter, system-ui, sans-serif"
          letterSpacing="1"
        >
          AI
        </text>
      </g>

      {/* ─── Animated data dots ─── */}
      <circle r="3" fill="url(#aiDot)">
        <animateMotion
          dur="3s"
          repeatCount="indefinite"
          path="M200,100 L60,50"
        />
      </circle>
      <circle r="3" fill="url(#aiDot)">
        <animateMotion
          dur="3s"
          begin="0.75s"
          repeatCount="indefinite"
          path="M200,100 L340,50"
        />
      </circle>
      <circle r="3" fill="url(#aiDot)">
        <animateMotion
          dur="3s"
          begin="1.5s"
          repeatCount="indefinite"
          path="M200,100 L60,150"
        />
      </circle>
      <circle r="3" fill="url(#aiDot)">
        <animateMotion
          dur="3s"
          begin="2.25s"
          repeatCount="indefinite"
          path="M200,100 L340,150"
        />
      </circle>
    </svg>
  );
}