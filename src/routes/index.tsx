import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { crops } from "@/lib/crops";
import { products } from "@/lib/products";
import { ProductCarousel } from "@/components/PipProductCard";
import { HeroSection } from "@/components/HeroSection";
import { HeroPortfolioRail } from "@/components/HeroPortfolioRail";
import { processSteps } from "@/lib/processSteps";
import { useContactModal } from "@/contexts/ContactModalContext";

export const Route = createFileRoute("/")({
  component: Home,
});

const stats = [
  { value: "74", label: "Acres" },
  { value: "12+", label: "Crops" },
  { value: "₹3.72 Cr", label: "Revenue proj." },
  { value: "120+", label: "Jobs generated" },
];

function Home() {
  const { openContact } = useContactModal();

  return (
    <>
      <HeroSection stats={stats} />
      <HeroPortfolioRail crops={crops.slice(0, 4)} />

      {/* Trust strip */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="bg-[var(--pip-green)] py-3"
      >
        <div className="container-pro flex flex-wrap items-center justify-center gap-x-8 gap-y-2 text-white text-xs font-medium uppercase tracking-wider">
          <span className="flex items-center gap-1.5">
            <Star className="w-3.5 h-3.5 fill-[var(--pip-yellow)] text-[var(--pip-yellow)]" />
            Loved By Investors & Partners
          </span>
          <span>74 Acres</span>
          <span>12+ Crops</span>
          <span>GMP Processing</span>
          <span>Export Ready</span>
        </div>
      </motion.section>

      {/* Stats */}
      <section className="py-10 bg-[var(--pip-cream)]">
        <div className="container-pro grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              whileHover={{ y: -4, boxShadow: "0 12px 32px rgba(0,0,0,0.08)" }}
              className="pip-stat-card text-center"
            >
              <div className="text-3xl md:text-4xl font-bold text-[var(--pip-green)]">{s.value}</div>
              <div className="text-xs uppercase tracking-widest text-[var(--pip-muted)] mt-1">{s.label}</div>
            </motion.div>
          ))}
        </div>
      </section>

      <ProductCarousel
        title="Export-Ready Products"
        subtitle="Standardized · Traceable"
        viewAllTo="/products"
        showRequestSpecs={false}
        items={products.map((p, i) => ({
          product: p,
          badge: i === 0 ? "Best Seller" : i === 1 ? "Limited Stock" : undefined,
        }))}
      />

      {/* Processing */}
      <section className="py-12 md:py-16 bg-[var(--pip-cream)]">
        <div className="container-pro">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="pip-section-sub">From soil to shelf</p>
            <h2 className="pip-section-title mb-8">
              Six precise steps. <span className="text-[var(--pip-green)]">Zero shortcuts.</span>
            </h2>
          </motion.div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {processSteps.map((s, i) => {
              const Icon = s.icon;
              return (
                <motion.div
                  key={s.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  whileHover={{ y: -6, scale: 1.03 }}
                  className="pip-step-card cursor-default"
                >
                  <div className="w-10 h-10 rounded-full bg-[var(--pip-green)] flex items-center justify-center mx-auto mb-3">
                    <Icon className="w-5 h-5 text-white" strokeWidth={1.75} />
                  </div>
                  <p className="text-[10px] uppercase tracking-wider text-[var(--pip-muted)]">Step {i + 1}</p>
                  <p className="font-bold text-sm mt-1 text-[var(--pip-text)]">{s.title}</p>
                </motion.div>
              );
            })}
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-8 text-center"
          >
            <Link to="/processing" className="pip-link font-semibold">
              Explore processing →
            </Link>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 bg-[var(--pip-green)] relative overflow-hidden">
        <motion.div
          className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-white/5"
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 6, repeat: Infinity }}
        />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="container-pro text-center relative z-10"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">Ready to grow with us?</h2>
          <p className="text-white/75 max-w-xl mx-auto text-sm md:text-base mb-8">
            Investment, partnership, offtake agreements — let's talk about how you can be part of
            India's next-generation herbal estate.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <button type="button" onClick={openContact} className="pip-hero-cta">
              Book a farm visit
            </button>
            <Link to="/about" className="pip-hero-cta">
              Read our story
            </Link>
          </div>
        </motion.div>
      </section>
    </>
  );
}
