import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight, Clock } from "lucide-react";
import { PageBanner } from "@/components/PageBanner";
import { heroFarm } from "@/lib/assets";
import { blogPosts } from "@/lib/blogs";

export const Route = createFileRoute("/blogs")({
  head: () => ({
    meta: [
      { title: "Blog — Insights from GK Agro Farms" },
      {
        name: "description",
        content:
          "Stories on medicinal cultivation, processing, sustainability, and export-ready nutraceuticals from GK Agro Farms.",
      },
      { property: "og:title", content: "Blog — GK Agro Farms" },
      {
        property: "og:description",
        content: "Farm insights, crop knowledge, and processing updates from our 74-acre herbal estate.",
      },
    ],
  }),
  component: BlogsPage,
});

function BlogsPage() {
  return (
    <>
      <PageBanner
        eyebrow="Blog"
        title={<>Insights from the estate.</>}
        scriptLine="Farm & field notes"
        description="Updates on cultivation, processing, sustainability, and the business of building India's next-generation herbal farm."
        image={heroFarm}
        imageAlt="GK Agro Farms blog"
      />

      <section className="container-pro py-14 md:py-20">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post, i) => (
            <motion.article
              key={post.slug}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ delay: (i % 3) * 0.08, duration: 0.5 }}
              whileHover={{ y: -6 }}
              className="pip-blog-card group"
            >
              <Link to="/blogs/$slug" params={{ slug: post.slug }} className="block h-full">
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.imageAlt}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  <span className="pip-blog-category">{post.category}</span>
                </div>
                <div className="p-5 md:p-6">
                  <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-[10px] uppercase tracking-widest text-[var(--pip-muted)] font-semibold">
                    <span>{post.date}</span>
                    <span className="inline-flex items-center gap-1">
                      <Clock className="h-3 w-3" aria-hidden />
                      {post.readTime}
                    </span>
                  </div>
                  <h2 className="mt-3 text-lg md:text-xl font-bold text-[var(--pip-text)] leading-snug group-hover:text-[var(--pip-green)] transition-colors">
                    {post.title}
                  </h2>
                  <p className="mt-2 text-sm text-[var(--pip-muted)] leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--pip-green)]">
                    Read article
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>
      </section>
    </>
  );
}
