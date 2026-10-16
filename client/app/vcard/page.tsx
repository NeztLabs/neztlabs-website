import QRCode from "qrcode";
import VCard from "@/components/VCard";
import { getVCard } from "@/lib/vcard";

export default async function VCardPage() {
  const qrSrc = await QRCode.toDataURL(getVCard(undefined).vcardUrl, {
    width: 168,
    margin: 1,
  });
  return <VCard qrSrc={qrSrc} />;
}
