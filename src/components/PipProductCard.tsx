import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { AddToCartButton } from "@/components/AddToCartButton";
import type { Product } from "@/lib/products";

type PipProductCardProps = {
  product: Product;
  badge?: string;
  index?: number;
  showRequestSpecs?: boolean;
};

export function PipProductCard({ product, badge, index = 0, showRequestSpecs = true }: PipProductCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay: index * 0.06 }}
      whileHover={{ y: -4 }}
      className="pip-card group shrink-0 w-[260px] sm:w-[280px]"
    >
      <div className="relative aspect-square rounded-lg overflow-hidden bg-[var(--pip-cream)] mb-3">
        {product.image ? (
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-[var(--pip-green)]/30 text-4xl font-bold">
            GK
          </div>
        )}
        {badge && <span className="absolute top-3 left-3 pip-badge">{badge}</span>}
      </div>
      <h3 className="font-semibold text-sm leading-snug text-[var(--pip-text)] line-clamp-2 min-h-[2.5rem]">
        {product.name}
      </h3>
      {product.description && (
        <p className="mt-1.5 text-xs text-[var(--pip-muted)] line-clamp-2 leading-relaxed">
          {product.description}
        </p>
      )}
      {product.rating && (
        <p className="mt-2 flex items-center gap-1 text-xs text-[var(--pip-muted)]">
          <Star className="w-3.5 h-3.5 fill-[var(--pip-yellow)] text-[var(--pip-yellow)]" />
          {product.rating}
        </p>
      )}
      <p className="mt-2 font-bold text-[var(--pip-text)] text-sm">{product.price}</p>
      {showRequestSpecs && (
        <AddToCartButton product={product} className="mt-3" fullWidth />
      )}
    </motion.article>
  );
}

export function ProductCarousel({
  title,
  subtitle,
  items,
  viewAllTo,
  showRequestSpecs = true,
}: {
  title: string;
  subtitle?: string;
  items: { product: Product; badge?: string }[];
  viewAllTo?: string;
  showRequestSpecs?: boolean;
}) {
  return (
    <section className="py-10 md:py-14 bg-white">
      <div className="container-pro">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-end justify-between gap-4 mb-6"
        >
          <div>
            {subtitle && <p className="pip-section-sub">{subtitle}</p>}
            <h2 className="pip-section-title">{title}</h2>
          </div>
          {viewAllTo && (
            <Link to={viewAllTo} className="pip-link text-sm shrink-0">
              View all →
            </Link>
          )}
        </motion.div>
        <div className="flex gap-4 overflow-x-auto pb-2 snap-x snap-mandatory scrollbar-hide -mx-1 px-1">
          {items.map(({ product, badge }, i) => (
            <div key={product.name} className="snap-start">
              <PipProductCard product={product} badge={badge} index={i} showRequestSpecs={showRequestSpecs} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
