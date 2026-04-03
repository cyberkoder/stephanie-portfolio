"use client";

import { useState } from "react";
import {
  Award,
  BookOpen,
  Briefcase,
  GraduationCap,
  Heart,
  Mail,
  MapPin,
  Phone,
  Shield,
  Star,
  Users,
  ChevronDown,
  Menu,
  X,
  ExternalLink,
} from "lucide-react";

// ─── Data ─────────────────────────────────────────────────────────────────────

const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Credentials", href: "#credentials" },
  { label: "Experience", href: "#experience" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

const STATS = [
  { value: "10+", label: "Years of Experience" },
  { value: "NY", label: "State Certified CNA" },
  { value: "BS", label: "Healthcare Administration" },
  { value: "100s", label: "Patients Served" },
];

const CREDENTIALS = [
  {
    icon: Shield,
    title: "Certified Nursing Assistant (CNA)",
    issuer: "New York State Department of Health",
    detail: "Active New York State CNA Certification",
    color: "teal",
  },
  {
    icon: GraduationCap,
    title: "Bachelor of Science - Healthcare Administration",
    issuer: "University",
    detail: "Comprehensive training in healthcare systems, policy, and operations",
    color: "blue",
    placeholder: true,
  },
  {
    icon: Award,
    title: "CPR / BLS Certified",
    issuer: "American Heart Association",
    detail: "Basic Life Support for Healthcare Providers",
    color: "rose",
  },
];

const SKILLS = [
  {
    category: "Patient Care",
    icon: Heart,
    items: [
      "Activities of Daily Living (ADLs)",
      "Vital Signs Monitoring",
      "Patient Positioning & Mobility",
      "Personal Hygiene & Grooming",
      "Nutrition & Feeding Assistance",
      "Catheter & Wound Care Support",
    ],
  },
  {
    category: "Clinical Skills",
    icon: Shield,
    items: [
      "EHR / EMR Documentation",
      "Infection Control & Prevention",
      "HIPAA Compliance",
      "Specimen Collection",
      "Patient Safety Protocols",
      "Emergency Response (CPR/BLS)",
    ],
  },
  {
    category: "Administration",
    icon: Briefcase,
    items: [
      "Healthcare Policy & Compliance",
      "Staff Coordination",
      "Patient Advocacy",
      "Care Planning Support",
      "Quality Improvement",
      "Interdisciplinary Collaboration",
    ],
  },
];

const EXPERIENCE = [
  {
    role: "Certified Nursing Assistant",
    employer: "[Employer - add from resume]",
    location: "New York",
    period: "[Start Date] - Present",
    highlights: [
      "Provided compassionate direct patient care for [X] residents in a [long-term care / acute / memory care] setting",
      "Monitored and recorded vital signs, reporting abnormalities to nursing staff",
      "Assisted patients with ADLs including bathing, dressing, grooming, and ambulation",
      "Maintained accurate documentation in electronic health records",
      "Collaborated with interdisciplinary care team to implement individualized care plans",
    ],
    placeholder: true,
  },
];

const EDUCATION = [
  {
    degree: "Bachelor of Science in Healthcare Administration",
    school: "[University Name]",
    year: "[Graduation Year]",
    detail: "Coursework in healthcare systems, policy, finance, and organizational management",
    placeholder: true,
  },
  {
    degree: "Certified Nursing Assistant Program",
    school: "[CNA Training Program / School]",
    year: "[Year]",
    detail: "New York State approved CNA training program - clinical and classroom instruction",
    placeholder: true,
  },
];

const CORE_VALUES = [
  { icon: Heart, label: "Compassion", desc: "Every patient deserves dignity and genuine care." },
  { icon: Shield, label: "Integrity", desc: "Honest, ethical practice in every interaction." },
  { icon: Users, label: "Teamwork", desc: "Healthcare is a team effort - I show up for mine." },
  { icon: Star, label: "Excellence", desc: "Continuous learning and commitment to best practices." },
];

// ─── Components ───────────────────────────────────────────────────────────────

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 inset-x-0 z-50 bg-stone-50/90 backdrop-blur-md border-b border-stone-200/60">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-teal-700 flex items-center justify-center">
            <span className="text-white text-sm font-semibold">SL</span>
          </div>
          <span className="font-medium text-stone-800 tracking-tight">Stephanie Leonenko</span>
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-stone-500 hover:text-teal-700 transition-colors font-medium"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="text-sm bg-teal-700 text-white px-4 py-2 rounded-lg hover:bg-teal-800 transition-colors font-medium"
          >
            Get in Touch
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-stone-500"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-stone-200 bg-stone-50 px-6 py-4 flex flex-col gap-4">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="text-sm text-stone-600 hover:text-teal-700 font-medium"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="text-sm bg-teal-700 text-white px-4 py-2 rounded-lg text-center font-medium"
          >
            Get in Touch
          </a>
        </div>
      )}
    </nav>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function Home() {
  return (
    <>
      <Navbar />

      {/* ── Hero ── */}
      <section className="min-h-screen flex flex-col justify-center pt-16 bg-gradient-to-br from-stone-50 via-teal-50/30 to-stone-100">
        <div className="max-w-6xl mx-auto px-6 py-24 grid lg:grid-cols-2 gap-16 items-center">
          {/* Text */}
          <div>
            <div className="inline-flex items-center gap-2 bg-teal-50 border border-teal-200 text-teal-800 text-xs font-mono px-3 py-1.5 rounded-full mb-6 animate-fade-up">
              <div className="w-1.5 h-1.5 rounded-full bg-teal-500 animate-pulse" />
              Available for Opportunities
            </div>

            <h1 className="text-5xl md:text-6xl font-light text-stone-900 leading-tight mb-4 animate-fade-up delay-100">
              Stephanie
              <br />
              <span className="text-teal-700 font-normal">Leonenko</span>
            </h1>

            <p className="text-lg text-stone-500 font-medium mb-2 animate-fade-up delay-200">
              Certified Nursing Assistant - BS Healthcare Administration
            </p>
            <p className="text-sm text-stone-400 mb-8 flex items-center gap-1.5 animate-fade-up delay-200">
              <MapPin className="w-3.5 h-3.5" /> Commack, New York
            </p>

            <p className="text-base text-stone-600 leading-relaxed mb-10 max-w-lg animate-fade-up delay-300">
              A dedicated healthcare professional with over 10 years of hands-on patient
              care experience, grounded in compassion, clinical precision, and a deep
              commitment to improving patient outcomes. Combining frontline CNA expertise
              with a Bachelor of Science in Healthcare Administration to bridge the gap
              between bedside care and healthcare operations.
            </p>

            <div className="flex flex-wrap gap-3 animate-fade-up delay-400">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 bg-teal-700 text-white px-6 py-3 rounded-lg text-sm font-medium hover:bg-teal-800 transition-colors"
              >
                <Mail className="w-4 h-4" />
                Contact Me
              </a>
              <a
                href="#experience"
                className="inline-flex items-center gap-2 border border-stone-300 text-stone-700 px-6 py-3 rounded-lg text-sm font-medium hover:bg-stone-100 transition-colors"
              >
                View Experience
                <ChevronDown className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Stats + photo placeholder */}
          <div className="flex flex-col gap-6 animate-fade-up delay-300">
            {/* Photo */}
            <div className="relative mx-auto lg:mx-0 w-64 h-64 lg:w-80 lg:h-80 rounded-2xl overflow-hidden border border-stone-200 shadow-xl bg-gradient-to-br from-teal-100 to-stone-200 flex items-center justify-center">
              <div className="text-center text-stone-400">
                <div className="w-20 h-20 rounded-full bg-stone-300 mx-auto mb-3 flex items-center justify-center">
                  <span className="text-2xl font-light text-stone-500">SL</span>
                </div>
                <p className="text-xs font-mono">Photo coming soon</p>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4">
              {STATS.map((stat) => (
                <div
                  key={stat.label}
                  className="bg-white border border-stone-200 rounded-xl p-4 text-center shadow-sm"
                >
                  <div className="text-2xl font-light text-teal-700 mb-1">{stat.value}</div>
                  <div className="text-xs text-stone-500 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── About ── */}
      <section id="about" className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <p className="text-xs font-mono text-teal-600 tracking-widest uppercase mb-3">About Me</p>
              <h2 className="text-3xl md:text-4xl font-light text-stone-900 mb-6">
                Patient-centered care,<br />backed by education
              </h2>
              <div className="space-y-4 text-stone-600 leading-relaxed">
                <p>
                  I have spent over a decade working directly with patients across diverse healthcare
                  settings, providing compassionate, dignified care that prioritizes the whole person -
                  not just the condition. My CNA certification and hands-on experience are the
                  foundation of everything I do.
                </p>
                <p>
                  My Bachelor of Science in Healthcare Administration has deepened my understanding
                  of how healthcare systems work - from regulatory compliance and quality improvement
                  to care coordination and organizational management. I bring both the clinical and
                  the operational perspective to every role I take on.
                </p>
                <p>
                  I am passionate about bridging the gap between frontline care teams and
                  administrative leadership, ensuring that policy decisions are grounded in
                  real patient needs and that every care environment runs with efficiency and empathy.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {CORE_VALUES.map((val) => {
                const Icon = val.icon;
                return (
                  <div
                    key={val.label}
                    className="bg-stone-50 border border-stone-100 rounded-xl p-5 hover:border-teal-200 hover:bg-teal-50/40 transition-colors group"
                  >
                    <div className="w-9 h-9 rounded-lg bg-teal-100 border border-teal-200 flex items-center justify-center mb-3 group-hover:bg-teal-700 transition-colors">
                      <Icon className="w-4 h-4 text-teal-700 group-hover:text-white transition-colors" />
                    </div>
                    <h3 className="text-sm font-semibold text-stone-800 mb-1">{val.label}</h3>
                    <p className="text-xs text-stone-500 leading-relaxed">{val.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ── Credentials ── */}
      <section id="credentials" className="py-24 bg-stone-50 border-y border-stone-100">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-xs font-mono text-teal-600 tracking-widest uppercase mb-3">Credentials</p>
            <h2 className="text-3xl md:text-4xl font-light text-stone-900">
              Certifications & Qualifications
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-16">
            {CREDENTIALS.map((cred) => {
              const Icon = cred.icon;
              const colorMap: Record<string, string> = {
                teal: "bg-teal-50 border-teal-200 text-teal-700",
                blue: "bg-blue-50 border-blue-200 text-blue-700",
                rose: "bg-rose-50 border-rose-200 text-rose-700",
              };
              const iconBg: Record<string, string> = {
                teal: "bg-teal-100 border-teal-200 text-teal-700",
                blue: "bg-blue-100 border-blue-200 text-blue-700",
                rose: "bg-rose-100 border-rose-200 text-rose-700",
              };
              return (
                <div
                  key={cred.title}
                  className="bg-white border border-stone-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden"
                >
                  {cred.placeholder && (
                    <div className="absolute top-3 right-3 text-xs font-mono text-amber-500 bg-amber-50 border border-amber-200 px-2 py-0.5 rounded-full">
                      update from resume
                    </div>
                  )}
                  <div className={`w-10 h-10 rounded-xl border flex items-center justify-center mb-4 ${iconBg[cred.color]}`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-sm font-semibold text-stone-800 mb-1 leading-snug">{cred.title}</h3>
                  <p className="text-xs text-stone-400 font-mono mb-3">{cred.issuer}</p>
                  <p className="text-xs text-stone-500 leading-relaxed">{cred.detail}</p>
                </div>
              );
            })}
          </div>

          {/* Skills grid */}
          <div className="grid md:grid-cols-3 gap-6">
            {SKILLS.map((skillGroup) => {
              const Icon = skillGroup.icon;
              return (
                <div key={skillGroup.category} className="bg-white border border-stone-200 rounded-2xl p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-8 h-8 rounded-lg bg-teal-50 border border-teal-200 flex items-center justify-center">
                      <Icon className="w-4 h-4 text-teal-700" />
                    </div>
                    <h3 className="text-sm font-semibold text-stone-800">{skillGroup.category}</h3>
                  </div>
                  <ul className="space-y-2">
                    {skillGroup.items.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-xs text-stone-600">
                        <div className="w-1 h-1 rounded-full bg-teal-400 mt-1.5 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Experience ── */}
      <section id="experience" className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-16">
            <p className="text-xs font-mono text-teal-600 tracking-widest uppercase mb-3">Experience</p>
            <h2 className="text-3xl md:text-4xl font-light text-stone-900">
              Professional History
            </h2>
            <p className="text-stone-400 text-sm mt-2 font-mono">10+ years in patient care</p>
          </div>

          <div className="space-y-6">
            {EXPERIENCE.map((job, i) => (
              <div
                key={i}
                className="relative bg-stone-50 border border-stone-200 rounded-2xl p-8 hover:border-teal-200 transition-colors"
              >
                {job.placeholder && (
                  <div className="absolute top-4 right-4 text-xs font-mono text-amber-500 bg-amber-50 border border-amber-200 px-2 py-0.5 rounded-full">
                    fill from resume
                  </div>
                )}
                <div className="flex flex-wrap items-start gap-4 mb-5">
                  <div className="flex-1 min-w-0">
                    <h3 className="text-base font-semibold text-stone-800">{job.role}</h3>
                    <p className="text-sm text-teal-700 font-medium">{job.employer}</p>
                    <div className="flex items-center gap-3 mt-1">
                      <span className="text-xs text-stone-400 font-mono">{job.period}</span>
                      <span className="text-xs text-stone-400 flex items-center gap-1">
                        <MapPin className="w-3 h-3" /> {job.location}
                      </span>
                    </div>
                  </div>
                  <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-teal-100 border border-teal-200 flex items-center justify-center">
                    <Briefcase className="w-4 h-4 text-teal-700" />
                  </div>
                </div>
                <ul className="space-y-2">
                  {job.highlights.map((highlight, j) => (
                    <li key={j} className="flex items-start gap-3 text-sm text-stone-600">
                      <div className="w-1.5 h-1.5 rounded-full bg-teal-400 mt-2 flex-shrink-0" />
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            <div className="border-2 border-dashed border-stone-200 rounded-2xl p-8 text-center text-stone-400">
              <BookOpen className="w-6 h-6 mx-auto mb-2 opacity-40" />
              <p className="text-sm font-mono">Additional roles will be added from resume</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Education ── */}
      <section id="education" className="py-24 bg-stone-50 border-y border-stone-100">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-16">
            <p className="text-xs font-mono text-teal-600 tracking-widest uppercase mb-3">Education</p>
            <h2 className="text-3xl md:text-4xl font-light text-stone-900">
              Academic Background
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {EDUCATION.map((edu, i) => (
              <div
                key={i}
                className="bg-white border border-stone-200 rounded-2xl p-6 shadow-sm relative"
              >
                {edu.placeholder && (
                  <div className="absolute top-4 right-4 text-xs font-mono text-amber-500 bg-amber-50 border border-amber-200 px-2 py-0.5 rounded-full">
                    update from resume
                  </div>
                )}
                <div className="w-10 h-10 rounded-xl bg-teal-100 border border-teal-200 flex items-center justify-center mb-4">
                  <GraduationCap className="w-5 h-5 text-teal-700" />
                </div>
                <h3 className="text-sm font-semibold text-stone-800 mb-1">{edu.degree}</h3>
                <p className="text-sm text-teal-700 font-medium">{edu.school}</p>
                <p className="text-xs text-stone-400 font-mono mb-3">{edu.year}</p>
                <p className="text-xs text-stone-500 leading-relaxed">{edu.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Contact ── */}
      <section id="contact" className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-2xl mx-auto text-center">
            <p className="text-xs font-mono text-teal-600 tracking-widest uppercase mb-3">Contact</p>
            <h2 className="text-3xl md:text-4xl font-light text-stone-900 mb-4">
              Let&apos;s Connect
            </h2>
            <p className="text-stone-500 text-sm leading-relaxed mb-10">
              Whether you&apos;re looking for a dedicated CNA for your team or interested in
              collaborating on healthcare administration initiatives, I&apos;d love to hear from you.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <a
                href="mailto:stephanie@leonenko.me"
                className="inline-flex items-center justify-center gap-2 bg-teal-700 text-white px-6 py-3 rounded-lg text-sm font-medium hover:bg-teal-800 transition-colors"
              >
                <Mail className="w-4 h-4" />
                stephanie@leonenko.me
              </a>
              <a
                href="https://linkedin.com/in/stephanie-leonenko"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 border border-stone-300 text-stone-700 px-6 py-3 rounded-lg text-sm font-medium hover:bg-stone-50 transition-colors"
              >
                <ExternalLink className="w-4 h-4" />
                LinkedIn Profile
              </a>
            </div>

            <div className="border border-stone-100 rounded-2xl p-6 bg-stone-50 text-left grid sm:grid-cols-2 gap-4">
              <div>
                <p className="text-xs font-mono text-stone-400 mb-1">Location</p>
                <p className="text-sm text-stone-700">Commack, New York</p>
              </div>
              <div>
                <p className="text-xs font-mono text-stone-400 mb-1">Status</p>
                <div className="flex items-center gap-1.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-teal-500 animate-pulse" />
                  <p className="text-sm text-stone-700">Open to opportunities</p>
                </div>
              </div>
              <div>
                <p className="text-xs font-mono text-stone-400 mb-1">Certification</p>
                <p className="text-sm text-stone-700">NY State CNA - Active</p>
              </div>
              <div>
                <p className="text-xs font-mono text-stone-400 mb-1">Education</p>
                <p className="text-sm text-stone-700">BS Healthcare Administration</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="border-t border-stone-200 bg-stone-50 py-8">
        <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-full bg-teal-700 flex items-center justify-center">
              <span className="text-white text-xs font-semibold">SL</span>
            </div>
            <span className="text-sm text-stone-500">Stephanie Leonenko</span>
          </div>
          <p className="text-xs text-stone-400 font-mono">
            CNA - BS Healthcare Administration - Commack, NY
          </p>
          <p className="text-xs text-stone-400">
            &copy; {new Date().getFullYear()} Stephanie Leonenko
          </p>
        </div>
      </footer>
    </>
  );
}
