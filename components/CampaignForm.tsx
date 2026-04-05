"use client";

import { useState, useEffect } from "react";
import { CampaignContent, GenerateResponse } from "@/lib/types";

interface CampaignFormProps {
  onResult: (data: CampaignContent) => void;
  onError: (error: string) => void;
}

const loadingSteps = [
  { text: "Scraping product page...", icon: "link" },
  { text: "Analyzing product details...", icon: "search" },
  { text: "Generating email content...", icon: "mail" },
  { text: "Crafting Twitter posts...", icon: "twitter" },
  { text: "Writing Instagram caption...", icon: "camera" },
  { text: "Creating Facebook post...", icon: "share" },
  { text: "Finalizing your campaign...", icon: "check" },
];

export default function CampaignForm({ onResult, onError }: CampaignFormProps) {
  const [productUrl, setProductUrl] = useState("");
  const [affiliateLink, setAffiliateLink] = useState("");
  const [loading, setLoading] = useState(false);
  const [loadingStep, setLoadingStep] = useState(0);

  useEffect(() => {
    if (!loading) {
      setLoadingStep(0);
      return;
    }
    const interval = setInterval(() => {
      setLoadingStep((prev) => (prev + 1) % loadingSteps.length);
    }, 2500);
    return () => clearInterval(interval);
  }, [loading]);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setLoadingStep(0);

    try {
      const res = await fetch("/api/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ productUrl, affiliateLink }),
      });

      const data: GenerateResponse = await res.json();

      if (data.success) {
        onResult(data.data);
      } else {
        onError(data.error);
      }
    } catch {
      onError("Network error. Please check your connection and try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="productUrl" className="block text-sm font-medium text-gray-700 mb-1">
            Target Article / Product URL
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m9.886-3.497l4.5-4.5a4.5 4.5 0 016.364 6.364l-1.757 1.757" />
              </svg>
            </div>
            <input
              id="productUrl"
              type="url"
              required
              value={productUrl}
              onChange={(e) => setProductUrl(e.target.value)}
              placeholder="https://example.com/product"
              disabled={loading}
              className="w-full rounded-lg border border-gray-300 pl-10 pr-4 py-3 text-gray-900 placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:outline-none transition-shadow disabled:opacity-50 disabled:bg-gray-50"
            />
          </div>
        </div>

        <div>
          <label htmlFor="affiliateLink" className="block text-sm font-medium text-gray-700 mb-1">
            Your Affiliate Link
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.042 21.672L13.684 16.6m0 0l-2.51 2.225.569-9.47 5.227 7.917-3.286-.672zM12 2.25V4.5m5.834.166l-1.591 1.591M20.25 10.5H18M7.757 14.743l-1.59 1.59M6 10.5H3.75m4.007-4.243l-1.59-1.59" />
              </svg>
            </div>
            <input
              id="affiliateLink"
              type="url"
              required
              value={affiliateLink}
              onChange={(e) => setAffiliateLink(e.target.value)}
              placeholder="https://yourlink.com/ref/123"
              disabled={loading}
              className="w-full rounded-lg border border-gray-300 pl-10 pr-4 py-3 text-gray-900 placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:outline-none transition-shadow disabled:opacity-50 disabled:bg-gray-50"
            />
          </div>
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3.5 px-6 rounded-lg transition-all disabled:cursor-not-allowed flex items-center justify-center gap-2 shadow-sm hover:shadow-md disabled:shadow-none"
        >
          {loading ? (
            <>
              <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
              </svg>
              Generating Campaign...
            </>
          ) : (
            <>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
              </svg>
              Generate Marketing Kit
            </>
          )}
        </button>
      </form>

      {/* Animated loading state */}
      {loading && (
        <div className="mt-8 bg-linear-to-br from-blue-50 to-indigo-50 rounded-xl border border-blue-100 p-6">
          {/* Progress bar */}
          <div className="h-1.5 bg-blue-100 rounded-full overflow-hidden mb-5">
            <div className="h-full bg-linear-to-r from-blue-500 to-indigo-500 rounded-full animate-pulse" style={{ width: `${Math.min(((loadingStep + 1) / loadingSteps.length) * 100, 95)}%`, transition: "width 0.5s ease" }} />
          </div>

          {/* Step indicators */}
          <div className="space-y-2">
            {loadingSteps.map((step, i) => (
              <div
                key={step.text}
                className={`flex items-center gap-3 py-1.5 px-3 rounded-lg transition-all duration-300 ${
                  i === loadingStep
                    ? "bg-white shadow-sm border border-blue-100"
                    : i < loadingStep
                    ? "opacity-50"
                    : "opacity-30"
                }`}
              >
                {i < loadingStep ? (
                  <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center shrink-0">
                    <svg className="w-3 h-3 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                ) : i === loadingStep ? (
                  <div className="w-5 h-5 shrink-0">
                    <svg className="animate-spin w-5 h-5 text-blue-600" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                    </svg>
                  </div>
                ) : (
                  <div className="w-5 h-5 bg-gray-200 rounded-full shrink-0" />
                )}
                <span className={`text-sm ${i === loadingStep ? "text-blue-700 font-medium" : "text-gray-500"}`}>
                  {step.text}
                </span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
