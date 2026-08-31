import {
  Scissors,
  Shirt,
  Eye,
  Droplets,
  Flame,
  Zap,
  Ruler,
  Palette,
  Sun,
  Gem,
  Sparkles,
  Package,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal, SectionTitle } from "./Reveal";
import { WA_GENERAL } from "@/lib/whatsapp";

const services = [
  { icon: Scissors, title: "Corte", price: "R$ 40" },
  { icon: Scissors, title: "Corte + Sobrancelha", price: "R$ 45" },
  { icon: Shirt, title: "Social", price: "R$ 30" },
  { icon: Eye, title: "Sobrancelha", price: "R$ 10" },
  { icon: Droplets, title: "Barba Completa", price: "R$ 30" },
  { icon: Flame, title: "Barba Terapia", price: "R$ 40" },
  { icon: Zap, title: "Barba na Máquina", price: "R$ 25" },
  { icon: Ruler, title: "Pezinho", price: "R$ 15" },
  { icon: Palette, title: "Pigmentação", price: "a partir de R$ 35" },
  { icon: Sun, title: "Luzes", price: "a partir de R$ 90" },
  { icon: Gem, title: "Platinado", price: "R$ 150" },
  { icon: Sparkles, title: "Limpeza de Pele", price: "a partir de R$ 40" },
  { icon: Sparkles, title: "Relaxamento", price: "R$ 30" },
];

const degradePackages = [
  { label: "2 cortes + sobrancelha", price: "R$ 70" },
  { label: "3 cortes + sobrancelha", price: "R$ 105" },
  { label: "4 cortes + sobrancelha", price: "R$ 140" },
  { label: "6 cortes + sobrancelha", price: "R$ 215" },
];

const socialPackages = [
  { label: "2 cortes + sobrancelha", price: "R$ 50" },
  { label: "3 cortes + sobrancelha", price: "R$ 90" },
  { label: "4 cortes + sobrancelha", price: "R$ 110" },
  { label: "6 cortes + sobrancelha", price: "R$ 170" },
];

export function Services() {
  return (
    <section id="servicos" className="py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <SectionTitle
          eyebrow="Serviços"
          title="Preços transparentes"
          subtitle="Sem surpresas: você sabe exatamente o valor antes de sentar na cadeira."
        />

        <div className="mt-14 grid gap-3.5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.05}>
              <article className="flex h-full flex-col items-center gap-3 rounded-2xl border border-border bg-card p-5 text-center shadow-soft transition-all hover:-translate-y-1 hover:border-primary/30 hover:shadow-glow">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-gradient-primary">
                  <s.icon className="h-5 w-5 text-primary-foreground" />
                </span>
                <h3 className="font-display text-base font-semibold leading-snug">{s.title}</h3>
                <span className="font-display text-base font-bold leading-snug text-primary">
                  {s.price}
                </span>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1} className="mt-20">
          <div className="mx-auto max-w-2xl text-center">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary">
              <Package className="h-3.5 w-3.5" /> Pacotes
            </span>
            <h3 className="mt-4 font-display text-2xl font-bold sm:text-3xl">
              Economize fechando pacote
            </h3>
          </div>
        </Reveal>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <Reveal delay={0.15}>
            <div className="h-full rounded-3xl border border-primary/30 bg-primary/5 p-7 shadow-glow">
              <div className="flex items-center gap-3">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-gradient-primary">
                  <Scissors className="h-5 w-5 text-primary-foreground" />
                </span>
                <h4 className="font-display text-xl font-bold">Pacotes Degradê</h4>
              </div>
              <ul className="mt-6 divide-y divide-border/60">
                {degradePackages.map((p) => (
                  <li key={p.label} className="flex items-center justify-between py-3.5">
                    <span className="text-sm text-foreground">{p.label}</span>
                    <span className="font-display text-lg font-bold text-primary">{p.price}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="h-full rounded-3xl border border-border bg-card p-7 shadow-soft">
              <div className="flex items-center gap-3">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-gradient-primary">
                  <Shirt className="h-5 w-5 text-primary-foreground" />
                </span>
                <h4 className="font-display text-xl font-bold">Pacotes Social</h4>
              </div>
              <ul className="mt-6 divide-y divide-border/60">
                {socialPackages.map((p) => (
                  <li key={p.label} className="flex items-center justify-between py-3.5">
                    <span className="text-sm text-foreground">{p.label}</span>
                    <span className="font-display text-lg font-bold text-primary">{p.price}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.1} className="mt-14 text-center">
          <Button asChild variant="hero" size="xl">
            <a href={WA_GENERAL} target="_blank" rel="noreferrer">
              Agendar Horário
            </a>
          </Button>
        </Reveal>
      </div>
    </section>
  );
}
