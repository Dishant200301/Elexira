export interface ProductDetailItem {
  id: string;
  slug: string;
  title: string;
  price: string;
  category: string;
  bannerImage: string;
  detailedDescription: string;
  ingredients: {
    name: string;
    percentage: string;
    description: string;
  }[];
  usage: string[];
  features: string[];
  images: string[];
}

export const productDetails: ProductDetailItem[] = [
  {
    id: "p1",
    slug: "bio-active-serum",
    title: "Bio-Active Collagen Serum",
    price: "$95",
    category: "Serums",
    bannerImage: "/assets/product/bio-active-serum-main.png",
    detailedDescription: "Our Bio-Active Collagen Serum is a masterclass in pharmaceutical skincare. Engineered with multi-molecular weight collagen peptides, it penetrates deeper layers of the epidermis to trigger the body's natural regenerative processes.\n\nThis serum doesn't just provide surface hydration; it restructures the skin's framework, improving density and resilience over 28 days of consistent use.",
    ingredients: [
      { name: "Pharma Collagen Peptides", percentage: "15%", description: "Hydrolyzed peptides that mirror the skin's natural collagen structure." },
      { name: "Hyaluronic Acid", percentage: "2%", description: "Triple-weight molecules for multi-depth hydration." },
      { name: "Copper Tripeptide-1", percentage: "0.5%", description: "A powerful signal molecule that aids in tissue repair." }
    ],
    usage: [
      "Cleanse skin thoroughly and pat dry.",
      "Apply 3-4 drops to the face, neck, and décolletage.",
      "Gently press into the skin until fully absorbed.",
      "Follow with your preferred moisturizer.",
      "Use morning and evening for optimal results."
    ],
    features: [
      "Dermatologically tested",
      "Fragrance-free formula",
      "Cruelty-free & Vegan",
      "Sustainable glass packaging"
    ],
    images: [
      "/assets/journal/journal-image-1.png",
      "/assets/journal/journal-image-2.png"
    ]
  },
  {
    id: "p2",
    slug: "retinol-night-cream",
    title: "Advanced Retinol Night Cream",
    price: "$110",
    category: "Moisturizers",
    bannerImage: "/assets/product/product_1.png",
    detailedDescription: "The gold standard in anti-aging, our Advanced Retinol Night Cream delivers 0.5% pure encapsulated retinol. The encapsulation technology ensures a slow-release mechanism, significantly reducing the irritation often associated with Vitamin A derivatives.\n\nBy morning, skin appears smoother and more radiant, with continued use leading to a visible reduction in hyperpigmentation and fine lines.",
    ingredients: [
      { name: "Encapsulated Retinol", percentage: "0.5%", description: "Pure Vitamin A in a controlled-release lipid sphere." },
      { name: "Ceramide NP", percentage: "3%", description: "Essential lipids that prevent moisture loss during treatment." },
      { name: "Bakuchiol", percentage: "1%", description: "A plant-based retinol alternative that boosts efficacy." }
    ],
    usage: [
      "Apply a pea-sized amount to clean, dry skin.",
      "Limit initial use to 2-3 times per week.",
      "Gradually increase frequency as skin tolerates.",
      "Never apply to damp skin to prevent irritation.",
      "Always use broad-spectrum SPF the following morning."
    ],
    features: [
      "Slow-release technology",
      "Rich, non-greasy texture",
      "Clinical grade efficacy",
      "Airless pump packaging"
    ],
    images: [
      "/assets/journal/journal-image-3.png",
      "/assets/journal/journal-image-4.png"
    ]
  },
  {
    id: "p3",
    slug: "ceramide-mist",
    title: "Hydrating Ceramide Mist",
    price: "$45",
    category: "Essentials",
    bannerImage: "/assets/product/product_2.jpg",
    detailedDescription: "A revolutionary face mist that acts as a liquid barrier protector. Our Hydrating Ceramide Mist delivers a fine veil of skin-identical lipids, providing instant relief from dryness and environmental stress.\n\nPerfect for frequent travelers or those working in air-conditioned environments, it keeps the microbiome balanced and the skin plump.",
    ingredients: [
      { name: "Ceramide Complex", percentage: "2%", description: "Blend of Ceramides AP, EOP, and NP." },
      { name: "Niacinamide", percentage: "4%", description: "Calms redness and improves skin texture." },
      { name: "Rose Water", percentage: "QS", description: "Natural soothing agent that hydrates and refreshes." }
    ],
    usage: [
      "Hold bottle 20-30cm away from face.",
      "Close eyes and spray in a circular motion.",
      "Can be used over makeup throughout the day.",
      "Apply after cleansing to prep skin for serums.",
      "Store in fridge for an extra cooling effect."
    ],
    features: [
      "Instant hydration boost",
      "Micro-mist technology",
      "Alcohol-free formula",
      "TSA-approved size"
    ],
    images: [
        "/assets/journal/journal-image-5.png",
        "/assets/journal/journal-image-6.png"
    ]
  },
  {
    id: "p4",
    slug: "vitamin-c-elixir",
    title: "Brightening Vitamin C Elixir",
    price: "$85",
    category: "Serums",
    bannerImage: "/assets/product/product_3.jpg",
    detailedDescription: "Designed for ultimate stability and brightness, our Vitamin C Elixir uses THD Ascorbate—a highly stable, oil-soluble form of Vitamin C. It neutralizes free radicals while simultaneously evening out skin tone and boosting collagen production.\n\nUnlike traditional Vitamin C, this formula won't oxidize quickly or sting on application.",
    ingredients: [
      { name: "THD Ascorbate", percentage: "10%", description: "Ultra-stable, fat-soluble Vitamin C derivative." },
      { name: "Tocopherol", percentage: "1%", description: "Pure Vitamin E that works synergistically with Vitamin C." },
      { name: "Ferulic Acid", percentage: "0.5%", description: "Boosts antioxidant protection against UV damage." }
    ],
    usage: [
      "Apply 2-3 drops to clean skin in the morning.",
      "Wait 60 seconds before applying other products.",
      "Follow with moisturizer and sunscreen.",
      "Can be mixed with moisturizer for sensitive skin.",
      "Store in a cool, dark place."
    ],
    features: [
      "Oxidation-resistant",
      "Lightweight oil-base",
      "High bioavailability",
      "Paraben-free"
    ],
    images: [
      "/assets/journal/journal-image-1.png",
      "/assets/journal/journal-image-3.png"
    ]
  },
  {
      id: "p5",
      slug: "magnesium-balm",
      title: "Calming Magnesium Body Balm",
      price: "$55",
      category: "Body Care",
      bannerImage: "/assets/product/product_4.png",
      detailedDescription: "Our Calming Magnesium Body Balm bridges the gap between topical therapy and luxury body care. Formulated with laboratory-grade magnesium chloride sourced from the ancient Zechstein Seabed, it is designed for rapid transdermal absorption.\n\nIdeal for post-workout recovery or as a nightly ritual to relax the nervous system and soothe sore muscles.",
      ingredients: [
        { name: "Magnesium Chloride", percentage: "15%", description: "Zechstein Seabed source for ultimate purity." },
        { name: "Arnica Montana", percentage: "2%", description: "Traditional herbal extract for bruising and swelling." },
        { name: "Shea Butter", percentage: "30%", description: "Nourishing base for slow absorption and moisture." }
      ],
      usage: [
        "Apply to clean, dry skin.",
        "Focus on large muscle groups or areas of tension.",
        "Massage in circular motions until absorbed.",
        "Use before bed for relaxation benefits.",
        "Wash hands after application."
      ],
      features: [
        "Non-sticky finish",
        "Fast-acting relief",
        "Natural lavender scent",
        "Eco-friendly jar"
      ],
      images: [
        "/assets/journal/journal-image-2.png",
        "/assets/journal/journal-image-4.png"
      ]
    },
    {
      id: "p6",
      slug: "immune-wellness",
      title: "Immune Boost Wellness Capsules",
      price: "$65",
      category: "Supplements",
      bannerImage: "/assets/journal/journal-image-1.png",
      detailedDescription: "Elexira Glow's wellness capsules represent the pinnacle of nutraceutical science. Combining high-bioavailability vitamins with standardized botanical extracts, this formula supports the body's natural defense systems.\n\nEach batch is third-party tested for purity and potency, ensuring you receive medical-grade support in every dose.",
      ingredients: [
        { name: "Vitamin C (Liposomal)", percentage: "500mg", description: "Advanced delivery system for maximum absorption." },
        { name: "Vitamin D3", percentage: "2000 IU", description: "Essential for immune regulation." },
        { name: "Zinc Picolinate", percentage: "15mg", description: "Zinc in its most bioavailable form." }
      ],
      usage: [
        "Take one capsule daily.",
        "Consume with a meal and water.",
        "Consistency is key for immune support.",
        "Consult your physician before use.",
        "Store in a cool, dry place."
      ],
      features: [
        "Third-party lab tested",
        "Gluten-free & Non-GMO",
        "No artificial fillers",
        "Vegetarian capsules"
      ],
      images: [
        "/assets/journal/journal-image-5.png",
        "/assets/journal/journal-image-6.png"
      ]
    }
];
