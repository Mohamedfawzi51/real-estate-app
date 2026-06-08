"use client";

import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import {
  Bell,
  Building2,
  ChevronRight,
  Home,
  KeyRound,
  Menu,
  Search,
  Tag,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { LanguageSwitcher } from "@/components/language-switcher";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Link, usePathname, useRouter } from "@/i18n/navigation";
import { cn } from "@/lib/utils";

type NavItem = {
  key: "buy" | "rent" | "sell";
  href: "/properties" | "/sell";
  query?: Record<string, string>;
  icon: React.ComponentType<{ className?: string }>;
};

export function SiteNavbar({ activeNav }: { activeNav?: "buy" | "rent" | "sell" }) {
  const t = useTranslations("nav");
  const pathname = usePathname();
  const router = useRouter();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const navItems: NavItem[] = [
    { key: "buy", href: "/properties", query: { type: "buy" }, icon: Home },
    { key: "rent", href: "/properties", query: { type: "rent" }, icon: KeyRound },
    { key: "sell", href: "/sell", icon: Tag },
  ];

  const isActive = (key: "buy" | "rent" | "sell") => {
    if (activeNav) return activeNav === key;
    if (key === "buy" && pathname.startsWith("/properties")) return true;
    if (key === "sell" && pathname === "/sell") return true;
    return false;
  };

  const navigate = (href: string, query?: Record<string, string>) => {
    setOpen(false);
    if (query) {
      router.push({ pathname: href, query } as { pathname: "/properties"; query: Record<string, string> });
    } else {
      router.push(href as "/sell");
    }
  };

  const desktopLink = (item: NavItem) => (
    <Link
      key={item.key}
      href={
        item.query
          ? ({ pathname: item.href, query: item.query } as { pathname: "/properties"; query: { type: string } })
          : item.href
      }
      className={cn(
        "group relative font-label-caps text-label-caps transition-colors",
        isActive(item.key)
          ? "font-bold text-primary"
          : "text-on-surface-variant hover:text-primary"
      )}
    >
      {t(item.key)}
      <span
        className={cn(
          "absolute -bottom-1 start-0 h-0.5 bg-secondary transition-all duration-300",
          isActive(item.key) ? "w-full" : "w-0 group-hover:w-full"
        )}
      />
    </Link>
  );

  return (
    <header
      className={cn(
        "fixed top-0 z-50 w-full border-b border-outline-variant/80 bg-surface/85 backdrop-blur-xl transition-all duration-300",
        scrolled && "shadow-[0_8px_30px_rgba(19,27,46,0.08)]"
      )}
    >
      <div className="mx-auto flex h-[72px] max-w-container-max items-center justify-between px-margin-mobile md:h-20 md:px-margin-desktop">
        <div className="flex items-center gap-lg md:gap-xl">
          <Link href="/" className="group flex items-center gap-sm">
            <div className="flex size-10 items-center justify-center rounded-lg bg-primary shadow-md transition-transform group-hover:scale-105">
              <Building2 className="size-5 text-on-primary" />
            </div>
            <span className="font-headline-md text-headline-md font-bold text-primary">
              {t("brand")}
            </span>
          </Link>
          <nav className="hidden items-center gap-lg md:flex">
            {navItems.map(desktopLink)}
            <LanguageSwitcher />
          </nav>
        </div>

        <div className="flex items-center gap-xs md:gap-sm">
          <Button variant="ghost" size="icon" className="md:hidden" asChild>
            <Link href="/properties" aria-label="Search">
              <Search className="size-5" />
            </Link>
          </Button>

          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button
                type="button"
                variant="ghost"
                size="icon"
                className="relative z-[51] md:hidden"
                aria-label={t("menuLabel")}
                aria-expanded={open}
              >
                <Menu className="size-6" />
              </Button>
            </SheetTrigger>
            <SheetContent title={t("menuLabel")} description={t("menuSubtitle")}>
              <div className="flex h-full flex-col overflow-y-auto pt-14">
                <div className="border-b border-outline-variant px-margin-mobile pb-lg">
                  <p className="font-label-caps text-label-caps text-on-surface-variant">
                    {t("menuLabel")}
                  </p>
                  <p className="font-headline-md text-headline-md mt-xs text-primary">
                    {t("menuSubtitle")}
                  </p>
                </div>

                <nav className="flex-1 space-y-xs px-margin-mobile py-lg">
                  {navItems.map((item) => {
                    const Icon = item.icon;
                    return (
                      <button
                        key={item.key}
                        type="button"
                        onClick={() => navigate(item.href, item.query)}
                        className={cn(
                          "flex w-full items-center justify-between rounded-xl px-md py-md text-start transition-all",
                          isActive(item.key)
                            ? "bg-secondary-container text-primary"
                            : "hover:bg-surface-container"
                        )}
                      >
                        <span className="flex items-center gap-md">
                          <Icon className="size-5 text-secondary" />
                          <span className="font-headline-md text-base">
                            {t(item.key)}
                          </span>
                        </span>
                        <ChevronRight className="size-4 text-outline rtl:rotate-180" />
                      </button>
                    );
                  })}
                  <button
                    type="button"
                    onClick={() => navigate("/properties")}
                    className="flex w-full items-center justify-between rounded-xl px-md py-md text-start hover:bg-surface-container"
                  >
                    <span className="flex items-center gap-md">
                      <Search className="size-5 text-secondary" />
                      <span className="font-headline-md text-base">
                        {t("searchProperties")}
                      </span>
                    </span>
                    <ChevronRight className="size-4 text-outline rtl:rotate-180" />
                  </button>
                </nav>

                <div className="space-y-md border-t border-outline-variant px-margin-mobile py-lg">
                  <LanguageSwitcher />
                  <div className="grid grid-cols-2 gap-sm">
                    <Button
                      variant="outline"
                      onClick={() => {
                        setOpen(false);
                        router.push({ pathname: "/auth", query: { mode: "login" } });
                      }}
                    >
                      {t("login")}
                    </Button>
                    <Button
                      onClick={() => {
                        setOpen(false);
                        router.push({ pathname: "/auth", query: { mode: "signup" } });
                      }}
                    >
                      {t("join")}
                    </Button>
                  </div>
                </div>
              </div>
            </SheetContent>
          </Sheet>

          <Button
            variant="ghost"
            size="icon"
            className="hidden md:inline-flex"
            asChild
          >
            <Link href="/properties" aria-label="Search">
              <Search className="size-5" />
            </Link>
          </Button>
          <Button variant="ghost" size="icon" className="hidden sm:inline-flex">
            <Bell className="size-5" />
          </Button>
          <div className="mx-xs hidden h-8 w-px bg-outline-variant md:block" />
          <Button variant="ghost" size="sm" className="hidden md:inline-flex" asChild>
            <Link href={{ pathname: "/auth", query: { mode: "login" } }}>
              {t("login")}
            </Link>
          </Button>
          <Button size="sm" className="hidden sm:inline-flex shadow-md" asChild>
            <Link href={{ pathname: "/auth", query: { mode: "signup" } }}>
              {t("join")}
            </Link>
          </Button>
        </div>
      </div>
    </header>
  );
}
