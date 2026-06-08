import { getTranslations } from "next-intl/server";
import { Globe, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export async function Footer() {
  const t = await getTranslations("footer");

  return (
    <footer className="grid w-full grid-cols-1 gap-gutter border-t border-outline-variant bg-surface-container-lowest px-margin-mobile py-xl md:grid-cols-4 md:px-margin-desktop">
      <div className="col-span-1">
        <h3 className="font-headline-md text-headline-md mb-md text-primary">
          Luxury Estate
        </h3>
        <p className="font-body-md mb-md text-on-surface-variant">
          {t("description")}
        </p>
        <div className="flex gap-md">
          <Button
            variant="outline"
            size="icon"
            className="size-10 rounded-full hover:bg-primary hover:text-on-primary"
          >
            <Globe className="size-5" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="size-10 rounded-full hover:bg-primary hover:text-on-primary"
          >
            <Mail className="size-5" />
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
              <a
                href="#"
                className="font-body-md text-on-surface-variant transition-colors hover:text-secondary"
              >
                {t(`links.${key}`)}
              </a>
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
              <a
                href="#"
                className="font-body-md text-on-surface-variant transition-colors hover:text-secondary"
              >
                {t(`links.${key}`)}
              </a>
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
        <div className="flex flex-col gap-xs">
          <Input
            type="email"
            placeholder={t("emailPlaceholder")}
            className="bg-surface-container-low"
          />
          <Button className="w-full">{t("subscribe")}</Button>
        </div>
      </div>

      <div className="col-span-full mt-xl flex flex-col items-center justify-between border-t border-outline-variant pt-xl opacity-60 md:flex-row">
        <p className="text-sm">{t("copyright")}</p>
        <p className="font-headline-md text-sm">{t("tagline")}</p>
      </div>
    </footer>
  );
}
