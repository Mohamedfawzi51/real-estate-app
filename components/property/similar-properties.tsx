import { getLocale, getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { PropertyCard } from "@/components/property-card";
import { listings } from "@/lib/demo-data";
import { getListingText } from "@/lib/messages";

const similarSlugs = [
  "marina-penthouse",
  "al-barari-villa",
  "emirates-hills-palace",
] as const;

export async function SimilarProperties() {
  const t = await getTranslations("propertyDetail.similar");
  const locale = await getLocale();
  return (
    <section className="bg-surface-container-low px-margin-mobile py-xl md:px-margin-desktop">
      <div className="mx-auto max-w-container-max">
        <div className="mb-xl flex items-end justify-between">
          <h2 className="border-s-4 border-secondary ps-md font-headline-md text-headline-md text-primary">
            {t("title")}
          </h2>
          <Link
            href="/properties"
            className="font-label-caps text-label-caps text-secondary hover:underline"
          >
            {t("viewAll")}
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-gutter md:grid-cols-3">
          {similarSlugs.map((slug) => {
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
