import { notFound } from "next/navigation";
import VCard from "@/components/VCard";
import { VCARD_SLUGS, isPersonSlug } from "@/lib/vcard";

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
  return <VCard slug={slug} />;
}
