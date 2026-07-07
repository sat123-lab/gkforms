import { ShoppingCart } from "lucide-react";
import { useCart } from "@/contexts/CartContext";
import { QuantityStepper } from "@/components/QuantityStepper";
import type { Product } from "@/lib/products";

type AddToCartButtonProps = {
  product: Product;
  className?: string;
  fullWidth?: boolean;
};

export function AddToCartButton({ product, className = "", fullWidth }: AddToCartButtonProps) {
  const { getQty, addToCart, increaseQty, decreaseQty } = useCart();
  const qty = getQty(product.name);

  if (qty === 0) {
    return (
      <button
        type="button"
        onClick={() => addToCart(product)}
        className={`pip-btn-cart text-xs inline-flex items-center ${fullWidth ? "w-full justify-center" : ""} ${className}`}
      >
        Add to cart
        <ShoppingCart className="w-3.5 h-3.5 ml-1.5" />
      </button>
    );
  }

  return (
    <div className={`${fullWidth ? "w-full" : ""} ${className}`}>
      <QuantityStepper
        qty={qty}
        onIncrease={() => increaseQty(product.name)}
        onDecrease={() => decreaseQty(product.name)}
        fullWidth={fullWidth}
      />
    </div>
  );
}
