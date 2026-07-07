import { MessageCircle, ShoppingCart, Trash2 } from "lucide-react";
import { useCart } from "@/contexts/CartContext";
import { QuantityStepper } from "@/components/QuantityStepper";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
} from "@/components/ui/sheet";

type CartDrawerProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

export function CartDrawer({ open, onOpenChange }: CartDrawerProps) {
  const { items, count, increaseQty, decreaseQty, removeItem, clearCart, proceedWhatsApp } =
    useCart();

  const handleProceed = () => {
    if (items.length === 0) return;
    proceedWhatsApp();
    onOpenChange(false);
  };

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent side="right" className="flex flex-col w-full sm:max-w-md p-0">
        <SheetHeader className="px-6 pt-6 pb-4 border-b border-[var(--pip-border)]">
          <SheetTitle className="flex items-center gap-2 text-[var(--pip-text)]">
            <ShoppingCart className="w-5 h-5 text-[var(--pip-green)]" />
            Your Cart
            {count > 0 && (
              <span className="text-sm font-normal text-[var(--pip-muted)]">
                ({count} {count === 1 ? "item" : "items"})
              </span>
            )}
          </SheetTitle>
          <SheetDescription className="text-left">
            Add products and proceed via WhatsApp to place your order.
          </SheetDescription>
        </SheetHeader>

        <div className="flex-1 overflow-y-auto px-6 py-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-16 text-center">
              <ShoppingCart className="w-12 h-12 text-[var(--pip-muted)]/40 mb-4" />
              <p className="text-sm font-medium text-[var(--pip-text)]">Your cart is empty</p>
              <p className="text-xs text-[var(--pip-muted)] mt-1">
                Browse products and add items to your cart.
              </p>
            </div>
          ) : (
            <ul className="space-y-4">
              {items.map((item) => (
                <li
                  key={item.name}
                  className="flex gap-3 p-3 rounded-xl border border-[var(--pip-border)] bg-[var(--pip-cream)]/50"
                >
                  {item.image && (
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-16 h-16 rounded-lg object-cover shrink-0"
                    />
                  )}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-2">
                      <div className="min-w-0">
                        <p className="text-[10px] uppercase tracking-wider text-[var(--pip-green)] font-bold">
                          {item.tag}
                        </p>
                        <p className="font-semibold text-sm text-[var(--pip-text)] truncate">
                          {item.name}
                        </p>
                        <p className="text-xs text-[var(--pip-muted)] mt-0.5">{item.price}</p>
                      </div>
                      <button
                        type="button"
                        onClick={() => removeItem(item.name)}
                        className="p-1.5 text-[var(--pip-muted)] hover:text-red-600 transition-colors shrink-0"
                        aria-label={`Remove ${item.name}`}
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                    <div className="mt-3">
                      <QuantityStepper
                        qty={item.qty}
                        onIncrease={() => increaseQty(item.name)}
                        onDecrease={() => decreaseQty(item.name)}
                      />
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        {items.length > 0 && (
          <div className="border-t border-[var(--pip-border)] px-6 py-4 space-y-3 bg-white">
            <div className="flex items-center justify-between text-sm">
              <span className="text-[var(--pip-muted)]">Total items</span>
              <span className="font-bold text-[var(--pip-text)]">{count}</span>
            </div>
            <button
              type="button"
              onClick={handleProceed}
              className="pip-btn-cart w-full justify-center py-3 text-sm"
            >
              Proceed via WhatsApp
              <MessageCircle className="w-4 h-4 ml-2" />
            </button>
            <button
              type="button"
              onClick={clearCart}
              className="w-full text-xs text-[var(--pip-muted)] hover:text-red-600 transition-colors py-1"
            >
              Clear cart
            </button>
          </div>
        )}
      </SheetContent>
    </Sheet>
  );
}

type CartIconButtonProps = {
  onClick: () => void;
  className?: string;
};

export function CartIconButton({ onClick, className = "" }: CartIconButtonProps) {
  const { count } = useCart();

  return (
    <button
      type="button"
      className={`pip-icon-btn relative ${className}`}
      aria-label={`Cart${count > 0 ? `, ${count} items` : ""}`}
      onClick={onClick}
    >
      <ShoppingCart className="w-5 h-5" />
      {count > 0 && (
        <span className="absolute -top-1 -right-1 min-w-[18px] h-[18px] px-1 rounded-full bg-[var(--pip-green)] text-white text-[10px] font-bold flex items-center justify-center">
          {count > 9 ? "9+" : count}
        </span>
      )}
    </button>
  );
}
