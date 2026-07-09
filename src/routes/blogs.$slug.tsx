import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowLeft, Clock } from "lucide-react";
import { PageBanner } from "@/components/PageBanner";
import { getBlogBySlug } from "@/lib/blogs";

export const Route = createFileRoute("/blogs/$slug")({
  loader: ({ params }) => {
    const post = getBlogBySlug(params.slug);
    if (!post) throw notFound();
    return { post };
  },
  head: ({ loaderData }) => ({
    meta: [
      { title: `${loaderData?.post.title ?? "Blog"} — GK Agro Farms` },
      { name: "description", content: loaderData?.post.excerpt ?? "" },
      { property: "og:title", content: loaderData?.post.title ?? "Blog — GK Agro Farms" },
      { property: "og:description", content: loaderData?.post.excerpt ?? "" },
    ],
  }),
  component: BlogPostPage,
});

function BlogPostPage() {
  const { post } = Route.useLoaderData();

  return (
    <>
      <PageBanner
        eyebrow={post.category}
        title={<>{post.title}</>}
        description={post.excerpt}
        image={post.image}
        imageAlt={post.imageAlt}
      />

      <article className="container-pro py-14 md:py-20 max-w-3xl">
        <Link
          to="/blogs"
          className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--pip-green)] hover:underline"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to blog
        </Link>

        <div className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs uppercase tracking-widest text-[var(--pip-muted)] font-semibold">
          <span>{post.date}</span>
          <span className="inline-flex items-center gap-1">
            <Clock className="h-3.5 w-3.5" aria-hidden />
            {post.readTime}
          </span>
        </div>

        <div className="mt-8 space-y-5">
          {post.content.map((paragraph, i) => (
            <motion.p
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06, duration: 0.5 }}
              className="text-[var(--pip-text)] leading-relaxed text-base md:text-lg"
            >
              {paragraph}
            </motion.p>
          ))}
        </div>
      </article>
    </>
  );
}
