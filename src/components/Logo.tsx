import { BrandWordmark } from "@/components/BrandWordmark";

const LOGO_ICON = "/L%201.png";

type LogoProps = {
  size?: "sm" | "md" | "lg";
  showText?: boolean;
  variant?: "dark" | "light";
};

const iconSizes = {
  sm: "h-11 w-11",
  md: "h-[58px] w-[58px] sm:h-[66px] sm:w-[66px]",
  lg: "h-24 w-24 sm:h-28 sm:w-28",
};

export function Logo({ size = "md", showText = true, variant = "dark" }: LogoProps) {
  return (
    <div className="flex items-center gap-2 sm:gap-3">
      <img
        src={LOGO_ICON}
        alt="GK Agro Farms"
        className={`${iconSizes[size]} object-contain shrink-0 drop-shadow-sm`}
      />
      {showText && <BrandWordmark size={size} variant={variant} />}
    </div>
  );
}
