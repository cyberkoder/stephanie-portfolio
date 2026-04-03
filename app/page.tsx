"use client";

import { useState } from "react";
import Image from "next/image";
import {
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
  Activity,
  Stethoscope,
  ClipboardList,
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
  { value: "3", label: "Active Certifications" },
  { value: "ED", label: "Emergency Department" },
  { value: "Epic", label: "EMR Proficiency" },
];

const CREDENTIALS = [
  {
    icon: Shield,
    title: "NYS Certified Nursing Assistant (CNA)",
    issuer: "New York State Department of Health",
    detail: "Active / Current - New York State CNA License",
    color: "teal",
  },
  {
    icon: Stethoscope,
    title: "NYS Patient Care Technician (PCT)",
    issuer: "New York State",
    detail: "Active / Current - Patient Care Technician License",
    color: "blue",
  },
  {
    icon: Activity,
    title: "AHA Basic Life Support (BLS)",
    issuer: "American Heart Association",
    detail: "Active / Current - BLS for Healthcare Providers",
    color: "rose",
  },
];

const SKILLS = [
  {
    category: "Patient Care",
    icon: Heart,
    items: [
      "Triage & Trauma Care Support",
      "Vital Signs Monitoring",
      "EKG Performance",
      "Wound Care & Dressing",
      "Activities of Daily Living (ADLs)",
      "Patient Comfort & Safety",
    ],
  },
  {
    category: "Clinical Skills",
    icon: Shield,
    items: [
      "Epic EMR Documentation",
      "Bladder Scan Operation",
      "Pulse Oximeter Placement",
      "Seizure Activity Monitoring",
      "Bolus Feeding Administration",
      "Infection Control Protocols",
    ],
  },
  {
    category: "Professional",
    icon: ClipboardList,
    items: [
      "High-Pressure Environment Composure",
      "Interdisciplinary Team Collaboration",
      "Patient & Family Communication",
      "Accurate Medical Documentation",
      "Pediatric Patient Care",
      "Emergency Department Workflow",
    ],
  },
];

const EXPERIENCE = [
  {
    role: "Certified Nurse's Assistant - Emergency Department",
    employer: "Northwell Health - Huntington Hospital",
    location: "Commack, NY",
    period: "2023 - Present",
    highlights: [
      "Provided essential support to the healthcare team in a fast-paced emergency department, triaging patients and assisting with trauma care",
      "Monitored vital signs and ensured patient comfort during critical moments, maintaining a calm demeanor in high-pressure situations",
      "Performed EKGs to monitor heart activity and assist in diagnosing potential cardiac issues",
      "Collaborated closely with nurses and physicians to maintain seamless department workflow where every second counts",
    ],
  },
  {
    role: "Certified Nurse's Assistant - Medical/Surgical Department",
    employer: "Northwell Health - Plainview Hospital",
    location: "Plainview, NY",
    period: "Mar 2019 - 2023",
    highlights: [
      "Assisted patients with daily activities and personal hygiene, maintaining dignity and comfort across the medical/surgical unit",
      "Monitored and recorded vital signs, collaborating with the healthcare team to ensure patient safety and comfort",
      "Performed wound care including cleaning and dressing wounds, monitoring healing progress, and reporting concerns to nursing staff",
      "Provided compassionate emotional support to patients and their families during difficult healthcare experiences",
    ],
  },
  {
    role: "Certified Nurse Assistant - Level 2",
    employer: "Providence Health - Centre For Medically Fragile Children",
    location: "Portland, OR",
    period: "Jan 2018 - Oct 2018",
    highlights: [
      "Proficiently used Epic EMR to document children's medical histories, vitals, and clinical notes with accuracy",
      "Maintained patients' physical and mental well-being through attentive, compassionate pediatric care",
      "Recorded seizure activities, conducted bladder scans, administered bolus feedings, and placed pulse oximeters",
      "Built trust with young patients and families, fostering healing and hope in a specialized care environment",
    ],
  },
  {
    role: "Certified Nurse's Assistant - Medical/Surgical, Medically Fragile Children",
    employer: "South Nassau Communities Hospital",
    location: "Oceanside, NY",
    period: "2013 - 2018",
    highlights: [
      "Provided compassionate Med/Surg care with a focus on medically fragile pediatric patients over a 5-year tenure",
      "Assisted with daily activities, personal hygiene, and mobility for patients with complex and chronic conditions",
      "Monitored vital signs and documented clinical observations, communicating changes promptly to nursing staff",
      "Developed deep expertise in the unique physical and emotional needs of medically fragile children and their families",
    ],
  },
];

const EDUCATION = [
  {
    degree: "Bachelor of Science - Healthcare Administration",
    school: "University",
    year: "In Progress",
    detail: "Comprehensive study of healthcare systems, policy, finance, and organizational management",
  },
  {
    degree: "NYS High School Diploma",
    school: "New York State",
    year: "June 2012",
    detail: "Graduated June 2012",
  },
];

const CORE_VALUES = [
  { icon: Heart, label: "Compassion", desc: "Every patient deserves dignity and genuine, attentive care." },
  { icon: Shield, label: "Integrity", desc: "Honest, ethical practice in every clinical interaction." },
  { icon: Users, label: "Teamwork", desc: "Healthcare is a team effort - I show up for my colleagues." },
  { icon: Star, label: "Excellence", desc: "High standards, accurate documentation, continuous growth." },
];

// ─── Navbar ───────────────────────────────────────────────────────────────────

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 inset-x-0 z-50 bg-stone-50/90 backdrop-blur-md border-b border-stone-200/60">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#" className="font-medium text-stone-800 tracking-tight hover:text-teal-700 transition-colors">
          Stephanie Leonenko
        </a>

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

        <button
          className="md:hidden text-stone-500"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

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

            <p className="text-lg text-stone-600 font-medium mb-2 animate-fade-up delay-200">
              Certified Nursing Assistant - Patient Care Technician
            </p>
            <p className="text-sm text-stone-400 mb-8 flex items-center gap-1.5 animate-fade-up delay-200">
              <MapPin className="w-3.5 h-3.5" /> Commack, New York
            </p>

            <p className="text-base text-stone-600 leading-relaxed mb-10 max-w-lg animate-fade-up delay-300">
              A dedicated healthcare professional with over 10 years of hands-on patient
              care experience across emergency, medical/surgical, and pediatric settings.
              Known for compassionate, dignified care, accurate Epic EMR documentation,
              and calm performance in high-pressure environments. Holding active NYS CNA,
              PCT, and AHA BLS certifications.
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

          <div className="flex flex-col gap-6 animate-fade-up delay-300">
            {/* Profile photo */}
            <div className="relative mx-auto lg:mx-0 w-64 h-64 lg:w-80 lg:h-80 rounded-2xl overflow-hidden border border-stone-200 shadow-xl">
              <Image
                src="/stephanie.jpg"
                alt="Stephanie Leonenko"
                fill
                sizes="(max-width: 1024px) 256px, 320px"
                className="object-cover object-top"
                priority
              />
              {/* subtle vignette */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent" />
            </div>

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
                Patient-centered care<br />across every setting
              </h2>
              <div className="space-y-4 text-stone-600 leading-relaxed">
                <p>
                  I am a dedicated and experienced Certified Nursing Assistant with over 10 years
                  of experience seeking to advance my career as a medical assistant. Throughout
                  my career, I have demonstrated a commitment to providing compassionate care to
                  patients in diverse healthcare settings.
                </p>
                <p>
                  Proficient in utilizing electronic medical record systems such as Epic, I
                  prioritize accurate documentation and seamless patient care delivery. My
                  experience spans emergency departments, medical/surgical floors, and specialized
                  pediatric care for medically fragile children.
                </p>
                <p>
                  My strong communication skills, attention to detail, and unwavering dedication
                  to delivering high-quality care have enabled me to make a positive impact on
                  the lives of those I serve - from trauma patients in the ED to the youngest,
                  most vulnerable patients in pediatric care.
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
              Licenses & Certifications
            </h2>
            <p className="text-stone-400 text-sm mt-2">All certifications Active / Current</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-16">
            {CREDENTIALS.map((cred) => {
              const Icon = cred.icon;
              const iconBg: Record<string, string> = {
                teal: "bg-teal-100 border-teal-200 text-teal-700",
                blue: "bg-blue-100 border-blue-200 text-blue-700",
                rose: "bg-rose-100 border-rose-200 text-rose-700",
              };
              const badgeBg: Record<string, string> = {
                teal: "bg-teal-50 text-teal-700 border-teal-200",
                blue: "bg-blue-50 text-blue-700 border-blue-200",
                rose: "bg-rose-50 text-rose-700 border-rose-200",
              };
              return (
                <div
                  key={cred.title}
                  className="bg-white border border-stone-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className={`w-10 h-10 rounded-xl border flex items-center justify-center mb-4 ${iconBg[cred.color]}`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-sm font-semibold text-stone-800 mb-1 leading-snug">{cred.title}</h3>
                  <p className="text-xs text-stone-400 font-mono mb-3">{cred.issuer}</p>
                  <span className={`inline-flex items-center gap-1 text-xs font-medium px-2 py-0.5 rounded-full border ${badgeBg[cred.color]}`}>
                    <div className="w-1 h-1 rounded-full bg-current animate-pulse" />
                    {cred.detail}
                  </span>
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
            <p className="text-stone-400 text-sm mt-2 font-mono">10+ years across ED, Med/Surg, and Medically Fragile Pediatric settings</p>
          </div>

          {/* Timeline */}
          <div className="relative">
            <div className="absolute left-5 top-0 bottom-0 w-px bg-stone-100 hidden md:block" />

            <div className="space-y-8">
              {EXPERIENCE.map((job, i) => (
                <div key={i} className="relative md:pl-16">
                  {/* Timeline dot */}
                  <div className="hidden md:flex absolute left-0 top-6 w-10 h-10 rounded-full bg-white border-2 border-teal-200 items-center justify-center shadow-sm">
                    <Briefcase className="w-4 h-4 text-teal-600" />
                  </div>

                  <div className="bg-stone-50 border border-stone-200 rounded-2xl p-8 hover:border-teal-200 transition-colors">
                    <div className="flex flex-wrap items-start gap-3 mb-5">
                      <div className="flex-1 min-w-0">
                        <h3 className="text-base font-semibold text-stone-800">{job.role}</h3>
                        <p className="text-sm text-teal-700 font-semibold mt-0.5">{job.employer}</p>
                        <div className="flex flex-wrap items-center gap-3 mt-1.5">
                          <span className="inline-flex items-center gap-1 text-xs text-stone-400 font-mono">
                            <MapPin className="w-3 h-3" /> {job.location}
                          </span>
                          <span className="inline-flex items-center gap-1 text-xs bg-teal-50 text-teal-700 border border-teal-200 px-2 py-0.5 rounded-full font-medium">
                            {i === 0 && <div className="w-1 h-1 rounded-full bg-teal-500 animate-pulse" />}
                            {job.period}
                          </span>
                        </div>
                      </div>
                    </div>
                    <ul className="space-y-2.5">
                      {job.highlights.map((highlight, j) => (
                        <li key={j} className="flex items-start gap-3 text-sm text-stone-600">
                          <div className="w-1.5 h-1.5 rounded-full bg-teal-400 mt-2 flex-shrink-0" />
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
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
                className="bg-white border border-stone-200 rounded-2xl p-6 shadow-sm"
              >
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
              Looking for a compassionate, experienced CNA or PCT for your team?
              I&apos;d love to hear from you.
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
                href="tel:+13479751512"
                className="inline-flex items-center justify-center gap-2 border border-stone-300 text-stone-700 px-6 py-3 rounded-lg text-sm font-medium hover:bg-stone-50 transition-colors"
              >
                <Phone className="w-4 h-4" />
                +1 (347) 975-1512
              </a>
            </div>


            <div className="border border-stone-100 rounded-2xl p-6 bg-stone-50 text-left grid sm:grid-cols-2 gap-4">
              <div>
                <p className="text-xs font-mono text-stone-400 mb-1">Location</p>
                <p className="text-sm text-stone-700">Commack, New York 11725</p>
              </div>
              <div>
                <p className="text-xs font-mono text-stone-400 mb-1">Status</p>
                <div className="flex items-center gap-1.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-teal-500 animate-pulse" />
                  <p className="text-sm text-stone-700">Open to opportunities</p>
                </div>
              </div>
              <div>
                <p className="text-xs font-mono text-stone-400 mb-1">Certifications</p>
                <p className="text-sm text-stone-700">NYS CNA, NYS PCT, AHA BLS - Active</p>
              </div>
              <div>
                <p className="text-xs font-mono text-stone-400 mb-1">EMR Systems</p>
                <p className="text-sm text-stone-700">Epic (Proficient)</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="border-t border-stone-200 bg-stone-50 py-8">
        <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="text-sm text-stone-500">Stephanie Leonenko</span>
          </div>
          <p className="text-xs text-stone-400 font-mono">
            NYS CNA - NYS PCT - AHA BLS - Commack, NY
          </p>
          <p className="text-xs text-stone-400">
            &copy; {new Date().getFullYear()} Stephanie Leonenko
          </p>
        </div>
      </footer>
    </>
  );
}
