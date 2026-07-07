import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { heroFarm } from "@/lib/assets";
import { crops } from "@/lib/crops";
import { products } from "@/lib/products";
import { ProductCarousel } from "@/components/PipProductCard";
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

const testimonials = [
  {
    name: "Investment Partner, Hyderabad",
    text: "GK Agro Farms presents a rare opportunity — 74 acres of traceable medicinal cultivation with in-house processing. The estate is investor-ready and operationally sound.",
  },
  {
    name: "Nutraceutical Buyer",
    text: "The standardized extracts and powders from this estate meet export-grade specifications. Traceability from soil to shelf is exactly what our industry demands.",
  },
  {
    name: "Agricultural Consultant",
    text: "Twelve crops meticulously planned across two sites — this is precision agriculture blended with Ayurvedic wisdom. A model estate for the nutraceutical era.",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1 },
  }),
};

function Home() {
  const heroCrops = crops.slice(0, 4);
  const { openContact } = useContactModal();

  return (
    <>
      {/* HERO */}
      <section className="relative min-h-[520px] md:min-h-[600px] lg:min-h-[680px] overflow-hidden bg-[var(--pip-green-dark)]">
        <motion.img
          src={heroFarm}
          alt="Premium aerial view of GK Agro Farms 74-acre medicinal estate"
          className="absolute inset-0 w-full h-full object-cover"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 8, ease: "easeOut" }}
          width={1920}
          height={1200}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0d2818]/90 via-[#1a3d2a]/75 to-[#1a3d2a]/40" />

        <div className="relative container-pro h-full flex items-center pt-14 pb-20 md:pt-16 md:pb-24">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-6 items-start lg:items-center w-full">
            <div className="z-10">
              <motion.p
                custom={0}
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                className="text-white/60 text-xs uppercase tracking-[0.35em] mb-4 font-medium"
              >
                74-acre integrated herbal estate
              </motion.p>
              <motion.h1
                custom={1}
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                className="pip-hero-line1"
              >
                NATURE OUTSIDE
              </motion.h1>
              <motion.p
                custom={2}
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                className="pip-hero-script"
              >
                Medicine Grows Inside
              </motion.p>
              <motion.p
                custom={3}
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                className="mt-3 max-w-md text-white/75 text-sm md:text-base leading-relaxed"
              >
                Premium medicinal crops, in-house processing, and export-ready nutraceuticals — cultivated across 74 acres in Andhra Pradesh.
              </motion.p>
              <motion.div custom={4} variants={fadeUp} initial="hidden" animate="visible">
                <Link to="/farm" className="pip-hero-cta mt-4 inline-flex">
                  EXPLORE THE FARM
                </Link>
              </motion.div>
            </div>

            <div className="relative hidden md:flex items-end justify-center gap-3 lg:gap-4 min-h-[320px]">
              {heroCrops.map((crop, i) => (
                <motion.div
                  key={crop.slug}
                  initial={{ opacity: 0, y: 60, rotate: [-4, 2, -2, 3][i] }}
                  animate={{
                    opacity: 1,
                    y: [24, 0, 12, 6][i],
                    rotate: [-4, 2, -2, 3][i],
                  }}
                  transition={{ duration: 0.7, delay: 0.3 + i * 0.12, ease: [0.16, 1, 0.3, 1] }}
                  whileHover={{ y: [14, -10, 2, -4][i], scale: 1.04 }}
                  className="pip-hero-product"
                  style={{ zIndex: [2, 4, 3, 1][i] }}
                >
                  <img src={crop.image} alt={crop.name} className="w-full h-full object-cover" />
                  <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/70 to-transparent p-3">
                    <p className="text-white text-[10px] uppercase tracking-wider font-bold">{crop.name}</p>
                    <p className="text-white/70 text-[9px]">{crop.area}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

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
        title="Our Cultivation Portfolio"
        subtitle="Twelve crops · One estate"
        viewAllTo="/crops"
        showRequestSpecs={false}
        items={crops.slice(0, 8).map((c, i) => ({
          product: {
            name: c.name,
            price: c.yield,
            tag: c.cycle,
            description: c.use,
            image: c.image,
            rating: `4.9 | ${c.area}`,
          },
          badge: i === 0 ? "Featured" : i === 2 ? "Trending" : undefined,
        }))}
      />

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

      {/* Testimonials */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container-pro">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <p className="pip-section-sub">What partners say</p>
            <h2 className="pip-section-title">
              Trusted by <span className="font-script text-[var(--pip-yellow-dark)]">industry leaders</span>
            </h2>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <motion.blockquote
                key={t.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -4 }}
                className="pip-testimonial"
              >
                <div className="flex gap-0.5 mb-3">
                  {Array.from({ length: 5 }).map((_, j) => (
                    <Star key={j} className="w-4 h-4 fill-[var(--pip-yellow)] text-[var(--pip-yellow)]" />
                  ))}
                </div>
                <p className="text-sm text-[var(--pip-muted)] leading-relaxed">{t.text}</p>
                <footer className="mt-4 font-bold text-sm text-[var(--pip-text)]">{t.name}</footer>
              </motion.blockquote>
            ))}
          </div>
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
          <div className="flex flex-wrap justify-center gap-3">
            <button type="button" onClick={openContact} className="pip-hero-cta">
              BOOK A FARM VISIT
            </button>
            <Link to="/about" className="pip-btn-outline-white">
              Read our story
            </Link>
          </div>
        </motion.div>
      </section>
    </>
  );
}
