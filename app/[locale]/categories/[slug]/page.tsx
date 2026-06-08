import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { SiteNavbar } from "@/components/layout/site-navbar";
import { SiteFooter } from "@/components/layout/site-footer";
import { PageHeader } from "@/components/page-header";
import { ListingsGrid } from "@/components/listings-grid";
import { CATEGORY_SLUGS, type CategorySlug } from "@/lib/demo-data";
import { routing } from "@/i18n/routing";

type Props = { params: Promise<{ locale: string; slug: string }> };

export function generateStaticParams() {
  return routing.locales.flatMap((locale) =>
    CATEGORY_SLUGS.map((slug) => ({ locale, slug }))
  );
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, slug } = await params;
  const t = await getTranslations({ locale, namespace: "categories" });
  const index = CATEGORY_SLUGS.indexOf(slug as CategorySlug);
  if (index === -1) return {};
  const items = t.raw("items") as { name: string }[];
  return { title: `${items[index].name} | Luxury Estate` };
}

export default async function CategoryPage({ params }: Props) {
  const { locale, slug } = await params;
  setRequestLocale(locale);

  if (!CATEGORY_SLUGS.includes(slug as CategorySlug)) notFound();

  const t = await getTranslations("categories");
  const pt = await getTranslations("pages.category");
  const index = CATEGORY_SLUGS.indexOf(slug as CategorySlug);
  const items = t.raw("items") as { name: string }[];
  const categoryName = items[index].name;

  return (
    <>
      <SiteNavbar />
      <main className="pt-20">
        <PageHeader
          title={categoryName}
          subtitle={pt("subtitle")}
          breadcrumb={[
            { label: "Properties", href: "/properties" },
            { label: categoryName },
          ]}
        />
        <div className="mx-auto max-w-container-max px-margin-mobile py-xl md:px-margin-desktop">
          <ListingsGrid categorySlug={slug} />
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
