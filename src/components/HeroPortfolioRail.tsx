import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";
import type { Crop } from "@/lib/crops";

type HeroPortfolioRailProps = {
  crops: Crop[];
};

export function HeroPortfolioRail({ crops }: HeroPortfolioRailProps) {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActive((i) => (i + 1) % crops.length);
    }, 4500);
    return () => window.clearInterval(timer);
  }, [crops.length]);

  return (
    <section className="gk-hero-rail-section bg-gradient-to-b from-[#f7f4ed] to-[#efe9dc]">
      <div className="container-pro gk-hero-rail-inner">
        <div className="flex items-end justify-between gap-4 gk-hero-rail-header">
          <div>
            <p className="gk-hero-rail-label">Cultivation portfolio</p>
            <p className="gk-hero-rail-subtitle">Twelve crops · one estate</p>
          </div>
          <Link to="/crops" className="gk-hero-rail-link shrink-0">
            All crops <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <motion.div
          className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-30px" }}
          variants={{
            visible: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
          }}
        >
          {crops.map((crop, i) => (
            <motion.button
              key={crop.slug}
              type="button"
              onClick={() => setActive(i)}
              variants={{
                hidden: { opacity: 0, y: 28, scale: 0.96 },
                visible: {
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
                },
              }}
              whileHover={{ y: -8, transition: { duration: 0.25 } }}
              whileTap={{ scale: 0.98 }}
              className={`gk-hero-rail-card group text-left ${i === active ? "gk-hero-rail-card-active" : ""}`}
            >
              <div className="gk-hero-rail-img-wrap">
                <img
                  src={crop.image}
                  alt={crop.name}
                  className={`gk-hero-rail-img ${i === active ? "gk-hero-rail-img-active" : ""}`}
                />
                <div className="gk-hero-rail-img-overlay" />
                <span className="gk-hero-rail-cycle">{crop.cycle}</span>
                <span className="gk-hero-rail-num">{String(i + 1).padStart(2, "0")}</span>
              </div>
              <div className="gk-hero-rail-body">
                <p className="gk-hero-rail-title">{crop.name}</p>
                <p className="gk-hero-rail-area">{crop.area}</p>
                {i === active && (
                  <motion.span
                    layoutId="gk-rail-active-bar"
                    className="gk-hero-rail-active-bar"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </div>
            </motion.button>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
