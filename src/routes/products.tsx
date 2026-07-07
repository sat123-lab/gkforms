import { createFileRoute } from "@tanstack/react-router";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { PageBanner } from "@/components/PageBanner";
import { AddToCartButton } from "@/components/AddToCartButton";
import { crops } from "@/lib/crops";
import { products } from "@/lib/products";
import { ArrowLeft, ArrowRight } from "lucide-react";
import processingImg from "@/assets/processing.jpg";

export const Route = createFileRoute("/products")({
  head: () => ({
    meta: [
      { title: "Products — Extracts, Powders & Herbal Goods | GK Agro Farms" },
      { name: "description", content: "Standardized herbal extracts, powders, oils, and packaged goods derived from our 74-acre estate." },
      { property: "og:title", content: "Products — GK Agro Farms" },
      { property: "og:description", content: "Standardized nutraceutical-grade herbal products." },
    ],
  }),
  component: ProductsPage,
});

function ProductsPage() {
  const [idx, setIdx] = useState(0);
  return (
    <>
      <PageBanner
        eyebrow="Portfolio"
        title={<>Standardized. Traceable. Export-ready.</>}
        scriptLine="Our products"
        image={processingImg}
        imageAlt="Products"
      />

      <div className="container-pro py-14 md:py-20">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="pip-stat-card p-8 md:p-12 overflow-hidden"
        >
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -30, rotate: -4 }}
                animate={{ opacity: 1, x: 0, rotate: 0 }}
                exit={{ opacity: 0, x: 30, rotate: 4 }}
                transition={{ duration: 0.4 }}
                className="relative aspect-square rounded-2xl overflow-hidden mx-auto max-w-md w-full shadow-xl"
              >
                <img src={crops[idx].image} alt={crops[idx].name} className="w-full h-full object-cover" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--pip-green-dark)]/70 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <span className="pip-badge">Featured</span>
                </div>
              </motion.div>
            </AnimatePresence>
            <div>
              <p className="pip-section-sub">Featured {idx + 1} / {crops.length}</p>
              <motion.h2
                key={`title-${idx}`}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-3xl md:text-4xl font-bold text-[var(--pip-text)] mt-2"
              >
                {crops[idx].name}
              </motion.h2>
              <p className="mt-4 text-[var(--pip-muted)]">{crops[idx].use}</p>
              <div className="mt-6 grid grid-cols-2 gap-3">
                <Stat k="Cycle" v={crops[idx].cycle} />
                <Stat k="Yield" v={crops[idx].yield} />
              </div>
              <div className="mt-8 flex gap-3">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setIdx((idx - 1 + crops.length) % crops.length)}
                  className="w-12 h-12 rounded-full border border-[var(--pip-border)] flex items-center justify-center hover:bg-[var(--pip-cream)]"
                  aria-label="Previous"
                >
                  <ArrowLeft className="w-4 h-4" />
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setIdx((idx + 1) % crops.length)}
                  className="w-12 h-12 rounded-full bg-[var(--pip-green)] text-white flex items-center justify-center"
                  aria-label="Next"
                >
                  <ArrowRight className="w-4 h-4" />
                </motion.button>
              </div>
            </div>
          </div>
        </motion.div>

        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {products.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              whileHover={{ y: -6, boxShadow: "0 16px 40px rgba(0,0,0,0.1)" }}
              className="pip-stat-card overflow-hidden group"
            >
              {p.image && (
                <div className="aspect-video overflow-hidden -mx-0 -mt-0 mb-4">
                  <img src={p.image} alt={p.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
              )}
              <div className="px-6 pb-6">
                <div className="text-[10px] uppercase tracking-wider text-[var(--pip-green)] font-bold">{p.tag}</div>
                <h3 className="font-bold text-lg mt-2 text-[var(--pip-text)]">{p.name}</h3>
                <p className="mt-2 text-sm text-[var(--pip-muted)]">{p.price}</p>
                {p.description && <p className="mt-2 text-xs text-[var(--pip-muted)]">{p.description}</p>}
                <AddToCartButton product={p} className="mt-4" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
}

function Stat({ k, v }: { k: string; v: string }) {
  return (
    <div className="bg-[var(--pip-cream)] rounded-xl p-4 border border-[var(--pip-border)]">
      <div className="text-[10px] uppercase tracking-widest text-[var(--pip-muted)]">{k}</div>
      <div className="font-bold text-base mt-1 text-[var(--pip-text)]">{v}</div>
    </div>
  );
}
