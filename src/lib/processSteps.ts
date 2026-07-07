import {
  Sprout,
  Sun,
  Cog,
  FlaskConical,
  Package,
  Truck,
  type LucideIcon,
} from "lucide-react";

export type ProcessStep = {
  icon: LucideIcon;
  title: string;
  desc?: string;
};

export const processSteps: ProcessStep[] = [
  {
    icon: Sprout,
    title: "Plant",
    desc: "Organically raised medicinal crops sourced from our own 74-acre estate.",
  },
  {
    icon: Sun,
    title: "Drying",
    desc: "Solar & controlled-atmosphere drying preserves active compounds.",
  },
  {
    icon: Cog,
    title: "Grinding",
    desc: "Cryogenic and standard grinding to precise particle sizes.",
  },
  {
    icon: FlaskConical,
    title: "Extraction",
    desc: "Solvent, CO₂ & steam distillation to isolate active ingredients.",
  },
  {
    icon: Package,
    title: "Packaging",
    desc: "Food-grade, moisture-proof, tamper-evident packaging.",
  },
  {
    icon: Truck,
    title: "Export",
    desc: "Cold-chain logistics to nutraceutical & food industries globally.",
  },
];
