import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { useState } from "react";
import { Reveal } from "@/components/Reveal";
import { PageBanner } from "@/components/PageBanner";
import { crops, cropTableRows, site2Rows } from "@/lib/crops";
import { heroFarm } from "@/lib/assets";

export const Route = createFileRoute("/crops")({
  head: () => ({
    meta: [
      { title: "Our Crops — GK Agro Farms 74-Acre Herbal Estate" },
      { name: "description", content: "12+ medicinal and commercial crops: Ashwagandha, Tulsi, Aloe Vera, Turmeric, Sugarcane, Paddy, and more with yield and harvest details." },
      { property: "og:title", content: "Our Crops — GK Agro Farms" },
      { property: "og:description", content: "Explore 12+ medicinal and commercial crops grown across 74 acres." },
    ],
  }),
  component: CropsPage,
});

function CropsPage() {
  return (
    <>
      <PageBanner
        eyebrow="Cultivation Portfolio"
        title={<>Twelve crops, meticulously planned across 74 acres.</>}
        scriptLine="One estate"
        image={heroFarm}
        imageAlt="GK Agro Farms crops"
      />

      <div className="container-pro py-14 md:py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {crops.map((c, i) => (
            <motion.div
              key={c.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ delay: (i % 6) * 0.08 }}
            >
              <FlipCard crop={c} />
            </motion.div>
          ))}
        </div>

        <Reveal className="mt-20 mb-6">
          <p className="pip-section-sub">Site 1</p>
          <h2 className="pip-section-title mt-2">Site 1 · 70 acres</h2>
        </Reveal>
        <CropTable rows={cropTableRows} />

        <Reveal className="mt-20 mb-6">
          <p className="pip-section-sub">Site 2</p>
          <h2 className="pip-section-title mt-2">Site 2 · 4 acres</h2>
        </Reveal>
        <CropTable rows={site2Rows} />
      </div>
    </>
  );
}

function FlipCard({ crop }: { crop: (typeof crops)[number] }) {
  const [flipped, setFlipped] = useState(false);
  return (
    <motion.div
      className="relative aspect-[4/5] cursor-pointer rounded-xl overflow-hidden border border-[var(--pip-border)] shadow-sm bg-white"
      onClick={() => setFlipped((v) => !v)}
      whileHover={{ y: -6, boxShadow: "0 20px 48px rgba(0,0,0,0.12)" }}
    >
      {!flipped ? (
        <motion.div
          key="front"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="absolute inset-0"
        >
          <img src={crop.image} alt={crop.name} className="absolute inset-0 w-full h-full object-cover" loading="lazy" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />
          <div className="absolute bottom-0 p-6 text-white">
            <span className="pip-badge text-[9px]">{crop.cycle}</span>
            <h3 className="text-2xl font-bold mt-2">{crop.name}</h3>
            {crop.scientific && <p className="italic text-sm text-white/70">{crop.scientific}</p>}
            <p className="mt-2 text-xs text-white/60">Tap for details →</p>
          </div>
        </motion.div>
      ) : (
        <motion.div
          key="back"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="absolute inset-0 p-6 flex flex-col bg-white"
        >
          <h3 className="text-xl font-bold text-[var(--pip-green)]">{crop.name}</h3>
          <dl className="mt-4 space-y-3 text-sm flex-1">
            <Row k="Area" v={crop.area} />
            <Row k="Cycle" v={crop.cycle} />
            <Row k="Yield" v={crop.yield} />
            <Row k="Use" v={crop.use} />
          </dl>
          <div className="flex flex-wrap gap-2 pt-4">
            {crop.benefits.map((b) => (
              <span key={b} className="text-[10px] rounded-full bg-[var(--pip-cream)] border border-[var(--pip-border)] px-3 py-1 text-[var(--pip-muted)]">
                {b}
              </span>
            ))}
          </div>
        </motion.div>
      )}
    </motion.div>
  );
}

function Row({ k, v }: { k: string; v: string }) {
  return (
    <div className="flex items-start justify-between gap-3 border-b border-[var(--pip-border)] pb-2">
      <dt className="text-[var(--pip-muted)] text-xs uppercase tracking-widest">{k}</dt>
      <dd className="text-right text-[var(--pip-text)] font-medium">{v}</dd>
    </div>
  );
}

function CropTable({ rows }: { rows: readonly (readonly string[])[] }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="pip-stat-card overflow-hidden p-0"
    >
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="text-left text-xs uppercase tracking-wider text-[var(--pip-muted)] border-b border-[var(--pip-border)] bg-[var(--pip-cream)]">
              <th className="p-4 font-bold">Crop</th>
              <th className="p-4 font-bold">Area (Acre)</th>
              <th className="p-4 font-bold">Cycle</th>
              <th className="p-4 font-bold">Est. Yield / Acre</th>
              <th className="p-4 font-bold">Use</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((r, i) => (
              <motion.tr
                key={i}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.04 }}
                className="border-b border-[var(--pip-border)] hover:bg-[var(--pip-cream)] transition-colors"
              >
                {r.map((cell, j) => (
                  <td key={j} className={`p-4 ${j === 0 ? "font-bold text-[var(--pip-green)]" : "text-[var(--pip-muted)]"}`}>
                    {cell}
                  </td>
                ))}
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>
    </motion.div>
  );
}
