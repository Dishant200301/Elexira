export interface ServiceDetailItem {
  id: string;
  slug: string;
  title: string;
  bannerImage: string;
  detailedDescription: string;
  images: string[];
  keyBenefits: string[];
  workflow: {
    step: number;
    title: string;
    description: string;
  }[];
}

export const serviceDetails: ServiceDetailItem[] = [
  {
    id: "1",
    slug: "manufacturing",
    title: "Drug Manufacturing",
    bannerImage: "/assets/service/manufacturing/main.png",
    images: [
      "/assets/service/manufacturing/main.png",
      "https://images.unsplash.com/photo-1628771065518-0d82f1938462?auto=format&fit=crop&q=80",
    ],
    detailedDescription: "Our drug manufacturing services provide scalable, high-quality production of pharmaceuticals. We utilize cutting-edge technology and adhere closely to GMP (Good Manufacturing Practices) to ensure all produced medicines are of the highest standard. \n\nFrom active pharmaceutical ingredients (APIs) to finished dosage forms, our facilities are equipped to handle complex synthesis and large-scale manufacturing.",
    keyBenefits: [
      "State-of-the-art cGMP compliant facilities",
      "Scalable production from pilot to commercial scale",
      "Strict quality assurance and contamination control",
      "End-to-end supply chain integration",
    ],
    workflow: [
      { step: 1, title: "Formulation", description: "Developing the optimal formulation for efficacy and stability." },
      { step: 2, title: "Scaling", description: "Transitioning from lab-scale formulation to full commercial scale." },
      { step: 3, title: "Production", description: "Continuous and batch manufacturing with automated monitoring." },
      { step: 4, title: "Packaging", description: "Secure, compliant packaging emphasizing patient safety." },
    ]
  },
  {
    id: "2",
    slug: "research",
    title: "Pharmaceutical Research",
    bannerImage: "/assets/service/research/main.png",
    images: [
      "/assets/service/research/main.png",
      "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&q=80",
    ],
    detailedDescription: "Innovation in medicine begins with robust pharmaceutical research. Our R&D department is committed to discovering breakthrough therapies and optimizing existing compounds. We combine advanced computational biology with high-throughput screening to accelerate drug discovery.",
    keyBenefits: [
      "Accelerated drug discovery processes",
      "Advanced computational modeling and simulation",
      "Expert scientific team with decades of experience",
      "Collaborative research environment",
    ],
    workflow: [
      { step: 1, title: "Target Identification", description: "Identifying biological targets linked to specific diseases." },
      { step: 2, title: "Lead Discovery", description: "Screening compounds to find viable drug candidates." },
      { step: 3, title: "Optimization", description: "Refining lead compounds to maximize efficacy and safety." },
      { step: 4, title: "Preclinical Testing", description: "In vitro and in vivo testing before human trials." },
    ]
  },
  {
    id: "3",
    slug: "clinical-trials",
    title: "Clinical Trials",
    bannerImage: "/assets/service/clinical-trials/main.png",
    images: [
      "/assets/service/clinical-trials/main.png",
      "https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&q=80",
    ],
    detailedDescription: "We provide end-to-end clinical trial management services ensuring compliance with international ICH-GCP guidelines. Our patient-centric approach ensures high retention rates, accurate data collection, and rigorous safety monitoring throughout Phase I to Phase IV trials.",
    keyBenefits: [
      "Comprehensive regulatory compliance and ethical oversight",
      "Patient-centric trial design and recruitment",
      "Advanced EDC (Electronic Data Capture) systems",
      "Real-time safety and efficacy monitoring",
    ],
    workflow: [
      { step: 1, title: "Trial Design", description: "Developing protocols that meet regulatory and scientific standards." },
      { step: 2, title: "Recruitment", description: "Identifying and enrolling eligible participants globally." },
      { step: 3, title: "Monitoring", description: "Vigilant oversight of patient safety and data integrity." },
      { step: 4, title: "Data Analysis", description: "Statistical analysis of trial data for regulatory submission." },
    ]
  },
  {
    id: "4",
    slug: "quality-control",
    title: "Quality Control & Testing",
    bannerImage: "/assets/service/quality-control/main.png",
    images: [
      "/assets/service/quality-control/main.png",
      "https://images.unsplash.com/photo-1581093458791-9e73f40d39e8?auto=format&fit=crop&q=80",
    ],
    detailedDescription: "Quality is non-negotiable in pharmaceuticals. Our rigorous quality control protocols include precise analytical testing, stability studies, and microbiological testing to guarantee that every batch meets the highest safety and efficacy standards.",
    keyBenefits: [
      "Comprehensive analytical method development and validation",
      "Real-time stability testing under various climatic zones",
      "Microbiological testing and sterility assurance",
      "Detection of trace impurities and contaminants",
    ],
    workflow: [
      { step: 1, title: "Sampling", description: "Strategic sampling of raw materials and finished products." },
      { step: 2, title: "Analysis", description: "Using HPLC, GC, and MS for precise chemical analysis." },
      { step: 3, title: "Validation", description: "Cross-verifying results against established compendial standards." },
      { step: 4, title: "Release", description: "Final quality assurance review before batch release." },
    ]
  },
  {
    id: "5",
    slug: "regulatory-affairs",
    title: "Regulatory Affairs",
    bannerImage: "/assets/service/regulatory-affairs/main.png",
    images: [
      "/assets/service/regulatory-affairs/main.png",
      "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80",
    ],
    detailedDescription: "Navigating the global regulatory landscape requires expertise and precision. We consult on regulatory strategies, prepare submissions for FDA, EMA, and other health authorities, and assist with post-market compliance. Our team ensures your products reach the market faster and stay compliant.",
    keyBenefits: [
      "Streamlined NDA, ANDA, and MAA submissions",
      "Expert liaison with global health authorities",
      "Lifecycle management and post-approval variations",
      "Regulatory intelligence and strategy planning",
    ],
    workflow: [
      { step: 1, title: "Strategy", description: "Developing a clear pathway for regulatory approval." },
      { step: 2, title: "Preparation", description: "Compiling comprehensive dossiers (eCTD format)." },
      { step: 3, title: "Submission", description: "Filing documentation accurately with regulatory bodies." },
      { step: 4, title: "Lifecycle Management", description: "Handling renewals, variations, and compliance updates." },
    ]
  },
  {
    id: "6",
    slug: "distribution",
    title: "Pharma Distribution",
    bannerImage: "/assets/service/distribution/main.jpg",
    images: [
      "/assets/service/distribution/main.jpg",
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80",
    ],
    detailedDescription: "Ensuring medicines reach patients safely requires precise logistics. Our pharmaceutical distribution services include cold chain management, real-time tracking, and highly secure warehousing to maintain product integrity throughout the supply chain.",
    keyBenefits: [
      "End-to-end GDP (Good Distribution Practice) compliance",
      "24/7 temperature-controlled cold chain logistics",
      "Real-time supply chain visibility and tracking",
      "Secure global freight forwarding and customs clearance",
    ],
    workflow: [
      { step: 1, title: "Warehousing", description: "Secure, climate-controlled storage of pharmaceuticals." },
      { step: 2, title: "Order Processing", description: "Rapid, accurate fulfillment of bulk and specialized orders." },
      { step: 3, title: "Cold Chain Transport", description: "Shipping products with strict temperature monitoring." },
      { step: 4, title: "Delivery", description: "On-time delivery to hospitals, clinics, and pharmacies." },
    ]
  }
];
