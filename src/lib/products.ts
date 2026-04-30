export type Product = {
  id: string;
  slug: string;
  name: string;
  price: number;
  compareAt?: number;
  tags?: string[];
  images: string[];
  short: string;
  rating: number;
  sold: number;
  variants?: { label: string; value: string }[];
};

export const PRODUCTS: Product[] = [
  {
    id: "p-aura-pro",
    slug: "aura-pro-wireless-anc",
    name: "Aura Pro Wireless ANC",
    price: 4999,
    compareAt: 7500,
    tags: ["Trending", "Save 33%"],
    images: [
      "/images/premium_headphones_1777455675754.png",
      "/images/premium_headphones_1777455675754.png",
      "/images/premium_headphones_1777455675754.png",
    ],
    short: "Deep bass. Zero distractions. Premium comfort built for long nights.",
    rating: 4.8,
    sold: 12940,
    variants: [
      { label: "Midnight", value: "midnight" },
      { label: "Frost", value: "frost" },
    ],
  },
  {
    id: "p-titan-9",
    slug: "titanium-smart-watch-series-9",
    name: "Titanium Smart Watch Series 9",
    price: 3500,
    compareAt: 4999,
    tags: ["Viral", "New"],
    images: [
      "/images/premium_smartwatch_1777455689572.png",
      "/images/premium_smartwatch_1777455689572.png",
    ],
    short: "Luxury metal finish, crisp display, and week-long battery for Nepal life.",
    rating: 4.7,
    sold: 20210,
    variants: [
      { label: "42mm", value: "42mm" },
      { label: "46mm", value: "46mm" },
    ],
  },
  {
    id: "p-sonicpods",
    slug: "sonicpods-true-wireless",
    name: "SonicPods True Wireless",
    price: 2500,
    tags: ["Limited Deal"],
    images: ["/images/premium_earbuds_1777456997180.png", "/images/premium_earbuds_1777456997180.png"],
    short: "Pocket-sized clarity. Ultra-low latency for reels & gaming.",
    rating: 4.6,
    sold: 15480,
  },
  {
    id: "p-aura-white",
    slug: "aura-pro-white-edition",
    name: "Aura Pro White Edition",
    price: 4999,
    tags: ["Low Stock"],
    images: ["/images/premium_headphones_1777455675754.png"],
    short: "Same flagship sound in a clean white finish with subtle purple glow.",
    rating: 4.8,
    sold: 6420,
  },
];

export const COLLECTIONS = {
  trending: ["p-aura-pro", "p-titan-9", "p-sonicpods", "p-aura-white"],
  new: ["p-titan-9"],
  viral: ["p-titan-9", "p-aura-pro"],
  deals: ["p-sonicpods"],
} as const;

export function getProductBySlug(slug: string) {
  return PRODUCTS.find((p) => p.slug === slug) ?? null;
}

export function getProductsByIds(ids: readonly string[]) {
  const set = new Set(ids);
  return PRODUCTS.filter((p) => set.has(p.id));
}

