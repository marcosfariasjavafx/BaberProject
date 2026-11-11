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

// Se o site ganhar um domínio próprio, troque aqui e em public/sitemap.xml e public/robots.txt.
const SITE_URL = "https://thebest-eta.vercel.app";
const title = "The Best Barbearia | Barbershop Premium em Americana - SP";
const description =
  "The Best Barbearia em São Jerônimo, Americana - SP. Corte de cabelo, barba e visagismo com profissionais especializados. Agende seu horário pelo WhatsApp.";
const ogImage = `${SITE_URL}/og-image.jpg`;

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "HairSalon",
  "@id": `${SITE_URL}/#barbearia`,
  name: "The Best Barbershop",
  alternateName: ["The Best Barbearia", "The Best Barber", "The Best Barbearia Premium"],
  description,
  url: `${SITE_URL}/`,
  image: ogImage,
  logo: `${SITE_URL}/favicon.png`,
  telephone: "+55 19 99213-8585",
  address: {
    "@type": "PostalAddress",
    streetAddress: "R. Álvaro de Mattos, 109",
    addressLocality: "Americana",
    addressRegion: "SP",
    postalCode: "13469-690",
    addressCountry: "BR",
  },
  areaServed: { "@type": "City", name: "Americana" },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "09:00",
      closes: "19:00",
    },
  ],
  sameAs: ["https://www.instagram.com/the.best_barbearia/"],
};

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: `${SITE_URL}/` },
      { property: "og:site_name", content: "The Best Barbershop" },
      { property: "og:locale", content: "pt_BR" },
      { property: "og:image", content: ogImage },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:image:alt", content: "The Best Barbershop — Barbearia Premium" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
      { name: "twitter:image", content: ogImage },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/` }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(localBusinessJsonLd),
      },
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
