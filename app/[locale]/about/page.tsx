import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { SiteNavbar } from "@/components/layout/site-navbar";
import { SiteFooter } from "@/components/layout/site-footer";
import { PageHeader } from "@/components/page-header";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "pages.about" });
  return { title: `${t("title")} | Luxury Estate` };
}

export default async function AboutPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("pages.about");

  return (
    <>
      <SiteNavbar />
      <main className="pt-20">
        <PageHeader
          title={t("title")}
          subtitle={t("subtitle")}
          breadcrumb={[{ label: t("title") }]}
        />
        <div className="mx-auto max-w-3xl px-margin-mobile py-xl md:px-margin-desktop">
          <p className="font-body-lg leading-relaxed text-on-surface-variant">
            {t("content")}
          </p>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
