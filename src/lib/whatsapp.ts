import type { CartItem } from "@/contexts/CartContext";

export const WHATSAPP_PHONE = "919876543210";

export function buildWhatsAppOrderMessage(items: CartItem[]): string {
  if (items.length === 0) {
    return "Hello GK Agro Farms, I would like to inquire about your products. Please share details.";
  }

  const lines = items.map((item, i) => {
    return `${i + 1}. ${item.name} (${item.tag})\n   ${item.price}\n   Qty: ${item.qty}`;
  });

  return [
    "Hello GK Agro Farms,",
    "",
    "I would like to order the following products:",
    "",
    ...lines,
    "",
    "Please share pricing, availability, and delivery details.",
    "",
    "Thank you!",
  ].join("\n");
}

export function buildWhatsAppOrderUrl(items: CartItem[]): string {
  const text = encodeURIComponent(buildWhatsAppOrderMessage(items));
  return `https://wa.me/${WHATSAPP_PHONE}?text=${text}`;
}

export function openWhatsAppOrder(items: CartItem[]) {
  window.open(buildWhatsAppOrderUrl(items), "_blank", "noopener,noreferrer");
}
