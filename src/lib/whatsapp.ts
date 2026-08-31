export const WHATSAPP_NUMBER = "5519992138585";

export function waLink(message: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export const WA_GENERAL = waLink("Oie, gostaria de agendar um horário ");
