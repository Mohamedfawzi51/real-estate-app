import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { SiteNavbar } from "@/components/layout/site-navbar";
import { SiteFooter } from "@/components/layout/site-footer";
import { PageHeader } from "@/components/page-header";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "pages.terms" });
  return { title: `${t("title")} | Luxury Estate` };
}

export default async function TermsPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("pages.terms");
  const about = await getTranslations("pages.about");

  return (
    <>
      <SiteNavbar />
      <main className="pt-20">
        <PageHeader title={t("title")} subtitle={t("subtitle")} />
        <div className="mx-auto max-w-3xl px-margin-mobile py-xl md:px-margin-desktop">
          <p className="font-body-lg text-on-surface-variant">{about("content")}</p>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
