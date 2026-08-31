import { Clock, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal, SectionTitle } from "./Reveal";
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
                    Terça a sábado: 09h — 19h
                    <br />
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
              <iframe
                title="Mapa da barbearia The Best"
                src="https://www.google.com/maps?q=R.%20%C3%81lvaro%20de%20Mattos%2C%20109%20S%C3%A3o%20Jer%C3%B4nimo%20Americana%20SP&output=embed"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-full min-h-[380px] w-full border-0"
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
