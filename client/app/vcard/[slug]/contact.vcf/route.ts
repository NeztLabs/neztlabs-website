import { buildVcf, getVCard, isPersonSlug, VCARDS } from "@/lib/vcard";

export const dynamic = "force-static";

export async function GET(
  _req: Request,
  { params }: { params: Promise<{ slug: string }> },
): Promise<Response> {
  const { slug } = await params;
  if (!isPersonSlug(slug)) {
    return new Response("Contacto no encontrado.", { status: 404 });
  }
  const body = buildVcf(getVCard(slug));
  return new Response(body, {
    status: 200,
    headers: {
      "Content-Type": `text/vcard; charset=utf-8; name="${slug}.vcf"`,
      "Content-Disposition": `attachment; filename="${slug}.vcf"`,
      "Cache-Control": "public, max-age=3600",
    },
  });
}

export function generateStaticParams(): { slug: string }[] {
  return (Object.keys(VCARDS) as string[])
    .filter(isPersonSlug)
    .map((slug) => ({ slug }));
}
