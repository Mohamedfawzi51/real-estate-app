"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { ArrowUpRight, MapPin } from "lucide-react";
import { Link } from "@/i18n/navigation";
import { CITY_SLUGS, cityImages, type CitySlug } from "@/lib/demo-data";
import { cn } from "@/lib/utils";

const cityKeys: CitySlug[] = [...CITY_SLUGS];

export function PopularLocations() {
  const t = useTranslations("locations");

  return (
    <section className="overflow-hidden bg-surface-container-low px-margin-mobile py-xl md:px-margin-desktop">
      <div className="mx-auto max-w-container-max">
        <div className="mb-xl flex flex-col gap-md md:flex-row md:items-end md:justify-between">
          <div className="text-center md:text-start">
            <span className="font-label-caps text-label-caps mb-xs block tracking-widest text-secondary">
              {t("label")}
            </span>
            <h2 className="font-headline-md text-headline-md text-primary">
              {t("title")}
            </h2>
            <p className="mx-auto mt-sm max-w-xl text-on-surface-variant md:mx-0">
              {t("subtitle")}
            </p>
          </div>
          <Link
            href="/properties"
            className="hidden items-center gap-xs self-center font-label-caps text-label-caps text-secondary hover:underline md:flex"
          >
            {t("exploreAll")}
            <ArrowUpRight className="size-4" />
          </Link>
        </div>

        {/* Mobile: horizontal snap carousel */}
        <div className="flex gap-md overflow-x-auto pb-md [-ms-overflow-style:none] [scrollbar-width:none] md:hidden [&::-webkit-scrollbar]:hidden">
          {cityKeys.map((slug, i) => (
            <LocationCard
              key={slug}
              slug={slug}
              image={cityImages[slug]}
              name={t(`cities.${slug}.name`)}
              count={t(`cities.${slug}.count`)}
              explore={t("explore")}
              className="min-w-[85vw] shrink-0 snap-center sm:min-w-[70vw]"
              featured={i === 0}
            />
          ))}
        </div>

        {/* Tablet & desktop: adaptive bento grid */}
        <div className="hidden gap-gutter md:grid md:grid-cols-6 md:grid-rows-2 md:min-h-[520px] lg:min-h-[560px]">
          <LocationCard
            slug={cityKeys[0]}
            image={cityImages[cityKeys[0]]}
            name={t(`cities.${cityKeys[0]}.name`)}
            count={t(`cities.${cityKeys[0]}.count`)}
            explore={t("explore")}
            className="md:col-span-3 md:row-span-2"
            featured
          />
          <LocationCard
            slug={cityKeys[1]}
            image={cityImages[cityKeys[1]]}
            name={t(`cities.${cityKeys[1]}.name`)}
            count={t(`cities.${cityKeys[1]}.count`)}
            explore={t("explore")}
            className="md:col-span-3 md:row-span-1"
          />
          <LocationCard
            slug={cityKeys[2]}
            image={cityImages[cityKeys[2]]}
            name={t(`cities.${cityKeys[2]}.name`)}
            count={t(`cities.${cityKeys[2]}.count`)}
            explore={t("explore")}
            className="md:col-span-2 md:row-span-1"
          />
          <LocationCard
            slug={cityKeys[3]}
            image={cityImages[cityKeys[3]]}
            name={t(`cities.${cityKeys[3]}.name`)}
            count={t(`cities.${cityKeys[3]}.count`)}
            explore={t("explore")}
            className="md:col-span-1 md:row-span-1"
          />
        </div>

        <div className="mt-md flex justify-center md:hidden">
          <Link
            href="/properties"
            className="flex items-center gap-xs font-label-caps text-label-caps text-secondary"
          >
            {t("exploreAll")}
            <ArrowUpRight className="size-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

function LocationCard({
  slug,
  image,
  name,
  count,
  explore,
  className,
  featured,
}: {
  slug: CitySlug;
  image: string;
  name: string;
  count: string;
  explore: string;
  className?: string;
  featured?: boolean;
}) {
  return (
    <Link
      href={`/locations/${slug}`}
      className={cn(
        "group relative block min-h-[280px] overflow-hidden rounded-2xl",
        className
      )}
    >
      <Image
        src={image}
        alt={name}
        fill
        className="object-cover transition-transform duration-700 group-hover:scale-110"
        sizes={
          featured
            ? "(max-width: 768px) 85vw, 50vw"
            : "(max-width: 768px) 85vw, 25vw"
        }
      />
      <div className="absolute inset-0 bg-gradient-to-t from-primary/95 via-primary/20 to-transparent transition-opacity group-hover:from-primary" />
      <div className="absolute inset-0 flex flex-col justify-between p-md md:p-lg">
        <div className="flex justify-end">
          <span className="glass-effect flex items-center gap-xs rounded-full px-sm py-xs font-label-caps text-[10px] text-primary opacity-0 transition-all duration-300 group-hover:opacity-100">
            <MapPin className="size-3" />
            {explore}
            <ArrowUpRight className="size-3" />
          </span>
        </div>
        <div>
          <h4
            className={cn(
              "font-headline-md text-on-primary",
              featured ? "text-headline-md md:text-display-lg-mobile" : "text-lg"
            )}
          >
            {name}
          </h4>
          <p className="mt-xs font-label-caps text-on-primary/80">{count}</p>
        </div>
      </div>
    </Link>
  );
}
