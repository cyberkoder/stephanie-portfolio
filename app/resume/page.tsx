"use client";

export default function ResumePage() {
  return (
    <>
      {/* Print button — hidden when printing */}
      <div className="print:hidden fixed top-0 inset-x-0 z-50 bg-white border-b border-stone-200 px-6 py-3 flex items-center justify-between">
        <a href="/" className="text-sm text-stone-500 hover:text-teal-700 transition-colors">
          ← Back to Portfolio
        </a>
        <button
          onClick={() => window.print()}
          className="text-sm bg-teal-700 text-white px-5 py-2 rounded-lg hover:bg-teal-800 transition-colors font-medium"
        >
          Download / Print PDF
        </button>
      </div>

      {/* Resume */}
      <main className="print:pt-0 pt-14 bg-white min-h-screen">
        <div className="max-w-[760px] mx-auto px-10 py-10 print:py-8 print:px-8">

          {/* Header */}
          <header className="mb-6 pb-5 border-b border-stone-200">
            <h1 className="text-3xl font-bold text-stone-900 tracking-tight mb-1">Stephanie Leonenko</h1>
            <p className="text-base text-teal-700 font-semibold mb-3">Healthcare Administration Professional</p>
            <div className="flex flex-wrap gap-x-5 gap-y-1 text-sm text-stone-600">
              <span>Commack, NY 11725</span>
              <span>stephanie@leonenko.me</span>
              <span>+1 (347) 975-1512</span>
            </div>
          </header>

          {/* Summary */}
          <section className="mb-6">
            <h2 className="text-xs font-bold text-teal-700 tracking-widest uppercase mb-2">Professional Summary</h2>
            <p className="text-sm text-stone-700 leading-relaxed">
              Healthcare professional with 10+ years of frontline clinical experience at Northwell Health and other leading
              systems, transitioning into healthcare administration. Pursuing a BS in Healthcare Administration at Southern
              New Hampshire University, with demonstrated knowledge of ED operations, care coordination, regulatory compliance,
              HIPAA/OSHA standards, and Epic EMR. Holds active NYS CNA, PCT, BLS, and Phlebotomy licenses. Brings rare
              dual perspective — clinical depth combined with administrative training — to drive operational improvements
              and patient-centered outcomes at scale.
            </p>
          </section>

          {/* Licenses & Certifications */}
          <section className="mb-6">
            <h2 className="text-xs font-bold text-teal-700 tracking-widest uppercase mb-2">Licenses &amp; Certifications</h2>
            <div className="grid grid-cols-2 gap-x-8 gap-y-1 text-sm text-stone-700">
              <div className="flex items-start gap-2">
                <span className="text-teal-500 mt-0.5">•</span>
                <span><strong>NYS Certified Nursing Assistant (CNA)</strong> — Active</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-teal-500 mt-0.5">•</span>
                <span><strong>NYS Patient Care Technician (PCT)</strong> — Active</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-teal-500 mt-0.5">•</span>
                <span><strong>AHA Basic Life Support (BLS)</strong> — Active</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-teal-500 mt-0.5">•</span>
                <span><strong>Licensed Phlebotomist (NYS)</strong> — Active</span>
              </div>
            </div>
          </section>

          {/* Skills */}
          <section className="mb-6">
            <h2 className="text-xs font-bold text-teal-700 tracking-widest uppercase mb-2">Core Competencies</h2>
            <div className="grid grid-cols-2 gap-x-8 gap-y-0.5 text-sm text-stone-700">
              {[
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
                "Epic EMR (Proficient)",
                "ED Workflow & Throughput Optimization",
                "Interdisciplinary Team Collaboration",
                "Accurate Clinical Documentation",
              ].map((skill) => (
                <div key={skill} className="flex items-start gap-2">
                  <span className="text-teal-500 mt-0.5 flex-shrink-0">•</span>
                  <span>{skill}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Experience */}
          <section className="mb-6">
            <h2 className="text-xs font-bold text-teal-700 tracking-widest uppercase mb-3">Professional Experience</h2>
            <div className="space-y-5">

              <div>
                <div className="flex items-start justify-between gap-4 mb-1">
                  <div>
                    <h3 className="text-sm font-bold text-stone-900">Certified Nurse's Assistant — Emergency Department</h3>
                    <p className="text-sm text-teal-700 font-semibold">Northwell Health — Huntington Hospital, Huntington, NY</p>
                  </div>
                  <span className="text-xs text-stone-500 font-mono whitespace-nowrap mt-0.5">2023 — Present</span>
                </div>
                <ul className="space-y-1 text-sm text-stone-700">
                  <li className="flex items-start gap-2"><span className="text-teal-500 mt-0.5 flex-shrink-0">•</span>Provided essential support to the healthcare team in a high-volume emergency department, assisting with triage, trauma care, and patient throughput</li>
                  <li className="flex items-start gap-2"><span className="text-teal-500 mt-0.5 flex-shrink-0">•</span>Monitored vital signs and ensured patient comfort during critical moments, maintaining composure in high-pressure situations</li>
                  <li className="flex items-start gap-2"><span className="text-teal-500 mt-0.5 flex-shrink-0">•</span>Performed EKGs to support cardiac monitoring and assist in diagnosing potential cardiac events</li>
                  <li className="flex items-start gap-2"><span className="text-teal-500 mt-0.5 flex-shrink-0">•</span>Collaborated with nurses and physicians to maintain seamless department workflow and uphold quality care standards</li>
                </ul>
              </div>

              <div>
                <div className="flex items-start justify-between gap-4 mb-1">
                  <div>
                    <h3 className="text-sm font-bold text-stone-900">Certified Nurse's Assistant — Medical/Surgical Department</h3>
                    <p className="text-sm text-teal-700 font-semibold">Northwell Health — Plainview Hospital, Plainview, NY</p>
                  </div>
                  <span className="text-xs text-stone-500 font-mono whitespace-nowrap mt-0.5">Mar 2019 — 2023</span>
                </div>
                <ul className="space-y-1 text-sm text-stone-700">
                  <li className="flex items-start gap-2"><span className="text-teal-500 mt-0.5 flex-shrink-0">•</span>Assisted patients with daily activities and personal hygiene, maintaining dignity and comfort across the medical/surgical unit</li>
                  <li className="flex items-start gap-2"><span className="text-teal-500 mt-0.5 flex-shrink-0">•</span>Monitored and documented vital signs, collaborating with the care team to ensure patient safety and prompt response to changes</li>
                  <li className="flex items-start gap-2"><span className="text-teal-500 mt-0.5 flex-shrink-0">•</span>Performed wound care including cleaning, dressing, monitoring healing progress, and reporting concerns to nursing staff</li>
                  <li className="flex items-start gap-2"><span className="text-teal-500 mt-0.5 flex-shrink-0">•</span>Provided compassionate emotional support to patients and families during acute healthcare episodes</li>
                </ul>
              </div>

              <div>
                <div className="flex items-start justify-between gap-4 mb-1">
                  <div>
                    <h3 className="text-sm font-bold text-stone-900">Certified Nurse Assistant — Medically Fragile Children</h3>
                    <p className="text-sm text-teal-700 font-semibold">Providence Health — Centre For Medically Fragile Children</p>
                  </div>
                  <span className="text-xs text-stone-500 font-mono whitespace-nowrap mt-0.5">Jan 2018 — Oct 2018</span>
                </div>
                <ul className="space-y-1 text-sm text-stone-700">
                  <li className="flex items-start gap-2"><span className="text-teal-500 mt-0.5 flex-shrink-0">•</span>Proficiently used Epic EMR to document children's medical histories, vitals, and clinical notes with precision</li>
                  <li className="flex items-start gap-2"><span className="text-teal-500 mt-0.5 flex-shrink-0">•</span>Monitored seizure activity, conducted bladder scans, administered bolus feedings, and placed pulse oximeters</li>
                  <li className="flex items-start gap-2"><span className="text-teal-500 mt-0.5 flex-shrink-0">•</span>Maintained physical and mental well-being of medically fragile pediatric patients through attentive, specialized care</li>
                </ul>
              </div>

              <div>
                <div className="flex items-start justify-between gap-4 mb-1">
                  <div>
                    <h3 className="text-sm font-bold text-stone-900">Certified Nurse's Assistant — Medical/Surgical</h3>
                    <p className="text-sm text-teal-700 font-semibold">South Nassau Communities Hospital, Oceanside, NY</p>
                  </div>
                  <span className="text-xs text-stone-500 font-mono whitespace-nowrap mt-0.5">2013 — 2018</span>
                </div>
                <ul className="space-y-1 text-sm text-stone-700">
                  <li className="flex items-start gap-2"><span className="text-teal-500 mt-0.5 flex-shrink-0">•</span>Delivered 5 years of compassionate Med/Surg care with specialization in medically fragile pediatric patients</li>
                  <li className="flex items-start gap-2"><span className="text-teal-500 mt-0.5 flex-shrink-0">•</span>Assisted with daily activities, personal hygiene, and mobility for patients with complex and chronic conditions</li>
                  <li className="flex items-start gap-2"><span className="text-teal-500 mt-0.5 flex-shrink-0">•</span>Monitored vital signs and documented clinical observations, communicating changes promptly to nursing staff</li>
                </ul>
              </div>

            </div>
          </section>

          {/* Education */}
          <section className="mb-6">
            <h2 className="text-xs font-bold text-teal-700 tracking-widest uppercase mb-2">Education</h2>
            <div className="space-y-3">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-sm font-bold text-stone-900">Bachelor of Science — Healthcare Administration</h3>
                  <p className="text-sm text-stone-600">Southern New Hampshire University (SNHU)</p>
                  <p className="text-xs text-stone-400">Healthcare systems, policy, finance, and organizational management</p>
                </div>
                <span className="text-xs text-stone-500 font-mono whitespace-nowrap mt-0.5">In Progress</span>
              </div>
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-sm font-bold text-stone-900">NYS High School Diploma</h3>
                  <p className="text-sm text-stone-600">New York State</p>
                </div>
                <span className="text-xs text-stone-500 font-mono whitespace-nowrap mt-0.5">June 2012</span>
              </div>
            </div>
          </section>

        </div>
      </main>

      <style>{`
        @media print {
          @page { margin: 0.6in 0.7in; size: letter; }
          body { -webkit-print-color-adjust: exact; print-color-adjust: exact; }
        }
      `}</style>
    </>
  );
}
