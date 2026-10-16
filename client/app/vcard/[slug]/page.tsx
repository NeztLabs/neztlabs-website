import { notFound } from "next/navigation";
import QRCode from "qrcode";
import VCard from "@/components/VCard";
import { VCARD_SLUGS, getVCard, isPersonSlug } from "@/lib/vcard";

export function generateStaticParams(): { slug: string }[] {
  return VCARD_SLUGS.map((slug) => ({ slug }));
}

export default async function VCardSlugPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  if (!isPersonSlug(slug)) notFound();
  // Naza usa su QR impreso de assets; el resto genera el suyo en build.
  const qrSrc =
    slug === "naza"
      ? "/vcard/qr-naza.png"
      : await QRCode.toDataURL(getVCard(slug).vcardUrl, {
          width: 168,
          margin: 1,
        });
  return <VCard slug={slug} qrSrc={qrSrc} />;
}
