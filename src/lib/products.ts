import { crops } from "@/lib/crops";

export type Product = {
  name: string;
  price: string;
  tag: string;
  description?: string;
  image?: string;
  rating?: string;
};

export const products: Product[] = [
  {
    name: "Ashwagandha",
    price: "Enterprise · MOQ 500 kg",
    tag: "Nutraceutical",
    description: "Roots for tonics and nutraceutical industry",
    image: crops[0].image,
    rating: `4.9 | ${crops[0].area}`,
  },
  {
    name: "Tulsi",
    price: "Enterprise · MOQ 50 L",
    tag: "Aromatherapy",
    description: "Leaves for oils and extracts from our 5-acre plot",
    image: crops[1].image,
    rating: `4.8 | ${crops[1].area}`,
  },
  {
    name: "Aloe Vera",
    price: "Enterprise · MOQ 200 kg",
    tag: "Cosmetic",
    description: "Gel & extracts for nutraceuticals and cosmetics",
    image: crops[2].image,
    rating: `4.9 | ${crops[2].area}`,
  },
  {
    name: "Turmeric & Red Chilli",
    price: "Enterprise · MOQ 100 kg",
    tag: "Nutraceutical",
    description: "Food industry, curcumin & capsaicin extracts from estate-grown turmeric and red chilli",
    image: crops[3].image,
    rating: `4.9 | ${crops[3].area}`,
  },
  {
    name: "Sugarcane & Paddy",
    price: "Enterprise · MOQ 500 kg",
    tag: "Food & Agri",
    description: "Sugar, alcohol, rice, and bran oil from our 25-acre cultivation block",
    image: crops[4].image,
    rating: `4.8 | ${crops[4].area}`,
  },
  {
    name: "Subabul",
    price: "Enterprise · MOQ 200 kg",
    tag: "Industrial",
    description: "Paper, plywood, and cellulose industry feedstock from fast-growing timber",
    image: crops[5].image,
    rating: `4.7 | ${crops[5].area}`,
  },
];
