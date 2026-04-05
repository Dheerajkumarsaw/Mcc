import Link from "next/link";

const team = [
  { name: "Sarah Chen", role: "CEO & Co-Founder", bio: "Former Head of Growth at a top SaaS company. Passionate about democratizing marketing tools with AI.", gradient: "from-rose-400 to-pink-500" },
  { name: "Marcus Rodriguez", role: "CTO & Co-Founder", bio: "ML engineer with 10+ years of experience building NLP systems. Previously at Google Brain.", gradient: "from-blue-400 to-indigo-500" },
  { name: "Emily Nakamura", role: "Head of Product", bio: "Product leader who shipped tools used by 1M+ marketers. Obsessed with simplicity and UX.", gradient: "from-amber-400 to-orange-500" },
  { name: "David Okafor", role: "Lead AI Engineer", bio: "Specialist in LLM fine-tuning and prompt engineering. Makes the AI generate content that actually converts.", gradient: "from-emerald-400 to-teal-500" },
];

const values = [
  {
    title: "Speed First",
    description: "Marketing moves fast. Our tools are built to match that pace — no signup walls, no complex workflows, just results.",
    icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" /></svg>,
    color: "bg-amber-100 text-amber-600",
  },
  {
    title: "Quality Over Quantity",
    description: "Every piece of generated content goes through AI quality checks. We'd rather give you 3 great tweets than 10 mediocre ones.",
    icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" /></svg>,
    color: "bg-purple-100 text-purple-600",
  },
  {
    title: "Marketer-Centric",
    description: "We build for real marketers, not tech demos. Every feature starts with the question: will this save someone time?",
    icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" /></svg>,
    color: "bg-rose-100 text-rose-600",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-linear-to-br from-gray-900 to-gray-800 text-white py-20">
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-64 h-64 bg-blue-500/8 rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-20 w-80 h-80 bg-purple-500/8 rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center animate-fade-in-up">
          <span className="inline-block px-4 py-1.5 bg-white/10 rounded-full text-sm font-medium mb-4 border border-white/10 animate-fade-in-down">Our Mission</span>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">About Us</h1>
          <p className="mt-4 text-lg text-gray-300 max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: "200ms", opacity: 0, animationFillMode: "forwards" }}>
            We&apos;re on a mission to make professional marketing content accessible to every business, creator, and affiliate marketer.
          </p>
        </div>
      </section>

      {/* Story — 2-column with visual */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="animate-fade-in-up" style={{ animationDelay: "100ms", opacity: 0, animationFillMode: "forwards" }}>
              <span className="text-sm font-semibold text-blue-600 uppercase tracking-wider">Our Story</span>
              <h2 className="mt-2 text-3xl font-bold text-gray-900">Born From Frustration</h2>
              <div className="mt-6 text-gray-600 space-y-4 leading-relaxed">
                <p>
                  Marketing Command Center was born from a simple frustration: creating
                  multi-channel marketing content takes too long. Writing an email,
                  then adapting it for Twitter, then crafting an Instagram caption —
                  it&apos;s repetitive, time-consuming, and expensive.
                </p>
                <p>
                  We realized that modern AI could solve this. By combining intelligent
                  web scraping with large language models, we could automatically
                  understand a product and generate tailored, platform-specific
                  marketing content in seconds.
                </p>
                <p>
                  Today, thousands of affiliate marketers, small business owners, and
                  content creators use MCC to generate campaigns that would have taken
                  hours to write manually. And we&apos;re just getting started.
                </p>
              </div>
            </div>
            {/* Visual timeline */}
            <div className="relative animate-slide-in-right" style={{ animationDelay: "200ms", opacity: 0, animationFillMode: "forwards" }}>
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gray-200" />
              {[
                { year: "2024", title: "The Idea", desc: "Frustrated by repetitive copywriting, we built a prototype.", color: "bg-blue-500" },
                { year: "2024", title: "First Users", desc: "100 beta testers validated the concept in 2 weeks.", color: "bg-emerald-500" },
                { year: "2025", title: "Public Launch", desc: "Launched MCC with email, Twitter, Instagram, and Facebook support.", color: "bg-purple-500" },
                { year: "2026", title: "10K+ Users", desc: "Growing community of marketers across 50+ countries.", color: "bg-amber-500" },
              ].map((item, i) => (
                <div key={i} className="relative flex gap-6 mb-8 last:mb-0 animate-fade-in-up" style={{ animationDelay: `${300 + i * 150}ms`, opacity: 0, animationFillMode: "forwards" }}>
                  <div className={`relative z-10 w-16 h-16 ${item.color} rounded-xl flex items-center justify-center text-white font-bold text-sm shadow-lg shrink-0`}>
                    {item.year}
                  </div>
                  <div className="pt-2">
                    <h4 className="font-semibold text-gray-900">{item.title}</h4>
                    <p className="text-sm text-gray-600 mt-1">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14 animate-fade-in-up">
            <span className="text-sm font-semibold text-blue-600 uppercase tracking-wider">What Drives Us</span>
            <h2 className="mt-2 text-3xl font-bold text-gray-900">Our Values</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, i) => (
              <div key={value.title} className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-shadow animate-fade-in-up" style={{ animationDelay: `${i * 150}ms`, opacity: 0, animationFillMode: "forwards" }}>
                <div className={`w-12 h-12 ${value.color} rounded-xl flex items-center justify-center`}>
                  {value.icon}
                </div>
                <h3 className="mt-5 text-lg font-semibold text-gray-900">{value.title}</h3>
                <p className="mt-2 text-sm text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14 animate-fade-in-up">
            <span className="text-sm font-semibold text-blue-600 uppercase tracking-wider">The People</span>
            <h2 className="mt-2 text-3xl font-bold text-gray-900">Meet the Team</h2>
            <p className="mt-4 text-gray-600">A small, focused team building big things.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, i) => (
              <div key={member.name} className="group text-center animate-fade-in-up" style={{ animationDelay: `${i * 120}ms`, opacity: 0, animationFillMode: "forwards" }}>
                <div className="relative mx-auto w-28 h-28">
                  <div className={`absolute inset-0 bg-linear-to-br ${member.gradient} rounded-full opacity-20 group-hover:opacity-30 transition-opacity scale-110`} />
                  <div className={`relative w-28 h-28 bg-linear-to-br ${member.gradient} rounded-full flex items-center justify-center text-white text-2xl font-bold group-hover:scale-105 transition-transform duration-300`}>
                    {member.name.split(" ").map((n) => n[0]).join("")}
                  </div>
                </div>
                <h3 className="mt-4 font-semibold text-gray-900">{member.name}</h3>
                <p className="text-sm text-blue-600">{member.role}</p>
                <p className="mt-2 text-sm text-gray-600">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-linear-to-r from-blue-600 to-indigo-700 text-white py-16">
        <div className="absolute inset-0">
          <div className="absolute -top-20 -right-20 w-60 h-60 bg-white/5 rounded-full" />
          <div className="absolute -bottom-20 -left-20 w-72 h-72 bg-white/5 rounded-full" />
        </div>
        <div className="relative max-w-4xl mx-auto px-4 text-center animate-scale-in">
          <h2 className="text-3xl font-bold">Want to Work With Us?</h2>
          <p className="mt-4 text-blue-100">Try our tool or get in touch — we&apos;d love to hear from you.</p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/generate" className="bg-white text-blue-700 font-semibold px-8 py-3.5 rounded-lg hover:bg-blue-50 hover:scale-105 transition-all">
              Try It Free
            </Link>
            <Link href="/contact" className="border border-white/30 text-white font-semibold px-8 py-3.5 rounded-lg hover:bg-white/10 hover:scale-105 transition-all">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
