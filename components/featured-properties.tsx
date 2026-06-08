import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { PropertyCard } from "@/components/property-card";
import { listings } from "@/lib/demo-data";
import { getLocale } from "next-intl/server";
import { getListingText } from "@/lib/messages";

const featuredSlugs = [
  "marina-penthouse",
  "riyadh-ruby-villa",
  "doha-pearl-palace",
] as const;

export async function FeaturedProperties() {
  const t = await getTranslations("featured");
  const locale = await getLocale();
  return (
    <section className="bg-surface px-margin-mobile py-xl md:px-margin-desktop">
      <div className="mx-auto max-w-container-max">
        <div className="mb-xl flex items-end justify-between">
          <div>
            <span className="font-label-caps text-label-caps mb-xs block tracking-widest text-secondary">
              {t("label")}
            </span>
            <h2 className="font-headline-md text-headline-md text-primary">
              {t("title")}
            </h2>
          </div>
          <Link
            href="/properties"
            className="border-b border-primary pb-base font-label-caps text-label-caps text-primary transition-opacity hover:opacity-70"
          >
            {t("viewAll")}
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-gutter md:grid-cols-3">
          {featuredSlugs.map((slug) => {
            const listing = listings.find((l) => l.slug === slug);
            const text = getListingText(locale as "ar" | "en", slug);
            if (!listing || !text) return null;
            return (
              <PropertyCard
                key={slug}
                property={{
                  slug,
                  image: listing.image,
                  name: text.name,
                  location: text.location,
                  price: text.price,
                  beds: text.beds,
                  baths: text.baths,
                  area: text.area,
                }}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}
