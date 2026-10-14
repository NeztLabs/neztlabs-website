"use client";

import { useCallback, useRef, useState } from "react";
import { Monogram } from "./Logo";
import { telHref, vcard, waHref } from "@/lib/vcard";

function WppIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M20 12a8 8 0 0 1-11.7 7.1L4 20l.9-4.1A8 8 0 1 1 20 12Z" />
      <path d="M9.5 9.3c.3-.7.6-.7.9-.7l.7.1c.2.1.5.6.6 1.2 0 .5-.3 1.2-.6 1.6-.2.3-.4.6-.1 1 .6.9 1.6 1.7 2.7 2.1.4.2.7 0 1-.3l.6-.7c.2-.3.5-.3.8-.1l1.1.6c.3.2.4.5.3.8-.5 1.7-1.9 2.3-3.4 1.9-2.3-.6-4.6-2.4-5.7-4.7-.6-1.3-.4-2.2.1-2.8Z" />
    </svg>
  );
}

function ShareIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="6" cy="12" r="2.5" />
      <circle cx="18" cy="6" r="2.5" />
      <circle cx="18" cy="18" r="2.5" />
      <path d="m8.2 10.8 7.6-3.6M8.2 13.2l7.6 3.6" />
    </svg>
  );
}

function SaveIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 4v11m0 0-4-4m4 4 4-4" />
      <path d="M4 17v2a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-2" />
    </svg>
  );
}

function PhoneIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M6 3h3l1.5 4-2 1.5a11 11 0 0 0 5 5L15 11.5 19 13v3a2 2 0 0 1-2 2A13 13 0 0 1 4 5a2 2 0 0 1 2-2Z" />
    </svg>
  );
}

function MailIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3.5 7 8.5 6 8.5-6" />
    </svg>
  );
}

function GlobeIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18M12 3a15 15 0 0 1 0 18 15 15 0 0 1 0-18Z" />
    </svg>
  );
}

export default function VCard() {
  const [notice, setNotice] = useState<string | null>(null);
  const [saving, setSaving] = useState(false);
  const [qrOk, setQrOk] = useState(true);
  const cardRef = useRef<HTMLElement>(null);
  const sheenRef = useRef<HTMLDivElement>(null);

  // Tilt holográfico, desactivado con reduced-motion.
  const onTilt = useCallback((e: React.PointerEvent) => {
    const el = cardRef.current;
    const sheen = sheenRef.current;
    if (!el || !sheen) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const r = el.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width - 0.5;
    const py = (e.clientY - r.top) / r.height - 0.5;
    el.style.transform = `perspective(900px) rotateY(${px * 10}deg) rotateX(${py * -10}deg)`;
    sheen.style.background = `radial-gradient(420px circle at ${(px + 0.5) * 100}% ${(py + 0.5) * 100}%, rgba(240,208,137,.28), transparent 60%)`;
  }, []);

  function resetTilt() {
    const el = cardRef.current;
    if (el) el.style.transform = "";
  }

  const tel = telHref(vcard.phoneE164);
  const wa = waHref(vcard.whatsappE164, vcard.whatsappText);
  const qrSrc = `https://api.qrserver.com/v1/create-qr-code/?size=168x168&margin=8&data=${encodeURIComponent(vcard.vcardUrl)}`;

  async function saveContact() {
    setSaving(true);
    setNotice(null);
    try {
      const res = await fetch("/vcard/contact.vcf");
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const blob = await res.blob();
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = "nezt.vcf";
      document.body.appendChild(a);
      a.click();
      a.remove();
      setTimeout(() => URL.revokeObjectURL(url), 4000);
      setNotice("Contacto descargado. Abrilo para guardarlo en tu agenda.");
    } catch {
      setNotice("No se pudo descargar el contacto. Intentá de nuevo.");
    } finally {
      setSaving(false);
    }
  }

  async function share() {
    setNotice(null);
    const data = { title: `NEZT — ${vcard.fullName}`, text: `${vcard.fullName} · ${vcard.org}`, url: vcard.vcardUrl };
    try {
      if (navigator.share) {
        await navigator.share(data);
        return;
      }
      throw new Error("no-share");
    } catch (e) {
      // share cancelado por el usuario: no mostrar nada
      if (e instanceof DOMException && e.name === "AbortError") return;
      try {
        await navigator.clipboard.writeText(vcard.vcardUrl);
        setNotice("Link copiado al portapapeles.");
      } catch {
        setNotice(`Copiá el link manualmente: ${vcard.vcardUrl}`);
      }
    }
  }

  const cardSkin =
    "bg-surface border-accent/60 shadow-[0_24px_80px_-24px_rgba(201,154,46,.45)]";

  const actionBtn =
    "flex min-h-[44px] w-full items-center gap-3 rounded-sm border border-border bg-bg-elev px-4 py-3 text-left text-sm text-fg transition-colors duration-200 hover:border-accent hover:text-accent-bright disabled:cursor-not-allowed disabled:opacity-45 disabled:hover:border-border disabled:hover:text-fg";

  return (
    <main
      className="flex min-h-dvh items-center justify-center px-4 py-10"
      aria-labelledby="vcard-nombre"
      style={{
        backgroundColor: "var(--bg)",
        backgroundImage: "radial-gradient(var(--dot) 1px, transparent 1px)",
        backgroundSize: "22px 22px",
      }}
    >
      <div className="w-full max-w-sm">
        <article
          ref={cardRef}
          onPointerMove={onTilt}
          onPointerLeave={resetTilt}
          aria-label={`Tarjeta de presentación de ${vcard.fullName}`}
          className={`relative overflow-hidden rounded-md border transition-shadow duration-300 ${cardSkin}`}
        >
          <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-accent-deep via-accent via-50% to-gold-hi" />
          <div ref={sheenRef} aria-hidden="true" className="pointer-events-none absolute inset-0" />

          <div className="p-6 sm:p-7">
            <div className="flex items-center gap-4">
              <span className="grid h-14 w-14 shrink-0 place-items-center rounded-sm border border-accent/50 bg-bg">
                <Monogram size={34} />
              </span>
              <div className="min-w-0">
                <p className="font-mono text-[0.6875rem] uppercase tracking-[0.24em] text-accent">{vcard.org}</p>
                <h1 id="vcard-nombre" className="mt-1 font-display text-2xl font-bold leading-tight text-fg">
                  <span className="text-gold-gradient">{vcard.fullName}</span>
                </h1>
                <p className="mt-1 text-sm text-muted">{vcard.title}</p>
              </div>
            </div>

            <p className="mt-4 font-mono text-[0.6875rem] uppercase tracking-[0.24em] text-faint">{vcard.tagline}</p>
            <div className="hairline my-5" aria-hidden="true" />

            <ul className="space-y-2.5" aria-label="Acciones de contacto">
              <li>
                {tel ? (
                  <a href={tel} className={actionBtn}>
                    <span className="text-accent"><PhoneIcon /></span>
                    <span><span className="block font-medium">Llamar</span><span className="block text-xs text-muted">{vcard.phoneDisplay}</span></span>
                  </a>
                ) : (
                  <button type="button" disabled aria-disabled="true" className={actionBtn}>
                    <span className="text-accent"><PhoneIcon /></span>
                    <span><span className="block font-medium">Llamar</span><span className="block text-xs text-muted">Número pendiente</span></span>
                  </button>
                )}
              </li>
              <li>
                {wa ? (
                  <a href={wa} target="_blank" rel="noopener noreferrer" className={actionBtn}>
                    <span className="text-accent"><WppIcon /></span>
                    <span><span className="block font-medium">WhatsApp</span><span className="block text-xs text-muted">Respuesta rápida</span></span>
                  </a>
                ) : (
                  <button type="button" disabled aria-disabled="true" className={actionBtn}>
                    <span className="text-accent"><WppIcon /></span>
                    <span><span className="block font-medium">WhatsApp</span><span className="block text-xs text-muted">Número pendiente</span></span>
                  </button>
                )}
              </li>
              <li>
                <a href={`mailto:${vcard.email}`} className={actionBtn}>
                  <span className="text-accent"><MailIcon /></span>
                  <span><span className="block font-medium">Email</span><span className="block text-xs text-muted">{vcard.email}</span></span>
                </a>
              </li>
              <li>
                <a href={vcard.web} target="_blank" rel="noopener noreferrer" className={actionBtn}>
                  <span className="text-accent"><GlobeIcon /></span>
                  <span><span className="block font-medium">Web</span><span className="block text-xs text-muted">nezt.io</span></span>
                </a>
              </li>
            </ul>

            <div className="mt-2.5 grid grid-cols-2 gap-2.5">
              <button
                type="button"
                onClick={saveContact}
                disabled={saving}
                className="flex min-h-[44px] items-center justify-center gap-2 rounded-sm bg-accent px-3 py-3 text-sm font-semibold text-accent-contrast transition-colors duration-200 hover:bg-accent-bright disabled:opacity-60"
              >
                <SaveIcon />
                {saving ? "Guardando…" : "Guardar"}
              </button>
              <button
                type="button"
                onClick={share}
                className="flex min-h-[44px] items-center justify-center gap-2 rounded-sm border border-accent/60 px-3 py-3 text-sm font-semibold text-accent transition-colors duration-200 hover:bg-accent hover:text-accent-contrast"
              >
                <ShareIcon />
                Compartir
              </button>
            </div>

            {notice && (
              <p role="status" className="mt-3 break-words rounded-sm border border-border bg-bg-elev px-3 py-2 text-xs leading-relaxed text-muted">
                {notice}
              </p>
            )}

            <div className="hairline my-5" aria-hidden="true" />

            <div className="flex items-center gap-4">
              {qrOk ? (
                <img
                  src={qrSrc}
                  alt={`Código QR con el link a la tarjeta ${vcard.vcardUrl}`}
                  width={84}
                  height={84}
                  loading="lazy"
                  onError={() => setQrOk(false)}
                  className="h-[84px] w-[84px] shrink-0 rounded-sm border border-border bg-white p-1"
                />
              ) : (
                <p className="max-w-[12rem] break-all text-xs leading-relaxed text-muted">{vcard.vcardUrl}</p>
              )}
              <div className="min-w-0 text-xs leading-relaxed text-muted">
                <p>{vcard.locations.join(" · ")}</p>
                <p className="mt-1">{vcard.descriptor}</p>
                <p className="mt-1 break-all font-mono text-[0.6875rem] text-faint">{vcard.vcardUrl}</p>
              </div>
            </div>
          </div>
        </article>

        <p className="mt-4 text-center text-xs text-faint">Tarjeta de muestra — datos ilustrativos.</p>
      </div>
    </main>
  );
}
