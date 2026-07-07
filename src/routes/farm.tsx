import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { useState } from "react";
import { Reveal } from "@/components/Reveal";
import { PageBanner } from "@/components/PageBanner";
import farmMap from "@/assets/farm-map.jpg";

export const Route = createFileRoute("/farm")({
  head: () => ({
    meta: [
      { title: "The 74-Acre Farm — Interactive Map | GK Agro Farms" },
      { name: "description", content: "Explore our 74-acre integrated medicinal farm. Hover over crop zones to see area, yield, cycle, and benefits." },
      { property: "og:title", content: "The 74-Acre Farm — GK Agro Farms" },
      { property: "og:description", content: "An interactive tour of a 74-acre integrated herbal estate." },
    ],
  }),
  component: FarmPage,
});

const zones = [
  { x: 22, y: 30, name: "Ashwagandha", detail: "10 acres · 400 kg/acre · annual" },
  { x: 55, y: 25, name: "Tulsi", detail: "5 acres · 2 tons/acre · bi-annual" },
  { x: 40, y: 55, name: "Turmeric & Chilli", detail: "10 acres · 10 & 4 MT/acre" },
  { x: 72, y: 60, name: "Sugarcane", detail: "10 acres · 40 MT/acre · annual" },
  { x: 30, y: 75, name: "Paddy", detail: "15 acres · 2800 kg/acre · bi-annual" },
  { x: 78, y: 35, name: "Subabul", detail: "10 acres · 20 MT · 3-year cycle" },
];

function FarmPage() {
  const [hover, setHover] = useState<number | null>(null);
  return (
    <>
      <PageBanner
        eyebrow="Interactive Estate"
        title={<>A 74-acre ecosystem, mapped.</>}
        scriptLine="Explore every zone"
        description="Hover the zones to explore each cultivation block — irrigation, plots, processing unit, and infrastructure engineered for maximum yield and biodiversity."
        image={farmMap}
        imageAlt="Farm map"
      />

      <div className="container-pro py-14 md:py-20">
        <Reveal delay={0.1}>
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative rounded-2xl overflow-hidden border border-[var(--pip-border)] shadow-lg"
          >
            <img
              src={farmMap}
              alt="Illustrated top-down map of the 74-acre farm"
              className="w-full aspect-[16/12] object-cover"
              width={1600}
              height={1200}
              loading="lazy"
            />
            <div className="absolute inset-0 bg-[var(--pip-green-dark)]/20" />

            <motion.div
              className="absolute w-32 h-32 rounded-full border-2 border-[var(--pip-yellow)]/50"
              style={{ left: "60%", top: "70%" }}
              animate={{ scale: [1, 2], opacity: [0.6, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
            />

            {zones.map((z, i) => (
              <button
                key={i}
                onMouseEnter={() => setHover(i)}
                onMouseLeave={() => setHover(null)}
                onFocus={() => setHover(i)}
                onBlur={() => setHover(null)}
                className="absolute -translate-x-1/2 -translate-y-1/2"
                style={{ left: `${z.x}%`, top: `${z.y}%` }}
              >
                <motion.span
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
                  className="relative flex"
                >
                  <span className="relative inline-flex rounded-full h-4 w-4 bg-[var(--pip-yellow)] ring-4 ring-white/40 shadow-lg" />
                </motion.span>
                {hover === i && (
                  <motion.div
                    initial={{ opacity: 0, y: 8, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    className="absolute left-1/2 -translate-x-1/2 mt-3 whitespace-nowrap bg-white rounded-xl px-4 py-3 shadow-xl border border-[var(--pip-border)] text-left z-10"
                  >
                    <div className="font-bold text-sm text-[var(--pip-green)]">{z.name}</div>
                    <div className="text-xs text-[var(--pip-muted)]">{z.detail}</div>
                  </motion.div>
                )}
              </button>
            ))}
          </motion.div>
        </Reveal>

        <div className="mt-16 grid md:grid-cols-3 gap-6">
          {[
            { t: "Irrigation", d: "Drip + sprinkler network fed by two on-farm water bodies." },
            { t: "Infrastructure", d: "3 acres reserved for processing, storage & offices." },
            { t: "Biodiversity", d: "Perimeter Aloe Vera, native trees, natural pest control." },
          ].map((c, i) => (
            <motion.div
              key={c.t}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -6 }}
              className="pip-stat-card p-6"
            >
              <h3 className="text-xl font-bold text-[var(--pip-green)]">{c.t}</h3>
              <p className="mt-2 text-[var(--pip-muted)] text-sm leading-relaxed">{c.d}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
}
