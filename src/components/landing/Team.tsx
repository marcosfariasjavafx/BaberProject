import { Button } from "@/components/ui/button";
import { Reveal, SectionTitle } from "./Reveal";
import { waLink } from "@/lib/whatsapp";
import pietro from "@/assets/barber-pietro.jpg";
import julia from "@/assets/barber-julia.jpg";
import ge from "@/assets/barber-ge.jpg";
import caio from "@/assets/barber-caio.jpg";

const barbers = [
  {
    name: "Pietro",
    specialty: "",
    image: pietro,
    message: "Olá! Gostaria de agendar com o Pietro na The Best.",
  },
  {
    name: "Julia",
    specialty: "",
    image: julia,
    message: "Olá! Gostaria de agendar com a Julia na The Best.",
  },
  {
    name: "Ge",
    specialty: "",
    image: ge,
    message: "Olá! Gostaria de agendar com o Ge na The Best.",
  },
  {
    name: "Caio",
    specialty: "",
    image: caio,
    message: "Olá! Gostaria de agendar com o Caio na The Best.",
  },
];

export function Team() {
  return (
    <section id="barbeiros" className="bg-gradient-soft py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <SectionTitle
          eyebrow="Equipe"
          title="Nossos barbeiros"
          subtitle="Escolha o profissional que mais combina com o seu estilo e agende direto pelo WhatsApp."
        />

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {barbers.map((b, i) => (
            <Reveal key={b.name} delay={i * 0.12}>
              <article className="group flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-card shadow-soft transition-all hover:-translate-y-1.5 hover:border-primary/30 hover:shadow-glow">
                <div className="relative aspect-4/3 overflow-hidden">
                  <img
                    src={b.image}
                    alt={`${b.name}, barbeiro na The Best`}
                    loading="lazy"
                    width={768}
                    height={768}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-1 flex-col p-7">
                  <h3 className="font-display text-xl font-semibold">{b.name}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {b.specialty}
                  </p>
                  <div className="mt-auto pt-6">
                    <Button asChild variant="hero" className="w-full">
                      <a href={waLink(b.message)} target="_blank" rel="noreferrer">
                        Agendar
                      </a>
                    </Button>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
