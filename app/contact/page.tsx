"use client";

import { useState } from "react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-linear-to-br from-gray-900 to-gray-800 text-white py-20">
        <div className="absolute inset-0">
          <div className="absolute top-10 right-20 w-60 h-60 bg-blue-500/8 rounded-full blur-3xl" />
          <div className="absolute bottom-10 left-10 w-72 h-72 bg-purple-500/8 rounded-full blur-3xl" />
          <svg className="absolute inset-0 w-full h-full opacity-[0.03]" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="ctgrid" width="32" height="32" patternUnits="userSpaceOnUse">
                <circle cx="16" cy="16" r="1" fill="white" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#ctgrid)" />
          </svg>
        </div>
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center animate-fade-in-up">
          <span className="inline-block px-4 py-1.5 bg-white/10 rounded-full text-sm font-medium mb-4 border border-white/10 animate-fade-in-down">Get In Touch</span>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">Contact Us</h1>
          <p className="mt-4 text-lg text-gray-300 max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: "200ms", opacity: 0, animationFillMode: "forwards" }}>
            Have a question, feature request, or just want to say hello? We&apos;d love to hear from you.
          </p>
        </div>
      </section>

      {/* Main content */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Contact cards row */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-14">
            {[
              {
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                  </svg>
                ),
                color: "bg-rose-50 text-rose-600 border-rose-100",
                title: "Email Us",
                value: "hello@marketingcc.com",
                sub: "We reply within 24 hours",
              },
              {
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                  </svg>
                ),
                color: "bg-blue-50 text-blue-600 border-blue-100",
                title: "Call Us",
                value: "+1 (555) 123-4567",
                sub: "Mon-Fri, 9am-6pm PST",
              },
              {
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                  </svg>
                ),
                color: "bg-emerald-50 text-emerald-600 border-emerald-100",
                title: "Visit Us",
                value: "San Francisco, CA",
                sub: "123 Market Street, Suite 400",
              },
            ].map((card, i) => (
              <div
                key={card.title}
                className="relative group bg-white rounded-2xl border border-gray-100 p-6 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1 animate-fade-in-up"
                style={{ animationDelay: `${i * 120}ms`, opacity: 0, animationFillMode: "forwards" }}
              >
                <div className={`w-14 h-14 ${card.color} border rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300`}>
                  {card.icon}
                </div>
                <h3 className="mt-4 font-semibold text-gray-900">{card.title}</h3>
                <p className="mt-1 text-sm text-gray-800 font-medium">{card.value}</p>
                <p className="text-xs text-gray-500 mt-0.5">{card.sub}</p>
              </div>
            ))}
          </div>

          {/* Form + Right side */}
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
            {/* Contact Form — takes 3 cols */}
            <div className="lg:col-span-3 bg-gray-50 rounded-2xl border border-gray-100 p-6 sm:p-8 animate-fade-in-up" style={{ animationDelay: "200ms", opacity: 0, animationFillMode: "forwards" }}>
              {submitted ? (
                <div className="text-center py-16 animate-scale-in">
                  <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-5 animate-pulse-glow">
                    <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Message Sent!</h3>
                  <p className="mt-2 text-gray-600 max-w-sm mx-auto">
                    Thanks for reaching out. We&apos;ll get back to you within 24 hours.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-6 text-sm text-blue-600 hover:text-blue-700 font-medium"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
                      </svg>
                    </div>
                    <div>
                      <h2 className="text-xl font-bold text-gray-900">Send a Message</h2>
                      <p className="text-xs text-gray-500">We&apos;ll respond as quickly as possible</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                      <input
                        id="name"
                        type="text"
                        required
                        placeholder="John Doe"
                        className="w-full rounded-lg border border-gray-200 bg-white px-4 py-2.5 text-gray-900 placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:outline-none text-sm"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                      <input
                        id="email"
                        type="email"
                        required
                        placeholder="john@example.com"
                        className="w-full rounded-lg border border-gray-200 bg-white px-4 py-2.5 text-gray-900 placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:outline-none text-sm"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                    <input
                      id="subject"
                      type="text"
                      required
                      placeholder="How can we help?"
                      className="w-full rounded-lg border border-gray-200 bg-white px-4 py-2.5 text-gray-900 placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:outline-none text-sm"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                    <textarea
                      id="message"
                      required
                      rows={5}
                      placeholder="Tell us more..."
                      className="w-full rounded-lg border border-gray-200 bg-white px-4 py-2.5 text-gray-900 placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:outline-none resize-none text-sm"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-all hover:shadow-lg flex items-center justify-center gap-2"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
                    </svg>
                    Send Message
                  </button>
                </form>
              )}
            </div>

            {/* Right column — 2 cols */}
            <div className="lg:col-span-2 space-y-6 animate-slide-in-right" style={{ animationDelay: "300ms", opacity: 0, animationFillMode: "forwards" }}>
              {/* Map placeholder */}
              <div className="relative bg-linear-to-br from-blue-50 to-indigo-50 rounded-2xl border border-blue-100 h-52 overflow-hidden">
                {/* Abstract map visual */}
                <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                  {/* Roads / lines */}
                  <path d="M0 100 Q100 80 200 100 T400 100" stroke="#cbd5e1" strokeWidth="2" fill="none" />
                  <path d="M0 140 Q150 120 250 140 T400 130" stroke="#e2e8f0" strokeWidth="1.5" fill="none" />
                  <path d="M0 60 Q120 70 200 50 T400 70" stroke="#e2e8f0" strokeWidth="1.5" fill="none" />
                  <path d="M100 0 Q110 100 100 200" stroke="#e2e8f0" strokeWidth="1.5" fill="none" />
                  <path d="M250 0 Q240 80 260 200" stroke="#e2e8f0" strokeWidth="1.5" fill="none" />
                  <path d="M350 0 Q340 100 350 200" stroke="#e2e8f0" strokeWidth="1" fill="none" />
                  {/* Blocks */}
                  <rect x="120" y="70" width="30" height="20" rx="3" fill="#e2e8f0" />
                  <rect x="170" y="110" width="40" height="15" rx="3" fill="#e2e8f0" />
                  <rect x="260" y="80" width="25" height="25" rx="3" fill="#e2e8f0" />
                  <rect x="50" y="120" width="35" height="18" rx="3" fill="#e2e8f0" />
                  <rect x="310" y="105" width="30" height="22" rx="3" fill="#e2e8f0" />
                </svg>
                {/* Pin */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative">
                    <div className="absolute inset-0 bg-blue-500/20 rounded-full animate-ping" style={{ animationDuration: "2s" }} />
                    <div className="relative w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center shadow-lg shadow-blue-600/30">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="absolute bottom-3 left-0 right-0 text-center">
                  <span className="inline-block bg-white/90 backdrop-blur-sm text-xs font-medium text-gray-700 px-3 py-1 rounded-full shadow-sm border border-gray-200">
                    123 Market St, San Francisco, CA
                  </span>
                </div>
              </div>

              {/* FAQ */}
              <div className="bg-gray-50 rounded-2xl border border-gray-100 p-6">
                <h3 className="font-semibold text-gray-900 mb-5 flex items-center gap-2">
                  <div className="w-8 h-8 bg-amber-100 text-amber-600 rounded-lg flex items-center justify-center">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z" />
                    </svg>
                  </div>
                  Quick Answers
                </h3>
                <div className="space-y-4">
                  {[
                    { q: "Is it free to use?", a: "Yes! Generate campaigns at no cost. Premium features coming soon." },
                    { q: "What URLs are supported?", a: "Any publicly accessible product or article page works great." },
                    { q: "Multiple affiliate platforms?", a: "Absolutely. Amazon, ShareASale, CJ, or any link works." },
                    { q: "How fast is generation?", a: "Most campaigns are ready in 10-20 seconds." },
                  ].map((faq) => (
                    <div key={faq.q} className="border-b border-gray-200 pb-3 last:border-0 last:pb-0">
                      <p className="text-sm font-medium text-gray-900">{faq.q}</p>
                      <p className="text-sm text-gray-500 mt-1">{faq.a}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Response time badge */}
              <div className="bg-linear-to-br from-blue-600 to-indigo-700 rounded-2xl p-5 text-white text-center">
                <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <p className="font-bold text-lg">Average Response Time</p>
                <p className="text-3xl font-bold mt-1 text-transparent bg-clip-text bg-linear-to-r from-blue-200 to-cyan-200">&lt; 4 Hours</p>
                <p className="text-blue-200 text-xs mt-2">During business hours (Mon-Fri)</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
