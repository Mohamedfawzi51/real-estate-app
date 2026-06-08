import Image from "next/image";
import { Bath, Bed, MapPin, Ruler } from "lucide-react";
import { Link } from "@/i18n/navigation";

export type PropertyCardData = {
  slug: string;
  name: string;
  location: string;
  price: string;
  beds: string;
  baths: string;
  area: string;
  image: string;
};

export function PropertyCard({ property }: { property: PropertyCardData }) {
  return (
    <Link
      href={`/properties/${property.slug}`}
      className="group block overflow-hidden rounded-xl border border-outline-variant bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_40px_-12px_rgba(19,27,46,0.15)]"
    >
      <div className="relative h-64 overflow-hidden">
        <Image
          src={property.image}
          alt={property.name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
        <div className="absolute top-md end-md rounded bg-secondary px-md py-xs font-data-numeric text-data-numeric font-bold text-on-primary-fixed-variant">
          {property.price}
        </div>
      </div>
      <div className="p-md">
        <h3 className="font-headline-md text-headline-md mb-xs line-clamp-1">
          {property.name}
        </h3>
        <div className="mb-md flex items-center gap-xs text-on-surface-variant">
          <MapPin className="size-4 shrink-0" />
          <span className="font-body-md text-sm line-clamp-1">
            {property.location}
          </span>
        </div>
        <div className="flex justify-between border-t border-outline-variant pt-md">
          <span className="flex items-center gap-xs font-data-numeric">
            <Bed className="size-4 text-outline" />
            {property.beds}
          </span>
          <span className="flex items-center gap-xs font-data-numeric">
            <Bath className="size-4 text-outline" />
            {property.baths}
          </span>
          <span className="flex items-center gap-xs font-data-numeric">
            <Ruler className="size-4 text-outline" />
            {property.area}
          </span>
        </div>
      </div>
    </Link>
  );
}
