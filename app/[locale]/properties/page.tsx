import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { SiteNavbar } from "@/components/layout/site-navbar";
import { SiteFooter } from "@/components/layout/site-footer";
import { PageHeader } from "@/components/page-header";
import { ListingsGrid } from "@/components/listings-grid";
import type { ListingType } from "@/lib/demo-data";

type Props = {
  params: Promise<{ locale: string }>;
  searchParams: Promise<{ type?: string; category?: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "listings" });
  return { title: `${t("allTitle")} | Luxury Estate` };
}

export default async function PropertiesPage({ params, searchParams }: Props) {
  const { locale } = await params;
  const { type, category } = await searchParams;
  setRequestLocale(locale);

  const t = await getTranslations("listings");
  const listingType =
    type === "rent" || type === "buy" ? (type as ListingType) : undefined;

  const title =
    listingType === "buy"
      ? t("buyTitle")
      : listingType === "rent"
        ? t("rentTitle")
        : t("allTitle");

  return (
    <>
      <SiteNavbar activeNav={listingType} />
      <main className="pt-20">
        <PageHeader title={title} breadcrumb={[{ label: title }]} />
        <div className="mx-auto max-w-container-max px-margin-mobile py-xl md:px-margin-desktop">
          <ListingsGrid type={listingType} categorySlug={category} />
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
