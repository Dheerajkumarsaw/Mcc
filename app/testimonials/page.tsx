import Link from "next/link";

const testimonials = [
  { name: "Jessica Tran", role: "Affiliate Marketer", quote: "I used to spend 2 hours per product writing email and social copy. Now I do it in 30 seconds. MCC has literally 10x'd my output.", rating: 5, gradient: "from-rose-400 to-pink-500" },
  { name: "Alex Petrov", role: "E-commerce Store Owner", quote: "The quality of the generated content surprised me. It doesn't sound robotic at all — my subscribers can't tell the difference from my manually written emails.", rating: 5, gradient: "from-blue-400 to-indigo-500" },
  { name: "Priya Sharma", role: "Social Media Manager", quote: "Managing 8 client accounts means I need content fast. MCC gives me Twitter posts and Instagram captions that I can publish with minimal editing.", rating: 5, gradient: "from-amber-400 to-orange-500" },
  { name: "Mike O'Brien", role: "Content Creator", quote: "I was skeptical about AI-generated marketing copy, but the affiliate link integration is seamless. My click-through rates actually went up 40%.", rating: 5, gradient: "from-emerald-400 to-teal-500" },
  { name: "Aisha Mohammed", role: "Digital Marketing Consultant", quote: "I recommend MCC to all my clients. The speed and quality combo is unmatched. It's become an essential part of my toolkit.", rating: 5, gradient: "from-purple-400 to-violet-500" },
  { name: "Ryan Kim", role: "Startup Founder", quote: "As a bootstrapped founder, I can't afford a marketing team. MCC lets me run professional campaigns across email, Twitter, and Instagram on my own.", rating: 4, gradient: "from-cyan-400 to-blue-500" },
  { name: "Laura Gonzalez", role: "Blogger & Influencer", quote: "The Instagram captions are chef's kiss. Great hashtags, engaging copy, and my affiliate links get woven in naturally. Huge time saver.", rating: 5, gradient: "from-pink-400 to-rose-500" },
  { name: "Tom Whitfield", role: "Amazon Associate", quote: "I promote dozens of products weekly. Being able to paste a product link and instantly get a full marketing kit is a game changer for my workflow.", rating: 5, gradient: "from-indigo-400 to-blue-500" },
  { name: "Nina Johansson", role: "Freelance Copywriter", quote: "I use MCC for first drafts, then add my personal touch. It cuts my writing time in half and the AI understands product positioning surprisingly well.", rating: 4, gradient: "from-teal-400 to-emerald-500" },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} className={`w-4 h-4 ${i < rating ? "text-yellow-400" : "text-gray-200"}`} fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function TestimonialsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-linear-to-br from-gray-900 to-gray-800 text-white py-20">
        <div className="absolute inset-0">
          <div className="absolute top-10 left-1/4 w-64 h-64 bg-yellow-500/5 rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-1/4 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center animate-fade-in-up">
          <div className="flex justify-center mb-4 animate-scale-in">
            <div className="flex -space-x-2">
              {["from-rose-400 to-pink-500", "from-blue-400 to-indigo-500", "from-amber-400 to-orange-500", "from-emerald-400 to-teal-500", "from-purple-400 to-violet-500"].map((g, i) => (
                <div key={i} className={`w-8 h-8 bg-linear-to-br ${g} rounded-full border-2 border-gray-900 flex items-center justify-center text-white text-[9px] font-bold`} style={{ animationDelay: `${i * 80}ms` }}>
                  {["JT", "AP", "PS", "MO", "AM"][i]}
                </div>
              ))}
            </div>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">What Our Users Say</h1>
          <p className="mt-4 text-lg text-gray-300 max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: "200ms", opacity: 0, animationFillMode: "forwards" }}>
            Thousands of marketers trust Marketing Command Center to create their campaigns. Here&apos;s what some of them have to say.
          </p>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="relative py-20 bg-gray-50 overflow-hidden">
        {/* Decorative quote marks */}
        <div className="absolute top-12 left-8 opacity-[0.03]">
          <svg className="w-48 h-48" fill="currentColor" viewBox="0 0 24 24">
            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10H14.017zM0 21v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151C7.563 6.068 6 8.789 6 11h4v10H0z" />
          </svg>
        </div>
        <div className="absolute bottom-12 right-8 opacity-[0.03] rotate-180">
          <svg className="w-48 h-48" fill="currentColor" viewBox="0 0 24 24">
            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10H14.017zM0 21v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151C7.563 6.068 6 8.789 6 11h4v10H0z" />
          </svg>
        </div>

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
            {testimonials.map((t, i) => (
              <div key={t.name} className="break-inside-avoid bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow p-6 animate-fade-in-up" style={{ animationDelay: `${i * 100}ms`, opacity: 0, animationFillMode: "forwards" }}>
                <StarRating rating={t.rating} />
                <p className="mt-4 text-gray-700 text-sm leading-relaxed italic">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="mt-5 flex items-center gap-3">
                  <div className="relative">
                    <div className={`absolute inset-0 bg-linear-to-br ${t.gradient} rounded-full scale-110 opacity-20`} />
                    <div className={`relative w-10 h-10 bg-linear-to-br ${t.gradient} rounded-full flex items-center justify-center text-white text-xs font-bold`}>
                      {t.name.split(" ").map((n) => n[0]).join("")}
                    </div>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-900">{t.name}</p>
                    <p className="text-xs text-gray-500">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-white py-16 border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-4">
          <div className="grid grid-cols-3 gap-8 text-center">
            {[
              { value: "4.9/5", label: "Average Rating" },
              { value: "10K+", label: "Happy Users" },
              { value: "98%", label: "Would Recommend" },
            ].map((stat, i) => (
              <div key={stat.label} className="animate-fade-in-up" style={{ animationDelay: `${i * 150}ms`, opacity: 0, animationFillMode: "forwards" }}>
                <p className="text-3xl font-bold text-transparent bg-clip-text bg-linear-to-r from-blue-600 to-indigo-600">{stat.value}</p>
                <p className="mt-1 text-sm text-gray-600">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-4xl mx-auto px-4 text-center animate-scale-in">
          <h2 className="text-3xl font-bold text-gray-900">Join Our Growing Community</h2>
          <p className="mt-4 text-gray-600">See for yourself why marketers love MCC.</p>
          <Link href="/generate" className="mt-8 inline-flex items-center gap-2 bg-blue-600 text-white font-semibold px-8 py-3.5 rounded-lg hover:bg-blue-700 hover:scale-105 transition-all">
            Try It Free
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </Link>
        </div>
      </section>
    </>
  );
}
