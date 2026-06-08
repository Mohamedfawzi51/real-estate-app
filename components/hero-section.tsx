"use client";

import { useState } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { Home, MapPin, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useRouter } from "@/i18n/navigation";
import { cn } from "@/lib/utils";
import { images } from "@/lib/data";

export function HeroSection() {
  const t = useTranslations("hero");
  const router = useRouter();
  const [mode, setMode] = useState<"buy" | "rent">("buy");
  const [location, setLocation] = useState("");
  const [propertyType, setPropertyType] = useState("");

  const handleSearch = () => {
    const params = new URLSearchParams({ type: mode });
    if (propertyType) params.set("category", propertyType);
    router.push(`/properties?${params.toString()}`);
  };

  return (
    <section className="relative flex min-h-screen items-center justify-center pt-20">
      <div className="absolute inset-0 z-0">
        <Image
          src={images.hero}
          alt=""
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent" />
      </div>

      <div className="relative z-10 w-full max-w-container-max px-margin-mobile text-center text-on-primary md:px-margin-desktop">
        <h1 className="font-headline-md mb-md text-display-lg-mobile drop-shadow-lg md:text-display-lg">
          {t("title")}
        </h1>
        <p className="font-body-lg text-body-lg mx-auto mb-xl max-w-2xl opacity-90">
          {t("subtitle")}
        </p>

        <div className="mx-auto flex max-w-4xl flex-col items-center gap-xs rounded-xl bg-white/95 p-xs shadow-xl backdrop-blur-md md:flex-row">
          <div className="flex w-full rounded-lg bg-surface-container p-base md:w-auto">
            <button
              type="button"
              onClick={() => setMode("buy")}
              className={cn(
                "rounded-lg px-md py-xs font-label-caps text-label-caps transition-all",
                mode === "buy"
                  ? "bg-primary text-on-primary"
                  : "text-on-surface-variant hover:bg-surface-variant"
              )}
            >
              {t("buy")}
            </button>
            <button
              type="button"
              onClick={() => setMode("rent")}
              className={cn(
                "rounded-lg px-md py-xs font-label-caps text-label-caps transition-all",
                mode === "rent"
                  ? "bg-primary text-on-primary"
                  : "text-on-surface-variant hover:bg-surface-variant"
              )}
            >
              {t("rent")}
            </button>
          </div>

          <div className="flex w-full flex-1 items-center border-outline-variant px-md md:border-e">
            <MapPin className="size-5 shrink-0 text-outline" />
            <Input
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="border-0 bg-transparent shadow-none focus-visible:ring-0"
              placeholder={t("locationPlaceholder")}
            />
          </div>

          <div className="flex w-full flex-1 items-center border-outline-variant px-md md:border-e">
            <Home className="size-5 shrink-0 text-outline" />
            <Select value={propertyType} onValueChange={setPropertyType}>
              <SelectTrigger>
                <SelectValue placeholder={t("propertyType")} />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="villas">{t("propertyTypes.villa")}</SelectItem>
                <SelectItem value="apartments">
                  {t("propertyTypes.apartment")}
                </SelectItem>
                <SelectItem value="offices">
                  {t("propertyTypes.office")}
                </SelectItem>
              </SelectContent>
            </Select>
          </div>

          <Button
            variant="secondary"
            size="lg"
            className="w-full justify-center md:w-auto"
            onClick={handleSearch}
          >
            <Search className="size-5" />
            {t("search")}
          </Button>
        </div>
      </div>
    </section>
  );
}
