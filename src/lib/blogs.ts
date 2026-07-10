import { heroFarm } from "@/lib/assets";
import processing from "@/assets/processing.jpg";
import ashwagandha from "@/assets/crop-ashwagandha.jpg";
import tulsi from "@/assets/crop-tulsi.jpg";
import turmeric from "@/assets/crop/ChatGPT Image Jul 10, 2026, 01_35_56 PM.png";

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  image: string;
  imageAlt: string;
  content: string[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: "building-a-74-acre-herbal-estate",
    title: "Building a 74-Acre Integrated Herbal Estate",
    excerpt:
      "How GK Agro Farms is shaping a farm-to-extract model for medicinal crops — from soil planning to export-ready nutraceuticals.",
    category: "Estate",
    date: "March 12, 2026",
    readTime: "5 min read",
    image: heroFarm,
    imageAlt: "GK Agro Farms aerial view",
    content: [
      "Across 74 acres, GK Agro Farms brings together medicinal cultivation, in-house processing, and export logistics under one traceable roof. The estate is designed not as a single-crop farm, but as an integrated herbal production system.",
      "Site planning balances high-value botanicals — Ashwagandha, Tulsi, Aloe Vera, and Turmeric — with commercial crops that support soil health and operational cash flow. Every block is mapped for irrigation, harvest cycles, and processing intake.",
      "For investors and partners, the model is clear: controlled cultivation, standardized processing, and documentation that meets nutraceutical buyer expectations from day one.",
    ],
  },
  {
    slug: "ashwagandha-cultivation-at-scale",
    title: "Ashwagandha Cultivation at Scale",
    excerpt:
      "Root quality starts in the field. Here is how we approach spacing, drying, and harvest timing for export-grade Ashwagandha.",
    category: "Crops",
    date: "February 28, 2026",
    readTime: "4 min read",
    image: ashwagandha,
    imageAlt: "Ashwagandha crop at GK Agro Farms",
    content: [
      "Ashwagandha remains one of the most sought-after adaptogens in global nutraceutical markets. At GK Agro Farms, cultivation focuses on root mass, active compound retention, and clean post-harvest handling.",
      "Our plots follow planned spacing and soil nutrition schedules tuned to Andhra Pradesh's climate. Harvest windows are tracked closely — premature digging reduces potency, while delayed harvest increases fibre and lowers extract yield.",
      "After harvest, roots move quickly into controlled drying and grading, preserving the integrity needed for powders, extracts, and standardized ingredients.",
    ],
  },
  {
    slug: "farm-to-extract-processing-chain",
    title: "From Farm to Extract: Our Six-Step Chain",
    excerpt:
      "Plant, dry, grind, extract, package, export — a look inside the processing discipline behind every GK Agro Farms batch.",
    category: "Processing",
    date: "February 10, 2026",
    readTime: "6 min read",
    image: processing,
    imageAlt: "Processing facility at GK Agro Farms",
    content: [
      "Traceability is only as strong as the steps between field and shelf. GK Agro Farms runs a six-stage processing chain built for nutraceutical-grade output.",
      "Solar and controlled-atmosphere drying preserves actives before grinding and extraction. Particle size, solvent selection, and packaging are matched to buyer specifications — whether the end product is a bulk powder or a standardized extract.",
      "Cold-chain export protocols ensure that finished goods reach food and nutraceutical industries with batch records intact from soil to shipment.",
    ],
  },
  {
    slug: "why-tulsi-belongs-in-modern-agriculture",
    title: "Why Tulsi Belongs in Modern Agriculture",
    excerpt:
      "Beyond tradition — Tulsi offers strong commercial demand, short harvest cycles, and versatile extract applications.",
    category: "Crops",
    date: "January 22, 2026",
    readTime: "3 min read",
    image: tulsi,
    imageAlt: "Tulsi cultivation rows",
    content: [
      "Tulsi has long been valued in Ayurvedic practice. Today it also sits at the centre of a growing market for essential oils, teas, and functional extracts.",
      "At GK Agro Farms, Tulsi blocks are managed for leaf quality and oil content, with bi-annual harvest planning that keeps supply steady for processing.",
      "The crop's relatively fast cycle makes it an excellent anchor for diversified herbal estates balancing tradition with modern commercial agriculture.",
    ],
  },
  {
    slug: "turmeric-traceability-for-export-buyers",
    title: "Turmeric Traceability for Export Buyers",
    excerpt:
      "Curcumin content, moisture control, and batch documentation — what global buyers expect from Indian turmeric suppliers.",
    category: "Export",
    date: "January 8, 2026",
    readTime: "4 min read",
    image: turmeric,
    imageAlt: "Turmeric and red chilli cultivation",
    content: [
      "Turmeric exports demand more than volume. Buyers want consistent curcumin profiles, low moisture, and full traceability from farm plot to final package.",
      "GK Agro Farms tracks each turmeric lot through harvest, drying, grinding, and packaging stages. Documentation accompanies every shipment — supporting audits and repeat orders from international partners.",
      "Pairing turmeric with in-house processing reduces handoffs, shortens lead times, and gives buyers confidence in quality control.",
    ],
  },
];

export function getBlogBySlug(slug: string) {
  return blogPosts.find((post) => post.slug === slug);
}
