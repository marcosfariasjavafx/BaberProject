import { useEffect } from "react";
import { inject, track } from "@vercel/analytics";
import { cleanMeasurementUrl, trackingAllowed, whatsappMeasurement } from "@/lib/measurement";

export function SiteMeasurement() {
  useEffect(() => {
    if (import.meta.env["VITE_ANALYTICS_ENABLED"] !== "true" || !trackingAllowed(navigator)) return;
    inject({
      mode: import.meta.env.PROD ? "production" : "development",
      debug: import.meta.env.DEV,
      beforeSend: (event) =>
        trackingAllowed(navigator) ? { ...event, url: cleanMeasurementUrl(event.url) } : null,
    });
    const handleClick = (event: MouseEvent) => {
      if (
        !(event.target instanceof Element) ||
        !trackingAllowed(navigator) ||
        import.meta.env["VITE_ANALYTICS_EVENTS_ENABLED"] !== "true"
      )
        return;
      const link = event.target.closest<HTMLAnchorElement>("a[href]");
      if (!link) return;
      const source =
        link.dataset["analyticsSource"] ??
        link.closest("section")?.id ??
        (link.closest("footer") ? "rodape" : link.closest("header") ? "menu" : null);
      const properties = whatsappMeasurement(
        link.href,
        source,
        link.dataset["whatsappProfessional"] ?? null,
      );
      // Only two allowlisted properties; never send the destination/message.
      if (properties) track("WhatsApp", properties);
    };
    document.addEventListener("click", handleClick, true);
    return () => document.removeEventListener("click", handleClick, true);
  }, []);
  return null;
}
