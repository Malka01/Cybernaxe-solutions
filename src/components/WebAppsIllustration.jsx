'use client';

export default function WebAppsIllustration({ className = '' }) {
  return (
    <svg
      viewBox="0 0 400 200"
      xmlns="http://www.w3.org/2000/svg"
      className={`web-apps-illustration ${className}`}
      aria-hidden="true"
      preserveAspectRatio="xMidYMid meet"
    >
      <defs>
        <radialGradient id="webGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#2A7BEC" stopOpacity="0.22" />
          <stop offset="60%" stopColor="#2A7BEC" stopOpacity="0.05" />
          <stop offset="100%" stopColor="#2A7BEC" stopOpacity="0" />
        </radialGradient>

        <linearGradient id="browserHeader" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#2A7BEC" stopOpacity="0.14" />
          <stop offset="100%" stopColor="#2A7BEC" stopOpacity="0.06" />
        </linearGradient>

        <linearGradient id="codeBg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#0E1526" />
          <stop offset="100%" stopColor="#0A0F1D" />
        </linearGradient>

        <linearGradient id="accentLine" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#2A7BEC" stopOpacity="0" />
          <stop offset="50%" stopColor="#2A7BEC" stopOpacity="0.85" />
          <stop offset="100%" stopColor="#00C6FF" stopOpacity="0" />
        </linearGradient>

        <linearGradient id="cursorGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#00C6FF" />
          <stop offset="100%" stopColor="#2A7BEC" />
        </linearGradient>
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
      <circle cx="200" cy="100" r="100" fill="url(#webGlow)" />

      {/* ─── Browser window ─── */}
      <g>
        {/* Window frame */}
        <rect
          x="60"
          y="30"
          width="280"
          height="160"
          rx="12"
          fill="#ffffff"
          stroke="#2A7BEC"
          strokeWidth="1.6"
        />

        {/* Header bar */}
        <path
          d="M60 42 Q60 30 72 30 L328 30 Q340 30 340 42 L340 54 L60 54 Z"
          fill="url(#browserHeader)"
        />
        <line x1="60" y1="54" x2="340" y2="54" stroke="#2A7BEC" strokeOpacity="0.25" strokeWidth="1" />

        {/* Traffic lights */}
        <circle cx="76" cy="42" r="4" fill="#FF5F57" />
        <circle cx="90" cy="42" r="4" fill="#FEBC2E" />
        <circle cx="104" cy="42" r="4" fill="#28C840" />

        {/* URL bar */}
        <rect x="120" y="36" width="180" height="12" rx="6" fill="#ffffff" fillOpacity="0.9" stroke="#2A7BEC" strokeOpacity="0.2" strokeWidth="0.8" />
        <circle cx="128" cy="42" r="2.5" fill="none" stroke="#2A7BEC" strokeWidth="1" />
        <line x1="128" y1="42" x2="130" y2="44" stroke="#2A7BEC" strokeWidth="1" strokeLinecap="round" />
        <text
          x="136"
          y="46"
          fill="#2A7BEC"
          fontSize="7"
          fontWeight="600"
          fontFamily="Inter, system-ui, sans-serif"
        >
          cybernaxe.com
        </text>
      </g>

      {/* ─── Code editor panel (left) ─── */}
      <g>
        <rect x="72" y="66" width="150" height="112" rx="6" fill="url(#codeBg)" />

        {/* Line numbers column */}
        <rect x="72" y="66" width="18" height="112" rx="6" fill="#070B14" fillOpacity="0.6" />

        {/* Line numbers */}
        {[0, 1, 2, 3, 4, 5, 6].map((i) => (
          <text
            key={i}
            x="81"
            y={86 + i * 13}
            textAnchor="middle"
            fill="#4B5568"
            fontSize="7"
            fontFamily="JetBrains Mono, monospace"
          >
            {i + 1}
          </text>
        ))}

        {/* Code lines — colorful syntax */}
        <g fontFamily="JetBrains Mono, monospace" fontSize="7" fontWeight="500">
          <text x="98" y="86" fill="#C084FC">
            import
          </text>
          <text x="128" y="86" fill="#8FB4FF">
            {'{'}
          </text>
          <text x="134" y="86" fill="#7DD3FC">
            Agent
          </text>
          <text x="158" y="86" fill="#8FB4FF">
            {'}'}
          </text>
          <text x="166" y="86" fill="#C084FC">
            from
          </text>
          <text x="188" y="86" fill="#34E0B0">
            &apos;ai&apos;
          </text>

          <text x="98" y="99" fill="#4B5568">
            {'// build'}
          </text>

          <text x="98" y="112" fill="#C084FC">
            const
          </text>
          <text x="122" y="112" fill="#FBBF6E">
            agent
          </text>
          <text x="146" y="112" fill="#8FB4FF">
            =
          </text>
          <text x="154" y="112" fill="#C084FC">
            new
          </text>
          <text x="172" y="112" fill="#7DD3FC">
            Agent
          </text>
          <text x="200" y="112" fill="#8FB4FF">
            ();
          </text>

          <text x="98" y="125" fill="#C084FC">
            await
          </text>
          <text x="126" y="125" fill="#FBBF6E">
            agent
          </text>
          <text x="154" y="125" fill="#8FB4FF">
            .
          </text>
          <text x="158" y="125" fill="#7DD3FC">
            deploy
          </text>
          <text x="186" y="125" fill="#8FB4FF">
            ();
          </text>

          <text x="98" y="138" fill="#34E0B0">
            &apos;Ready for production&apos;
          </text>
        </g>

        {/* Blinking cursor */}
        <rect x="98" y="146" width="6" height="9" fill="url(#cursorGrad)">
          <animate attributeName="opacity" values="1;0;1" dur="1.1s" repeatCount="indefinite" />
        </rect>
      </g>

      {/* ─── Preview panel (right) ─── */}
      <g>
        <rect x="232" y="66" width="98" height="112" rx="6" fill="#F8FAFF" stroke="#2A7BEC" strokeOpacity="0.2" strokeWidth="1" />

        {/* Preview header */}
        <rect x="232" y="66" width="98" height="16" rx="6" fill="#2A7BEC" fillOpacity="0.08" />
        <rect x="232" y="76" width="98" height="6" fill="#2A7BEC" fillOpacity="0.08" />
        <circle cx="242" cy="74" r="2" fill="#2A7BEC" fillOpacity="0.5" />
        <rect x="248" y="72" width="30" height="4" rx="2" fill="#2A7BEC" fillOpacity="0.35" />

        {/* Preview content blocks */}
        <rect x="242" y="92" width="60" height="8" rx="3" fill="#2A7BEC" fillOpacity="0.65" />
        <rect x="242" y="106" width="78" height="4" rx="2" fill="#2A7BEC" fillOpacity="0.22" />
        <rect x="242" y="114" width="66" height="4" rx="2" fill="#2A7BEC" fillOpacity="0.22" />

        {/* Button in preview */}
        <rect x="242" y="126" width="42" height="14" rx="6" fill="#2A7BEC" />
        <text
          x="263"
          y="136"
          textAnchor="middle"
          fill="#ffffff"
          fontSize="7"
          fontWeight="700"
          fontFamily="Inter, system-ui, sans-serif"
        >
          Deploy
        </text>

        {/* Chart bars */}
        <rect x="292" y="130" width="6" height="10" rx="1.5" fill="#2A7BEC" fillOpacity="0.35" />
        <rect x="302" y="124" width="6" height="16" rx="1.5" fill="#2A7BEC" fillOpacity="0.55" />
        <rect x="312" y="118" width="6" height="22" rx="1.5" fill="#2A7BEC" fillOpacity="0.85" />
      </g>

      {/* ─── Deployment pulse line ─── */}
      <line x1="222" y1="122" x2="232" y2="122" stroke="url(#accentLine)" strokeWidth="2" />

      {/* ─── Floating status badge ─── */}
      <g>
        <rect x="270" y="176" width="60" height="18" rx="9" fill="#ffffff" stroke="#2A7BEC" strokeOpacity="0.35" strokeWidth="1" />
        <circle cx="282" cy="185" r="3" fill="#34E0B0">
          <animate attributeName="opacity" values="0.5;1;0.5" dur="2s" repeatCount="indefinite" />
        </circle>
        <text
          x="292"
          y="188"
          fill="#2A7BEC"
          fontSize="8"
          fontWeight="700"
          fontFamily="Inter, system-ui, sans-serif"
          letterSpacing="0.5"
        >
          LIVE
        </text>
      </g>
    </svg>
  );
}