import { motion } from "motion/react";
import { Clock, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { WA_GENERAL } from "@/lib/whatsapp";
import heroPoster from "@/assets/hero-poster.jpg";
import logo from "@/assets/logo-transparent.png";

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] items-center overflow-hidden"
    >
      <video
        className="absolute inset-0 h-full w-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        poster={heroPoster}
      >
        <source src="/videos/hero-barbershop.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-foreground/55" />
      <div className="absolute inset-0 bg-gradient-to-b from-foreground/60 via-foreground/40 to-background" />

      <div className="absolute -left-24 top-24 h-72 w-72 rounded-full bg-primary/25 blur-3xl" />
      <div className="absolute -right-16 bottom-10 h-80 w-80 rounded-full bg-primary-glow/25 blur-3xl" />

      <div className="relative mx-auto w-full max-w-4xl px-5 pt-24 pb-16 text-center sm:pt-28 sm:pb-20 md:px-8">
        <motion.img
          src={logo}
          alt="The Best Barbershop"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mx-auto h-40 w-auto sm:h-64 md:h-72"
        />

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mx-auto mt-5 max-w-xl px-2 text-sm leading-relaxed text-card/90 sm:mt-6 sm:text-base"
        >
          Cortes precisos, ambiente impecável e um atendimento pensado nos detalhes. Uma experiência
          de barbearia feita para quem exige o melhor.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-8 flex flex-col items-center justify-center gap-3 sm:mt-9 sm:flex-row"
        >
          <Button asChild variant="hero" size="xl" className="w-full sm:w-auto">
            <a href={WA_GENERAL} target="_blank" rel="noreferrer">
              Agendar Horário
            </a>
          </Button>
          <Button asChild variant="outline" size="xl" className="w-full sm:w-auto">
            <a href="#servicos">Ver serviços</a>
          </Button>
        </motion.div>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 px-2 text-center text-[0.65rem] font-semibold uppercase tracking-[0.1em] text-card/80 sm:mt-10 sm:gap-x-6 sm:text-xs sm:tracking-[0.14em]">
          <span className="inline-flex items-center gap-1.5">
            <MapPin className="h-4 w-4 shrink-0 text-primary" /> São Jerônimo — Americana, SP
          </span>
          <span className="inline-flex items-center gap-1.5">
            <Clock className="h-4 w-4 shrink-0 text-primary" /> Terça a Sábado
          </span>
        </div>
      </div>
    </section>
  );
}
