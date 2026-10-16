// Datos para las vCards ocultas /vcard y /vcard/[slug] (ES, sin tracking).
// shortcut: nico y moises siguen con datos de muestra estándar;
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
  /** Líneas de venta (beneficios). Solo se muestra si existe; hoy solo Naza. */
  pitch?: string[];
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
  web: "https://websitie-startup.vercel.app",
  vcardUrl: `https://websitie-startup.vercel.app/vcard/${slug}`,
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
    web: "https://websitie-startup.vercel.app",
    vcardUrl: "https://websitie-startup.vercel.app/vcard",
    locations: ["Trabajo remoto", "Montevideo, Uruguay"],
  },
  naza: {
    fullName: "Nazareno Mansilla",
    title: "Desarrollador Full-Stack · Automatizador de procesos con IA",
    org: "NEZT",
    tagline: "BUILD. CONNECT. SCALE.",
    descriptor: "Software, automatización e IA aplicada",
    email: "mansillanaza@gmail.com",
    phoneE164: "+543804494128",
    phoneDisplay: "+54 380 449 4128",
    whatsappE164: "543804494128",
    whatsappText: "Hola Nazareno Mansilla de NEZT, vi tu tarjeta y quiero conversar.",
    web: "https://websitie-startup.vercel.app",
    vcardUrl: "https://websitie-startup.vercel.app/vcard/naza",
    locations: ["Trabajo remoto", "La Rioja Capital, La Rioja, Argentina"],
    pitch: [
      "Páginas web que atraen clientes mientras dormís.",
      "Sistemas a medida para tu negocio: orden, control y chau planillas.",
      "Automatización con IA: menos horas manuales, menos errores.",
    ],
  },
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
