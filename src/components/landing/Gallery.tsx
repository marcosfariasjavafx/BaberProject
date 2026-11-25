import corte1w384 from "@/assets/optimized/corte1-384.webp";
import corte5w384 from "@/assets/optimized/corte5-384.webp";
import corte6w384 from "@/assets/optimized/corte6-384.webp";
import corte8w384 from "@/assets/optimized/corte8-384.webp";
import corte9w384 from "@/assets/optimized/corte9-384.webp";
import corte10w384 from "@/assets/optimized/corte10-384.webp";
import { useState } from "react";
import { X } from "lucide-react";
import { Reveal, SectionTitle } from "./Reveal";
import corte1 from "@/assets/optimized/corte1.webp";
import corte2 from "@/assets/optimized/corte2.webp";
import corte3 from "@/assets/optimized/corte3.webp";
import corte4 from "@/assets/optimized/corte4.webp";
import corte5 from "@/assets/optimized/corte5.webp";
import corte6 from "@/assets/optimized/corte6.webp";
import corte7 from "@/assets/optimized/corte7.webp";
import corte8 from "@/assets/corte8.jpeg";
import corte9 from "@/assets/corte9.jpeg";
import corte10 from "@/assets/corte10.jpeg";
import corte11 from "@/assets/corte11.jpeg";

const photos = [
  {
    src: corte1,
    srcSet: `${corte1w384} 384w, ${corte1} 591w`,
    width: 591,
    height: 529,
    alt: "Corte pigmentado em vermelho com desenho lateral",
  },
  {
    src: corte2,
    srcSet: `${corte2} 397w`,
    width: 397,
    height: 449,
    alt: "Corte masculino com fade e desenho artístico na lateral",
  },
  {
    src: corte3,
    srcSet: `${corte3} 362w`,
    width: 362,
    height: 403,
    alt: "Corte em cabelo cacheado com desenho na nuca",
  },
  {
    src: corte4,
    srcSet: `${corte4} 362w`,
    width: 362,
    height: 364,
    alt: "Fade clássico masculino bem alinhado",
  },
  {
    src: corte5,
    srcSet: `${corte5w384} 384w, ${corte5} 464w`,
    width: 464,
    height: 364,
    alt: "Corte infantil degradê com risco lateral",
  },
  {
    src: corte6,
    srcSet: `${corte6w384} 384w, ${corte6} 439w`,
    width: 439,
    height: 534,
    alt: "Pai e filho com corte social alinhado",
  },
  {
    src: corte7,
    srcSet: `${corte7} 353w`,
    width: 353,
    height: 447,
    alt: "Corte grisalho texturizado com fade na nuca",
  },
  {
    src: corte8,
    srcSet: `${corte8w384} 384w, ${corte8} 1179w`,
    width: 1179,
    height: 1313,
    alt: "Corte ",
  },
  {
    src: corte9,
    srcSet: `${corte9w384} 384w, ${corte9} 1115w`,
    width: 1115,
    height: 1290,
    alt: "Corte ",
  },
  {
    src: corte10,
    srcSet: `${corte10w384} 384w, ${corte10} 1020w`,
    width: 1020,
    height: 1115,
    alt: "Corte",
  },
  {
    src: corte11,
    srcSet: `${corte11} 1049w`,
    width: 1049,
    height: 1214,
    alt: "Corte ",
  },
];

export function Gallery() {
  const [selected, setSelected] = useState<number | null>(null);
  const selectedPhoto = selected === null ? undefined : photos[selected];

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
                  srcSet={p.srcSet}
                  sizes="(min-width: 768px) 360px, (min-width: 640px) 48vw, calc(100vw - 40px)"
                  width={p.width}
                  height={p.height}
                  decoding="async"
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

      {selectedPhoto ? (
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
            src={selectedPhoto.src}
            alt={selectedPhoto.alt}
            className="max-h-full max-w-full rounded-2xl object-contain shadow-glow"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      ) : null}
    </section>
  );
}
