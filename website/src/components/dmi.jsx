import React from "react";

export default function DMI() {
  const GOOGLE_FORM_URL = "https://forms.gle/PSGTcWDSvpUJXYGN6";
  const YOUTUBE_DMI_URL="https://www.youtube.com/embed/DqfSdsHW090"
  return (
    <div className="w-full font-sans text-gray-800">

      {/* ===================== SECTION 1 — TOP BANNER ===================== */}
      <section className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-3 shadow-sm">
        <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="bg-white/20 px-3 py-1 rounded-full text-sm font-medium">
              🎯 Cohort — DMI #2
            </div>
            <div className="text-sm opacity-90">
              Join our DevOps Micro Internship — limited seats.
            </div>
          </div>
          <a
            href="#dmi-form"
            className="inline-block bg-white text-indigo-700 font-semibold rounded-full px-4 py-2 shadow hover:shadow-md transition"
          >
            Apply Now
          </a>
        </div>
      </section>

      {/* ===================== SECTION 2 — HERO ===================== */}
      <section className="w-full bg-white py-16">
        <div className="max-w-6xl mx-auto px-6 text-center max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600">
            DMI — DevOps Micro Internship
          </h1>
          <p className="mt-4 text-gray-600 text-lg leading-relaxed">
            12 weeks • Project-first • Industry mentors • Live classes & squad
            projects. Ship weekly, get feedback, build your portfolio.
          </p>

          <div className="mt-6 flex items-center justify-center gap-4">
            <a href="#dmi-form" className="btn-primary inline-flex items-center gap-3">
              Apply to Cohort 2
            </a>
            <a href="#curriculum" className="text-sm text-indigo-600 underline">
              View curriculum
            </a>
          </div>
        </div>
      </section>

      {/* ===================== SECTION 3 — HIGHLIGHTS ===================== */}
      <section className="w-full bg-indigo-50 py-16">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-6">

          {/* Card 1 */}
          <div className="p-6 bg-white rounded-2xl shadow-lg border border-gray-100">
            <h3 className="font-semibold text-lg">Why DMI?</h3>
            <p className="mt-2 text-gray-600">
              Task-based live classes, real projects, industry mentors, and
              hands-on reviews.
            </p>
            <ul className="mt-4 space-y-2 text-sm text-gray-700">
              <li>• 6–8 hrs/week live sessions</li>
              <li>• 4–6 assignments/week, manually reviewed</li>
              <li>• Squad projects, Champion of the week</li>
            </ul>
          </div>

          {/* Card 2 */}
          <div className="p-6 bg-white rounded-2xl shadow-lg border border-gray-100">
            <h3 className="font-semibold text-lg">Commitment</h3>
            <p className="mt-2 text-gray-600">
              100% attendance & active engagement required. Missed deadlines →
              removal.
            </p>
            <ul className="mt-4 space-y-2 text-sm text-gray-700">
              <li>• Attendance checks: start, mid, end</li>
              <li>• ≥90% submission mandatory</li>
              <li>• Mentor standards & community code of conduct</li>
            </ul>
          </div>

          {/* Card 3 */}
          <div className="p-6 bg-white rounded-2xl shadow-lg border border-gray-100">
            <h3 className="font-semibold text-lg">Mentorship</h3>
            <p className="mt-2 text-gray-600">
              Practitioners guide you live and async. Guest experts across AI,
              Cloud & Data.
            </p>
            <ul className="mt-4 space-y-2 text-sm text-gray-700">
              <li>• Live guidance & office hours</li>
              <li>• Personalized feedback on assignments</li>
              <li>• Community + co-mentor support</li>
            </ul>
          </div>

        </div>
      </section>

      {/* ===================== SECTION 4 — VIDEO ===================== */}
      <section className="w-full bg-purple-50 py-16">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-2xl font-bold">Watch This Before You Start</h2>
          <p className="mt-2 text-gray-600 max-w-2xl mx-auto">
            A short intro about the DevOps Micro Internship — what to expect and
            how to succeed.
          </p>

          <div className="mt-6 flex justify-center">
            <div className="w-full max-w-4xl aspect-video rounded-xl overflow-hidden shadow-lg border border-gray-200">
              <iframe
                className="w-full h-full"
                src={YOUTUBE_DMI_URL}
                title="DMI Intro Video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== SECTION 5 — CURRICULUM ===================== */}
      <section id="curriculum" className="w-full bg-gray-50 py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-center">Course Curriculum</h2>
          <p className="mt-2 text-gray-600 max-w-2xl mx-auto text-center">
            A compact 12-week program designed to take you from basics to
            production-ready DevOps skills.
          </p>

          <div className="relative max-w-3xl mx-auto mt-12">

            {/* Center vertical line */}
            <div className="absolute left-1/2 top-0 h-full w-1 bg-indigo-300 transform -translate-x-1/2"></div>

            {[
              "Week 0 - AI, ChatGPT, Network, DNS, Domain, VS Code",
              "Week 1 - Linux for DevOps",
              "Week 2 - Git & GitHub for DevOps",
              "Week 3 - DevOps Lifecycle",
              "Week 4 - AWS for DevOps",
              "Week 5 - AWS Learning Challenge & Be on top 1%",
              "Week 6 - Azure for DevOps",
              "Week 7 - Terraform (IaC)",
              "Week 8 - Ansible",
              "Week 9 - Azure DevOps (CI/CD)",
              "Week 10 - Docker - Containerization",
              "Week 11 - Kubernetes (K8s)",
              "Week 12 - Observability: Prometheus, Grafana, Kibana, ELK",
            ].map((item, idx) => {
              const [week, desc] = item.split(" - ");
              const isLeft = idx % 2 === 0;

              return (
                <div
                  key={idx}
                  className={`relative flex items-start mb-10 ${
                    isLeft ? "justify-start" : "justify-end"
                  }`}
                >
                  {/* Dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-indigo-600 rounded-full border-4 border-white"></div>

                  {/* Card */}
                  <div
                    className={`w-5/12 bg-white p-4 rounded-xl shadow border border-gray-100 ${
                      isLeft ? "text-right pr-6" : "text-left pl-6"
                    }`}
                  >
                    <h3 className="font-semibold text-indigo-700">{week}</h3>
                    <p className="text-sm text-gray-600 mt-1">{desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===================== SECTION 6 — RULES ===================== */}
      <section className="w-full bg-blue-50 py-16">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-6">

          <div className="bg-white rounded-2xl p-6 shadow border border-gray-100">
            <h3 className="font-semibold text-lg">Program Rules & Expectations</h3>
            <ul className="mt-3 space-y-2 text-gray-700 text-sm">
              <li>• Attendance checks at start, mid, and end — mandatory.</li>
              <li>• Weekly milestones: assignment submission, LinkedIn & blog post.</li>
              <li>• More than 2 missed assignments → removal.</li>
              <li>• Help one another; mentorship is collaborative.</li>
            </ul>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow border border-gray-100">
            <h3 className="font-semibold text-lg">What You Ship</h3>
            <p className="mt-2 text-gray-600 text-sm">
              Every week you will produce industry-standard deliverables —
              repositories, infra-as-code, CI/CD pipelines, monitoring dashboards.
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {[
                "Resume-Building",
                "Interview Prep",
                "Daily Standups",
                "Manual Reviews",
                "Community Support",
              ].map((b) => (
                <span
                  key={b}
                  className="text-xs px-3 py-1 rounded-full bg-indigo-50 text-indigo-700"
                >
                  {b}
                </span>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* ===================== SECTION 7 — TESTIMONIALS ===================== */}
      <section className="w-full bg-purple-50 py-16">
        <div className="max-w-6xl mx-auto px-6">

          <h2 className="text-2xl font-bold">What learners say</h2>
          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">

            {[
              {
                name: "Priya S",
                text: "Hands-on, intense, and career changing. The weekly reviews were gold.",
              },
              {
                name: "Rohit M",
                text: "Mentors pushed me to production-ready code and better practices.",
              },
              {
                name: "Anita K",
                text: "Free, high-quality, and the squad projects taught real teamwork.",
              },
            ].map((t, i) => (
              <figure
                key={i}
                className="bg-white p-6 rounded-2xl shadow border border-gray-100"
              >
                <figcaption className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-indigo-100 flex items-center justify-center font-semibold text-indigo-700">
                    {t.name[0]}
                  </div>
                  <div>
                    <div className="font-semibold">{t.name}</div>
                    <div className="text-sm text-gray-600">Alumni</div>
                  </div>
                </figcaption>
                <blockquote className="mt-4 text-gray-700">“{t.text}”</blockquote>
              </figure>
            ))}

          </div>
        </div>
      </section>

      {/* ===================== SECTION 8 — CTA ===================== */}
      <section className="w-full bg-gray-50 py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-2xl p-8 shadow-lg flex flex-col md:flex-row items-center justify-between gap-4">
            <div>
              <h3 className="text-xl font-bold">Ready to level up your career?</h3>
              <p className="mt-1 text-sm opacity-90">
                Limited seats — we prioritise committed learners.
              </p>
            </div>
            <a
              href="#dmi-form"
              className="bg-white text-indigo-700 font-semibold px-5 py-3 rounded-full shadow hover:scale-[1.02] transition"
            >
              Apply to DMI Cohort 2
            </a>
          </div>
        </div>
      </section>

      {/* ===================== SECTION 9 — GOOGLE FORM ===================== */}
      <section id="dmi-form" className="w-full bg-indigo-50 py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-2xl font-bold">Register for the Cohort</h2>
          <p className="mt-2 text-gray-600">Fill this form and we'll reach out with next steps.</p>

          <div className="mt-6 bg-white rounded-2xl p-4 border border-gray-100 shadow-sm">
            <iframe
              title="DMI Registration"
              src={GOOGLE_FORM_URL}
              className="w-full h-[700px] rounded-lg"
            />
          </div>
        </div>
      </section>

      {/* ===================== FOOTER ===================== */}
      <footer className="text-center text-sm text-gray-500 py-10 bg-white">
        © {new Date().getFullYear()} TheCloudAdvisory — DevOps Micro Internship •
        All rights reserved.
      </footer>

      {/* INLINE STYLES */}
      <style>{`
        .btn-primary {
          background: linear-gradient(90deg,#6366f1,#8b5cf6);
          color: white;
          padding: 12px 18px;
          border-radius: 9999px;
          font-weight: 600;
          box-shadow: 0 6px 20px rgba(99,102,241,0.18);
          transition: transform .12s ease, box-shadow .12s ease;
        }
        .btn-primary:hover {
          transform: translateY(-3px);
          box-shadow: 0 10px 30px rgba(99,102,241,0.22);
        }
      `}</style>
    </div>
  );
}
