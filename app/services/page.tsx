import Link from "next/link";

const services = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
      </svg>
    ),
    color: "bg-rose-100 text-rose-600",
    title: "Email Marketing Content",
    description:
      "Professional email snippets complete with subject lines, engaging body copy, and compelling calls to action. Perfect for newsletters, drip campaigns, and promotional blasts.",
    features: ["Subject line optimization", "Multi-paragraph body copy", "Clear CTA with your affiliate link", "Professional tone matching"],
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
      </svg>
    ),
    color: "bg-sky-100 text-sky-600",
    title: "Twitter / X Campaign Posts",
    description:
      "Multiple tweet variations crafted for maximum engagement. Each tweet stays within the 280-character limit while naturally incorporating your affiliate link.",
    features: ["3 unique tweet variations", "Character-count optimized", "Hashtag suggestions", "Affiliate link in every tweet"],
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.774 48.774 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0z" />
      </svg>
    ),
    color: "bg-purple-100 text-purple-600",
    title: "Instagram Caption Writing",
    description:
      "Scroll-stopping Instagram captions with strategic hashtags that boost discoverability and drive traffic from your posts to your affiliate offers.",
    features: ["Engaging storytelling format", "Relevant hashtag research", "Call-to-action integration", "Affiliate link included"],
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7.5 7.5h-.75A2.25 2.25 0 004.5 9.75v7.5a2.25 2.25 0 002.25 2.25h7.5a2.25 2.25 0 002.25-2.25v-7.5a2.25 2.25 0 00-2.25-2.25h-.75m0-3l-3-3m0 0l-3 3m3-3v11.25" />
      </svg>
    ),
    color: "bg-blue-100 text-blue-600",
    title: "Facebook Post Generation",
    description:
      "Engaging Facebook posts optimized for the platform's algorithm. Longer-form social content that tells a story and drives engagement with your affiliate link.",
    features: ["Algorithm-friendly format", "Story-driven copy", "Engagement optimized", "Affiliate link woven in"],
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456z" />
      </svg>
    ),
    color: "bg-amber-100 text-amber-600",
    title: "AI Content Generation",
    description:
      "Powered by the Qwen 3.5 large language model, our AI understands product context and creates persuasive, conversion-focused marketing copy across all channels.",
    features: ["Qwen 3.5 LLM powered", "Context-aware generation", "Consistent brand voice", "Multi-format output"],
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m9.886-3.497l4.5-4.5a4.5 4.5 0 016.364 6.364l-1.757 1.757" />
      </svg>
    ),
    color: "bg-emerald-100 text-emerald-600",
    title: "Affiliate Link Integration",
    description:
      "Every piece of generated content seamlessly weaves in your affiliate link. No awkward placements — just natural, click-worthy references that drive conversions.",
    features: ["Natural link placement", "Guaranteed in every post", "Click-through optimized", "Works with any platform"],
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-linear-to-br from-gray-900 to-gray-800 text-white py-20">
        <div className="absolute inset-0">
          <svg className="absolute inset-0 w-full h-full opacity-[0.03]" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="svcgrid" width="32" height="32" patternUnits="userSpaceOnUse">
                <circle cx="16" cy="16" r="1" fill="white" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#svcgrid)" />
          </svg>
          <div className="absolute -top-20 -right-20 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center animate-fade-in-up">
          <span className="inline-block px-4 py-1.5 bg-white/10 rounded-full text-sm font-medium mb-4 border border-white/10 animate-fade-in-down">What We Offer</span>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">Our Services</h1>
          <p className="mt-4 text-lg text-gray-300 max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: "200ms", opacity: 0, animationFillMode: "forwards" }}>
            A complete suite of AI-powered marketing tools designed to help affiliates and marketers create high-converting content faster.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, i) => (
              <div key={service.title} className="group bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 p-6 flex flex-col animate-fade-in-up" style={{ animationDelay: `${i * 100}ms`, opacity: 0, animationFillMode: "forwards" }}>
                <div className={`w-12 h-12 ${service.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  {service.icon}
                </div>
                <h3 className="mt-5 text-xl font-semibold text-gray-900">{service.title}</h3>
                <p className="mt-2 text-sm text-gray-600 leading-relaxed flex-1">{service.description}</p>
                <ul className="mt-4 space-y-2">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm text-gray-700">
                      <svg className="w-4 h-4 text-blue-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Flow illustration */}
      <section className="relative bg-white py-24 overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] bg-blue-50/60 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-sm font-semibold text-blue-600 uppercase tracking-wider">The Flow</span>
            <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-gray-900">From URL to Campaign</h2>
            <p className="mt-3 text-gray-500 max-w-lg mx-auto">See how a single product link becomes a full multi-channel marketing kit in seconds.</p>
          </div>

          {/* Desktop: horizontal pipeline */}
          <div className="hidden md:block">
            <div className="grid grid-cols-5 gap-0 items-start">
              {/* Step 1: Input */}
              <div className="flex flex-col items-center text-center px-2">
                <div className="relative group">
                  <div className="absolute -inset-3 bg-gray-100 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="relative w-20 h-20 bg-white border-2 border-gray-200 rounded-2xl flex items-center justify-center shadow-sm group-hover:shadow-md group-hover:border-blue-200 transition-all duration-300">
                    <svg className="w-8 h-8 text-gray-500 group-hover:text-blue-600 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m9.886-3.497l4.5-4.5a4.5 4.5 0 016.364 6.364l-1.757 1.757" />
                    </svg>
                  </div>
                </div>
                <p className="mt-3 text-sm font-semibold text-gray-900">Paste URL</p>
                <p className="text-xs text-gray-500 mt-0.5">Product page link</p>
                {/* Mockup: URL bar */}
                <div className="mt-3 w-full bg-gray-50 border border-gray-200 rounded-lg p-2">
                  <div className="h-2 w-3/4 bg-gray-200 rounded mx-auto" />
                </div>
              </div>

              {/* Animated connector */}
              <div className="flex items-center justify-center pt-8">
                <div className="relative w-full h-0.5">
                  <div className="absolute inset-0 bg-gray-200 rounded" />
                  <div className="absolute inset-y-0 left-0 w-1/2 bg-linear-to-r from-blue-400 to-blue-300 rounded animate-shimmer" />
                  <div className="absolute -right-1.5 top-1/2 -translate-y-1/2">
                    <svg className="w-4 h-4 text-blue-400" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M13.172 12l-4.95-4.95 1.414-1.414L16 12l-6.364 6.364-1.414-1.414z" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Step 2: AI Processing */}
              <div className="flex flex-col items-center text-center px-2">
                <div className="relative">
                  {/* Pulsing ring */}
                  <div className="absolute -inset-2 bg-blue-100 rounded-2xl animate-pulse opacity-40" />
                  <div className="relative w-20 h-20 bg-linear-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center shadow-lg shadow-blue-500/30">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456z" />
                    </svg>
                  </div>
                </div>
                <p className="mt-3 text-sm font-semibold text-gray-900">AI Processes</p>
                <p className="text-xs text-gray-500 mt-0.5">Qwen 3.5 LLM</p>
                {/* Mockup: processing lines */}
                <div className="mt-3 w-full bg-blue-50 border border-blue-100 rounded-lg p-2 space-y-1.5">
                  <div className="h-1.5 w-full bg-blue-200/60 rounded animate-pulse" />
                  <div className="h-1.5 w-3/4 bg-blue-200/40 rounded animate-pulse" style={{ animationDelay: "150ms" }} />
                  <div className="h-1.5 w-1/2 bg-blue-200/30 rounded animate-pulse" style={{ animationDelay: "300ms" }} />
                </div>
              </div>

              {/* Animated connector */}
              <div className="flex items-center justify-center pt-8">
                <div className="relative w-full h-0.5">
                  <div className="absolute inset-0 bg-gray-200 rounded" />
                  <div className="absolute inset-y-0 left-0 w-1/2 bg-linear-to-r from-indigo-400 to-emerald-400 rounded animate-shimmer" />
                  <div className="absolute -right-1.5 top-1/2 -translate-y-1/2">
                    <svg className="w-4 h-4 text-emerald-400" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M13.172 12l-4.95-4.95 1.414-1.414L16 12l-6.364 6.364-1.414-1.414z" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Step 3: Output */}
              <div className="flex flex-col items-center text-center px-2">
                <div className="relative group">
                  <div className="absolute -inset-3 bg-emerald-50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="relative w-20 h-20 bg-white border-2 border-emerald-200 rounded-2xl flex items-center justify-center shadow-sm group-hover:shadow-md transition-all duration-300">
                    <svg className="w-8 h-8 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
                    </svg>
                  </div>
                </div>
                <p className="mt-3 text-sm font-semibold text-gray-900">Campaign Ready</p>
                <p className="text-xs text-gray-500 mt-0.5">Copy & publish</p>
                {/* Mockup: output cards */}
                <div className="mt-3 w-full space-y-1.5">
                  {[
                    { label: "Email", color: "bg-rose-100 border-rose-200 text-rose-700" },
                    { label: "Twitter", color: "bg-sky-100 border-sky-200 text-sky-700" },
                    { label: "Instagram", color: "bg-purple-100 border-purple-200 text-purple-700" },
                    { label: "Facebook", color: "bg-blue-100 border-blue-200 text-blue-700" },
                  ].map((ch) => (
                    <div key={ch.label} className={`${ch.color} border rounded-md py-1 text-[10px] font-semibold`}>
                      {ch.label}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Mobile: vertical pipeline */}
          <div className="md:hidden space-y-6">
            {[
              {
                icon: <svg className="w-7 h-7 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m9.886-3.497l4.5-4.5a4.5 4.5 0 016.364 6.364l-1.757 1.757" /></svg>,
                bg: "bg-white border-2 border-gray-200",
                title: "Paste Your Product URL",
                sub: "We scrape the title, description, and key details",
              },
              {
                icon: <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" /></svg>,
                bg: "bg-linear-to-br from-blue-500 to-indigo-600 shadow-lg shadow-blue-500/30",
                title: "AI Generates Content",
                sub: "Qwen 3.5 crafts platform-specific marketing copy",
              },
              {
                icon: <svg className="w-7 h-7 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" /></svg>,
                bg: "bg-white border-2 border-emerald-200",
                title: "Get Your Marketing Kit",
                sub: "Email, Twitter, Instagram & Facebook — ready to publish",
              },
            ].map((step, i) => (
              <div key={i}>
                <div className="flex items-center gap-4">
                  <div className={`w-14 h-14 ${step.bg} rounded-2xl flex items-center justify-center shrink-0`}>
                    {step.icon}
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">{step.title}</p>
                    <p className="text-sm text-gray-500">{step.sub}</p>
                  </div>
                </div>
                {i < 2 && (
                  <div className="ml-7 my-2">
                    <div className="w-0.5 h-6 bg-linear-to-b from-blue-300 to-blue-100 mx-auto" />
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Time badge */}
          <div className="mt-12 text-center">
            <div className="inline-flex items-center gap-2 bg-emerald-50 text-emerald-700 text-sm font-medium px-5 py-2.5 rounded-full border border-emerald-200">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Entire process takes under 30 seconds
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-900">Ready to Try It Out?</h2>
          <p className="mt-4 text-gray-600">Generate your first marketing campaign in under 30 seconds.</p>
          <Link href="/generate" className="mt-8 inline-flex items-center gap-2 bg-blue-600 text-white font-semibold px-8 py-3.5 rounded-lg hover:bg-blue-700 transition-colors">
            Start Generating
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </Link>
        </div>
      </section>
    </>
  );
}
