import { Minus, Plus } from "lucide-react";

type QuantityStepperProps = {
  qty: number;
  onIncrease: () => void;
  onDecrease: () => void;
  size?: "sm" | "md";
  fullWidth?: boolean;
};

export function QuantityStepper({
  qty,
  onIncrease,
  onDecrease,
  size = "sm",
  fullWidth,
}: QuantityStepperProps) {
  const btnSize = size === "sm" ? "w-8 h-8" : "w-9 h-9";
  const textSize = size === "sm" ? "text-sm" : "text-base";

  return (
    <div
      className={`inline-flex items-center gap-2 ${fullWidth ? "w-full justify-between" : ""}`}
    >
      <button
        type="button"
        onClick={onDecrease}
        className={`${btnSize} rounded-full border border-[var(--pip-border)] flex items-center justify-center text-[var(--pip-text)] hover:bg-[var(--pip-cream)] transition-colors`}
        aria-label="Decrease quantity"
      >
        <Minus className="w-3.5 h-3.5" />
      </button>
      <span className={`${textSize} font-bold text-[var(--pip-text)] min-w-[1.5rem] text-center`}>
        {qty}
      </span>
      <button
        type="button"
        onClick={onIncrease}
        className={`${btnSize} rounded-full bg-[var(--pip-green)] text-white flex items-center justify-center hover:bg-[var(--pip-green-dark)] transition-colors`}
        aria-label="Increase quantity"
      >
        <Plus className="w-3.5 h-3.5" />
      </button>
    </div>
  );
}
