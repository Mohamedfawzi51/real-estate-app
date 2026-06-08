import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { SiteNavbar } from "@/components/layout/site-navbar";
import { SiteFooter } from "@/components/layout/site-footer";
import { SellHero } from "@/components/sell-hero";
import { SellForm } from "@/components/sell-form";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "pages.sell" });
  return { title: `${t("title")} | Luxury Estate` };
}

export default async function SellPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <SiteNavbar activeNav="sell" />
      <main className="pt-[72px] md:pt-20">
        <div className="grid lg:grid-cols-2">
          <SellHero />
          <section className="w-full min-w-0 bg-surface px-margin-mobile py-xl md:px-margin-desktop lg:min-h-[calc(100vh-5rem)]">
            <div className="mx-auto w-full max-w-lg">
              <SellForm />
            </div>
          </section>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
