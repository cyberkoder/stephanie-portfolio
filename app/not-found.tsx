import Link from "next/link";
import { Heart, Home, ExternalLink } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-stone-50 flex flex-col items-center justify-center px-6">
      {/* Decorative background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-teal-100/40 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-stone-200/60 rounded-full blur-3xl" />
      </div>

      <div className="relative text-center max-w-md">
        {/* Icon */}
        <div className="w-16 h-16 rounded-2xl bg-teal-100 border border-teal-200 flex items-center justify-center mx-auto mb-6">
          <Heart className="w-7 h-7 text-teal-600" />
        </div>

        {/* 404 */}
        <p className="text-xs font-mono text-teal-600 tracking-widest uppercase mb-3">404 - Page Not Found</p>
        <h1 className="text-4xl font-light text-stone-900 mb-4">
          Looks like this page<br />
          <span className="text-teal-700">doesn&apos;t exist</span>
        </h1>
        <p className="text-stone-500 text-sm leading-relaxed mb-10">
          The page you&apos;re looking for may have moved or never existed.
          Head back to Stephanie&apos;s portfolio or visit her husband&apos;s
          site below.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 bg-teal-700 text-white px-6 py-3 rounded-lg text-sm font-medium hover:bg-teal-800 transition-colors"
          >
            <Home className="w-4 h-4" />
            Back to Portfolio
          </Link>
          <a
            href="https://a.leonenko.me"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 border border-stone-300 text-stone-600 px-6 py-3 rounded-lg text-sm font-medium hover:bg-stone-100 transition-colors"
          >
            Visit a.leonenko.me
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Subtle branding */}
        <p className="text-xs text-stone-300 font-mono mt-12">s.leonenko.me</p>
      </div>
    </div>
  );
}
