import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { SiteNavbar } from "@/components/layout/site-navbar";
import { SiteFooter } from "@/components/layout/site-footer";
import { PropertyGallery } from "@/components/property/property-gallery";
import { PropertyContent } from "@/components/property/property-content";
import { PropertySimpleContent } from "@/components/property/property-simple-content";
import { AgentSidebar } from "@/components/property/agent-sidebar";
import { SimilarProperties } from "@/components/property/similar-properties";
import {
  getListingBySlug,
  listings,
  PROPERTY_SLUG,
} from "@/lib/demo-data";
import { routing } from "@/i18n/routing";
import { getListingText } from "@/lib/messages";

type Props = { params: Promise<{ locale: string; slug: string }> };

export function generateStaticParams() {
  return routing.locales.flatMap((locale) =>
    listings.map(({ slug }) => ({ locale, slug }))
  );
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, slug } = await params;
  const listing = getListingBySlug(slug);
  if (!listing) return {};

  if (slug === PROPERTY_SLUG) {
    const t = await getTranslations({
      locale,
      namespace: "propertyDetail.metadata",
    });
    return { title: t("title"), description: t("description") };
  }

  const text = getListingText(locale as "ar" | "en", slug);
  return { title: `${text?.name ?? slug} | Luxury Estate` };
}

export default async function PropertyPage({ params }: Props) {
  const { locale, slug } = await params;
  setRequestLocale(locale);

  if (!getListingBySlug(slug)) notFound();

  const isFeatured = slug === PROPERTY_SLUG;

  return (
    <>
      <SiteNavbar activeNav="buy" />
      <main className="pt-20">
        {isFeatured ? (
          <PropertyGallery />
        ) : null}
        <div className="mx-auto grid max-w-container-max grid-cols-1 gap-xl px-margin-mobile py-xl md:px-margin-desktop lg:grid-cols-3">
          {isFeatured ? (
            <PropertyContent />
          ) : (
            <PropertySimpleContent slug={slug} />
          )}
          <AgentSidebar />
        </div>
        <SimilarProperties />
      </main>
      <SiteFooter />
    </>
  );
}
