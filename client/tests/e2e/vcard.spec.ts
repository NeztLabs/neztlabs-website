import { test, expect } from "@playwright/test";

test.describe("vCard oculta /vcard", () => {
  test("muestra solo la tarjeta, sin header ni footer, y noindex", async ({ page }) => {
    await page.goto("/vcard");
    await expect(page.getByRole("heading", { name: "Santiago Vega" })).toBeVisible();
    await expect(page.locator("header nav")).toHaveCount(0);
    await expect(page.locator("footer, [role='contentinfo']")).toHaveCount(0);
    const robots = page.locator('meta[name="robots"]');
    await expect(robots).toHaveAttribute("content", /noindex/);
  });

  test("acciones rápidas tienen hrefs correctos", async ({ page }) => {
    await page.goto("/vcard");
    await expect(page.getByRole("link", { name: /Llamar/ })).toHaveAttribute("href", "tel:+59899123456");
    await expect(page.getByRole("link", { name: /WhatsApp/ })).toHaveAttribute("href", /wa\.me\/59899123456/);
    await expect(page.getByRole("link", { name: /Email/ })).toHaveAttribute("href", "mailto:labsnezt@gmail.com");
    await expect(page.getByRole("link", { name: /Web/ })).toHaveAttribute("href", "https://nezt.io");
  });

  test("endpoint .vcf descarga vCard válida", async ({ request }) => {
    const res = await request.get("/vcard/contact.vcf");
    expect(res.ok()).toBeTruthy();
    expect(res.headers()["content-type"]).toContain("text/vcard");
    expect(res.headers()["content-disposition"]).toContain("nezt.vcf");
    const body = await res.text();
    expect(body).toContain("BEGIN:VCARD");
    expect(body).toContain("FN:Santiago Vega");
    expect(body).toContain("ORG:NEZT");
    expect(body).toContain("END:VCARD");
  });

  test("variante holográfica única y 360px sin scroll horizontal", async ({ page }) => {
    await page.setViewportSize({ width: 360, height: 800 });
    await page.goto("/vcard");
    await expect(page.getByRole("button", { name: "Sólida" })).toHaveCount(0);
    await expect(page.getByRole("button", { name: "Minimal" })).toHaveCount(0);
    await expect(page.getByRole("article")).toBeVisible();
    const noXScroll = await page.evaluate(() => document.documentElement.scrollWidth <= 360);
    expect(noXScroll).toBeTruthy();
  });

  test("sitio público intacto: / tiene header y footer", async ({ page }) => {
    await page.goto("/");
    await expect(page.locator("header")).toBeVisible();
    await expect(page.locator("footer, [role='contentinfo']").first()).toBeVisible();
  });

  test("cada slug muestra su tarjeta sin chrome", async ({ page }) => {
    for (const [slug, name] of [["naza", "Nazareno Mansilla"], ["nico", "Nico"], ["moises", "Moises"]]) {
      await page.goto(`/vcard/${slug}`);
      await expect(page.getByRole("heading", { name })).toBeVisible();
      await expect(page.locator("header nav")).toHaveCount(0);
      await expect(page.locator("footer, [role='contentinfo']")).toHaveCount(0);
    }
  });

  test("slug inválido devuelve 404", async ({ page }) => {
    const res = await page.goto("/vcard/xyz");
    expect(res?.status()).toBe(404);
  });

  test("vcf por slug trae el FN de la persona", async ({ request }) => {
    for (const [slug, name] of [["naza", "Nazareno Mansilla"], ["nico", "Nico"], ["moises", "Moises"]]) {
      const res = await request.get(`/vcard/${slug}/contact.vcf`);
      expect(res.ok()).toBeTruthy();
      expect(res.headers()["content-type"]).toContain("text/vcard");
      const body = await res.text();
      expect(body).toContain(`FN:${name}`);
      expect(body).toContain("END:VCARD");
    }
  });

  test("pitch de venta solo en Naza", async ({ page }) => {
    await page.goto("/vcard/naza");
    await expect(page.getByRole("heading", { name: "Nazareno Mansilla" })).toBeVisible();
    const pitch = page.getByRole("region", { name: "Beneficios de trabajar conmigo" });
    await expect(pitch).toBeVisible();
    await expect(pitch).toContainText("mientras dormís");
    await page.goto("/vcard/nico");
    await expect(page.getByRole("region", { name: "Beneficios de trabajar conmigo" })).toHaveCount(0);
  });
});
