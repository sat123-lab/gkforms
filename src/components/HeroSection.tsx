import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { heroFarm } from "@/lib/assets";

type HeroSectionProps = {
  stats: { value: string; label: string }[];
};

export function HeroSection({ stats }: HeroSectionProps) {
  return (
    <section className="gk-hero relative overflow-hidden bg-[#0a1610]">
      <div className="gk-hero-main">
        <motion.img
          src={heroFarm}
          alt="GK Agro Farms aerial estate"
          className="absolute inset-0 w-full h-full object-cover"
          initial={{ scale: 1.06 }}
          animate={{ scale: 1 }}
          transition={{ duration: 12, ease: "easeOut" }}
          width={1920}
          height={1200}
        />
        <div className="gk-hero-vignette absolute inset-0" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_20%_40%,rgba(245,208,0,0.07),transparent_60%)]" />

        <div className="relative z-10 container-pro gk-hero-content">
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="gk-hero-inner max-w-3xl"
          >
            <p className="gk-hero-eyebrow">74-acre integrated herbal estate</p>

            <h1 className="gk-hero-title">
              <span className="block">Nature outside,</span>
              <span className="block gk-hero-title-accent">medicine grows inside.</span>
            </h1>

            <p className="gk-hero-desc max-w-2xl">
              Premium medicinal crops, in-house processing, and export-ready nutraceuticals —
              cultivated with precision across Andhra Pradesh.
            </p>

            <div className="gk-hero-actions flex flex-wrap items-center gap-3 sm:gap-4">
              <Link to="/farm" className="gk-hero-btn-primary group">
                Explore the farm
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link to="/crops" className="gk-hero-btn-secondary">
                View crops
              </Link>
            </div>

            <div className="gk-hero-stats flex flex-wrap gap-6 sm:gap-8 md:gap-12">
              {stats.slice(0, 3).map((s) => (
                <div key={s.label}>
                  <p className="gk-hero-stat-value">{s.value}</p>
                  <p className="gk-hero-stat-label">{s.label}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
