import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import BootstrapClient from "@/components/BootstrapClient";
import { I18nProvider } from "@/components/I18nProvider";

// Chrome del sitio público. La ruta oculta /vcard NO usa este layout.
export default function SiteLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <BootstrapClient />
      <I18nProvider>
        <SiteHeader />
        {children}
        <SiteFooter />
      </I18nProvider>
    </>
  );
}
