export interface Service {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  image: string;
}

export const services: Service[] = [
  {
    id: "1",
    slug: "manufacturing",
    title: "Drug Manufacturing",
    shortDescription: "High-quality, scalable pharmaceutical manufacturing services with state-of-the-art facilities.",
    image: "/assets/service/manufacturing/main.png",
  },
  {
    id: "2",
    slug: "research",
    title: "Pharmaceutical Research",
    shortDescription: "Innovative R&D solutions for drug discovery and advanced therapeutic development.",
    image: "/assets/service/research/main.png",
  },
  {
    id: "3",
    slug: "clinical-trials",
    title: "Clinical Trials",
    shortDescription: "Comprehensive clinical trial management ensuring safety, compliance, and efficacy.",
    image: "/assets/service/clinical-trials/main.png",
  },
  {
    id: "4",
    slug: "quality-control",
    title: "Quality Control & Testing",
    shortDescription: "Rigorous quality control and analytical testing to guarantee precise formulations.",
    image: "/assets/service/quality-control/main.png",
  },
  {
    id: "5",
    slug: "regulatory-affairs",
    title: "Regulatory Affairs",
    shortDescription: "Expert regulatory consulting to navigate complex global compliance standards.",
    image: "/assets/service/regulatory-affairs/main.png",
  },
  {
    id: "6",
    slug: "distribution",
    title: "Pharma Distribution",
    shortDescription: "Secure, temperature-controlled logistics and global pharmaceutical distribution networks.",
    image: "/assets/service/distribution/main.jpg",
  }
];
