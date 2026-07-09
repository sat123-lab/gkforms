import type { CartItem } from "@/contexts/CartContext";
import { CONTACT_PHONE_WHATSAPP } from "@/lib/contact";

export const WHATSAPP_PHONE = CONTACT_PHONE_WHATSAPP;

export const DEFAULT_WHATSAPP_MESSAGE =
  "Hello GK Agro Farms, I would like to get in touch. Please share more details.";

export function buildWhatsAppUrl(message: string = DEFAULT_WHATSAPP_MESSAGE): string {
  return `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(message)}`;
}

export function openWhatsAppChat(message?: string) {
  window.open(buildWhatsAppUrl(message), "_blank", "noopener,noreferrer");
}

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
  return buildWhatsAppUrl(buildWhatsAppOrderMessage(items));
}

export function openWhatsAppOrder(items: CartItem[]) {
  window.open(buildWhatsAppOrderUrl(items), "_blank", "noopener,noreferrer");
}
