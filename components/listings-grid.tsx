import { getLocale } from "next-intl/server";
import { PropertyCard } from "@/components/property-card";
import { getListingText, getMessagesForLocale } from "@/lib/messages";
import { filterListings, type ListingType } from "@/lib/demo-data";

export async function ListingsGrid({
  type,
  citySlug,
  categorySlug,
}: {
  type?: ListingType;
  citySlug?: string;
  categorySlug?: string;
}) {
  const locale = await getLocale();
  const filtered = filterListings({
    type,
    citySlug: citySlug as Parameters<typeof filterListings>[0]["citySlug"],
    categorySlug:
      categorySlug as Parameters<typeof filterListings>[0]["categorySlug"],
  });

  if (filtered.length === 0) {
    return (
      <p className="py-xl text-center text-on-surface-variant">
        {getMessagesForLocale(locale as "ar" | "en").listings.empty}
      </p>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-gutter md:grid-cols-2 lg:grid-cols-3">
      {filtered.map((listing) => {
        const text = getListingText(locale as "ar" | "en", listing.slug);
        if (!text) return null;
        return (
          <PropertyCard
            key={listing.slug}
            property={{
              slug: listing.slug,
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
  );
}
