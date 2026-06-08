"use client";

import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import { Bell, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { LanguageSwitcher } from "@/components/language-switcher";
import { Link } from "@/i18n/navigation";
import { cn } from "@/lib/utils";

export function PropertyNavbar() {
  const t = useTranslations("nav");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLink = (key: "buy" | "rent" | "sell", active = false) => (
    <a
      href="#"
      className={cn(
        "font-label-caps text-label-caps transition-colors",
        active
          ? "border-b-2 border-primary pb-1 font-bold text-primary"
          : "text-on-surface-variant hover:text-primary"
      )}
    >
      {t(key)}
    </a>
  );

  return (
    <header
      className={cn(
        "fixed top-0 z-50 flex h-20 w-full items-center justify-between border-b border-outline-variant bg-surface/80 px-margin-mobile backdrop-blur-md transition-shadow md:px-margin-desktop",
        scrolled && "shadow-sm"
      )}
    >
      <div className="flex items-center gap-xl">
        <Link
          href="/"
          className="font-headline-md text-headline-md font-bold text-primary"
        >
          {t("brand")}
        </Link>
        <nav className="hidden items-center gap-md md:flex">
          {navLink("buy")}
          {navLink("rent", true)}
          {navLink("sell")}
          <LanguageSwitcher />
        </nav>
      </div>
      <div className="flex items-center gap-md">
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
        <Button variant="ghost" size="sm" className="hidden md:inline-flex font-label-caps text-label-caps">
          {t("login")}
        </Button>
        <Button size="sm" className="font-label-caps text-label-caps">
          {t("join")}
        </Button>
      </div>
    </header>
  );
}
