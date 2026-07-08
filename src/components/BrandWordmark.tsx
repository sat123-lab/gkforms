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

  return (
    <div className="select-none">
      <p className={`font-bold uppercase ${s.title} ${titleColor}`}>
        GK Agro Farms
      </p>
    </div>
  );
}
