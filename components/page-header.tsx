import { Link } from "@/i18n/navigation";
import { ChevronRight } from "lucide-react";

export function PageHeader({
  title,
  subtitle,
  breadcrumb,
}: {
  title: string;
  subtitle?: string;
  breadcrumb?: { label: string; href?: string }[];
}) {
  return (
    <div className="border-b border-outline-variant bg-surface-container-low px-margin-mobile py-xl md:px-margin-desktop">
      <div className="mx-auto max-w-container-max">
        {breadcrumb && (
          <nav className="mb-md flex flex-wrap items-center gap-xs font-label-caps text-label-caps text-on-surface-variant">
            <Link href="/" className="hover:text-secondary">
              Home
            </Link>
            {breadcrumb.map((item, i) => (
              <span key={i} className="flex items-center gap-xs">
                <ChevronRight className="size-3 rtl:rotate-180" />
                {item.href ? (
                  <Link href={item.href} className="hover:text-secondary">
                    {item.label}
                  </Link>
                ) : (
                  <span className="text-primary">{item.label}</span>
                )}
              </span>
            ))}
          </nav>
        )}
        <h1 className="font-headline-md text-display-lg-mobile font-bold text-primary md:text-display-lg">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-sm max-w-2xl font-body-lg text-on-surface-variant">
            {subtitle}
          </p>
        )}
      </div>
    </div>
  );
}
