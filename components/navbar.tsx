"use client";

import { useTranslations } from "next-intl";
import { Bell, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { LanguageSwitcher } from "@/components/language-switcher";
import { Link } from "@/i18n/navigation";

export function Navbar() {
  const t = useTranslations("nav");

  return (
    <nav className="fixed top-0 z-50 flex h-20 w-full items-center justify-between border-b border-outline-variant bg-surface/80 px-margin-mobile backdrop-blur-md md:px-margin-desktop">
      <div className="flex items-center gap-xl">
        <Link
          href="/"
          className="font-headline-md text-headline-md font-bold text-primary"
        >
          {t("brand")}
        </Link>
        <div className="hidden items-center gap-md md:flex">
          <a
            href="#"
            className="font-label-caps text-label-caps text-on-surface-variant transition-colors hover:text-primary"
          >
            {t("buy")}
          </a>
          <a
            href="#"
            className="font-label-caps text-label-caps text-on-surface-variant transition-colors hover:text-primary"
          >
            {t("rent")}
          </a>
          <a
            href="#"
            className="font-label-caps text-label-caps text-on-surface-variant transition-colors hover:text-primary"
          >
            {t("sell")}
          </a>
          <LanguageSwitcher />
        </div>
      </div>
      <div className="flex items-center gap-sm">
        <div className="md:hidden">
          <LanguageSwitcher />
        </div>
        <Button variant="ghost" size="icon" aria-label="Search">
          <Search className="size-5" />
        </Button>
        <Button variant="ghost" size="icon" aria-label="Notifications">
          <Bell className="size-5" />
        </Button>
        <div className="mx-xs hidden h-8 w-px bg-outline-variant md:block" />
        <Button variant="ghost" size="sm" className="hidden md:inline-flex">
          {t("login")}
        </Button>
        <Button size="sm">{t("join")}</Button>
      </div>
    </nav>
  );
}
