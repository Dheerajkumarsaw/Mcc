import Link from "next/link";

const features = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
      </svg>
    ),
    color: "bg-rose-100 text-rose-600",
    title: "Email Campaigns",
    description:
      "Generate compelling email snippets with subject lines, body copy, and clear calls to action that drive conversions.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
      </svg>
    ),
    color: "bg-sky-100 text-sky-600",
    title: "Twitter Posts",
    description:
      "Get multiple tweet variations optimized for engagement, each within the 280-character limit with your affiliate link.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.774 48.774 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0z" />
      </svg>
    ),
    color: "bg-purple-100 text-purple-600",
    title: "Instagram Captions",
    description:
      "Create scroll-stopping captions with relevant hashtags that boost your visibility and drive traffic.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
    color: "bg-amber-100 text-amber-600",
    title: "Instant Generation",
    description:
      "No more staring at a blank screen. Get a complete marketing kit in under 30 seconds powered by AI.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
      </svg>
    ),
    color: "bg-emerald-100 text-emerald-600",
    title: "Affiliate Optimized",
    description:
      "Every piece of content naturally integrates your affiliate link for maximum click-through rates.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m9.886-3.497l4.5-4.5a4.5 4.5 0 016.364 6.364l-1.757 1.757" />
      </svg>
    ),
    color: "bg-indigo-100 text-indigo-600",
    title: "Smart Scraping",
    description:
      "Paste any product URL and we automatically extract key details to create contextually relevant content.",
  },
];

const stats = [
  { value: "10K+", label: "Campaigns Generated" },
  { value: "95%", label: "Customer Satisfaction" },
  { value: "3x", label: "Faster Than Manual" },
  { value: "50+", label: "Countries Served" },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-linear-to-br from-blue-600 via-blue-700 to-indigo-800 text-white">
        {/* Decorative background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-24 -left-24 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl" />
          <div className="absolute top-1/2 -right-32 w-[500px] h-[500px] bg-indigo-400/15 rounded-full blur-3xl" />
          <div className="absolute -bottom-20 left-1/3 w-80 h-80 bg-purple-400/10 rounded-full blur-3xl" />
          <svg className="absolute inset-0 w-full h-full opacity-[0.04]" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left animate-fade-in-up">
              <span className="inline-block px-4 py-1.5 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium mb-6 border border-white/20 animate-fade-in-down">
                AI-Powered Marketing Suite
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-tight">
                Generate Complete Marketing Campaigns in{" "}
                <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-200 to-cyan-200">Seconds</span>
              </h1>
              <p className="mt-6 text-lg sm:text-xl text-blue-100 leading-relaxed animate-fade-in-up" style={{ animationDelay: "200ms", opacity: 0, animationFillMode: "forwards" }}>
                Paste any product URL and your affiliate link. Our AI creates
                ready-to-publish email, Twitter, and Instagram content instantly.
              </p>
              <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-in-up" style={{ animationDelay: "400ms", opacity: 0, animationFillMode: "forwards" }}>
                <Link href="/generate" className="bg-white text-blue-700 font-semibold px-8 py-3.5 rounded-lg hover:bg-blue-50 hover:scale-105 transition-all text-center shadow-lg shadow-blue-900/30">
                  Start Generating Free
                </Link>
                <Link href="/services" className="border border-white/30 text-white font-semibold px-8 py-3.5 rounded-lg hover:bg-white/10 hover:scale-105 transition-all text-center backdrop-blur-sm">
                  View Services
                </Link>
              </div>
            </div>

            {/* Dashboard mockup */}
            <div className="hidden lg:block relative animate-slide-in-right" style={{ animationDelay: "300ms", opacity: 0, animationFillMode: "forwards" }}>
              <div className="relative bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 p-6 shadow-2xl">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-3 h-3 rounded-full bg-red-400" />
                  <div className="w-3 h-3 rounded-full bg-yellow-400" />
                  <div className="w-3 h-3 rounded-full bg-green-400" />
                  <div className="ml-4 h-4 w-48 bg-white/10 rounded" />
                </div>
                <div className="space-y-3">
                  <div className="bg-white/10 rounded-lg p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-5 h-5 bg-rose-400/60 rounded" />
                      <div className="h-3 w-24 bg-white/20 rounded" />
                    </div>
                    <div className="space-y-1.5">
                      <div className="h-2 w-full bg-white/10 rounded" />
                      <div className="h-2 w-4/5 bg-white/10 rounded" />
                      <div className="h-2 w-3/5 bg-white/10 rounded" />
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="bg-white/10 rounded-lg p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <div className="w-5 h-5 bg-sky-400/60 rounded" />
                        <div className="h-3 w-16 bg-white/20 rounded" />
                      </div>
                      <div className="space-y-1.5">
                        <div className="h-2 w-full bg-white/10 rounded" />
                        <div className="h-2 w-3/4 bg-white/10 rounded" />
                      </div>
                    </div>
                    <div className="bg-white/10 rounded-lg p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <div className="w-5 h-5 bg-purple-400/60 rounded" />
                        <div className="h-3 w-20 bg-white/20 rounded" />
                      </div>
                      <div className="space-y-1.5">
                        <div className="h-2 w-full bg-white/10 rounded" />
                        <div className="h-2 w-2/3 bg-white/10 rounded" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-4 h-9 bg-white/20 rounded-lg flex items-center justify-center">
                  <div className="h-3 w-28 bg-white/30 rounded" />
                </div>
              </div>
              <div className="absolute -top-4 -right-4 bg-green-500 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg animate-bounce">
                AI Powered
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trusted By + Stats */}
      <section className="bg-linear-to-r from-gray-900 to-gray-800 text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-4xl font-bold text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-cyan-400">{stat.value}</p>
                <p className="mt-2 text-sm text-gray-400">{stat.label}</p>
              </div>
            ))}
          </div>

          {/* Divider */}
          <div className="my-10 border-t border-gray-700/50" />

          {/* Trusted By */}
          <div>
            <p className="text-center text-xs font-medium text-gray-500 uppercase tracking-wider mb-6">
              Trusted by marketers on these platforms
            </p>
            <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-5 sm:gap-x-14">
              {[
                { name: "Shopify", color: "#95BF47" },
                { name: "Amazon", color: "#FF9900" },
                { name: "Etsy", color: "#F1641E" },
                { name: "ClickBank", color: "#2EBD59" },
                { name: "ShareASale", color: "#4A9BD9" },
                { name: "CJ Affiliate", color: "#00B140" },
              ].map((brand, i) => (
                <div
                  key={brand.name}
                  className="group cursor-default animate-fade-in-up"
                  style={{ animationDelay: `${i * 100}ms`, opacity: 0, animationFillMode: "forwards" }}
                >
                  <span
                    className="text-xl sm:text-2xl font-bold tracking-tight transition-all duration-300 opacity-50 group-hover:opacity-100"
                    style={{ color: brand.color }}
                  >
                    {brand.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="bg-white py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-sm font-semibold text-blue-600 uppercase tracking-wider">Features</span>
            <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-gray-900">
              Everything You Need to Market Smarter
            </h2>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              One tool to generate multi-channel marketing content tailored to your product and audience.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, i) => (
              <div key={feature.title} className="group bg-white p-6 rounded-2xl border border-gray-100 hover:border-gray-200 shadow-sm hover:shadow-lg transition-all duration-300 animate-fade-in-up" style={{ animationDelay: `${i * 100}ms`, opacity: 0, animationFillMode: "forwards" }}>
                <div className={`w-12 h-12 ${feature.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  {feature.icon}
                </div>
                <h3 className="mt-5 text-lg font-semibold text-gray-900">{feature.title}</h3>
                <p className="mt-2 text-sm text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="relative bg-gray-50 py-24 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-blue-100/40 rounded-full blur-3xl -z-0" />
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-sm font-semibold text-blue-600 uppercase tracking-wider">How It Works</span>
            <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-gray-900">Three Simple Steps</h2>
            <p className="mt-4 text-lg text-gray-600">From product URL to full marketing campaign in seconds.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            <div className="hidden md:block absolute top-16 left-[20%] right-[20%] h-0.5 bg-linear-to-r from-blue-200 via-blue-300 to-blue-200" />
            {[
              {
                step: "01", title: "Paste Your URL",
                description: "Enter any product or article URL. Our scraper extracts the title, description, and key details automatically.",
                icon: <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m9.886-3.497l4.5-4.5a4.5 4.5 0 016.364 6.364l-1.757 1.757" /></svg>,
              },
              {
                step: "02", title: "Add Your Affiliate Link",
                description: "Provide your unique affiliate link so every piece of generated content drives traffic back to you.",
                icon: <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.042 21.672L13.684 16.6m0 0l-2.51 2.225.569-9.47 5.227 7.917-3.286-.672zM12 2.25V4.5m5.834.166l-1.591 1.591M20.25 10.5H18M7.757 14.743l-1.59 1.59M6 10.5H3.75m4.007-4.243l-1.59-1.59" /></svg>,
              },
              {
                step: "03", title: "Get Your Marketing Kit",
                description: "Receive ready-to-use email copy, Twitter posts, and an Instagram caption. Copy and publish instantly.",
                icon: <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" /></svg>,
              },
            ].map((item, i) => (
              <div key={item.step} className="relative text-center bg-white rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-md transition-shadow animate-fade-in-up" style={{ animationDelay: `${i * 150}ms`, opacity: 0, animationFillMode: "forwards" }}>
                <div className="w-16 h-16 bg-linear-to-br from-blue-500 to-indigo-600 text-white rounded-2xl flex items-center justify-center mx-auto shadow-lg shadow-blue-500/25">
                  {item.icon}
                </div>
                <span className="inline-block mt-4 text-xs font-bold text-blue-600 bg-blue-50 px-3 py-1 rounded-full">STEP {item.step}</span>
                <h3 className="mt-3 text-lg font-semibold text-gray-900">{item.title}</h3>
                <p className="mt-2 text-sm text-gray-600 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* See It In Action */}
      <section className="bg-white py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Browser mockup */}
            <div className="relative animate-fade-in-up" style={{ animationDelay: "100ms", opacity: 0, animationFillMode: "forwards" }}>
              <div className="bg-gray-900 rounded-xl overflow-hidden shadow-2xl hover:shadow-3xl transition-shadow duration-500">
                <div className="flex items-center gap-2 px-4 py-3 bg-gray-800">
                  <div className="w-3 h-3 rounded-full bg-red-500" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500" />
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                  <div className="ml-3 flex-1 h-6 bg-gray-700 rounded-md flex items-center px-3">
                    <span className="text-[10px] text-gray-400">marketingcc.com/generate</span>
                  </div>
                </div>
                <div className="p-6 bg-gray-50">
                  <div className="bg-white rounded-lg p-5 border border-gray-200">
                    <div className="h-3 w-40 bg-gray-800 rounded mb-4" />
                    <div className="space-y-3">
                      <div className="h-10 bg-gray-100 rounded-lg border border-gray-200" />
                      <div className="h-10 bg-gray-100 rounded-lg border border-gray-200" />
                      <div className="h-10 bg-blue-600 rounded-lg" />
                    </div>
                  </div>
                  <div className="mt-4 grid grid-cols-2 gap-3">
                    <div className="bg-white rounded-lg p-4 border border-gray-200">
                      <div className="h-2 w-20 bg-rose-300 rounded mb-3" />
                      <div className="space-y-1.5">
                        <div className="h-1.5 w-full bg-gray-100 rounded" />
                        <div className="h-1.5 w-4/5 bg-gray-100 rounded" />
                        <div className="h-1.5 w-3/5 bg-gray-100 rounded" />
                      </div>
                    </div>
                    <div className="bg-white rounded-lg p-4 border border-gray-200">
                      <div className="h-2 w-20 bg-sky-300 rounded mb-3" />
                      <div className="space-y-1.5">
                        <div className="h-1.5 w-full bg-gray-100 rounded" />
                        <div className="h-1.5 w-3/4 bg-gray-100 rounded" />
                        <div className="h-1.5 w-2/3 bg-gray-100 rounded" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-lg border border-gray-100 px-4 py-3 flex items-center gap-3 animate-float">
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs font-semibold text-gray-900">Campaign Ready</p>
                  <p className="text-[10px] text-gray-500">Generated in 8s</p>
                </div>
              </div>
            </div>

            <div>
              <span className="text-sm font-semibold text-blue-600 uppercase tracking-wider animate-fade-in-up" style={{ animationDelay: "200ms", opacity: 0, animationFillMode: "forwards" }}>See It In Action</span>
              <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-gray-900 animate-fade-in-up" style={{ animationDelay: "300ms", opacity: 0, animationFillMode: "forwards" }}>Beautiful Results, Zero Effort</h2>
              <p className="mt-4 text-gray-600 leading-relaxed">
                Our AI analyzes your product page and crafts platform-specific marketing content that sounds human, reads naturally, and drives clicks.
              </p>
              <ul className="mt-8 space-y-4">
                {[
                  "Email with subject line, body copy & CTA",
                  "3 unique Twitter posts under 280 chars",
                  "Instagram caption with hashtags",
                  "Affiliate link in every content piece",
                  "One-click copy for each section",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <div className="mt-0.5 w-5 h-5 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-3 h-3 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
              <Link href="/generate" className="mt-8 inline-flex items-center gap-2 bg-blue-600 text-white font-semibold px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
                Try It Now
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-linear-to-r from-blue-600 to-indigo-700 text-white py-20">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-white/5 rounded-full" />
          <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-white/5 rounded-full" />
        </div>
        <div className="relative max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold">Ready to Supercharge Your Marketing?</h2>
          <p className="mt-4 text-lg text-blue-100 max-w-2xl mx-auto">
            Join thousands of marketers who save hours every week with AI-generated campaigns.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/generate" className="bg-white text-blue-700 font-semibold px-8 py-3.5 rounded-lg hover:bg-blue-50 transition-colors shadow-lg">
              Generate Your First Campaign
            </Link>
            <Link href="/contact" className="border border-white/30 backdrop-blur-sm text-white font-semibold px-8 py-3.5 rounded-lg hover:bg-white/10 transition-colors">
              Talk to Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
