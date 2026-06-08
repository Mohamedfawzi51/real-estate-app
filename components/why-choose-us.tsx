import Image from "next/image";
import { getLocale, getTranslations } from "next-intl/server";
import { BadgeCheck, Headphones } from "lucide-react";
import { images } from "@/lib/data";
import { getMessagesForLocale } from "@/lib/messages";

const featureIcons = [BadgeCheck, Headphones];

export async function WhyChooseUs() {
  const t = await getTranslations("whyUs");
  const locale = await getLocale();
  const features = getMessagesForLocale(locale as "ar" | "en").whyUs.features;

  return (
    <section className="relative overflow-hidden bg-primary px-margin-mobile py-xl text-on-primary md:px-margin-desktop">
      <div className="absolute top-0 end-0 size-96 translate-x-1/2 -translate-y-1/2 rounded-full bg-secondary/10 blur-3xl" />

      <div className="relative z-10 mx-auto flex max-w-container-max flex-col items-center gap-xl md:flex-row">
        <div className="flex-1">
          <span className="font-label-caps text-label-caps mb-xs block tracking-widest text-secondary">
            {t("label")}
          </span>
          <h2 className="font-headline-md mb-md text-display-lg-mobile md:text-display-lg">
            {t("title")}
          </h2>
          <p className="font-body-lg mb-xl text-on-primary/70">
            {t("description")}
          </p>
          <div className="grid grid-cols-1 gap-lg md:grid-cols-2">
            {features.map((feature, index) => {
              const Icon = featureIcons[index];
              return (
                <div key={feature.title} className="flex items-start gap-md">
                  <div className="rounded-lg bg-secondary/20 p-sm">
                    <Icon className="size-6 fill-secondary text-secondary" />
                  </div>
                  <div>
                    <h6 className="font-headline-md text-body-lg mb-xs">
                      {feature.title}
                    </h6>
                    <p className="text-sm text-on-primary/60">
                      {feature.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="w-full flex-1 md:w-auto">
          <div className="relative overflow-hidden rounded-2xl shadow-2xl">
            <Image
              src={images.whyUs}
              alt=""
              width={600}
              height={400}
              className="min-h-[400px] w-full object-cover"
            />
            <div className="pointer-events-none absolute inset-0 border-[16px] border-secondary/20" />
          </div>
        </div>
      </div>
    </section>
  );
}
