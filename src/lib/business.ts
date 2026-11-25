export const BUSINESS_HOURS = [
  {
    label: "Terça a sexta: 09h — 20h",
    days: ["Tuesday", "Wednesday", "Thursday", "Friday"],
    opens: "09:00",
    closes: "20:00",
  },
  { label: "Sábado: 08h — 18h", days: ["Saturday"], opens: "08:00", closes: "18:00" },
];

export const OPENING_HOURS_SCHEMA = BUSINESS_HOURS.map(({ days, opens, closes }) => ({
  "@type": "OpeningHoursSpecification",
  dayOfWeek: days,
  opens,
  closes,
}));
