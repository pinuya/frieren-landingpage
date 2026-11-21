import { cn } from "~/lib/utils";

/**
 * Círculo mágico em SVG, girando devagar. Puramente decorativo.
 */
export function MagicCircle({ className }: { className?: string }) {
  const runes = "ᚠᚱᛁᛖᚱᛖᚾ·ᚺᛁᛗᛗᛖᛚ·ᚺᛖᛁᛏᛖᚱ·ᛖᛁᛋᛖᚾ·ᚠᛖᚱᚾ·ᛋᛏᚨᚱᚲ·";

  return (
    <div aria-hidden className={cn("pointer-events-none", className)}>
      <svg viewBox="0 0 400 400" className="h-full w-full animate-spin-slow">
        <defs>
          <path
            id="rune-ring"
            d="M200,200 m-168,0 a168,168 0 1,1 336,0 a168,168 0 1,1 -336,0"
          />
          <radialGradient id="circle-glow">
            <stop offset="0%" stopColor="#8fb8de" stopOpacity="0.18" />
            <stop offset="100%" stopColor="#8fb8de" stopOpacity="0" />
          </radialGradient>
        </defs>
        <circle cx="200" cy="200" r="195" fill="url(#circle-glow)" />
        <g fill="none" stroke="#8fb8de" strokeOpacity="0.45">
          <circle cx="200" cy="200" r="190" strokeWidth="1" />
          <circle cx="200" cy="200" r="182" strokeWidth="0.5" />
          <circle cx="200" cy="200" r="152" strokeWidth="0.75" />
          <circle cx="200" cy="200" r="96" strokeWidth="0.5" />
        </g>
        <text
          fill="#d6b97b"
          fillOpacity="0.55"
          fontSize="13"
          letterSpacing="6"
        >
          <textPath href="#rune-ring">
            {runes}
            {runes}
          </textPath>
        </text>
      </svg>
      <svg
        viewBox="0 0 400 400"
        className="absolute inset-0 h-full w-full animate-spin-slower"
      >
        <g fill="none" stroke="#dbe4f3" strokeOpacity="0.3" strokeWidth="0.75">
          {/* Dois triângulos formando a estrela de seis pontas */}
          <polygon points="200,48 331.6,276 68.4,276" />
          <polygon points="200,352 68.4,124 331.6,124" />
          {/* Heptágono interno */}
          <polygon points="200,104 275,140 293,221 241,286 159,286 107,221 125,140" />
        </g>
      </svg>
    </div>
  );
}
