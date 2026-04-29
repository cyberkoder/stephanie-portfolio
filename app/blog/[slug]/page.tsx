import Link from "next/link";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { db } from "../../lib/db";
import { blogPosts } from "../../lib/schema";
import { eq, and } from "drizzle-orm";

interface Props {
  params: Promise<{ slug: string }>;
}

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

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  try {
    const [post] = await db
      .select()
      .from(blogPosts)
      .where(and(eq(blogPosts.slug, slug), eq(blogPosts.author, "Stephanie Leonenko")))
      .limit(1);
    if (!post) return {};
    return { title: `${post.title} | Stephanie Leonenko`, description: post.excerpt };
  } catch {
    return {};
  }
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  let results: typeof blogPosts.$inferSelect[] = [];

  try {
    results = await db
      .select()
      .from(blogPosts)
      .where(and(eq(blogPosts.slug, slug), eq(blogPosts.author, "Stephanie Leonenko")))
      .limit(1);
  } catch {
    notFound();
  }

  const post = results[0];
  if (!post) notFound();

  const tags = parseTags(post.tags);

  return (
    <div className="min-h-screen bg-stone-50 text-stone-900">
      <nav className="fixed top-0 inset-x-0 z-50 bg-stone-50/90 backdrop-blur-md border-b border-stone-200/60">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/" className="font-medium text-stone-800 tracking-tight hover:text-teal-700 transition-colors">
            Stephanie Leonenko
          </Link>
          <div className="flex items-center gap-6">
            <Link href="/#about" className="text-sm text-stone-500 hover:text-teal-700 transition-colors font-medium">About</Link>
            <Link href="/blog" className="text-sm text-stone-500 hover:text-teal-700 transition-colors font-medium">Blog</Link>
            <Link href="/#contact" className="text-sm bg-teal-700 text-white px-4 py-2 rounded-lg hover:bg-teal-800 transition-colors font-medium">
              Get in Touch
            </Link>
          </div>
        </div>
      </nav>

      <main className="pt-28 pb-16 px-6">
        <div className="max-w-2xl mx-auto">
          <Link href="/blog" className="inline-flex items-center gap-1.5 text-sm text-stone-500 hover:text-teal-700 transition-colors mb-8">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
            </svg>
            Back to Blog
          </Link>

          {post.image && (
            <div className="mb-8 rounded-2xl overflow-hidden border border-stone-200">
              <img src={post.image} alt={post.title} className="w-full h-64 object-cover" />
            </div>
          )}

          {tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-4">
              {tags.map((tag) => (
                <span key={tag} className={`text-xs px-2.5 py-0.5 rounded-full font-medium ${
                  tag.toLowerCase() === "humanitarian"
                    ? "bg-teal-50 text-teal-700 border border-teal-200"
                    : "bg-stone-100 text-stone-600"
                }`}>{tag}</span>
              ))}
            </div>
          )}

          <h1 className="text-3xl md:text-4xl font-light text-stone-900 leading-tight mb-4">{post.title}</h1>

          <div className="flex items-center gap-3 text-sm text-stone-400 mb-10 pb-8 border-b border-stone-200">
            <span className="font-medium text-stone-600">{post.author}</span>
            <span>·</span>
            <span>{formatDate(post.publishedAt)}</span>
          </div>

          <div className="prose prose-stone prose-sm md:prose-base max-w-none prose-headings:font-light prose-a:text-teal-700 prose-a:no-underline hover:prose-a:underline">
            <ReactMarkdown remarkPlugins={[remarkGfm]}>{post.content}</ReactMarkdown>
          </div>

          <div className="mt-16 pt-8 border-t border-stone-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <Link href="/blog" className="inline-flex items-center gap-1.5 text-sm text-stone-500 hover:text-teal-700 transition-colors">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
              </svg>
              All posts
            </Link>
            <a href="https://leonenkogroup.com/blog" target="_blank" rel="noopener noreferrer" className="text-sm text-stone-400 hover:text-teal-700 transition-colors">
              More from Leonenko Group →
            </a>
          </div>
        </div>
      </main>
    </div>
  );
}
