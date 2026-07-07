import { createFileRoute } from "@tanstack/react-router";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { PageBanner } from "@/components/PageBanner";
import { crops } from "@/lib/crops";
import { heroFarm } from "@/lib/assets";
import processing from "@/assets/processing.jpg";
import farmMap from "@/assets/farm-map.jpg";
import { X } from "lucide-react";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery — GK Agro Farms 74-Acre Farm" },
      { name: "description", content: "A visual tour of our herbal farm — fields, crops, processing, and infrastructure." },
      { property: "og:title", content: "Gallery — GK Agro Farms" },
      { property: "og:description", content: "A visual tour of the estate." },
    ],
  }),
  component: GalleryPage,
});

const images = [
  { src: heroFarm, alt: "Aerial farm view at golden hour", span: "row-span-2" },
  ...crops.map((c) => ({ src: c.image, alt: c.name, span: "" })),
  { src: processing, alt: "Processing facility", span: "col-span-2" },
  { src: farmMap, alt: "Illustrated farm map", span: "row-span-2" },
];

function GalleryPage() {
  const [open, setOpen] = useState<string | null>(null);
  return (
    <>
      <PageBanner
        eyebrow="Gallery"
        title={<>A visual walk across the estate.</>}
        scriptLine="See our farm"
        image={heroFarm}
        imageAlt="Gallery"
      />

      <div className="container-pro py-14 md:py-20">
        <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[220px] gap-3">
          {images.map((im, i) => (
            <motion.button
              key={i}
              initial={{ opacity: 0, scale: 0.92 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ delay: (i % 6) * 0.06, duration: 0.4 }}
              whileHover={{ scale: 1.02 }}
              onClick={() => setOpen(im.src)}
              className={`relative overflow-hidden rounded-xl group border border-[var(--pip-border)] ${im.span}`}
            >
              <img
                src={im.src}
                alt={im.alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--pip-green-dark)]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-3 left-3 right-3 text-left text-sm text-white font-medium opacity-0 group-hover:opacity-100 transition-opacity translate-y-2 group-hover:translate-y-0 duration-300">
                {im.alt}
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-black/90 backdrop-blur-sm flex items-center justify-center p-6"
            onClick={() => setOpen(null)}
          >
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="absolute top-6 right-6 w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-lg"
              onClick={() => setOpen(null)}
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </motion.button>
            <motion.img
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              src={open}
              alt=""
              className="max-w-full max-h-[85vh] rounded-xl object-contain shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
