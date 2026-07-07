import { motion } from "framer-motion";
import type { ReactNode } from "react";

type PageBannerProps = {
  eyebrow: string;
  title: ReactNode;
  scriptLine?: string;
  description?: string;
  image?: string;
  imageAlt?: string;
};

export function PageBanner({ eyebrow, title, scriptLine, description, image, imageAlt }: PageBannerProps) {
  return (
    <section className="relative overflow-hidden bg-[var(--pip-green-dark)] min-h-[280px] md:min-h-[340px] flex items-end">
      {image && (
        <>
          <img
            src={image}
            alt={imageAlt ?? ""}
            className="absolute inset-0 w-full h-full object-cover opacity-40"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0d2818]/95 via-[#1a3d2a]/80 to-[#1a3d2a]/50" />
        </>
      )}
      <div className="relative container-pro py-14 md:py-20 w-full">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-white/60 text-xs uppercase tracking-[0.35em] font-medium mb-3"
        >
          {eyebrow}
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-3xl md:text-5xl font-extrabold text-white leading-tight max-w-3xl"
        >
          {title}
        </motion.h1>
        {scriptLine && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-script text-3xl md:text-4xl text-[var(--pip-yellow)] mt-2"
          >
            {scriptLine}
          </motion.p>
        )}
        {description && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-4 max-w-2xl text-white/75 text-sm md:text-base leading-relaxed"
          >
            {description}
          </motion.p>
        )}
      </div>
    </section>
  );
}
