// Datos fijos de muestra para la vCard oculta /vcard (ES, sin tracking).
// shortcut: teléfono/WhatsApp y persona son de muestra; reemplazar por reales antes de difundir.

export type VCardVariant = "solid" | "holo" | "minimal";

export const vcard = {
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
} as const;

export const telHref = (e164: string | null) =>
  e164 ? `tel:${e164.replace(/\s/g, "")}` : null;

export const waHref = (num: string | null, text: string) =>
  num ? `https://wa.me/${num}?text=${encodeURIComponent(text)}` : null;

function escVcf(value: string): string {
  return value.replace(/\\/g, "\\\\").replace(/;/g, "\\;").replace(/,/g, "\\,").replace(/\n/g, "\\n");
}

export function buildVcf(): string {
  const lines = [
    "BEGIN:VCARD",
    "VERSION:3.0",
    `FN:${escVcf(vcard.fullName)}`,
    `ORG:${escVcf(vcard.org)}`,
    `TITLE:${escVcf(vcard.title)}`,
  ];
  if (vcard.phoneE164) {
    lines.push(`TEL;TYPE=CELL,VOICE:${escVcf(vcard.phoneE164)}`);
  }
  lines.push(
    `EMAIL;TYPE=WORK,INTERNET:${escVcf(vcard.email)}`,
    `URL:${escVcf(vcard.web)}`,
    `NOTE:${escVcf(`${vcard.tagline} — ${vcard.descriptor}`)}`,
    `REV:${new Date().toISOString().slice(0, 10)}`,
    "END:VCARD",
  );
  return lines.join("\r\n");
}
