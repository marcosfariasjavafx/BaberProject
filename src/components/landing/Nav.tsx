import { useState } from "react";
import { Menu, MessageCircle, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { WA_GENERAL } from "@/lib/whatsapp";
import logo from "@/assets/logo.png";

const links = [
  { href: "#sobre", label: "Sobre" },
  { href: "#galeria", label: "Galeria" },
  { href: "#barbeiros", label: "Barbeiros" },
  { href: "#servicos", label: "Serviços" },
  { href: "#contato", label: "Contato" },
];

export function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="mx-auto grid max-w-6xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 py-3.5 md:px-8">
        <a href="#top" className="flex min-w-0 items-center gap-2">
          <img
            src={logo}
            alt="Logo The Best Barbershop"
            width={44}
            height={44}
            className="h-11 w-11 shrink-0 rounded-full object-cover"
          />
        </a>

        <div className="flex items-center gap-2">
          <nav className="hidden items-center gap-7 md:flex">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-sm font-medium text-white transition-colors [text-shadow:0_1px_4px_rgb(0_0_0_/_45%)] hover:text-primary"
              >
                {l.label}
              </a>
            ))}
          </nav>
          <Button asChild variant="hero" size="sm" className="ml-2 hidden sm:inline-flex">
            <a href={WA_GENERAL} target="_blank" rel="noreferrer">
              Agendar Horário
            </a>
          </Button>
          <button
            aria-label="Abrir menu"
            onClick={() => setOpen((v) => !v)}
            className="grid h-10 w-10 shrink-0 place-items-center rounded-lg border border-white/40 text-white md:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open ? (
        <nav className="border-t border-border/60 bg-background px-5 py-4 md:hidden">
          <ul className="space-y-3">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block text-sm font-medium text-muted-foreground"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <Button asChild variant="hero" className="mt-4 w-full">
            <a href={WA_GENERAL} target="_blank" rel="noreferrer">
              Agendar Horário
            </a>
          </Button>
        </nav>
      ) : null}

      <a
        href={WA_GENERAL}
        target="_blank"
        rel="noreferrer"
        aria-label="Agendar pelo WhatsApp"
        className="fixed bottom-5 right-5 z-50 grid h-14 w-14 place-items-center rounded-full bg-primary text-primary-foreground shadow-glow-lg transition-transform hover:scale-105 sm:hidden"
      >
        <MessageCircle className="h-6 w-6" />
      </a>
    </header>
  );
}
