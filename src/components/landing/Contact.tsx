import { Clock, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal, SectionTitle } from "./Reveal";
import { BUSINESS_HOURS } from "@/lib/business";
import { WA_GENERAL } from "@/lib/whatsapp";

export function Contact() {
  return (
    <section id="contato" className="bg-gradient-soft py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <SectionTitle
          eyebrow="Onde estamos"
          title="Localização e contato"
          subtitle="Fácil de chegar, fácil de agendar."
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-[1fr_1.2fr]">
          <Reveal>
            <div className="h-full space-y-6 rounded-3xl border border-border bg-card p-8 shadow-soft">
              <div className="flex gap-4">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-primary/10">
                  <MapPin className="h-5 w-5 text-primary" />
                </span>
                <div className="min-w-0">
                  <h3 className="font-display font-semibold">Endereço</h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    R. Álvaro de Mattos, 109 — São Jerônimo
                    <br />
                    Americana — SP, 13469-690
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-primary/10">
                  <Clock className="h-5 w-5 text-primary" />
                </span>
                <div className="min-w-0">
                  <h3 className="font-display font-semibold">Horários</h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {BUSINESS_HOURS.map(({ label }) => (
                      <span key={label} className="block">
                        {label}
                      </span>
                    ))}
                    Domingo e segunda: fechado
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-primary/10">
                  <Phone className="h-5 w-5 text-primary" />
                </span>
                <div className="min-w-0">
                  <h3 className="font-display font-semibold">Contato</h3>
                  <p className="mt-1 text-sm text-muted-foreground">(19) 99213-8585</p>
                </div>
              </div>

              <Button asChild variant="hero" size="lg" className="w-full">
                <a href={WA_GENERAL} target="_blank" rel="noreferrer">
                  Agendar pelo WhatsApp
                </a>
              </Button>
            </div>
          </Reveal>

          <Reveal delay={0.12}>
            <div className="h-full min-h-[380px] overflow-hidden rounded-3xl border border-border shadow-soft">
              <a
                href="https://www.google.com/maps/search/?api=1&query=R.%20%C3%81lvaro%20de%20Mattos%2C%20109%2C%20Americana%20SP"
                target="_blank"
                rel="noreferrer"
                className="relative flex h-full min-h-[380px] flex-col items-center justify-center gap-4 overflow-hidden bg-gradient-soft p-8 text-center"
              >
                <svg
                  aria-hidden="true"
                  viewBox="0 0 400 280"
                  className="absolute inset-0 h-full w-full text-primary/10"
                  fill="none"
                >
                  <path
                    d="M-20 80h440M-20 210h440M100-20v320M300-20v320M-20 20l440 260"
                    stroke="currentColor"
                    strokeWidth="26"
                  />
                </svg>
                <span className="relative grid h-16 w-16 place-items-center rounded-2xl bg-primary/10">
                  <MapPin className="h-8 w-8 text-primary" />
                </span>
                <span className="relative font-display text-xl font-semibold">
                  The Best Barbershop
                </span>
                <span className="relative text-sm text-muted-foreground">
                  R. Álvaro de Mattos, 109
                  <br />
                  São Jerônimo — Americana, SP
                </span>
                <span className="relative rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground">
                  Abrir no Google Maps
                </span>
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
