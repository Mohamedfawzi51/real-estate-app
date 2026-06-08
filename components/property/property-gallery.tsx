import Image from "next/image";
import { getTranslations } from "next-intl/server";
import { Globe, Video } from "lucide-react";
import { propertyGalleryImages } from "@/lib/property-data";

export async function PropertyGallery() {
  const t = await getTranslations("propertyDetail");

  return (
    <section className="mt-base grid h-[500px] w-full grid-cols-1 grid-rows-2 gap-base px-margin-mobile md:h-[600px] md:grid-cols-4 md:px-margin-desktop">
      <div className="group relative overflow-hidden md:col-span-2 md:row-span-2">
        <Image
          src={propertyGalleryImages[0]}
          alt={t("title")}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
          priority
          sizes="(max-width: 768px) 100vw, 50vw"
        />
        <div className="absolute bottom-md end-md flex gap-xs">
          <button
            type="button"
            className="glass-effect flex items-center gap-xs rounded-full px-sm py-xs font-label-caps text-label-caps text-primary"
          >
            <Video className="size-[18px]" />
            {t("videoTour")}
          </button>
          <button
            type="button"
            className="glass-effect flex items-center gap-xs rounded-full px-sm py-xs font-label-caps text-label-caps text-primary"
          >
            <Globe className="size-[18px]" />
            {t("tour360")}
          </button>
        </div>
      </div>

      {propertyGalleryImages.slice(1, 4).map((src, i) => (
        <div
          key={src}
          className="group relative hidden overflow-hidden md:block"
        >
          <Image
            src={src}
            alt=""
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-110"
            sizes="25vw"
          />
        </div>
      ))}

      <div className="group relative hidden overflow-hidden md:block">
        <Image
          src={propertyGalleryImages[4]}
          alt=""
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
          sizes="25vw"
        />
        <button
          type="button"
          className="absolute inset-0 flex items-center justify-center bg-primary/40 font-headline-md text-headline-md text-on-primary backdrop-blur-sm transition-opacity group-hover:bg-primary/50"
        >
          {t("morePhotos")}
        </button>
      </div>
    </section>
  );
}
