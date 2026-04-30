"use client";

import { useState } from "react";
import Image from "next/image";
import { ObfuscatedEmail, ObfuscatedPhone } from "./components/ObfuscatedContact";
import {
  Briefcase,
  GraduationCap,
  Heart,
  Mail,
  MapPin,
  Shield,
  Star,
  Users,
  ChevronDown,
  Menu,
  X,
  Activity,
  Stethoscope,
  ClipboardList,
  LayoutDashboard,
  Droplets,
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
  { value: "10+", label: "Years in Healthcare" },
  { value: "4", label: "Active Licenses" },
  { value: "BS", label: "Healthcare Admin (In Progress)" },
  { value: "Epic", label: "EMR Proficiency" },
];

const CREDENTIALS = [
  {
    icon: Shield,
    title: "NYS Certified Nursing Assistant (CNA)",
    issuer: "New York State Department of Health",
    type: "State License",
    color: "teal",
  },
  {
    icon: Stethoscope,
    title: "NYS Patient Care Technician (PCT)",
    issuer: "New York State",
    type: "State License",
    color: "blue",
  },
  {
    icon: Activity,
    title: "AHA Basic Life Support (BLS)",
    issuer: "American Heart Association",
    type: "Certification",
    color: "rose",
  },
  {
    icon: Droplets,
    title: "Licensed Phlebotomist",
    issuer: "New York State",
    type: "State License",
    color: "purple",
  },
];

const SKILLS = [
  {
    category: "Healthcare Administration",
    icon: LayoutDashboard,
    items: [
      "Healthcare Policy & Regulatory Compliance",
      "HIPAA & OSHA Standards",
      "Quality Improvement (QI) Initiatives",
      "Staff Scheduling & Workforce Coordination",
      "Patient Experience & Satisfaction Metrics",
      "Care Coordination & Case Management",
      "Budget & Resource Management",
      "Joint Commission Accreditation Standards",
      "Healthcare Informatics & Data Reporting",
      "Risk Management & Patient Safety",
      "Strategic Operations Planning",
      "Performance Metrics & Outcome Tracking",
    ],
  },
  {
    category: "Operations & Leadership",
    icon: ClipboardList,
    items: [
      "ED Workflow & Throughput Optimization",
      "Interdisciplinary Team Collaboration",
      "Patient & Family Communication",
      "Accurate Clinical Documentation",
      "High-Pressure Environment Management",
      "Cross-departmental Coordination",
    ],
  },
  {
    category: "Clinical Knowledge",
    icon: Heart,
    items: [
      "Triage & Trauma Care Protocols",
      "Vital Signs & Patient Monitoring",
      "EKG Performance & Interpretation Support",
      "Wound Care Management",
      "Pediatric & Medically Fragile Patient Care",
      "Infection Control Protocols",
    ],
  },
  {
    category: "Systems & Compliance",
    icon: Shield,
    items: [
      "Epic EMR (Proficient)",
      "Phlebotomy & Specimen Handling",
      "HIPAA-Compliant Documentation",
      "Regulatory Reporting",
      "Bladder Scan & Clinical Equipment",
      "Northwell Health Protocols",
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
    role: "Certified Nurse Assistant - Medically Fragile Children",
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
    role: "Certified Nurse's Assistant - Medical/Surgical",
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
    school: "Southern New Hampshire University (SNHU)",
    year: "Expected February 2027",
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
  { icon: Heart, label: "Patient Focus", desc: "Every administrative decision should trace back to better patient outcomes." },
  { icon: Shield, label: "Compliance", desc: "HIPAA, OSHA, and Joint Commission standards are non-negotiable." },
  { icon: Users, label: "Leadership", desc: "Bridging clinical staff and administration through clear communication." },
  { icon: Star, label: "Continuous Improvement", desc: "QI initiatives, data-driven decisions, and relentless process refinement." },
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
            href="/resume"
            className="text-sm border border-stone-300 text-stone-700 px-4 py-2 rounded-lg hover:bg-stone-100 transition-colors font-medium"
          >
            Resume
          </a>
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
            href="/resume"
            onClick={() => setOpen(false)}
            className="text-sm border border-stone-300 text-stone-700 px-4 py-2 rounded-lg text-center font-medium"
          >
            Resume
          </a>
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
      <section className="min-h-screen flex flex-col justify-center pt-16 bg-gradient-to-br from-stone-50 via-teal-50/30 to-stone-100 overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 py-16 grid lg:grid-cols-2 gap-12 lg:gap-20 items-stretch min-h-[calc(100vh-4rem)]">

          {/* Left: text + stats */}
          <div className="flex flex-col justify-center py-8">
            <div className="inline-flex items-center gap-2 bg-teal-50 border border-teal-200 text-teal-800 text-xs font-mono px-3 py-1.5 rounded-full mb-6 animate-fade-up w-fit">
              <div className="w-1.5 h-1.5 rounded-full bg-teal-500 animate-pulse" />
              Seeking Healthcare Administration Roles
            </div>

            <h1 className="text-5xl md:text-6xl font-light text-stone-900 leading-tight mb-4 animate-fade-up delay-100">
              Stephanie
              <br />
              <span className="text-teal-700 font-normal">Leonenko</span>
            </h1>

            <p className="text-lg text-stone-600 font-medium mb-2 animate-fade-up delay-200">
              Healthcare Administration Professional
            </p>
            <p className="text-sm text-stone-400 mb-8 flex items-center gap-1.5 animate-fade-up delay-200">
              <MapPin className="w-3.5 h-3.5" /> Commack, New York
            </p>

            <p className="text-base text-stone-600 leading-relaxed mb-8 max-w-lg animate-fade-up delay-300">
              A healthcare professional with 10+ years of frontline clinical experience
              transitioning into healthcare administration. Pursuing a BS in Healthcare
              Administration at SNHU, with hands-on knowledge of ED operations, care
              coordination, regulatory compliance, and Epic EMR. Holding active NYS CNA,
              PCT, BLS, and Phlebotomy licenses.
            </p>

            <div className="flex flex-wrap gap-3 mb-10 animate-fade-up delay-400">
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

            {/* Stats row */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 animate-fade-up delay-500">
              {STATS.map((stat) => (
                <div
                  key={stat.label}
                  className="bg-white border border-stone-200 rounded-xl p-4 text-center shadow-sm"
                >
                  <div className="text-2xl font-light text-teal-700 mb-1">{stat.value}</div>
                  <div className="text-xs text-stone-500 font-medium leading-tight">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: photo */}
          <div className="hidden lg:flex items-center justify-center animate-fade-up delay-200">
            <div className="relative w-full max-w-sm h-[520px] rounded-2xl overflow-hidden border border-stone-200 shadow-2xl">
              <Image
                src="/stephanie-hero.png"
                alt="Stephanie Leonenko"
                fill
                sizes="420px"
                className="object-cover object-top"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent" />
            </div>
          </div>

          {/* Mobile photo */}
          <div className="lg:hidden relative w-52 h-64 mx-auto rounded-2xl overflow-hidden border border-stone-200 shadow-xl animate-fade-up delay-200">
            <Image
              src="/stephanie-hero.png"
              alt="Stephanie Leonenko"
              fill
              sizes="208px"
              className="object-cover object-top"
              priority
            />
          </div>

        </div>
      </section>

      {/* ── About ── */}
      <section id="about" className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          {/* Photo strip */}
          <div className="flex gap-4 mb-16 overflow-x-auto pb-2">
            <div className="relative flex-shrink-0 w-56 h-64 rounded-2xl overflow-hidden border border-stone-200 shadow-md">
              <Image
                src="/stephanie-hero.png"
                alt="Stephanie Leonenko"
                fill
                sizes="224px"
                className="object-cover object-top"
              />
            </div>
            <div className="relative flex-shrink-0 w-56 h-64 rounded-2xl overflow-hidden border border-stone-200 shadow-md">
              <Image
                src="/stephanie-work.png"
                alt="Stephanie Leonenko at work"
                fill
                sizes="224px"
                className="object-cover object-top"
              />
            </div>
            <div className="relative flex-shrink-0 w-56 h-64 rounded-2xl overflow-hidden border border-stone-200 shadow-md">
              <Image
                src="/stephanie-clinical.png"
                alt="Stephanie Leonenko in clinical setting"
                fill
                sizes="224px"
                className="object-cover object-center"
              />
            </div>
            <div className="relative flex-shrink-0 w-56 h-64 rounded-2xl overflow-hidden border border-stone-200 shadow-md">
              <Image
                src="/stephanie-scrubs.png"
                alt="Stephanie Leonenko at the hospital"
                fill
                sizes="224px"
                className="object-cover object-top"
              />
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <p className="text-xs font-mono text-teal-600 tracking-widest uppercase mb-3">About Me</p>
              <h2 className="text-3xl md:text-4xl font-light text-stone-900 mb-6">
                Clinical roots.<br />Administrative vision.
              </h2>
              <div className="space-y-4 text-stone-600 leading-relaxed">
                <p>
                  With over 10 years of frontline experience at Northwell Health and other leading
                  systems, I bring a ground-level understanding of what makes healthcare operations
                  work — and where they break down. That perspective is rare in administration,
                  and it drives everything I do.
                </p>
                <p>
                  I am currently pursuing a BS in Healthcare Administration at Southern New Hampshire
                  University, building fluency in healthcare policy, finance, quality improvement,
                  regulatory compliance, and organizational leadership — skills I am actively applying
                  to move into an administrative role.
                </p>
                <p>
                  From managing ED workflow under pressure to ensuring HIPAA-compliant Epic
                  documentation across departments, I understand both the clinical and operational
                  sides of patient care delivery. My goal is to bring that dual perspective into
                  a leadership role that improves outcomes at scale.
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
            <p className="text-stone-400 text-sm mt-2">All licenses Active / Current — backed by 10+ years of clinical application</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {CREDENTIALS.map((cred) => {
              const Icon = cred.icon;
              const iconBg: Record<string, string> = {
                teal: "bg-teal-100 border-teal-200 text-teal-700",
                blue: "bg-blue-100 border-blue-200 text-blue-700",
                rose: "bg-rose-100 border-rose-200 text-rose-700",
                purple: "bg-purple-100 border-purple-200 text-purple-700",
              };
              const badgeBg: Record<string, string> = {
                teal: "bg-teal-50 text-teal-700 border-teal-200",
                blue: "bg-blue-50 text-blue-700 border-blue-200",
                rose: "bg-rose-50 text-rose-700 border-rose-200",
                purple: "bg-purple-50 text-purple-700 border-purple-200",
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
                  <span className={`inline-flex items-center text-xs font-medium px-2 py-0.5 rounded-full border ${badgeBg[cred.color]}`}>
                    {cred.type}
                  </span>
                </div>
              );
            })}
          </div>

          {/* Skills grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SKILLS.map((skillGroup) => {
              const Icon = skillGroup.icon;
              const isAdmin = skillGroup.category === "Healthcare Administration";
              return (
                <div
                  key={skillGroup.category}
                  className={`bg-white border rounded-2xl p-6 ${isAdmin ? "md:col-span-2 lg:col-span-3 border-teal-200 shadow-sm" : "border-stone-200"}`}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`w-8 h-8 rounded-lg border flex items-center justify-center ${isAdmin ? "bg-teal-700 border-teal-700" : "bg-teal-50 border-teal-200"}`}>
                      <Icon className={`w-4 h-4 ${isAdmin ? "text-white" : "text-teal-700"}`} />
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-stone-800">{skillGroup.category}</h3>
                      {isAdmin && (
                        <p className="text-xs text-teal-600 mt-0.5 font-medium">Core focus area — BS Healthcare Administration (SNHU)</p>
                      )}
                    </div>
                  </div>
                  <ul className={`gap-2 ${isAdmin ? "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4" : "space-y-2"}`}>
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
            <p className="text-stone-400 text-sm mt-2 font-mono">10+ years at Northwell Health and leading healthcare systems — ED, Med/Surg, and Pediatric</p>
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
              Interested in a healthcare administration candidate with real clinical depth?
              I&apos;d love to connect.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <ObfuscatedEmail className="inline-flex items-center justify-center gap-2 bg-teal-700 text-white px-6 py-3 rounded-lg text-sm font-medium hover:bg-teal-800 transition-colors cursor-pointer border-0" />
              <ObfuscatedPhone className="inline-flex items-center justify-center gap-2 border border-stone-300 text-stone-700 px-6 py-3 rounded-lg text-sm font-medium hover:bg-stone-50 transition-colors cursor-pointer bg-transparent" />
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
                  <p className="text-sm text-stone-700">Seeking Healthcare Administration roles</p>
                </div>
              </div>
              <div>
                <p className="text-xs font-mono text-stone-400 mb-1">Licenses</p>
                <p className="text-sm text-stone-700">NYS CNA, NYS PCT, AHA BLS, Phlebotomist — Active</p>
              </div>
              <div>
                <p className="text-xs font-mono text-stone-400 mb-1">Education</p>
                <p className="text-sm text-stone-700">BS Healthcare Administration, SNHU (In Progress)</p>
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
            Healthcare Administration | BS SNHU (In Progress) | NYS CNA · PCT · BLS · Phlebotomist
          </p>
          <p className="text-xs text-stone-400">
            &copy; {new Date().getFullYear()} Stephanie Leonenko
          </p>
        </div>
      </footer>
    </>
  );
}
