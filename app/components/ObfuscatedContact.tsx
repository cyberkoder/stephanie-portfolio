"use client";

import { Mail, Phone } from "lucide-react";

// Renders email/phone visually but keeps href and text out of raw HTML
// so bots can't scrape them. Decoded at click-time in the browser only.
export function ObfuscatedEmail({ className }: { className?: string }) {
  const decode = () => {
    window.location.href = "mailto:" + atob("c3RlcGhhbmllQGxlb25lbmtvLm1l");
  };
  return (
    <button onClick={decode} className={className} aria-label="Send email">
      <Mail className="w-4 h-4" />
      <span>&#115;&#116;&#101;&#112;&#104;&#97;&#110;&#105;&#101;&#64;&#108;&#101;&#111;&#110;&#101;&#110;&#107;&#111;&#46;&#109;&#101;</span>
    </button>
  );
}

export function ObfuscatedPhone({ className }: { className?: string }) {
  const decode = () => {
    window.location.href = atob("dGVsOisxMzQ3OTc1MTUxMg==");
  };
  return (
    <button onClick={decode} className={className} aria-label="Call phone number">
      <Phone className="w-4 h-4" />
      <span>&#43;&#49;&#32;&#40;&#51;&#52;&#55;&#41;&#32;&#57;&#55;&#53;&#45;&#49;&#53;&#49;&#50;</span>
    </button>
  );
}
