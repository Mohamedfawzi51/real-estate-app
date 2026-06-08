import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { SiteNavbar } from "@/components/layout/site-navbar";
import { SiteFooter } from "@/components/layout/site-footer";
import { PageHeader } from "@/components/page-header";
import { ListingsGrid } from "@/components/listings-grid";
import { CITY_SLUGS, type CitySlug } from "@/lib/demo-data";
import { routing } from "@/i18n/routing";

type Props = { params: Promise<{ locale: string; slug: string }> };

export function generateStaticParams() {
  return routing.locales.flatMap((locale) =>
    CITY_SLUGS.map((slug) => ({ locale, slug }))
  );
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, slug } = await params;
  const t = await getTranslations({ locale, namespace: "locations" });
  if (!CITY_SLUGS.includes(slug as CitySlug)) return {};
  return {
    title: `${t(`cities.${slug}.name`)} | Luxury Estate`,
  };
}

export default async function LocationPage({ params }: Props) {
  const { locale, slug } = await params;
  setRequestLocale(locale);

  if (!CITY_SLUGS.includes(slug as CitySlug)) notFound();

  const t = await getTranslations("locations");
  const pt = await getTranslations("pages.location");
  const cityName = t(`cities.${slug}.name`);

  return (
    <>
      <SiteNavbar />
      <main className="pt-20">
        <PageHeader
          title={cityName}
          subtitle={pt("subtitle")}
          breadcrumb={[
            { label: "Properties", href: "/properties" },
            { label: cityName },
          ]}
        />
        <div className="mx-auto max-w-container-max px-margin-mobile py-xl md:px-margin-desktop">
          <ListingsGrid citySlug={slug} />
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
