import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { PageBanner } from "@/components/PageBanner";
import processingImg from "@/assets/processing.jpg";
import { processSteps } from "@/lib/processSteps";

export const Route = createFileRoute("/processing")({
  head: () => ({
    meta: [
      { title: "Processing — From Plant to Package | GK Agro Farms" },
      { name: "description", content: "Our six-step processing chain: plant, drying, grinding, extraction, packaging, export — for nutraceutical-grade output." },
      { property: "og:title", content: "Processing — GK Agro Farms" },
      { property: "og:description", content: "Nutraceutical-grade processing chain across six precise steps." },
    ],
  }),
  component: ProcessingPage,
});

function ProcessingPage() {
  return (
    <>
      <PageBanner
        eyebrow="Processing Chain"
        title={<>From soil to shelf — six precise steps.</>}
        scriptLine="Zero shortcuts"
        description="An in-house nutraceutical-grade processing unit turns raw plants into standardized extracts, powders, and packaged goods — traceable end to end."
        image={processingImg}
        imageAlt="Processing facility"
      />

      <section className="container-pro max-w-4xl py-14 md:py-20">
        <div className="relative">
          <svg className="absolute left-9 top-0 h-full w-2 hidden md:block z-0 pointer-events-none" viewBox="0 0 4 100" preserveAspectRatio="none" aria-hidden>
            <motion.line
              x1="2" y1="0" x2="2" y2="100"
              stroke="var(--pip-green)"
              strokeWidth="2"
              strokeDasharray="4 4"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 2 }}
            />
          </svg>

          <div className="relative z-10 space-y-6">
            {processSteps.map((s, i) => {
              const Icon = s.icon;
              return (
                <motion.div
                  key={s.title}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  whileHover={{ x: 6 }}
                  className="relative z-10 flex gap-6 items-start"
                >
                  <motion.div
                    whileHover={{ scale: 1.08, rotate: 5 }}
                    className="relative z-10 shrink-0 w-20 h-20 rounded-2xl bg-[var(--pip-green)] flex items-center justify-center shadow-lg"
                  >
                    <Icon className="w-8 h-8 text-white" strokeWidth={1.5} />
                  </motion.div>
                  <div className="pip-stat-card flex-1 p-6">
                    <p className="pip-section-sub text-[10px]">Step {i + 1}</p>
                    <h3 className="text-xl font-bold mt-1 text-[var(--pip-text)]">{s.title}</h3>
                    <p className="mt-2 text-[var(--pip-muted)] leading-relaxed text-sm">{s.desc}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
