// Datos de muestra para las vCards ocultas /vcard y /vcard/[slug] (ES, sin tracking).
// shortcut: los 3 perfiles (naza, nico, moises) son de muestra estándar;
// reemplazar por datos reales antes de difundir.

export type VCardData = {
  fullName: string;
  title: string;
  org: string;
  tagline: string;
  descriptor: string;
  email: string;
  phoneE164: string | null;
  phoneDisplay: string;
  whatsappE164: string | null;
  whatsappText: string;
  web: string;
  vcardUrl: string;
  locations: string[];
};

export type VCardSlug = "naza" | "nico" | "moises";
export const VCARD_SLUGS: VCardSlug[] = ["naza", "nico", "moises"];

const standard = (
  fullName: string,
  slug: string,
): VCardData => ({
  fullName,
  title: "Software Engineer · NEZT",
  org: "NEZT",
  tagline: "BUILD. CONNECT. SCALE.",
  descriptor: "Software, automatización e IA aplicada",
  email: "labsnezt@gmail.com",
  phoneE164: "+59899123456",
  phoneDisplay: "+598 99 123 456",
  whatsappE164: "59899123456",
  whatsappText: `Hola ${fullName} de NEZT, vi tu tarjeta y quiero conversar.`,
  web: "https://nezt.io",
  vcardUrl: `https://nezt.io/vcard/${slug}`,
  locations: ["Trabajo remoto", "Montevideo, Uruguay"],
});

export const VCARDS: Record<"nezt" | VCardSlug, VCardData> = {
  // Tarjeta genérica actual de /vcard (intacta).
  nezt: {
    fullName: "Santiago Vega",
    title: "Founder · Automatización e IA aplicada",
    org: "NEZT",
    tagline: "BUILD. CONNECT. SCALE.",
    descriptor: "Software, automatización e IA aplicada",
    email: "labsnezt@gmail.com",
    phoneE164: "+59899123456",
    phoneDisplay: "+598 99 123 456",
    whatsappE164: "59899123456",
    whatsappText: "Hola NEZT, vi tu tarjeta y quiero conversar.",
    web: "https://nezt.io",
    vcardUrl: "https://nezt.io/vcard",
    locations: ["Trabajo remoto", "Montevideo, Uruguay"],
  },
  naza: standard("Naza", "naza"),
  nico: standard("Nico", "nico"),
  moises: standard("Moises", "moises"),
};

export function getVCard(slug: string | undefined): VCardData {
  if (slug === "naza" || slug === "nico" || slug === "moises") return VCARDS[slug];
  return VCARDS.nezt;
}

export function isPersonSlug(slug: string): slug is VCardSlug {
  return slug === "naza" || slug === "nico" || slug === "moises";
}

export const telHref = (e164: string | null) =>
  e164 ? `tel:${e164.replace(/\s/g, "")}` : null;

export const waHref = (num: string | null, text: string) =>
  num ? `https://wa.me/${num}?text=${encodeURIComponent(text)}` : null;

function escVcf(value: string): string {
  return value.replace(/\\/g, "\\\\").replace(/;/g, "\\;").replace(/,/g, "\\,").replace(/\n/g, "\\n");
}

export function buildVcf(data: VCardData = VCARDS.nezt): string {
  const lines = [
    "BEGIN:VCARD",
    "VERSION:3.0",
    `FN:${escVcf(data.fullName)}`,
    `ORG:${escVcf(data.org)}`,
    `TITLE:${escVcf(data.title)}`,
  ];
  if (data.phoneE164) {
    lines.push(`TEL;TYPE=CELL,VOICE:${escVcf(data.phoneE164)}`);
  }
  lines.push(
    `EMAIL;TYPE=WORK,INTERNET:${escVcf(data.email)}`,
    `URL:${escVcf(data.web)}`,
    `NOTE:${escVcf(`${data.tagline} — ${data.descriptor}`)}`,
    `REV:${new Date().toISOString().slice(0, 10)}`,
    "END:VCARD",
  );
  return lines.join("\r\n");
}
