'use client';

export default function BusinessWebsitesIllustration({ className = '' }) {
  return (
    <svg
      viewBox="0 0 400 200"
      xmlns="http://www.w3.org/2000/svg"
      className={`business-websites-illustration ${className}`}
      aria-hidden="true"
      preserveAspectRatio="xMidYMid meet"
    >
      <defs>
        <radialGradient id="webShopGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#2A7BEC" stopOpacity="0.22" />
          <stop offset="60%" stopColor="#2A7BEC" stopOpacity="0.05" />
          <stop offset="100%" stopColor="#2A7BEC" stopOpacity="0" />
        </radialGradient>

        <linearGradient id="webShopHeader" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#2A7BEC" stopOpacity="0.14" />
          <stop offset="100%" stopColor="#2A7BEC" stopOpacity="0.06" />
        </linearGradient>

        <linearGradient id="webShopTile" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#F8FAFF" />
          <stop offset="100%" stopColor="#EEF4FF" />
        </linearGradient>

        <radialGradient id="webShopDot" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="40%" stopColor="#00C6FF" />
          <stop offset="100%" stopColor="#00C6FF" stopOpacity="0.3" />
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
      <circle cx="200" cy="100" r="105" fill="url(#webShopGlow)" />

      {/* ─── Browser window ─── */}
      <g>
        <rect
          x="60"
          y="30"
          width="280"
          height="145"
          rx="10"
          fill="#ffffff"
          stroke="#2A7BEC"
          strokeWidth="1.6"
        />

        {/* Header bar */}
        <path
          d="M60 42 Q60 30 72 30 L328 30 Q340 30 340 42 L340 54 L60 54 Z"
          fill="url(#webShopHeader)"
        />
        <line
          x1="60"
          y1="54"
          x2="340"
          y2="54"
          stroke="#2A7BEC"
          strokeOpacity="0.2"
          strokeWidth="1"
        />

        {/* Traffic lights */}
        <circle cx="76" cy="42" r="4" fill="#FF5F57" />
        <circle cx="90" cy="42" r="4" fill="#FEBC2E" />
        <circle cx="104" cy="42" r="4" fill="#28C840" />

        {/* URL bar */}
        <rect
          x="120"
          y="37"
          width="180"
          height="11"
          rx="5.5"
          fill="#ffffff"
          stroke="#2A7BEC"
          strokeOpacity="0.2"
          strokeWidth="0.8"
        />
        <circle cx="128" cy="42.5" r="2.5" fill="none" stroke="#2A7BEC" strokeWidth="1" />
        <line x1="128" y1="42.5" x2="130" y2="44.5" stroke="#2A7BEC" strokeWidth="1" strokeLinecap="round" />
        <text
          x="136"
          y="46"
          fill="#2A7BEC"
          fontSize="7"
          fontWeight="600"
          fontFamily="Inter, system-ui, sans-serif"
        >
          shop.cybernaxe.com
        </text>

        {/* Product grid - Row 1 */}
        {[
          { price: '1,200', x: 72 },
          { price: '850', x: 160 },
          { price: '2,400', x: 248 },
        ].map((item, i) => (
          <g key={`r1-${i}`} transform={`translate(${item.x} 66)`}>
            <rect width="80" height="46" rx="5" fill="url(#webShopTile)" stroke="#2A7BEC" strokeOpacity="0.15" strokeWidth="0.8" />
            <rect x="5" y="5" width="70" height="22" rx="3" fill="#E8F2FF" />
            <circle cx="40" cy="16" r="6" fill="#2A7BEC" fillOpacity="0.35" />
            <text x="5" y="38" fontSize="7" fontWeight="700" fill="#2A7BEC" fontFamily="Inter, sans-serif">
              LKR {item.price}
            </text>
            <rect x="52" y="33" width="24" height="9" rx="4.5" fill="#2A7BEC" />
            <text x="64" y="39.5" textAnchor="middle" fontSize="5" fontWeight="700" fill="#ffffff" fontFamily="Inter, sans-serif">
              BUY
            </text>
          </g>
        ))}

        {/* Product grid - Row 2 */}
        {[
          { price: '1,850', x: 72 },
          { price: '620', x: 160 },
          { price: '3,100', x: 248 },
        ].map((item, i) => (
          <g key={`r2-${i}`} transform={`translate(${item.x} 120)`}>
            <rect width="80" height="46" rx="5" fill="url(#webShopTile)" stroke="#2A7BEC" strokeOpacity="0.15" strokeWidth="0.8" />
            <rect x="5" y="5" width="70" height="22" rx="3" fill="#E8F2FF" />
            <circle cx="40" cy="16" r="6" fill="#2A7BEC" fillOpacity="0.35" />
            <text x="5" y="38" fontSize="7" fontWeight="700" fill="#2A7BEC" fontFamily="Inter, sans-serif">
              LKR {item.price}
            </text>
            <rect x="52" y="33" width="24" height="9" rx="4.5" fill="#2A7BEC" />
            <text x="64" y="39.5" textAnchor="middle" fontSize="5" fontWeight="700" fill="#ffffff" fontFamily="Inter, sans-serif">
              BUY
            </text>
          </g>
        ))}
      </g>

      {/* ─── Shopping bag (top-left) ─── */}
      <g transform="translate(38 55)">
        <circle r="24" fill="#ffffff" stroke="#2A7BEC" strokeWidth="1.6" />
        <path
          d="M-8 -4 L-8 -8 Q-8 -14 0 -14 Q8 -14 8 -8 L8 -4 M-12 -4 L12 -4 L10 10 L-10 10 Z"
          fill="none"
          stroke="#2A7BEC"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
        <circle cx="14" cy="-14" r="8" fill="#FF5F57" />
        <text
          x="14"
          y="-11"
          textAnchor="middle"
          fontSize="9"
          fontWeight="800"
          fill="#ffffff"
          fontFamily="Inter, sans-serif"
        >
          3
        </text>
      </g>

      {/* ─── Sale badge (top-right) ─── */}
      <g transform="translate(362 60)">
        <circle r="22" fill="#ffffff" stroke="#2A7BEC" strokeWidth="1.6" />
        <text
          textAnchor="middle"
          y="-3"
          fontSize="8"
          fontWeight="700"
          fill="#2A7BEC"
          fontFamily="Inter, sans-serif"
          letterSpacing="0.5"
        >
          SALE
        </text>
        <text
          textAnchor="middle"
          y="9"
          fontSize="12"
          fontWeight="800"
          fill="#FF5F57"
          fontFamily="Inter, sans-serif"
        >
          -30%
        </text>
      </g>

      {/* ─── Payment success badge (bottom-right) ─── */}
      <g transform="translate(358 158)">
        <circle r="20" fill="#10B981" />
        <path
          d="M-8 0 L-3 5 L8 -6"
          fill="none"
          stroke="#ffffff"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>

      {/* ─── Animated dot from card → cart ─── */}
      <circle r="3" fill="url(#webShopDot)">
        <animateMotion dur="2.8s" repeatCount="indefinite" path="M180,150 Q90,140 38,55" />
      </circle>
      <circle r="3" fill="url(#webShopDot)">
        <animateMotion dur="2.8s" begin="1.4s" repeatCount="indefinite" path="M240,160 Q120,150 38,55" />
      </circle>
    </svg>
  );
}