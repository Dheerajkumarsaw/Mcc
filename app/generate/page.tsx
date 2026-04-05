"use client";

import { useState } from "react";
import CampaignForm from "@/components/CampaignForm";
import ResultCard from "@/components/ResultCard";
import { CampaignContent } from "@/lib/types";

export default function GeneratePage() {
  const [result, setResult] = useState<CampaignContent | null>(null);
  const [error, setError] = useState<string | null>(null);

  function handleResult(data: CampaignContent) {
    setResult(data);
    setError(null);
  }

  function handleError(message: string) {
    setError(message);
    setResult(null);
  }

  return (
    <>
      {/* Hero with animated visuals */}
      <section className="relative overflow-hidden bg-linear-to-br from-blue-600 via-blue-700 to-indigo-800 text-white py-16">
        {/* Animated background elements */}
        <div className="absolute inset-0">
          <svg className="absolute inset-0 w-full h-full opacity-[0.04]" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="gengrid" width="24" height="24" patternUnits="userSpaceOnUse">
                <circle cx="12" cy="12" r="1" fill="white" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#gengrid)" />
          </svg>
          <div className="absolute -top-20 -right-20 w-72 h-72 bg-blue-400/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute -bottom-32 -left-20 w-80 h-80 bg-indigo-400/10 rounded-full blur-3xl animate-pulse animation-delay-300" />

          {/* Floating platform icons */}
          <div className="hidden lg:block">
            {/* Email icon */}
            <div className="absolute top-8 left-[10%] animate-float">
              <div className="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center border border-white/10">
                <svg className="w-5 h-5 text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>
              </div>
            </div>
            {/* Twitter icon */}
            <div className="absolute top-12 right-[12%] animate-float animation-delay-200">
              <div className="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center border border-white/10">
                <svg className="w-5 h-5 text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
                </svg>
              </div>
            </div>
            {/* Instagram icon */}
            <div className="absolute bottom-6 left-[18%] animate-float animation-delay-400">
              <div className="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center border border-white/10">
                <svg className="w-5 h-5 text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.774 48.774 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0z" />
                </svg>
              </div>
            </div>
            {/* Facebook icon */}
            <div className="absolute bottom-10 right-[15%] animate-float animation-delay-100">
              <div className="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center border border-white/10">
                <svg className="w-5 h-5 text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7.5 7.5h-.75A2.25 2.25 0 004.5 9.75v7.5a2.25 2.25 0 002.25 2.25h7.5a2.25 2.25 0 002.25-2.25v-7.5a2.25 2.25 0 00-2.25-2.25h-.75m0-3l-3-3m0 0l-3 3m3-3v11.25" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        <div className="relative max-w-3xl mx-auto px-4 text-center animate-fade-in-up">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-1.5 text-sm font-medium mb-4 border border-white/20">
            <svg className="w-4 h-4 animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
            </svg>
            AI Generator
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">
            Generate Your Marketing Kit
          </h1>
          <p className="mt-3 text-blue-100 text-lg">
            Paste a product URL and your affiliate link to get instant marketing
            content for email, Twitter, Instagram, and Facebook.
          </p>

          {/* Animated channel badges */}
          <div className="mt-6 flex flex-wrap justify-center gap-2">
            {[
              { label: "Email", color: "bg-rose-500/20 border-rose-400/30" },
              { label: "Twitter", color: "bg-sky-500/20 border-sky-400/30" },
              { label: "Instagram", color: "bg-purple-500/20 border-purple-400/30" },
              { label: "Facebook", color: "bg-blue-500/20 border-blue-400/30" },
            ].map((ch, i) => (
              <span
                key={ch.label}
                className={`inline-block px-3 py-1 rounded-full text-xs font-medium border ${ch.color} backdrop-blur-sm animate-fade-in-up`}
                style={{ animationDelay: `${(i + 1) * 100}ms`, opacity: 0, animationFillMode: "forwards" }}
              >
                {ch.label}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main form — entrance animation */}
            <div className="lg:col-span-2 animate-fade-in-up" style={{ animationDelay: "150ms", opacity: 0, animationFillMode: "forwards" }}>
              <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 sm:p-8">
                <CampaignForm onResult={handleResult} onError={handleError} />
              </div>
            </div>

            {/* Tips sidebar — staggered animation */}
            <div className="space-y-4">
              {[
                {
                  icon: (
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
                    </svg>
                  ),
                  title: "Best Results",
                  text: "Use product pages with detailed descriptions for richer content.",
                  color: "bg-amber-50 text-amber-600 border-amber-100",
                },
                {
                  icon: (
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m9.886-3.497l4.5-4.5a4.5 4.5 0 016.364 6.364l-1.757 1.757" />
                    </svg>
                  ),
                  title: "Affiliate Link",
                  text: "Your link is guaranteed in every piece of generated content.",
                  color: "bg-green-50 text-green-600 border-green-100",
                },
                {
                  icon: (
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 01-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 011.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 00-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 01-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 00-3.375-3.375h-1.5a1.125 1.125 0 01-1.125-1.125v-1.5a3.375 3.375 0 00-3.375-3.375H9.75" />
                    </svg>
                  ),
                  title: "Easy Copy",
                  text: "Use the copy button on each card to grab content instantly.",
                  color: "bg-blue-50 text-blue-600 border-blue-100",
                },
              ].map((tip, i) => (
                <div
                  key={tip.title}
                  className="animate-slide-in-right bg-white rounded-xl border border-gray-100 shadow-sm p-4 flex gap-3 hover:shadow-md transition-shadow"
                  style={{ animationDelay: `${(i + 2) * 150}ms`, opacity: 0, animationFillMode: "forwards" }}
                >
                  <div className={`w-8 h-8 ${tip.color} rounded-lg flex items-center justify-center shrink-0 border`}>
                    {tip.icon}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-900">{tip.title}</p>
                    <p className="text-xs text-gray-500 mt-0.5">{tip.text}</p>
                  </div>
                </div>
              ))}

              {/* Visual: mini preview of what you get */}
              <div
                className="animate-slide-in-right bg-linear-to-br from-blue-50 to-indigo-50 rounded-xl border border-blue-100 p-4"
                style={{ animationDelay: "600ms", opacity: 0, animationFillMode: "forwards" }}
              >
                <p className="text-xs font-semibold text-blue-700 mb-3">What you&apos;ll get:</p>
                <div className="space-y-2">
                  {[
                    { label: "Email Snippet", color: "bg-rose-400" },
                    { label: "3 Twitter Posts", color: "bg-sky-400" },
                    { label: "Instagram Caption", color: "bg-purple-400" },
                    { label: "Facebook Post", color: "bg-blue-400" },
                  ].map((item) => (
                    <div key={item.label} className="flex items-center gap-2">
                      <div className={`w-2 h-2 ${item.color} rounded-full`} />
                      <span className="text-xs text-gray-600">{item.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Error */}
          {error && (
            <div className="mt-6 p-4 bg-red-50 border border-red-200 rounded-lg text-red-700 text-sm text-center flex items-center justify-center gap-2 animate-fade-in-up">
              <svg className="w-5 h-5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
              </svg>
              {error}
            </div>
          )}

          {/* Results with staggered entrance */}
          {result && (
            <div className="mt-10 space-y-6">
              <div className="text-center animate-scale-in">
                <div className="inline-flex items-center gap-2 bg-green-50 text-green-700 text-sm font-medium px-4 py-2 rounded-full border border-green-200 animate-pulse-glow">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Campaign Generated Successfully
                </div>
                <h2 className="mt-3 text-2xl font-bold text-gray-900">Your Marketing Kit</h2>
              </div>
              <div className="animate-fade-in-up" style={{ animationDelay: "100ms", opacity: 0, animationFillMode: "forwards" }}>
                <ResultCard title="Email Snippet" icon={"\u2709\uFE0F"} content={result.email} visual={result.visuals?.email} gradient="from-rose-500 to-pink-600" />
              </div>
              <div className="animate-fade-in-up" style={{ animationDelay: "200ms", opacity: 0, animationFillMode: "forwards" }}>
                <ResultCard title="Twitter Posts" icon={"\uD83D\uDC26"} content={result.twitter} visual={result.visuals?.twitter} gradient="from-sky-500 to-blue-600" />
              </div>
              <div className="animate-fade-in-up" style={{ animationDelay: "300ms", opacity: 0, animationFillMode: "forwards" }}>
                <ResultCard title="Instagram Caption" icon={"\uD83D\uDCF8"} content={result.instagram} visual={result.visuals?.instagram} gradient="from-purple-500 to-violet-600" />
              </div>
              <div className="animate-fade-in-up" style={{ animationDelay: "400ms", opacity: 0, animationFillMode: "forwards" }}>
                <ResultCard title="Facebook Post" icon={"\uD83D\uDCCB"} content={result.facebook} visual={result.visuals?.facebook} gradient="from-blue-500 to-indigo-600" />
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
