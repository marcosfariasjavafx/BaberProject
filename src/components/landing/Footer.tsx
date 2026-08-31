import { Instagram, MessageCircle } from "lucide-react";
import { WA_GENERAL } from "@/lib/whatsapp";
import logo from "@/assets/logo.png";

const nav = [
  { href: "#sobre", label: "Sobre" },
  { href: "#galeria", label: "Galeria" },
  { href: "#barbeiros", label: "Barbeiros" },
  { href: "#servicos", label: "Serviços" },
  { href: "#contato", label: "Contato" },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="mx-auto max-w-6xl px-5 py-14 md:px-8">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <div className="flex items-center gap-2">
              <img
                src={logo}
                alt="Logo The Best Barbershop"
                width={40}
                height={40}
                className="h-10 w-10 shrink-0 object-contain"
              />
              <span className="font-script text-2xl leading-none">The Best</span>
            </div>
            <p className="mt-4 max-w-xs text-sm text-muted-foreground">
              Minha Fé nasce aqui. Barbearia premium em São Jerônimo, Americana - SP.
            </p>
          </div>

          <div>
            <h3 className="font-display text-sm font-semibold uppercase tracking-widest text-foreground">
              Navegação
            </h3>
            <ul className="mt-4 space-y-2.5">
              {nav.map((n) => (
                <li key={n.href}>
                  <a
                    href={n.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    {n.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display text-sm font-semibold uppercase tracking-widest text-foreground">
              Redes sociais
            </h3>
            <div className="mt-4 flex gap-3">
              {[
                {
                  icon: Instagram,
                  href: "https://www.instagram.com/the.best_barbearia/",
                  label: "Instagram",
                },
                { icon: MessageCircle, href: WA_GENERAL, label: "WhatsApp" },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={s.label}
                  className="grid h-11 w-11 place-items-center rounded-2xl border border-border text-muted-foreground transition-all hover:border-primary/40 hover:bg-primary/10 hover:text-primary"
                >
                  <s.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-border pt-6 text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} The Best Barbershop. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
}
