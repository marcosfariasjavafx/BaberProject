import { useState } from "react";
import { X } from "lucide-react";
import { Reveal, SectionTitle } from "./Reveal";
import corte1 from "@/assets/corte1.png";
import corte2 from "@/assets/corte2.png";
import corte3 from "@/assets/corte3.png";
import corte4 from "@/assets/corte4.png";
import corte5 from "@/assets/corte5.png";
import corte6 from "@/assets/corte6.png";
import corte7 from "@/assets/corte7.png";

const photos = [
  {
    src: corte1,
    alt: "Corte pigmentado em vermelho com desenho lateral",
  },
  {
    src: corte2,
    alt: "Corte masculino com fade e desenho artístico na lateral",
  },
  {
    src: corte3,
    alt: "Corte em cabelo cacheado com desenho na nuca",
  },
  {
    src: corte4,
    alt: "Fade clássico masculino bem alinhado",
  },
  {
    src: corte5,
    alt: "Corte infantil degradê com risco lateral",
  },
  {
    src: corte6,
    alt: "Pai e filho com corte social alinhado",
  },
  {
    src: corte7,
    alt: "Corte grisalho texturizado com fade na nuca",
  },
];

export function Gallery() {
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <section id="galeria" className="py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <SectionTitle
          eyebrow="Portfólio"
          title="Nossos cortes"
          subtitle="Uma amostra do trabalho que sai da nossa cadeira todos os dias."
        />

        <div className="mt-14 columns-1 gap-4 sm:columns-2 md:columns-3">
          {photos.map((p, i) => (
            <Reveal
              key={p.src}
              delay={i * 0.08}
              className="group relative mb-4 block overflow-hidden rounded-3xl border border-border bg-muted break-inside-avoid"
            >
              <button
                type="button"
                onClick={() => setSelected(i)}
                aria-label={`Ver ${p.alt} em tela cheia`}
                className="block w-full cursor-zoom-in"
              >
                <img
                  src={p.src}
                  alt={p.alt}
                  loading="lazy"
                  className="block w-full transition-transform duration-700 group-hover:scale-110"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-primary opacity-0 transition-opacity duration-500 group-hover:opacity-30" />
                <div className="pointer-events-none absolute inset-0 rounded-3xl ring-0 ring-primary/40 transition-all duration-500 group-hover:ring-4" />
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      {selected !== null ? (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-background/95 p-4 backdrop-blur-md sm:p-8"
          onClick={() => setSelected(null)}
        >
          <button
            type="button"
            aria-label="Fechar"
            onClick={() => setSelected(null)}
            className="absolute right-4 top-4 grid h-11 w-11 place-items-center rounded-full border border-border bg-card text-foreground shadow-soft transition-colors hover:border-primary/40 hover:text-primary sm:right-8 sm:top-8"
          >
            <X className="h-5 w-5" />
          </button>
          <img
            src={photos[selected].src}
            alt={photos[selected].alt}
            className="max-h-full max-w-full rounded-2xl object-contain shadow-glow"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      ) : null}
    </section>
  );
}
