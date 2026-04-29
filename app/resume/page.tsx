"use client";

export default function ResumePage() {
  return (
    <>
      <div className="print:hidden fixed top-0 inset-x-0 z-50 bg-white border-b border-stone-200 px-6 py-3 flex items-center justify-between gap-4">
        <a href="/" className="text-sm text-stone-500 hover:text-teal-700 transition-colors">
          &larr; Back to Portfolio
        </a>
        <div className="flex items-center gap-4">
          <p className="text-xs text-stone-400 hidden sm:block">Tip: in print dialog, set Headers &amp; Footers to <strong>Off</strong></p>
          <button
            onClick={() => window.print()}
            className="text-sm bg-teal-700 text-white px-5 py-2 rounded-lg hover:bg-teal-800 transition-colors font-medium"
          >
            Download / Print PDF
          </button>
        </div>
      </div>

      <main className="print:pt-0 pt-14 bg-white min-h-screen">
        <div className="max-w-[760px] mx-auto px-10 py-10 print:py-8 print:px-8 font-sans">

          {/* ── Header ── */}
          <header className="mb-5 pb-4 border-b-2 border-teal-600">
            <h1 className="text-[26px] font-bold text-stone-900 tracking-tight mb-0.5">Stephanie Leonenko</h1>
            <p className="text-sm font-semibold text-teal-700 mb-2">Healthcare Administration | Operations | Care Coordination</p>
            <p className="text-sm text-stone-600">
              Commack, NY &nbsp;|&nbsp; stephanie@leonenko.me &nbsp;|&nbsp; (347) 975-1512
            </p>
          </header>

          {/* ── Summary ── */}
          <section className="mb-5">
            <h2 className="text-sm font-bold text-teal-700 uppercase tracking-wide border-b border-teal-200 pb-0.5 mb-2">
              Professional Summary
            </h2>
            <p className="text-sm text-stone-700 leading-relaxed">
              Healthcare Administration professional with 10+ years of progressive clinical operations experience across
              emergency, medical/surgical, and pediatric care settings at Northwell Health and other major health systems.
              Pursuing a Bachelor of Science in Healthcare Administration (SNHU), with applied knowledge of healthcare
              operations management, regulatory compliance (HIPAA, OSHA, Joint Commission), quality improvement, care
              coordination, and Epic EMR. Holds four active NYS and national licenses. Brings a rare combination of
              frontline patient care expertise and administrative education to support operational excellence, staff
              coordination, and patient-centered outcomes.
            </p>
          </section>

          {/* ── Core Competencies ── */}
          <section className="mb-5">
            <h2 className="text-sm font-bold text-teal-700 uppercase tracking-wide border-b border-teal-200 pb-0.5 mb-2">
              Core Competencies
            </h2>
            <div className="grid grid-cols-3 gap-x-4 gap-y-0.5 text-sm text-stone-700">
              {[
                "Healthcare Operations Management",
                "Regulatory Compliance (HIPAA, OSHA)",
                "Quality Improvement (QI / PI)",
                "Care Coordination & Case Management",
                "Patient Safety & Risk Management",
                "Joint Commission Standards",
                "Staff Scheduling & Workforce Planning",
                "Patient Experience & Satisfaction",
                "Budget & Resource Management",
                "Healthcare Informatics & Reporting",
                "Epic EMR (Proficient)",
                "ED Workflow & Patient Throughput",
                "Interdisciplinary Team Leadership",
                "Clinical Documentation & Compliance",
                "Strategic Planning & Performance Metrics",
              ].map((skill) => (
                <div key={skill} className="flex items-start gap-1.5">
                  <span className="mt-1 flex-shrink-0 text-teal-500 text-[10px]">&#9632;</span>
                  <span className="leading-snug">{skill}</span>
                </div>
              ))}
            </div>
          </section>

          {/* ── Work Experience ── */}
          <section className="mb-5">
            <h2 className="text-sm font-bold text-stone-900 uppercase tracking-wide border-b border-stone-300 pb-0.5 mb-3">
              Work Experience
            </h2>
            <div className="space-y-4">

              <div>
                <div className="flex items-baseline justify-between gap-2 mb-0.5">
                  <h3 className="text-sm font-bold text-stone-900">Patient Care Technician / Certified Nursing Assistant</h3>
                  <span className="text-xs text-stone-500 whitespace-nowrap">2023 - Present</span>
                </div>
                <p className="text-sm font-semibold text-teal-700 mb-1">Northwell Health - Huntington Hospital | Huntington, NY | Emergency Department</p>
                <ul className="space-y-0.5 text-sm text-stone-700 list-none">
                  <li className="flex items-start gap-2"><span className="flex-shrink-0 mt-0.5">-</span>Supported high-volume ED operations including patient triage, trauma care assistance, and throughput coordination across a fast-paced emergency department</li>
                  <li className="flex items-start gap-2"><span className="flex-shrink-0 mt-0.5">-</span>Monitored and documented patient vital signs using Epic EMR, ensuring accurate real-time clinical data for the care team</li>
                  <li className="flex items-start gap-2"><span className="flex-shrink-0 mt-0.5">-</span>Performed 12-lead EKGs to support cardiac monitoring and assist physicians in diagnosing cardiac events</li>
                  <li className="flex items-start gap-2"><span className="flex-shrink-0 mt-0.5">-</span>Collaborated with interdisciplinary teams including nurses, physicians, and charge staff to maintain department workflow efficiency and patient safety standards</li>
                </ul>
              </div>

              <div>
                <div className="flex items-baseline justify-between gap-2 mb-0.5">
                  <h3 className="text-sm font-bold text-stone-900">Certified Nursing Assistant</h3>
                  <span className="text-xs text-stone-500 whitespace-nowrap">March 2019 - 2023</span>
                </div>
                <p className="text-sm font-semibold text-teal-700 mb-1">Northwell Health - Plainview Hospital | Plainview, NY | Medical/Surgical Unit</p>
                <ul className="space-y-0.5 text-sm text-stone-700 list-none">
                  <li className="flex items-start gap-2"><span className="flex-shrink-0 mt-0.5">-</span>Provided direct patient care and ADL support for post-surgical and medical patients, maintaining dignity, safety, and comfort in a high-acuity unit</li>
                  <li className="flex items-start gap-2"><span className="flex-shrink-0 mt-0.5">-</span>Monitored and documented vital signs in Epic EMR, communicating clinical changes to the nursing team to support timely intervention</li>
                  <li className="flex items-start gap-2"><span className="flex-shrink-0 mt-0.5">-</span>Performed wound care including cleaning, dressing changes, and healing progress monitoring in accordance with clinical protocols</li>
                  <li className="flex items-start gap-2"><span className="flex-shrink-0 mt-0.5">-</span>Supported infection control compliance and Joint Commission readiness standards throughout the unit</li>
                </ul>
              </div>

              <div>
                <div className="flex items-baseline justify-between gap-2 mb-0.5">
                  <h3 className="text-sm font-bold text-stone-900">Certified Nursing Assistant - Medically Fragile Pediatrics</h3>
                  <span className="text-xs text-stone-500 whitespace-nowrap">January 2018 - October 2018</span>
                </div>
                <p className="text-sm font-semibold text-teal-700 mb-1">Providence Health - Centre For Medically Fragile Children</p>
                <ul className="space-y-0.5 text-sm text-stone-700 list-none">
                  <li className="flex items-start gap-2"><span className="flex-shrink-0 mt-0.5">-</span>Documented medical histories, vital signs, and clinical notes for pediatric patients with complex conditions using Epic EMR</li>
                  <li className="flex items-start gap-2"><span className="flex-shrink-0 mt-0.5">-</span>Monitored seizure activity, conducted bladder scans, administered bolus feedings, and placed pulse oximeters per clinical protocols</li>
                  <li className="flex items-start gap-2"><span className="flex-shrink-0 mt-0.5">-</span>Delivered specialized physical and emotional care to medically fragile pediatric patients, supporting family communication and care continuity</li>
                </ul>
              </div>

              <div>
                <div className="flex items-baseline justify-between gap-2 mb-0.5">
                  <h3 className="text-sm font-bold text-stone-900">Certified Nursing Assistant</h3>
                  <span className="text-xs text-stone-500 whitespace-nowrap">2013 - 2018</span>
                </div>
                <p className="text-sm font-semibold text-teal-700 mb-1">South Nassau Communities Hospital | Oceanside, NY | Medical/Surgical Unit</p>
                <ul className="space-y-0.5 text-sm text-stone-700 list-none">
                  <li className="flex items-start gap-2"><span className="flex-shrink-0 mt-0.5">-</span>Delivered 5 years of direct patient care across medical/surgical floors, supporting patients with a range of acute and chronic conditions</li>
                  <li className="flex items-start gap-2"><span className="flex-shrink-0 mt-0.5">-</span>Assisted patients with activities of daily living (ADLs), mobility, personal hygiene, and comfort care</li>
                  <li className="flex items-start gap-2"><span className="flex-shrink-0 mt-0.5">-</span>Monitored vital signs and documented clinical observations, escalating concerns to nursing staff to ensure patient safety</li>
                </ul>
              </div>

            </div>
          </section>

          {/* ── Education ── */}
          <section className="mb-5">
            <h2 className="text-sm font-bold text-teal-700 uppercase tracking-wide border-b border-teal-200 pb-0.5 mb-2">
              Education
            </h2>
            <div className="space-y-2">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-sm font-bold text-stone-900">Bachelor of Science in Healthcare Administration</h3>
                  <p className="text-sm text-stone-600">Southern New Hampshire University (SNHU) - Expected February 2027</p>
                  <p className="text-xs text-stone-400">Coursework: Healthcare Systems, Health Policy, Organizational Management, Healthcare Finance, Quality Improvement</p>
                </div>
              </div>
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-sm font-bold text-stone-900">High School Diploma</h3>
                  <p className="text-sm text-stone-600">New York State | June 2012</p>
                </div>
              </div>
            </div>
          </section>

          {/* ── Licenses & Certifications ── */}
          <section className="mb-2">
            <h2 className="text-sm font-bold text-teal-700 uppercase tracking-wide border-b border-teal-200 pb-0.5 mb-2">
              Licenses and Certifications
            </h2>
            <div className="grid grid-cols-2 gap-x-8 gap-y-0.5 text-sm text-stone-700">
              <div className="flex items-start gap-2"><span className="flex-shrink-0 mt-0.5">-</span>NYS Certified Nursing Assistant (CNA) - Active</div>
              <div className="flex items-start gap-2"><span className="flex-shrink-0 mt-0.5">-</span>NYS Patient Care Technician (PCT) - Active</div>
              <div className="flex items-start gap-2"><span className="flex-shrink-0 mt-0.5">-</span>AHA Basic Life Support (BLS) - Active</div>
              <div className="flex items-start gap-2"><span className="flex-shrink-0 mt-0.5">-</span>Licensed Phlebotomist, New York State - Active</div>
            </div>
          </section>

        </div>
      </main>

      <style>{`
        @media print {
          @page { margin: 0.55in 0.65in; size: letter; }
          body { -webkit-print-color-adjust: exact; print-color-adjust: exact; font-size: 12px; }
        }
      `}</style>
    </>
  );
}
