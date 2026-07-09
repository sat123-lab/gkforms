import { crops } from "@/lib/crops";
import { products } from "@/lib/products";

export type SearchItem = {
  id: string;
  title: string;
  subtitle?: string;
  to: string;
  group: "Pages" | "Crops" | "Products";
  keywords: string;
};

const pages: SearchItem[] = [
  { id: "page-home", title: "Home", to: "/", group: "Pages", keywords: "home main" },
  { id: "page-about", title: "About", to: "/about", group: "Pages", keywords: "about company story" },
  { id: "page-crops", title: "Crops", to: "/crops", group: "Pages", keywords: "crops cultivation portfolio" },
  { id: "page-processing", title: "Processing", to: "/processing", group: "Pages", keywords: "processing extraction" },
  { id: "page-products", title: "Products", to: "/products", group: "Pages", keywords: "products export nutraceutical" },
  { id: "page-gallery", title: "Gallery", to: "/gallery", group: "Pages", keywords: "gallery photos images" },
  { id: "page-contact", title: "Contact", to: "/contact", group: "Pages", keywords: "contact phone email whatsapp hyderabad" },
];

const cropItems: SearchItem[] = crops.map((crop) => ({
  id: `crop-${crop.slug}`,
  title: crop.name,
  subtitle: crop.use,
  to: "/crops",
  group: "Crops",
  keywords: [crop.name, crop.scientific, crop.use, crop.area, ...crop.benefits].filter(Boolean).join(" "),
}));

const productItems: SearchItem[] = products.map((product) => ({
  id: `product-${product.name}`,
  title: product.name,
  subtitle: product.description,
  to: "/products",
  group: "Products",
  keywords: [product.name, product.tag, product.description, product.price].filter(Boolean).join(" "),
}));

export const searchItems: SearchItem[] = [...pages, ...cropItems, ...productItems];

export const searchGroups = ["Pages", "Crops", "Products"] as const;
