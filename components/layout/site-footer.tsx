"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { Globe, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link } from "@/i18n/navigation";
import { useToast } from "@/components/demo-toast";

export function SiteFooter() {
  const t = useTranslations("footer");
  const { showToast } = useToast();
  const [email, setEmail] = useState("");

  const subscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    showToast(t("subscribeSuccess"));
    setEmail("");
  };

  return (
    <footer className="grid w-full grid-cols-1 gap-gutter border-t border-outline-variant bg-surface-container-lowest px-margin-mobile py-xl md:grid-cols-4 md:px-margin-desktop">
      <div className="col-span-1">
        <Link href="/">
          <h3 className="font-headline-md text-headline-md mb-md text-primary">
            Luxury Estate
          </h3>
        </Link>
        <p className="font-body-md mb-md text-on-surface-variant">
          {t("description")}
        </p>
        <div className="flex gap-md">
          <Button
            variant="outline"
            size="icon"
            className="size-10 rounded-full hover:bg-primary hover:text-on-primary"
            asChild
          >
            <Link href="/about" aria-label="About">
              <Globe className="size-5" />
            </Link>
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="size-10 rounded-full hover:bg-primary hover:text-on-primary"
            asChild
          >
            <Link href="/contact" aria-label="Contact">
              <Mail className="size-5" />
            </Link>
          </Button>
        </div>
      </div>

      <div className="col-span-1">
        <h5 className="font-label-caps text-label-caps mb-md text-primary">
          {t("quickLinks")}
        </h5>
        <ul className="space-y-sm">
          {(["about", "contact", "guide", "faq"] as const).map((key) => (
            <li key={key}>
              <Link
                href={`/${key}`}
                className="font-body-md text-on-surface-variant transition-colors hover:text-secondary"
              >
                {t(`links.${key}`)}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="col-span-1">
        <h5 className="font-label-caps text-label-caps mb-md text-primary">
          {t("legal")}
        </h5>
        <ul className="space-y-sm">
          {(["privacy", "terms", "disclaimer"] as const).map((key) => (
            <li key={key}>
              <Link
                href={`/${key}`}
                className="font-body-md text-on-surface-variant transition-colors hover:text-secondary"
              >
                {t(`links.${key}`)}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="col-span-1">
        <h5 className="font-label-caps text-label-caps mb-md text-primary">
          {t("newsletter")}
        </h5>
        <p className="mb-md text-sm text-on-surface-variant">
          {t("newsletterDesc")}
        </p>
        <form onSubmit={subscribe} className="flex flex-col gap-xs">
          <Input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder={t("emailPlaceholder")}
            className="bg-surface-container-low"
            required
          />
          <Button type="submit" className="w-full">
            {t("subscribe")}
          </Button>
        </form>
      </div>

      <div className="col-span-full mt-xl flex flex-col items-center justify-between border-t border-outline-variant pt-xl opacity-60 md:flex-row">
        <p className="text-sm">{t("copyright")}</p>
        <p className="font-headline-md text-sm">{t("tagline")}</p>
      </div>
    </footer>
  );
}
