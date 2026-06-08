import { getTranslations } from "next-intl/server";
import { Building2, Home, Landmark, Trees } from "lucide-react";
import { Link } from "@/i18n/navigation";
import { CATEGORY_SLUGS } from "@/lib/demo-data";
import { getLocale } from "next-intl/server";
import { getMessagesForLocale } from "@/lib/messages";

const categoryIcons = [Building2, Home, Landmark, Trees];

export async function PropertyCategories() {
  const t = await getTranslations("categories");
  const locale = await getLocale();
  const items = getMessagesForLocale(locale as "ar" | "en").categories.items;

  return (
    <section className="bg-surface px-margin-mobile py-xl md:px-margin-desktop">
      <div className="mx-auto max-w-container-max">
        <h2 className="font-headline-md text-headline-md mb-xl text-center text-primary">
          {t("title")}
        </h2>
        <div className="grid grid-cols-2 gap-gutter md:grid-cols-4">
          {items.map((item, index) => {
            const Icon = categoryIcons[index];
            const slug = CATEGORY_SLUGS[index];
            return (
              <Link
                key={item.name}
                href={`/categories/${slug}`}
                className="group rounded-xl bg-surface-container p-xl text-center transition-all hover:bg-secondary-container hover:shadow-md"
              >
                <Icon className="mx-auto mb-md size-10 text-primary transition-transform group-hover:scale-110" />
                <h5 className="font-headline-md text-primary">{item.name}</h5>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
