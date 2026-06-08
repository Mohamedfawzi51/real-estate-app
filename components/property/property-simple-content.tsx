import Image from "next/image";
import { getLocale, getTranslations } from "next-intl/server";
import { Bath, Bed, Car, MapPin, Ruler } from "lucide-react";
import { getListingText } from "@/lib/messages";
import { getListingBySlug } from "@/lib/demo-data";
import { MortgageCalculator } from "./mortgage-calculator";

export async function PropertySimpleContent({ slug }: { slug: string }) {
  const locale = await getLocale();
  const listing = getListingBySlug(slug);
  const text = getListingText(locale as "ar" | "en", slug);
  const t = await getTranslations("propertyDetail");

  if (!listing || !text) return null;

  return (
    <div className="space-y-xl lg:col-span-2">
      <div className="relative h-72 overflow-hidden rounded-2xl md:h-96">
        <Image
          src={listing.image}
          alt={text.name}
          fill
          className="object-cover"
          priority
          sizes="(max-width: 1024px) 100vw, 66vw"
        />
      </div>

      <div className="flex flex-col items-start justify-between gap-md border-b border-outline-variant pb-xl md:flex-row">
        <div>
          <h1 className="font-headline-md mb-xs text-headline-md font-bold text-primary md:text-display-lg">
            {text.name}
          </h1>
          <div className="flex items-center gap-xs text-on-surface-variant">
            <MapPin className="size-5" />
            <span className="font-body-md text-body-md">{text.location}</span>
          </div>
        </div>
        <div className="font-headline-md text-headline-md font-extrabold text-primary">
          {text.price}
        </div>
      </div>

      <div className="grid grid-cols-2 gap-md md:grid-cols-4">
        {[
          { icon: Ruler, label: t("features.area.label"), value: text.area },
          { icon: Bed, label: t("features.beds.label"), value: text.beds },
          { icon: Bath, label: t("features.baths.label"), value: text.baths },
          { icon: Car, label: t("features.parking.label"), value: "4" },
        ].map(({ icon: Icon, label, value }) => (
          <div
            key={label}
            className="flex flex-col items-center rounded-xl border border-outline-variant/30 bg-surface-container-low p-md text-center"
          >
            <Icon className="mb-xs size-6 text-secondary" />
            <span className="font-label-caps text-label-caps text-on-surface-variant">
              {label}
            </span>
            <span className="font-data-numeric text-data-numeric font-bold">
              {value}
            </span>
          </div>
        ))}
      </div>

      <div className="space-y-md">
        <h2 className="font-headline-md text-headline-md text-primary">
          {t("description.title")}
        </h2>
        <p className="font-body-lg text-body-lg leading-relaxed text-on-surface-variant">
          {t("description.p1")}
        </p>
      </div>

      <MortgageCalculator />
    </div>
  );
}
