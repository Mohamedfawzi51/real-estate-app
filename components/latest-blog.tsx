import Image from "next/image";
import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { BLOG_SLUGS } from "@/lib/demo-data";
import { images } from "@/lib/data";

export async function LatestBlog() {
  const t = await getTranslations("blog");
  const posts = t.raw("posts") as Array<{
    category: string;
    title: string;
    excerpt: string;
  }>;

  return (
    <section className="bg-surface px-margin-mobile py-xl md:px-margin-desktop">
      <div className="mx-auto max-w-container-max">
        <div className="mb-xl text-center">
          <h2 className="font-headline-md text-headline-md text-primary">
            {t("title")}
          </h2>
          <p className="text-on-surface-variant">{t("subtitle")}</p>
        </div>

        <div className="grid grid-cols-1 gap-gutter md:grid-cols-3">
          {posts.map((post, index) => (
            <Link
              key={post.title}
              href={`/blog/${BLOG_SLUGS[index]}`}
              className="group block"
            >
              <div className="relative mb-md h-48 overflow-hidden rounded-xl">
                <Image
                  src={images.blog[index]}
                  alt={post.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <span className="font-label-caps text-label-caps text-secondary">
                {post.category}
              </span>
              <h4 className="font-headline-md text-headline-md mt-xs transition-colors group-hover:text-secondary">
                {post.title}
              </h4>
              <p className="mt-xs text-sm text-on-surface-variant">
                {post.excerpt}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
