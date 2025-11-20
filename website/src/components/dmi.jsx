import React, { useState, useEffect } from "react";
import { Cloud, ArrowRight, CheckCircle, Play, Users, Sparkles, Star, Clock, Award } from "lucide-react";

export default function DMI() {
  const GOOGLE_FORM_URL = "https://forms.gle/PSGTcWDSvpUJXYGN6";
  const YOUTUBE_DMI_URL = "https://www.youtube.com/embed/DqfSdsHW090";
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToForm = (e) => {
    e.preventDefault();
    const el = document.getElementById("dmi-form");
    if (el) el.scrollIntoView({ behavior: "smooth", block: "center" });
  };

  const highlights = [
    {
      icon: <Sparkles size={24} className="text-yellow-300" />,
      title: "Project-First Learning",
      body: "Weekly deliverables, squad projects, and a final capstone — all mentor-reviewed.",
      gradient: "from-yellow-500/20 to-orange-500/20"
    },
    {
      icon: <Users size={24} className="text-blue-300" />,
      title: "1:1 Mentorship",
      body: "Live office hours, code reviews, and personalized feedback for faster growth.",
      gradient: "from-blue-500/20 to-cyan-500/20"
    },
    {
      icon: <Award size={24} className="text-green-300" />,
      title: "Job-Ready Portfolio",
      body: "Resume workshop, interview prep, and demo-ready DevOps projects.",
      gradient: "from-green-500/20 to-emerald-500/20"
    }
  ];

  const curriculum = [
    ["Week 0", "Intro: AI, ChatGPT, Networking & VS Code setup"],
    ["Week 1", "Linux essentials, file systems and shell scripting"],
    ["Week 2", "Git & GitHub workflows, PRs, branching strategies"],
    ["Week 3", "DevOps lifecycle: builds, tests, and releases"],
    ["Week 4", "AWS fundamentals with hands-on labs"],
    ["Week 5", "AWS challenge & optimization"],
    ["Week 6", "Azure basics and hybrid-cloud patterns"],
    ["Week 7", "Terraform: IaC best practices & modules"],
    ["Week 8", "Ansible: configuration management & secrets"],
    ["Week 9", "Azure DevOps/GitHub Actions: CI/CD pipelines"],
    ["Week 10", "Docker: images, registries, and workflows"],
    ["Week 11", "Kubernetes: cluster patterns & workloads"],
    ["Week 12", "Observability: Prometheus, Grafana, ELK, SLOs"],
    ["Week 13", "🎓 Final Project + Graduation" ]
  ];





  const stats = [
    { value: "5k+", label: "Learners trained", icon: <Users size={20} className="text-yellow-300" /> },
    { value: "50+", label: "Projects delivered", icon: <Star size={20} className="text-blue-300" /> },
    { value: "15+", label: "Years experience", icon: <Award size={20} className="text-green-300" /> },
    { value: "98%", label: "Satisfaction rate", icon: <Sparkles size={20} className="text-purple-300" /> }
  ];

  return (
    <div className="w-full font-sans text-gray-300 bg-black selection:bg-yellow-400 selection:text-black overflow-hidden">

      {/* TOP BANNER */}
      <section className="w-full bg-gradient-to-r from-yellow-500/10 via-gray-900 to-blue-500/10 text-white py-3 border-b border-gray-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-yellow-400/5 to-transparent animate-pulse"></div>
        <div className="max-w-6xl mx-auto px-6 flex items-center justify-between gap-4 relative z-10">
          <div className="flex items-center gap-3">
            <div className="bg-yellow-400/10 px-3 py-1 rounded-full text-sm font-medium text-yellow-300 flex items-center gap-2 border border-yellow-400/20">
              <span className="flex w-2 h-2 bg-yellow-400 rounded-full animate-ping"></span>
              🎯 <span className="font-semibold">Cohort — DMI #2</span>
            </div>
            <div className="text-sm opacity-80 text-gray-300 hidden md:block">
              Free pilot cohort • Limited seats • Apply early.
            </div>
          </div>

          <div className="flex items-center gap-3">
            <a href="#curriculum" className="text-sm text-blue-400 hover:text-blue-300 hidden sm:inline transition-all hover:scale-105">
              View Curriculum
            </a>

            <a
              href={GOOGLE_FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-transparent text-sm text-yellow-300 border border-yellow-300/30 px-4 py-2 rounded-full hover:bg-yellow-400/10 transition-all hover:scale-105 hover:border-yellow-300/50"
            >
              Open Form
            </a>

            <a
              href="#dmi-form"
              onClick={scrollToForm}
              className="bg-yellow-400 text-black font-semibold rounded-full px-5 py-2.5 hover:bg-yellow-300 transition-all hover:scale-105 shadow-lg shadow-yellow-400/25 hover:shadow-yellow-400/40"
            >
              Apply Now
            </a>
          </div>
        </div>
      </section>

      {/* HERO SECTION */}
      <section className="relative w-full bg-black py-24 md:py-32 overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 left-1/4 w-96 h-96 bg-yellow-400/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute top-1/2 right-1/4 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute bottom-0 left-1/3 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-500"></div>
        </div>

        <div className={`relative max-w-6xl mx-auto px-6 text-center space-y-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          
          {/* Premium Badge */}
          <div className="inline-flex items-center space-x-3 bg-gradient-to-r from-yellow-400/10 to-blue-400/10 border border-yellow-400/30 px-6 py-3 rounded-full backdrop-blur-sm">
            <Cloud size={20} className="text-yellow-300" />
            <span className="text-sm text-yellow-300 font-semibold tracking-wide">Cloud · DevOps · Observability</span>
            <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></div>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight">
            <span className="block text-white bg-gradient-to-b from-white to-gray-300 bg-clip-text text-transparent">
              DevOps Micro Internship
            </span>
            <span className="block mt-4 bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 via-blue-400 to-purple-400 animate-gradient-x">
              Learn Fast. Build Real. Go Production.
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed font-light">
            A hands-on 12-week program where you deploy real apps, create CI/CD pipelines,
            automate infrastructure, and learn directly from industry mentors.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-8">
            <a
              href="#dmi-form"
              onClick={scrollToForm}
              className="group inline-flex items-center gap-4 bg-gradient-to-r from-yellow-400 to-yellow-500 text-black px-10 py-4 rounded-full font-bold text-lg shadow-2xl hover:shadow-yellow-400/40 transition-all duration-300 hover:scale-105 hover:-translate-y-1"
            >
              <span>Apply Now</span>
              <ArrowRight size={22} className="group-hover:translate-x-1 transition-transform" />
            </a>

            <a
              href={YOUTUBE_DMI_URL}
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center gap-4 px-10 py-4 rounded-full border-2 border-gray-700 text-gray-300 hover:text-white hover:border-blue-400 hover:bg-blue-400/5 transition-all duration-300 hover:scale-105"
            >
              <div className="relative">
                <Play size={20} className="group-hover:scale-110 transition-transform" />
              </div>
              Watch Intro Video
            </a>
          </div>

          {/* Enhanced Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-16 max-w-2xl mx-auto">
            {stats.map((stat, index) => (
              <div 
                key={index} 
                className="text-center group hover:scale-105 transition-transform duration-300"
              >
                <div className="flex items-center justify-center gap-2 mb-2">
                  {stat.icon}
                  <div className="text-3xl font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-yellow-400 group-hover:to-blue-400">
                    {stat.value}
                  </div>
                </div>
                <div className="text-gray-400 text-sm font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HIGHLIGHTS SECTION */}
      <section className="py-20 bg-gradient-to-b from-black via-gray-900/50 to-black">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why This Program <span className="text-yellow-300">Stands Out</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Designed for rapid skill acquisition and real-world impact
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {highlights.map((highlight, index) => (
              <div
                key={index}
                className="group relative p-8 bg-gradient-to-br from-gray-900/80 to-black/80 rounded-3xl border border-gray-800 hover:border-yellow-400/30 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-yellow-400/10"
              >
                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${highlight.gradient} opacity-0 group-hover:opacity-100 rounded-3xl transition-opacity duration-500`}></div>
                
                <div className="relative z-10">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-gray-800 to-black border border-gray-700 group-hover:border-yellow-400/50 flex items-center justify-center mb-6 transition-all duration-300 group-hover:scale-110">
                    {highlight.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-yellow-300 transition-colors">
                    {highlight.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors">
                    {highlight.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VIDEO SECTION */}
      <section className="w-full bg-black py-20">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-3 bg-blue-400/10 px-6 py-3 rounded-full border border-blue-400/20 mb-8">
            <Play size={18} className="text-blue-300" />
            <span className="text-blue-300 font-semibold">Program Introduction</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            See The Program In <span className="text-blue-300">Action</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-12">
            One short video explaining expectations, workload, and transformative outcomes.
          </p>

          <div className="relative max-w-4xl mx-auto">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-2xl blur-xl opacity-50"></div>
            <div className="relative aspect-video rounded-2xl overflow-hidden border-2 border-gray-700 shadow-2xl">
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

     {/* CURRICULUM SECTION */}
<section id="curriculum" className="bg-gradient-to-b from-black to-gray-900 py-20">
  <div className="max-w-5xl mx-auto px-6">
    <div className="text-center mb-16">
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
        14-Week <span className="text-yellow-300">Learning Journey</span>
      </h2>
      <p className="text-gray-400 text-lg">
        From fundamentals to production DevOps mastery
      </p>
    </div>

    {/* TIMELINE WRAPPER */}
    <div className="relative pb-0">

      {/* Vertical Line - full height UNTIL spacer */}
      <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-1 
        bg-gradient-to-b from-yellow-400 via-blue-400 to-purple-400 rounded-full pointer-events-none">
      </div>

      {/* Timeline Items */}
      {curriculum.map(([week, desc], index) => {
        const isLeft = index % 2 === 0;
        return (
          <div
            key={index}
            className={`relative flex items-center mb-12 ${
              isLeft ? "justify-start" : "justify-end"
            }`}
          >
            {/* Dot */}
            <div className="absolute left-1/2 -translate-x-1/2 w-6 h-6 
              bg-gradient-to-br from-yellow-400 to-blue-400 rounded-full 
              border-4 border-black z-10 shadow-lg"></div>

            {/* Card */}
            <div
              className={`w-full md:w-5/12 bg-gradient-to-br from-gray-900 to-black 
                p-6 rounded-2xl border border-gray-800 shadow-xl transition-all 
                hover:scale-105 ${
                  isLeft ? "mr-6 md:mr-0" : "ml-6 md:ml-0"
                }`}
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br 
                  from-yellow-400/20 to-blue-400/20 flex items-center justify-center 
                  border border-yellow-400/30">
                  <span className="text-yellow-300 font-bold text-sm">{index + 1}</span>
                </div>
                <h3 className="font-bold text-yellow-300 text-lg">{week}</h3>
              </div>
              <p className="text-gray-300 leading-relaxed">{desc}</p>
            </div>
          </div>
        );
      })}

      {/* Spacer - determines EXACT stopping point */}
      <div className="h-12"></div>
    </div>

    {/* FINAL ACHIEVEMENT CARD */}
    <div className="flex justify-center mt-0">
      <div className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-black 
        p-6 rounded-2xl shadow-xl border border-yellow-600 text-center w-full md:w-[70%]">
        <h3 className="text-2xl font-bold">🎉 Congratulations!</h3>
        <p className="text-md mt-1 font-medium">
          You have completed the 14-Week DevOps Micro Internship Journey.
        </p>
      </div>
    </div>

  </div>
</section>


      {/* RULES & EXPECTATIONS */}
      <section className="w-full bg-black py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8">
            
            {/* Rules Card */}
            <div className="group bg-gradient-to-br from-gray-900 to-black p-8 rounded-3xl border border-gray-800 hover:border-yellow-400/30 transition-all duration-500 hover:scale-105">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-yellow-400/20 to-red-400/20 flex items-center justify-center border border-yellow-400/30">
                  <Clock size={24} className="text-yellow-300" />
                </div>
                <h3 className="text-2xl font-bold text-white">Rules & Expectations</h3>
              </div>
              <ul className="space-y-4">
                {[
                  "Attendance checks at start, mid & end — mandatory",
                  "Weekly milestones + public LinkedIn post",
                  "Missing 2+ deadlines without communication = removal",
                  "Active participation in squad collaborations",
                  "Final capstone project presentation"
                ].map((rule, index) => (
                  <li key={index} className="flex items-start gap-3 text-gray-300 hover:text-white transition-colors">
                    <CheckCircle size={18} className="text-yellow-300 mt-1 flex-shrink-0" />
                    <span>{rule}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Deliverables Card */}
            <div className="group bg-gradient-to-br from-gray-900 to-black p-8 rounded-3xl border border-gray-800 hover:border-blue-400/30 transition-all duration-500 hover:scale-105">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-400/20 to-cyan-400/20 flex items-center justify-center border border-blue-400/30">
                  <Award size={24} className="text-blue-300" />
                </div>
                <h3 className="text-2xl font-bold text-white">What You'll Ship</h3>
              </div>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Build a comprehensive DevOps portfolio with real-world projects and production-ready pipelines.
              </p>
              <div className="flex flex-wrap gap-3">
                {[
                  "Resume Workshop", "Interview Kit", "Daily Standups", 
                  "Code Reviews", "Community Support", "CI/CD Pipelines",
                  "IaC Modules", "Cloud Deployments", "Monitoring Dashboards"
                ].map((item) => (
                  <span
                    key={item}
                    className="px-4 py-2 rounded-full bg-gradient-to-r from-blue-400/10 to-purple-400/10 text-blue-300 border border-blue-400/20 text-sm font-medium hover:scale-105 hover:border-blue-400/40 transition-all"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      
<section className="w-full bg-gradient-to-br from-black via-gray-900 to-black py-20">
  <div className="max-w-6xl mx-auto px-6">
    <div className="text-center mb-16">
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
        Voices of <span className="text-green-300">Success</span>
      </h2>
      <p className="text-gray-400 text-lg">Real feedback from our alumni community</p>
    </div>

    {/* FIXED TESTIMONIALS ARRAY */}
    {(() => {
      const testimonials = [
        {
          name: "Anuradha Iyer",
          role: "DMI – Cohort-1",
          feedback:
            "I was selected in the top 100. I am very happy with the cohort. I got direction as to how to upskill my DevOps skills. Lots of hands-on labs and assignments. The content is very good. The co-mentors follow up regularly. Amazing energy. Don’t miss this opportunity!",
          image:
            "https://media.licdn.com/dms/image/v2/C5103AQHZh8sVH-uNqQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1549595986002?e=1764806400&v=beta&t=EfojpBz32jRZjXXOtKxKWaUWn7yckbgSY0YqEbyBGxQ",
        },
        {
          name: "Samanta Rizzo",
          role: "DMI – Cohort-1",
          feedback:
            "Here, the mentors truly care about our growth. Over 12 weeks, we became a strong community. Even those who didn’t complete Cohort-1 joined Cohort-2 and still stay connected. This is more than a program — it's a family.",
          image:
            "https://media.licdn.com/dms/image/v2/D4D03AQGTSnmSulkNWw/profile-displayphoto-shrink_800_800/B4DZdU_SFIHAAc-/0/1749477566085?e=1764806400&v=beta&t=a3a2PBme1lxXAjiVoXgzD-D0VylooESu0Hr2g2aNTmY",
        },
        {
          name: "Mobarak Hosen",
          role: "DMI – Cohort-1",
          feedback:
            "I wasn't selected in the initial 100! But I kept doing the assignments and after 2 weeks I got promoted to the top 100 — everything changed. The cohort is free but requires deep commitment. This community is truly life-changing.",
          image:
            "https://media.licdn.com/dms/image/v2/D5635AQGSdjVkC-S_Tg/profile-framedphoto-shrink_800_800/B56ZlDsRW0IsAg-/0/1757777303331?e=1764079200&v=beta&t=zHI2f4jT8IMzUHaPbOEaTmOgt9ZdEflTeuIGTg9Rq5U",
        },
        {
          name: "Tanisha Borana",
          role: "DMI – Cohort-1",
          feedback:
            "Truly proud to be part of Cohort-1 — this program transformed my confidence in DevOps and Cloud. A big thanks to Pravin Mishra and all co-mentors for their constant support. The teamwork and encouragement made this journey unforgettable.",
          image:
            "https://media.licdn.com/dms/image/v2/D4D35AQE_cw2j7p3YtQ/profile-framedphoto-shrink_800_800/B4DZnT8z0PIgAg-/0/1760197557940?e=1764079200&v=beta&t=_5W6tefqV9YL-rvwKjIk8LBIVce70Vumr4A002DvKA4",
        },
        {
          name: "Akintade Aduroja",
          role: "DMI – Cohort-1",
          feedback:
            "I’m proud of this movement by Pravin Mishra. My mentors have given us all the room to grow and excel. Learning never stops — mastery comes from devotion to the craft.",
          image:
            "https://media.licdn.com/dms/image/v2/D4D03AQE-fZe00UwyAg/profile-displayphoto-crop_800_800/B4DZlh5cHYG8AM-/0/1758284072405?e=1764806400&v=beta&t=FfSQWxuvAQewsipl5-0kjALqX6vfMMSmYMmxh3uRYTc",
        },
      ];

      return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, index) => (
            <div
              key={index}
              className="group bg-gradient-to-br from-gray-900 to-black p-8 rounded-3xl border border-gray-800 hover:border-green-400/30 transition-all duration-500 hover:scale-105"
            >
              <div className="flex items-center gap-4 mb-6">
                <img
                  src={t.image}
                  alt={t.name}
                  className="w-14 h-14 rounded-2xl object-cover border border-green-400/30 group-hover:scale-110 transition-transform"
                />
                <div>
                  <div className="font-bold text-white text-lg">{t.name}</div>
                  <div className="text-green-300 text-sm">{t.role}</div>
                </div>
              </div>

              <blockquote className="text-gray-300 leading-relaxed italic">
                “{t.feedback}”
              </blockquote>

              <div className="flex gap-1 mt-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} className="fill-yellow-400 text-yellow-400" />
                ))}
              </div>
            </div>
          ))}
        </div>
      );
    })()}
  </div>
</section>


      {/* APPLICATION FORM SECTION */}
      <section id="dmi-form" className="w-full bg-black py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="bg-gradient-to-br from-gray-900/80 to-black/80 rounded-3xl border border-gray-800 shadow-2xl overflow-hidden">
            <div className="p-10">
              <div className="flex flex-col lg:flex-row gap-10">
                {/* Main Content */}
                <div className="flex-1">
                  <div className="inline-flex items-center gap-3 bg-yellow-400/10 px-6 py-3 rounded-full border border-yellow-400/20 mb-6">
                    <span className="flex w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></span>
                    <span className="text-yellow-300 font-semibold">Limited Seats Available</span>
                  </div>
                  
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                    Ready to <span className="text-yellow-300">Transform</span> Your Career?
                  </h2>
                  <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                    Join the free pilot cohort and get hands-on DevOps experience with personalized mentorship. 
                    Priority given to motivated applicants.
                  </p>

                  <div className="space-y-4 mb-8">
                    {[
                      "No fees for pilot cohort",
                      "Limited seats — motivation based selection",
                      "Short technical review call",
                      "Start date: March 1, 2024",
                      "12 weeks of intensive learning"
                    ].map((benefit, index) => (
                      <div key={index} className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors">
                        <CheckCircle size={18} className="text-yellow-300 flex-shrink-0" />
                        <span>{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Side Panel */}
                <div className="lg:w-96">
                  <div className="bg-gradient-to-br from-yellow-400/10 to-blue-400/10 p-8 rounded-2xl border border-yellow-400/20">
                    <h3 className="text-xl font-bold text-white mb-4">Quick Apply</h3>
                    <p className="text-gray-300 mb-6 leading-relaxed">
                      Takes ~3 minutes. Share your motivation, GitHub/LinkedIn, and current skill level.
                    </p>
                    
                    <div className="space-y-4">
                      <a
                        href={GOOGLE_FORM_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block w-full bg-gradient-to-r from-yellow-400 to-yellow-500 text-black text-center font-bold py-4 px-6 rounded-xl hover:shadow-2xl hover:shadow-yellow-400/30 transition-all duration-300 hover:scale-105"
                      >
                        Start Application
                      </a>
                      
                      <a
                        href="#dmi-form"
                        onClick={scrollToForm}
                        className="block w-full border-2 border-gray-700 text-gray-300 text-center font-semibold py-4 px-6 rounded-xl hover:border-blue-400 hover:text-blue-300 transition-all duration-300 hover:scale-105"
                      >
                        Learn More
                      </a>
                    </div>

                    <div className="mt-6 p-4 bg-black/50 rounded-xl border border-gray-700">
                      <div className="text-sm text-gray-400">
                        <div className="flex items-center gap-2 mb-2">
                          <Clock size={16} className="text-yellow-300" />
                          <span>Application deadline: February 25</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Users size={16} className="text-blue-300" />
                          <span>Only 30 seats available</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FLOATING CTA */}
      <a
        href="#dmi-form"
        onClick={scrollToForm}
        aria-label="Apply to DMI"
        className="fixed bottom-8 right-8 z-50 group inline-flex items-center gap-3 px-6 py-4 rounded-full font-bold text-black bg-gradient-to-r from-yellow-400 to-yellow-500 backdrop-blur-md border border-yellow-300/40 shadow-2xl hover:shadow-yellow-400/40 transition-all duration-300 hover:scale-110 hover:-translate-y-1"
      >
        <span className="flex items-center justify-center w-10 h-10 rounded-full bg-white/20">
          🚀
        </span>
        <span className="whitespace-nowrap">Apply Now</span>
        <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
      </a>
    </div>
  );
}