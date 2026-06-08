import Image from "next/image";
import { getLocale, getTranslations } from "next-intl/server";
import {
  Bath,
  Car,
  Dumbbell,
  Flower2,
  Warehouse,
  MapPin,
  Ruler,
  Shield,
  Smartphone,
  Waves,
  Bed,
} from "lucide-react";
import { getMessagesForLocale } from "@/lib/messages";
import { propertyMapImage } from "@/lib/property-data";
import { MortgageCalculator } from "./mortgage-calculator";

const amenityIcons = [Waves, Dumbbell, Shield, Smartphone, Flower2, Warehouse];

export async function PropertyContent() {
  const t = await getTranslations("propertyDetail");
  const locale = await getLocale();
  const data = getMessagesForLocale(locale as "ar" | "en").propertyDetail;

  const features = [
    { icon: Ruler, ...data.features.area },
    { icon: Bed, ...data.features.beds },
    { icon: Bath, ...data.features.baths },
    { icon: Car, ...data.features.parking },
  ];

  return (
    <div className="space-y-xl lg:col-span-2">
      <div className="flex flex-col items-start justify-between gap-md border-b border-outline-variant pb-xl md:flex-row">
        <div>
          <h1 className="font-headline-md mb-xs text-headline-md font-bold text-primary md:text-display-lg">
            {t("title")}
          </h1>
          <div className="flex items-center gap-xs text-on-surface-variant">
            <MapPin className="size-5" />
            <span className="font-body-md text-body-md">{t("location")}</span>
          </div>
        </div>
        <div className="flex flex-col items-end">
          <span className="font-label-caps text-label-caps mb-xs text-secondary">
            {t("priceLabel")}
          </span>
          <div className="font-headline-md text-headline-md font-extrabold text-primary">
            {t("price")}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-md md:grid-cols-4">
        {features.map(({ icon: Icon, label, value }) => (
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
          <br />
          <br />
          {t("description.p2")}
        </p>
      </div>

      <div className="space-y-md">
        <h2 className="font-headline-md text-headline-md text-primary">
          {t("amenities.title")}
        </h2>
        <div className="grid grid-cols-2 gap-gutter md:grid-cols-3">
          {data.amenities.items.map((item, index) => {
            const Icon = amenityIcons[index];
            return (
              <div key={item} className="flex items-center gap-md">
                <Icon className="size-5 fill-secondary text-secondary" />
                <span className="font-body-md text-body-md">{item}</span>
              </div>
            );
          })}
        </div>
      </div>

      <div className="space-y-md">
        <h2 className="font-headline-md text-headline-md text-primary">
          {t("locationSection.title")}
        </h2>
        <div className="relative h-96 w-full overflow-hidden rounded-xl border border-outline-variant">
          <Image
            src={propertyMapImage}
            alt={t("locationSection.mapLabel")}
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 66vw"
          />
          <div className="absolute top-sm start-sm rounded-lg bg-surface p-sm font-label-caps text-label-caps shadow-sm">
            {t("locationSection.mapLabel")}
          </div>
        </div>
        <div className="mt-md grid grid-cols-1 gap-md md:grid-cols-2">
          <div className="rounded-xl bg-surface-container-low p-md">
            <h3 className="font-label-caps text-label-caps mb-sm text-secondary">
              {t("locationSection.schools.title")}
            </h3>
            <ul className="space-y-xs">
              {data.locationSection.schools.items.map((item) => (
                <li
                  key={item.name}
                  className="flex justify-between font-body-md text-body-md"
                >
                  <span>{item.name}</span>
                  <span className="text-on-surface-variant">{item.time}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-xl bg-surface-container-low p-md">
            <h3 className="font-label-caps text-label-caps mb-sm text-secondary">
              {t("locationSection.healthcare.title")}
            </h3>
            <ul className="space-y-xs">
              {data.locationSection.healthcare.items.map((item) => (
                <li
                  key={item.name}
                  className="flex justify-between font-body-md text-body-md"
                >
                  <span>{item.name}</span>
                  <span className="text-on-surface-variant">{item.time}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <MortgageCalculator />
    </div>
  );
}
