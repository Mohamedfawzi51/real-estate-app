import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { SiteNavbar } from "@/components/layout/site-navbar";
import { SiteFooter } from "@/components/layout/site-footer";
import { PageHeader } from "@/components/page-header";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "pages.faq" });
  return { title: `${t("title")} | Luxury Estate` };
}

export default async function FaqPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("pages.faq");
  const footer = await getTranslations("footer");

  const faqs = [
    footer("links.about"),
    footer("links.guide"),
    footer("links.privacy"),
  ];

  return (
    <>
      <SiteNavbar />
      <main className="pt-20">
        <PageHeader
          title={t("title")}
          subtitle={t("subtitle")}
          breadcrumb={[{ label: t("title") }]}
        />
        <div className="mx-auto max-w-3xl space-y-md px-margin-mobile py-xl md:px-margin-desktop">
          {faqs.map((q, i) => (
            <details
              key={i}
              className="rounded-xl border border-outline-variant bg-surface-container-low p-md"
            >
              <summary className="cursor-pointer font-headline-md text-primary">
                {q}?
              </summary>
              <p className="mt-sm font-body-md text-on-surface-variant">
                {t("subtitle")}
              </p>
            </details>
          ))}
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
