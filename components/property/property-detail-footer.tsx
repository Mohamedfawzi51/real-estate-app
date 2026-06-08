import { getTranslations } from "next-intl/server";
import { Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export async function PropertyDetailFooter() {
  const t = await getTranslations("propertyDetail.detailFooter");

  return (
    <footer className="grid w-full grid-cols-1 gap-gutter border-t border-outline-variant bg-surface-container-lowest px-margin-mobile py-xl md:grid-cols-4 md:px-margin-desktop">
      <div>
        <span className="font-headline-md text-headline-md mb-md block text-primary">
          Luxury Estate
        </span>
        <p className="font-body-md text-body-md text-on-surface-variant">
          {t("description")}
        </p>
      </div>

      <div>
        <h4 className="font-label-caps text-label-caps mb-md text-primary">
          {t("quickLinks")}
        </h4>
        <ul className="space-y-xs">
          {(["about", "contact", "guide"] as const).map((key) => (
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

      <div>
        <h4 className="font-label-caps text-label-caps mb-md text-primary">
          {t("legal")}
        </h4>
        <ul className="space-y-xs">
          {(["privacy", "terms"] as const).map((key) => (
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

      <div>
        <h4 className="font-label-caps text-label-caps mb-md text-primary">
          {t("newsletter")}
        </h4>
        <div className="flex gap-xs">
          <Input
            type="email"
            placeholder={t("emailPlaceholder")}
            className="flex-1 border-none bg-surface-container"
          />
          <Button size="icon" aria-label="Subscribe">
            <Send className="size-5" />
          </Button>
        </div>
        <p className="mt-sm font-body-md text-[12px] text-on-surface-variant">
          {t("copyright")}
        </p>
      </div>
    </footer>
  );
}
