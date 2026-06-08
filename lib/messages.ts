import ar from "@/messages/ar.json";
import en from "@/messages/en.json";
import { routing } from "@/i18n/routing";

type Locale = (typeof routing.locales)[number];

const messages = { ar, en } as const;

export function getMessagesForLocale(locale: Locale) {
  return messages[locale];
}

export function getListingText(locale: Locale, slug: string) {
  const items = messages[locale].listings.items as Record<
    string,
    {
      name: string;
      location: string;
      price: string;
      beds: string;
      baths: string;
      area: string;
    }
  >;
  return items[slug];
}
