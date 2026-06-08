export const CITY_SLUGS = [
  "dubai",
  "riyadh",
  "doha",
  "abu-dhabi",
] as const;

export const CATEGORY_SLUGS = [
  "apartments",
  "villas",
  "offices",
  "land",
] as const;

export const BLOG_SLUGS = [
  "dubai-2025",
  "interior-trends",
  "smart-homes",
] as const;

export type CitySlug = (typeof CITY_SLUGS)[number];
export type CategorySlug = (typeof CATEGORY_SLUGS)[number];
export type BlogSlug = (typeof BLOG_SLUGS)[number];

export const PROPERTY_SLUG = "ultra-modern-villa-palm-jumeirah";

export type ListingType = "buy" | "rent";

export type Listing = {
  slug: string;
  image: string;
  types: ListingType[];
  citySlug: CitySlug;
  categorySlug: CategorySlug;
};

export const listings: Listing[] = [
  {
    slug: PROPERTY_SLUG,
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuC6HxKrebOElp-W3-9tklnLE9B7clhXvY-L5ayaxNEtqSqFDFqa4_ckSaV-J9neAgL9aZTQZURhRPE_EAn6oPN0K8Dd7DTvkPcFcLqpYszZTiZKoUCLj0o8Iw2Y-brwT7Guu6WQCKs48Bne8gpxSk4NqxZjBTbKIAYFGHxMlBZYRTYHLhbRenrdqv0_-U4NS3MSkqJdwLXds5KwXv6WTeJopL3sUMRtcS8rFBsSj7sllwggYDuTkkq2qlL36ZeRJ4skmjvOQMU_CI2Y",
    types: ["buy"],
    citySlug: "dubai",
    categorySlug: "villas",
  },
  {
    slug: "marina-penthouse",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAnc1bBOuBKQZ46V76_HlUGViyp8XNLt82hQ9cv9W_Kru0nYanL1cDVW0iNMoO7OB7no-xbxRgB_OOzBDnXAAyNU4GKZzO5P_u7sR1drRb6qIcyscuBnPIMT3_ZPjY64zJqS-kHl4EyT8ANQNWN0ZtJPnf7si3GWZzw_tePlcD5Kmg7Fq-re-zhbK6Nek2fFcHomyPvIRU_x6zrrJV4Sxmm6uelASbb8MymRheOPK3DZIGykGJXZSZQE5ky2hRLNerrS-N5Ke1mbAOH",
    types: ["buy", "rent"],
    citySlug: "dubai",
    categorySlug: "apartments",
  },
  {
    slug: "al-barari-villa",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuC_QXBqjOJmMwf0TW32IauFcitwjn15g8zAMl87wCx1-cYhEjoPAUAweLJE4rbGnNngsh6DfHvXgvb2Hl0Bkv_mn1Alg853ICp1C9_dBQShav0uHGsAeab3qJCAWKy4auEGY-EYSrz52gMyRnuomLAQHwlqk-Rf8EisZAoPTtYNJpDVBtDNsrkjXj735z46Jvj-beRYA3LAn0BrDqKOdAKfOi-_G8PnK4WmOmJXORX1PrG7sRvv6fWyzuMiFRSiDy0ijsPZTq39bbLE",
    types: ["buy"],
    citySlug: "dubai",
    categorySlug: "villas",
  },
  {
    slug: "emirates-hills-palace",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBk68siJjximyt4Jq0OQ4CgMj467AO6tYpuI0tfPeRztZE5m6dEa4z2TbpZ3P-CKDcfqL_7IgYMjY7dDNpHp8tr3xSsFCPE4Zdcve3LVT2-9gsiAMNP32F0AC8CCVLhFYiUU2p99krGhcXqwH3Ol7nId3TERIEITJrBfWXySZwaO091NFF4YgmgAfhRj5DMnF5BnbG76yCnJPQgqgOTNz2S_Xyif5jk7hAqYJgEOk1iCPmuSArnrGOaHls097cHIPiea-HgECtpb23p",
    types: ["buy"],
    citySlug: "dubai",
    categorySlug: "villas",
  },
  {
    slug: "riyadh-ruby-villa",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDq430_sz0F2fjbQgOANz0bVjrQBiHxIRqR74QLioAWkE7ut14_QP1uLHe3Xe37lJA6BYbaCMwwS-lllcU90UHynGxpum4Sr7qzCe5Q8DvKlTTLhdtjScbYay1Cm6FM1Bw8HopXGxJOwfYsDrkjVVVlezvg1J5csoGT0YzVhLMQNBPWr37eCtmf1RUogL0ONdhROwpS6Aomr__Aa3WrVn-kNkJAlIlsykRhZJpl9GYaVH-WKHaFJ76AZHJxcV2oP_CjysvkWI13jHsd",
    types: ["buy", "rent"],
    citySlug: "riyadh",
    categorySlug: "villas",
  },
  {
    slug: "doha-pearl-palace",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuC0d2XQNnkuHLuzAX2CeO7snmwcQ69Lr5LjElRkUljqUE38gNaS-ApN3vi5SX-CFsZ0vrgth4gQW0BCBPpKlgladEPzI9iuyhyYZDn1x1x2h9IjdCbaVKYooaIeAuEreRkB7ugKU1Yu4H8Qr6RkQCB02mAyO0tEUSFuNR_PayI2JhXSFMji4Xl7PXslUrfeBxma14AbvM0NSEEXvX_xrW-wY1rc4Qmv_hCMit5B5fPL7S7cEy1v8qHuuSJoKHt-EwJf6LBSoLgtx4lq",
    types: ["buy"],
    citySlug: "doha",
    categorySlug: "villas",
  },
];

export function getListingBySlug(slug: string) {
  return listings.find((l) => l.slug === slug);
}

export function filterListings(filters: {
  type?: ListingType;
  citySlug?: CitySlug;
  categorySlug?: CategorySlug;
  query?: string;
}) {
  return listings.filter((listing) => {
    if (filters.type && !listing.types.includes(filters.type)) return false;
    if (filters.citySlug && listing.citySlug !== filters.citySlug) return false;
    if (
      filters.categorySlug &&
      listing.categorySlug !== filters.categorySlug
    )
      return false;
    return true;
  });
}

export const cityImages: Record<CitySlug, string> = {
  dubai:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuCj7cLfUxPa4Q7OANF04Qinx8qum1qIT_dBzqp1qv82fm7KoSu0h7zzlMHpGD_SsVLy3vgYObzBYQAE-NboyQGJhX4Yi87h7rHFl_yGOmc1JDxEJVLTF9lSVSPh6dhPUl9ux5sPtwGkgVTSr_sX02IL5IXeqiC_OYBrnK5Yypal1cwu8gBJwQgFfS0aDZkuQOSKX9KGrIXok7T6vpikISDR46aDCJHMEUQ7LKVDInj28LBmaNVu9p6wfY_4a-0f0bVilD86OWtcZMAz",
  riyadh:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuCHm9VE8j9Un9PD4rb9LFXMSZne6UHIh2LT-KS1WubtZr6rYT1gUF21ZU-33K7zt-TSq9n3L08Ea0Dj_1LvpzzQnKdLl1IvPi49GEPaerySFAymZZRwjKfHkI1eAfUsFfTWvGEEn3Br1jEoj1BR7JCzDCpJxKZP5PaS5jkjE1NRfnCmqmauUWvglI8UMT438lICBVtrO3xf-h0vEuPqsAvkhYmXq21jUNOZRxkIBlADaMt1I0q25ZdGqNzX_uR5kg9vWUInn2i8GA1F",
  doha: "https://lh3.googleusercontent.com/aida-public/AB6AXuDKavC890CWopYrV4hWTwEGhoz6r07y6iV87cWp727rRWlc_zW314PjGbsORWy8xcBl-c972OkHaLF0VgEUe3n-geQs9jpuk_U5md69JdxeTIYhlPykjuigFkjZwb-0uJPltwftfh8K1YzM7ndGaFIRXiPDI9AToTDaaT5HSvMC3ycr4QufCdFgt4WITAuNy7JSOKX-D_SlMN9XLUsDemuRkg4uthSfgSOgsR3LvFc472Fsj14D7MC9zGp6sKh9_jxZmcJFhnnxHGNs",
  "abu-dhabi":
    "https://lh3.googleusercontent.com/aida-public/AB6AXuBc0de_7WO0tpAo7CkrvyiXtj2hhDcBAHAyrf1JO0_ITgPf6rQDr1camBG1ZH3UVBZh6O1jPvnjwo-dH7Q6AeidXnZIjimXt0rU21X4AKi8QCicE46nRDK3S_NtQS9U0D0lNajCe_zAX2xY8MZhl3H7GCHkuoew1sa79dUzG7mgcFt2gsXHfeiH0oGWsw4T28W4pfa1S2RUP5bSdh90pAOKqp2iF1wfYm-JAls-0fEb-SI3tOJ8X8kQoJe7jaOu3UZVXC6FbMffFkvk",
};

export const authHeroImage =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuCO45-IH-R8n09KsaV6brAhLOkB_dnzbVRb0U2DESmrn6PeGOs5__TFi-8mvLXId7JLAHVJubvFKGbpJ7w1-e0DRbH0Wvf-55wqRXrEmPZ8kjT2P-UOMxZb6dFY-abDWGQN9YgFLStfZ2umdF-ERrcv6OKe-naWf0S-Az13AuEn_l8W6JAXj56CXHXCaLooHUjqt95x7t5LT_Wr-qwmPfYHsQqAjwDCeErPZQqSXHu51pdcDMsJx8DXrB499-ClR9O_rntHFo1yUiKn";

export const authTestimonialAvatar =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuB3enQnD00d3u-05C-poQq-6SNk8e9e1Xk9VJR89yKAM3SXhfmbRD-idBg15mrN6BP2gx13T9kr1JSmNQ3aOwJ00O4nVdhDAtUDnYGdyEp9Z91Nc66zhIJG8-mQ9eB68njnIxNKAymnbaKFzw4xXq9k-82n5Y57mnq4Qo-5asHLiotqpD9NbDKkESni6R3tMQwKOu2Lg25kEXDmcq2cos_63ZJVF7zRt3QV3TGzCiYSwVKI4dj225wqhuT2dRNcBu0milcG8tvgixk7";
