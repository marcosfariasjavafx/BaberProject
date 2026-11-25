import {
  createContext,
  useContext,
  useEffect,
  useState,
  type CSSProperties,
  type ReactNode,
} from "react";
import "./Christmas.css";

const ChristmasContext = createContext(false);
const START = Date.parse("2026-11-25T00:00:00-03:00");
const END = Date.parse("2026-12-26T00:00:00-03:00");
const lightColors = [
  "oklch(0.72 0.2 25)",
  "oklch(0.88 0.15 85)",
  "oklch(0.73 0.17 155)",
  "oklch(0.77 0.15 305)",
];

function SantaSleigh() {
  return (
    <svg viewBox="0 0 620 180" fill="none" className="christmas-sleigh-art">
      <g fill="oklch(0.9 0.12 85)">
        <path d="m18 80 3 8 8 3-8 3-3 8-3-8-8-3 8-3z" />
        <path d="m49 126 2 5 6 2-6 2-2 6-2-6-5-2 5-2z" />
        <circle cx="7" cy="127" r="2" /><circle cx="43" cy="99" r="2" />
      </g>
      {/* Presents, Santa and a curved red sleigh. */}
      <path d="M70 81q-12-37 10-46 29-7 36 18l10 38" fill="oklch(0.38 0.09 155)" />
      <path d="M82 35q10-15 20-8" stroke="oklch(0.83 0.13 85)" strokeWidth="5" strokeLinecap="round" />
      <rect x="81" y="64" width="31" height="33" rx="3" fill="oklch(0.65 0.19 295)" />
      <path d="M96 64v33M81 76h31" stroke="oklch(0.9 0.13 85)" strokeWidth="5" />
      <path d="M119 79q-2-34 28-34 26 2 28 41" fill="oklch(0.54 0.21 25)" />
      <path d="m153 68 27 9 17-11" stroke="oklch(0.6 0.23 25)" strokeWidth="15" strokeLinecap="round" />
      <circle cx="199" cy="65" r="7" fill="oklch(0.84 0.07 60)" />
      <path d="M118 84h49" stroke="oklch(0.2 0.02 285)" strokeWidth="9" />
      <rect x="140" y="79" width="13" height="12" rx="2" stroke="oklch(0.88 0.14 85)" strokeWidth="3" />
      <circle cx="147" cy="35" r="19" fill="oklch(0.86 0.06 55)" />
      <path d="M129 33q-6 32 19 34 25-9 18-31-6 12-18 10-11 1-19-13" fill="oklch(0.99 0.01 85)" />
      <ellipse cx="156" cy="34" rx="7" ry="5" fill="oklch(0.8 0.09 35)" />
      <circle cx="151" cy="27" r="2" fill="oklch(0.2 0.02 285)" />
      <path d="M126 20q1-28 29-17l23 16-26-3" fill="oklch(0.56 0.22 25)" />
      <path d="M126 21q17-6 34 1" stroke="oklch(0.99 0.01 85)" strokeWidth="8" strokeLinecap="round" />
      <circle cx="178" cy="19" r="7" fill="oklch(0.99 0.01 85)" />
      <path d="M64 86q36 17 94 4l29-24q23-16 26 3-1 14-20 13l-15 36H92q-23-5-28-32" fill="oklch(0.5 0.21 25)" stroke="oklch(0.85 0.13 85)" strokeWidth="3" />
      <path d="m97 119-7 18m69-18 9 18M72 139h107q34 0 40-22" stroke="oklch(0.88 0.14 85)" strokeWidth="6" strokeLinecap="round" />
      <path d="M111 103q16 12 37-1" stroke="oklch(0.86 0.12 85)" strokeWidth="3" strokeLinecap="round" />
      <path d="M199 67q140 46 327-16M199 67q72 30 133 10" stroke="oklch(0.85 0.12 85)" strokeWidth="2" />
      {[0, 1].map((index) => (
        <g key={index} transform={`translate(${282 + index * 155}, ${index === 0 ? 48 : 19})`}>
          <g className="christmas-reindeer">
            <ellipse cx="41" cy="45" rx="31" ry="17" fill="oklch(0.58 0.1 65)" />
            <path d="m60 42 19-30 14 3-17 39" fill="oklch(0.64 0.11 65)" />
            <ellipse cx="88" cy="16" rx="18" ry="10" fill="oklch(0.67 0.11 65)" />
            <circle cx="104" cy="15" r="5" fill={index ? "oklch(0.66 0.24 25)" : "oklch(0.25 0.03 60)"} />
            <circle cx="91" cy="12" r="2" fill="oklch(0.15 0.02 60)" />
            <path d="m78 8-4-15m3 8-10-5m15 13 4-16m-1 8 8-6" stroke="oklch(0.8 0.12 85)" strokeWidth="3" strokeLinecap="round" />
            <path d="m19 55-18 14 9 13m22-24-4 17 15 7m12-27 19 10 15-5m-25-13 20 5 11-12" stroke="oklch(0.62 0.11 65)" strokeWidth="7" strokeLinecap="round" strokeLinejoin="round" />
            <path d="m13 40-10-7" stroke="oklch(0.65 0.11 65)" strokeWidth="6" strokeLinecap="round" />
            <path d="m66 30 12 7" stroke="oklch(0.55 0.2 25)" strokeWidth="6" />
            <circle cx="73" cy="37" r="4" fill="oklch(0.88 0.14 85)" />
          </g>
        </g>
      ))}
    </svg>
  );
}

export function ChristmasSeason({ children }: { children: ReactNode }) {
  const [active, setActive] = useState(false);

  useEffect(() => {
    let timeout: number;
    const check = () => {
      const now = Date.now();
      setActive(now >= START && now < END);
      // Daily checks avoid the browser's maximum timeout limit for long seasons.
      if (now < END) timeout = window.setTimeout(check, Math.min(86400000, END - now));
    };
    check();
    return () => window.clearTimeout(timeout);
  }, []);

  return (
    <ChristmasContext.Provider value={active}>
      <div className={active ? "christmas-site" : undefined}>
        {children}
        {active ? (
          <div className="christmas-overlay" aria-hidden="true">
            <div className="christmas-lights">
              {Array.from({ length: 32 }, (_, index) => (
                <span key={index} className="christmas-bulb" style={{
                  "--bulb-color": lightColors[index % lightColors.length],
                  "--bulb-delay": `${-(index % 5) * 0.7}s`,
                } as CSSProperties} />
              ))}
            </div>
            <div className="christmas-snow">
              {Array.from({ length: 22 }, (_, index) => (
                <span key={index} style={{
                  "--snow-x": `${(index * 37 + 5) % 100}%`,
                  "--snow-delay": `${-(index % 12)}s`,
                  "--snow-duration": `${13 + (index % 7)}s`,
                  "--snow-size": `${index % 3 === 0 ? 15 : 6}px`,
                } as CSSProperties}>{index % 3 === 0 ? "❄" : "•"}</span>
              ))}
            </div>
            <div className="christmas-sleigh"><SantaSleigh /></div>
            <div className="christmas-corner christmas-corner-left">✦</div>
            <div className="christmas-corner christmas-corner-right">✦</div>
          </div>
        ) : null}
      </div>
    </ChristmasContext.Provider>
  );
}

export function ChristmasGreeting({ children }: { children: ReactNode }) {
  const active = useContext(ChristmasContext);
  if (!active) return <>{children}</>;
  return (
    <div className="christmas-greeting">
      <span className="christmas-pill"><span aria-hidden="true">✦</span> O Natal chegou à The Best <span aria-hidden="true">✦</span></span>
      <h2>Seu melhor estilo.<br /><span>Um Natal especial.</span></h2>
      <p>Que não faltem bons encontros, sorrisos e motivos para celebrar.<br className="hidden sm:block" /> A família The Best deseja a você um Feliz Natal!</p>
    </div>
  );
}
