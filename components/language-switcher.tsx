"use client";

import { useLocale } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";
import { cn } from "@/lib/utils";

export function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const switchLocale = (newLocale: "ar" | "en") => {
    router.replace(pathname, { locale: newLocale });
  };

  return (
    <div className="flex items-center gap-4 md:gap-6">
      <button
        type="button"
        onClick={() => switchLocale("ar")}
        className={cn(
          "font-label-caps text-label-caps pb-1 transition-colors",
          locale === "ar"
            ? "border-b-2 border-primary font-bold text-primary"
            : "text-on-surface-variant hover:text-primary"
        )}
      >
        العربية
      </button>
      <button
        type="button"
        onClick={() => switchLocale("en")}
        className={cn(
          "font-label-caps text-label-caps pb-1 transition-colors",
          locale === "en"
            ? "border-b-2 border-primary font-bold text-primary"
            : "text-on-surface-variant hover:text-primary"
        )}
      >
        English
      </button>
    </div>
  );
}
