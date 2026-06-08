import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { SiteNavbar } from "@/components/layout/site-navbar";
import { SiteFooter } from "@/components/layout/site-footer";
import { PageHeader } from "@/components/page-header";
import { ContactForm } from "@/components/contact-form";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "pages.contact" });
  return { title: `${t("title")} | Luxury Estate` };
}

export default async function ContactPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("pages.contact");

  return (
    <>
      <SiteNavbar />
      <main className="pt-20">
        <PageHeader
          title={t("title")}
          subtitle={t("subtitle")}
          breadcrumb={[{ label: t("title") }]}
        />
        <div className="px-margin-mobile py-xl md:px-margin-desktop">
          <ContactForm />
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
