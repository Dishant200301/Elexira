export interface Product {
  id: string;
  slug: string;
  title: string;
  price: string;
  category: string;
  shortDescription: string;
  image: string;
}

export const products: Product[] = [
  {
    id: "p1",
    slug: "bio-active-serum",
    title: "Bio-Active Collagen Serum",
    price: "$95",
    category: "Serums",
    shortDescription: "A high-potency serum designed to stimulate natural collagen production and restore skin elasticity.",
    image: "/assets/product/bio-active-serum-main.png",
  },
  {
    id: "p2",
    slug: "retinol-night-cream",
    title: "Advanced Retinol Night Cream",
    price: "$110",
    category: "Moisturizers",
    shortDescription: "Formulated with 0.5% pure retinol to accelerate cellular turnover and reduce the appearance of fine lines.",
    image: "/assets/product/product_1.png",
  },
  {
    id: "p3",
    slug: "ceramide-mist",
    title: "Hydrating Ceramide Mist",
    price: "$45",
    category: "Essentials",
    shortDescription: "An ultra-fine mist that strengthens the skin barrier and provides instant hydration throughout the day.",
    image: "/assets/product/product_2.jpg",
  },
  {
    id: "p4",
    slug: "vitamin-c-elixir",
    title: "Brightening Vitamin C Elixir",
    price: "$85",
    category: "Serums",
    shortDescription: "A stable Vitamin C formula that targets hyperpigmentation and protects against environmental stressors.",
    image: "/assets/product/product_3.jpg",
  },
  {
    id: "p5",
    slug: "magnesium-balm",
    title: "Calming Magnesium Body Balm",
    price: "$55",
    category: "Body Care",
    shortDescription: "A therapeutic balm that aids muscle recovery and promotes better sleep through transdermal magnesium.",
    image: "/assets/product/product_4.png",
  },
  {
    id: "p6",
    slug: "immune-wellness",
    title: "Immune Boost Wellness Capsules",
    price: "$65",
    category: "Supplements",
    shortDescription: "Pharmaceutical-grade capsules containing a synergistic blend of Vitamin C, D3, Zinc, and Elderberry.",
    image: "/assets/journal/journal-image-1.png",
  }
];
