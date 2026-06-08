import { setRequestLocale } from "next-intl/server";
import { SiteNavbar } from "@/components/layout/site-navbar";
import { SiteFooter } from "@/components/layout/site-footer";
import { HeroSection } from "@/components/hero-section";
import { FeaturedProperties } from "@/components/featured-properties";
import { PopularLocations } from "@/components/popular-locations";
import { PropertyCategories } from "@/components/property-categories";
import { WhyChooseUs } from "@/components/why-choose-us";
import { LatestBlog } from "@/components/latest-blog";

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <SiteNavbar />
      <main>
        <HeroSection />
        <FeaturedProperties />
        <PopularLocations />
        <PropertyCategories />
        <WhyChooseUs />
        <LatestBlog />
      </main>
      <SiteFooter />
    </>
  );
}
