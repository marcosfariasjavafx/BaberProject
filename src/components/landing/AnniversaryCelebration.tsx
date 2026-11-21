import { useEffect, useState, type CSSProperties, type ReactNode } from "react";

// 21/11/2026, from midnight to midnight in America/Sao_Paulo (UTC-03).
const START = Date.parse("2026-11-21T00:00:00-03:00");
const END = Date.parse("2026-11-22T00:00:00-03:00");

export function AnniversaryCelebration({ children }: { children: ReactNode }) {
  // Match the server render, then check the visitor's clock after hydration.
  const [active, setActive] = useState(false);

  useEffect(() => {
    const now = Date.now();
    if (now < START || now >= END) return;
    setActive(true);
    const timeout = window.setTimeout(() => setActive(false), END - now);
    const checkDate = () => setActive(Date.now() >= START && Date.now() < END);
    window.addEventListener("focus", checkDate);
    document.addEventListener("visibilitychange", checkDate);
    return () => {
      window.clearTimeout(timeout);
      window.removeEventListener("focus", checkDate);
      document.removeEventListener("visibilitychange", checkDate);
    };
  }, []);

  if (!active) return <>{children}</>;

  return (
    <>
      <div className="anniversary-decor" aria-hidden="true">
        <span className="anniversary-balloon anniversary-balloon-left" />
        <span className="anniversary-balloon anniversary-balloon-right" />
        {Array.from({ length: 28 }, (_, index) => (
          <span
            key={index}
            className="anniversary-confetti"
            style={{
              "--confetti-x": `${(index * 37 + 7) % 100}%`,
              "--confetti-delay": `${-(index % 9)}s`,
              "--confetti-duration": `${7 + (index % 5)}s`,
              "--confetti-color": ["oklch(0.84 0.13 85)", "oklch(0.7 0.2 300)", "oklch(0.98 0.01 85)"][index % 3],
            } as CSSProperties}
          />
        ))}
      </div>
      <div className="anniversary-message">
        <div className="anniversary-badge">
          <span aria-hidden="true">✦</span> 21 de novembro · É hoje!
          <span aria-hidden="true">✦</span>
        </div>
        <h2 className="anniversary-title">
          <span className="anniversary-number">1 ano</span> de The Best.
        </h2>
        <p className="anniversary-thanks">
          O aniversário é nosso. A história é com você.
        </p>
        <p className="anniversary-copy">
          Um ano de cortes, encontros e confiança. Obrigado a cada cliente
          e amigo que faz parte dessa caminhada. Hoje a celebração é de todos nós!
        </p>
      </div>
    </>
  );
}
