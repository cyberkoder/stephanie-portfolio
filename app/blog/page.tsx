import Link from "next/link";
import { db } from "../lib/db";
import { blogPosts } from "../lib/schema";
import { eq, and, desc } from "drizzle-orm";

export const metadata = {
  title: "Blog | Stephanie Leonenko",
  description: "Thoughts on healthcare, patient care, and life from Stephanie Leonenko.",
};

function formatDate(date: Date | null) {
  if (!date) return "";
  return new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(new Date(date));
}

function parseTags(raw: string): string[] {
  try {
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

export default async function BlogPage() {
  let posts: typeof blogPosts.$inferSelect[] = [];

  try {
    posts = await db
      .select()
      .from(blogPosts)
      .where(
        and(
          eq(blogPosts.author, "Stephanie Leonenko"),
          eq(blogPosts.published, true)
        )
      )
      .orderBy(desc(blogPosts.publishedAt));
  } catch {
    // DB not configured yet — render empty state gracefully
  }

  return (
    <div className="min-h-screen bg-stone-50 text-stone-900">
      {/* Nav */}
      <nav className="fixed top-0 inset-x-0 z-50 bg-stone-50/90 backdrop-blur-md border-b border-stone-200/60">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/" className="font-medium text-stone-800 tracking-tight hover:text-teal-700 transition-colors">
            Stephanie Leonenko
          </Link>
          <div className="flex items-center gap-6">
            <Link href="/#about" className="text-sm text-stone-500 hover:text-teal-700 transition-colors font-medium">About</Link>
            <Link href="/#experience" className="text-sm text-stone-500 hover:text-teal-700 transition-colors font-medium">Experience</Link>
            <span className="text-sm text-teal-700 font-medium">Blog</span>
            <Link
              href="/#contact"
              className="text-sm bg-teal-700 text-white px-4 py-2 rounded-lg hover:bg-teal-800 transition-colors font-medium"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </nav>

      {/* Header */}
      <section className="pt-32 pb-12 px-6 bg-gradient-to-br from-stone-50 via-teal-50/20 to-stone-100">
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-teal-50 border border-teal-200 text-teal-800 text-xs font-mono px-3 py-1.5 rounded-full mb-6 w-fit">
            <div className="w-1.5 h-1.5 rounded-full bg-teal-500" />
            Writing
          </div>
          <h1 className="text-4xl md:text-5xl font-light text-stone-900 leading-tight mb-4">
            Blog
          </h1>
          <p className="text-lg text-stone-600 max-w-2xl">
            Thoughts on healthcare, compassionate patient care, and the human side of medicine.
          </p>
        </div>
      </section>

      {/* Posts */}
      <section className="py-12 px-6">
        <div className="max-w-4xl mx-auto">
          {posts.length === 0 ? (
            <div className="text-center py-20">
              <div className="w-12 h-12 rounded-full bg-stone-100 flex items-center justify-center mx-auto mb-4">
                <svg className="w-5 h-5 text-stone-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <p className="text-stone-500 text-sm">No posts yet. Check back soon.</p>
            </div>
          ) : (
            <div className="grid gap-8">
              {posts.map((post) => {
                const tags = parseTags(post.tags);
                return (
                  <article
                    key={post.id}
                    className="bg-white border border-stone-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                  >
                    <div className="flex flex-col md:flex-row">
                      {post.image && (
                        <div className="md:w-64 flex-shrink-0">
                          <img
                            src={post.image}
                            alt={post.title}
                            className="w-full h-48 md:h-full object-cover"
                          />
                        </div>
                      )}
                      <div className="p-6 flex flex-col justify-between flex-1">
                        <div>
                          {tags.length > 0 && (
                            <div className="flex flex-wrap gap-2 mb-3">
                              {tags.map((tag) => (
                                <span
                                  key={tag}
                                  className={`text-xs px-2.5 py-0.5 rounded-full font-medium ${
                                    tag.toLowerCase() === "humanitarian"
                                      ? "bg-teal-50 text-teal-700 border border-teal-200"
                                      : "bg-stone-100 text-stone-600"
                                  }`}
                                >
                                  {tag}
                                </span>
                              ))}
                            </div>
                          )}
                          <h2 className="text-xl font-medium text-stone-900 mb-2 leading-snug">
                            {post.title}
                          </h2>
                          <p className="text-stone-500 text-sm leading-relaxed mb-4">
                            {post.excerpt}
                          </p>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-xs text-stone-400">
                            {formatDate(post.publishedAt)}
                          </span>
                          <Link
                            href={`/blog/${post.slug}`}
                            className="text-sm text-teal-700 font-medium hover:text-teal-800 transition-colors flex items-center gap-1"
                          >
                            Read more
                            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-stone-200 mt-12">
        <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-400">
          <span>© {new Date().getFullYear()} Stephanie Leonenko</span>
          <a
            href="https://leonenkogroup.com/blog"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-teal-700 transition-colors"
          >
            More from Leonenko Group →
          </a>
        </div>
      </footer>
    </div>
  );
}

