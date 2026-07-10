import { Fragment } from "react";
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
          <div
            className="pointer-events-none absolute left-0 z-0 hidden w-20 md:block"
            style={{
              top: "calc(1.5rem + 1.125rem + 0.25rem + 5rem)",
              bottom: "calc(1.5rem + 2.25rem + 0.5rem + 5rem)",
            }}
            aria-hidden
          >
            <motion.div
              className="pip-processing-timeline mx-auto h-full w-0.5"
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: "easeInOut" }}
            />
          </div>
          <div className="relative z-10 grid grid-cols-[5rem_minmax(0,1fr)] gap-x-6 gap-y-6">
            {processSteps.map((s, i) => {
              const Icon = s.icon;
              return (
                <Fragment key={s.title}>
                  <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{ delay: i * 0.1, duration: 0.5 }}
                    className="col-start-1 flex justify-center self-start pt-[calc(1.5rem+1.125rem+0.25rem)]"
                  >
                    <motion.div
                      whileHover={{ scale: 1.08, rotate: 5 }}
                      className="relative z-10 flex h-20 w-20 items-center justify-center rounded-2xl bg-[var(--pip-green)] shadow-lg"
                    >
                      <Icon className="h-8 w-8 text-white" strokeWidth={1.5} />
                    </motion.div>
                  </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  whileHover={{ x: 6 }}
                  className="col-start-2"
                >
                  <div className="pip-stat-card p-6">
                    <p className="pip-section-sub text-[10px]">Step {i + 1}</p>
                    <div className="mt-1 flex h-20 items-center">
                      <h3 className="text-xl font-bold text-[var(--pip-text)]">{s.title}</h3>
                    </div>
                    <p className="mt-2 text-sm leading-relaxed text-[var(--pip-muted)]">{s.desc}</p>
                  </div>
                </motion.div>
                </Fragment>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
