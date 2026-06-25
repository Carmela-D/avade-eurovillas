import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { PublicLayout } from "@/components/layout/PublicLayout";
import { getPostBySlug, getAllPostSlugs, formatDate } from "@/lib/mdx";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllPostSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return { title: "Entrada no encontrada" };
  return {
    title: post.frontmatter.title,
    description: post.frontmatter.excerpt,
    openGraph: {
      title: post.frontmatter.title,
      description: post.frontmatter.excerpt,
      type: "article",
      publishedTime: post.frontmatter.date,
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  return (
    <PublicLayout>
      <div className="section-padding bg-avade-casi-blanco">
        <div className="container-site max-w-3xl">
          <nav className="text-sm font-sans text-avade-marron-oscuro mb-8" aria-label="Ruta de navegación">
            <Link href="/blog" className="hover:text-avade-verde-oscuro transition-colors no-underline">
              Blog
            </Link>
            {" / "}
            <span className="text-avade-marron-oscuro line-clamp-1">{post.frontmatter.title}</span>
          </nav>

          <header className="mb-10">
            <div className="flex flex-wrap gap-2 mb-4">
              {post.frontmatter.tags?.map((tag) => (
                <span
                  key={tag}
                  className="text-sm font-sans font-semibold text-avade-verde-oscuro uppercase tracking-widest"
                >
                  {tag}
                </span>
              ))}
            </div>
            <h1 className="text-4xl md:text-5xl font-serif font-semibold text-avade-marron-profundo mb-4 text-balance">
              {post.frontmatter.title}
            </h1>
            <p className="text-xl text-avade-marron-oscuro leading-relaxed mb-6">
              {post.frontmatter.excerpt}
            </p>
            <div className="flex items-center gap-4 text-sm text-avade-marron-oscuro border-t border-avade-beige pt-4">
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
          </header>

          <div className="prose prose-avade prose-lg">
            <MDXRemote source={post.content} />
          </div>

          <footer className="mt-12 pt-8 border-t border-avade-beige">
            <div className="bg-avade-beige rounded-sm p-6">
              <p className="text-base font-serif font-semibold text-avade-marron-profundo mb-2">
                ¿Quieres estar al tanto de las novedades?
              </p>
              <p className="text-sm text-avade-marron-oscuro mb-4">
                Suscríbete para recibir las actualizaciones importantes directamente en tu email.
              </p>
              <div className="flex gap-3">
                <Link href="/#info" className="btn-secondary btn-sm bg-white">
                  Suscribirme
                </Link>
                <Link href="/hazte-socio" className="btn-primary btn-sm">
                  Quiero adherirme
                </Link>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </PublicLayout>
  );
}
