import type { Metadata } from "next";
import Link from "next/link";
import { PublicLayout } from "@/components/layout/PublicLayout";
import { getAllPosts, formatDate } from "@/lib/mdx";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Actualizaciones, análisis y noticias de la Plataforma Adelante Eurovillas. Lo que pasa en Eurovillas, contado por los vecinos.",
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <PublicLayout>
      <div className="bg-avade-casi-blanco section-padding-sm border-b border-avade-beige">
        <div className="container-site">
          <p className="text-xs font-sans font-semibold text-avade-verde-oscuro uppercase tracking-widest mb-3">
            Novedades y análisis
          </p>
          <h1 className="text-4xl md:text-5xl font-serif font-semibold text-avade-marron-profundo mb-4">
            Blog
          </h1>
          <p className="text-lg text-avade-marron-oscuro max-w-2xl leading-relaxed">
            Actualizaciones del proceso, explicaciones del contexto legal y
            reflexiones de los vecinos. Sin ruido: solo escribimos cuando hay
            algo relevante que contar.
          </p>
        </div>
      </div>

      <div className="section-padding bg-white">
        <div className="container-site">
          {posts.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-lg text-avade-taupe font-serif">
                Próximamente, las primeras entradas del blog.
              </p>
              <p className="text-base text-avade-taupe mt-2">
                Suscríbete para recibir las novedades en tu email.
              </p>
              <div className="mt-6">
                <Link href="/#info" className="btn-primary">
                  Suscribirme
                </Link>
              </div>
            </div>
          ) : (
            <div className="max-w-3xl mx-auto space-y-8">
              {posts.map((post) => (
                <article key={post.slug} className="border-b border-avade-beige pb-8 last:border-0">
                  <Link
                    href={`/blog/${post.slug}`}
                    className="group block no-underline"
                  >
                    <div className="flex flex-wrap gap-2 mb-3">
                      {post.frontmatter.tags?.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs font-sans font-semibold text-avade-verde-oscuro uppercase tracking-widest"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <h2 className="text-2xl font-serif font-semibold text-avade-marron-profundo mb-3 group-hover:text-avade-verde-oscuro transition-colors">
                      {post.frontmatter.title}
                    </h2>
                    <p className="text-base text-avade-marron-oscuro leading-relaxed mb-4">
                      {post.frontmatter.excerpt}
                    </p>
                    <div className="flex items-center gap-4 text-sm text-avade-taupe">
                      <time dateTime={post.frontmatter.date}>
                        {formatDate(post.frontmatter.date)}
                      </time>
                      {post.frontmatter.author && (
                        <>
                          <span aria-hidden="true">·</span>
                          <span>{post.frontmatter.author}</span>
                        </>
                      )}
                    </div>
                  </Link>
                </article>
              ))}
            </div>
          )}
        </div>
      </div>
    </PublicLayout>
  );
}
