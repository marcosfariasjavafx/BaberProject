import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/landing/Nav";
import { Hero } from "@/components/landing/Hero";
import { About } from "@/components/landing/About";
import { Gallery } from "@/components/landing/Gallery";
import { Team } from "@/components/landing/Team";
import { Services } from "@/components/landing/Services";
import { Contact } from "@/components/landing/Contact";
import { Footer } from "@/components/landing/Footer";
import { FloatingBlade } from "@/components/landing/FloatingBlade";

const title = "The Best | Barbearia Premium em Americana - SP";
const description =
  "Minha Fé nasce aqui. Cortes, barba e visagismo com profissionais especializados em São Jerônimo, Americana. Agende seu horário pelo WhatsApp.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Nav />
      <FloatingBlade />
      <main>
        <Hero />
        <About />
        <Gallery />
        <Team />
        <Services />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
