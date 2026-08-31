import { Award, Sparkles, Timer } from "lucide-react";
import { Reveal, SectionTitle } from "./Reveal";

const highlights = [
  {
    icon: Award,
    title: "Profissionais certificados",
    text: "Time especializado em fade, visagismo e barba desenhada.",
  },
  {
    icon: Sparkles,
    title: "Ambiente impecável",
    text: "Espaço claro, higienizado e ferramentas esterilizadas a cada cliente.",
  },
  {
    icon: Timer,
    title: "Horário respeitado",
    text: "Agenda organizada pelo WhatsApp, sem fila e sem espera.",
  },
];

export function About() {
  return (
    <section id="sobre" className="bg-gradient-soft py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <SectionTitle
          eyebrow="Sobre nós"
          title="Uma barbearia feita de detalhes"
          subtitle="Na The Best, cada corte começa por uma conversa. Entendemos o seu estilo, o formato do seu rosto e a sua rotina para entregar um resultado que continua bonito muito depois de você sair da cadeira. Café fresco, música boa e um ambiente claro e acolhedor completam uma experiência premium do início ao fim."
        />

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {highlights.map((h, i) => (
            <Reveal key={h.title} delay={i * 0.12}>
              <div className="h-full rounded-3xl border border-border bg-card p-7 shadow-soft transition-all hover:-translate-y-1 hover:border-primary/30 hover:shadow-glow">
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-primary/10">
                  <h.icon className="h-6 w-6 text-primary" />
                </span>
                <h3 className="mt-5 font-display text-lg font-semibold">{h.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{h.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
