export function trackingAllowed(navigatorInfo: {
  doNotTrack?: string | null;
  globalPrivacyControl?: boolean;
}) {
  return navigatorInfo.doNotTrack !== "1" && navigatorInfo.globalPrivacyControl !== true;
}

export function cleanMeasurementUrl(raw: string) {
  const url = new URL(raw);
  // Never include query strings, fragments, messages or identifiers.
  return `${url.origin}${url.pathname}`;
}

export function whatsappMeasurement(
  href: string,
  section: string | null,
  professional: string | null,
) {
  let url: URL;
  try {
    url = new URL(href);
  } catch {
    return null;
  }
  if (url.protocol !== "https:" || !["wa.me", "api.whatsapp.com"].includes(url.hostname))
    return null;
  const source = [
    "top",
    "sobre",
    "galeria",
    "barbeiros",
    "servicos",
    "contato",
    "menu",
    "flutuante",
    "rodape",
  ].includes(section ?? "")
    ? section!
    : "outro";
  const barber = ["Pietro", "Julia", "Geovani"].includes(professional ?? "")
    ? professional!
    : "geral";
  return { origem: source, profissional: barber };
}
