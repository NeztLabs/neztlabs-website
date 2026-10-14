import { buildVcf } from "@/lib/vcard";

export const dynamic = "force-static";

export async function GET(): Promise<Response> {
  const body = buildVcf();
  return new Response(body, {
    status: 200,
    headers: {
      "Content-Type": "text/vcard; charset=utf-8; name=\"nezt.vcf\"",
      "Content-Disposition": 'attachment; filename="nezt.vcf"',
      "Cache-Control": "public, max-age=3600",
    },
  });
}
