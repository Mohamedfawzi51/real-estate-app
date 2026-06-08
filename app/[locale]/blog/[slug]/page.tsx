import Image from "next/image";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getLocale, getTranslations, setRequestLocale } from "next-intl/server";
import { SiteNavbar } from "@/components/layout/site-navbar";
import { SiteFooter } from "@/components/layout/site-footer";
import { Link } from "@/i18n/navigation";
import { Button } from "@/components/ui/button";
import { BLOG_SLUGS, type BlogSlug } from "@/lib/demo-data";
import { images } from "@/lib/data";
import { getMessagesForLocale } from "@/lib/messages";
import { routing } from "@/i18n/routing";

type Props = { params: Promise<{ locale: string; slug: string }> };

const blogImages = images.blog;

export function generateStaticParams() {
  return routing.locales.flatMap((locale) =>
    BLOG_SLUGS.map((slug) => ({ locale, slug }))
  );
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, slug } = await params;
  const posts = getMessagesForLocale(locale as "ar" | "en").blog.posts;
  const index = BLOG_SLUGS.indexOf(slug as BlogSlug);
  if (index === -1) return {};
  return { title: `${posts[index].title} | Luxury Estate` };
}

export default async function BlogPostPage({ params }: Props) {
  const { locale, slug } = await params;
  setRequestLocale(locale);

  const index = BLOG_SLUGS.indexOf(slug as BlogSlug);
  if (index === -1) notFound();

  const posts = getMessagesForLocale(locale as "ar" | "en").blog.posts;
  const post = posts[index];
  const t = await getTranslations("pages.blog");

  return (
    <>
      <SiteNavbar />
      <main className="pt-20">
        <article className="mx-auto max-w-3xl px-margin-mobile py-xl md:px-margin-desktop">
          <div className="relative mb-xl h-64 overflow-hidden rounded-2xl md:h-96">
            <Image
              src={blogImages[index]}
              alt={post.title}
              fill
              className="object-cover"
              priority
            />
          </div>
          <span className="font-label-caps text-label-caps text-secondary">
            {post.category}
          </span>
          <h1 className="font-headline-md mt-sm text-display-lg-mobile font-bold text-primary md:text-display-lg">
            {post.title}
          </h1>
          <p className="mt-lg font-body-lg leading-relaxed text-on-surface-variant">
            {post.excerpt}
          </p>
          <p className="mt-md font-body-lg leading-relaxed text-on-surface-variant">
            {post.excerpt}
          </p>
          <Button asChild className="mt-xl">
            <Link href="/">{t("back")}</Link>
          </Button>
        </article>
      </main>
      <SiteFooter />
    </>
  );
}
