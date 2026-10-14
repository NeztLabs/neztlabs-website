import type { Metadata } from "next";

// Ruta oculta: sin header/footer (no usa (site)/layout), no indexable.
export const metadata: Metadata = {
  title: "NEZT — Tarjeta de presentación",
  description: "Tarjeta de presentación digital de NEZT. Llamar, WhatsApp, email y guardar contacto.",
  robots: { index: false, follow: false },
};

export default function VCardLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <>{children}</>;
}
