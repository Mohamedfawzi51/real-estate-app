import Image from "next/image";
import { getTranslations } from "next-intl/server";
import { Camera, ShieldCheck, Users } from "lucide-react";
import { authHeroImage } from "@/lib/demo-data";

export async function SellHero() {
  const t = await getTranslations("pages.sell");

  const benefits = [
    { icon: Users, title: t("benefit1Title"), desc: t("benefit1Desc") },
    { icon: ShieldCheck, title: t("benefit2Title"), desc: t("benefit2Desc") },
    { icon: Camera, title: t("benefit3Title"), desc: t("benefit3Desc") },
  ];

  const steps = [t("step1"), t("step2"), t("step3")];

  return (
    <section className="relative flex flex-col justify-between overflow-hidden bg-primary-container px-margin-mobile py-xl md:px-margin-desktop lg:min-h-[calc(100vh-5rem)]">
      <Image
        src={authHeroImage}
        alt=""
        fill
        className="object-cover opacity-60 mix-blend-overlay"
        priority
      />
      <div className="absolute inset-0 bg-gradient-to-t from-primary-container via-primary-container/80 to-primary-container/40" />

      <div className="relative z-10 mx-auto w-full max-w-lg space-y-xl lg:max-w-none">
        <div>
          <p className="font-label-caps text-label-caps text-secondary-fixed">
            Luxury Estate
          </p>
          <h1 className="mt-sm font-display-lg-mobile text-display-lg-mobile font-bold text-inverse-on-surface md:font-display-lg md:text-display-lg">
            {t("title")}
          </h1>
          <p className="mt-md max-w-md font-body-lg text-on-primary-container">
            {t("subtitle")}
          </p>
        </div>

        <div className="space-y-md">
          {benefits.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="glass-card flex gap-md rounded-xl border border-white/15 p-md"
            >
              <div className="flex size-11 shrink-0 items-center justify-center rounded-lg bg-secondary-fixed">
                <Icon className="size-5 text-on-secondary-fixed" />
              </div>
              <div>
                <p className="font-headline-md text-base text-primary">{title}</p>
                <p className="mt-xs font-body-md text-sm text-on-surface-variant">
                  {desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="glass-card rounded-xl border border-white/15 p-lg">
          <p className="font-label-caps text-label-caps text-secondary">
            {t("stepsTitle")}
          </p>
          <ol className="mt-md space-y-sm">
            {steps.map((step, i) => (
              <li key={step} className="flex items-start gap-sm">
                <span className="flex size-7 shrink-0 items-center justify-center rounded-full bg-secondary text-xs font-bold text-on-primary">
                  {i + 1}
                </span>
                <span className="font-body-md text-sm text-on-surface pt-0.5">
                  {step}
                </span>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
