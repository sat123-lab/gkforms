import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import type { Product } from "@/lib/products";
import { openWhatsAppOrder } from "@/lib/whatsapp";

export type CartItem = Product & { qty: number };

type CartContextValue = {
  items: CartItem[];
  count: number;
  getQty: (productName: string) => number;
  addToCart: (product: Product) => void;
  increaseQty: (productName: string) => void;
  decreaseQty: (productName: string) => void;
  removeItem: (productName: string) => void;
  clearCart: () => void;
  proceedWhatsApp: () => void;
};

const STORAGE_KEY = "gk-agro-cart";

const CartContext = createContext<CartContextValue | null>(null);

function mergeItem(items: CartItem[], product: Product): CartItem[] {
  const existing = items.find((i) => i.name === product.name);
  if (existing) {
    return items.map((i) =>
      i.name === product.name ? { ...i, qty: i.qty + 1 } : i,
    );
  }
  return [...items, { ...product, qty: 1 }];
}

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) setItems(JSON.parse(saved) as CartItem[]);
    } catch {
      /* ignore */
    }
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (!hydrated) return;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
  }, [items, hydrated]);

  const getQty = useCallback(
    (productName: string) => items.find((i) => i.name === productName)?.qty ?? 0,
    [items],
  );

  const addToCart = useCallback((product: Product) => {
    setItems((prev) => mergeItem(prev, product));
  }, []);

  const increaseQty = useCallback((productName: string) => {
    setItems((prev) =>
      prev.map((i) => (i.name === productName ? { ...i, qty: i.qty + 1 } : i)),
    );
  }, []);

  const decreaseQty = useCallback((productName: string) => {
    setItems((prev) =>
      prev
        .map((i) => (i.name === productName ? { ...i, qty: i.qty - 1 } : i))
        .filter((i) => i.qty > 0),
    );
  }, []);

  const removeItem = useCallback((productName: string) => {
    setItems((prev) => prev.filter((i) => i.name !== productName));
  }, []);

  const clearCart = useCallback(() => setItems([]), []);

  const proceedWhatsApp = useCallback(() => {
    setItems((prev) => {
      if (prev.length > 0) openWhatsAppOrder(prev);
      return prev;
    });
  }, []);

  const count = useMemo(
    () => items.reduce((sum, item) => sum + item.qty, 0),
    [items],
  );

  const value = useMemo(
    () => ({
      items,
      count,
      getQty,
      addToCart,
      increaseQty,
      decreaseQty,
      removeItem,
      clearCart,
      proceedWhatsApp,
    }),
    [items, count, getQty, addToCart, increaseQty, decreaseQty, removeItem, clearCart, proceedWhatsApp],
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
}
