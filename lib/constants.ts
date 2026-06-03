import {
  Sprout,
  Leaf,
  Tractor,
  Ship,
  Factory,
  Warehouse,
  GraduationCap,
  Microscope,
  Shield,
  TrendingUp,
  Award,
  Recycle,
  Headphones,
  MapPin,
  type LucideIcon,
} from "lucide-react";

export interface Service {
  icon: LucideIcon;
  title: string;
  description: string;
  image: string;
}

export interface WhyUsItem {
  icon: LucideIcon;
  title: string;
  description: string;
}

export interface OperationStep {
  step: string;
  title: string;
  description: string;
}

export interface InfraItem {
  title: string;
  description: string;
  image: string;
}

export interface ImpactStat {
  value: string;
  label: string;
  suffix?: string;
}

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact", href: "/contact" },
] as const;

export const SERVICES: Service[] = [
  {
    icon: Sprout,
    title: "Agricultural Inputs & Fertilizers",
    description:
      "Premium quality fertilizers, seeds, and crop protection products sourced from trusted manufacturers worldwide.",
    image: "/images/service-fertilizers.png",
  },
  {
    icon: Leaf,
    title: "Organic & Eco-Friendly Solutions",
    description:
      "Sustainable and certified organic farming inputs that promote soil health and environmental stewardship.",
    image: "/images/service-organic.png",
  },
  {
    icon: Tractor,
    title: "Agricultural Machinery & Equipment",
    description:
      "Modern farming equipment, tools, and machinery for efficient land preparation, planting, and harvesting.",
    image: "/images/service-machinery.png",
  },
  {
    icon: Ship,
    title: "Import & Export Services",
    description:
      "End-to-end international trade facilitation with customs clearance, documentation, and logistics management.",
    image: "/images/service-import-export.png",
  },
  {
    icon: Factory,
    title: "Food Processing & Packaging",
    description:
      "State-of-the-art processing facilities for grains, fruits, vegetables, and dairy products with quality packaging.",
    image: "/images/service-food-processing.png",
  },
  {
    icon: Warehouse,
    title: "Warehousing & Cold Storage",
    description:
      "Temperature-controlled storage facilities and modern warehousing solutions ensuring product freshness and safety.",
    image: "/images/service-cold-storage.png",
  },
  {
    icon: GraduationCap,
    title: "Farmer Training & Technical Support",
    description:
      "Comprehensive training programs, field demonstrations, and technical advisory services for farming communities.",
    image: "/images/service-training.png",
  },
  {
    icon: Microscope,
    title: "Research & Agricultural Innovation",
    description:
      "Dedicated R&D in crop science, soil management, and agricultural technology to advance farming practices.",
    image: "/images/service-research.png",
  },
];

export const WHY_US: WhyUsItem[] = [
  {
    icon: Award,
    title: "Industry Expertise",
    description:
      "Decades of collective experience across the agricultural value chain, from sourcing to distribution.",
  },
  {
    icon: TrendingUp,
    title: "Reliable Supply Chain",
    description:
      "Robust logistics and supply chain networks ensuring timely delivery and consistent product availability.",
  },
  {
    icon: Shield,
    title: "Quality Assurance",
    description:
      "Rigorous quality control at every stage — from procurement to storage, processing, and final delivery.",
  },
  {
    icon: Recycle,
    title: "Sustainable Practices",
    description:
      "Commitment to environmentally responsible operations, eco-friendly products, and sustainable agriculture.",
  },
  {
    icon: Headphones,
    title: "Technical Support",
    description:
      "Dedicated support teams providing expert guidance, training, and after-sales service to our partners.",
  },
  {
    icon: MapPin,
    title: "Nationwide Distribution",
    description:
      "Extensive distribution network covering all major agricultural regions with strategically located facilities.",
  },
];

export const OPERATIONS: OperationStep[] = [
  {
    step: "01",
    title: "Sourcing",
    description: "Procuring quality inputs from certified global suppliers",
  },
  {
    step: "02",
    title: "Processing",
    description: "Value-added processing in modern, certified facilities",
  },
  {
    step: "03",
    title: "Storage",
    description: "Climate-controlled warehousing and cold storage",
  },
  {
    step: "04",
    title: "Distribution",
    description: "Efficient logistics to reach every market efficiently",
  },
  {
    step: "05",
    title: "Export",
    description: "International trade with full compliance and documentation",
  },
];

export const INFRASTRUCTURE: InfraItem[] = [
  {
    title: "Warehousing Facilities",
    description: "50,000+ sq. ft. of modern storage infrastructure",
    image: "/images/infra-warehouse.png",
  },
  {
    title: "Distribution Centers",
    description: "Strategically located for nationwide coverage",
    image: "/images/infra-distribution.png",
  },
  {
    title: "Processing Plants",
    description: "Certified food processing and packaging lines",
    image: "/images/service-food-processing.png",
  },
  {
    title: "Cold Storage",
    description: "Temperature-controlled preservation facilities",
    image: "/images/service-cold-storage.png",
  },
];

export const IMPACT_STATS: ImpactStat[] = [
  { value: "500", suffix: "+", label: "Products Distributed" },
  { value: "10,000", suffix: "+", label: "Farmers Supported" },
  { value: "75", suffix: "", label: "Districts Covered" },
  { value: "120", suffix: "+", label: "Industry Partners" },
];

export const GALLERY_IMAGES = [
  { src: "/images/hero-agriculture.png", alt: "Golden wheat fields", category: "Agriculture" },
  { src: "/images/service-fertilizers.png", alt: "Fertilizer warehouse", category: "Warehousing" },
  { src: "/images/service-organic.png", alt: "Organic farming", category: "Agriculture" },
  { src: "/images/service-machinery.png", alt: "Agricultural machinery", category: "Machinery" },
  { src: "/images/service-import-export.png", alt: "Import export logistics", category: "Logistics" },
  { src: "/images/service-food-processing.png", alt: "Food processing facility", category: "Processing" },
  { src: "/images/service-cold-storage.png", alt: "Cold storage facility", category: "Warehousing" },
  { src: "/images/service-training.png", alt: "Farmer training session", category: "Training" },
  { src: "/images/service-research.png", alt: "Agricultural research", category: "Research" },
  { src: "/images/infra-warehouse.png", alt: "Warehouse exterior", category: "Warehousing" },
  { src: "/images/infra-distribution.png", alt: "Distribution center", category: "Logistics" },
  { src: "/images/about-company.png", alt: "Company campus", category: "Infrastructure" },
  { src: "/images/gallery-farm.png", alt: "Terraced rice paddies", category: "Agriculture" },
  { src: "/images/gallery-harvest.png", alt: "Harvest season", category: "Agriculture" },
  { src: "/images/gallery-produce.png", alt: "Fresh produce market", category: "Processing" },
  { src: "/images/gallery-logistics.png", alt: "Logistics transport", category: "Logistics" },
];
