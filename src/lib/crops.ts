import ashwagandha from "@/assets/crop-ashwagandha.jpg";
import tulsi from "@/assets/crop-tulsi.jpg";
import aloe from "@/assets/crop-aloe.jpg";
import turmeric from "@/assets/crop/ChatGPT Image Jul 10, 2026, 01_35_56 PM.png";
import sugarcanePaddy from "@/assets/crop/Sugarcane & Paddy.png";
import subabul from "@/assets/crop/Subabul.png";

export type Crop = {
  slug: string;
  name: string;
  scientific?: string;
  area: string;
  cycle: string;
  yield: string;
  use: string;
  image: string;
  benefits: string[];
};

export const crops: Crop[] = [
  {
    slug: "ashwagandha",
    name: "Ashwagandha",
    scientific: "Withania somnifera",
    area: "10 acres",
    cycle: "Annual",
    yield: "400 kg / acre",
    use: "Roots for tonics, nutraceutical industry",
    image: ashwagandha,
    benefits: ["Adaptogen", "Immunity", "Stress relief"],
  },
  {
    slug: "tulsi",
    name: "Tulsi",
    scientific: "Ocimum sanctum",
    area: "5 acres",
    cycle: "Bi-Annual",
    yield: "2 tons / acre",
    use: "Leaves for oils and extracts",
    image: tulsi,
    benefits: ["Anti-viral", "Respiratory health", "Sacred herb"],
  },
  {
    slug: "aloe-vera",
    name: "Aloe Vera",
    scientific: "Aloe barbadensis",
    area: "Perimeter cultivation",
    cycle: "Perennial",
    yield: "40 tons / acre",
    use: "Gel & extracts, nutraceuticals",
    image: aloe,
    benefits: ["Skin care", "Digestive aid", "Anti-inflammatory"],
  },
  {
    slug: "turmeric-chilli",
    name: "Turmeric & Red Chilli",
    scientific: "Curcuma longa · Capsicum annuum",
    area: "10 acres",
    cycle: "Annual",
    yield: "Curcumin 10 MT · Chilli 4 MT",
    use: "Food industry, curcumin & capsaicin extracts",
    image: turmeric,
    benefits: ["Curcumin extract", "Antioxidant", "Anti-inflammatory"],
  },
  {
    slug: "sugarcane-paddy",
    name: "Sugarcane & Paddy",
    scientific: "Saccharum · Oryza sativa",
    area: "25 acres",
    cycle: "Annual / Bi-Annual",
    yield: "40 MT & 2800 kg / acre",
    use: "Sugar, alcohol, rice, bran oil",
    image: sugarcanePaddy,
    benefits: ["Staple food", "Biofuel", "By-products"],
  },
  {
    slug: "subabul",
    name: "Subabul",
    scientific: "Leucaena leucocephala",
    area: "10 acres",
    cycle: "3-year cycle",
    yield: "20 MT / acre",
    use: "Paper, plywood, cellulose industry",
    image: subabul,
    benefits: ["Fast-growing", "Nitrogen fixing", "Timber"],
  },
];

export const cropTableRows = [
  ["Ashwagandha", "10", "Annual", "400 kg", "Roots for tonics, nutraceutical"],
  ["Tulsi", "5", "Bi-Annual", "2 tons", "Leaves for oils (extracts)"],
  ["Aloe Vera", "Perimeter", "Perennial", "40 tons", "Gel, nutraceutical extracts"],
  ["Subabul", "10", "3-year", "20 MT", "Paper, plywood, cellulose"],
  ["Sugarcane", "10", "Annual", "40 MT", "Sugar industry, alcohol"],
  ["Paddy", "15", "Bi-Annual", "2800 kg", "Rice, husk, bran oil"],
  ["Turmeric / Red Chilli", "10", "Annual", "10 MT / 4 MT", "Curcumin & Capsaicin extracts"],
  ["Cotton / Sunflower / Mustard", "7", "Annual", "3 / 1 MT / 800 kg", "Food industry, oils"],
  ["Infrastructure", "3", "—", "—", "Processing, storage"],
] as const;

export const site2Rows = [
  ["Paddy", "4", "Bi-Annual", "2800 kg", "Rice, husk, bran oil"],
  ["Sugarcane", "4", "Annual", "40 MT", "Sugar industry, alcohol"],
  ["Lemongrass", "4", "Bi-Annual", "4 MT", "Food industry, medicinal extracts"],
] as const;
