import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Reveal, Stagger, StaggerItem } from "@/components/Reveal";
import { PageBanner } from "@/components/PageBanner";
import { heroFarm } from "@/lib/assets";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us — GK Agro Farms" },
      { name: "description", content: "Our mission: build a 74-acre, world-class integrated medicinal and commercial crop estate for the nutraceutical era." },
      { property: "og:title", content: "About — GK Agro Farms" },
      { property: "og:description", content: "The story behind a 74-acre herbal estate." },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <PageBanner
        eyebrow="About us"
        title={<>Cultivating the next chapter of Indian agriculture.</>}
        scriptLine="GK Agro Farms"
        description="GK Agro Farms is a 74-acre integrated medicinal & commercial crop estate located in the fertile plains of Andhra Pradesh. We blend traditional Ayurvedic wisdom with modern precision agriculture to grow, process, and export nutraceutical-grade herbs at scale."
        image={heroFarm}
        imageAlt="GK Agro Farms estate"
      />

      <div className="container-pro py-14 md:py-20">
        <Stagger className="grid md:grid-cols-3 gap-4">
          {[
            { t: "Mission", d: "Bring high-quality, standardized medicinal herbs to the world market." },
            { t: "Vision", d: "Become India's most trusted farm-to-extract herbal enterprise." },
            { t: "Values", d: "Sustainability. Traceability. Community. Uncompromising quality." },
          ].map((v) => (
            <StaggerItem key={v.t}>
              <motion.div
                whileHover={{ y: -6, boxShadow: "0 16px 40px rgba(0,0,0,0.08)" }}
                className="pip-stat-card h-full p-8"
              >
                <h3 className="text-xl font-bold text-[var(--pip-green)]">{v.t}</h3>
                <p className="mt-3 text-sm text-[var(--pip-muted)] leading-relaxed">{v.d}</p>
              </motion.div>
            </StaggerItem>
          ))}
        </Stagger>

        <Reveal className="mt-20">
          <p className="pip-section-sub">By the numbers</p>
          <h2 className="pip-section-title mt-2">The numbers</h2>
        </Reveal>
        <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            ["74", "Acres"],
            ["12+", "Crops"],
            ["₹3.72 Cr", "Revenue proj."],
            ["120+", "Jobs generated"],
          ].map(([v, l], i) => (
            <motion.div
              key={l}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              whileHover={{ y: -4 }}
              className="pip-stat-card text-center p-6"
            >
              <div className="text-3xl font-bold text-[var(--pip-green)]">{v}</div>
              <div className="text-[10px] uppercase tracking-widest text-[var(--pip-muted)] mt-1">{l}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
}
