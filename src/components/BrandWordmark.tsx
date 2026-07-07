import { Leaf } from "lucide-react";

type BrandWordmarkProps = {
  size?: "sm" | "md" | "lg";
  variant?: "dark" | "light";
};

const scales = {
  sm: {
    title: "text-[1.1rem] leading-none",
    tag: "text-[0.45rem] tracking-[0.12em]",
    bottom: "text-[0.4rem] tracking-[0.28em]",
    leaf: "w-2.5 h-2.5",
    gap: "gap-1",
    rowGap: "gap-0.5",
  },
  md: {
    title: "text-[1.1rem] sm:text-[1.4rem] leading-[0.95]",
    tag: "text-[0.44rem] sm:text-[0.5rem] tracking-[0.13em]",
    bottom: "text-[0.36rem] sm:text-[0.42rem] tracking-[0.28em]",
    leaf: "w-2.5 h-2.5 sm:w-3 sm:h-3",
    gap: "gap-1 sm:gap-1.5",
    rowGap: "gap-0.5",
  },
  lg: {
    title: "text-[1.75rem] sm:text-[2.1rem] leading-[0.95]",
    tag: "text-[0.62rem] sm:text-[0.7rem] tracking-[0.14em]",
    bottom: "text-[0.52rem] sm:text-[0.58rem] tracking-[0.34em]",
    leaf: "w-4 h-4",
    gap: "gap-2",
    rowGap: "gap-1",
  },
};

export function BrandWordmark({ size = "md", variant = "dark" }: BrandWordmarkProps) {
  const s = scales[size];
  const titleColor = variant === "light" ? "text-white" : "text-[#003300]";
  const bottomColor = variant === "light" ? "text-white/90" : "text-[#003300]";
  const gold = variant === "light" ? "#E8C547" : "#B8860B";
  const leafColor = variant === "light" ? "#7CB87A" : "#2D6A3F";

  return (
    <div className={`flex flex-col items-center text-center select-none ${s.rowGap}`}>
      <p
        className={`font-brand-serif font-bold uppercase ${s.title} ${titleColor}`}
        style={{ fontFamily: '"Playfair Display", Georgia, serif' }}
      >
        GK AGRO FARMS
      </p>

      <div className={`flex items-center w-full max-w-full ${s.gap}`}>
        <span className="h-px flex-1 min-w-[12px]" style={{ backgroundColor: gold }} />
        <span
          className={`font-sans font-medium uppercase whitespace-nowrap ${s.tag}`}
          style={{ color: gold }}
        >
          CULTIVATE • PROCESS • WELLNESS
        </span>
        <span className="h-px flex-1 min-w-[12px]" style={{ backgroundColor: gold }} />
      </div>

      <div className={`flex items-center w-[72%] sm:w-[68%] ${s.gap}`}>
        <span className="h-px flex-1" style={{ backgroundColor: gold }} />
        <Leaf className={s.leaf} style={{ color: leafColor }} strokeWidth={2} fill={leafColor} />
        <span className="h-px flex-1" style={{ backgroundColor: gold }} />
      </div>

      <p className={`font-sans font-medium uppercase ${s.bottom} ${bottomColor}`}>
        FROM NATURE TO NUTRITION
      </p>
    </div>
  );
}
